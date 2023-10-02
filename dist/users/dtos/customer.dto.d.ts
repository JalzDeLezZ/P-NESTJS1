export declare class CreateCustomerDto {
    readonly name: string;
    readonly lastName: string;
    readonly phone: string;
}
declare const UpdateCustomerDto_base: import("@nestjs/common").Type<Partial<CreateCustomerDto>>;
export declare class UpdateCustomerDto extends UpdateCustomerDto_base {
}
export {};
