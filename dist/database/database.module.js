"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const API_KEY = 'KEY11111111';
const API_KEY_PROD = 'PRODKEY1212121SA';
const DATE_TIME = new Date().toISOString();
let DatabaseModule = class DatabaseModule {
};
exports.DatabaseModule = DatabaseModule;
exports.DatabaseModule = DatabaseModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [
            {
                provide: 'API_KEY',
                useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY,
            },
            {
                provide: 'GLOBAL_VALUE',
                useValue: 'This is a global value' + DATE_TIME,
            },
        ],
        exports: ['API_KEY', 'GLOBAL_VALUE'],
    })
], DatabaseModule);
//# sourceMappingURL=database.module.js.map