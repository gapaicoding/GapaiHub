/**
 * Konfigurasi seluruh channel kontak Gapai Mentorship.
 *
 * Nomor WhatsApp disimpan dalam format internasional tanpa tanda plus.
 * Nomor telepon merupakan informasi kontak publik sehingga tidak perlu
 * disimpan sebagai environment variable atau secret.
 *
 * Brilia belum memiliki nomor WhatsApp terverifikasi. Untuk sementara,
 * kontak Brilia diarahkan ke Instagram Gapai Mentorship tanpa menggunakan
 * nomor dummy.
 */

export type ContactChannel = "gapai" | "brilia" | "joytalk" | "kidspro" | "els";

type WhatsAppContactConfig = {
  type: "whatsapp";
  name: string;
  phone: string;
  ctaLabel: string;
  notice?: never;
};

type InstagramContactConfig = {
  type: "instagram";
  name: string;
  url: string;
  ctaLabel: string;
  notice?: string;
};

export type ContactChannelConfig = WhatsAppContactConfig | InstagramContactConfig;

export const GAPAI_INSTAGRAM_URL = "https://www.instagram.com/gapaiuniverse/";

export const contactChannels: Record<ContactChannel, ContactChannelConfig> = {
  gapai: {
    type: "instagram",
    name: "Gapai Mentorship",
    url: GAPAI_INSTAGRAM_URL,
    ctaLabel: "Hubungi Gapai Mentorship",
  },

  brilia: {
    type: "instagram",
    name: "Brilia",
    url: GAPAI_INSTAGRAM_URL,
    ctaLabel: "Tanyakan Brilia via Instagram",
    notice:
      "Nomor WhatsApp Brilia sedang diperbarui. Untuk sementara, konsultasi diarahkan ke Instagram Gapai Mentorship.",
  },

  joytalk: {
    type: "whatsapp",
    name: "Joytalk English",
    phone: "628213927568",
    ctaLabel: "Konsultasi Joytalk English",
  },

  kidspro: {
    type: "whatsapp",
    name: "Kidspro ID",
    phone: "6285725226392",
    ctaLabel: "Konsultasi Kidspro ID",
  },

  els: {
    type: "whatsapp",
    name: "ELS School",
    phone: "6285692342285",
    ctaLabel: "Konsultasi ELS School",
  },
};

export type ConsultationContext = {
  /**
   * Topik atau kebutuhan yang dibawa ke dalam pesan WhatsApp.
   *
   * Contoh:
   * - "program Kidspro ID"
   * - "kelas bahasa Inggris anak"
   */
  topic?: string;
};

export function getContactChannel(channel: ContactChannel): ContactChannelConfig {
  return contactChannels[channel];
}

function buildWhatsAppMessage(
  contact: WhatsAppContactConfig,
  context: ConsultationContext,
): string {
  const introduction =
    `Halo ${contact.name}, saya menemukan ${contact.name} melalui ` +
    "website Gapai Mentorship dan ingin berkonsultasi";

  if (context.topic) {
    return `${introduction} tentang ${context.topic}.`;
  }

  return `${introduction} mengenai kebutuhan anak saya.`;
}

/**
 * Membuat link kontak berdasarkan channel yang dipilih.
 *
 * - Gapai dan Brilia diarahkan ke Instagram Gapai.
 * - Joytalk, Kidspro, dan ELS diarahkan ke WhatsApp unit masing-masing.
 */
export function buildContactHref(
  channel: ContactChannel = "gapai",
  context: ConsultationContext = {},
): string {
  const contact = getContactChannel(channel);

  if (contact.type === "instagram") {
    return contact.url;
  }

  const message = buildWhatsAppMessage(contact, context);

  return `https://wa.me/${contact.phone}?text=${encodeURIComponent(message)}`;
}
