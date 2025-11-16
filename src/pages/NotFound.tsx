import { ArrowLeftCircleIcon } from "@heroicons/react/16/solid"
import { Link } from "react-router-dom"


const NotFound = () => {
    return (
        <section>
            <div className="container">
                <div style={{ height: 'calc(100vh - 75px)' }} className="flex flex-col items-center justify-center text-gray-800">
                    <h1 className="text-9xl font-bold text-gray-300">404</h1>
                    <h2 className="text-2xl md:text-3xl font-semibold mt-4">Page Not Found</h2>
                    <p className="text-gray-500 mt-2 mb-8 text-center px-4">
                        The page you’re looking for doesn’t exist or may have been moved.
                    </p>
                    <Link
                        to="/"
                        className="flex bg-gray-500 items-center gap-2 text-white px-1 pr-5 py-1 rounded-4xl"
                        >
                        <ArrowLeftCircleIcon style={{width:'35px'}} />
                            Back to Home
                    </Link>
                </div>
            </div>
        </section>
    )
}
export default NotFound;