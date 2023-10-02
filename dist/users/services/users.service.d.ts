import { ConfigService } from '@nestjs/config';
import { User } from '../entities/user.entity';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';
import { ProductsService } from '../../products/services/products.service';
import { Order } from '../entities/order.entity';
export declare class UsersService {
    private productsService;
    private configService;
    constructor(productsService: ProductsService, configService: ConfigService);
    private counterId;
    private users;
    findAll(): User[];
    findOne(id: number): User;
    create(data: CreateUserDto): {
        email: string;
        password: string;
        role: string;
        id: number;
    };
    update(id: number, changes: UpdateUserDto): User;
    remove(id: number): boolean;
    getOrderByUser(id: number): Order;
}
