export interface CampaignAssignmentFormProps {
  /** ID de la campaña a registrar */
  campaignId: string;
  /** Callback al enviar el formulario exitosamente */
  onSuccess?: () => void;
}

export interface CampaignAssignmentFormFields {
  nombre: string;
  apellido: string;
  tipoDocumento: string;
  numeroDocumento: string;
  correo: string;
  telefono: string;
  departamento: string;
  ciudad: string;
  aceptaTerminos: boolean;
}
