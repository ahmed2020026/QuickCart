import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { product } from "../assets/SYSTEM/productData";

interface itemType {
    amount: number,
    product: product,
    price:number
}

interface CartType {
    products: itemType[],
    setProduct?: React.Dispatch<React.SetStateAction<itemType[]>>,
    addToCart: (p: product) => void,
    GetLength:number
}

const Context = createContext<CartType | null>(null);

export const ContextData = ({ children }: { children: React.ReactNode }) => {
    const [products, setProduct] = useState<itemType[]>([]);

    /* check Data into session */
    useEffect(() => {
        const saved = sessionStorage.getItem("Products");
        if (saved) setProduct(JSON.parse(saved));
    }, []);

    /* add to cart */
    const addToCart = (newProduct: product) => {
        setProduct((prev) => {
            let amount:number = 1;
            const exist = prev.find(item => item.product.id === newProduct.id);
            
            if (exist) {
                amount = exist.amount;
                amount++;
                return prev.map(item =>
                    item.product.id === newProduct.id
                        ? { ...item, amount: amount, price: Math.round(parseFloat(newProduct.price.replace(/[^0-9.]/g, "")))*amount }
                        : item
                );
            }

            return [...prev, {
                product: newProduct,
                amount: amount,
                price: Math.round(parseFloat(newProduct.price.replace(/[^0-9.]/g, "")))
            }];
        })
    }

    /* store Data into session */
    useEffect(() => {
        sessionStorage.setItem('Products', JSON.stringify(products));
    }, [products]);

    /* get product number into cart */
    const GetLength = useMemo(() => {
        return products.reduce((sum, item) => sum + item.amount, 0);
    }, [products]);

    return <Context.Provider value={{ products, addToCart, GetLength }}>
        {children}
    </Context.Provider>
}

export const OperationsCart = () => {
    const cartData = useContext(Context);
    if (!cartData) throw Error('Element is null');
    return cartData;
};