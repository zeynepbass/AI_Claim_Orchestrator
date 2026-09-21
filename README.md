# AI Claim Orchestrator

AI Claim Orchestrator, geleneksel sigorta hasar takip sürecini daha anlaşılır, hızlı ve kullanıcı odaklı bir dijital deneyime dönüştürmek amacıyla geliştirilmiş responsive bir dashboard uygulamasıdır.

Kullanıcılar bu panel üzerinden:

- hasar dosya numarasını görüntüleyebilir
- mevcut süreç durumunu takip edebilir
- kalan tahmini süreyi görebilir
- gerekli aksiyonları öğrenebilir
- belge yükleyebilir
- teknik süreç adımlarını yapay zeka destekli açıklamalarla anlayabilir

## Proje Amacı

Kullanıcıların sürekli çağrı merkezine ulaşmadan kendi hasar süreçlerini kolayca takip edebilecekleri modern bir self-service deneyimi oluşturmaktır. Dashboard şu sorulara cevap verir:

- Dosya numaram nedir?
- Süreç şu anda hangi aşamada?
- Daha ne kadar sürecek?
- Benim şu anda yapmam gereken bir işlem var mı?

## Özellikler

- Responsive, mobile-first tasarım
- Süreç özet kartları ve ilerleme yüzdesi göstergesi
- Timeline tabanlı, adım adım hasar durumu görüntüleme
- Her süreç adımı için AI açıklama paneli
- Simüle edilmiş AI belge analiz alanı
- Aksiyon gerektiren adımların vurgulanması
- Süreç adımı başlığına göre özel node component'i seçen genişletilebilir yapı

## Kullanılan Teknolojiler

| Alan | Teknoloji |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| UI | [React 19](https://react.dev/) |
| Dil | JavaScript |
| Stil | [Tailwind CSS 4](https://tailwindcss.com/), `tw-animate-css` |
| Bileşen kütüphanesi | [shadcn/ui](https://ui.shadcn.com/) (Radix UI tabanlı) |
| Sunucu durumu | [TanStack React Query](https://tanstack.com/query) |
| İstemci durumu | [Zustand](https://zustand-demo.pmnd.rs/) |
| İkonlar | [Lucide React](https://lucide.dev/) |
| Yardımcılar | `clsx`, `tailwind-merge`, `class-variance-authority` |
| Kalite | ESLint (`eslint-config-next`) |

## Proje Yapısı

```
app/                      Next.js App Router (layout, page, global stiller)
components/
  ai/                     AI açıklama paneli ve belge yükleme kutusu
  common/                 Ortak küçük bileşenler (InfoTile)
  dashboard/              Sayfa bölümleri (hero, progress, quick overview, skeleton, error)
  process/                Timeline, node bileşenleri, status badge, explain button
    nodes/                Adıma özel node kartları
  summary/                Özet kartları
  ui/                     shadcn/ui bileşenleri
features/claim/
  api/                    Mock API çağrısı
  constants/              Durum stilleri ve AI açıklama metinleri
  hooks/                  React Query hook'ları
  store/                  Zustand store
  utils/                  Saf yardımcı fonksiyonlar (progress, action, label formatlama)
lib/                      Genel yardımcılar (`cn`)
mocks/                    Örnek hasar verisi
providers/                React Query provider
```

## Kurulum

```bash
npm install
npm run dev
```

Uygulama `http://localhost:3000` adresinde çalışır.

## Komutlar

| Komut | Açıklama |
| --- | --- |
| `npm run dev` | Geliştirme sunucusunu başlatır |
| `npm run build` | Production build alır |
| `npm run start` | Production build'i çalıştırır |
| `npm run lint` | ESLint kontrolü yapar |
