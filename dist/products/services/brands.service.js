"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandsService = void 0;
const common_1 = require("@nestjs/common");
let BrandsService = class BrandsService {
    constructor() {
        this.counterId = 1;
        this.brands = [
            {
                id: 1,
                name: 'Brand 1',
                image: 'https://i.imgur.com/U4iGx1j.jpeg',
            },
        ];
    }
    findAll() {
        return this.brands;
    }
    findOne(id) {
        const product = this.brands.find((item) => item.id === id);
        if (!product) {
            throw new common_1.NotFoundException(`Brand #${id} not found`);
        }
        return product;
    }
    create(data) {
        this.counterId = this.counterId + 1;
        const newBrand = {
            id: this.counterId,
            ...data,
        };
        this.brands.push(newBrand);
        return newBrand;
    }
    update(id, changes) {
        const brand = this.findOne(id);
        const index = this.brands.findIndex((item) => item.id === id);
        this.brands[index] = {
            ...brand,
            ...changes,
        };
        return this.brands[index];
    }
    remove(id) {
        const index = this.brands.findIndex((item) => item.id === id);
        if (index === -1) {
            throw new common_1.NotFoundException(`Brand #${id} not found`);
        }
        this.brands.splice(index, 1);
        return true;
    }
};
exports.BrandsService = BrandsService;
exports.BrandsService = BrandsService = __decorate([
    (0, common_1.Injectable)()
], BrandsService);
//# sourceMappingURL=brands.service.js.map