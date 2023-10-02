export declare class CreateUserDto {
    readonly email: string;
    readonly password: string;
    readonly role: string;
}
declare const UpdateUserDto_base: import("@nestjs/common").Type<Partial<CreateUserDto>>;
export declare class UpdateUserDto extends UpdateUserDto_base {
}
export {};
