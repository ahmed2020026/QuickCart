import { useSelector } from "react-redux"
import { jumbtron } from "../assets/SYSTEM/assets"
import { SliderComponent as Slider } from "../component/Slider"
import { Title } from "../component/title"
import type { product } from "../assets/SYSTEM/productData"
import { Button } from "@headlessui/react"
import { Cart } from "../component/Cart"
import { Link } from "react-router-dom"

export const Home = () => {
    const Products = useSelector((state: any) => state.product.list)
    console.log(Products)
    return (
        <>
            <section>
                <div className="container">
                    <div className="mt-5">
                        <Slider items={jumbtron} />
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <Title head="Popular products" />
                    <div className="carts grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-7 pb-5">
                        {
                            Products.slice(0, 10).map((product: product, index: number) => (
                                <div key={index}>
                                    <Cart product={product} />
                                </div>
                            ))
                        }
                    </div>
                    <div className="flex items-center justify-center py-5">
                        <Button className={`inline-flex items-center border font-medium border-gray-500 text-gray-500 gap-2 rounded-md px-5 text-base py-1.5 shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline transition-all cursor-pointer data-focus:outline-white`} >
                            <Link to={'/all-products'}>see more</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}