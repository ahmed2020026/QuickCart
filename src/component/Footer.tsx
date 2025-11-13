import { Link } from "react-router-dom"
import { HEADER_IMAGE } from "../assets/SYSTEM/assets"

export const Footer = () => {
    return (
        <div>
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10">
                    <div>
                        <img src={HEADER_IMAGE.logo} width={129} height={34} alt="footer_logo" />
                        <p className="mt-4 text-sm text-gray-700">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-10">
                        <div>
                            <h2 className="font-medium text-gray-900 mb-5">Company</h2>
                            <ul className="text-sm space-y-2">
                                <li className="text-gray-700">
                                    <Link to={'/'} className="hover:underline transition">Home</Link>
                                </li>
                                <li className="text-gray-700">
                                    <Link to={'/about'} className="hover:underline transition">About US</Link>
                                </li>
                                <li className="text-gray-700">
                                    <Link to={'/contact'} className="hover:underline transition">Contact US</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="font-medium text-gray-900 mb-5">Get in touch</h2>
                            <ul className="text-sm space-y-2">
                                <li className="text-gray-700">+1-234-567-890</li>
                                <li className="text-gray-700">contact@greatstack.dev</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-300 mt-10">
                <p className="py-4 text-center text-xs md:text-sm text-gray-700">Copyright 2025 © GreatStack.dev All Right Reserved.</p>
            </div>
        </div>
    )
}