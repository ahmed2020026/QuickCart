import type { product } from "../assets/SYSTEM/productData"
import { Rate } from "./Rate"
import { Link } from "react-router-dom"

export const Cart = ({ product }: { product: product }) => {
    const scrollTop = () => window.scrollTo({"top":0});
    return (
        <div className="relative group bg-transparent">
            <div className="cart-image mb-2 bg-gray-200 flex justify-center items-center rounded-lg overflow-hidden">
                <img
                    src={product.imgSrc}
                    alt={product.name}
                    loading="lazy"
                    className="block w-52 h-auto max-w-full transform transition-transform duration-300 group-hover:scale-105 blur-sm"
                    onLoad={(e) => e.currentTarget.classList.remove('blur-sm')}
                />
            </div>

            <div className="cart-info mb-2">
                <h2 className="text-gray-800 font-medium text-nowrap overflow-hidden text-ellipsis">{product.name}</h2>
                <p className=" whitespace-nowrap overflow-hidden text-ellipsis text-gray-500 text-sm">{product.description}</p>
                <div className="ratting flex items-center gap-2.5">
                    <span className="text-sm text-gray-500">{product.rating}</span>
                    <span>{<Rate rate={product.rating} />}</span>
                </div>
            </div>
            <div className="cart-foot flex justify-between items-center">
                <span className="font-medium text-gray-800">{product.price}</span>
            </div>
            <Link to={`/all-products/${product.id}`} onClick={scrollTop} aria-label='path Icon' className="absolute block top-0 left-0 w-full h-full"></Link>
        </div>
    )
}