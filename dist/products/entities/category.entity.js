"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const openapi = require("@nestjs/swagger");
class Category {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, name: { required: true, type: () => String } };
    }
}
exports.Category = Category;
//# sourceMappingURL=category.entity.js.map