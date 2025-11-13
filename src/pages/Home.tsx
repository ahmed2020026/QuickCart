import { useSelector } from "react-redux"
import { assets, FeatureData, jumbtron } from "../assets/SYSTEM/assets"
import { SliderComponent as Slider } from "../component/Slider"
import { Title } from "../component/Title"
import type { product } from "../assets/SYSTEM/productData"
import { Button, Input } from "@headlessui/react"
import { Cart } from "../component/Cart"
import { Link } from "react-router-dom"
import { Feature } from "../component/Feature"
import { Btn } from "../component/Btn"
export const Home = () => {
    const Products = useSelector((state: any) => state.product.list);
    const scrollTop = () => window.scrollTo({ "top": 0 });
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
                        <Link to={'/all-products'} className="rounded-md">
                            <Button tabIndex={-1}
                                aria-hidden="true"
                                type = 'button'
                                onClick={scrollTop}
                                className={`inline-flex items-center border font-medium border-gray-500 text-gray-500 gap-2 rounded-md px-5 text-base py-1.5 shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline transition-all cursor-pointer data-focus:outline-white`} >
                                see more
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
            <section className="min-h-screen">
                <div className="container">
                    <Title head="Featured Products" />
                    <div className="features grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
                        {FeatureData.map((item, index) => (
                            <div key={index}>
                                <Feature feature={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-3 bg-gray-100 rounded-md">
                        <div className="pt-10 lg:pt-0">
                            <img
                                src={assets.jbl_soundbox_image}
                                alt="jbl"
                                className="w-[200px] h-[200px] lg:w-72 lg:h-72 block mx-auto"
                                loading="lazy"
                                onLoad={(e) => e.currentTarget.classList.remove('blur-sm')}
                            />
                        </div>
                        <div className="text-center lg:my-0 p-3 flex flex-col items-center justify-center">
                            <h2 className="mt-10 text-2xl lg:text-4xl font-bold text-gray-800">Level Up Your Gaming Experience</h2>
                            <p className="my-3 text-gray-500">From immersive sound to precise controls—everything you need to win</p>
                            <Btn children="Buy Now" color="bg-orange-600 hover:bg-orange-700 text-white px-10 py-2" />
                        </div>
                        <div className="flex justify-end pt-10 lg:pt-0">
                            <img src={assets.md_controller_image} alt="md" className="lg:w-72 lg:h-72 block" />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="py-5">
                        <div className="text-center py-5">
                            <h2 className="text-xl lg:text-4xl md:text-2xl font-bold text-gray-800">Subscribe now & get 20% off</h2>
                            <p className="mb-5 text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <div className="md:w-xl lg:w-2xl mx-auto flex items-center">
                            <Input name="full_name" aria-label="Enter your email" placeholder="Enter your email" type="text" className='data-hover:shadow block w-full rounded-lg rounded-e-none border outline-0 border-gray-400 bg-white/5 px-3 py-2 text-sm/6 ' />
                            <Btn children='Subscribe' color="bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-s-none border border-orange-500" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}