"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "@/components/ui/Forms/Input/input";
import Select from "@/components/ui/Forms/Select/select";
import Button from "@/components/ui/Buttons/Button/button";
import { ModalConfirm } from "@/components/ui/Modal/ModalConfirm/modal-confirm";
import { ModalError } from "@/components/ui/Modal/ModalError/modal-error";
import {
  campaignFormSchema,
  submitCampaign,
  type CampaignFormFields,
} from "@/lib/drupal/campaigns";
import type { CampaignAssignmentFormProps } from "./campaign-assignment-form.types";
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

export default function CampaignAssignmentForm({
  campaignId,
  onSuccess,
}: CampaignAssignmentFormProps) {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const {
    control,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm<CampaignFormFields>({
    resolver: zodResolver(campaignFormSchema),
    mode: "onTouched",
    defaultValues: {
      nombre:          "",
      apellido:        "",
      tipoDocumento:   "",
      numeroDocumento: "",
      correo:          "",
      telefono:        "",
      departamento:    "",
      ciudad:          "",
      aceptaTerminos:  undefined,
    },
  });

  const departamento = watch("departamento");
  const ciudadesDisponibles = CIUDADES[departamento] ?? [];

  async function onSubmit(data: CampaignFormFields) {
    try {
      await submitCampaign(campaignId, data);
      setShowSuccess(true);
      onSuccess?.();
    } catch {
      setShowError(true);
    }
  }

  function handleSuccessClose() {
    setShowSuccess(false);
    reset();
  }

  return (
    <>
      <ModalConfirm
        open={showSuccess}
        onClose={handleSuccessClose}
        title="Datos enviados con éxito"
        description="Serás notificado por correo por uno de nuestros agentes una vez valide tu(s) campaña(s)."
      />
      <ModalError
        open={showError}
        onClose={() => setShowError(false)}
        title="Error al enviar los datos"
        description="Ocurrió un problema al enviar tu solicitud. Por favor intenta de nuevo más tarde."
      />
      <form onSubmit={handleSubmit(onSubmit)} noValidate className={styles.form}>
        <div className={styles.inner}>
          <div className={styles.grid}>
            <Controller
              name="nombre"
              control={control}
              render={({ field }) => (
                <Input
                  id="nombre"
                  label="Nombre"
                  placeholder="Nombres"
                  value={field.value}
                  onChange={(v) => field.onChange(v.replace(/[^a-zA-ZÀ-ÿ\s]/g, ""))}
                  onBlur={field.onBlur}
                  error={errors.nombre?.message}
                />
              )}
            />
            <Controller
              name="apellido"
              control={control}
              render={({ field }) => (
                <Input
                  id="apellido"
                  label="Apellido"
                  placeholder="Apellidos"
                  value={field.value}
                  onChange={(v) => field.onChange(v.replace(/[^a-zA-ZÀ-ÿ\s]/g, ""))}
                  onBlur={field.onBlur}
                  error={errors.apellido?.message}
                />
              )}
            />
            <Controller
              name="tipoDocumento"
              control={control}
              render={({ field }) => (
                <Select
                  id="tipoDocumento"
                  label="Tipo de documento"
                  placeholder="Selecciona"
                  options={TIPOS_DOCUMENTO}
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  error={errors.tipoDocumento?.message}
                />
              )}
            />
            <Controller
              name="numeroDocumento"
              control={control}
              render={({ field }) => (
                <Input
                  id="numeroDocumento"
                  label="Número de documento"
                  placeholder="Ej. 1102999888"
                  value={field.value}
                  onChange={(v) => field.onChange(v.replace(/\D/g, ""))}
                  onBlur={field.onBlur}
                  error={errors.numeroDocumento?.message}
                />
              )}
            />
            <Controller
              name="correo"
              control={control}
              render={({ field }) => (
                <Input
                  id="correo"
                  type="email"
                  label="Correo electrónico"
                  placeholder="Ej. correo@example.com"
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  error={errors.correo?.message}
                />
              )}
            />
            <Controller
              name="telefono"
              control={control}
              render={({ field }) => (
                <Input
                  id="telefono"
                  type="tel"
                  label="Teléfono"
                  placeholder="Número de teléfono"
                  value={field.value}
                  onChange={(v) => field.onChange(v.replace(/\D/g, ""))}
                  onBlur={field.onBlur}
                  error={errors.telefono?.message}
                />
              )}
            />
            <Controller
              name="departamento"
              control={control}
              render={({ field }) => (
                <Select
                  id="departamento"
                  label="Departamento"
                  placeholder="Selecciona"
                  options={DEPARTAMENTOS}
                  value={field.value}
                  onChange={(v) => {
                    field.onChange(v);
                    setValue("ciudad", "", { shouldValidate: false });
                  }}
                  onBlur={field.onBlur}
                  error={errors.departamento?.message}
                />
              )}
            />
            <Controller
              name="ciudad"
              control={control}
              render={({ field }) => (
                <Select
                  id="ciudad"
                  label="Ciudad"
                  placeholder="Selecciona"
                  options={ciudadesDisponibles}
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  disabled={!departamento}
                  error={errors.ciudad?.message}
                />
              )}
            />
          </div>

          <div className={styles.checkboxRow}>
            <Controller
              name="aceptaTerminos"
              control={control}
              render={({ field }) => (
                <input
                  type="checkbox"
                  id="aceptaTerminos"
                  className={styles.checkbox}
                  checked={field.value === true}
                  onChange={(e) => field.onChange(e.target.checked || undefined)}
                />
              )}
            />
            <label htmlFor="aceptaTerminos" className={styles.checkboxLabel}>
              Acepto los{" "}
              <a href="/terminos-y-condiciones" target="_blank" rel="noopener noreferrer">
                Términos y Condiciones
              </a>
              , política de privacidad y política de habeas data de la página web Honda Motos.
            </label>
          </div>
          {errors.aceptaTerminos && (
            <span className={styles.checkboxError}>{errors.aceptaTerminos.message}</span>
          )}

          <div className={styles.footer}>
            <Button
              type="submit"
              label={isSubmitting ? "Enviando…" : "Enviar solicitud"}
              variant={isValid ? "primary" : "secondary"}
              disabled={!isValid || isSubmitting}
            />
          </div>
        </div>
      </form>
    </>
  );
}
