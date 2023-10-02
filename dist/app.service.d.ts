import { ConfigType } from '@nestjs/config';
import config from './config';
export declare class AppService {
    private configService;
    private readonly apiKey;
    private readonly globalValue;
    private tasks;
    constructor(configService: ConfigType<typeof config>, apiKey: string, globalValue: string, tasks: TestTask[]);
    getHello(): string;
}
export interface TestTask {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}
