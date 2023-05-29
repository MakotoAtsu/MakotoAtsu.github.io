import ReactMarkdown from 'react-markdown'
import Avatar from '../assets/icon/Avatar.svg'

export interface RefCardProps {
    image?: string
    name: string
    text: string
}

export default function RefCard(props: RefCardProps) {
    return (
        <div className="h-full w-full p-12 md:flex">
            <div className="md:w-1/4 flex flex-col justify-around">
                <img
                    className="h-32 rounded-full"
                    src={props.image ? props.image : Avatar}
                    alt="Avatar"
                />
                <div className="text-center">{props.name}</div>
            </div>
            <div
                className={[
                    'h-full md:ml-8 p-4',
                    'md:w-3/4',
                    'md:border-l-2 border-gray-400',
                ].join(' ')}
            >
                <div className="prose">
                    <ReactMarkdown>{props.text}</ReactMarkdown>
                </div>
            </div>
        </div>
    )
}
