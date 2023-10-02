import { BrandsService } from '../services/brands.service';
import { CreateBrandDto, UpdateBrandDto } from '../dtos/brand.dtos';
export declare class BrandsController {
    private brandsService;
    constructor(brandsService: BrandsService);
    findAll(): import("../entities/brand.entity").Brand[];
    get(id: number): import("../entities/brand.entity").Brand;
    create(payload: CreateBrandDto): {
        name: string;
        image: string;
        id: number;
    };
    update(id: number, payload: UpdateBrandDto): import("../entities/brand.entity").Brand;
    remove(id: number): boolean;
}
