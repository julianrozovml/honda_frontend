export interface Category {
  id: string;
  title: string;
  icon?: string;
  description: string;
}

export interface MenuCategoryMotorbikeProps {
  category: Category[];
  onCategoryChange?: (category: Category) => void;
}
