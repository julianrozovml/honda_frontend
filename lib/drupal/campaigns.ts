import { z } from "zod";
import {
  textOnly,
  documentNumber,
  validEmail,
  colombianPhone,
  requiredOption,
  acceptedTerms,
} from "@/lib/validations";

// ── Schema de validación ──────────────────────────────────────────────────────

export const campaignFormSchema = z.object({
  nombre:          textOnly,
  apellido:        textOnly,
  tipoDocumento:   requiredOption("Selecciona un tipo de documento"),
  numeroDocumento: documentNumber,
  correo:          validEmail,
  telefono:        colombianPhone,
  departamento:    requiredOption("Selecciona un departamento"),
  ciudad:          requiredOption("Selecciona una ciudad"),
  aceptaTerminos:  acceptedTerms,
});

export type CampaignFormFields = z.infer<typeof campaignFormSchema>;

// ── Servicio ──────────────────────────────────────────────────────────────────

export async function submitCampaign(
  campaignId: string,
  data: CampaignFormFields,
): Promise<void> {
  // TODO: reemplazar con drupalFetch cuando el endpoint esté disponible
  await new Promise<void>((resolve, reject) =>
    setTimeout(() => (Math.random() > 0.5 ? resolve() : reject()), 1500),
  );
  void campaignId;
  void data;
}
