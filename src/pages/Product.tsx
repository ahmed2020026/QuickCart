import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { Rate } from "../component/Rate";
import { Btn } from "../component/Btn";

const Product = () => {
    const { id } = useParams<{ id: string }>();
    const Products = useSelector((state: any) => state.product.list.find((pID: any) => pID.id == Number(id)))

    return (
        <section className="mt-2 mb-10">
            <div className="container">
                <div className="grid md:grid-cols-3 gap-5 md:p-10">
                    <div className="flex justify-center">
                        <div className="image">
                            <div className="py-2">
                                <img src={Products.imgSrc} alt={Products.name} width={'100%'} height={'100%'} className="bg-gray-100 inline-block rounded-lg w-full" />
                            </div>
                            <div>
                                <img src={Products.imgSrc} alt={Products.name} className="w-[100px] h-[100px] bg-gray-100 rounded-lg" />
                            </div>
                        </div>
                    </div>
                    <div className="details md:p-2 md:col-span-2">
                        <h2 className="text-2xl md:text-3xl font-medium text-gray-700 mb-4">{Products.name}</h2>
                        <div className="ratting flex items-center gap-2.5">
                            <span>{<Rate rate={Products.rating} w={'20px'} h={'20px'} />}</span>
                            <span className="text-sm text-gray-500">({Products.rating})</span>
                        </div>
                        <p className="text-gray-600 mt-3">
                            {Products.description}
                        </p>
                        <p className="text-2xl md:text-3xl font-medium mt-6 text-gray-700">
                            {Products.price}
                        </p>
                        <div className="btns mt-5 grid grid-cols-2 gap-5 md:gap-10">
                            <Btn children = 'Add to Cart' color='bg-gray-200 text-gray-800 md:py-2 inline-flex'/>
                            <Btn children = 'Buy Now' color='bg-orange-600 hover:bg-orange-700 text-white md:py-2 inline-flex'/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product;