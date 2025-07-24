# MRGambCommunity Theme

MRGambCommunity sitesinin tasarımını birebir taklit eden modern ve şık bir Discourse teması.

## 🎨 Tasarım Özellikleri

- **Mor Renk Teması**: #780ede ana renk ile modern görünüm
- **Koyu Tema**: Göz yormayan koyu arka plan
- **Responsive Tasarım**: Tüm cihazlarda mükemmel görünüm
- **Modern UI/UX**: Stake Community sitesinin tasarım dilini yansıtan arayüz
- **Özel Bileşenler**: Promosyon bannerları, istatistik kartları ve daha fazlası

## 🚀 Kurulum

### 1. GitHub'dan İndirme

1. Bu repository'yi GitHub'a yükleyin
2. Discourse admin panelinde "Themes & components" bölümüne gidin
3. "Upload" butonuna tıklayın
4. "From Git repository" sekmesini seçin
5. Repository URL'sini girin: `https://github.com/aendirr/aendir-discourse-theme`
6. "Upload" butonuna tıklayın

### 2. Manuel Kurulum

1. Bu repository'yi indirin
2. ZIP dosyası oluşturun
3. Discourse admin panelinde "Upload" butonuna tıklayın
4. "From your device" sekmesini seçin
5. ZIP dosyasını yükleyin

## 📁 Dosya Yapısı

```
mrgambcommunity-theme/
├── about.json              # Tema bilgileri ve ayarları
├── common/
│   ├── base.scss           # Temel stiller
│   ├── header.scss         # Header tasarımı
│   └── components.scss     # Özel bileşenler
├── assets/
│   ├── mrgamb-logo.png     # MRGambCommunity logosu
│   ├── slot-machine.png    # Slot makinesi görseli
│   ├── fighter-celebration.png # Sporcu görseli
│   └── gold-coins.png      # Altın paralar görseli
└── README.md               # Bu dosya
```

## 🎯 Özellikler

### Renk Paleti
- **Ana Renk**: #780ede (Mor)
- **Açık Mor**: #9a2ff0
- **Koyu Mor**: #5a0a9e
- **Arka Plan**: #1a1a2e
- **Vurgu**: #00d4ff (Cyan)

### Özel Bileşenler
- **Promosyon Bannerları**: Gradient arka planlı modern bannerlar
- **İstatistik Kartları**: Forum ve üye istatistikleri
- **Kategori İkonları**: Renkli kategori simgeleri
- **Özel Navigasyon**: MRGambCommunity tarzı navigasyon menüsü

### Responsive Tasarım
- Mobil cihazlarda optimize edilmiş görünüm
- Tablet ve desktop için özel düzenlemeler
- Esnek grid sistemi

## 🔧 Özelleştirme

### Renk Değiştirme
`common/base.scss` dosyasındaki CSS değişkenlerini düzenleyerek renkleri değiştirebilirsiniz:

```scss
:root {
  --mrgamb-primary: #780ede;
  --mrgamb-primary-light: #9a2ff0;
  --mrgamb-secondary: #1a1a2e;
  // ... diğer renkler
}
```

### Görsel Ekleme
`assets/` klasörüne yeni görseller ekleyebilir ve `about.json` dosyasında tanımlayabilirsiniz.

## 📱 Desteklenen Özellikler

- ✅ Koyu tema
- ✅ Responsive tasarım
- ✅ Modern UI bileşenleri
- ✅ Özel renk paleti
- ✅ MRGambCommunity tasarım dili
- ✅ Mobil uyumlu
- ✅ Hızlı yükleme
- ✅ SEO dostu

## 🐛 Sorun Giderme

### Tema Yüklenmiyor
1. ZIP dosyasının doğru oluşturulduğundan emin olun
2. `about.json` dosyasının geçerli JSON formatında olduğunu kontrol edin
3. Discourse sürümünüzün uyumlu olduğunu kontrol edin

### Görseller Görünmüyor
1. `assets/` klasöründeki görsellerin mevcut olduğunu kontrol edin
2. Dosya isimlerinin `about.json`'da tanımlanan isimlerle eşleştiğini kontrol edin

### Stil Sorunları
1. Tarayıcı önbelleğini temizleyin
2. Discourse'u yeniden başlatın
3. Tema dosyalarının doğru yüklendiğini kontrol edin

## 🤝 Katkıda Bulunma

1. Bu repository'yi fork edin
2. Yeni bir branch oluşturun (`git checkout -b feature/yeni-ozellik`)
3. Değişikliklerinizi commit edin (`git commit -am 'Yeni özellik eklendi'`)
4. Branch'inizi push edin (`git push origin feature/yeni-ozellik`)
5. Pull Request oluşturun

## 📄 Lisans

Bu tema MIT lisansı altında lisanslanmıştır. Detaylar için `LICENSE` dosyasına bakın.

## 🙏 Teşekkürler

- [MRGambCommunity](https://mrgambcommunity.com) - Tasarım ilhamı için
- [Discourse](https://discourse.org) - Harika forum platformu için

## 📞 İletişim

Sorularınız veya önerileriniz için:
- GitHub Issues: [Repository Issues](https://github.com/kullaniciadi/mrgambcommunity-theme/issues)
- Email: your-email@example.com

---

**Not**: Bu tema MRGambCommunity sitesinin tasarımını taklit etmek için oluşturulmuştur. Ticari kullanım için gerekli izinleri aldığınızdan emin olun. 