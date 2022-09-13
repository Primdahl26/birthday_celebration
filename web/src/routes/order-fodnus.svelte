<script lang="ts">
	import PocketBase from 'pocketbase'
	import { fade } from 'svelte/transition'
	import { DateInput } from 'date-picker-svelte'

	const client = new PocketBase('https://api.sorenogconnie60.dk')

	let duration
	let date: datetime
	let description = ''

	let complete: bool
	let loading: bool

	const createOrder = async () => {
		console.log(duration)
		const record = await client.records.create('fodnus', {
			date: date,
			description: description,
			duration: duration,
			accepted: false
		})
		complete = true
		duration = 'Vælg varighed'
	}
</script>

<svelte:head>
	<title>Bestil fodnus</title>
</svelte:head>

<div class="flex justify-center pt-3">
	<div class="h-72 w-96 card bg-neutral rounded-box place-items-center">
		<span class="text-xl py-2"><b>Bestil fodnus her!</b></span>
		<div style="width:100%;height:0;padding-bottom:75%;position:relative;">
			<iframe
				src="https://giphy.com/embed/kddJ9YPFiEhmCyysi1"
				width="480"
				height="270"
				frameBorder="0"
			/>
		</div>
	</div>
</div>

<div class="flex justify-center pt-3">
	<div class="static h-20 w-96 card bg-neutral rounded-box items-center p-5">
		<div class="absolute">
			<DateInput
				closeOnSelection={true}
				bind:value={date}
				format={'MM-dd HH:mm'}
				placeholder={'Dato & tidspunkt'}
				min={new Date()}
			/>
		</div>
	</div>
</div>
<div class="flex justify-center py-3">
	<div class="grid w-96 card bg-neutral rounded-box place-items-center p-5">
		<input
			bind:value={description}
			type="text"
			placeholder="Beskrivelse"
			class="input input-bordered w-full mb-2"
		/>
		<div class="form-control flex flex-row w-full">
			<select bind:value={duration} class="select select-bordered w-full mb-2">
				<option disabled selected>Vælg varighed</option>
				{#each Array(185) as _, i}
					{#if i % 5 == 0 && i}
						<option value={i}>{i + ' minutter'}</option>
					{/if}
				{/each}
			</select>
		</div>
		{#if date && duration != 'Vælg varighed'}
			<button
				on:click={() => {
					loading = true
					createOrder()
					loading = false
				}}
				class="btn btn-primary pt-1">Bestil</button
			>
		{:else if loading}
			<button class="btn loading">loading</button>
		{:else}
			<button class="btn pt-1" disabled="disabled">Vælg varighed og dato</button>
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

<style>
	:root {
		--date-picker-background: hsl(var(--b1));
		--date-picker-foreground: hsl(var(--bc));
		--date-picker-highlight-border: hsl(var(--p));
		--date-picker-highlight-shadow: hsl(var(--p));
	}
</style>
