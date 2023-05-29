import { PropsWithChildren, useRef } from 'react'

interface CarouselProps {
    width?: number
    height?: number
}

export default function Carousel(props: PropsWithChildren<CarouselProps>) {
    const parentRef = useRef<HTMLDivElement>(null)
    let children = props.children as JSX.Element[]

    if (!children.length) {
        children = []
        children.push(props.children as JSX.Element)
    }

    const moveScroll = (offset: number) => {
        const length = children.length
        const width = parentRef.current?.clientWidth || 0
        const scrollLeft = parentRef.current?.scrollLeft || 0

        console.log(scrollLeft, width, length)

        const disturbances = width/10
        switch (offset) {
            case -1:
                if (scrollLeft + disturbances < width) {
                    console.log('go to end')
                    parentRef.current?.scrollTo({
                        left: width * (length - 1),
                        behavior: 'smooth',
                    })
                    return
                }
                break
            case 1:
                if (scrollLeft + disturbances >= width * (length - 1)) {
                    console.log('go to start')
                    parentRef.current?.scrollTo({
                        left: 0,
                        behavior: 'smooth',
                    })
                    return
                }
                break
            default:
                break
        }

        parentRef.current?.scrollBy({
            left: offset * width,
            behavior: 'smooth',
        })
    }

    const narrowCss = [
        'w-[20px]',
        'border-solid border-gray-300',
        'border-t-4 border-l-4',
    ]

    return (
        <div className="h-full w-full relative">
            <div
                ref={parentRef}
                id="Carousel"
                className={[
                    'flex overflow-hidden scroll-smooth snap-x',
                    'relative',
                ].join(' ')}
            >
                {children.map((child, idx) => (
                    <div className="min-w-full" key={idx}>
                        {child}
                    </div>
                ))}
            </div>
            <div className="flex justify-between absolute top-1/2 h-[20px] w-full">
                <div
                    className={narrowCss.join(' ') + ' ml-5 -rotate-45'}
                    onClick={() => moveScroll(-1)}
                />

                <div
                    className={narrowCss.join(' ') + ' mr-5 rotate-[135deg]'}
                    onClick={() => moveScroll(1)}
                />
            </div>
        </div>
    )
}
