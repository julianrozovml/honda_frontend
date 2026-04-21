export interface Category {
  id: string;
  title: string;
  icon?: string;
  description: string;
}

export interface MenuCategoriaProps {
  category: Category[];
  isMobile: boolean;
  onCategoryChange?: (category: Category) => void;
}