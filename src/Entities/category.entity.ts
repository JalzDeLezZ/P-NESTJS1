import { Product } from './product.entity';

export class Category {
  id: number;
  name: string;
  description: string;
  image: string;
  products: Product[];
}
