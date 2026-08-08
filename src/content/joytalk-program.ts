export type JoytalkAgeId = "3-4" | "5-6" | "7-12" | "13-17";

export type JoytalkProgramId = "toddler" | "general" | "public-speaking";

export type JoytalkPackage = {
  name: string;
  sessionsPerWeek: 1 | 2 | 5;
  frequencyLabel: string;
  classSize?: string;
};

export type JoytalkClassGroup = {
  id: string;
  label: string;
  audience: string;
  ageIds: JoytalkAgeId[];
  format: "Private" | "Semiprivate";
  classSize: string;
  packages: JoytalkPackage[];
};

export type JoytalkCurriculumSegment = {
  label: string;
  items: string[];
  level?: string;
};

export type JoytalkProgram = {
  id: JoytalkProgramId;
  title: string;
  navigationLabel: string;
  ageRange: string;
  eyebrow: string;
  summary: string;
  description: string;
  classGroups: JoytalkClassGroup[];
  curriculum: JoytalkCurriculumSegment[];
  levelSystem: string[];
  lessonStructure: string[];
  methods: string[];
  placementPolicy: string;
};

export const joytalkAgeOptions: Array<{
  id: JoytalkAgeId;
  label: string;
  supportingLabel: string;
}> = [
  {
    id: "3-4",
    label: "3–4 tahun",
    supportingLabel: "Toddler",
  },
  {
    id: "5-6",
    label: "5–6 tahun",
    supportingLabel: "Kids awal",
  },
  {
    id: "7-12",
    label: "7–12 tahun",
    supportingLabel: "Kids & Tweens",
  },
  {
    id: "13-17",
    label: "13–17 tahun",
    supportingLabel: "Teens",
  },
];

