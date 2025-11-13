import { StarIcon } from "@heroicons/react/16/solid"

export const Rate = ({ rate , w='14px' , h='14px' }: { rate: number , w?:string , h?:string }) => {
    return (
        <div className="flex">
            {[1, 2, 3, 4, 5].map((i) => (
                <StarIcon
                    key={i}
                    style={{ width: w, height: h }}
                    className={`${i <= rate ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                />
            ))}
        </div>
    )
}