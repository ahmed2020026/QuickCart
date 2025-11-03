import {useEffect, useState } from "react"

export const useGetHeight = (ele: React.RefObject<HTMLElement | null>) => {
    const [height, setHeight] = useState<number>(0)
    useEffect(() => {
        if (ele.current) {
            setHeight(ele.current.scrollHeight);
        }
    }, [ele])
    return height
}
