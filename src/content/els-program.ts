/**
 * Sumber data program ELS School.
 *
 * Data disusun dari materi program resmi yang diberikan untuk website Gapai.
 * Harga, diskon, biaya pendaftaran, dan promo sengaja tidak disimpan di sini.
 */

export type ElsPackageId = "syahrir" | "hamka" | "hatta";

export type ElsClassPreference = "semi-private" | "private";

export type ElsLearningPace = "regular" | "intensive";

export type ElsProgramMaterial = {
  id: string;
  title: string;
  originalLabel: string;
  description: string;
};

export type ElsLearningMethod = {
  id: string;
  title: string;
  description: string;
};

export type ElsPackage = {
  id: ElsPackageId;
  name: string;
  shortLabel: string;
  format: "Semi-private" | "Private intensif" | "Private";
  classPreference: ElsClassPreference;
  learningPace: ElsLearningPace;
  classSize: string | null;
  totalMeetings: number | null;
  meetingLabel: string;
  sessionDurationMinutes: 40 | 50;
  sessionDurationLabel: string;
  period: "1 bulan" | "2 bulan";
  delivery: "Online melalui Zoom Meeting";
  facilities: string[];
  summary: string;
  suitableFor: string[];
  consultationTopic: string;
};

export type ElsFaq = {
  question: string;
  answer: string;
};

export type ElsProgram = {
  id: "public-speaking";
  name: string;
  navigationLabel: string;
  eyebrow: string;
  ageRange: "7–16 tahun";
  minAge: 7;
  maxAge: 16;
  heroTitle: string;
  summary: string;
  positioning: string;
  outcomes: string[];
  materials: ElsProgramMaterial[];
  methods: ElsLearningMethod[];
  packages: ElsPackage[];
  availabilityNote: string;
  consultationPrompt: string;
  faqs: ElsFaq[];
};

