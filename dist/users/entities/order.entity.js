"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const openapi = require("@nestjs/swagger");
class Order {
    static _OPENAPI_METADATA_FACTORY() {
        return { date: { required: true, type: () => Date }, user: { required: true, type: () => require("./user.entity").User }, products: { required: true, type: () => [require("../../products/entities/product.entity").Product] } };
    }
}
exports.Order = Order;
//# sourceMappingURL=order.entity.js.map