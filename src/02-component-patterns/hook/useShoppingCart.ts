import { useState } from "react";
import { Product, ProductInCart } from "../interface/interfaces";


export const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<{[key: string]: ProductInCart}>({});

    const onProductCartChange = ({count, product} : {count: number, product: Product}) => {
        setShoppingCart( oldShoppingCart => {

            if (count===0) {
                const {[product.id]: toDelete, ...rest} = oldShoppingCart;
                console.log({toDelete});
                return rest
            }
            return {
                ...oldShoppingCart, 
                [product.id]: {...product, count}
            }
            
        })
       
    };
    return {
        shoppingCart,
        onProductCartChange
    }
}
