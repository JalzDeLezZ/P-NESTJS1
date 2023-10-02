import { Category } from '../entities/category.entity';
import { CreateCategoryDto, UpdateCategoryDto } from '../dtos/category.dtos';
export declare class CategoriesService {
    private counterId;
    private categories;
    findAll(): Category[];
    findOne(id: number): Category;
    create(data: CreateCategoryDto): {
        name: string;
        id: number;
    };
    update(id: number, changes: UpdateCategoryDto): Category;
    remove(id: number): boolean;
}
