<script lang="ts">
	import { onMount } from 'svelte'
	import PocketBase from 'pocketbase'
	import SignIn from '$lib/components/sign_in.svelte'

	const client = new PocketBase('https://api.sorenogconnie60.dk')
	let orders = []
	let authendicated: boolean
	let totalTime: number

	const getOrders = async () => {
		orders = await client.records.getFullList('fodnus', 200 /* batch size */, {
			sort: 'created'
		})
	}

	const deleteOrder = async (id: string) => {
		await client.records.delete('fodnus', id)
	}

	const updateOrder = async (order) => {
		order.completed = !order.completed
		const record = await client.records.update('fodnus', order.id, order)
	}

	$: if (authendicated) {
		client.realtime.subscribe('fodnus', async function (e) {
			await getOrders()
		})
	}

	$: if (orders) {
		let num = 0
		for (let order of orders) {
			if (order.completed) {
				num += order.duration
			}
		}
		totalTime = num
	}
</script>

<svelte:head>
	<title>Fodnus bestillinger 🦶</title>
</svelte:head>

{#if authendicated}
	<div class="flex justify-center pt-3">
		<div class="grid h-20 w-96 card bg-neutral rounded-box place-items-center">
			<span class="text-xl"><b>Camillas fodnus bestillinger 🦶</b></span>
		</div>
	</div>
	<div class="overflow-x-auto shadow-lg py-5">
		<table class="table table-zebra w-full">
			<thead>
				<tr>
					<td>
						<div class="flex flex-row gap-2 place-items-center">
							<button
								on:click={() => {
									const confirmed = confirm(
										`Bekræft! - Er du sikker på du vil slette alle ${orders.length} ordre?`
									)
									if (confirmed) {
										for (const order of orders) {
											deleteOrder(order.id)
										}
									}
								}}
								class="btn btn-error btn-outline"
							>
								<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
									><path
										d="M19 24h-14c-1.104 0-2-.896-2-2v-17h-1v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2h-1v17c0 1.104-.896 2-2 2zm0-19h-14v16.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-16.5zm-9 4c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm6 0c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm-2-7h-4v1h4v-1z"
									/></svg
								>
							</button>
							<h1 class="text-xl">{orders.length}</h1>
						</div>
					</td>
					<th>Tidspunkt</th>
					<th>Beskrivelse</th>
					<th>Varighed</th>
					<th>Status</th>
				</tr>
			</thead>
			<tbody>
				{#await getOrders() then}
					{#each orders.sort((a, b) => a.completed - b.completed) as order, i}
						<tr>
							<td>
								<div class="flex flex-row gap-2 place-items-center">
									<button on:click={deleteOrder(order.id)} class="btn btn-square btn-outline">
										<svg
											width="24"
											height="24"
											xmlns="http://www.w3.org/2000/svg"
											fill="currentColor"
											><path
												d="M19 24h-14c-1.104 0-2-.896-2-2v-17h-1v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2h-1v17c0 1.104-.896 2-2 2zm0-19h-14v16.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-16.5zm-9 4c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm6 0c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm-2-7h-4v1h4v-1z"
											/></svg
										>
									</button>

									<h1 class="text-xl">{i + 1}</h1>
								</div>
							</td>
							<td
								>{new Date(order.date).toLocaleString([], {
									dateStyle: 'short',
									timeStyle: 'short'
								})}</td
							>
							<td>{order.description}</td>
							<td>{order.duration} minutter</td>
							<td>
								<div class="flex flex-row gap-2 place-items-center">
									{#if order.completed}
										<button on:click={updateOrder(order)} class="btn btn-square btn-success">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="currentColor"
												><path
													d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
												/></svg
											>
										</button>
									{:else}
										<button on:click={updateOrder(order)} class="btn btn-square btn-outline">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="currentColor"
												><path
													d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
												/></svg
											>
										</button>
									{/if}
								</div>
							</td>
						</tr>
					{/each}
				{/await}
			</tbody>
		</table>
	</div>
	<div class="flex justify-center py-5">
		<p>Tid givet fodnus: {totalTime} minutter</p>
	</div>
	<div class="flex justify-center pb-5">
		<button
			on:click={() => {
				client.authStore.clear()
				authendicated = false
			}}
			class="btn btn-primary">Log ud</button
		>
	</div>
{:else}
	<SignIn bind:authendicated />
{/if}
