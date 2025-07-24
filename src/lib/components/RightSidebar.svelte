<script>
	import { User } from 'lucide-svelte';
</script>

<aside class="right-sidebar">
	<!-- Top Banner: In Play -->
	<div class="banner banner-inplay">
		<div class="banner-content">
			<div class="inplay-header">
				<span class="inplay-text">In Play</span>
				<span class="inplay-number">885</span>
			</div>
			<div class="game-strip">
				<div class="game-icon">🎰</div>
				<div class="game-icon">🎲</div>
				<div class="game-icon">🃏</div>
				<div class="game-icon">⚽</div>
				<div class="game-icon">🏀</div>
				<div class="game-icon">🎯</div>
			</div>
			<div class="multipliers">
				<span class="multiplier">x256</span>
				<span class="multiplier">+256</span>
				<span class="multiplier">x512</span>
			</div>
		</div>
	</div>

	<!-- Middle Banner: THE NEXT -->
	<div class="banner banner-next">
		<div class="banner-content">
			<div class="next-text">
				<h2>THE NEXT</h2>
				<h3>TIMES</h3>
				<h4>BE B</h4>
			</div>
			<div class="monster-silhouette"></div>
		</div>
	</div>

	<!-- Bottom Banner: HIGH ROLLERS -->
	<div class="banner banner-highrollers">
		<div class="banner-content">
			<div class="stake-logo">Stake</div>
			<div class="highrollers-text">HIGH ROLLERS DROPS ON TELEGRAM</div>
			<div class="dice-container">
				<div class="dice">⚀</div>
				<div class="dice">⚁</div>
			</div>
			<button class="join-chat-btn">JOIN CHAT</button>
		</div>
	</div>

	<!-- Forum Statistics -->
	<div class="stats-section">
		<h3 class="stats-title">Forum Statistics</h3>
		<div class="stats-list">
			<div class="stat-row">
				<span class="stat-name">Total Topics:</span>
				<span class="stat-value">87.4k</span>
			</div>
			<div class="stat-row">
				<span class="stat-name">Total Posts:</span>
				<span class="stat-value">2.6m</span>
			</div>
		</div>
	</div>

	<!-- Member Statistics -->
	<div class="stats-section">
		<h3 class="stats-title">Member Statistics</h3>
		<div class="stats-list">
			<div class="stat-row">
				<span class="stat-name">Total Members:</span>
				<span class="stat-value">144,982</span>
			</div>
			<div class="stat-row">
				<span class="stat-name">Most Online:</span>
				<span class="stat-value">86,533</span>
			</div>
			<div class="stat-row">
				<span class="stat-name">Date:</span>
				<span class="stat-value">August 18, 2021</span>
			</div>
		</div>
	</div>

	<!-- Newest Member -->
	<div class="stats-section">
		<h3 class="stats-title">NEWEST MEMBER</h3>
		<div class="newest-member">
			<div class="member-avatar">K</div>
			<div class="member-info">
				<span class="member-name">KORINGA1254</span>
				<span class="member-joined">Joined 3 minutes ago</span>
			</div>
		</div>
	</div>
</aside>

<style>
	.right-sidebar {
		width: 320px;
		background-color: #171923;
		padding: 1rem;
		flex-shrink: 0;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	/* Banner Styles */
	.banner {
		height: 80px;
		border-radius: 8px;
		overflow: hidden;
		position: relative;
		margin-bottom: 1rem;
	}

	.banner-content {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 0.5rem;
		position: relative;
	}

	/* In Play Banner */
	.banner-inplay {
		background: linear-gradient(135deg, #2D3748 0%, #1A202C 100%);
	}

	.inplay-header {
		display: flex;
		align-items: center;
		gap: 0.3rem;
		margin-bottom: 0.3rem;
	}

	.inplay-text {
		color: #A0AEC0;
		font-size: 0.6rem;
		font-weight: 500;
	}

	.inplay-number {
		color: #48BB78;
		font-size: 0.9rem;
		font-weight: bold;
	}

	.game-strip {
		display: flex;
		gap: 0.15rem;
		margin-bottom: 0.3rem;
	}

	.game-icon {
		width: 12px;
		height: 12px;
		background-color: #4A5568;
		border-radius: 2px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 0.5rem;
	}

	.multipliers {
		display: flex;
		gap: 0.3rem;
	}

	.multiplier {
		color: #48BB78;
		font-size: 0.5rem;
		font-weight: bold;
	}

	/* THE NEXT Banner */
	.banner-next {
		background: linear-gradient(135deg, #1A202C 0%, #2D3748 100%);
	}

	.next-text {
		text-align: center;
		color: #FFFFFF;
		z-index: 2;
		position: relative;
	}

	.next-text h2 {
		font-size: 1rem;
		font-weight: bold;
		color: #48BB78;
		margin: 0;
		line-height: 1;
	}

	.next-text h3 {
		font-size: 0.8rem;
		font-weight: bold;
		color: #F6E05E;
		margin: 0;
		line-height: 1;
	}

	.next-text h4 {
		font-size: 0.7rem;
		font-weight: bold;
		color: #FFFFFF;
		margin: 0;
		line-height: 1;
	}

	.monster-silhouette {
		position: absolute;
		bottom: 0;
		right: 0;
		width: 30px;
		height: 40px;
		background-color: rgba(0, 0, 0, 0.3);
		border-radius: 50% 50% 0 0;
		z-index: 1;
	}

	/* HIGH ROLLERS Banner */
	.banner-highrollers {
		background: linear-gradient(135deg, #3182CE 0%, #2C5282 100%);
	}

	.stake-logo {
		position: absolute;
		top: 0.3rem;
		left: 0.3rem;
		color: #FFFFFF;
		font-weight: bold;
		font-size: 0.7rem;
	}

	.highrollers-text {
		color: #FFFFFF;
		font-size: 0.6rem;
		font-weight: 600;
		text-align: center;
		margin-bottom: 0.3rem;
	}

	.dice-container {
		display: flex;
		gap: 0.3rem;
		margin-bottom: 0.3rem;
	}

	.dice {
		width: 18px;
		height: 18px;
		background-color: #E53E3E;
		border-radius: 2px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 0.8rem;
		color: #FFFFFF;
		font-weight: bold;
	}

	.join-chat-btn {
		background-color: #48BB78;
		color: #FFFFFF;
		border: none;
		padding: 0.2rem 0.6rem;
		border-radius: 2px;
		font-weight: 600;
		cursor: pointer;
		transition: background-color 0.2s;
		font-size: 0.6rem;
	}

	.join-chat-btn:hover {
		background-color: #38A169;
	}

	/* Stats Sections */
	.stats-section {
		background-color: #2D3748;
		border-radius: 8px;
		padding: 1rem;
	}

	.stats-title {
		font-size: 1rem;
		font-weight: 600;
		color: #FFFFFF;
		margin-bottom: 0.75rem;
	}

	.stats-list {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.stat-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.stat-name {
		font-size: 0.85rem;
		color: #A0AEC0;
	}

	.stat-value {
		font-size: 0.85rem;
		color: #FFFFFF;
		font-weight: 500;
	}

	/* Newest Member */
	.newest-member {
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	.member-avatar {
		width: 40px;
		height: 40px;
		background-color: #48BB78;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 600;
		color: #FFFFFF;
		font-size: 1rem;
	}

	.member-info {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.member-name {
		font-size: 0.9rem;
		font-weight: 600;
		color: #FFFFFF;
	}

	.member-joined {
		font-size: 0.75rem;
		color: #A0AEC0;
	}
</style> 