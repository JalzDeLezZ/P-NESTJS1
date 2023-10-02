import { UsersService } from '../services/users.service';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    findAll(): import("../entities/user.entity").User[];
    get(id: number): import("../entities/user.entity").User;
    getOrders(id: number): import("../entities/order.entity").Order;
    create(payload: CreateUserDto): {
        email: string;
        password: string;
        role: string;
        id: number;
    };
    update(id: number, payload: UpdateUserDto): import("../entities/user.entity").User;
    remove(id: number): boolean;
}
