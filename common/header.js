// Stake Community Header JavaScript
// Header'ı sayfaya ekle ve Discourse'un varsayılan header'ını gizle

export default {
  name: "stake-header",
  
  initialize() {
    // Sayfa yüklendiğinde header'ı ekle
    setTimeout(() => {
      this.addCustomHeader();
    }, 100);
    
    // DOM değişikliklerini izle
    const observer = new MutationObserver(() => {
      // Eski header'ları gizle
      this.hideOldHeaders();
      
      if (!document.querySelector('.stake-header')) {
        this.addCustomHeader();
      }
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    
    // Sayfa yüklendiğinde de eski header'ları gizle
    window.addEventListener('load', () => {
      this.hideOldHeaders();
      this.addCustomHeader();
    });
  },
  
  hideOldHeaders() {
    // Tüm eski header elementlerini gizle
    const oldHeaders = document.querySelectorAll('.mrgamb-header, .d-header, .header-top, .search-container, .nav-container, .header-left, .header-right, .header-icons, .icon, .logo, .logo-icon, .logo-text, .search-bar, .search-input, .nav-tabs, .nav-tab, .nav-actions, .new-topic-btn');
    oldHeaders.forEach(header => {
      header.style.display = 'none';
      header.style.visibility = 'hidden';
      header.style.opacity = '0';
    });
    
    // Eski layout'u da gizle
    const oldLayout = document.querySelector('.mrgamb-layout');
    if (oldLayout) {
      oldLayout.style.display = 'none';
      oldLayout.style.visibility = 'hidden';
    }
  },
  
  addCustomHeader() {
    // Eğer header zaten varsa ekleme
    if (document.querySelector('.stake-header')) {
      return;
    }
    
    // Önce tüm eski header'ları gizle
    this.hideOldHeaders();
    
    // Discourse'un varsayılan header'ını gizle
    const defaultHeader = document.querySelector('.d-header');
    if (defaultHeader) {
      defaultHeader.style.display = 'none';
    }
    
    // Header HTML'ini oluştur
    const headerHTML = `
      <div class="stake-header">
        <div class="header-top">
          <div class="header-left">
            <div class="logo">
              <span class="logo-icon">💎</span>
              <span class="logo-text">STAKE</span>
            </div>
          </div>
          <div class="header-right">
            <div class="header-links">
              <a href="/forum" class="header-link active">Forum</a>
              <a href="/casino" class="header-link">Casino</a>
              <a href="/sportsbook" class="header-link">Sportsbook</a>
              <a href="/blog" class="header-link">Blog</a>
            </div>
            <div class="header-actions">
              <a href="/login" class="login-link">Existing user? Sign In</a>
              <a href="/signup" class="signup-btn">Sign Up!</a>
            </div>
          </div>
        </div>
      </div>
    `;
    
    // Header'ı sayfanın en üstüne ekle
    const body = document.body;
    const firstChild = body.firstChild;
    const headerElement = document.createElement('div');
    headerElement.innerHTML = headerHTML;
    body.insertBefore(headerElement.firstElementChild, firstChild);
    
    // Ana layout'u ekle
    this.addMainLayout();
    
    // Event listener'ları ekle
    this.addEventListeners();
    
    // Slider'ı başlat
    this.initSlider();
  },
  
  addMainLayout() {
    // Eğer layout zaten varsa ekleme
    if (document.querySelector('.stake-layout')) {
      return;
    }
    
    // Ana içerik alanını bul
    const mainContent = document.querySelector('#main-outlet') || document.querySelector('.container');
    if (!mainContent) return;
    
    // Discourse'un varsayılan içeriğini gizle
    const defaultContent = mainContent.querySelector('.list-controls, .topic-list, .category-list');
    if (defaultContent) {
      defaultContent.style.display = 'none';
    }
    
    // Layout HTML'ini oluştur
    const layoutHTML = `
      <div class="stake-layout">
        <div class="main-content">
          <div class="content-section recent-discussions">
            <div class="section-header">Recent Discussions</div>
            <div class="discussion-list">
              <div class="discussion-item">
                <div class="discussion-content">
                  <div class="discussion-icon">👑</div>
                  <div class="discussion-info">
                    <div class="discussion-title">[S7,000] The Return of the King VIP Slots</div>
                    <div class="discussion-meta">By NamanjaPi • Casino Discussion</div>
                  </div>
                  <div class="discussion-stats">
                    <div class="stats-numbers">replies: 12 • views: 156</div>
                    <div class="stats-time">3 minutes ago</div>
                  </div>
                </div>
              </div>
              
              <div class="discussion-item">
                <div class="discussion-content">
                  <div class="discussion-icon">🎲</div>
                  <div class="discussion-info">
                    <div class="discussion-title">[S5,000] Royal Club of Originals | Plinko</div>
                    <div class="discussion-meta">By lebronzz • Stake Originals</div>
                  </div>
                  <div class="discussion-stats">
                    <div class="stats-numbers">replies: 8 • views: 89</div>
                    <div class="stats-time">7 minutes ago</div>
                  </div>
                </div>
              </div>
              
              <div class="discussion-item">
                <div class="discussion-content">
                  <div class="discussion-icon">⚽</div>
                  <div class="discussion-info">
                    <div class="discussion-title">[S3,000] Champions League Final Predictions</div>
                    <div class="discussion-meta">By kytanmhappe • Sportsbook Discussion</div>
                  </div>
                  <div class="discussion-stats">
                    <div class="stats-numbers">replies: 15 • views: 234</div>
                    <div class="stats-time">12 minutes ago</div>
                  </div>
                </div>
              </div>
              
              <div class="discussion-item">
                <div class="discussion-content">
                  <div class="discussion-icon">💎</div>
                  <div class="discussion-info">
                    <div class="discussion-title">[S2,000] Daily Dice Challenge - Win Big!</div>
                    <div class="discussion-meta">By Amla01 • Stake Originals</div>
                  </div>
                  <div class="discussion-stats">
                    <div class="stats-numbers">replies: 6 • views: 67</div>
                    <div class="stats-time">18 minutes ago</div>
                  </div>
                </div>
              </div>
              
              <div class="discussion-item">
                <div class="discussion-content">
                  <div class="discussion-icon">🎯</div>
                  <div class="discussion-info">
                    <div class="discussion-title">[S1,500] Mines Strategy Discussion</div>
                    <div class="discussion-meta">By Lokueur • Stake Originals</div>
                  </div>
                  <div class="discussion-stats">
                    <div class="stats-numbers">replies: 9 • views: 123</div>
                    <div class="stats-time">25 minutes ago</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="content-section promotions-section">
            <div class="section-header">Promotions</div>
            <div class="promotion-list">
              <div class="promotion-category">
                <div class="promotion-content">
                  <div class="promotion-icon casino">🎰</div>
                  <div class="promotion-info">
                    <div class="promotion-title">Casino: Exclusive VIP Promotions</div>
                    <div class="promotion-description">Weekly challenges with massive prize pools and exclusive rewards</div>
                  </div>
                  <div class="promotion-stats">2.2k</div>
                </div>
              </div>
              
              <div class="promotion-category">
                <div class="promotion-content">
                  <div class="promotion-icon sportsbook">⚽</div>
                  <div class="promotion-info">
                    <div class="promotion-title">Sportsbook: Weekly Bonuses</div>
                    <div class="promotion-description">Exciting sportsbook promotions with exclusive bonuses</div>
                  </div>
                  <div class="promotion-stats">167</div>
                </div>
              </div>
              
              <div class="promotion-category">
                <div class="promotion-content">
                  <div class="promotion-icon community">👥</div>
                  <div class="promotion-info">
                    <div class="promotion-title">Community: Member Rewards</div>
                    <div class="promotion-description">Community challenges and member-exclusive rewards</div>
                  </div>
                  <div class="promotion-stats">740.7k</div>
                </div>
              </div>
              
              <div class="promotion-category">
                <div class="promotion-content">
                  <div class="promotion-icon results">📊</div>
                  <div class="promotion-info">
                    <div class="promotion-title">Promotion Results: Winners</div>
                    <div class="promotion-description">See the latest promotion winners and results</div>
                  </div>
                  <div class="promotion-stats">690.3k</div>
                </div>
              </div>
              
              <div class="promotion-category">
                <div class="promotion-content">
                  <div class="promotion-icon seasonal">🎄</div>
                  <div class="promotion-info">
                    <div class="promotion-title">Seasonal Events: Christmas in July</div>
                    <div class="promotion-description">Special seasonal events with unique rewards</div>
                  </div>
                  <div class="promotion-stats">2.3k</div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="content-section forum-categories">
            <div class="section-header">Stake</div>
            <div class="category-list">
              <div class="category-item">
                <div class="category-content">
                  <div class="category-icon casino">🎰</div>
                  <div class="category-info">
                    <div class="category-title">Casino Discussion</div>
                    <div class="category-description">Discuss casino games, strategies, and experiences</div>
                  </div>
                  <div class="category-stats">28.3k</div>
                </div>
              </div>
              
              <div class="category-item">
                <div class="category-content">
                  <div class="category-icon sportsbook">⚽</div>
                  <div class="category-info">
                    <div class="category-title">Sportsbook Discussion</div>
                    <div class="category-description">Sports betting discussions and predictions</div>
                  </div>
                  <div class="category-stats">19.4k</div>
                </div>
              </div>
              
              <div class="category-item">
                <div class="category-content">
                  <div class="category-icon poker">🃏</div>
                  <div class="category-info">
                    <div class="category-title">Poker Discussion</div>
                    <div class="category-description">Poker strategies and tournament discussions</div>
                  </div>
                  <div class="category-stats">249</div>
                </div>
              </div>
              
              <div class="category-item">
                <div class="category-content">
                  <div class="category-icon suggestions">💡</div>
                  <div class="category-info">
                    <div class="category-title">Suggestions & Feedback</div>
                    <div class="category-description">Share your ideas and feedback with the community</div>
                  </div>
                  <div class="category-stats">14.4k</div>
                </div>
              </div>
              
              <div class="category-item">
                <div class="category-content">
                  <div class="category-icon support">🆘</div>
                  <div class="category-info">
                    <div class="category-title">Support</div>
                    <div class="category-description">Get help and support from the community</div>
                  </div>
                  <div class="category-stats">114.8k</div>
                </div>
              </div>
              
              <div class="category-item">
                <div class="category-content">
                  <div class="category-icon originals">💎</div>
                  <div class="category-info">
                    <div class="category-title">Stake Originals</div>
                    <div class="category-description">Dice, Mines, Plinko, Blackjack and more</div>
                  </div>
                  <div class="category-stats">59.9k</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="sidebar-slider">
          <div class="slider-container">
            <div class="slider-item active" id="slide1">
              <div class="slider-content">
                <div class="slider-title">🎰 WIN UP TO 16 FREE GAMES</div>
                <div class="slider-description">Spin the reels and win massive prizes with our exclusive slot promotions!</div>
                <button class="slider-button">PLAY NOW</button>
              </div>
            </div>
            
            <div class="slider-item" id="slide2">
              <div class="slider-content">
                <div class="slider-title">⚽ SPORTSBOOK BONUS</div>
                <div class="slider-description">Get exclusive bonuses on your favorite sports and teams!</div>
                <button class="slider-button">BET NOW</button>
              </div>
            </div>
            
            <div class="slider-item" id="slide3">
              <div class="slider-content">
                <div class="slider-title">💎 DAILY DROPS ON TELEGRAM</div>
                <div class="slider-description">Join our Telegram channel for daily drops and exclusive rewards!</div>
                <button class="slider-button">JOIN CHAT</button>
              </div>
            </div>
          </div>
          
          <div class="slider-dots">
            <div class="dot active" data-slide="1"></div>
            <div class="dot" data-slide="2"></div>
            <div class="dot" data-slide="3"></div>
          </div>
          
          <div class="forum-statistics">
            <div class="stats-header">Forum Statistics</div>
            <div class="stats-grid">
              <div class="stat-item">
                <div class="stat-number">87.4k</div>
                <div class="stat-label">Total Topics</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">2.6m</div>
                <div class="stat-label">Total Posts</div>
              </div>
            </div>
          </div>
          
          <div class="member-statistics">
            <div class="member-header">Member Statistics</div>
            <div class="member-info">
              <div class="member-avatar">K</div>
              <div class="member-details">
                <div class="member-name">KORINGA1254</div>
                <div class="member-joined">Joined 3 minutes ago</div>
              </div>
            </div>
            <div class="member-stats">
              <div class="stat-row">
                <div class="stat-label">Total Members</div>
                <div class="stat-value">144,982</div>
              </div>
              <div class="stat-row">
                <div class="stat-label">Most Online</div>
                <div class="stat-value">86,533 (Aug 18, 2021)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    
    // Layout'u ana içerik alanına ekle
    const layoutElement = document.createElement('div');
    layoutElement.innerHTML = layoutHTML;
    mainContent.appendChild(layoutElement.firstElementChild);
  },
  
  initSlider() {
    const slides = document.querySelectorAll('.slider-item');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    
    if (slides.length === 0) return;
    
    // Slider'ı otomatik olarak değiştir
    setInterval(() => {
      currentSlide = (currentSlide + 1) % slides.length;
      this.showSlide(currentSlide);
    }, 5000); // 5 saniyede bir değiş
    
    // Dot'lara tıklama event'i ekle
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentSlide = index;
        this.showSlide(currentSlide);
      });
    });
  },
  
  showSlide(index) {
    const slides = document.querySelectorAll('.slider-item');
    const dots = document.querySelectorAll('.dot');
    
    if (slides.length === 0) return;
    
    // Tüm slide'ları gizle
    slides.forEach(slide => {
      slide.classList.remove('active');
    });
    
    // Tüm dot'ları pasif yap
    dots.forEach(dot => {
      dot.classList.remove('active');
    });
    
    // Aktif slide'ı göster
    if (slides[index]) {
      slides[index].classList.add('active');
    }
    if (dots[index]) {
      dots[index].classList.add('active');
    }
  },
  
  addEventListeners() {
    // Header link'leri için event listener
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('header-link')) {
        document.querySelectorAll('.header-link').forEach(link => {
          link.classList.remove('active');
        });
        e.target.classList.add('active');
      }
    });
    
    // Slider butonları için event listener
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('slider-button')) {
        const buttonText = e.target.textContent;
        if (buttonText === 'PLAY NOW') {
          window.open('https://stake.com/casino', '_blank');
        } else if (buttonText === 'BET NOW') {
          window.open('https://stake.com/sportsbook', '_blank');
        } else if (buttonText === 'JOIN CHAT') {
          window.open('https://t.me/stake', '_blank');
        }
      }
    });
  }
}; 