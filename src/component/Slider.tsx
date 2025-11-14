import Slider from "react-slick";
import { Btn } from "./Btn";

interface foot {
    text: string;
    detail: string;
}

interface slide {
    head: string;
    disc: string;
    image: string;
    foot: foot
}

interface SliderProps {
    items: slide[];
}

export const SliderComponent = ({ items }: SliderProps) => {
    let settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        accessibility: true,
        focusOnChange: false
    };
    return (
        <Slider {...settings}>
            {
                items.map((item, index) => {
                    return (
                        <div className="p-5 bg-gray-100 rounded-lg flex" key={index}>
                            <div className="parent grid grid-cols-1 md:grid-cols-3 md:min-h-72">
                                <div className="md:col-span-2 lg:pr-50 order-2 md:order-1">
                                    <p className="text-base text-orange-600 mt-10">{item.head}</p>
                                    <h2 className="max-w-lg md:text-[40px] md:leading-[48px] pr-2 text-2xl font-semibold text-gray-800">{item.disc}</h2>
                                    <div className="btns flex gap-2 mt-5">
                                        <Btn children={item.foot.text} aria-label = "Order product" color="bg-orange-600 hover:bg-orange-700 transition-all text-white font-medium" />
                                        <Btn children={item.foot.detail} aria-label = "Show Detail of product" color="font-medium bg-gray-200 transition-all hover:bg-gray-300" />
                                    </div>
                                </div>
                                <div className="md:col-span-1 text-center flex justify-between order-1 md:order-2 items-center h-[250px] md:h-auto">
                                    <img src={item.image} alt={item.head} loading="lazy" onLoad={(e) => e.currentTarget.classList.remove('blur-sm')} height={747} width={654} className="block m-auto md:w-72 w-48 md:h-60" />
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </Slider>
    )
}