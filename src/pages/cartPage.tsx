import { Button, Input } from "@headlessui/react";
import { ArchiveBoxIcon } from "@heroicons/react/24/solid";
import { Icon } from "../component/Icon";
import { MinusIcon, PlusIcon } from "@heroicons/react/16/solid";
import { Btn } from "../component/Btn";
import { OperationsCart } from "../hooks/Context";
import { Rate } from "../component/Rate";
import { Fade } from "react-awesome-reveal";
import { EmptyCart } from "./EmptyCart";

const CartPage = () => {
    /* context Cart */
    const { products, GetLength, increase, decrease, deleteProduct, deleteAllProducts, GetTotalPrice } = OperationsCart();

    return (
        <section style={{ minHeight: 'calc(100vh - 75px)' }} className="mt-5 mb-10">
            <div className="container">
                <div className="grid grid-cols-1  lg:grid-cols-3 gap-2.5">
                    <div className="lg:col-span-2 md:p-3">
                        <div className="head flex justify-between border-b border-b-gray-300 pb-2 mb-3">
                            <h2 className="text-2xl text-gray-700 font-medium">
                                Your <span className="text-orange-600">Cart</span>
                            </h2>
                            <h2 className="text-2xl text-gray-700 font-medium">
                                {GetLength} items
                            </h2>
                        </div>
                        <div className="flex flex-col gap-4">
                            {products.length > 0 ? (
                                <>
                                    {products.map((item, index) => (
                                        <div key={index}>
                                            <Fade duration={700} triggerOnce delay={index * 100}>
                                                <div
                                                    className="flex flex-col lg:flex-row items-center justify-between bg-white shadow-md rounded-xl p-4 border border-gray-200"
                                                >
                                                    {/* Product Info */}

                                                    <div className="flex items-center grow gap-4 w-full">
                                                        <img
                                                            src={item.product.imgSrc}
                                                            className="w-24 h-24 object-contain bg-gray-100 rounded-lg p-2"
                                                            alt={item.product.name}
                                                        />

                                                        <div className="flex  flex-col gap-1">
                                                            <h3 className="text-lg font-semibold text-gray-800">{item.product.name}</h3>
                                                            <div className="flex items-center gap-2">
                                                                <Rate rate={item.product.rating} />
                                                                <small className="text-gray-500">{item.product.rating}</small>
                                                            </div>

                                                            <Button
                                                                onClick={() => deleteProduct(item.product.id)}
                                                                className="text-red-500 cursor-pointer flex items-center gap-1 hover:underline"
                                                                aria-label="remove product"
                                                            >
                                                                <Icon icon={ArchiveBoxIcon} /> Remove
                                                            </Button>
                                                        </div>
                                                    </div>

                                                    {/* Right Side Controls */}
                                                    <div className="flex flex-col items-center mt-5 lg:mt-0 sm:items-end gap-3 sm:flex-row lg:flex-col sm:justify-between w-full">
                                                        {/* Price */}
                                                        <span className="text-xl font-semibold text-gray-600">{item.product.price}</span>

                                                        {/* Quantity Controls */}
                                                        <div className="flex items-center gap-2">
                                                            <Button
                                                                onClick={() => decrease(item.product.id)}
                                                                className="p-1 cursor-pointer rounded-md border border-gray-300"
                                                                aria-label="decrease count of product"
                                                            >
                                                                <Icon icon={MinusIcon} />
                                                            </Button>

                                                            <span className="px-3 py-0.5 border border-gray-300 rounded-md text-gray-600">
                                                                {item.amount}
                                                            </span>

                                                            <Button
                                                                onClick={() => increase(item.product.id)}
                                                                aria-label="increase count of product"
                                                                className="p-1 cursor-pointer rounded-md border border-gray-300"
                                                            >
                                                                <Icon icon={PlusIcon} />
                                                            </Button>
                                                        </div>

                                                        {/* Total */}
                                                        <span className="text-gray-800 font-medium text-lg">Total: ${item.price}</span>
                                                    </div>

                                                </div>
                                            </Fade>
                                        </div>
                                    ))}

                                    {/* Remove All Button */}
                                    <Btn
                                        children={"Remove all"}
                                        aria-label="remove all product"
                                        color="block bg-red-100 text-red-600 border border-red-300 py-1"
                                        func={() => deleteAllProducts()}
                                    />
                                </>
                            ) : (
                                <EmptyCart />
                            )}
                        </div>

                    </div>
                    <Fade duration={700} triggerOnce>
                        <div className="p-3 px-5 rounded-lg bg-gray-100 mt-5 md:mt-0">
                            <div className="head border-b border-b-gray-300 pb-2 mb-3">
                                <h2 className="text-2xl text-gray-700 font-medium">Order Summary</h2>
                            </div>
                            <div>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="address" className="text-gray-800 block mb-2 lowercase">Address</label>
                                        <Input name="address" id="address" autoComplete="off" aria-label="Enter your address" placeholder="Enter your Address" type="text" className='data-hover:shadow block w-full rounded-lg border outline-0 border-gray-400 bg-white px-3 py-2 text-sm/6 ' />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="Code" className="text-gray-800 block mb-2 lowercase">Promo Code</label>
                                        <Input name="Code" id="Code" autoComplete="off" aria-label="Enter your Code" placeholder="Enter Promo Code" type="text" className='data-hover:shadow block w-full rounded-lg border outline-0 border-gray-400 bg-white px-3 py-2 text-sm/6 ' />
                                    </div>
                                    <Btn children='Apply' aria-label="apply to buy" color="bg-orange-600 px-6 hover:bg-orange-700 text-white border border-orange-500 inline-flex" />
                                </form>
                            </div>
                            <div className="mt-5 border-t border-t-gray-300 pt-3">
                                <table className="w-full">
                                    <tbody>
                                        <tr>
                                            <td className="font-medium py-2 text-gray-600">Price</td>
                                            <td className="text-right font-medium py-2 text-gray-800">{GetTotalPrice}$</td>
                                        </tr>
                                        <tr>
                                            <td className="font-medium py-2 pb-5 text-gray-600">Tax(2%)</td>
                                            <td className="text-right font-medium py-2 pb-5 text-gray-800">{(GetTotalPrice * 0.02).toFixed(2)}$</td>
                                        </tr>
                                        <tr className="border-t border-t-gray-300">
                                            <td className="font-medium py-2 text-gray-800">Total</td>
                                            <td className="text-right font-medium py-2 text-gray-800">{GetTotalPrice + (GetTotalPrice * 0.02)}$</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <Btn children='Place Order' color="bg-orange-600 w-full px-6 mt-5 mb-2 hover:bg-orange-700 text-white border border-orange-500 block" />
                        </div>
                    </Fade>
                </div>
            </div>

        </section>
    )
}
export default CartPage;