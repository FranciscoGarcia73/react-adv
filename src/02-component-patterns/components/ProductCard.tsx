import { useProduct } from '../hook/useProduct';
import { createContext} from 'react';
import { InitialValues, onChangeArgs, Product, ProductContentProps, ProductCardsHandlers } from '../interface/interfaces';

import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContentProps);
const {Provider} = ProductContext;

export interface Props {
    product: Product;
    // children?: ReactElement | ReactElement[];
    children: (args: ProductCardsHandlers) => JSX.Element;
    className?: string;
    style?: React.CSSProperties;
    onChange?: (args: onChangeArgs)=> void;
    value?: number;
    initialValues?: InitialValues;
}

export const ProductCard = ({children, product, className, style, onChange, value, initialValues}: Props) => {

  const {counter, increaseBy, maxCount, isMaxCountReached, reset} = useProduct({onChange, product, value, initialValues});
 
    return (

        <Provider value = {{
            counter,
            product, 
            maxCount,
            increaseBy
        }}>
            <div className={`${ styles.productCard } ${ className }`}
            style={style}>
            { children ({
                count: counter,
                isMaxCountReached,
                maxCount: initialValues?.maxCount,
                product,
                increaseBy,
                reset

            }) }
            </div>
        </ Provider>
    )
}

