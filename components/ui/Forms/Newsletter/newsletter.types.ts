export interface NewsletterProps {
  title?: string;
  onSubmit?: (email: string) => void;
  termsHref?: string;
  className?: string;
}
