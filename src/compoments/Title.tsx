interface Props {
    text: string
}

export default function Title(props: Props) {
    return (
        <h2 className="w-full my-5 text-center md:text-start text-3xl font-bold tracking-tight text-white">
            {props.text}
        </h2>
    )
}
