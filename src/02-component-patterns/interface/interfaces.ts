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
    maxCount?: number;
    product: Product
    increaseBy:(value: number) => void,
}

export interface onChangeArgs {
    product: Product,
    count: number,
}

export interface ProductInCart extends Product {
    count: number,
}

export interface InitialValues {
    count?: number,
    maxCount?: number

}

export interface ProductCardsHandlers {
    count: number;
    isMaxCountReached: boolean;
    maxCount?: number;
    product: Product;

    increaseBy : (value: number) => void;
    reset: () => void;


}

