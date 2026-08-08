export type KidsproProgramId =
  | "canva"
  | "digital-drawing"
  | "coding"
  | "animasi-3d"
  | "editing-video"
  | "youtuber"
  | "podcaster"
  | "ai";

export type KidsproClusterId =
  | "visual-creator"
  | "code-technology"
  | "motion-media"
  | "content-creator";

export type KidsproAgeBandId =
  | "kids"
  | "tweens"
  | "teens"
  | "young-creators";

export type KidsproFrequency = 1 | 2;

export type KidsproAgeBand = {
  id: KidsproAgeBandId;
  label: string;
  ageLabel: string;
  minAge: number;
  maxAge: number;
};

export type KidsproPackage = {
  id: string;
  name: string;
  ageBandId: KidsproAgeBandId;
  ageLabel: string;
  minAge: number;
  maxAge: number;
  meetingsPerWeek: KidsproFrequency;
  frequencyLabel: string;
  totalMeetings: 8;
  programDuration: "1 bulan" | "2 bulan";
  sessionDuration: "40 menit";
  classFormat: "Private — 1 siswa, 1 mentor";
  delivery: "Online melalui Zoom Meeting";
};

export type KidsproCurriculumTrack = {
  id: string;
  name: string;
  description?: string;
  ageBandIds?: KidsproAgeBandId[];
  levels: string[];
  lessonsPerLevel: 8;
};

export type KidsproProgram = {
  id: KidsproProgramId;
  clusterId: KidsproClusterId;
  name: string;
  shortName: string;
  tool: string;
  eyebrow: string;
  summary: string;
  parentBenefit: string;
  suitableFor: string[];
  ageRangeLabel: string;
  minAge: number;
  maxAge: number;
  packages: KidsproPackage[];
  curriculum: KidsproCurriculumTrack[];
  consultationTopic: string;
};

export type KidsproProgramCluster = {
  id: KidsproClusterId;
  title: string;
  description: string;
  programIds: KidsproProgramId[];
};

export const kidsproAgeBands: KidsproAgeBand[] = [
  {
    id: "kids",
    label: "Kids",
    ageLabel: "4–6 tahun",
    minAge: 4,
    maxAge: 6,
  },
  {
    id: "tweens",
    label: "Tweens",
    ageLabel: "7–12 tahun",
    minAge: 7,
    maxAge: 12,
  },
  {
    id: "teens",
    label: "Teens",
    ageLabel: "13–17 tahun",
    minAge: 13,
    maxAge: 17,
  },
  {
    id: "young-creators",
    label: "Young Creators",
    ageLabel: "7–15 tahun",
    minAge: 7,
    maxAge: 15,
  },
];

export const kidsproProgramClusters: KidsproProgramCluster[] = [
  {
    id: "visual-creator",
    title: "Visual Creator",
    description:
      "Mengembangkan kemampuan anak menyampaikan ide melalui desain dan karya visual digital.",
    programIds: ["canva", "digital-drawing"],
  },
  {
    id: "code-technology",
    title: "Code & Technology",
    description:
      "Mengenalkan cara berpikir terstruktur, eksplorasi teknologi, dan proses membangun karya digital.",
    programIds: ["coding", "ai"],
  },
  {
    id: "motion-media",
    title: "Motion & Media",
    description:
      "Membantu anak menghidupkan ide melalui animasi, gerak, cerita, dan proses penyuntingan video.",
    programIds: ["animasi-3d", "editing-video"],
  },
  {
    id: "content-creator",
    title: "Content Creator",
    description:
      "Melatih anak merancang, menyampaikan, dan memproduksi konten digital secara bertahap.",
    programIds: ["youtuber", "podcaster"],
  },
];

const commonPackageData = {
  totalMeetings: 8,
  sessionDuration: "40 menit",
  classFormat: "Private — 1 siswa, 1 mentor",
  delivery: "Online melalui Zoom Meeting",
} as const;

