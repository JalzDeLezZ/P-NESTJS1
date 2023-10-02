"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesService = void 0;
const common_1 = require("@nestjs/common");
let CategoriesService = class CategoriesService {
    constructor() {
        this.counterId = 1;
        this.categories = [
            {
                id: 1,
                name: 'Category 1',
            },
        ];
    }
    findAll() {
        return this.categories;
    }
    findOne(id) {
        const category = this.categories.find((item) => item.id === id);
        if (!category) {
            throw new common_1.NotFoundException(`Category #${id} not found`);
        }
        return category;
    }
    create(data) {
        this.counterId = this.counterId + 1;
        const newCategory = {
            id: this.counterId,
            ...data,
        };
        this.categories.push(newCategory);
        return newCategory;
    }
    update(id, changes) {
        const category = this.findOne(id);
        const index = this.categories.findIndex((item) => item.id === id);
        this.categories[index] = {
            ...category,
            ...changes,
        };
        return this.categories[index];
    }
    remove(id) {
        const index = this.categories.findIndex((item) => item.id === id);
        if (index === -1) {
            throw new common_1.NotFoundException(`Category #${id} not found`);
        }
        this.categories.splice(index, 1);
        return true;
    }
};
exports.CategoriesService = CategoriesService;
exports.CategoriesService = CategoriesService = __decorate([
    (0, common_1.Injectable)()
], CategoriesService);
//# sourceMappingURL=categories.service.js.map