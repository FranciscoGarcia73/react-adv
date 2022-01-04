import { useProduct } from '../hook/useProduct';
import { createContext} from 'react';
import { ProductCardProps, ProductContentProps } from '../interface/interfaces';

import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContentProps);
const {Provider} = ProductContext;

export const ProductCard = ({children, product}: ProductCardProps) => {

  const {counter, increaseBy} = useProduct();

    return (

        <Provider value = {{
            counter,
            increaseBy,
            product
        }}>
            <div className={styles.productCard}>
            {children}
            </div>
        </ Provider>
    )
}

