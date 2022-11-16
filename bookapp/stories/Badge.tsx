import { classNames } from '../utils/classNames'

interface BadgeProps {
    title: string
    success?: boolean
    warning?: boolean
    danger?: boolean
}

export default function Badge({ title, success, danger, warning  }: BadgeProps) {
    const rootClassName = classNames( 
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize',
        success && 'bg-green-100 text-green-800',
        danger && 'bg-red-100 text-red-800',
        warning && 'bg-orange-400 text-yellow-800'
    )

    return <span className={rootClassName}>{title}</span>
    
}