function createPackage({
  id,
  name,
  ageBandId,
  ageLabel,
  minAge,
  maxAge,
  meetingsPerWeek,
}: {
  id: string;
  name: string;
  ageBandId: KidsproAgeBandId;
  ageLabel: string;
  minAge: number;
  maxAge: number;
  meetingsPerWeek: KidsproFrequency;
}): KidsproPackage {
  return {
    id,
    name,
    ageBandId,
    ageLabel,
    minAge,
    maxAge,
    meetingsPerWeek,
    frequencyLabel:
      meetingsPerWeek === 1 ? "1× seminggu" : "2× seminggu",
    programDuration: meetingsPerWeek === 1 ? "2 bulan" : "1 bulan",
    ...commonPackageData,
  };
}

const fourStageLevels = ["Beginner", "Intermediate", "Advanced", "Pro"];

const sixStageLevels = [
  "Beginner",
  "Intermediate",
  "Advanced",
  "Prestige",
  "Badge",
  "Master",
];

const sixProgressiveLevels = [
  "Beginner 1",
  "Beginner 2",
  "Intermediate 1",
  "Intermediate 2",
  "Advanced 1",
  "Advanced 2",
];

const eightProgressiveLevels = [
  ...sixProgressiveLevels,
  "Upper-Advanced 1",
  "Upper-Advanced 2",
];

