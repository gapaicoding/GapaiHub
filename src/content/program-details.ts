import type { BrandId } from "@/content/brands";

export type ProgramFocus = {
  title: string;
  description: string;
};

export type ProgramOffering = {
  id: string;
  title: string;
  eyebrow: string;
  summary: string;
  description: string;
  suitableFor: string;
  consultationTopic: string;
};

export type ProgramFaq = {
  question: string;
  answer: string;
};

export type ProgramDetail = {
  brandId: BrandId;
  eyebrow: string;
  heroTitle: string;
  summary: string;
  suitableFor: string[];
  focusAreas: ProgramFocus[];
  offerings?: ProgramOffering[];
  consultationPrompt: string;
  faqs: ProgramFaq[];
};

export const programDetails = {
  brilia: {
    brandId: "brilia",
    eyebrow: "Belajar bersama Brilia",
    heroTitle: "Pendampingan belajar untuk setiap tahap perkembangan akademik anak",
    summary:
      "Brilia hadir sebagai partner belajar anak melalui program Calistung, Matematika, Bimbel Mata Pelajaran, serta Bahasa Arab dan Al-Qur'an yang disesuaikan dengan kebutuhan belajarnya.",
    suitableFor: [
      "Anak yang sedang membangun fondasi membaca, menulis, dan berhitung.",
      "Anak yang membutuhkan bantuan memahami Matematika atau mata pelajaran sekolah.",
      "Anak yang ingin belajar Bahasa Arab dan Al-Qur'an secara bertahap.",
    ],
    focusAreas: [
      {
        title: "Sesuai kebutuhan anak",
        description:
          "Arah pendampingan dipilih berdasarkan kemampuan yang sedang dibangun dan kesulitan yang dihadapi anak.",
      },
      {
        title: "Bertahap dan terarah",
        description:
          "Materi disusun secara bertahap agar anak dapat membangun pemahaman dari fondasi yang sesuai.",
      },
      {
        title: "Menyenangkan dan interaktif",
        description:
          "Proses belajar dirancang agar anak lebih nyaman terlibat dan mengikuti pendampingan.",
      },
    ],
    offerings: [
      {
        id: "calistung",
        title: "Calistung",
        eyebrow: "Fondasi belajar",
        summary: "Membaca, menulis, dan berhitung dengan proses yang menyenangkan.",
        description:
          "Program Calistung membantu anak mengenal serta membangun kemampuan membaca, menulis, dan berhitung. Materi disusun secara komprehensif dan bertahap sesuai kemampuan belajarnya.",
        suitableFor:
          "Anak yang sedang mulai mengenal huruf dan angka atau membutuhkan penguatan kemampuan dasar membaca, menulis, dan berhitung.",
        consultationTopic: "program Calistung Brilia",
      },
      {
        id: "matematika",
        title: "Matematika",
        eyebrow: "Pemahaman konsep",
        summary: "Membantu anak memahami konsep Matematika dan pembelajaran sekolah.",
        description:
          "Pendampingan Matematika membantu anak memahami konsep yang dipelajari di sekolah. Materi dapat mengikuti kebutuhan pembelajaran anak, termasuk pemahaman materi dan persiapan menghadapi tugas atau evaluasi.",
        suitableFor:
          "Anak yang membutuhkan bantuan memahami konsep Matematika atau ingin mengikuti materi sekolah dengan lebih terarah.",
        consultationTopic: "program Matematika Brilia",
      },
      {
        id: "bimbel-mapel",
        title: "Bimbel Mata Pelajaran",
        eyebrow: "Pendampingan sekolah",
        summary: "Pendampingan mata pelajaran yang menyesuaikan kebutuhan belajar anak.",
        description:
          "Program Bimbel Mata Pelajaran mendampingi anak memahami materi sekolah berdasarkan kebutuhan dan pembelajaran yang sedang dijalani. Fokus pembahasan dapat dikonsultasikan bersama tim Brilia.",
        suitableFor:
          "Anak yang membutuhkan pendampingan memahami materi sekolah atau bantuan belajar yang lebih terarah.",
        consultationTopic: "program Bimbel Mata Pelajaran Brilia",
      },
      {
        id: "bahasa-arab-al-quran",
        title: "Bahasa Arab & Al-Qur'an",
        eyebrow: "Belajar bertahap",
        summary: "Pendampingan Bahasa Arab dan Al-Qur'an sesuai kemampuan anak.",
        description:
          "Program Bahasa Arab dan Al-Qur'an disusun secara bertahap mengikuti kemampuan anak agar proses belajarnya terasa lebih mudah, menyenangkan, dan bermakna.",
        suitableFor:
          "Anak yang ingin mulai atau melanjutkan pembelajaran Bahasa Arab dan Al-Qur'an melalui pendampingan yang bertahap.",
        consultationTopic: "program Bahasa Arab dan Al-Qur'an Brilia",
      },
    ],
    consultationPrompt:
      "Ceritakan usia atau kelas anak, program yang sedang dipertimbangkan, kemampuan anak saat ini, serta bagian belajar yang paling membutuhkan pendampingan.",
    faqs: [
      {
        question: "Program apa saja yang tersedia di Brilia?",
        answer:
          "Brilia memiliki empat fokus program yang saat ini diinformasikan, yaitu Calistung, Matematika, Bimbel Mata Pelajaran, serta Bahasa Arab dan Al-Qur'an.",
      },
      {
        question: "Apakah Brilia hanya untuk belajar Calistung?",
        answer:
          "Tidak. Selain Calistung, Brilia juga menyediakan pendampingan Matematika, Bimbel Mata Pelajaran, serta Bahasa Arab dan Al-Qur'an.",
      },
      {
        question: "Bagaimana memilih program yang sesuai untuk anak?",
        answer:
          "Mulailah dari usia atau kelas anak, kemampuan yang sudah dimiliki, serta kesulitan belajar yang sedang dihadapi. Informasi tersebut dapat disampaikan saat konsultasi agar pembicaraan diarahkan ke program yang paling relevan.",
      },
      {
        question: "Apakah materi Brilia mengikuti pelajaran sekolah?",
        answer:
          "Program Matematika dan Bimbel Mata Pelajaran dapat mendukung materi yang sedang dipelajari anak di sekolah. Cakupan materi spesifik perlu dikonfirmasi bersama tim Brilia.",
      },
      {
        question: "Di mana saya bisa mendapatkan informasi jadwal dan biaya?",
        answer:
          "Jadwal, format pendampingan, ketersediaan kelas, dan biaya perlu dikonfirmasi melalui kanal kontak resmi Brilia karena informasinya dapat menyesuaikan program yang tersedia.",
      },
    ],
  },

  joytalk: {
    brandId: "joytalk",
    eyebrow: "Berkomunikasi",
    heroTitle: "Bantu anak lebih mampu dan berani berbahasa Inggris",
    summary:
      "Joytalk English membantu anak mengembangkan kemampuan bahasa Inggris yang dapat digunakan untuk berbicara, berekspresi, dan berkomunikasi.",
    suitableFor: [
      "Anak yang ingin lebih berani berbicara dalam bahasa Inggris.",
      "Anak yang ingin mengembangkan listening, reading, dan pronunciation.",
      "Anak yang membutuhkan grammar dan writing dalam konteks penggunaan bahasa.",
    ],
    focusAreas: [
      {
        title: "Speaking dan pronunciation",
        description:
          "Mengembangkan kemampuan berbicara dan pengucapan agar anak lebih siap menggunakan bahasa Inggris.",
      },
      {
        title: "Listening dan reading",
        description:
          "Mendukung kemampuan memahami bahasa Inggris melalui kegiatan menyimak dan membaca.",
      },
      {
        title: "Writing dan applied grammar",
        description:
          "Membantu anak menggunakan struktur bahasa dalam latihan menulis dan komunikasi.",
      },
    ],
    consultationPrompt:
      "Ceritakan usia anak, pengalaman belajar bahasa Inggris sebelumnya, dan kemampuan komunikasi yang ingin dikembangkan.",
    faqs: [
      {
        question: "Apakah Joytalk English hanya berfokus pada speaking?",
        answer:
          "Tidak. Fokus Joytalk English mencakup speaking, pronunciation, listening, reading, writing, dan applied grammar dalam konteks kemampuan berbahasa Inggris.",
      },
      {
        question: "Bagaimana menentukan kelas atau level yang sesuai?",
        answer:
          "Informasikan usia anak, pengalaman belajar sebelumnya, dan kemampuan yang ingin dikembangkan. Penentuan program atau level perlu dikonsultasikan dengan tim Joytalk English.",
      },
      {
        question: "Apa perbedaan Joytalk English dengan public speaking di ELS School?",
        answer:
          "Joytalk English berfokus pada kemampuan berkomunikasi dalam bahasa Inggris. ELS School berfokus pada public speaking, life skill, dan pengembangan kepercayaan diri yang tidak terbatas pada penggunaan bahasa Inggris.",
      },
    ],
  },

  kidspro: {
    brandId: "kidspro",
    eyebrow: "Berkarya",
    heroTitle: "Ubah ketertarikan digital anak menjadi karya",
    summary:
      "Kidspro ID membantu anak dan remaja mengembangkan kreativitas serta keterampilan digital melalui fokus pada desain, coding, animasi, dan produksi konten.",
    suitableFor: [
      "Anak dan remaja yang tertarik membuat karya digital.",
      "Anak yang ingin mengenal desain, coding, animasi, atau video.",
      "Orang tua yang ingin mengarahkan waktu layar anak ke kegiatan produktif.",
    ],
    focusAreas: [
      {
        title: "Desain dan gambar digital",
        description:
          "Mengembangkan kreativitas visual melalui proses membuat desain dan karya gambar digital.",
      },
      {
        title: "Coding dan animasi",
        description:
          "Mengenalkan proses berpikir kreatif dan terstruktur melalui coding serta pembuatan animasi.",
      },
      {
        title: "Produksi video dan konten",
        description:
          "Membantu anak mengenal proses merancang dan menghasilkan karya dalam format video atau konten digital.",
      },
    ],
    consultationPrompt:
      "Ceritakan usia anak, minat digitalnya saat ini, perangkat yang tersedia, dan jenis karya yang ingin dipelajari.",
    faqs: [
      {
        question: "Apakah Kidspro ID hanya mengajarkan coding?",
        answer:
          "Tidak. Fokus Kidspro ID mencakup desain dan gambar digital, coding dan animasi, serta produksi video dan konten.",
      },
      {
        question: "Bagaimana memilih fokus digital yang tepat?",
        answer:
          "Mulailah dari minat anak, pengalaman yang sudah dimiliki, dan jenis karya yang membuatnya tertarik. Tim Kidspro ID dapat membantu mengarahkan pilihan program yang relevan.",
      },
      {
        question: "Apakah anak harus memiliki perangkat sendiri?",
        answer:
          "Kebutuhan perangkat bergantung pada program yang dipilih. Konfirmasikan perangkat yang tersedia saat konsultasi agar tim dapat memberikan informasi yang sesuai.",
      },
    ],
  },

  els: {
    brandId: "els",
    eyebrow: "Bertumbuh",
    heroTitle: "Latih anak menyampaikan ide dengan lebih percaya diri",
    summary:
      "ELS School membantu anak dan remaja mengembangkan public speaking, life skill, kepercayaan diri, dan kemampuan kepemimpinan diri.",
    suitableFor: [
      "Anak yang ingin lebih berani berbicara atau tampil di depan orang lain.",
      "Anak yang ingin belajar menyusun dan menyampaikan ide dengan lebih terarah.",
      "Anak dan remaja yang ingin mengembangkan life skill dan kepemimpinan diri.",
    ],
    focusAreas: [
      {
        title: "Menyusun dan menyampaikan ide",
        description:
          "Membantu anak mengembangkan cara berpikir dan menyampaikan gagasan dengan lebih terstruktur.",
      },
      {
        title: "Percaya diri saat tampil",
        description:
          "Mendampingi anak membangun keberanian untuk berbicara dan tampil di hadapan orang lain.",
      },
      {
        title: "Life skill dan kepemimpinan",
        description:
          "Mengembangkan keterampilan diri yang mendukung komunikasi, tanggung jawab, dan pertumbuhan anak.",
      },
    ],
    consultationPrompt:
      "Ceritakan usia anak, situasi komunikasi yang masih menjadi tantangan, dan kemampuan diri yang ingin dikembangkan.",
    faqs: [
      {
        question: "Apakah ELS School hanya untuk public speaking?",
        answer:
          "Tidak. ELS School berfokus pada public speaking, life skill, kepercayaan diri, dan pengembangan kepemimpinan diri.",
      },
      {
        question: "Apakah programnya menggunakan bahasa Inggris?",
        answer:
          "Fokus ELS School tidak terikat pada penggunaan bahasa Inggris. Untuk kemampuan komunikasi dalam bahasa Inggris, pilihan yang lebih relevan adalah Joytalk English.",
      },
      {
        question: "Bagaimana menentukan program yang sesuai?",
        answer:
          "Ceritakan usia anak, kondisi komunikasi saat ini, dan situasi yang ingin dikembangkan. Tim ELS School akan membantu memberikan informasi program yang relevan.",
      },
    ],
  },
} satisfies Record<BrandId, ProgramDetail>;