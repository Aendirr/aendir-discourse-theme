<script>
	import { Home, MessageSquare, Trophy, FileText, Plus } from 'lucide-svelte';
</script>

<aside class="left-sidebar">
	<nav class="sidebar-nav">
		<a href="/" class="nav-item active">
			<Home size={20} />
			<span>Home</span>
		</a>
		<a href="/forum" class="nav-item">
			<MessageSquare size={20} />
			<span>Forum</span>
		</a>
		<a href="/casino" class="nav-item">
			<span class="casino-icon">🎰</span>
			<span>Casino</span>
		</a>
		<a href="/sportsbook" class="nav-item">
			<Trophy size={20} />
			<span>Sportsbook</span>
		</a>
		<a href="/blog" class="nav-item">
			<FileText size={20} />
			<span>Blog</span>
		</a>
		<a href="/more" class="nav-item">
			<Plus size={20} />
			<span>More</span>
		</a>
	</nav>
</aside>

<style>
	.left-sidebar {
		width: 60px;
		background-color: #2D3748;
		padding: 1rem 0;
		flex-shrink: 0;
	}

	.sidebar-nav {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.nav-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.25rem;
		padding: 0.75rem 0;
		color: #A0AEC0;
		text-decoration: none;
		font-size: 0.75rem;
		transition: all 0.2s;
		border-radius: 4px;
		margin: 0 0.5rem;
	}

	.nav-item:hover {
		background-color: #4A5568;
		color: #FFFFFF;
	}

	.nav-item.active {
		background-color: #48BB78;
		color: #FFFFFF;
	}

	.nav-item span {
		font-size: 0.7rem;
		font-weight: 500;
	}

	.casino-icon {
		font-size: 1.25rem;
		width: 20px;
		height: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style> 