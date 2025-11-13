
export const NotFound = () => {
    return (
        <section>
            <div className="container">
                <div style={{ height: 'calc(100vh - 100px)' }} className="flex flex-col items-center justify-center text-gray-800">
                    <h1 className="text-9xl font-bold text-gray-300">404</h1>
                    <h2 className="text-2xl md:text-3xl font-semibold mt-4">Page Not Found</h2>
                    <p className="text-gray-500 mt-2 mb-8 text-center px-4">
                        The page you’re looking for doesn’t exist or may have been moved.
                    </p>
                    {/* <Link
                to="/"
                className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition-all duration-200"
            >
                <ArrowLeft size={18} />
                Back to Home
            </Link> */}
                </div>
            </div>
        </section>
    )
}