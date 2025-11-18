import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { product } from "../assets/SYSTEM/productData";

interface itemType {
    amount: number,
    product: product,
    price: number
}

interface CartType {
    products: itemType[],
    setProduct?: React.Dispatch<React.SetStateAction<itemType[]>>,
    addToCart: (p: product) => void,
    increase: (id: number) => void,
    decrease: (id: number) => void,
    deleteProduct: (id:number) => void,
    deleteAllProducts:() => void,
    GetTotalPrice: number,
    GetLength: number,
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
            let amount: number = 1;
            const exist = prev.find(item => item.product.id === newProduct.id);

            if (exist) {
                amount = exist.amount;
                amount++;
                return prev.map(item =>
                    item.product.id === newProduct.id
                        ? { ...item, amount: amount, price: Math.round(parseFloat(newProduct.price.replace(/[^0-9.]/g, ""))) * amount }
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

    /* increase amount of product */
    const increase = (id: number) => {
        products.map((product) => {
            if (product.product.id == id) {
                //console.log(product)
                setProduct(prev =>
                    prev.map(item =>
                        item.product.id === id
                            ? {
                                ...item,
                                amount: item.amount + 1,
                                price: Math.round(parseFloat(item.product.price.replace(/[^0-9.]/g, "")) * (item.amount + 1))
                            }
                            : item
                    )
                );
            }
        })
    }

    /* decrease amount of product */
    const decrease = (id: number) => {
        products.map((product) => {
            if (product.product.id == id) {
                let amount = product.amount - 1;
                if(amount != 0){
                    setProduct(prev =>
                        prev.map(item =>
                            item.product.id === id
                                ? {
                                    ...item,
                                    amount: amount,
                                    price: Math.round(parseFloat(item.product.price.replace(/[^0-9.]/g, "")) * (amount))
                                }
                                : item
                        )
                    );
                }else{
                    setProduct(prev => {
                        return prev.filter(item => item.product.id !== id)
                    })
                }
            }
        })
    }

    /* delete product */
    const deleteProduct = (id:number) => {
        setProduct((prev) => {
            return prev.filter(item => item.product.id !== id)
        })
    }

    /* delete all Products */
    const deleteAllProducts = () => {
        setProduct([]);
    }

    /* store Data into session */
    useEffect(() => {
        sessionStorage.setItem('Products', JSON.stringify(products));
    }, [products]);

    /* get product number into cart */
    const GetLength = useMemo(() => {
        return products.reduce((sum, item) => sum + item.amount, 0);
    }, [products]);

    /* Get total price */
    const GetTotalPrice = useMemo(() => {
        return products.reduce((sum, item) => sum + item.price, 0);
    },[products])

    return <Context.Provider value={{ products, addToCart, GetLength, increase, decrease , deleteProduct , deleteAllProducts ,GetTotalPrice}}>
        {children}
    </Context.Provider>
}

export const OperationsCart = () => {
    const cartData = useContext(Context);
    if (!cartData) throw Error('Element is null');
    return cartData;
};