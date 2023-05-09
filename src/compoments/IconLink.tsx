interface Props {
    id: string
    icon: string
    text: string
    linkUrl?: string
}

const IconLink = (props: Props) => {
    return (
        <div id={props.id} className="flex pt-2 items-center">
            <img className="h-[20px]" src={props.icon} />
            {props.linkUrl ? (
                <a
                    target="_blank"
                    href={props.linkUrl}
                    className="pl-2 underline"
                >
                    {props.text}
                </a>
            ) : (
                <span className="pl-2">{props.text}</span>
            )}
        </div>
    )
}

export default IconLink
