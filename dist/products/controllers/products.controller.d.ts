import { CreateProductDto, UpdateProductDto } from '../dtos/products.dtos';
import { ProductsService } from './../services/products.service';
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductsService);
    getProducts(limit?: number, offset?: number): {
        page: number;
        limit: number;
        data: import("../entities/product.entity").Product[];
    };
    getProductFilter(): string;
    getOne(productId: number): import("../entities/product.entity").Product;
    create(payload: CreateProductDto): {
        name: string;
        description: string;
        price: number;
        stock: number;
        image: string;
        id: number;
    };
    update(id: string, payload: UpdateProductDto): import("../entities/product.entity").Product;
    delete(id: string): boolean;
}
