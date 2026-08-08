import { brands } from "./brands";

export const site = {
  name: "Gapai Mentorship",
  tagline:
    "Satu ekosistem untuk anak belajar, berkomunikasi, berkarya, dan bertumbuh.",
  description:
    "Gapai Mentorship membantu orang tua menemukan program yang sesuai kebutuhan anak melalui empat brand spesialis: Brilia, Joytalk English, Kidspro ID, dan ELS School.",
  primaryCta: "Konsultasi via Instagram",
} as const;

export type NavItem = {
  label: string;
  href: string;
  children?: {
    label: string;
    description: string;
    href: string;
  }[];
};

export const mainNav: NavItem[] = [
  {
    label: "Tentang Kami",
    href: "/tentang-kami",
  },
  {
    label: "Program & Brand",
    href: "/program",
    children: [
      {
        label: "Lihat Semua Program",
        description: "Bandingkan empat kebutuhan anak",
        href: "/program",
      },
      ...brands.map((brand) => ({
        label: brand.name,
        description: brand.role,
        href: brand.href,
      })),
    ],
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Kontak",
    href: "/kontak",
  },
];

export const footerNav = {
  jelajahi: [
    {
      label: "Tentang Kami",
      href: "/tentang-kami",
    },
    {
      label: "Program & Brand",
      href: "/program",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "Kontak",
      href: "/kontak",
    },
  ],
  brand: brands.map((brand) => ({
    label: brand.name,
    href: brand.href,
  })),
  bantuan: [
    {
      label: "Konsultasi & Kontak",
      href: "/kontak",
    },
    {
      label: "Kebijakan Privasi",
      href: "/kebijakan-privasi",
    },
    {
      label: "Syarat & Ketentuan",
      href: "/syarat-ketentuan",
    },
  ],
};

/**
 * Hal yang berlaku untuk seluruh ekosistem,
 * bukan statistik atau klaim performa.
 */
export const trustSnapshot = [
  {
    title: "Empat brand spesialis",
    body: "Setiap kebutuhan anak memiliki satu brand yang benar-benar fokus pada bidang tersebut.",
  },
  {
    title: "Rekomendasi berbasis kebutuhan",
    body: "Kami membantu memetakan kebutuhan anak lebih dulu sebelum membicarakan program.",
  },
  {
    title: "Konsultasi sebelum mendaftar",
    body: "Orang tua dapat bertanya dan mempertimbangkan pilihan tanpa perlu langsung memutuskan.",
  },
  {
    title: "Satu ekosistem, satu standar",
    body: "Brand berbeda, tetapi cara mendampingi anak dan orang tua tetap dalam standar yang sama.",
  },
];

export const valueProps = [
  {
    title: "Mulai dari kebutuhan anak, bukan katalog kelas",
    body: "Anda tidak perlu memahami struktur brand untuk menemukan program. Ceritakan kebutuhan anak, kami bantu memetakan arahnya.",
  },
  {
    title: "Spesialis, bukan serba bisa",
    body: "Brilia, Joytalk English, Kidspro ID, dan ELS School memiliki wilayah keahlian masing-masing sehingga tidak ada program yang setengah-setengah.",
  },
  {
    title: "Anak didampingi, bukan dihakimi",
    body: "Pendampingan mengikuti ritme anak. Tujuannya membangun kemampuan dan rasa percaya diri secara bertahap.",
  },
  {
    title: "Bisa berpindah jalur saat kebutuhan berubah",
    body: "Kebutuhan anak berkembang. Karena berada dalam satu ekosistem, perpindahan atau penambahan fokus lebih mudah dibicarakan.",
  },
];

export const consultationSteps = [
  {
    step: "01",
    title: "Ceritakan kebutuhan anak",
    body: "Sampaikan usia anak, kondisi saat ini, dan kemampuan yang ingin dikembangkan.",
  },
  {
    step: "02",
    title: "Temukan brand yang sesuai",
    body: "Kami arahkan ke brand spesialis yang paling relevan, beserta alasannya.",
  },
  {
    step: "03",
    title: "Mulai pendampingan",
    body: "Anda melanjutkan pembicaraan detail program bersama tim brand yang dipilih.",
  },
];

export type FaqCategory =
  | "Tentang Gapai"
  | "Memilih Program"
  | "Konsultasi"
  | "Perbandingan Brand";

export type FaqItem = {
  category: FaqCategory;
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    category: "Tentang Gapai",
    question: "Apa itu Gapai Mentorship?",
    answer:
      "Gapai Mentorship adalah ekosistem pendidikan yang menaungi empat brand spesialis: Brilia, Joytalk English, Kidspro ID, dan ELS School. Gapai membantu orang tua memahami kebutuhan anak dan menemukan program yang sesuai, sedangkan proses belajarnya dijalankan oleh masing-masing brand.",
  },
  {
    category: "Tentang Gapai",
    question: "Apakah Gapai Mentorship juga membuka kelas sendiri?",
    answer:
      "Tidak. Gapai Mentorship berperan sebagai lapisan penghubung dan standar bersama. Program pembelajaran dijalankan oleh empat brand di dalam ekosistem sesuai bidang keahlian masing-masing.",
  },
  {
    category: "Memilih Program",
    question: "Bagaimana cara memilih brand yang tepat untuk anak saya?",
    answer:
      "Mulailah dari kemampuan yang ingin dikembangkan. Fondasi belajar dan pelajaran sekolah diarahkan ke Brilia, kemampuan berbahasa Inggris ke Joytalk English, karya digital ke Kidspro ID, serta public speaking dan life skill ke ELS School. Program finder di halaman ini membantu Anda mempersempit pilihan, dan Anda tetap dapat berkonsultasi jika kebutuhan anak bersifat campuran.",
  },
  {
    category: "Memilih Program",
    question: "Anak saya membutuhkan lebih dari satu bidang. Apakah bisa?",
    answer:
      "Bisa dibicarakan. Karena keempat brand berada dalam satu ekosistem, kombinasi fokus dapat disusun bertahap agar jadwal dan beban belajar anak tetap masuk akal. Sampaikan kebutuhannya saat konsultasi.",
  },
  {
    category: "Konsultasi",
    question: "Apakah harus langsung mendaftar setelah konsultasi?",
    answer:
      "Tidak. Konsultasi bertujuan membantu Anda memahami pilihan yang tersedia. Anda dapat mempertimbangkannya lebih dulu sebelum memutuskan.",
  },
  {
    category: "Perbandingan Brand",
    question: "Perbedaan public speaking di Joytalk English dan ELS School apa?",
    answer:
      "Public speaking di Joytalk English selalu berada dalam konteks bahasa Inggris sebagai bagian dari kemampuan berkomunikasi dalam bahasa tersebut. ELS School fokus pada public speaking, life skill, dan kepemimpinan yang tidak terikat pada bahasa Inggris.",
  },
];