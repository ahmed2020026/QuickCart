import { useEffect, useState } from "react";

export const useGetHeight = (
    ele: React.RefObject<HTMLElement | null>,
    active: boolean
) => {
    const [height, setHeight] = useState<number>(0);

    useEffect(() => {
        if (active && ele.current) {
            // إعادة الحساب بعد render فعلي
            const fullHeight = ele.current.scrollHeight;
            setHeight(fullHeight);
        }

        // لو اتقفل خليه صفر
        if (!active) {
            setHeight(0);
        }
    }, [active, ele]);

    return height;
};
