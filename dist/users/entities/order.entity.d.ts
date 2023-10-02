import { Product } from 'src/products/entities/product.entity';
import { User } from './user.entity';
export declare class Order {
    date: Date;
    user: User;
    products: Product[];
}
