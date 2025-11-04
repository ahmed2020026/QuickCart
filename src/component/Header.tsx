import { Link } from "react-router-dom";
import { assets, RouterLinks } from "../assets/SYSTEM/assets";
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
                    <img src={assets.logo} alt="logo" />
                </Link>

                {/* routes in large screen */}
                <nav className="hidden md:block pr-5">
                    {RouterLinks.map((ele, index) => (
                        <Btn key={index} color="text-gray-800 hover:text-black transition-all">
                            <Link to={ele.RouterPath} aria-label={ele.RouterText}>
                                {ele.RouterText}
                            </Link>
                        </Btn>
                    ))}
                </nav>

                {/* routes in small screen */}
                <nav className={`md:hidden ${open ? `opacity-100` : "opacity-0"} duration-300 border border-gray-200 border-t-0 overflow-hidden shadow-md p-2 rounded absolute top-full left-[50%] -translate-x-3/6 w-[95%]`} ref={menuRef} style={{
                    height: open ? `${height}px` : "0px",
                }}>
                    {RouterLinks.map((ele, index) => (
                        <Btn key={index} color="text-gray-800 hover:text-black transition-all w-full">
                            <Link to={ele.RouterPath} className="block w-full text-left" aria-label={ele.RouterText}>
                                {ele.RouterText}
                            </Link>
                        </Btn>
                    ))}
                </nav>

                <div className="flex items-center gap-2">
                    <Btn ref={BtnRef} color="md:hidden" func={() => setOpen(!open)}>
                        <img src={assets.menu_icon} alt="menu-icon" />
                    </Btn>
                    <Btn color="">
                        <img src={assets.search_icon} alt="search-icon" />
                    </Btn>
                    <Btn color="">
                        <img src={assets.user_icon} alt="user-icon" />
                    </Btn>
                </div>
            </div>
        </div>
    );
};
