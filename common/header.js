// MRGambCommunity Header JavaScript
// Header'ı sayfaya ekle ve Discourse'un varsayılan header'ını gizle

import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "mrgamb-header",
  
  initialize() {
    withPluginApi("0.8.31", api => {
      // Sayfa yüklendiğinde header'ı ekle
      api.onPageChange(() => {
        this.addCustomHeader();
      });
      
      // İlk yüklemede de header'ı ekle
      this.addCustomHeader();
    });
  },
  
  addCustomHeader() {
    // Eğer header zaten varsa ekleme
    if (document.querySelector('.mrgamb-header')) {
      return;
    }
    
    // Header HTML'ini oluştur
    const headerHTML = `
      <div class="mrgamb-header">
        <div class="header-top">
          <div class="header-left">
            <div class="logo">
              <span class="logo-icon">👑</span>
              <span class="logo-text">MRGAMB COMMUNITY</span>
            </div>
          </div>
          <div class="header-right">
            <div class="header-icons">
              <div class="icon search-icon">🔍</div>
              <div class="icon notification-icon">🔔</div>
              <div class="icon user-icon">👤</div>
              <div class="icon menu-icon">☰</div>
            </div>
          </div>
        </div>
        
        <div class="search-container">
          <div class="search-bar">
            <div class="search-icon">🔍</div>
            <input type="text" placeholder="Tekrar hoş geldin, Zacoe!" class="search-input">
          </div>
        </div>
        
        <div class="nav-container">
          <div class="nav-tabs">
            <div class="nav-tab active">Kategoriler</div>
            <div class="nav-tab">Konular</div>
            <div class="nav-tab">En son</div>
            <div class="nav-tab">Yeni <span class="badge">1</span></div>
            <div class="nav-tab">Popüler</div>
          </div>
          <div class="nav-actions">
            <button class="new-topic-btn">
              <span class="plus-icon">+</span>
              Yeni Konu
            </button>
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
  },
  
  addMainLayout() {
    // Eğer layout zaten varsa ekleme
    if (document.querySelector('.mrgamb-layout')) {
      return;
    }
    
    // Ana içerik alanını bul
    const mainContent = document.querySelector('#main-outlet') || document.querySelector('.container');
    if (!mainContent) return;
    
    // Layout HTML'ini oluştur
    const layoutHTML = `
      <div class="mrgamb-layout">
        <div class="categories-column">
          <div class="categories-header">Kategori</div>
          <div class="category-list">
            <div class="category-card">
              <div class="category-content">
                <div class="category-icon staff">👥</div>
                <div class="category-info">
                  <div class="category-name">Staff</div>
                  <div class="category-description">Yönetim ve moderatör konuları</div>
                </div>
                <div class="category-stats">3</div>
              </div>
            </div>
            
            <div class="category-card">
              <div class="category-content">
                <div class="category-icon general">⚙️</div>
                <div class="category-info">
                  <div class="category-name">General</div>
                  <div class="category-description">Genel tartışma konuları</div>
                </div>
                <div class="category-stats">12</div>
              </div>
            </div>
            
            <div class="category-card">
              <div class="category-content">
                <div class="category-icon casino">🎲</div>
                <div class="category-info">
                  <div class="category-name">Casino</div>
                  <div class="category-description">Casino oyunları ve stratejileri</div>
                </div>
                <div class="category-stats">8</div>
              </div>
            </div>
            
            <div class="category-card">
              <div class="category-content">
                <div class="category-icon sports">🏀</div>
                <div class="category-info">
                  <div class="category-name">Sports</div>
                  <div class="category-description">Spor bahisleri ve analizler</div>
                </div>
                <div class="category-stats">15</div>
              </div>
            </div>
            
            <div class="category-card">
              <div class="category-content">
                <div class="category-icon local">📍</div>
                <div class="category-info">
                  <div class="category-name">Local</div>
                  <div class="category-description">Yerel etkinlikler ve buluşmalar</div>
                </div>
                <div class="category-stats">6</div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="topics-column">
          <div class="topics-header">Konular</div>
          <div class="topic-list">
            <div class="topic-card">
              <div class="topic-content">
                <div class="topic-avatar blue">A</div>
                <div class="topic-info">
                  <div class="topic-title">Forum Rank System - Stay Active, Level Up, Unlock Privileges!</div>
                  <div class="topic-meta">General • Forum sistemi hakkında</div>
                </div>
                            <div class="topic-stats">
              <div class="topic-count">5</div>
              <div class="topic-time">41 dk</div>
            </div>
              </div>
            </div>
            
            <div class="topic-card">
              <div class="topic-content">
                <div class="topic-avatar purple">G</div>
                <div class="topic-info">
                  <div class="topic-title">Yeni üyeler için hoş geldin rehberi</div>
                  <div class="topic-meta">General • Yeni başlayanlar</div>
                </div>
                            <div class="topic-stats">
              <div class="topic-count">2</div>
              <div class="topic-time">17 dk</div>
            </div>
              </div>
            </div>
            
            <div class="topic-card">
              <div class="topic-content">
                <div class="topic-avatar yellow">B</div>
                <div class="topic-info">
                  <div class="topic-title">Casino stratejileri ve ipuçları</div>
                  <div class="topic-meta">Casino • Strateji paylaşımı</div>
                </div>
                            <div class="topic-stats">
              <div class="topic-count">1</div>
              <div class="topic-time">5g</div>
            </div>
              </div>
            </div>
            
            <div class="topic-card">
              <div class="topic-content">
                <div class="topic-avatar orange">E</div>
                <div class="topic-info">
                  <div class="topic-title">Bu hafta sonu spor bahisleri</div>
                  <div class="topic-meta">Sports • Bahis analizi</div>
                </div>
                            <div class="topic-stats">
              <div class="topic-count">2</div>
              <div class="topic-time">20 May</div>
            </div>
              </div>
            </div>
            
            <div class="topic-card">
              <div class="topic-content">
                <div class="topic-avatar green">M</div>
                <div class="topic-info">
                  <div class="topic-title">Topluluk kuralları ve yönergeler</div>
                  <div class="topic-meta">Staff • Kurallar</div>
                </div>
                <div class="topic-stats">
                  <div class="topic-count">3</div>
                  <div class="topic-time">2 gün</div>
                </div>
              </div>
            </div>
            
            <div class="topic-card">
              <div class="topic-content">
                <div class="topic-avatar cyan">S</div>
                <div class="topic-info">
                  <div class="topic-title">Yerel etkinlikler ve buluşmalar</div>
                  <div class="topic-meta">Local • Etkinlikler</div>
                </div>
                <div class="topic-stats">
                  <div class="topic-count">4</div>
                  <div class="topic-time">1 hafta</div>
                </div>
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
  
  addEventListeners() {
    // Navigasyon sekmeleri için event listener
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('nav-tab')) {
        // Aktif sekmeyi değiştir
        document.querySelectorAll('.nav-tab').forEach(tab => {
          tab.classList.remove('active');
        });
        e.target.classList.add('active');
      }
    });
    
    // Arama çubuğu için event listener
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
      searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          // Arama işlemini gerçekleştir
          console.log('Arama yapılıyor:', e.target.value);
        }
      });
    }
    
    // Yeni konu butonu için event listener
    const newTopicBtn = document.querySelector('.new-topic-btn');
    if (newTopicBtn) {
      newTopicBtn.addEventListener('click', () => {
        // Yeni konu oluşturma sayfasına yönlendir
        window.location.href = '/new-topic';
      });
    }
  }
}; 