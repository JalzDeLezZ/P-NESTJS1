"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Brand = void 0;
const openapi = require("@nestjs/swagger");
class Brand {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, image: { required: true, type: () => String } };
    }
}
exports.Brand = Brand;
//# sourceMappingURL=brand.entity.js.map