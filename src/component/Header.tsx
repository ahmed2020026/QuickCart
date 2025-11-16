import { Link, useNavigate } from "react-router-dom";
import { HEADER_IMAGE, RouterLinks } from "../assets/SYSTEM/assets";
import { Btn } from "./Btn";
import { useState, useRef } from "react";
import { useOutClick } from "../hooks/useOutClick";
import { useGetHeight } from "../hooks/useGetHeight";
import { RouteLink } from "./RouteLink";

export const Header = () => {
    const [open, setOpen] = useState(false);
    const BtnRef = useRef<HTMLButtonElement>(null);
    const menuRef = useRef<HTMLElement>(null);
    const nav = useNavigate()

    const height: number = useGetHeight(menuRef);

    const GoTo = (url:string) => {
        nav(url)
    }

    useOutClick({
        ref: BtnRef,
        menu: menuRef,
        func: () => setOpen(false),
    });

    return (
        <div className="container relative">
            <div className="flex items-center justify-between py-2">
                <Link to="/" aria-label="Logo">
                    <img src={HEADER_IMAGE.logo} alt="logo" />
                </Link>

                {/* routes in large screen */}
                <nav className="hidden md:block pr-5 relative">
                    {RouterLinks.map((ele , index) => (
                        <RouteLink key={index} text={ele.RouterText} path={ele.RouterPath} color="text-gray-700 hover:text-black transition-all" />
                    ))}
                </nav>

                {/* routes in small screen */}
                <nav className={`md:hidden ${open ? `opacity-100` : "opacity-0"} duration-300 border border-gray-200 bg-white border-t-0 overflow-hidden shadow-md p-2 rounded absolute top-full left-[50%] -translate-x-3/6 w-[95%]`} ref={menuRef} style={{
                    height: open ? `${height}px` : "0px",
                    zIndex: -2
                }}>
                    <div>
                        <div className="flex justify-between">
                            <Btn children={<img src={HEADER_IMAGE.cart} alt="cart-icon" />} aria-label='cart icon to collection of product' color="inline-flex" func={() => GoTo('/cart')} />
                            <Btn children={<img src={HEADER_IMAGE.user} alt="user-icon" />} aria-label='sign in or register' color="inline-flex" />
                        </div>
                        {RouterLinks.map((ele, index) => (
                            <Link to={ele.RouterPath} key={index} className="block w-full text-left" aria-label={ele.RouterText}>
                                <Btn children={ele.RouterText} color="text-gray-800 hover:text-black transition-all w-full inline-flex" />
                            </Link>
                        ))}
                    </div>
                </nav>

                <div className="flex items-center gap-2">
                    <Btn children={<img src={HEADER_IMAGE.menu} alt="menu-icon" />} aria-label="menu icon to open and close menu" color="md:hidden inline-flex" func={() => setOpen(!open)} ref={BtnRef} />
                    <Btn children={<img src={HEADER_IMAGE.search} alt="search-icon" />} aria-label='search icon to search about product' color="inline-flex" />
                    <Btn children={<img src={HEADER_IMAGE.cart} alt="cart-icon" />} aria-label='cart icon to access cart product' color="hidden md:inline-flex" func = {() => GoTo('/cart')} />
                    <Btn children={<img src={HEADER_IMAGE.user} alt="user-icon" />} aria-label='sign in or register' color="hidden md:inline-flex" />
                </div>
            </div>
        </div>
    );
};
