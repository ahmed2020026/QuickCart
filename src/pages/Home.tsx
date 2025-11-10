import { jumbtron } from "../assets/SYSTEM/assets"
import { SliderComponent as Slider } from "../component/Slider"

export const Home = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className="p-2 mt-5">
                        <Slider items={jumbtron} />
                    </div>
                </div>
            </section>
            <section>
                <div className="container"></div>
            </section>
        </>
    )
}