import { PropsWithChildren } from 'react'

interface TooltipProps {
    tip: string
}

export default function Tooltip(props: PropsWithChildren<TooltipProps>) {
    return (
        <div className="relative group">
            {props.children}
            <div
                className={[
                    'hidden group-hover:block',
                    'bg-gray-800 text-gray-200 text-sm',
                    'rounded-md p-1 whitespace-nowrap',
                    'absolute bottom-[100%] z-50',
                    'before:content-[""]',
                    'before:absolute',
                    'before:border-[10px]',
                    'before:border-transparent',
                    'before:border-t-gray-800',
                    'before:left-1/3',
                    'before:top-full',
                ].join(' ')}
            >
                {props.tip}
            </div>
        </div>
    )
}
