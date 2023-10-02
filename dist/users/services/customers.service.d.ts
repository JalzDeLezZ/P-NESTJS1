import { Customer } from '../entities/customer.entity';
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customer.dto';
export declare class CustomersService {
    private counterId;
    private customers;
    findAll(): Customer[];
    findOne(id: number): Customer;
    create(data: CreateCustomerDto): {
        name: string;
        lastName: string;
        phone: string;
        id: number;
    };
    update(id: number, changes: UpdateCustomerDto): Customer;
    remove(id: number): boolean;
}
