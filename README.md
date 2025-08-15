# 🏨 Hotels Project - Konaklama Yeri Yönetim Sistemi

Modern web teknolojileri kullanılarak geliştirilmiş, otel ve konaklama yerlerini yönetebileceğiniz full-stack web uygulaması.

## ✨ Özellikler

- 🏠 **Konaklama Yeri Listesi**: Tüm konaklama yerlerini görüntüleme
- 🔍 **Filtreleme**: Lokasyon, fiyat ve özelliklere göre arama
- ➕ **Yeni Ekleme**: Formik ve Yup validasyonu ile yeni konaklama yeri ekleme
- 📖 **Detay Görüntüleme**: Konaklama yeri detaylarını inceleme
- 🗑️ **Silme**: Konaklama yerlerini silme
- 📱 **Responsive Tasarım**: Mobil ve masaüstü uyumlu
- ⚡ **Modern UI/UX**: Tailwind CSS ile şık arayüz

## 🛠️ Teknolojiler

### Frontend
- **React 19** - Modern React kütüphanesi
- **TypeScript** - Tip güvenliği
- **Vite** - Hızlı build tool
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Sayfa yönlendirme
- **React Query (TanStack Query)** - Server state yönetimi
- **Formik + Yup** - Form yönetimi ve validasyon
- **Axios** - HTTP client
- **React Icons** - İkon kütüphanesi
- **React Toastify** - Bildirimler

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing
- **Nodemon** - Development server

## 🚀 Kurulum

### Gereksinimler
- Node.js (v18+)
- npm veya yarn

### Backend Kurulumu
```bash
cd backend
npm install
npm start
```

Backend `http://localhost:4001` portunda çalışacak.

### Frontend Kurulumu
```bash
cd frontend
npm install
npm run dev
```

Frontend `http://localhost:5173` portunda çalışacak.

## 📁 Proje Yapısı

```
hotels-project/
├── backend/                 # Node.js + Express API
│   ├── controllers/        # İş mantığı
│   ├── routes/            # API endpoint'leri
│   ├── middleware/        # Ara yazılımlar
│   ├── utils/             # Yardımcı fonksiyonlar
│   └── server.js          # Ana sunucu dosyası
├── frontend/              # React + TypeScript uygulaması
│   ├── src/
│   │   ├── components/    # Yeniden kullanılabilir bileşenler
│   │   ├── pages/         # Sayfa bileşenleri
│   │   ├── types/         # TypeScript tip tanımları
│   │   └── utils/         # Yardımcı fonksiyonlar
│   └── public/            # Statik dosyalar
└── README.md
```

## 🔌 API Endpoints

| Method | Endpoint | Açıklama |
|--------|----------|----------|
| GET | `/api/places` | Tüm konaklama yerlerini getir |
| POST | `/api/places` | Yeni konaklama yeri ekle |
| GET | `/api/place/:id` | Belirli konaklama yerini getir |
| DELETE | `/api/place/:id` | Konaklama yerini sil |

## 📱 Kullanım

1. **Ana Sayfa**: Tüm konaklama yerlerini görüntüle ve filtrele
2. **Yeni Ekleme**: "Create" sayfasından yeni konaklama yeri ekle
3. **Detay Görüntüleme**: Herhangi bir konaklama yerine tıklayarak detayları incele
4. **Silme**: Detay sayfasından konaklama yerini sil

## 🎨 UI Bileşenleri

- **Header**: Navigasyon menüsü
- **Hero**: Ana sayfa banner'ı
- **Filter**: Arama ve filtreleme
- **Card**: Konaklama yeri kartları
- **Rating**: Yıldız değerlendirme sistemi
- **Status**: Müsaitlik durumu
- **Loader**: Yükleme animasyonu
- **Error**: Hata mesajları

## 🔧 Geliştirme

### Frontend Scripts
```bash
npm run dev      # Development server
npm run build    # Production build
npm run lint     # ESLint kontrolü
npm run preview  # Build önizleme
```

### Backend Scripts
```bash
npm start        # Development server (nodemon)
```

## 📊 Veri Yapısı

```typescript
interface Place {
  id: number;
  name: string;
  location: string;
  address: string;
  description: string;
  amenities: string[];
  rating: number;
  price_per_night: number;
  availability: boolean;
  image_url: string;
}
```

## 🌟 Öne Çıkan Özellikler

- **Modern React Patterns**: React 19, hooks, functional components
- **Type Safety**: Tam TypeScript desteği
- **Performance**: React Query ile optimize edilmiş veri yönetimi
- **Form Validation**: Formik + Yup ile güçlü form validasyonu
- **Responsive Design**: Tailwind CSS ile mobil uyumlu tasarım
- **Error Handling**: Kapsamlı hata yönetimi ve kullanıcı bildirimleri

## 🚀 Deployment

### Vercel
Frontend Vercel'de deploy edilebilir. `vercel.json` dosyası SPA routing için gerekli konfigürasyonu içerir.

### Netlify
`public/_redirects` dosyası Netlify deployment'ı için hazır.

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 👨‍💻 Geliştirici

**Esra Akar** - [GitHub](https://github.com/yourusername)

---

⭐ 