export const kidsproPrograms: KidsproProgram[] = [
  {
    id: "canva",
    clusterId: "visual-creator",
    name: "Desain Grafis Canva",
    shortName: "Canva",
    tool: "Canva",
    eyebrow: "Desain visual",
    summary:
      "Membantu anak mengenal proses membuat desain visual menggunakan Canva sesuai usia dan tujuan belajarnya.",
    parentBenefit:
      "Anak tidak hanya menggunakan aplikasi, tetapi diarahkan untuk mengolah ide menjadi karya visual yang terstruktur.",
    suitableFor: [
      "Anak yang senang memilih warna, gambar, dan menyusun tampilan.",
      "Anak yang ingin membuat poster, presentasi, atau karya visual digital.",
      "Anak yang ingin mengembangkan kreativitas dan komunikasi visual.",
    ],
    ageRangeLabel: "4–17 tahun",
    minAge: 4,
    maxAge: 17,
    packages: [
      createPackage({
        id: "gunarsa",
        name: "Gunarsa",
        ageBandId: "kids",
        ageLabel: "4–6 tahun",
        minAge: 4,
        maxAge: 6,
        meetingsPerWeek: 1,
      }),
      createPackage({
        id: "barli",
        name: "Barli",
        ageBandId: "kids",
        ageLabel: "4–6 tahun",
        minAge: 4,
        maxAge: 6,
        meetingsPerWeek: 2,
      }),
      createPackage({
        id: "delsy",
        name: "Delsy",
        ageBandId: "tweens",
        ageLabel: "7–12 tahun",
        minAge: 7,
        maxAge: 12,
        meetingsPerWeek: 1,
      }),
      createPackage({
        id: "sadali",
        name: "Sadali",
        ageBandId: "tweens",
        ageLabel: "7–12 tahun",
        minAge: 7,
        maxAge: 12,
        meetingsPerWeek: 2,
      }),
      createPackage({
        id: "rusli",
        name: "Rusli",
        ageBandId: "teens",
        ageLabel: "13–17 tahun",
        minAge: 13,
        maxAge: 17,
        meetingsPerWeek: 1,
      }),
      createPackage({
        id: "davinci",
        name: "Davinci",
        ageBandId: "teens",
        ageLabel: "13–17 tahun",
        minAge: 13,
        maxAge: 17,
        meetingsPerWeek: 2,
      }),
    ],
    curriculum: [
      {
        id: "canva-for-school",
        name: "Canva for School",
        description:
          "Jalur Canva untuk mendukung kebutuhan karya dan komunikasi visual dalam konteks belajar.",
        levels: fourStageLevels,
        lessonsPerLevel: 8,
      },
      {
        id: "canva-for-business",
        name: "Canva for Business",
        description:
          "Jalur Canva untuk mengenal penerapan desain dalam kebutuhan komunikasi dan karya yang lebih terarah.",
        levels: fourStageLevels,
        lessonsPerLevel: 8,
      },
    ],
    consultationTopic: "kelas Desain Grafis Canva Kidspro ID",
  },
  {
    id: "digital-drawing",
    clusterId: "visual-creator",
    name: "Digital Drawing",
    shortName: "Digital Drawing",
    tool: "ibisPaint X",
    eyebrow: "Ilustrasi digital",
    summary:
      "Mendampingi anak menyalurkan imajinasi melalui proses menggambar dan membuat karya seni digital menggunakan ibisPaint X.",
    parentBenefit:
      "Anak belajar mengekspresikan ide secara visual sekaligus membangun kebanggaan terhadap karya yang dibuatnya.",
    suitableFor: [
      "Anak yang gemar menggambar dan membuat karakter.",
      "Anak yang ingin berpindah dari gambar manual ke media digital.",
      "Anak yang tertarik mengeksplorasi warna, bentuk, dan komposisi.",
    ],
    ageRangeLabel: "4–12 tahun",
    minAge: 4,
    maxAge: 12,
    packages: [
      createPackage({
        id: "dachlan",
        name: "Dachlan",
        ageBandId: "kids",
        ageLabel: "4–6 tahun",
        minAge: 4,
        maxAge: 6,
        meetingsPerWeek: 1,
      }),
      createPackage({
        id: "apin",
        name: "Apin",
        ageBandId: "kids",
        ageLabel: "4–6 tahun",
        minAge: 4,
        maxAge: 6,
        meetingsPerWeek: 2,
      }),
      createPackage({
        id: "dullah",
        name: "Dullah",
        ageBandId: "tweens",
        ageLabel: "7–12 tahun",
        minAge: 7,
        maxAge: 12,
        meetingsPerWeek: 1,
      }),
      createPackage({
        id: "sobrat",
        name: "Sobrat",
        ageBandId: "tweens",
        ageLabel: "7–12 tahun",
        minAge: 7,
        maxAge: 12,
        meetingsPerWeek: 2,
      }),
    ],
    curriculum: [
      {
        id: "digital-drawing-kids",
        name: "Digital Drawing for Kids",
        ageBandIds: ["kids"],
        levels: Array.from({ length: 7 }, (_, index) => `Theme ${index + 1}`),
        lessonsPerLevel: 8,
      },
      {
        id: "digital-drawing-tweens",
        name: "Digital Drawing for Tweens",
        ageBandIds: ["tweens"],
        levels: Array.from({ length: 12 }, (_, index) => `Theme ${index + 1}`),
        lessonsPerLevel: 8,
      },
    ],
    consultationTopic: "kelas Digital Drawing Kidspro ID",
  },
  {
    id: "coding",
    clusterId: "code-technology",
    name: "Coding Scratch & Roblox",
    shortName: "Coding",
    tool: "Scratch & Roblox",
    eyebrow: "Coding berbasis proyek",
    summary:
      "Mengenalkan coding melalui Scratch dan Roblox agar anak dapat mengubah ide menjadi project digital secara bertahap.",
    parentBenefit:
      "Anak berlatih berpikir logis, memecahkan masalah, dan membangun karya melalui proses yang terstruktur.",
    suitableFor: [
      "Anak yang tertarik dengan game dan ingin mengetahui cara membuatnya.",
      "Anak yang senang menyusun logika dan mencoba solusi.",
      "Anak yang ingin mulai membuat project menggunakan Scratch atau Roblox.",
    ],
    ageRangeLabel: "7–17 tahun",
    minAge: 7,
    maxAge: 17,
    packages: [
      createPackage({
        id: "gamecod",
        name: "GameCod",
        ageBandId: "tweens",
        ageLabel: "7–12 tahun",
        minAge: 7,
        maxAge: 12,
        meetingsPerWeek: 1,
      }),
      createPackage({
        id: "studiocod",
        name: "StudioCod",
        ageBandId: "tweens",
        ageLabel: "7–12 tahun",
        minAge: 7,
        maxAge: 12,
        meetingsPerWeek: 2,
      }),
      createPackage({
        id: "brightcod",
        name: "BrightCod",
        ageBandId: "teens",
        ageLabel: "13–17 tahun",
        minAge: 13,
        maxAge: 17,
        meetingsPerWeek: 1,
      }),
      createPackage({
        id: "champscod",
        name: "ChampsCod",
        ageBandId: "teens",
        ageLabel: "13–17 tahun",
        minAge: 13,
        maxAge: 17,
        meetingsPerWeek: 2,
      }),
    ],
    curriculum: [
      {
        id: "scratch",
        name: "Scratch",
        ageBandIds: ["tweens", "teens"],
        levels: sixStageLevels,
        lessonsPerLevel: 8,
      },
      {
        id: "roblox",
        name: "Roblox",
        ageBandIds: ["tweens", "teens"],
        levels: sixStageLevels,
        lessonsPerLevel: 8,
      },
    ],
    consultationTopic: "kelas Coding Scratch atau Roblox Kidspro ID",
  },
  {
    id: "animasi-3d",
    clusterId: "motion-media",
    name: "Animasi 3D",
    shortName: "Animasi 3D",
    tool: "Blender",
    eyebrow: "Kreasi dunia 3D",
    summary:
      "Membantu anak menghidupkan ide melalui proses membuat objek, adegan, dan animasi 3D menggunakan Blender.",
    parentBenefit:
      "Anak mengembangkan kreativitas, ketelitian, ketekunan, dan kemampuan memecahkan masalah melalui project 3D.",
    suitableFor: [
      "Anak yang tertarik dengan karakter, objek, dan dunia tiga dimensi.",
      "Anak yang ingin mengenal proses animasi menggunakan Blender.",
      "Anak yang menyukai proses kreatif sekaligus tantangan teknis.",
    ],
    ageRangeLabel: "7–17 tahun",
    minAge: 7,
    maxAge: 17,
    packages: [
      createPackage({
        id: "bros",
        name: "Bros",
        ageBandId: "tweens",
        ageLabel: "7–12 tahun",
        minAge: 7,
        maxAge: 12,
        meetingsPerWeek: 1,
      }),
      createPackage({
        id: "mesh",
        name: "Mesh",
        ageBandId: "tweens",
        ageLabel: "7–12 tahun",
        minAge: 7,
        maxAge: 12,
        meetingsPerWeek: 2,
      }),
      createPackage({
        id: "scifi",
        name: "Scifi",
        ageBandId: "teens",
        ageLabel: "13–17 tahun",
        minAge: 13,
        maxAge: 17,
        meetingsPerWeek: 1,
      }),
      createPackage({
        id: "drone",
        name: "Drone",
        ageBandId: "teens",
        ageLabel: "13–17 tahun",
        minAge: 13,
        maxAge: 17,
        meetingsPerWeek: 2,
      }),
    ],
    curriculum: [
      {
        id: "blender",
        name: "Blender",
        levels: eightProgressiveLevels,
        lessonsPerLevel: 8,
      },
    ],
    consultationTopic: "kelas Animasi 3D Blender Kidspro ID",
  },
  {
    id: "editing-video",
    clusterId: "motion-media",
    name: "Editing Video",
    shortName: "Editing Video",
    tool: "CapCut",
    eyebrow: "Cerita melalui video",
    summary:
      "Mengajarkan anak merangkai gambar, suara, teks, dan efek menjadi karya video menggunakan CapCut.",
    parentBenefit:
      "Anak belajar menyampaikan pesan, membangun alur cerita, dan mengolah materi digital menjadi video yang lebih terarah.",
    suitableFor: [
      "Anak yang senang merekam atau menyusun video.",
      "Anak yang ingin belajar bercerita melalui media visual.",
      "Anak yang tertarik mengenal proses produksi konten video.",
    ],
    ageRangeLabel: "7–17 tahun",
    minAge: 7,
    maxAge: 17,
    packages: [
      createPackage({
        id: "chroma",
        name: "Chroma",
        ageBandId: "tweens",
        ageLabel: "7–12 tahun",
        minAge: 7,
        maxAge: 12,
        meetingsPerWeek: 1,
      }),
      createPackage({
        id: "frame",
        name: "Frame",
        ageBandId: "tweens",
        ageLabel: "7–12 tahun",
        minAge: 7,
        maxAge: 12,
        meetingsPerWeek: 2,
      }),
      createPackage({
        id: "motion",
        name: "Motion",
        ageBandId: "teens",
        ageLabel: "13–17 tahun",
        minAge: 13,
        maxAge: 17,
        meetingsPerWeek: 1,
      }),
      createPackage({
        id: "render",
        name: "Render",
        ageBandId: "teens",
        ageLabel: "13–17 tahun",
        minAge: 13,
        maxAge: 17,
        meetingsPerWeek: 2,
      }),
    ],
    curriculum: [
      {
        id: "capcut",
        name: "CapCut",
        levels: sixProgressiveLevels,
        lessonsPerLevel: 8,
      },
    ],
    consultationTopic: "kelas Editing Video CapCut Kidspro ID",
  },
  {
    id: "youtuber",
    clusterId: "content-creator",
    name: "YouTuber",
    shortName: "YouTuber",
    tool: "Video content creation",
    eyebrow: "Creator video",
    summary:
      "Mendampingi anak mengenal proses merancang dan menghasilkan konten video secara bertahap.",
    parentBenefit:
      "Ketertarikan anak pada video diarahkan menjadi proses kreatif yang melibatkan ide, komunikasi, dan produksi karya.",
    suitableFor: [
      "Anak yang senang menyampaikan cerita atau ide melalui video.",
      "Anak yang tertarik mengenal proses menjadi kreator konten.",
      "Anak yang ingin melatih kreativitas dan komunikasi di depan kamera.",
    ],
    ageRangeLabel: "7–15 tahun",
    minAge: 7,
    maxAge: 15,
    packages: [
      createPackage({
        id: "tutorial",
        name: "Tutorial",
        ageBandId: "young-creators",
        ageLabel: "7–15 tahun",
        minAge: 7,
        maxAge: 15,
        meetingsPerWeek: 1,
      }),
      createPackage({
        id: "livestream",
        name: "Livestream",
        ageBandId: "young-creators",
        ageLabel: "7–15 tahun",
        minAge: 7,
        maxAge: 15,
        meetingsPerWeek: 2,
      }),
    ],
    curriculum: [
      {
        id: "youtuber-path",
        name: "YouTuber Path",
        levels: ["Pre-Youtuber", "Basic", "Intermediate", "Pro"],
        lessonsPerLevel: 8,
      },
    ],
    consultationTopic: "kelas YouTuber Kidspro ID",
  },
  {
    id: "podcaster",
    clusterId: "content-creator",
    name: "Podcaster",
    shortName: "Podcaster",
    tool: "Audio content creation",
    eyebrow: "Creator audio",
    summary:
      "Mendampingi anak mengenal proses menyusun pembicaraan dan menghasilkan konten dalam format audio.",
    parentBenefit:
      "Anak diarahkan untuk mengolah ide, berbicara lebih terstruktur, dan mengenal proses produksi konten audio.",
    suitableFor: [
      "Anak yang suka bercerita, berdiskusi, atau melakukan wawancara.",
      "Anak yang tertarik membuat konten tanpa harus selalu tampil di kamera.",
      "Anak yang ingin melatih komunikasi dan penyusunan ide.",
    ],
    ageRangeLabel: "7–15 tahun",
    minAge: 7,
    maxAge: 15,
    packages: [
      createPackage({
        id: "hosting",
        name: "Hosting",
        ageBandId: "young-creators",
        ageLabel: "7–15 tahun",
        minAge: 7,
        maxAge: 15,
        meetingsPerWeek: 1,
      }),
      createPackage({
        id: "streaming",
        name: "Streaming",
        ageBandId: "young-creators",
        ageLabel: "7–15 tahun",
        minAge: 7,
        maxAge: 15,
        meetingsPerWeek: 2,
      }),
    ],
    curriculum: [
      {
        id: "podcaster-path",
        name: "Podcaster Path",
        levels: ["Pre-Podcaster", "Podcaster"],
        lessonsPerLevel: 8,
      },
    ],
    consultationTopic: "kelas Podcaster Kidspro ID",
  },
  {
    id: "ai",
    clusterId: "code-technology",
    name: "Artificial Intelligence",
    shortName: "AI",
    tool: "AI",
    eyebrow: "Eksplorasi AI",
    summary:
      "Jalur pembelajaran bertahap untuk mengenalkan AI dalam konteks keterampilan dan proses berkarya digital.",
    parentBenefit:
      "Anak mendapatkan jalur belajar yang terarah untuk mengenal teknologi AI sesuai tingkat pembelajarannya.",
    suitableFor: [
      "Anak yang penasaran dengan perkembangan teknologi AI.",
      "Anak yang ingin mengenal AI melalui jalur belajar bertingkat.",
      "Anak yang ingin memperluas keterampilan digitalnya ke teknologi baru.",
    ],
    ageRangeLabel: "7–15 tahun",
    minAge: 7,
    maxAge: 15,
    packages: [
      createPackage({
        id: "cosmos",
        name: "Cosmos",
        ageBandId: "young-creators",
        ageLabel: "7–15 tahun",
        minAge: 7,
        maxAge: 15,
        meetingsPerWeek: 1,
      }),
      createPackage({
        id: "stellar",
        name: "Stellar",
        ageBandId: "young-creators",
        ageLabel: "7–15 tahun",
        minAge: 7,
        maxAge: 15,
        meetingsPerWeek: 2,
      }),
    ],
    curriculum: [
      {
        id: "ai-path",
        name: "AI Path",
        levels: fourStageLevels,
        lessonsPerLevel: 8,
      },
    ],
    consultationTopic: "kelas Artificial Intelligence Kidspro ID",
  },
];

