import { Product } from "./Product";

export class CartDTO {
    Product: Product | undefined;
    UserId: string = '';
}