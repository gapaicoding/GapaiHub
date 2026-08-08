import type { VariantProps } from "class-variance-authority";
import { ArrowUpRight, Instagram, MessageCircle } from "lucide-react";

import { actionVariants } from "@/components/ui/action";
import {
  buildContactHref,
  getContactChannel,
  type ContactChannel,
} from "@/config/whatsapp";
import { cn } from "@/lib/utils";

type Props = {
  /** Channel tujuan konsultasi. Default: Instagram Gapai Mentorship. */
  channel?: ContactChannel;
  /** Topik yang dimasukkan ke template pesan WhatsApp. */
  topic?: string;
  /** Label manual untuk menggantikan label default channel. */
  label?: string;
  className?: string;
} & VariantProps<typeof actionVariants>;

export function ConsultationCta({
  channel = "gapai",
  topic,
  label,
  className,
  variant = "primary",
  size = "lg",
}: Props) {
  const contact = getContactChannel(channel);
  const href = buildContactHref(channel, topic ? { topic } : {});
  const resolvedLabel = label ?? contact.ctaLabel;
  const ContactIcon = contact.type === "whatsapp" ? MessageCircle : Instagram;

  return (
    <a
      href={href}
      className={cn(actionVariants({ variant, size }), className)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${resolvedLabel} — membuka ${
        contact.type === "whatsapp" ? "WhatsApp" : "Instagram"
      } di tab baru`}
      title={contact.notice}
    >
      <ContactIcon aria-hidden="true" className="size-4.5 shrink-0" />

      <span>{resolvedLabel}</span>

      <ArrowUpRight aria-hidden="true" className="size-4 shrink-0" />
    </a>
  );
}