import { useProduct } from '../hook/useProduct';
import { createContext, ReactElement} from 'react';
import { onChangeArgs, Product, ProductContentProps } from '../interface/interfaces';

import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContentProps);
const {Provider} = ProductContext;

export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: React.CSSProperties;
    onChange?: (args: onChangeArgs)=> void;
    value?: number;
}

export const ProductCard = ({children, product, className, style, onChange, value}: Props) => {

  const {counter, increaseBy} = useProduct({onChange, product, value});

    return (

        <Provider value = {{
            counter,
            increaseBy,
            product
        }}>
            <div className={`${ styles.productCard } ${ className }`}
            style={style}>
            {children}
            </div>
        </ Provider>
    )
}

