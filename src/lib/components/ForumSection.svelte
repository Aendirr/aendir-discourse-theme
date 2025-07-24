<script>
	import { Crown, MessageCircle, Eye, Clock, User } from 'lucide-svelte';

	const recentDiscussions = [
		{
			id: 1,
			title: "[$7,000] The Return of the King | VIP Slots",
			icon: "👑",
			pages: "1 2 3 4",
			author: "NemanjaPi",
			date: "July 18",
			category: "in Exclusive VIP Promotions",
			replies: 384,
			views: 3981,
			lastUser: "SnakoElGreato",
			lastTime: "3 minutes ago",
			avatar: "SE"
		},
		{
			id: 2,
			title: "New Slot Release: Fortune's Favor",
			icon: "🎰",
			author: "SlotMaster",
			date: "July 18",
			category: "in Casino Discussion",
			replies: 156,
			views: 2341,
			lastUser: "LuckyPlayer",
			lastTime: "15 minutes ago",
			avatar: "LP"
		},
		{
			id: 3,
			title: "Weekend Sports Betting Thread",
			icon: "⚽",
			author: "SportsGuru",
			date: "July 18",
			category: "in Sportsbook Discussion",
			replies: 89,
			views: 1567,
			lastUser: "BetMaster",
			lastTime: "1 hour ago",
			avatar: "BM"
		}
	];
</script>

<section class="forum-section">
	<h2 class="section-title">Recent Discussions</h2>
	
	<div class="discussions-list">
		{#each recentDiscussions as discussion}
			<div class="discussion-item">
				<div class="discussion-main">
					<div class="discussion-header">
						<span class="discussion-icon">{discussion.icon}</span>
						<h3 class="discussion-title">{discussion.title}</h3>
						{#if discussion.pages}
							<span class="pages">{discussion.pages}</span>
						{/if}
					</div>
					<div class="discussion-meta">
						<span class="author">By {discussion.author}, {discussion.date}</span>
						<span class="category">{discussion.category}</span>
					</div>
				</div>
				
				<div class="discussion-stats">
					<div class="stats">
						<span class="replies">{discussion.replies} replies</span>
						<span class="views">{discussion.views} views</span>
					</div>
					<div class="last-activity">
						<div class="user-avatar">{discussion.avatar}</div>
						<div class="user-info">
							<span class="username">{discussion.lastUser}</span>
							<span class="time">{discussion.lastTime}</span>
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	.forum-section {
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

	.discussions-list {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.discussion-item {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		padding: 1rem;
		background-color: #1A202C;
		border-radius: 6px;
		transition: background-color 0.2s;
	}

	.discussion-item:hover {
		background-color: #2D3748;
	}

	.discussion-main {
		flex: 1;
	}

	.discussion-header {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-bottom: 0.5rem;
	}

	.discussion-icon {
		font-size: 1.2rem;
	}

	.discussion-title {
		font-size: 1rem;
		font-weight: 500;
		color: #FFFFFF;
		margin: 0;
	}

	.pages {
		color: #A0AEC0;
		font-size: 0.8rem;
	}

	.discussion-meta {
		display: flex;
		gap: 1rem;
		color: #A0AEC0;
		font-size: 0.85rem;
	}

	.discussion-stats {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: 0.5rem;
	}

	.stats {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: 0.25rem;
		color: #A0AEC0;
		font-size: 0.8rem;
	}

	.last-activity {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.user-avatar {
		width: 32px;
		height: 32px;
		background-color: #48BB78;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 0.8rem;
		font-weight: 600;
		color: #FFFFFF;
	}

	.user-info {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.username {
		font-size: 0.85rem;
		font-weight: 500;
		color: #FFFFFF;
	}

	.time {
		font-size: 0.75rem;
		color: #A0AEC0;
	}
</style> 