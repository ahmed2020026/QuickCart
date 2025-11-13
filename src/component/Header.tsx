import { Link } from "react-router-dom";
import { HEADER_IMAGE, RouterLinks } from "../assets/SYSTEM/assets";
import { Btn } from "./Btn";
import { useState, useRef } from "react";
import { useOutClick } from "../hooks/useOutClick";
import { useGetHeight } from "../hooks/useGetHeight";

export const Header = () => {
    const [open, setOpen] = useState(false);
    const BtnRef = useRef<HTMLButtonElement>(null);
    const menuRef = useRef<HTMLElement>(null);

    const height: number = useGetHeight(menuRef);

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
                    {RouterLinks.map((ele, index) => (
                        <Link to={ele.RouterPath} key={index}>
                            <Btn children={ele.RouterText} color="text-gray-600 hover:text-black transition-all" />
                        </Link>
                    ))}
                </nav>

                {/* routes in small screen */}
                <nav className={`md:hidden ${open ? `opacity-100` : "opacity-0"} duration-300 border border-gray-200 bg-white border-t-0 overflow-hidden shadow-md p-2 rounded absolute top-full left-[50%] -translate-x-3/6 w-[95%]`} ref={menuRef} style={{
                    height: open ? `${height}px` : "0px",
                    zIndex: -2
                }}>
                    {RouterLinks.map((ele, index) => (
                        <Link to={ele.RouterPath} key={index} className="block w-full text-left" aria-label={ele.RouterText}>
                            <Btn children={ele.RouterText} color="text-gray-800 hover:text-black transition-all w-full" />
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-2">
                    <Btn children={<img src={HEADER_IMAGE.menu} />} aria-lable="menu icon to open and close menu" color="md:hidden" func={() => setOpen(!open)} ref={BtnRef} />
                    <Btn children={<img src={HEADER_IMAGE.search} alt="search-icon" />} aria-lable = 'search icon to search about product' color="" />
                    <Btn children = {<img src={HEADER_IMAGE.user} alt="user-icon" />} aria-lable = 'sign in or register' color=""/>
                </div>
            </div>
        </div>
    );
};
