import { CategoriesService } from '../services/categories.service';
import { CreateCategoryDto, UpdateCategoryDto } from './../dtos/category.dtos';
export declare class CategoriesController {
    private categoriesService;
    constructor(categoriesService: CategoriesService);
    findAll(): import("../entities/category.entity").Category[];
    get(id: number): import("../entities/category.entity").Category;
    create(payload: CreateCategoryDto): {
        name: string;
        id: number;
    };
    update(id: number, payload: UpdateCategoryDto): import("../entities/category.entity").Category;
    remove(id: number): boolean;
}
