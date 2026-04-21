export interface CampaignAssignmentFormProps {
  /** ID de la campaña a registrar */
  campaignId: string;
  /** Callback al enviar el formulario exitosamente */
  onSuccess?: () => void;
}