export const joytalkPrograms: Record<JoytalkProgramId, JoytalkProgram> = {
  toddler: {
    id: "toddler",
    title: "English for Toddler",
    navigationLabel: "Toddler",
    ageRange: "Usia 3–4 tahun",
    eyebrow: "Eksplorasi bahasa sejak dini",
    summary:
      "Pengenalan Bahasa Inggris melalui permainan, aktivitas kreatif, dan eksplorasi yang sesuai untuk anak usia dini.",
    description:
      "English for Toddler dirancang sebagai pengalaman belajar private yang memadukan kosakata, pronunciation, eksperimen sederhana, coloring, crafting, dan games.",
    classGroups: [
      {
        id: "toddler-private",
        label: "Private Toddler",
        audience: "Usia 3–4 tahun",
        ageIds: ["3-4"],
        format: "Private",
        classSize: "1 siswa",
        packages: [
          {
            name: "Glasgow",
            sessionsPerWeek: 1,
            frequencyLabel: "1× seminggu",
          },
          {
            name: "Edinburgh",
            sessionsPerWeek: 2,
            frequencyLabel: "2× seminggu",
          },
        ],
      },
    ],
    curriculum: [
      {
        label: "Materi utama",
        items: [
          "Vocabulary",
          "Science experiment",
          "Pronunciation",
          "Coloring",
          "Crafting",
          "Games",
        ],
        level: "Step 1–6",
      },
    ],
    levelSystem: [
      "Step 1–6",
      "Setiap level dilengkapi learning kit dan alat pendukung",
    ],
    lessonStructure: [
      "8 lesson atau pertemuan per level",
      "Durasi 40 menit per pertemuan",
    ],
    methods: [
      "Learning by playing",
      "Crafting dan coloring",
      "Science experiment",
      "Speak and practice",
    ],
    placementPolicy:
      "Penentuan kelas dimulai dari usia dan kebutuhan belajar anak.",
  },

  general: {
    id: "general",
    title: "General English",
    navigationLabel: "General English",
    ageRange: "Usia 5–17 tahun",
    eyebrow: "Kemampuan Bahasa Inggris menyeluruh",
    summary:
      "Mengembangkan vocabulary, conversation, grammar, reading, speaking, dan kemampuan menggunakan Bahasa Inggris secara bertahap.",
    description:
      "General English tersedia dalam format private dan semiprivate. Jalur belajar, level, serta format kelas dipilih berdasarkan usia dan kebutuhan anak.",
    classGroups: [
      {
        id: "general-semiprivate",
        label: "General English Semiprivate",
        audience: "Usia 5–17 tahun",
        ageIds: ["5-6", "7-12", "13-17"],
        format: "Semiprivate",
        classSize: "2–4 siswa",
        packages: [
          {
            name: "Cambridge",
            sessionsPerWeek: 1,
            frequencyLabel: "1× seminggu",
            classSize: "3–4 siswa",
          },
          {
            name: "Cambridge Plus",
            sessionsPerWeek: 1,
            frequencyLabel: "1× seminggu",
            classSize: "2 siswa",
          },
        ],
      },
      {
        id: "general-private-kids",
        label: "Private General English for Kids",
        audience: "Usia 5–12 tahun",
        ageIds: ["5-6", "7-12"],
        format: "Private",
        classSize: "1 siswa",
        packages: [
          {
            name: "Birmingham",
            sessionsPerWeek: 1,
            frequencyLabel: "1× seminggu",
          },
          {
            name: "Oxford",
            sessionsPerWeek: 2,
            frequencyLabel: "2× seminggu",
          },
          {
            name: "London",
            sessionsPerWeek: 5,
            frequencyLabel: "5× seminggu",
          },
        ],
      },
      {
        id: "general-private-teens",
        label: "Private General English for Teens",
        audience: "Usia 13–17 tahun",
        ageIds: ["13-17"],
        format: "Private",
        classSize: "1 siswa",
        packages: [
          {
            name: "Teens Pro",
            sessionsPerWeek: 1,
            frequencyLabel: "1× seminggu",
          },
          {
            name: "Teens Elite",
            sessionsPerWeek: 2,
            frequencyLabel: "2× seminggu",
          },
          {
            name: "Teens Supreme",
            sessionsPerWeek: 5,
            frequencyLabel: "5× seminggu",
          },
        ],
      },
    ],
    curriculum: [
      {
        label: "Usia hingga 6 tahun",
        items: [
          "Tracing",
          "Colouring",
          "Matching",
          "Puzzle",
          "Cut and glue",
          "Games",
        ],
      },
      {
        label: "Usia 7 tahun ke atas",
        items: [
          "Vocabulary",
          "Conversation",
          "Grammar",
          "Reading comprehension",
          "Speaking practice",
          "Exercise",
        ],
      },
    ],
    levelSystem: [
      "Pre A1 — Starter",
      "A1 — Basic",
      "A2 — Intermediate",
      "B1 — Advanced",
      "B2 — Upper Advanced",
      "C1 — Mastery 1",
      "C2 — Mastery 2",
    ],
    lessonStructure: [
      "12 step dalam setiap level",
      "8 lesson dalam setiap step",
      "Private: 40 menit per pertemuan",
      "Semiprivate: 50 menit per pertemuan",
    ],
    methods: ["80% spoken English", "Learning by playing"],
    placementPolicy:
      "Kelas private menggunakan placement test untuk menentukan level. Kelas semiprivate dikelompokkan berdasarkan usia.",
  },

  "public-speaking": {
    id: "public-speaking",
    title: "English Public Speaking",
    navigationLabel: "Public Speaking",
    ageRange: "Usia 5–17 tahun",
    eyebrow: "Berani menyampaikan ide dalam Bahasa Inggris",
    summary:
      "Melatih anak berbicara, menyampaikan gagasan, dan berkomunikasi dalam Bahasa Inggris melalui latihan serta project.",
    description:
      "English Public Speaking menggunakan format private dengan jalur Kids, Tweens, dan Teens. Materi dan level disesuaikan dengan kelompok usia.",
    classGroups: [
      {
        id: "public-speaking-kids",
        label: "Private Public Speaking for Kids",
        audience: "Usia 5–6 tahun",
        ageIds: ["5-6"],
        format: "Private",
        classSize: "1 siswa",
        packages: [
          {
            name: "Washington",
            sessionsPerWeek: 1,
            frequencyLabel: "1× seminggu",
          },
          {
            name: "Chicago",
            sessionsPerWeek: 2,
            frequencyLabel: "2× seminggu",
          },
          {
            name: "New York",
            sessionsPerWeek: 5,
            frequencyLabel: "5× seminggu",
          },
        ],
      },
      {
        id: "public-speaking-tweens",
        label: "Private Public Speaking for Tweens",
        audience: "Usia 7–12 tahun",
        ageIds: ["7-12"],
        format: "Private",
        classSize: "1 siswa",
        packages: [
          {
            name: "Princeton",
            sessionsPerWeek: 1,
            frequencyLabel: "1× seminggu",
          },
          {
            name: "Harvard",
            sessionsPerWeek: 2,
            frequencyLabel: "2× seminggu",
          },
          {
            name: "Colombia",
            sessionsPerWeek: 5,
            frequencyLabel: "5× seminggu",
          },
        ],
      },
      {
        id: "public-speaking-teens",
        label: "Private Public Speaking for Teens",
        audience: "Usia 13–17 tahun",
        ageIds: ["13-17"],
        format: "Private",
        classSize: "1 siswa",
        packages: [
          {
            name: "Queens",
            sessionsPerWeek: 1,
            frequencyLabel: "1× seminggu",
          },
          {
            name: "Brooklyn",
            sessionsPerWeek: 2,
            frequencyLabel: "2× seminggu",
          },
          {
            name: "Liberty",
            sessionsPerWeek: 5,
            frequencyLabel: "5× seminggu",
          },
        ],
      },
    ],
    curriculum: [
      {
        label: "Kids · usia 5–6 tahun",
        items: [
          "Preparation class",
          "Daily vocabulary and expressions",
          "Public speaking practice",
          "Ask and answer questions",
        ],
        level: "Little Joey Level · Matriculation · Step 1–6",
      },
      {
        label: "Tweens · usia 7–12 tahun",
        items: [
          "Preparation class",
          "Explaining ideas and speaking",
          "Public speaking practice",
          "Vocabulary and expressions",
        ],
        level: "Ace Level · Matriculation · Step 1–6",
      },
      {
        label: "Teens · usia 13–17 tahun",
        items: [
          "Preparation class",
          "Open-ended dialogue",
          "Problem solving and adopting expressions",
        ],
        level: "Whiz Level · Matriculation · Step 1–6",
      },
    ],
    levelSystem: [
      "Little Joey Level untuk Kids",
      "Ace Level untuk Tweens",
      "Whiz Level untuk Teens",
      "Matriculation dan Step 1–6",
    ],
    lessonStructure: [
      "8 lesson atau pertemuan per level",
      "Durasi 40 menit per pertemuan",
    ],
    methods: [
      "100% spoken English",
      "Learning by playing",
      "Project pada setiap step",
    ],
    placementPolicy:
      "Program English Public Speaking tidak menggunakan placement test dan jalurnya ditentukan berdasarkan usia.",
  },
};

