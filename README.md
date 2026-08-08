# Gapai Mentorship Hub

Baca dan pahami seluruh file Markdown serta screenshot referensi yang dilampirkan, lalu langsung implementasikan website tanpa merangkum dokumen, tanpa menampilkan implementation plan, tanpa meminta konfirmasi, dan tanpa berhenti sebelum homepage selesai.

Seluruh file Markdown adalah source of truth. Gunakan urutan prioritas berikut jika ada konflik:

PRD.md

BRAND_ARCHITECTURE.md

DESIGN_SYSTEM.md

SITEMAP.md

CONTENT_STYLE_GUIDE.md

TECHNICAL_SPEC.md

AGENTS.md

Screenshot versi Bolt adalah benchmark kualitas visual dan interaction design. Pelajari hierarchy, composition, whitespace, layered depth, card treatment, gradient, program finder, header, CTA, serta pengalaman desktop dan mobile dari screenshot tersebut. Jangan menyalin secara literal, tetapi hasil akhirnya harus sama menariknya atau lebih baik.

Bangun homepage resmi Gapai Mentorship sebagai parent education ecosystem yang menaungi empat brand sejajar:

Brilia: belajar dan fondasi akademik.

Joytalk English: berkomunikasi dalam bahasa Inggris.

Kidspro ID: berkarya dan keterampilan digital.

ELS School: bertumbuh melalui public speaking dan life skill.

Primary user journey:

kebutuhan anak → rekomendasi brand → memahami program → konsultasi melalui WhatsApp.

TECHNICAL FOUNDATION

Gunakan stack native project Lovable terbaru: TanStack Start dengan SSR, React, strict TypeScript, TanStack Router, dan Tailwind CSS.

Gunakan server rendering dan progressive enhancement.

Gunakan semantic design tokens untuk warna, typography, spacing, radius, shadow, dan motion.

Pisahkan layout, sections, interactive components, content data, navigation, brand configuration, dan WhatsApp configuration.

Jangan membuat homepage sebagai satu file besar.

Buat setiap section sebagai komponen terpisah dan reusable.

Pisahkan seluruh data dan konfigurasi dari JSX.

Gunakan client-side state hanya untuk komponen yang benar-benar interaktif.

Jangan memasang dependency atau komponen UI yang tidak digunakan.

Jangan menghasilkan puluhan komponen Shadcn generik.

Jangan mengaktifkan Supabase, Lovable Cloud, authentication, database, checkout, payment, CRM, atau penyimpanan lead. MVP ini adalah public marketing website.

Siapkan content abstraction yang mudah dihubungkan dengan Sanity CMS nanti, tetapi jangan membuat project ID, dataset, credential, atau data Sanity palsu.

Gunakan Bahasa Indonesia dan pastikan root HTML memakai lang="id".

Buat fondasi routing berdasarkan SITEMAP.md agar dapat dilanjutkan ke halaman lain tanpa perlu mengubah homepage.

Jangan membuat link internal palsu atau link yang terlihat aktif tetapi tidak berfungsi.

Jangan meninggalkan metadata default seperti “Lovable App”, author “Lovable”, twitter handle Lovable, atau teks sistem berbahasa Inggris.

VISUAL DIRECTION

Hasil harus terasa:

modern;

premium;

hangat;

edukatif;

expressive;

trustworthy;

polished;

editorial;

sedikit cinematic;

tidak terasa seperti template SaaS atau kumpulan komponen default.

Gunakan parent-brand blue sebagai warna dominan. Warna Brilia, Joytalk English, Kidspro ID, dan ELS School digunakan sebagai accent yang seimbang, bukan sebagai empat desain terpisah.

Gunakan:

strong typography hierarchy;

generous whitespace;

soft organic gradients;

organic background shapes;

layered depth;

refined shadows;

subtle glow;

restrained glass effect;

rounded cards yang konsisten;

tasteful hover movement;

smooth selection states;

subtle reveal animation;

responsive composition.

Hindari:

tampilan terlalu datar;

grid kartu monoton;

semua section berwarna putih;

icon di dalam kotak yang berulang tanpa variasi;

logo berupa huruf “G” di dalam rounded square;

gradient berlebihan;

animasi agresif;

dekorasi anak-anak yang terlalu ramai;

penggunaan warna child brand sebagai warna utama website.

Gunakan logo resmi yang dilampirkan. Jika belum ada logo resmi, gunakan temporary text wordmark “Gapai Mentorship” yang sederhana, premium, dan mudah diganti. Jangan membuat simbol logo baru.

Gunakan hanya gambar yang dilampirkan atau disetujui. Jangan mengarang foto kegiatan, foto anak, dokumentasi kelas, penghargaan, statistik, testimonial, artikel, tanggal, social handle, alamat, ataupun klaim bisnis.

Jika gambar suatu section belum tersedia, gunakan visual placeholder abstrak yang tetap terlihat intentional dan mudah diganti, bukan gradient dengan nama brand di tengah.

HOMEPAGE STRUCTURE

Implementasikan homepage lengkap dengan urutan:

Sticky responsive header.

High-impact hero.

Trust snapshot.

Interactive outcome-based program finder.

Four equal brand cards.

Why Gapai/value proposition.

Three-step consultation journey.

Activity/proof gallery jika aset tersedia.

