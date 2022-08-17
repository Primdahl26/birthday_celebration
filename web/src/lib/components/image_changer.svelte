<script lang="ts">
	import { inview } from 'svelte-inview'

	export let images
	let imageNumber = 0
	let countNumber = 10
	let paused = false
	let isInView: boolean

	const clearAndCreateNewTimer = () => {
		clearInterval(updateImageInterval)
		clearInterval(updateCountInterval)
		updateImageInterval = setInterval(updateImageNumber, 10000)
		updateCountInterval = setInterval(updateCountDownNumber, 1000)
	}

	const pauseCountdown = () => {
		if (isInView) {
			if (paused) {
				countNumber = 10
				clearAndCreateNewTimer()
				paused = false
			} else {
				clearInterval(updateImageInterval)
				clearInterval(updateCountInterval)
				paused = true
			}
		}
	}

	const updateImageNumber = () => {
		if (imageNumber >= images.length - 1) {
			imageNumber = 0
		} else {
			imageNumber++
		}
	}

	const updateCountDownNumber = () => {
		if (countNumber == 1) {
			countNumber = 10
		} else {
			countNumber--
		}
	}

	const nextImage = (next: bool) => {
		if (next) {
			updateImageNumber()
			if (!paused) {
				countNumber = 10
				clearAndCreateNewTimer()
			}
		} else {
			if (imageNumber > 0) {
				imageNumber--
			} else {
				imageNumber = images.length - 1
			}
			if (!paused) {
				countNumber = 10
				clearAndCreateNewTimer()
			}
		}
	}

	let updateImageInterval = setInterval(updateImageNumber, 10000)
	let updateCountInterval = setInterval(updateCountDownNumber, 1000)
</script>

<div class="relative card w-96 bg-neutral shadow-xl">
	<figure
		use:inview={{}}
		on:change={(event) => {
			const { inView } = event.detail
			isInView = inView
		}}
		on:enter={() => {
			countNumber = 10
			clearAndCreateNewTimer()
			paused = false
		}}
		on:leave={() => {
			clearInterval(updateImageInterval)
			clearInterval(updateCountInterval)
			paused = true
		}}
	>
		<svg
			on:click={() => {
				nextImage(true)
			}}
			class="absolute right-2 h-9 w-9 bg-neutral rounded-full p-1 hover:ring-2 ring-primary cursor-pointer"
			stroke-linejoin="round"
			stroke-miterlimit="2"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			><path
				d="m13.022 14.999v3.251c0 .412.335.75.752.75.188 0 .375-.071.518-.206 1.775-1.685 4.945-4.692 6.396-6.069.2-.189.312-.452.312-.725 0-.274-.112-.536-.312-.725-1.451-1.377-4.621-4.385-6.396-6.068-.143-.136-.33-.207-.518-.207-.417 0-.752.337-.752.75v3.251h-9.02c-.531 0-1.002.47-1.002 1v3.998c0 .53.471 1 1.002 1z"
			/></svg
		>
		<svg
			on:click={() => {
				nextImage(false)
			}}
			class="absolute left-2 h-9 w-9 bg-neutral rounded-full p-1 hover:ring-2 ring-primary cursor-pointer"
			stroke-linejoin="round"
			stroke-miterlimit="2"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			><path
				d="m10.978 14.999v3.251c0 .412-.335.75-.752.75-.188 0-.375-.071-.518-.206-1.775-1.685-4.945-4.692-6.396-6.069-.2-.189-.312-.452-.312-.725 0-.274.112-.536.312-.725 1.451-1.377 4.621-4.385 6.396-6.068.143-.136.33-.207.518-.207.417 0 .752.337.752.75v3.251h9.02c.531 0 1.002.47 1.002 1v3.998c0 .53-.471 1-1.002 1z"
			/></svg
		>
		<img
			class="h-[36rem] w-96 object-cover"
			src={images[imageNumber].img}
			alt={images[imageNumber].title}
		/>
	</figure>
	<div class="card-body">
		<h2 class="relative card-title">
			{images[imageNumber].title}
			<div class="badge badge-primary absolute right-0">{imageNumber + 1}/{images.length}</div>
		</h2>
		<p>{images[imageNumber].description}</p>
	</div>
	<div class="flex justify-center p-2">
		<div class="cursor-pointer btn btn-primary" on:click={pauseCountdown}>
			{#if paused}
				<h1>Paused</h1>
			{:else}
				<span class="countdown font-mono text-3xl">
					<span style="--value:{countNumber};" />
				</span>
			{/if}
		</div>
	</div>
</div>
