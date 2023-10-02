"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("./config");
let AppService = class AppService {
    constructor(configService, apiKey, globalValue, tasks) {
        this.configService = configService;
        this.apiKey = apiKey;
        this.globalValue = globalValue;
        this.tasks = tasks;
    }
    getHello() {
        const env_db = this.configService.database.name;
        const env_key = this.configService.apiKey;
        const inject_keys = this.apiKey;
        const keys = { env_key, inject_keys };
        const message = `Hello World! ${this.globalValue} :: Database: ${env_db}`;
        const tasks = this.tasks;
        return JSON.stringify({ keys, message, tasks });
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(config_1.default.KEY)),
    __param(1, (0, common_1.Inject)('API_KEY')),
    __param(2, (0, common_1.Inject)('GLOBAL_VALUE')),
    __param(3, (0, common_1.Inject)('TASKS')),
    __metadata("design:paramtypes", [void 0, String, String, Array])
], AppService);
//# sourceMappingURL=app.service.js.map