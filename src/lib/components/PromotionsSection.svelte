<script>
	const promotions = [
		{
			id: 1,
			icon: "🎰",
			title: "Casino Exclusive VIP Promotions",
			description: "Exclusive casino promotions and VIP offers",
			posts: "2.2k",
			lastPost: "New VIP Slot Tournament",
			lastAuthor: "CasinoManager",
			lastTime: "1 hour ago",
			iconColor: "#63B3ED"
		},
		{
			id: 2,
			icon: "⚽",
			title: "Sportsbook Promotions",
			description: "Sports betting promotions and bonuses",
			posts: "1.8k",
			lastPost: "Weekend Football Bonuses",
			lastAuthor: "SportsPromo",
			lastTime: "2 hours ago",
			iconColor: "#48BB78"
		},
		{
			id: 3,
			icon: "🎁",
			title: "Community Promotions",
			description: "Community events and giveaways",
			posts: "956",
			lastPost: "Monthly Community Contest",
			lastAuthor: "CommunityMod",
			lastTime: "3 hours ago",
			iconColor: "#ED8936"
		},
		{
			id: 4,
			icon: "🏢",
			title: "Partner Promotions",
			description: "Promotions from our partners",
			posts: "743",
			lastPost: "New Partner Bonus",
			lastAuthor: "PartnerTeam",
			lastTime: "5 hours ago",
			iconColor: "#9F7AEA"
		}
	];
</script>

<section class="promotions-section">
	<h2 class="section-title">Promotions</h2>
	
	<div class="promotions-grid">
		{#each promotions as promotion}
			<div class="promotion-item">
				<div class="promotion-main">
					<div class="promotion-header">
						<div class="promotion-icon" style="background-color: {promotion.iconColor}">
							{promotion.icon}
						</div>
						<div class="promotion-info">
							<h3 class="promotion-title">{promotion.title}</h3>
							<p class="promotion-description">{promotion.description}</p>
						</div>
					</div>
				</div>
				
				<div class="promotion-stats">
					<div class="posts-count">{promotion.posts} posts</div>
					<div class="last-post">
						<div class="last-post-title">{promotion.lastPost}</div>
						<div class="last-post-meta">
							<span class="last-author">{promotion.lastAuthor}</span>
							<span class="last-time">{promotion.lastTime}</span>
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	.promotions-section {
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

	.promotions-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 1rem;
	}

	.promotion-item {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		padding: 1rem;
		background-color: #1A202C;
		border-radius: 6px;
		transition: background-color 0.2s;
	}

	.promotion-item:hover {
		background-color: #2D3748;
	}

	.promotion-main {
		flex: 1;
	}

	.promotion-header {
		display: flex;
		align-items: flex-start;
		gap: 1rem;
	}

	.promotion-icon {
		width: 48px;
		height: 48px;
		border-radius: 8px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.5rem;
		flex-shrink: 0;
	}

	.promotion-info {
		flex: 1;
	}

	.promotion-title {
		font-size: 1rem;
		font-weight: 600;
		color: #FFFFFF;
		margin: 0 0 0.25rem 0;
	}

	.promotion-description {
		font-size: 0.85rem;
		color: #A0AEC0;
		margin: 0;
		line-height: 1.4;
	}

	.promotion-stats {
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