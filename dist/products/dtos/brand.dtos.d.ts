export declare class CreateBrandDto {
    readonly name: string;
    readonly image: string;
}
declare const UpdateBrandDto_base: import("@nestjs/common").Type<Partial<CreateBrandDto>>;
export declare class UpdateBrandDto extends UpdateBrandDto_base {
}
export {};
