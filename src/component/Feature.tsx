import { Btn } from "./Btn"

interface FeatureType {
    header: string,
    disc: string,
    image: string
}

export const Feature = ({ feature }: { feature:FeatureType }) => {
    return (
        <div className="relative child">
            <img
                src={feature.image}
                alt={feature.header}
                loading="lazy"
                onLoad={(e) => e.currentTarget.classList.remove('blur-sm')}
                width={'100%'}
                height={'100%'}
            />
            <div className="info duration-300 absolute w-full bottom-0 left-0 p-3 text-white">
                <h3 className="font-bold text-2xl">{feature.header}</h3>
                <p className="text-base my-3">{feature.disc}</p>
                <Btn children='Buy Now' color="bg-orange-500" />
            </div>
        </div>
    )
}