Verified testimonials jika data asli tersedia.

Latest articles jika konten asli tersedia.

FAQ.

Final consultation CTA.

Complete footer.

HEADER

Sticky dengan background translucent saat scroll.

Gunakan logo/wordmark Gapai.

Navigasi desktop dan mobile.

Program & Brand memiliki accessible dropdown.

CTA utama: “Konsultasikan Kebutuhan Anak”.

Mobile menu harus mendukung Escape, focus management, scroll lock, dan keyboard navigation.

Tambahkan skip link menuju main content.

HERO

Hero harus menjadi bagian visual terkuat dan tidak boleh terlihat seperti template standar teks-kiri-gambar-kanan yang datar.

Gunakan layered editorial composition berdasarkan screenshot Bolt:

badge singkat tentang ekosistem;

headline kuat;

empat kata beraccent: belajar, berkomunikasi, berkarya, dan bertumbuh;

supporting copy yang hangat;

primary CTA WhatsApp;

secondary CTA menuju program finder;

approved hero image atau visual;

floating information/proof card;

organic gradient background;

visual depth tanpa mengorbankan readability.

PROGRAM FINDER

Program finder harus benar-benar interaktif, bukan hanya empat link.

Pengguna dapat memilih:

Calistung dan pelajaran SD.

Bahasa Inggris anak.

Karya digital dan coding.

Public speaking dan life skill.

Setelah dipilih, tampilkan recommendation panel berisi:

brand yang direkomendasikan;

alasan rekomendasi;

deskripsi singkat;

kompetensi utama;

accent color brand;

CTA melihat program;

CTA konsultasi kontekstual;

tombol reset.

Gunakan accessible button, aria-pressed, keyboard state, visible selected state, dan transisi yang halus.

BRAND CARDS

Tampilkan empat brand dengan prominence yang setara. Setiap kartu memuat:

nama brand;

kata kerja utama;

fokus;

rentang kebutuhan;

tiga kompetensi;

CTA;

accent color masing-masing.

Jangan membuat salah satu child brand terlihat sebagai parent atau lebih utama daripada yang lain.

CONSULTATION JOURNEY

Gunakan section dark navy yang premium dengan tiga langkah:

Ceritakan kebutuhan anak.

Temukan brand yang sesuai.

Mulai pendampingan.

Buat alur visual yang terhubung, bukan tiga kartu yang terpisah tanpa hubungan.

CONTENT RULES

Gunakan copy nyata yang tersedia dalam dokumen.

Jangan gunakan lorem ipsum.

Jangan membuat nomor WhatsApp.

Simpan nomor WhatsApp pada satu file konfigurasi.

Jika nomor belum tersedia, jangan arahkan pengguna ke nomor palsu.

Sembunyikan testimonial jika testimonial terverifikasi belum tersedia.

Sembunyikan latest articles jika artikel asli belum tersedia.

Jangan mengarang “sudah dipercaya ratusan orang tua”, rating, jumlah siswa, tahun pengalaman, atau statistik lain.

Nada harus hangat, jelas, suportif, dan tidak menggunakan fear tactics.

ACCESSIBILITY AND RESPONSIVENESS

Target WCAG 2.2 AA:

semantic HTML;

logical heading hierarchy;

keyboard navigation;

visible focus state;

skip link;

accessible dropdown dan dialog;

aria-expanded dan aria-pressed;

sufficient contrast;

descriptive alt text;

minimum touch target;

reduced-motion support;

tidak bergantung pada warna saja.

Pastikan layout bekerja pada:

360 px;

390 px;

768 px;

1024 px;

1440 px.

Tidak boleh ada horizontal overflow, teks terpotong, CTA keluar layar, atau kartu terlalu sempit.

SEO AND PRODUCTION READINESS

Buat homepage metadata yang benar.

Gunakan title dan description berbahasa Indonesia.

Siapkan Open Graph dan Twitter Card menggunakan aset lokal yang sesuai.

Jangan memakai default image Lovable.

Siapkan canonical configuration.

Siapkan robots dan sitemap foundation.

Tambahkan semantic organization information jika datanya tersedia.

Gunakan width dan height pada gambar untuk mencegah layout shift.

Lazy-load gambar di bawah fold.

Hindari JavaScript dan dependency yang tidak diperlukan.

Jangan membuat fake environment variable.

Pastikan .env dan secret file masuk .gitignore.

FINAL VERIFICATION

Setelah implementasi selesai:

Jalankan typecheck.

Jalankan lint.

Jalankan production build.

Perbaiki seluruh error.

Gunakan browser testing untuk desktop dan mobile.

Periksa header, mobile menu, dropdown, program finder, FAQ, CTA, keyboard navigation, dan internal links.

Periksa horizontal overflow pada seluruh breakpoint.

Pastikan tidak ada metadata Lovable, nomor WhatsApp palsu, testimonial palsu, artikel palsu, social link palsu, dead link, atau halaman berbahasa Inggris.

Pastikan hanya dependency dan komponen yang benar-benar digunakan yang tersisa.

Jangan berhenti hanya pada skeleton atau wireframe. Selesaikan homepage dalam satu pengerjaan dengan visual high-fidelity, responsive, modular, production-oriented, dan semenarik benchmark Bolt.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/6dc261c4-2c3b-4efc-85eb-d276e0606bea).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
