type IconProps = {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
    className?: string
}

export const Icon = ({ icon: IconComponent, className }: IconProps) => {
    return <IconComponent className={`w-5 h-5 ${className}`} />
}