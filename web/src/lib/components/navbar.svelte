<script lang="ts">
	import ThemeSelector from '$lib/components/theme_selector.svelte'
</script>

<div class="navbar bg-neutral shadow-lg">
	<div class="flex-1">
		<a class="btn btn-ghost normal-case text-xl" href="/">60 års 🎉</a>
	</div>
	<div class="flex-none">
		<div class="dropdown dropdown-end">
			<label tabindex="0" class="btn btn-ghost btn-circle avatar">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="currentColor"
					><path
						d="M11.793 1.576c1.255 0 2.319.82 2.684 1.955.214-.082.447-.126.689-.126 1.074 0 1.944.871 1.944 1.944s-.871 1.944-1.944 1.944c-.626 0-1.183-.296-1.539-.756-.493.423-1.134.679-1.835.679-.884 0-1.673-.408-2.19-1.045-.424.497-1.056.813-1.761.813-.604 0-1.155-.231-1.567-.611-.354.487-.927.804-1.575.804-2.981 0-2.721-3.889 0-3.889.398 0 .769.12 1.077.326.383-.751 1.164-1.266 2.065-1.266.591 0 1.131.222 1.541.586.493-.813 1.389-1.358 2.411-1.358zm0-1.576c-.971 0-1.945.322-2.747.964-1.29-.42-2.746-.145-3.795.792-2.148-.339-4.251 1.056-4.251 3.669 0 1.941 1.758 3.328 3.699 3.328.613 0 1.209-.162 1.731-.457.998.388 2.127.35 3.108-.126 1.166.698 2.638.832 3.957.278.505.273 1.077.42 1.672.42 1.941 0 3.521-1.579 3.521-3.521 0-1.874-1.472-3.411-3.32-3.515-.768-1.067-2.056-1.832-3.575-1.832zm-2.793 20h-2v-10.072c.604.197 1.479.176 2-.144v10.216zm8 1.224v-11.375c-.619.235-1.299.34-2 .292v11.083c0 .273.019.538.084.791h-10.168c.064-.253.084-.518.084-.791v-11.21c-.671.067-1.331-.012-1.97-.232v11.442c0 .664-.366 1.203-1.03 1.203v1.573h16v-1.573c-.664 0-1-.539-1-1.203zm2.851-12.224h-1.851v2h1.492c2.416 0 1.663 4.425-1.492 6.255v2.16c3.209-1.213 5-4.424 5-6.963 0-1.918-1.005-3.452-3.149-3.452z"
					/></svg
				>
			</label>
			<ul
				tabindex="0"
				class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-neutral rounded-box w-52"
			>
				<li><a href="/drinks">Bestil drinks</a></li>
				<li><a href="/drinks-queue">Drinks kø</a></li>
			</ul>
		</div>
		<div class="dropdown dropdown-end">
			<label tabindex="0" class="btn btn-ghost btn-circle avatar">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 640 512"
					width="24"
					height="24"
					fill="currentColor"
					><path
						d="M416 0C352.3 0 256 32 256 32V160c48 0 76 16 104 32s56 32 104 32c56.4 0 176-16 176-96S512 0 416 0zM128 96c0 35.3 28.7 64 64 64h32V32H192c-35.3 0-64 28.7-64 64zM288 512c96 0 224-48 224-128s-119.6-96-176-96c-48 0-76 16-104 32s-56 32-104 32V480s96.3 32 160 32zM0 416c0 35.3 28.7 64 64 64H96V352H64c-35.3 0-64 28.7-64 64z"
					/></svg
				>
			</label>
			<ul
				tabindex="0"
				class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-neutral rounded-box w-52"
			>
				<li>
					<a href="/order-fodnus" class="justify-between">
						Bestil fodnus
						<span class="badge badge-primary">Ny</span>
					</a>
				</li>

				<li>
					<a href="fodnus" class="justify-between">
						Fodnus bestillinger
						<span class="badge badge-primary">Ny</span>
					</a>
				</li>
			</ul>
		</div>
		<div>
			<ThemeSelector />
		</div>
	</div>
</div>
