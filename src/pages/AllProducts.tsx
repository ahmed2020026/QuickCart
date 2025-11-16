import { useSelector } from "react-redux";
import { Cart } from "../component/Cart";
import type { product } from "../assets/SYSTEM/productData"

const AllProducts = () => {
    const Products = useSelector((state: any) => state.product.list)

    return (
        <section className="mt-5 mb-10">
            <div className="container">
                <div className="carts grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-7 pb-5">
                    {
                        Products.map((product: product, index: number) => (
                            <div key={index}>
                                <Cart product={product} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};
export default AllProducts;