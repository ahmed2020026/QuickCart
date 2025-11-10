export const Title = ({ head }: { head:string}) => {
    return (
        <div className="title mt-10 mb-5">
            <h2 className="text-2xl font-medium text-left w-full text-gray-600">{head}</h2>
        </div>
    )
}