import { Link } from "react-router-dom"

export const RouteLink = ({ path, text, color = '',...other }: { path: string, text: string, color?: string }) => {
    return (
        <Link to={path} {...other} className={`inline-flex items-center gap-2 rounded-md ${color} px-3 text-base py-1.5 shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline transition-all cursor-pointer data-focus:outline-white`}>
            {text}
        </Link>
    )
}