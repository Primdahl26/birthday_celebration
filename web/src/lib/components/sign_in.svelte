<script lang="ts">
	import { fade } from 'svelte/transition'
	import PocketBase from 'pocketbase'

	const client = new PocketBase('http://94.130.183.89')
	export let authendicated = client.authStore.isValid
	let failed = undefined
	let email: string
	let password: string
	let showPassword = false
	let loading = false

	const adminSignIn = async (email: string, password: string) => {
		loading = true
		try {
			return await client.admins.authViaEmail(email, password)
		} catch (error) {
			failed = true
			loading = false
			throw new Error(error)
		}
	}
</script>

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content flex-col lg:flex-row-reverse">
		<div class="text-center lg:text-left">
			<h1 class="text-5xl font-bold">Admin login</h1>
			<p class="py-6">Frederik har oprettet en admin bruger, spørg ham hvis i er nysggerige.</p>
		</div>
		<div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
			<div class="card-body">
				<form>
					<div class="form-control">
						<label class="label">
							<span class="label-text">Email</span>
						</label>
						<input
							bind:value={email}
							type="text"
							placeholder="email"
							class="input input-bordered"
						/>
					</div>
					<div class="form-control">
						<label class="label">
							<span class="label-text">Password</span>
						</label>
						{#if showPassword}
							<input
								bind:value={password}
								type="text"
								placeholder="password"
								class="input input-bordered"
							/>
						{:else}
							<input
								bind:value={password}
								type="password"
								placeholder="password"
								class="input input-bordered"
							/>
						{/if}
					</div>
					<div class="form-control">
						<label class="label cursor-pointer">
							<span class="label-text">Vis password</span>
							<input type="checkbox" class="toggle" bind:checked={showPassword} />
						</label>
					</div>

					{#if failed}
						<div transition:fade class="alert alert-error flex-row w-80 shadow-lg">
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
										d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
									/></svg
								>
								<span>Forkert login</span>
							</div>
							<div class="flex-none">
								<button
									on:click={() => {
										failed = false
									}}
									class="btn btn-sm">ok</button
								>
							</div>
						</div>
					{/if}
					<div class="form-control mt-6">
						{#if email && password}
							{#if loading}
								<button class="btn loading">loading</button>
							{:else}
								<button
									on:click={async () => {
										await adminSignIn(email, password)
										authendicated = client.authStore.isValid
										console.log(client.authStore)
										loading = false
									}}
									class="btn btn-primary">Login</button
								>
							{/if}
						{:else}
							<button class="btn" disabled="disabled">Login</button>
						{/if}
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
