"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
const openapi = require("@nestjs/swagger");
class Customer {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, lastName: { required: true, type: () => String }, phone: { required: true, type: () => String } };
    }
}
exports.Customer = Customer;
//# sourceMappingURL=customer.entity.js.map