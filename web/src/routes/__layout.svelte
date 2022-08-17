<script lang="ts">
	import '$lib/global.css'
	import Navbar from '$lib/components/navbar.svelte'
	import Footer from '$lib/components/footer.svelte'
</script>

<div class="h-screen">
	<Navbar />
	<slot />
	<Footer />
</div>
