import { Btn } from "../component/Btn";
import bag from "../assets/SYSTEM/bag.svg"
import { useNavigate } from "react-router-dom";

export const EmptyCart = () => {
    const nav = useNavigate();
    return (
        <div className="flex flex-col items-center justify-center h-[60vh] text-center gap-4">
            <img
                src={bag}
                alt="Empty cart"
                className="w-40 h-40 opacity-70"
            />
            <h2 className="text-2xl font-bold text-gray-700">Your cart is empty</h2>
            <p className="text-gray-500">Looks like you haven’t added anything to your cart yet.</p>
            <Btn
                children="Shop Now"
                color="bg-orange-400 hover:bg-orange-500 text-white px-6 py-1 rounded"
                func={() => nav("/all-products")} // بيروح للصفحة الرئيسية أو المنتجات
            />
        </div>
    );
};
