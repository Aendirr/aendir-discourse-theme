<script>
	import { Home, MessageSquare, Trophy, FileText, Plus } from 'lucide-svelte';
</script>

<header class="header">
	<div class="top-bar">
		<div class="logo">
			<div class="logo-icon">◆</div>
			<span class="logo-text">Stake</span>
		</div>
		
		<nav class="nav-links">
			<a href="/forum" class="nav-link">Forum</a>
			<a href="/casino" class="nav-link">Casino</a>
			<a href="/sportsbook" class="nav-link">Sportsbook</a>
			<a href="/blog" class="nav-link">Blog</a>
		</nav>
		
		<div class="auth-buttons">
			<a href="/signin" class="sign-in">Existing user? Sign In</a>
			<button class="sign-up">Sign Up</button>
		</div>
	</div>
	
	<div class="sub-header">
		<span>Stake Community Forum - Top Promos & Gambling Discussions</span>
	</div>
</header>

<style>
	.header {
		background-color: #202020;
		border-bottom: 1px solid #2D3748;
	}

	.top-bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1rem 2rem;
		max-width: 1400px;
		margin: 0 auto;
	}

	.logo {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.logo-icon {
		color: #48BB78;
		font-size: 1.5rem;
		font-weight: bold;
	}

	.logo-text {
		font-size: 1.5rem;
		font-weight: bold;
		color: #FFFFFF;
	}

	.nav-links {
		display: flex;
		gap: 2rem;
	}

	.nav-link {
		color: #FFFFFF;
		text-decoration: none;
		font-weight: 500;
		transition: color 0.2s;
	}

	.nav-link:hover {
		color: #48BB78;
	}

	.auth-buttons {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.sign-in {
		color: #A0AEC0;
		text-decoration: none;
		font-size: 0.9rem;
	}

	.sign-up {
		background-color: #48BB78;
		color: #FFFFFF;
		border: none;
		padding: 0.5rem 1rem;
		border-radius: 4px;
		font-weight: 500;
		cursor: pointer;
		transition: background-color 0.2s;
	}

	.sign-up:hover {
		background-color: #38A169;
	}

	.sub-header {
		background-color: #2D3748;
		padding: 0.5rem 2rem;
		text-align: center;
		color: #A0AEC0;
		font-size: 0.9rem;
	}
</style> 