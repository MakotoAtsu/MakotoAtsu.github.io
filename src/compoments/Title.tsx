interface Props {
    text: string
    className?: string
}

export default function Title(props: Props) {
    return (
        <h2
            className={[
                'w-full my-6 text-center md:text-start',
                'text-3xl font-bold tracking-tight text-white',
                props.className,
            ].join(' ')}
        >
            {props.text}
        </h2>
    )
}
