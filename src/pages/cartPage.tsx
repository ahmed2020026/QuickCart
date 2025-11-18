import { Button, Input } from "@headlessui/react";
import { ArchiveBoxIcon } from "@heroicons/react/24/solid";
import { Icon } from "../component/Icon";
import { MinusIcon, PlusIcon } from "@heroicons/react/16/solid";
import { Btn } from "../component/Btn";
import { OperationsCart } from "../hooks/Context";

const CartPage = () => {
    /* context Cart */
    const {products,GetLength,increase,decrease} = OperationsCart();

    return (
        <section style={{ minHeight: 'calc(100vh - 75px)' }} className="mt-5 mb-10">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5">
                    <div className="lg:col-span-2 md:p-3">
                        <div className="head flex justify-between border-b border-b-gray-300 pb-2 mb-3">
                            <h2 className="text-2xl text-gray-700 font-medium">
                                Your <span className="text-orange-600">Cart</span>
                            </h2>
                            <h2 className="text-2xl text-gray-700 font-medium">
                                {GetLength} items
                            </h2>
                        </div>
                        <div className="max-w-full overflow-x-auto">
                            <div className="min-w-[700px] flex justify-between pb-2">
                                <table className="w-full text-gray-700">
                                    <thead className="">
                                        <tr className="">
                                            <th className="text-left font-medium p-2 text-lg">Product Details</th>
                                            <th className="font-medium p-2 text-lg">Price</th>
                                            <th className="font-medium p-2 text-lg">Quality</th>
                                            <th className="font-medium p-2 text-lg">Total Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {products.map((product,index) => (
                                            <tr className="" key={index}>
                                                <td className=" p-2">
                                                    <div className="flex items-center gap-2">
                                                        <img src={product.product.imgSrc} width={90} height={'auto'} className="bg-gray-100 rounded-md p-2" alt={product.product.name} />
                                                        <div>
                                                            <h3 className="text-base text-gray-800 font-medium">{product.product.name}</h3>
                                                            <Button type="button" aria-label="remove product from cart" className={`items-center gap-2 rounded-md px-1 py-1 text-red text-sm shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline transition-all cursor-pointer data-focus:outline-white`}>
                                                                <Icon icon={ArchiveBoxIcon} className="text-red-500" />
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className=" p-2 text-center">{product.product.price}</td>
                                                <td className=" p-2">
                                                    <div className="flex items-center justify-center">
                                                        <Button type="button" aria-label="decrease quality of products" className={`items-center gap-2 rounded-md px-1 py-1 text-red text-sm shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline transition-all cursor-pointer data-focus:outline-white`} onClick = {() => decrease(product.product.id)}>
                                                            <Icon icon={MinusIcon} />
                                                        </Button>
                                                        <span className="border border-gray-300 text-gray-600 px-2">{product.amount}</span>
                                                        <Button type="button" aria-label="increase quality of products" className={`items-center gap-2 rounded-md px-1 py-1 text-red text-sm shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline transition-all cursor-pointer data-focus:outline-white`} onClick={() => increase(product.product.id)}>
                                                            <Icon icon={PlusIcon} />
                                                        </Button>
                                                    </div>
                                                </td>
                                                <td className=" p-2 text-center">${product.price}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
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
                                    <Input name="Code" id = "Code" autoComplete="off" aria-label="Enter your Code" placeholder="Enter Promo Code" type="text" className='data-hover:shadow block w-full rounded-lg border outline-0 border-gray-400 bg-white px-3 py-2 text-sm/6 ' />
                                </div>
                                <Btn children='Apply' color="bg-orange-600 px-6 hover:bg-orange-700 text-white border border-orange-500 inline-flex" />
                            </form>
                        </div>
                        <div className="mt-5 border-t border-t-gray-300 pt-3">
                            <table className="w-full">
                                <tbody>
                                    <tr>
                                        <td className="font-medium py-2 text-gray-600">Price</td>
                                        <td className="text-right font-medium py-2 text-gray-800">0$</td>
                                    </tr>
                                    <tr>
                                        <td className="font-medium py-2 pb-5 text-gray-600">Tax(2%)</td>
                                        <td className="text-right font-medium py-2 pb-5 text-gray-800">0$</td>
                                    </tr>
                                    <tr className="border-t border-t-gray-300">
                                        <td className="font-medium py-2 text-gray-800">Total</td>
                                        <td className="text-right font-medium py-2 text-gray-800">0$</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <Btn children='Place Order' color="bg-orange-600 w-full px-6 mt-5 mb-2 hover:bg-orange-700 text-white border border-orange-500 block" />
                    </div>
                </div>
            </div>

        </section>
    )
}
export default CartPage;