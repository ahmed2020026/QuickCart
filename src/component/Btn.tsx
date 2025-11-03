import { Button } from "@headlessui/react";
import React from "react";

type BtnProps = {
    color?: string;
    children: React.ReactNode;
    func?: () => void;
};

export const Btn = React.forwardRef<HTMLButtonElement, BtnProps>(({ color = "bg-blue-700 hover:bg-blue-600 text-white", children, func = () => { }, ...rest }, ref) => {
    return (
        <Button ref={ref} {...rest} onClick={func} className={`inline-flex items-center gap-2 rounded-md ${color} px-3 text-base py-1.5 font-[500] shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline transition-all cursor-pointer data-focus:outline-white`}>
            {children}
        </Button>
    );
});