export const kidsproProgramById = Object.fromEntries(
  kidsproPrograms.map((program) => [program.id, program]),
) as Record<KidsproProgramId, KidsproProgram>;

export function getKidsproProgramsForAge(age: number): KidsproProgram[] {
  return kidsproPrograms.filter(
    (program) => age >= program.minAge && age <= program.maxAge,
  );
}

export function getKidsproPackages({
  programId,
  age,
  meetingsPerWeek,
}: {
  programId: KidsproProgramId;
  age: number;
  meetingsPerWeek?: KidsproFrequency;
}): KidsproPackage[] {
  return kidsproProgramById[programId].packages.filter((item) => {
    const matchesAge = age >= item.minAge && age <= item.maxAge;
    const matchesFrequency =
      meetingsPerWeek === undefined ||
      item.meetingsPerWeek === meetingsPerWeek;

    return matchesAge && matchesFrequency;
  });
}

export function getKidsproCurriculumForAge(
  programId: KidsproProgramId,
  age: number,
): KidsproCurriculumTrack[] {
  const program = kidsproProgramById[programId];

  return program.curriculum.filter((track) => {
    if (!track.ageBandIds || track.ageBandIds.length === 0) return true;

    return track.ageBandIds.some((ageBandId) => {
      const ageBand = kidsproAgeBands.find((item) => item.id === ageBandId);

      return ageBand
        ? age >= ageBand.minAge && age <= ageBand.maxAge
        : false;
    });
  });
}