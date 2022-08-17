<script lang="ts">
	import ThemeSelector from '$lib/components/theme_selector.svelte'
</script>

<div class="navbar bg-neutral">
	<div class="flex-1">
		<a class="btn btn-ghost normal-case text-xl" href="/">60 års</a>
	</div>
	<div class="flex-none">
		<div class="navbar-end">
			<a class="btn" href="/drinks">Drinks</a>
		</div>
	</div>
	<div class="px-2">
		<ThemeSelector />
	</div>
</div>
