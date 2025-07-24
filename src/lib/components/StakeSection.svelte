<script>
	const stakeCategories = [
		{
			id: 1,
			icon: "🎰",
			title: "Casino Discussion",
			description: "Discuss casino games, strategies, and experiences",
			posts: "15.2k",
			lastPost: "New Slot Game Review",
			lastAuthor: "CasinoPlayer",
			lastTime: "30 minutes ago",
			iconColor: "#48BB78"
		},
		{
			id: 2,
			icon: "⚽",
			title: "Sportsbook Discussion",
			description: "Sports betting discussions and predictions",
			posts: "12.8k",
			lastPost: "Champions League Predictions",
			lastAuthor: "SportsAnalyst",
			lastTime: "1 hour ago",
			iconColor: "#48BB78"
		},
		{
			id: 3,
			icon: "🃏",
			title: "Poker Discussion",
			description: "Poker strategies, tournaments, and tips",
			posts: "8.9k",
			lastPost: "Poker Tournament Results",
			lastAuthor: "PokerPro",
			lastTime: "2 hours ago",
			iconColor: "#48BB78"
		},
		{
			id: 4,
			icon: "✅",
			title: "Suggestions & Feedback",
			description: "Share your suggestions and feedback",
			posts: "5.4k",
			lastPost: "New Feature Request",
			lastAuthor: "CommunityUser",
			lastTime: "3 hours ago",
			iconColor: "#48BB78"
		},
		{
			id: 5,
			icon: "🆘",
			title: "Support",
			description: "Get help and support from the community",
			posts: "3.2k",
			lastPost: "Account Verification Issue",
			lastAuthor: "SupportTeam",
			lastTime: "4 hours ago",
			iconColor: "#48BB78"
		},
		{
			id: 6,
			icon: "🎲",
			title: "Stake Originals",
			description: "Exclusive Stake original games and content",
			posts: "2.1k",
			lastPost: "New Original Game Release",
			lastAuthor: "StakeDev",
			lastTime: "6 hours ago",
			iconColor: "#48BB78"
		}
	];
</script>

<section class="stake-section">
	<h2 class="section-title">Stake</h2>
	
	<div class="stake-grid">
		{#each stakeCategories as category}
			<div class="stake-item">
				<div class="stake-main">
					<div class="stake-header">
						<div class="stake-icon" style="background-color: {category.iconColor}">
							{category.icon}
						</div>
						<div class="stake-info">
							<h3 class="stake-title">{category.title}</h3>
							<p class="stake-description">{category.description}</p>
						</div>
					</div>
				</div>
				
				<div class="stake-stats">
					<div class="posts-count">{category.posts} posts</div>
					<div class="last-post">
						<div class="last-post-title">{category.lastPost}</div>
						<div class="last-post-meta">
							<span class="last-author">{category.lastAuthor}</span>
							<span class="last-time">{category.lastTime}</span>
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	.stake-section {
		background-color: #2D3748;
		border-radius: 8px;
		padding: 1.5rem;
	}

	.section-title {
		font-size: 1.25rem;
		font-weight: 600;
		margin-bottom: 1rem;
		color: #FFFFFF;
	}

	.stake-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 1rem;
	}

	.stake-item {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		padding: 1rem;
		background-color: #1A202C;
		border-radius: 6px;
		transition: background-color 0.2s;
	}

	.stake-item:hover {
		background-color: #2D3748;
	}

	.stake-main {
		flex: 1;
	}

	.stake-header {
		display: flex;
		align-items: flex-start;
		gap: 1rem;
	}

	.stake-icon {
		width: 48px;
		height: 48px;
		border-radius: 8px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.5rem;
		flex-shrink: 0;
	}

	.stake-info {
		flex: 1;
	}

	.stake-title {
		font-size: 1rem;
		font-weight: 600;
		color: #FFFFFF;
		margin: 0 0 0.25rem 0;
	}

	.stake-description {
		font-size: 0.85rem;
		color: #A0AEC0;
		margin: 0;
		line-height: 1.4;
	}

	.stake-stats {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: 0.5rem;
		min-width: 120px;
	}

	.posts-count {
		font-size: 0.8rem;
		color: #A0AEC0;
		font-weight: 500;
	}

	.last-post {
		text-align: right;
	}

	.last-post-title {
		font-size: 0.85rem;
		color: #FFFFFF;
		font-weight: 500;
		margin-bottom: 0.25rem;
	}

	.last-post-meta {
		display: flex;
		flex-direction: column;
		gap: 0.1rem;
	}

	.last-author {
		font-size: 0.75rem;
		color: #48BB78;
		font-weight: 500;
	}

	.last-time {
		font-size: 0.7rem;
		color: #A0AEC0;
	}
</style> 