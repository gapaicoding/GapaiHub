import type { BrandId } from "@/content/brands";

/**
 * Sumber konten halaman Tentang Kami.
 *
 * Konten ini diselaraskan dengan empat brand yang saat ini ditampilkan di
 * website Gapai Mentorship. Klaim statistik, tahun berdiri, kelas percobaan,
 * dan jangkauan peserta tidak dicantumkan karena belum terverifikasi.
 */

export type AboutPrincipleId =
  "needs-first" | "specialist" | "interactive" | "gradual";

export type AboutPrinciple = {
  id: AboutPrincipleId;
  number: string;
  title: string;
  description: string;
};

export type AboutBrandProfile = {
  brandId: BrandId;
  ecosystemRole: string;
  headline: string;
  description: string;
  focusAreas: string[];
};

export type AboutJourneyStep = {
  step: string;
  title: string;
  description: string;
};

export type AboutCommitment = {
  title: string;
  description: string;
};

export const companyProfile = {
  legalName: "PT Gapai Cita Rahardjo",
  publicName: "Gapai Mentorship",
  industry: "Pendidikan anak dan remaja",
  operationalBase: "Kalasan, Sleman, Daerah Istimewa Yogyakarta",
  ecosystemSize: 4,
} as const;

export const aboutHero = {
  eyebrow: companyProfile.legalName,
  title: "Mendampingi anak menemukan arah tumbuhnya.",
  description:
    "Gapai Mentorship adalah ekosistem pendidikan yang membantu orang tua memahami kebutuhan anak dan remaja, lalu menghubungkannya dengan brand spesialis yang paling relevan.",
  supportingStatement:
    "Empat brand dengan keahlian berbeda bergerak dalam satu tujuan: menciptakan pengalaman belajar yang terarah, interaktif, dan sesuai dengan tahap perkembangan setiap anak.",
} as const;

export const companyStory = {
  eyebrow: "Tentang perusahaan",
  title: "Satu perusahaan, empat ruang pengembangan anak",
  paragraphs: [
    "PT Gapai Cita Rahardjo merupakan perusahaan yang bergerak di bidang pendidikan melalui ekosistem Gapai Mentorship. Perusahaan ini menghadirkan program untuk mendukung fondasi akademik, kemampuan berbahasa Inggris, kreativitas digital, serta keterampilan komunikasi anak dan remaja.",
    "Beroperasi dari Kalasan, Sleman, Daerah Istimewa Yogyakarta, Gapai Mentorship menaungi Brilia, Joytalk English, Kidspro ID, dan ELS School. Setiap brand memiliki fokus, program, dan tim pendampingnya sendiri, sementara Gapai membantu orang tua melihat hubungan antarkebutuhan tersebut dalam satu ekosistem yang lebih mudah dipahami.",
  ],
  highlight:
    "Kami percaya bahwa pendidikan yang relevan tidak dimulai dari banyaknya pilihan kelas, tetapi dari pemahaman yang tepat terhadap kebutuhan anak.",
} as const;

export const aboutPurpose = {
  eyebrow: "Mengapa kami hadir",
  title: "Potensi anak tidak tumbuh melalui satu jalur yang sama",
  description:
    "Setiap anak memiliki ketertarikan, tantangan, kecepatan belajar, dan cara mengekspresikan diri yang berbeda. Karena itu, Gapai Mentorship tidak memosisikan seluruh kebutuhan dalam satu program serba bisa.",
  closing:
    "Kami membangun brand-brand spesialis agar orang tua memperoleh arah yang lebih jelas dan anak mendapatkan pendampingan yang lebih fokus.",
} as const;

export const aboutPrinciples: AboutPrinciple[] = [
  {
    id: "needs-first",
    number: "01",
    title: "Mulai dari kebutuhan anak",
    description:
      "Kami mengajak orang tua memahami kemampuan yang ingin dikembangkan sebelum membicarakan pilihan program.",
  },
  {
    id: "specialist",
    number: "02",
    title: "Didampingi oleh brand spesialis",
    description:
      "Setiap bidang ditangani melalui brand yang memiliki fokus pembelajaran dan jalur programnya sendiri.",
  },
  {
    id: "interactive",
    number: "03",
    title: "Belajar melalui keterlibatan aktif",
    description:
      "Anak memperoleh ruang untuk mencoba, berlatih, berdialog, berkarya, dan menerima arahan selama proses belajar.",
  },
  {
    id: "gradual",
    number: "04",
    title: "Bertumbuh secara bertahap",
    description:
      "Pendampingan diarahkan untuk membangun kemampuan sekaligus rasa percaya diri sesuai tahap dan ritme anak.",
  },
];

