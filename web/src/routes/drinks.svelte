<script lang="ts">
	import PocketBase from 'pocketbase'
	import { fade } from 'svelte/transition'

	const client = new PocketBase('https://api.sorenogconnie60.dk')
	const drinks = ['Rom & Cola', 'Mojito', 'Gin & Tonic', 'Moscow Mule', 'Dark & Stormy', 'Vodka Juice', 'Aperol']

	let record = undefined
	let chosenDrink: string
	let name: string
	let complete: bool
	let loading: bool

	const randomDrink = () => {
		let random = drinks.sort(() => 0.5 - Math.random())[0]
		while (random === chosenDrink) {
			random = drinks.sort(() => 0.5 - Math.random())[0]
		}
		chosenDrink = random
	}

	const createDrink = async () => {
		record = await client.records.create('drinks', {
			name: name,
			drink_type: chosenDrink
		})
		complete = true
		chosenDrink = 'Vælg din drink'
		loading = false
	}
</script>

<svelte:head>
	<title>2x 60 års! - Bestil drinks 🍺🍹</title>
</svelte:head>

<div class="flex justify-center pt-3">
	<div class="h-72 w-96 card bg-neutral rounded-box place-items-center">
		<span class="text-xl py-2"><b>Bestil din drink her!</b></span>
		<div style="width:100%;height:0;padding-bottom:75%;position:relative;">
			<iframe
				src="https://giphy.com/embed/e6TR9n00dL3JS"
				width="100%"
				height="100%"
				style="position:absolute"
				frameBorder="0"
				class="giphy-embed"
			/>
		</div>
	</div>
</div>

<div class="flex justify-center py-3">
	<div class="grid h-fit w-96 card bg-neutral rounded-box place-items-center p-5">
		<input
			bind:value={name}
			type="text"
			placeholder="Indtast dit navn her"
			class="input input-bordered w-full mb-2"
		/>
		<div class="form-control flex flex-row w-full">
			<select bind:value={chosenDrink} class="select select-bordered w-5/6 mb-2">
				<option disabled selected>Vælg din drink</option>
				{#each drinks as drink}
					<option>{drink}</option>
				{/each}
			</select>
			<button on:click={randomDrink} class="btn btn-primary btn-square ml-2 mb-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="currentColor"
					><path
						d="M18 9v-3c-1 0-3.308-.188-4.506 2.216l-4.218 8.461c-1.015 2.036-3.094 3.323-5.37 3.323h-3.906v-2h3.906c1.517 0 2.903-.858 3.58-2.216l4.218-8.461c1.356-2.721 3.674-3.323 6.296-3.323v-3l6 4-6 4zm-9.463 1.324l1.117-2.242c-1.235-2.479-2.899-4.082-5.748-4.082h-3.906v2h3.906c2.872 0 3.644 2.343 4.631 4.324zm15.463 8.676l-6-4v3c-3.78 0-4.019-1.238-5.556-4.322l-1.118 2.241c1.021 2.049 2.1 4.081 6.674 4.081v3l6-4z"
					/></svg
				>
			</button>
		</div>
		{#if name && chosenDrink != 'Vælg din drink'}
			<button
				on:click={() => {
					loading = true
					createDrink()
					loading = false
				}}
				class="btn btn-primary pt-1">Bestil</button
			>
		{:else if loading}
			<button class="btn loading">loading</button>
		{:else}
			<button class="btn pt-1" disabled="disabled">Indtast navn og vælg drink</button>
		{/if}
		{#if complete}
			<div transition:fade class="alert alert-success absolute bottom-3 w-80 shadow-lg">
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="stroke-current flex-shrink-0 h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
						/></svg
					>
					<span>Bestilling gennemført!</span>
				</div>
				<div class="flex-none">
					<button
						on:click={() => {
							complete = false
						}}
						class="btn btn-sm">ok</button
					>
				</div>
			</div>
		{/if}
	</div>
</div>
