import type { BrandId } from "./brands";

export type NeedIconKey =
  | "academic"
  | "english"
  | "digital"
  | "speaking";

export type Need = {
  id: string;
  /** Label pilihan pada program finder. */
  label: string;
  /** Kalimat kebutuhan dari sudut pandang orang tua. */
  parentGoal: string;
  /** Alasan rekomendasi. */
  reason: string;
  /** Ikon visual yang digunakan pada program finder. */
  icon: NeedIconKey;
  brandId: BrandId;
};

export const needs: Need[] = [
  {
    id: "akademik",
    label: "Calistung dan pelajaran SD",
    parentGoal:
      "Anak saya perlu fondasi membaca, menulis, berhitung, dan pemahaman pelajaran sekolah.",
    reason:
      "Kebutuhan ini berada pada wilayah fondasi akademik, sehingga pendampingan belajar terstruktur menjadi langkah paling tepat.",
    icon: "academic",
    brandId: "brilia",
  },
  {
    id: "bahasa-inggris",
    label: "Bahasa Inggris anak",
    parentGoal:
      "Anak saya ingin mampu dan berani memakai bahasa Inggris dalam percakapan sehari-hari.",
    reason:
      "Kemampuan bahasa Inggris tumbuh dari latihan interaksi, bukan hanya hafalan, sehingga kelas bahasa Inggris interaktif paling sesuai.",
    icon: "english",
    brandId: "joytalk",
  },
  {
    id: "digital",
    label: "Karya digital dan coding",
    parentGoal:
      "Anak saya senang teknologi dan saya ingin waktu layarnya menghasilkan karya.",
    reason:
      "Kebutuhan ini membutuhkan pembelajaran berbasis proyek agar anak menghasilkan karya yang bisa dilihat dan dibanggakan.",
    icon: "digital",
    brandId: "kidspro",
  },
  {
    id: "life-skill",
    label: "Public speaking dan life skill",
    parentGoal:
      "Anak saya perlu lebih berani menyampaikan ide dan tampil di depan orang lain.",
    reason:
      "Keberanian tampil dilatih melalui struktur berbicara, latihan rutin, dan umpan balik, bukan sekadar motivasi.",
    icon: "speaking",
    brandId: "els",
  },
];