import { Brand } from '../entities/brand.entity';
import { CreateBrandDto, UpdateBrandDto } from '../dtos/brand.dtos';
export declare class BrandsService {
    private counterId;
    private brands;
    findAll(): Brand[];
    findOne(id: number): Brand;
    create(data: CreateBrandDto): {
        name: string;
        image: string;
        id: number;
    };
    update(id: number, changes: UpdateBrandDto): Brand;
    remove(id: number): boolean;
}
