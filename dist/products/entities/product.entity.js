"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const openapi = require("@nestjs/swagger");
class Product {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, description: { required: true, type: () => String }, price: { required: true, type: () => Number }, stock: { required: true, type: () => Number }, image: { required: true, type: () => String } };
    }
}
exports.Product = Product;
//# sourceMappingURL=product.entity.js.map