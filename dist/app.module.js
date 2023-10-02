"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const config_1 = require("@nestjs/config");
const common_1 = require("@nestjs/common");
const Joi = require("joi");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_module_1 = require("./users/users.module");
const products_module_1 = require("./products/products.module");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
const database_module_1 = require("./database/database.module");
const enviroments_1 = require("./enviroments");
const config_2 = require("./config");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: enviroments_1.enviroments[process.env.NODE_ENV] || '.env',
                isGlobal: true,
                load: [config_2.default],
                validationSchema: Joi.object({
                    API_KEY: Joi.string().required(),
                    DATABASE_NAME: Joi.string().required(),
                    DATABASE_PORT: Joi.number().required(),
                    PORT: Joi.number().required(),
                }),
            }),
            axios_1.HttpModule,
            users_module_1.UsersModule,
            products_module_1.ProductsModule,
            database_module_1.DatabaseModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            {
                provide: 'TASKS',
                useFactory: async (http) => {
                    const request = http.get('https://jsonplaceholder.typicode.com/todos');
                    const response = await (0, rxjs_1.lastValueFrom)(request);
                    return response.data;
                },
                inject: [axios_1.HttpService],
            },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map