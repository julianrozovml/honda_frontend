import Image from "next/image";
import Link from "next/link";
import type { SocialLinksProps, SocialLink } from "./social-links.types";
import styles from "./SocialLinks.module.scss";

const defaultLinks: SocialLink[] = [
  { network: "facebook", href: "#", label: "Facebook" },
  { network: "instagram", href: "#", label: "Instagram" },
  { network: "x", href: "#", label: "X" },
  { network: "youtube", href: "#", label: "Youtube" },
];

const iconSrc: Record<string, string> = {
  facebook: "/icons/icon-fb.svg",
  instagram: "/icons/icon-in.svg",
  x: "/icons/icon-x.svg",
  youtube: "/icons/icon-yt.svg",
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
              <Image
                src={iconSrc[network]}
                alt={label}
                width={22}
                height={22}
                className={styles.icon}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
