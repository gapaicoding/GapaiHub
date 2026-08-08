import type { ContactChannel } from "@/config/whatsapp";

export type BrandId = "brilia" | "joytalk" | "kidspro" | "els";

export type BrandImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  objectPosition?: string;
  isTemporary?: boolean;
};

export type BrandLogoData = {
  src: string;
  alt: string;
  width: number;
  height: number;
  layout: "badge" | "landscape" | "wide";
};

export type Brand = {
  id: BrandId;
  /** Nama publik brand. */
  name: string;
  /** Kata kerja utama dalam ekosistem. */
  verb: string;
  /** Peran brand di ekosistem. */
  role: string;
  /** Positioning statement brand. */
  positioning: string;
  /** Fokus singkat untuk kartu. */
  focus: string;
  /** Rentang kebutuhan yang dijawab. */
  needScope: string;
  /** Tiga kompetensi utama. */
  competencies: [string, string, string];
  /** Kanal konsultasi yang digunakan brand. */
  contactChannel: ContactChannel;
  /** Visual dokumentasi brand. */
  image: BrandImage;
  /** Logo resmi atau rekonstruksi presisi dari aset resmi. */
  logo: BrandLogoData;
  href: string;
  ctaLabel: string;
};

export const brands: Brand[] = [
  {
    id: "brilia",
    name: "Brilia",
    verb: "Belajar",
    role: "Pendampingan akademik dan pembelajaran dasar",
    positioning:
      "Partner belajar anak melalui program Calistung, Matematika, Bimbel Mata Pelajaran, serta Bahasa Arab dan Al-Qur'an yang disesuaikan dengan kebutuhan belajarnya.",
    focus:
      "Calistung, Matematika, Bimbel Mata Pelajaran, serta Bahasa Arab dan Al-Qur'an.",
    needScope:
      "Anak yang sedang membangun kemampuan dasar, membutuhkan pendampingan pelajaran sekolah, atau ingin belajar Bahasa Arab dan Al-Qur'an secara bertahap.",
    competencies: [
      "Calistung dan Matematika",
      "Bimbel Mata Pelajaran",
      "Bahasa Arab dan Al-Qur'an",
    ],
    contactChannel: "brilia",
    image: {
      src: "/images/hero/brilia-temporary.webp",
      alt: "Ilustrasi anak belajar membaca, menulis, dan berhitung bersama pendamping.",
      width: 560,
      height: 420,
      objectPosition: "center",
      isTemporary: true,
    },
    logo: {
      src: "/images/brands/logos/brilia-logo.png",
      alt: "Logo Brilia",
      width: 900,
      height: 900,
      layout: "badge",
    },
    href: "/program/brilia",
    ctaLabel: "Lihat program Brilia",
  },
  {
    id: "joytalk",
    name: "Joytalk English",
    verb: "Berkomunikasi",
    role: "Kemampuan dan keberanian berbahasa Inggris",
    positioning:
      "Kelas bahasa Inggris interaktif yang membantu anak berani berbicara, berekspresi, dan berkomunikasi dalam bahasa Inggris.",
    focus: "Kemampuan berbahasa Inggris yang dipakai dalam interaksi nyata.",
    needScope:
      "Anak yang ingin mampu dan berani memakai bahasa Inggris, bukan hanya mengerjakan soal.",
    competencies: [
      "Speaking dan pronunciation",
      "Listening dan reading",
      "Writing dan applied grammar",
    ],
    contactChannel: "joytalk",
    image: {
      src: "/images/hero/joytalk.webp",
      alt: "Sesi pembelajaran bahasa Inggris daring antara mentor Joytalk English dan seorang anak.",
      width: 560,
      height: 350,
      objectPosition: "center",
    },
    logo: {
      src: "/images/brands/logos/joytalk-logo.png",
      alt: "Logo Joytalk English, Learning English with Joyful",
      width: 960,
      height: 652,
      layout: "landscape",
    },
    href: "/program/joytalk-english",
    ctaLabel: "Lihat program Joytalk English",
  },
  {
    id: "kidspro",
    name: "Kidspro ID",
    verb: "Berkarya",
    role: "Kreativitas dan keterampilan digital",
    positioning:
      "Kelas digital creator berbasis proyek yang membantu anak mengubah waktu layar menjadi karya.",
    focus: "Karya digital berbasis proyek: desain, coding, animasi, dan video.",
    needScope:
      "Anak dan remaja yang tertarik membuat karya digital dan ingin screen time lebih terarah.",
    competencies: [
      "Desain dan gambar digital",
      "Coding dan animasi",
      "Produksi video dan konten",
    ],
    contactChannel: "kidspro",
    image: {
      src: "/images/hero/kidspro.webp",
      alt: "Sesi kelas digital daring Kidspro ID bersama mentor dan peserta.",
      width: 560,
      height: 420,
      objectPosition: "center",
    },
    logo: {
      src: "/images/brands/logos/kidspro-logo.png",
      alt: "Logo Kidspro ID, Kelas Digital Kreator Anak",
      width: 1376,
      height: 500,
      layout: "wide",
    },
    href: "/program/kidspro-id",
    ctaLabel: "Lihat program Kidspro ID",
  },
  {
    id: "els",
    name: "ELS School",
    verb: "Bertumbuh",
    role: "Public speaking dan life skill",
    positioning:
      "Kelas public speaking dan life skill yang melatih anak menyusun ide, tampil percaya diri, dan bertumbuh sebagai future leader.",
    focus: "Public speaking, life skill, dan kepemimpinan diri.",
    needScope:
      "Anak dan remaja yang ingin lebih berani menyampaikan ide dan tampil di depan orang lain.",
    competencies: [
      "Menyusun dan menyampaikan ide",
      "Percaya diri saat tampil",
      "Life skill dan kepemimpinan",
    ],
    contactChannel: "els",
    image: {
      src: "/images/hero/els-school.webp",
      alt: "Peserta dan mentor ELS School setelah mengikuti kegiatan pembelajaran.",
      width: 560,
      height: 350,
      objectPosition: "center",
    },
    logo: {
      src: "/images/brands/logos/els-school-logo.png",
      alt: "Logo ELS School, The Future Lead",
      width: 900,
      height: 900,
      layout: "badge",
    },
    href: "/program/els-school",
    ctaLabel: "Lihat program ELS School",
  },
];

export const brandById = Object.fromEntries(
  brands.map((brand) => [brand.id, brand]),
) as Record<BrandId, Brand>;