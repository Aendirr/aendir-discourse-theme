# Stake Community Forum - Modern Bahis Forumu

Bu proje, Stake Community Forum'un birebir klonunu Svelte ile oluşturmuş modern bir bahis ve kumar forumudur.

## 🎯 Özellikler

- **Modern Tasarım**: Stake Community Forum'un birebir aynısı
- **Responsive Layout**: Tüm cihazlarda mükemmel görünüm
- **Swiper Carousel**: Sağ sidebar'da 3 adet altalta görsel ile swiper
- **Forum Bölümleri**: Recent Discussions, Promotions, Stake kategorileri
- **İstatistikler**: Forum ve üye istatistikleri
- **Dark Theme**: Modern koyu tema tasarımı

## 🚀 Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## 📁 Proje Yapısı

```
src/
├── lib/
│   └── components/
│       ├── Header.svelte          # Üst menü
│       ├── LeftSidebar.svelte     # Sol sidebar
│       ├── MainContent.svelte     # Ana içerik
│       ├── RightSidebar.svelte    # Sağ sidebar (Swiper)
│       ├── ForumSection.svelte    # Forum tartışmaları
│       ├── PromotionsSection.svelte # Promosyonlar
│       └── StakeSection.svelte    # Stake kategorileri
├── routes/
│   ├── +layout.svelte
│   └── +page.svelte
└── app.css                        # Global stiller
```

## 🎨 Tasarım Özellikleri

### Renk Paleti
- **Ana Arka Plan**: `#1A202C` (Koyu mavi-gri)
- **Sidebar Arka Plan**: `#171923` (Daha koyu gri)
- **Kart Arka Plan**: `#2D3748` (Orta gri)
- **Vurgu Rengi**: `#48BB78` (Yeşil)
- **Mavi Vurgu**: `#63B3ED` (Açık mavi)
- **Turuncu Vurgu**: `#ED8936` (Turuncu)

### Swiper Carousel
Sağ sidebar'da 3 adet görsel:
1. **Video Banner**: "TO 16 FREE GAMES" slot oyunları
2. **İstatistikler**: Wagered/Paid değerleri
3. **Challenge Banner**: "UP FOR A CHALLENGE?" dövüş eldivenleri

### Forum Bölümleri
- **Recent Discussions**: Son tartışmalar
- **Promotions**: Promosyon kategorileri
- **Stake**: Stake özel kategorileri

## 🛠️ Teknolojiler

- **Svelte 4**: Modern frontend framework
- **SvelteKit**: Full-stack framework
- **Swiper**: Carousel/slider kütüphanesi
- **Lucide Icons**: Modern ikon seti
- **Vite**: Hızlı build tool

## 📱 Responsive Tasarım

Proje tüm cihazlarda mükemmel görünüm sağlar:
- Desktop (1400px+)
- Tablet (768px - 1399px)
- Mobile (320px - 767px)

## 🎯 Hedef Kitle

Bu forum özellikle şu kullanıcılar için tasarlanmıştır:
- Bahis ve kumar tutkunları
- Spor bahisleri oyuncuları
- Casino oyuncuları
- Poker oyuncuları
- Topluluk üyeleri

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📞 İletişim

Proje hakkında sorularınız için issue açabilirsiniz.
