import { jumbtron } from "../assets/SYSTEM/assets"
import { SliderComponent as Slider } from "../component/Slider"

export const Home = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className="p-2 bg-gray-100 rounded-lg mt-5">
                        <Slider items={jumbtron} />
                    </div>
                </div>
            </section>
        </>
    )
}