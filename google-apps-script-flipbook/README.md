# Google Apps Script PDF Flipbook

Google Drive'daki PDF dosyalarını interaktif bir "flipbook" (sayfa çevirme efektli kitap) olarak görüntüleyen web uygulaması.

## Özellikler

- ✅ PDF dosyalarını Google Drive'dan okuma
- ✅ Gerçekçi sayfa çevirme efekti (Turn.js)
- ✅ Çift sayfa görünümü
- ✅ Klavye, fare ve buton kontrolü
- ✅ Responsive tasarım
- ✅ Sayfa göstergesi

## Kurulum

### 1. Google Apps Script Projesi Oluşturma

1. [script.google.com](https://script.google.com) adresine gidin
2. "Yeni proje" butonuna tıklayın
3. Projeye bir isim verin (örn: "PDF Flipbook")

### 2. Dosyaları Ekleme

#### Kod.gs (Sunucu Tarafı)
1. Varsayılan `Code.gs` dosyasını açın
2. `Kod.gs` dosyasının içeriğini kopyalayıp yapıştırın
3. `PDF_DOSYA_ID` değişkenine kendi PDF dosyanızın ID'sini girin

#### index.html (İstemci Tarafı)
1. `+` simgesine tıklayın → "HTML dosyası" seçin
2. Dosya adını `index` olarak belirleyin
3. `index.html` dosyasının içeriğini kopyalayıp yapıştırın

#### stil.css (Stil Dosyası)
1. `+` simgesine tıklayın → "HTML dosyası" seçin
2. Dosya adını `stil` olarak belirleyin (`.css` uzantısı eklemeyin)
3. `stil.css` dosyasının içeriğini kopyalayıp yapıştırın

### 3. PDF Dosya ID'sini Bulma

1. Google Drive'da PDF dosyanızı açın
2. Tarayıcı adres çubuğundaki URL'yi kopyalayın
3. URL formatı: `https://drive.google.com/file/d/DOSYA_ID/view`
4. `/d/` ve `/view` arasındaki kısmı kopyalayın (bu sizin dosya ID'niz)
5. `Kod.gs` dosyasında `PDF_DOSYA_ID` değişkenine yapıştırın

**Örnek:**
```javascript
var PDF_DOSYA_ID = '1KSsIMeXKKH4zMuwFDthvdtC9ia0AgIWg';
```

### 4. Web Uygulaması Olarak Dağıtma

1. **Dağıt** → **Yeni dağıtım** seçin
2. Dişli simgesine tıklayın
3. **"Web uygulaması"** seçin
4. Ayarları yapılandırın:
   - **Uygulamayı şu şekilde çalıştır:** Ben
   - **Erişimi olan kullanıcılar:** Herkes / Herkes (anonim) / Sadece ben (ihtiyacınıza göre)
5. **Dağıt** butonuna tıklayın
6. İzinleri onaylayın:
   - **Gelişmiş**'e tıklayın
   - **"[Proje Adı]'ne git (güvenli değil)"** linkine tıklayın
   - İzinleri kabul edin
7. Web uygulaması URL'sini kopyalayın

### 5. Test Etme

1. Dağıtım URL'sini tarayıcıda açın
2. PDF yüklenmesini bekleyin
3. Flipbook görünmeli!

## Kullanım

### Sayfa Çevirme Yöntemleri

1. **Fare ile:**
   - Sayfanın köşelerini tutup sürükleyin
   - Sayfa çevirme efekti görünecek

2. **Butonlarla:**
   - **◀ Önceki** butonu ile önceki sayfaya gidin
   - **Sonraki ▶** butonu ile sonraki sayfaya gidin

3. **Klavye ile:**
   - **←** (Sol ok tuşu): Önceki sayfa
   - **→** (Sağ ok tuşu): Sonraki sayfa

### Sayfa Göstergesi

Flipbook'un altında mevcut sayfa bilgisi gösterilir:
```
Sayfa 1 / 38
```

## Dosya Yapısı

```
google-apps-script-flipbook/
├── Kod.gs          # Sunucu tarafı kodu (Google Apps Script)
├── index.html      # İstemci tarafı HTML ve JavaScript
├── stil.css        # CSS stilleri
└── README.md       # Bu dosya
```

## Teknik Detaylar

### Kullanılan Kütüphaneler

- **jQuery 3.6.0**: DOM manipülasyonu
- **jQuery UI 1.12.1**: Turn.js için gerekli bağımlılık
- **Turn.js**: Sayfa çevirme efekti
- **PDF.js 3.11.174**: PDF rendering

### Tarayıcı Uyumluluğu

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

### Performans

- PDF sayfaları sırayla render edilir
- Canvas kullanılarak yüksek kaliteli görüntüleme
- Sayfa boyutları otomatik ölçeklenir (400x600px)

## Sorun Giderme

### Turn.js Yüklenmiyor

Tarayıcı konsolunda şu hatayı görüyorsanız:
```
Turn.js başlatma hatası: TypeError: $(...).turn is not a function
```

**Çözüm:**
1. İnternet bağlantınızı kontrol edin
2. CDN'lerin erişilebilir olduğundan emin olun
3. Tarayıcı önbelleğini temizleyin (Ctrl+Shift+Delete)

### PDF Yüklenmiyor

**Olası Nedenler:**
1. PDF dosya ID'si yanlış girilmiş
2. PDF dosyasına erişim izni yok
3. Dosya Google Drive'da mevcut değil

**Çözüm:**
1. `Kod.gs` dosyasındaki `PDF_DOSYA_ID` değerini kontrol edin
2. PDF dosyasının paylaşım ayarlarını kontrol edin
3. Google Apps Script izinlerini yeniden verin

### Sadece İlk Sayfa Görünüyor

**Olası Nedenler:**
1. `.page` CSS sınıfı eklenmemiş
2. Turn.js düzgün başlatılmamış

**Çözüm:**
1. Konsol log'larını kontrol edin (F12)
2. "Turn.js başlatıldı!" mesajını görüyor musunuz?
3. `index.html` dosyasının güncel versiyonu kullanılıyor mu?

### Konsol Loglarını Görüntüleme

1. Tarayıcıda **F12** tuşuna basın
2. **Console** sekmesine gidin
3. Şu mesajları görmelisiniz:
   ```
   Sayfa yüklendi, PDF alınıyor...
   PDF yüklendi, toplam sayfa: X
   Tüm sayfalar render edildi: X
   Turn.js başlatıldı!
   ```

## Özelleştirme

### Flipbook Boyutlarını Değiştirme

`stil.css` dosyasında:
```css
#flipbook {
  width: 800px;  /* Toplam genişlik */
  height: 600px; /* Yükseklik */
}

.page {
  width: 400px;  /* Tek sayfa genişliği (toplam/2) */
  height: 600px; /* Sayfa yüksekliği */
}
```

### Sayfa Çevirme Hızını Değiştirme

`index.html` dosyasında:
```javascript
$('#flipbook').turn({
  duration: 1000, // Milisaniye cinsinden (1000 = 1 saniye)
  // ...
});
```

### Tek Sayfa Görünümü

Çift sayfa yerine tek sayfa göstermek için:
```javascript
$('#flipbook').turn({
  display: 'single', // 'double' yerine 'single'
  // ...
});
```

## Lisans

Bu proje eğitim amaçlıdır. Kendi projelerinizde kullanabilirsiniz.

## Destek

Sorunlarınız için:
1. Konsol log'larını kontrol edin
2. Dosya yapısını doğrulayın
3. PDF dosya ID'sini kontrol edin

## Versiyon

- **v1.0.0** - İlk sürüm (2025)
  - PDF okuma
  - Flipbook efekti
  - Navigasyon kontrolleri
  - Responsive tasarım
