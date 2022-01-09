import { ReactElement } from "react";

export interface ProductCardProps {
    product: Product;
    children?: ReactElement | ReactElement[];
}


 export interface Product {
    id: string,
    title: string,
    img?: string
}

 export interface ProductContentProps {
    counter: number,
    increaseBy:(value: number) => void,
    product: Product
}

export interface onChangeArgs {
    product: Product,
    count: number,
}

export interface ProductInCart extends Product {
    count: number,
}