export const aboutBrandProfiles: AboutBrandProfile[] = [
  {
    brandId: "brilia",
    ecosystemRole: "Belajar",
    headline: "Membangun fondasi dan pemahaman akademik",
    description:
      "Brilia menjadi partner belajar anak melalui pendampingan yang menyesuaikan kemampuan serta kebutuhan akademiknya.",
    focusAreas: [
      "Calistung",
      "Matematika",
      "Bimbel Mata Pelajaran",
      "Bahasa Arab dan Al-Qur'an",
    ],
  },
  {
    brandId: "joytalk",
    ecosystemRole: "Berkomunikasi",
    headline: "Menggunakan Bahasa Inggris untuk berkomunikasi",
    description:
      "Joytalk English mendampingi anak dan remaja mengembangkan kemampuan Bahasa Inggris melalui jalur yang disesuaikan dengan usia dan tujuan belajar.",
    focusAreas: [
      "English for Toddler",
      "General English",
      "Speaking dan pronunciation",
      "English Public Speaking",
    ],
  },
  {
    brandId: "kidspro",
    ecosystemRole: "Berkarya",
    headline: "Mengubah waktu layar menjadi karya digital",
    description:
      "Kidspro ID membantu anak dan remaja mengeksplorasi teknologi melalui pembelajaran berbasis proyek dan proses berkarya langsung.",
    focusAreas: [
      "Desain dan gambar digital",
      "Coding dan animasi",
      "Video dan konten",
      "Kreativitas dengan AI",
    ],
  },
  {
    brandId: "els",
    ecosystemRole: "Bertumbuh",
    headline: "Berani menyampaikan ide dengan percaya diri",
    description:
      "ELS School melatih public speaking melalui kegiatan yang fun, interaktif, personal, dan dekat dengan praktik komunikasi.",
    focusAreas: [
      "Body language dan eye contact",
      "Confidence dan stage fright",
      "Voice control dan clarity",
      "Presentation dan communication etiquette",
    ],
  },
];

export const aboutJourney: AboutJourneyStep[] = [
  {
    step: "01",
    title: "Ceritakan kebutuhan anak",
    description:
      "Orang tua dapat menyampaikan usia, kondisi saat ini, ketertarikan, serta kemampuan yang ingin dikembangkan.",
  },
  {
    step: "02",
    title: "Petakan arah pengembangan",
    description:
      "Kebutuhan tersebut dihubungkan dengan bidang dan brand spesialis yang paling relevan.",
  },
  {
    step: "03",
    title: "Konsultasikan pilihan program",
    description:
      "Detail program, format kelas, tingkat kemampuan, jadwal, dan ketersediaan dibicarakan melalui kanal resmi brand.",
  },
  {
    step: "04",
    title: "Mulai pendampingan",
    description:
      "Anak memulai proses belajar bersama brand yang dipilih dan dapat mengevaluasi kebutuhannya seiring perkembangan.",
  },
];

export const aboutCommitments: AboutCommitment[] = [
  {
    title: "Informasi yang jujur",
    description:
      "Kami hanya menampilkan program, fasilitas, dan detail yang telah tersedia atau dikonfirmasi oleh masing-masing brand.",
  },
  {
    title: "Pilihan tanpa tekanan",
    description:
      "Konsultasi membantu orang tua memahami pilihan. Keputusan untuk melanjutkan tetap dapat dipertimbangkan dengan tenang.",
  },
  {
    title: "Pendampingan yang relevan",
    description:
      "Arah belajar dapat dibicarakan kembali ketika kebutuhan, minat, atau tahap perkembangan anak berubah.",
  },
];

export const aboutClosing = {
  eyebrow: "Tumbuh bersama Gapai",
  title: "Satu ekosistem untuk berbagai cara anak berkembang",
  description:
    "Mulailah dari kemampuan yang ingin dikembangkan. Kami membantu Anda mengenali brand dan program yang paling relevan untuk dibicarakan lebih lanjut.",
} as const;