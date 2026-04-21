export interface Category {
  title: string;
  icon?: string;
  description: string;
}

export interface MenuCategoriaProps {
  category: Category[];
  onCategoryChange?: (category: Category) => void;
}