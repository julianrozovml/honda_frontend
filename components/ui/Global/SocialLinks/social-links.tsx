import Link from "next/link";
import type {
  SocialLinksProps,
  SocialLink,
  SocialNetwork,
} from "./social-links.types";
import IconFacebook from "@/components/ui/Icons/Social/IconFacebook/IconFacebook";
import IconInstagram from "@/components/ui/Icons/Social/IconInstagram/IconInstagram";
import IconX from "@/components/ui/Icons/Social/IconX/IconX";
import IconYoutube from "@/components/ui/Icons/Social/IconYoutube/IconYoutube";
import styles from "./SocialLinks.module.scss";

const defaultLinks: SocialLink[] = [
  { network: "facebook", href: "#", label: "Facebook" },
  { network: "instagram", href: "#", label: "Instagram" },
  { network: "x", href: "#", label: "X" },
  { network: "youtube", href: "#", label: "Youtube" },
];

const iconMap: Record<SocialNetwork, React.ReactNode> = {
  facebook: <IconFacebook size={22} />,
  instagram: <IconInstagram size={22} />,
  x: <IconX size={22} />,
  youtube: <IconYoutube size={22} />,
};

export default function SocialLinks({
  title = "Síguenos y entérate en:",
  links = defaultLinks,
  className,
}: SocialLinksProps) {
  return (
    <div className={[styles.wrapper, className].filter(Boolean).join(" ")}>
      {title && <p className={styles.title}>{title}</p>}
      <ul className={styles.list}>
        {links.map(({ network, href, label }) => (
          <li key={network}>
            <Link
              href={href}
              className={styles.link}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
            >
              {iconMap[network]}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
