/**
 * Sumber konten halaman Kontak Gapai Mentorship.
 *
 * Nomor WhatsApp, URL Instagram, label CTA, dan status channel tidak disimpan
 * di file ini. Seluruh konfigurasi channel tetap berasal dari
 * src/config/whatsapp.ts agar tidak ada data kontak yang terduplikasi.
 */

export type ContactPathId = "need-guidance" | "know-the-brand";

export type ContactPath = {
  id: ContactPathId;
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  recommendation: string;
};

export type ContactPreparationItem = {
  id: "age" | "current-condition" | "goal";
  number: string;
  title: string;
  description: string;
  example: string;
};

export type ContactJourneyStep = {
  step: string;
  title: string;
  description: string;
};

export type ContactFaq = {
  question: string;
  answer: string;
};

export const contactHero = {
  eyebrow: "Pusat konsultasi Gapai Mentorship",
  title: "Ceritakan kebutuhan anak. Kami bantu menemukan arahnya.",
  description:
    "Anda tidak harus memahami seluruh brand atau nama program sebelum menghubungi kami. Mulailah dari usia anak, kondisi saat ini, dan kemampuan yang ingin dikembangkan.",
  supportingStatement:
    "Gapai Mentorship membantu mengarahkan kebutuhan awal, sedangkan detail program dibicarakan bersama tim brand spesialis yang relevan.",
} as const;

export const contactTrustPoints = [
  "Mulai dari kebutuhan anak",
  "Diarahkan ke brand spesialis",
  "Tidak harus langsung mendaftar",
] as const;

export const contactPaths: ContactPath[] = [
  {
    id: "need-guidance",
    number: "01",
    eyebrow: "Belum tahu brand yang sesuai",
    title: "Mulai bersama Gapai Mentorship",
    description:
      "Ceritakan kemampuan yang ingin dikembangkan atau tantangan yang sedang dihadapi anak. Gapai membantu memberikan arah awal sebelum Anda berbicara lebih detail dengan brand.",
    recommendation: "Hubungi Instagram resmi Gapai Mentorship.",
  },
  {
    id: "know-the-brand",
    number: "02",
    eyebrow: "Sudah mengetahui programnya",
    title: "Hubungi brand secara langsung",
    description:
      "Jika Anda sudah mengetahui brand atau program yang ingin ditanyakan, gunakan kanal resmi brand untuk membicarakan format kelas, level, jadwal, ketersediaan, dan biaya.",
    recommendation: "Pilih kartu brand pada bagian kanal konsultasi.",
  },
];

export const brandContactSection = {
  eyebrow: "Kanal konsultasi resmi",
  title: "Pilih berdasarkan kebutuhan yang ingin dikembangkan",
  description:
    "Setiap brand menangani bidang yang berbeda dan memiliki kanal konsultasinya sendiri. Jika kebutuhannya masih bercampur, Anda tetap dapat memulai melalui Gapai Mentorship.",
  fallbackTitle: "Masih belum yakin?",
  fallbackDescription:
    "Hubungi Gapai Mentorship untuk mendapatkan arah awal tanpa harus menentukan nama program lebih dulu.",
} as const;

export const contactPreparation: ContactPreparationItem[] = [
  {
    id: "age",
    number: "01",
    title: "Usia atau kelas anak",
    description:
      "Informasi usia membantu tim mempersempit pilihan program dan jalur belajar yang tersedia.",
    example: "Contoh: usia 8 tahun, kelas 2 SD.",
  },
  {
    id: "current-condition",
    number: "02",
    title: "Kondisi atau minat saat ini",
    description:
      "Ceritakan kemampuan yang sudah dimiliki, hal yang disukai, atau bagian yang masih menjadi tantangan.",
    example: "Contoh: menyukai teknologi tetapi belum pernah belajar coding.",
  },
  {
    id: "goal",
    number: "03",
    title: "Kemampuan yang ingin dikembangkan",
    description:
      "Sampaikan perubahan yang ingin dilihat agar pembicaraan tidak hanya berfokus pada nama kelas.",
    example: "Contoh: ingin lebih berani berbicara dalam Bahasa Inggris.",
  },
];

export const contactJourney: ContactJourneyStep[] = [
  {
    step: "01",
    title: "Ceritakan kebutuhan",
    description:
      "Sampaikan informasi dasar tentang anak dan kemampuan yang ingin dikembangkan.",
  },
  {
    step: "02",
    title: "Diskusikan arah program",
    description:
      "Tim membantu menjelaskan brand, jalur belajar, atau pilihan program yang relevan.",
  },
  {
    step: "03",
    title: "Pertimbangkan pilihan",
    description:
      "Anda dapat menanyakan format, jadwal, ketersediaan, dan informasi lain sebelum memutuskan.",
  },
  {
    step: "04",
    title: "Lanjutkan bersama brand",
    description:
      "Ketika sudah siap, proses berikutnya dilanjutkan melalui tim brand yang dipilih.",
  },
];

export const contactFaqs: ContactFaq[] = [
  {
    question: "Harus menghubungi Gapai atau brand secara langsung?",
    answer:
      "Hubungi Gapai Mentorship jika Anda belum mengetahui brand yang sesuai atau kebutuhan anak mencakup beberapa bidang. Jika programnya sudah diketahui, Anda dapat langsung menggunakan kanal resmi brand tersebut.",
  },
  {
    question: "Bagaimana jika anak membutuhkan lebih dari satu bidang?",
    answer:
      "Ceritakan seluruh kebutuhannya melalui Gapai Mentorship. Kombinasi atau urutan fokus dapat dibicarakan agar jadwal dan beban belajar anak tetap dapat dipertimbangkan dengan baik.",
  },
  {
    question: "Apakah harus langsung mendaftar setelah konsultasi?",
    answer:
      "Tidak. Konsultasi membantu Anda memahami pilihan yang tersedia. Informasi tersebut dapat dipertimbangkan terlebih dahulu sebelum mengambil keputusan.",
  },
  {
    question: "Mengapa konsultasi Brilia diarahkan ke Instagram Gapai?",
    answer:
      "Nomor WhatsApp Brilia sedang diperbarui. Untuk sementara, pertanyaan tentang Brilia dibantu melalui Instagram resmi Gapai Mentorship agar pengguna tidak diarahkan ke nomor yang belum terverifikasi.",
  },
  {
    question: "Di mana saya bisa menanyakan jadwal dan biaya?",
    answer:
      "Jadwal, ketersediaan kelas, format pendampingan, dan biaya dikonfirmasi melalui kanal resmi masing-masing brand karena informasinya dapat berbeda antarprogram.",
  },
  {
    question: "Informasi apa yang sebaiknya disiapkan?",
    answer:
      "Siapkan usia atau kelas anak, kondisi atau minatnya saat ini, serta kemampuan yang ingin dikembangkan. Anda tidak perlu menyiapkan penjelasan panjang untuk memulai konsultasi.",
  },
];

export const contactClosing = {
  eyebrow: "Mulai dari cerita sederhana",
  title: "Belum tahu nama programnya tidak masalah",
  description:
    "Sampaikan kebutuhan anak dengan bahasa Anda sendiri. Kami membantu mengarahkan percakapan ke brand dan program yang paling relevan untuk dipertimbangkan.",
} as const;