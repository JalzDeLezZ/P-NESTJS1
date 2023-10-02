import { CustomersService } from '../services/customers.service';
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customer.dto';
export declare class CustomerController {
    private customersService;
    constructor(customersService: CustomersService);
    findAll(): import("../entities/customer.entity").Customer[];
    get(id: number): import("../entities/customer.entity").Customer;
    create(payload: CreateCustomerDto): {
        name: string;
        lastName: string;
        phone: string;
        id: number;
    };
    update(id: number, payload: UpdateCustomerDto): import("../entities/customer.entity").Customer;
    remove(id: number): boolean;
}
