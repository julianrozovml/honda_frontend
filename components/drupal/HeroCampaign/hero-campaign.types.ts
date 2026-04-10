export interface HeroCampaignImage {
  src: string;
  alt: string;
}

export interface HeroCampaignProps {
  title: string;
  description: string;
  image: HeroCampaignImage;
}