export const joytalkFaqs = [
  {
    question: "Apa perbedaan General English dan English Public Speaking?",
    answer:
      "General English mengembangkan kemampuan Bahasa Inggris secara menyeluruh, termasuk vocabulary, conversation, grammar, reading, dan speaking. English Public Speaking lebih terfokus pada keberanian berbicara, menyampaikan ide, latihan komunikasi, dan project dalam Bahasa Inggris.",
  },
  {
    question: "Apakah anak usia 3–4 tahun dapat mengikuti General English?",
    answer:
      "Untuk usia 3–4 tahun, jalur yang tersedia adalah English for Toddler. Program ini dirancang dengan aktivitas bermain, crafting, coloring, eksperimen sederhana, serta pengenalan vocabulary dan pronunciation.",
  },
  {
    question: "Apa perbedaan kelas private dan semiprivate?",
    answer:
      "Kelas private terdiri dari satu siswa. Semiprivate General English tersedia untuk dua siswa melalui Cambridge Plus atau tiga sampai empat siswa melalui Cambridge.",
  },
  {
    question: "Program mana yang menggunakan placement test?",
    answer:
      "Placement test digunakan untuk menentukan level pada General English private. General English semiprivate dikelompokkan berdasarkan usia, sedangkan English Public Speaking tidak menggunakan placement test.",
  },
  {
    question: "Bagaimana memilih frekuensi kelas?",
    answer:
      "Pilihan frekuensi bergantung pada program dan format kelas. Sampaikan usia anak, tujuan belajar, pengalaman sebelumnya, serta intensitas yang sedang dipertimbangkan agar tim Joytalk dapat membantu menjelaskan pilihan paketnya.",
  },
  {
    question: "Di mana saya bisa mendapatkan informasi jadwal dan biaya?",
    answer:
      "Jadwal, ketersediaan kelas, dan biaya perlu dikonfirmasi melalui kanal resmi Joytalk English karena dapat menyesuaikan program, format, serta paket yang dipilih.",
  },
];