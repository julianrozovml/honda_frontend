"use client";

import { useState } from "react";
import Input from "@/components/ui/Forms/Input/input";
import Select from "@/components/ui/Forms/Select/select";
import Button from "@/components/ui/Buttons/Button/button";
import type {
  CampaignAssignmentFormProps,
  CampaignAssignmentFormFields,
} from "./campaign-assignment-form.types";
import styles from "./CampaignAssignmentForm.module.scss";

const TIPOS_DOCUMENTO = [
  { value: "cc", label: "Cédula de ciudadanía" },
  { value: "ce", label: "Cédula de extranjería" },
  { value: "pa", label: "Pasaporte" },
  { value: "nit", label: "NIT" },
];

const DEPARTAMENTOS = [
  { value: "bogota", label: "Bogotá D.C." },
  { value: "antioquia", label: "Antioquia" },
  { value: "valle", label: "Valle del Cauca" },
  { value: "atlantico", label: "Atlántico" },
  { value: "cundinamarca", label: "Cundinamarca" },
  { value: "santander", label: "Santander" },
];

const CIUDADES: Record<string, { value: string; label: string }[]> = {
  bogota:       [{ value: "bogota", label: "Bogotá" }],
  antioquia:    [{ value: "medellin", label: "Medellín" }, { value: "bello", label: "Bello" }],
  valle:        [{ value: "cali", label: "Cali" }, { value: "palmira", label: "Palmira" }],
  atlantico:    [{ value: "barranquilla", label: "Barranquilla" }],
  cundinamarca: [{ value: "soacha", label: "Soacha" }, { value: "chia", label: "Chía" }],
  santander:    [{ value: "bucaramanga", label: "Bucaramanga" }],
};

const INITIAL: CampaignAssignmentFormFields = {
  nombre:          "",
  apellido:        "",
  tipoDocumento:   "",
  numeroDocumento: "",
  correo:          "",
  telefono:        "",
  departamento:    "",
  ciudad:          "",
  aceptaTerminos:  false,
};

export default function CampaignAssignmentForm({
  campaignId,
  onSuccess,
}: CampaignAssignmentFormProps) {
  const [fields, setFields] = useState<CampaignAssignmentFormFields>(INITIAL);
  const [loading, setLoading] = useState(false);

  function set<K extends keyof CampaignAssignmentFormFields>(
    key: K,
    value: CampaignAssignmentFormFields[K]
  ) {
    setFields((prev) => ({
      ...prev,
      [key]: value,
      ...(key === "departamento" ? { ciudad: "" } : {}),
    }));
  }

  const ciudadesDisponibles = CIUDADES[fields.departamento] ?? [];

  const canSubmit =
    fields.nombre &&
    fields.apellido &&
    fields.tipoDocumento &&
    fields.numeroDocumento &&
    fields.correo &&
    fields.telefono &&
    fields.departamento &&
    fields.ciudad &&
    fields.aceptaTerminos;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;

    setLoading(true);
    try {
      // TODO: conectar con API de Drupal
      console.log("Enviando campaña:", campaignId, fields);
      onSuccess?.();
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={styles.form}>
      <div className={styles.inner}>
      <div className={styles.grid}>
        <Input
          id="nombre"
          name="nombre"
          label="Nombre"
          placeholder="Nombres"
          value={fields.nombre}
          onChange={(v) => set("nombre", v)}
        />
        <Input
          id="apellido"
          name="apellido"
          label="Apellido"
          placeholder="Apellidos"
          value={fields.apellido}
          onChange={(v) => set("apellido", v)}
        />
        <Select
          id="tipoDocumento"
          name="tipoDocumento"
          label="Tipo de documento"
          placeholder="Selecciona"
          options={TIPOS_DOCUMENTO}
          value={fields.tipoDocumento}
          onChange={(v) => set("tipoDocumento", v)}
        />
        <Input
          id="numeroDocumento"
          name="numeroDocumento"
          label="Número de documento"
          placeholder="Ej. 1102999888"
          value={fields.numeroDocumento}
          onChange={(v) => set("numeroDocumento", v)}
        />
        <Input
          id="correo"
          name="correo"
          type="email"
          label="Correo electrónico"
          placeholder="Ej. correo@example.com"
          value={fields.correo}
          onChange={(v) => set("correo", v)}
        />
        <Input
          id="telefono"
          name="telefono"
          type="tel"
          label="Teléfono"
          placeholder="Numero de teléfono"
          value={fields.telefono}
          onChange={(v) => set("telefono", v)}
        />
        <Select
          id="departamento"
          name="departamento"
          label="Departamento"
          placeholder="Selecciona"
          options={DEPARTAMENTOS}
          value={fields.departamento}
          onChange={(v) => set("departamento", v)}
        />
        <Select
          id="ciudad"
          name="ciudad"
          label="Ciudad"
          placeholder="Selecciona"
          options={ciudadesDisponibles}
          value={fields.ciudad}
          onChange={(v) => set("ciudad", v)}
          disabled={!fields.departamento}
        />
      </div>

      <div className={styles.checkboxRow}>
        <input
          type="checkbox"
          id="aceptaTerminos"
          className={styles.checkbox}
          checked={fields.aceptaTerminos}
          onChange={(e) => set("aceptaTerminos", e.target.checked)}
        />
        <label htmlFor="aceptaTerminos" className={styles.checkboxLabel}>
          Acepto los{" "}
          <a href="/terminos-y-condiciones" target="_blank" rel="noopener noreferrer">
            Términos y Condiciones
          </a>
          , política de privacidad y política de habeas data de la página web Honda Motos.
        </label>
      </div>

      <div className={styles.footer}>
        <Button
          type="submit"
          label={loading ? "Enviando…" : "Enviar solicitud"}
          variant="secondary"
          disabled={!canSubmit || loading}
        />
      </div>
      </div>
    </form>
  );
}
