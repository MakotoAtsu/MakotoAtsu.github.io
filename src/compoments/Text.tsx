interface Props {
    text: string
}

export default function Text(props: Props) {
    return <p className="font-normal text-gray-200">{props.text}</p>
}
