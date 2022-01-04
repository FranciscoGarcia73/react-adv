import { ProductCard as ProductCardHOC } from "./ProductCard";
import { ProductTitle } from './ProductTitle';
import { ProductImage } from './ProductImage';
import { ProductBotton } from "./ProductBotton";



export { ProductBotton } from "./ProductBotton";
export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";

export const ProductCard = Object.assign (ProductCardHOC,{
   Title: ProductTitle,
   Image: ProductImage,
   Botton: ProductBotton}
   );