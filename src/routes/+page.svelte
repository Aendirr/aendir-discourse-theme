<script>
	import Header from '$lib/components/Header.svelte';
	import LeftSidebar from '$lib/components/LeftSidebar.svelte';
	import MainContent from '$lib/components/MainContent.svelte';
	import RightSidebar from '$lib/components/RightSidebar.svelte';
</script>

<main class="app">
	<Header />
	<div class="content-wrapper">
		<LeftSidebar />
		<MainContent />
		<RightSidebar />
	</div>
</main>

<style>
	.app {
		min-height: 100vh;
		background-color: #1A202C;
	}

	.content-wrapper {
		display: flex;
		gap: 0;
		max-width: 1400px;
		margin: 0 auto;
		padding: 0;
	}
</style> 