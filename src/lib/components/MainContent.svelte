<script>
	import { Crown, MessageCircle, Eye, Clock } from 'lucide-svelte';
	import ForumSection from './ForumSection.svelte';
	import PromotionsSection from './PromotionsSection.svelte';
	import StakeSection from './StakeSection.svelte';
</script>

<main class="main-content">
	<button class="home-button">Home</button>
	
	<div class="content-sections">
		<ForumSection />
		<PromotionsSection />
		<StakeSection />
	</div>
</main>

<style>
	.main-content {
		flex: 1;
		padding: 2rem;
		background-color: #1A202C;
		min-height: calc(100vh - 120px);
	}

	.home-button {
		background-color: #FFFFFF;
		color: #1A202C;
		border: none;
		padding: 0.75rem 1.5rem;
		border-radius: 4px;
		font-weight: 600;
		font-size: 1rem;
		cursor: pointer;
		margin-bottom: 2rem;
		transition: background-color 0.2s;
	}

	.home-button:hover {
		background-color: #F7FAFC;
	}

	.content-sections {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}
</style> 