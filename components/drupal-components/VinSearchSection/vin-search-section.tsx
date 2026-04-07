"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Buttons/Button/button";
import InputSearch from "@/components/ui/Forms/InputSearch/input-search";
import CardProductCampaign from "@/components/ui/Cards/CardProductCampaign/card-product-campaign";
import type {
  VinSearchSectionProps,
  VinResultsProps,
  SearchStatus,
  Campaign,
  VinSectionImage,
} from "./vin-search-section.types";
import styles from "./VinSearchSection.module.scss";

// ── SVG Icons ─────────────────────────────────────────────────────────────────

const InfoIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className={styles.infoIcon}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="8" strokeWidth={2.5} />
    <line x1="12" y1="12" x2="12" y2="16" />
  </svg>
);

const SpinnerIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className={styles.spinner}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" strokeOpacity={0.25} />
    <path d="M12 2a10 10 0 0 1 10 10" />
  </svg>
);

// ── VIN Tooltip ───────────────────────────────────────────────────────────────

function VinTooltip({ src, alt }: { src: string; alt: string }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setVisible(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={styles.tooltipWrapper} ref={ref}>
      <button
        type="button"
        className={styles.tooltipTrigger}
        onClick={() => setVisible((v) => !v)}
        aria-label="¿Dónde encuentro mi VIN?"
        aria-expanded={visible}
      >
        <InfoIcon />
      </button>

      {visible && (
        <div className={styles.tooltipPopover} role="tooltip">
          <Image src={src} alt={alt} className={styles.tooltipImage} />
        </div>
      )}
    </div>
  );
}

// ── Results ───────────────────────────────────────────────────────────────────

function VinResults({ vin, campaigns, status }: VinResultsProps) {
  const router = useRouter();
  if (status === "idle") return null;

  if (status === "loading") {
    return (
      <div className={styles.resultsSection}>
        <div className={styles.loadingState}>
          <SpinnerIcon />
          <span>Buscando campañas…</span>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.resultsSection}>
      <h3 className={styles.resultsTitle}>
        Campañas para <q>{vin}</q>
      </h3>

      {campaigns.length === 0 ? (
        <div className={styles.emptyState}>
          <InfoIcon />
          <span>En este momento no tienes campañas abiertas.</span>
        </div>
      ) : (
        <>
          <ul className={styles.cardGrid}>
            {campaigns.map((campaign) => (
              <li key={campaign.id}>
                <CardProductCampaign
                  date={campaign.date}
                  title={campaign.title}
                  imageSrc={campaign.imageSrc}
                  imageAlt={campaign.imageAlt}
                  productName={campaign.productName}
                  models={campaign.models}
                  onShare={() => {
                    if (typeof navigator !== "undefined" && navigator.share) {
                      navigator.share({
                        title: campaign.title,
                        url: window.location.href,
                      });
                    }
                  }}
                />
              </li>
            ))}
          </ul>
          <div className={styles.assignAction}>
            <Button
              label="Solicitar campañas (5)"
              variant="primary"
              onClick={() => router.push("/campanias-de-seguridad/asignacion")}
            />
          </div>
        </>
      )}
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

export function VinSearchSection({
  label = "Número de VIN",
  placeholder = "Ingresa el VIN de motocicleta...",
  buttonLabel = "Comprobar campaña(s)",
  tooltipImage,
  image,
  onSearch,
}: VinSearchSectionProps) {
  const [vin, setVin] = useState<string>("");
  const [submitted, setSubmitted] = useState<string>("");
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [status, setStatus] = useState<SearchStatus>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const trimmed = vin.trim();
    if (!trimmed) return;

    setStatus("loading");
    setSubmitted(trimmed);

    try {
      const results = await onSearch(trimmed);
      setCampaigns(results);
      setStatus("success");
    } catch {
      setCampaigns([]);
      setStatus("error");
    }
  }

  return (
    <div className={styles.wrapper}>
      {/* ── Search form ─────────────────────────────────────────────────── */}
      <div className={styles.formSection}>
        {image && (
          <div className={styles.sectionImage}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className={styles.sectionImageImg}
              sizes="(max-width: 768px) 0vw, 30vw"
            />
          </div>
        )}
        <form onSubmit={handleSubmit} noValidate>
          {/* Label row */}
          <div className={styles.labelRow}>
            <label htmlFor="vin-input" className={styles.label}>
              {label}
            </label>
            {tooltipImage && (
              <VinTooltip src={tooltipImage.src} alt={tooltipImage.alt} />
            )}
          </div>

          {/* Input + button row */}
          <div className={styles.inputRow}>
            <InputSearch
              value={vin}
              onChange={(val) => setVin(val.toUpperCase())}
              onClear={() => setVin("")}
              placeholder={placeholder}
              className={styles.inputWrapper}
            />

            <Button
              type="submit"
              label={status === "loading" ? "Buscando…" : buttonLabel}
              disabled={status === "loading" || !vin.trim()}
              className={styles.submitBtn}
            />
          </div>
        </form>
      </div>

      {/* ── Results ─────────────────────────────────────────────────────── */}
      <VinResults vin={submitted} campaigns={campaigns} status={status} />
    </div>
  );
}
