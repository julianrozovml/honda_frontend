import Image from "next/image";
import Link from "next/link";
import { headers } from "next/headers";
import { isMobile } from "@/lib/device";
import type { CampaignStepsSectionProps } from "./campaign-steps-section.types";
import styles from "./CampaignStepsSection.module.scss";

// ── Helper — renders step description with optional inline link ───────────────

function StepDescription({
  description,
  link,
}: {
  description: string;
  link?: { label: string; href: string };
}) {
  if (!link) return <p className={styles.stepText}>{description}</p>;

  // Split text around the link label and inject an anchor
  const parts = description.split(link.label);

  return (
    <p className={styles.stepText}>
      {parts[0]}
      <Link href={link.href} className={styles.stepLink}>
        {link.label}
      </Link>
      {parts[1]}
    </p>
  );
}

// ── Component ─────────────────────────────────────────────────────────────────

export async function CampaignStepsSection({
  title,
  steps,
  closingText,
  image,
}: CampaignStepsSectionProps) {
  const headersList = await headers();
  const ua = headersList.get("user-agent") ?? "";
  const mobile = isMobile(ua);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* Left — image (desktop only) */}
        {!mobile && (
          <div className={styles.imageWrapper}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className={styles.image}
              sizes="50vw"
              priority
            />
          </div>
        )}

        {/* Right — content */}
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>

          {/* Numbered steps */}
          <ol className={styles.stepList}>
            {steps.map((step) => (
              <li key={step.id} className={styles.stepItem}>
                <span className={styles.stepNumber} aria-hidden="true">
                  {step.id}
                </span>
                <StepDescription
                  description={step.description}
                  link={step.link}
                />
              </li>
            ))}
          </ol>

          {/* Closing text */}
          <p className={styles.closing}>{closingText}</p>
        </div>
      </div>
    </section>
  );
}
