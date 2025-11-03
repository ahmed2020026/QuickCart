type IconProps = {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
    className?: string
}

export const Icon = ({ icon: IconComponent, className }: IconProps) => {
    return <IconComponent className={`w-6 h-6 ${className}`} />
}