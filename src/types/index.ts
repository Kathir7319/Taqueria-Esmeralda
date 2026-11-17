export type ProductCategory = 
  | 'all'
  | 'tacos'
  | 'specialties'
  | 'burritos'
  | 'quesadillas'
  | 'tortas'
  | 'sides'
  | 'drinks'
  | 'desserts';

export interface MenuItem {
  id: string;
  name: string;
  spanishName: string;
  category: ProductCategory;
  description: string;
  price: number;
  popular?: boolean;
  spicyLevel?: 0 | 1 | 2 | 3; // 0=none, 1=mild, 2=medium, 3=hot
  glutenFree?: boolean;
  image: string;
  ingredients?: string[];
  options?: {
    meats?: string[];
    salsas?: string[];
    tortillas?: string[];
  };
}

export interface Review {
  id: string;
  author: string;
  avatar: string;
  rating: number; // 1-5
  date: string;
  relativeTime: string;
  text: string;
  highlight?: string;
  verified: boolean;
  dishMentioned?: string;
  source: 'Google' | 'Direct';
}

export interface CartItem {
  cartId: string;
  menuItem: MenuItem;
  quantity: number;
  selectedMeat?: string;
  selectedSalsa?: string;
  selectedTortilla?: string;
  specialInstructions?: string;
  totalPrice: number;
}