export const elsProgram: ElsProgram = {
  id: "public-speaking",
  name: "Public Speaking for Kids & Teens",
  navigationLabel: "Public Speaking",
  eyebrow: "Berani bicara, tumbuh percaya diri",
  ageRange: "7–16 tahun",
  minAge: 7,
  maxAge: 16,
  heroTitle: "Bantu anak menyampaikan ide dengan lebih percaya diri",
  summary:
    "Kelas public speaking yang fun, interaktif, dan personal untuk membantu anak berani berbicara, mengembangkan kepercayaan diri, serta menyampaikan gagasan dengan lebih terarah.",
  positioning:
    "ELS School mendampingi anak membangun kemampuan komunikasi melalui games, storytelling, praktik langsung, dan arahan tutor yang suportif.",
  outcomes: [
    "Lebih berani berbicara dan tampil di depan orang lain.",
    "Mampu menggunakan bahasa tubuh dan kontak mata dengan lebih baik.",
    "Mampu mengontrol suara dan berbicara dengan lebih jelas.",
    "Mampu menyusun serta menyampaikan presentasi dengan lebih terarah.",
  ],
  materials: [
    {
      id: "body-language-eye-contact",
      title: "Bahasa tubuh dan kontak mata",
      originalLabel: "Body Language & Eye Contact",
      description:
        "Melatih anak menggunakan postur, gestur, ekspresi, dan kontak mata untuk mendukung pesan yang disampaikan.",
    },
    {
      id: "confidence-stage-fright",
      title: "Percaya diri dan demam panggung",
      originalLabel: "Building Confidence & Overcoming Stage Fright",
      description:
        "Mendampingi anak membangun keberanian serta menghadapi rasa gugup ketika berbicara atau tampil.",
    },
    {
      id: "voice-control-clarity",
      title: "Kontrol suara dan kejelasan",
      originalLabel: "Voice Control & Clarity",
      description:
        "Melatih penggunaan volume, tempo, intonasi, dan artikulasi agar pembicaraan lebih mudah dipahami.",
    },
    {
      id: "presentation-etiquette",
      title: "Presentasi dan etika komunikasi",
      originalLabel: "Public Presentation & Communication Etiquette",
      description:
        "Mengenalkan cara menyusun presentasi, menyampaikan gagasan, dan berkomunikasi dengan sikap yang tepat.",
    },
  ],
  methods: [
    {
      id: "games",
      title: "Games",
      description:
        "Aktivitas permainan digunakan untuk membuat latihan komunikasi terasa lebih ringan dan menyenangkan.",
    },
    {
      id: "storytelling",
      title: "Storytelling",
      description:
        "Anak berlatih menyusun serta menyampaikan cerita agar gagasannya lebih runtut dan menarik.",
    },
    {
      id: "direct-practice",
      title: "Praktik langsung",
      description:
        "Kemampuan berbicara dikembangkan melalui kesempatan mencoba, tampil, dan memperbaiki penyampaian.",
    },
    {
      id: "supportive-mentor",
      title: "Tutor suportif",
      description:
        "Tutor mendampingi dengan pendekatan yang ramah, suportif, dan sabar selama proses belajar.",
    },
  ],
  packages: [
    {
      id: "syahrir",
      name: "Paket Syahrir",
      shortLabel: "Syahrir",
      format: "Semi-private",
      classPreference: "semi-private",
      learningPace: "regular",
      classSize: "2–4 siswa dalam 1 sesi",
      totalMeetings: null,
      meetingLabel: "Jumlah pertemuan dikonfirmasi bersama tim ELS School",
      sessionDurationMinutes: 50,
      sessionDurationLabel: "50 menit per sesi",
      period: "2 bulan",
      delivery: "Online melalui Zoom Meeting",
      facilities: ["Modul", "E-Sertifikat", "Report"],
      summary:
        "Kelas semi-private yang memberi anak kesempatan belajar dan berlatih bersama kelompok kecil.",
      suitableFor: [
        "Anak yang lebih nyaman belajar bersama beberapa teman.",
        "Anak yang membutuhkan ruang interaksi dan latihan dalam kelompok kecil.",
        "Orang tua yang memilih format semi-private dengan durasi sesi lebih panjang.",
      ],
      consultationTopic: "Paket Syahrir semi-private ELS School",
    },
    {
      id: "hamka",
      name: "Paket Hamka",
      shortLabel: "Hamka",
      format: "Private intensif",
      classPreference: "private",
      learningPace: "intensive",
      classSize: "1 siswa dan 1 tutor",
      totalMeetings: 8,
      meetingLabel: "8 pertemuan dalam 1 bulan",
      sessionDurationMinutes: 40,
      sessionDurationLabel: "40 menit per sesi",
      period: "1 bulan",
      delivery: "Online melalui Zoom Meeting",
      facilities: ["Modul", "E-Sertifikat", "Report"],
      summary:
        "Kelas private intensif dengan pendampingan satu tutor untuk satu siswa dan periode belajar lebih padat.",
      suitableFor: [
        "Anak yang membutuhkan perhatian tutor secara personal.",
        "Anak yang ingin berlatih dengan ritme lebih intensif.",
        "Orang tua yang memilih delapan pertemuan dalam periode satu bulan.",
      ],
      consultationTopic: "Paket Hamka private intensif ELS School",
    },
    {
      id: "hatta",
      name: "Paket Hatta",
      shortLabel: "Hatta",
      format: "Private",
      classPreference: "private",
      learningPace: "regular",
      classSize: null,
      totalMeetings: 8,
      meetingLabel: "8 pertemuan dalam 2 bulan",
      sessionDurationMinutes: 40,
      sessionDurationLabel: "40 menit per sesi",
      period: "2 bulan",
      delivery: "Online melalui Zoom Meeting",
      facilities: ["Modul", "E-Sertifikat"],
      summary:
        "Kelas private dengan delapan pertemuan yang dijalankan secara bertahap dalam periode dua bulan.",
      suitableFor: [
        "Anak yang membutuhkan format belajar private.",
        "Anak yang lebih sesuai dengan ritme belajar bertahap.",
        "Orang tua yang memilih delapan pertemuan dalam periode dua bulan.",
      ],
      consultationTopic: "Paket Hatta private ELS School",
    },
  ],
  availabilityNote:
    "ELS School menginformasikan ketersediaan kelas online dan offline. Tiga paket yang dirujuk pada halaman ini mencantumkan pelaksanaan melalui Zoom Meeting; pilihan offline perlu dikonfirmasi langsung bersama tim ELS School.",
  consultationPrompt:
    "Ceritakan usia anak, kondisi komunikasi yang saat ini menjadi tantangan, pengalaman tampil sebelumnya, pilihan private atau semi-private, serta preferensi kelas online atau offline.",
  faqs: [
    {
      question: "Untuk usia berapa program Public Speaking ELS School?",
      answer:
        "Materi program yang digunakan pada halaman ini mencantumkan rentang usia 7–16 tahun. Kesesuaian kelas tetap dapat dikonsultasikan berdasarkan kondisi dan kebutuhan anak.",
    },
    {
      question: "Apa saja materi yang dipelajari?",
      answer:
        "Materi utamanya mencakup bahasa tubuh dan kontak mata, membangun kepercayaan diri dan mengatasi demam panggung, kontrol suara dan kejelasan, serta presentasi publik dan etika komunikasi.",
    },
    {
      question: "Apa perbedaan paket Syahrir, Hamka, dan Hatta?",
      answer:
        "Syahrir merupakan kelas semi-private untuk 2–4 siswa dengan sesi 50 menit. Hamka merupakan kelas private intensif satu siswa dengan satu tutor, delapan pertemuan dalam satu bulan. Hatta merupakan kelas private dengan delapan pertemuan dalam dua bulan.",
    },
    {
      question: "Apakah kelas tersedia secara online dan offline?",
      answer:
        "ELS School menginformasikan adanya pilihan online dan offline. Paket yang ditampilkan pada halaman ini mencantumkan Zoom Meeting, sehingga ketersediaan dan mekanisme kelas offline perlu dikonfirmasi langsung bersama tim ELS School.",
    },
    {
      question: "Bagaimana memilih paket yang sesuai?",
      answer:
        "Pertimbangkan kenyamanan anak belajar sendiri atau bersama kelompok kecil serta ritme regular atau intensif. Sampaikan juga kondisi komunikasi anak saat konsultasi agar tim dapat membantu memberikan informasi yang relevan.",
    },
    {
      question: "Di mana saya bisa menanyakan jadwal dan biaya?",
      answer:
        "Jadwal, ketersediaan tutor, kelas offline, dan biaya dapat dikonfirmasi melalui kanal WhatsApp resmi ELS School.",
    },
  ],
};

export const elsPackageById = Object.fromEntries(
  elsProgram.packages.map((packageItem) => [packageItem.id, packageItem]),
) as Record<ElsPackageId, ElsPackage>;

export function recommendElsPackage({
  classPreference,
  learningPace,
}: {
  classPreference: ElsClassPreference;
  learningPace: ElsLearningPace;
}): ElsPackage {
  if (classPreference === "semi-private") {
    return elsPackageById.syahrir;
  }

  return learningPace === "intensive"
    ? elsPackageById.hamka
    : elsPackageById.hatta;
}

export function isAgeEligibleForEls(age: number): boolean {
  return age >= elsProgram.minAge && age <= elsProgram.maxAge;
}