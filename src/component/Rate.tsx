import { StarIcon } from "@heroicons/react/16/solid"

export const Rate = ({ rate }: { rate: number }) => {
    return (
        <div className="flex">
            {[1, 2, 3, 4, 5].map((i) => (
                <StarIcon
                    key={i}
                    style={{ width: "14px", height: "14px" }}
                    className={`${i <= rate ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                />
            ))}
        </div>
    )
}