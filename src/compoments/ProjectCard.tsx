export interface ProjectCardProps {
    title: string
    description: string
    link: string
}

export default function ProjectCard(props: ProjectCardProps) {
    return (
        <div
            className={[
                'p-1 hover:p-0 transition-all duration-300',
                'h-full w-full',
            ].join(' ')}
        >
            <div
                className={[
                    'p-0 hover:p-1 transition-all duration-300',
                    'border border-gray-700',
                    'bg-gray-900 hover:bg-gray-800',
                    'cursor-pointer shadow rounded-lg',
                ].join(' ')}
            >
                <a className="block p-4" href={props.link} target="_blank">
                    <h3 className="text-center text-base font-bold tracking-tight text-white">
                        {props.title}
                    </h3>
                    <p className="mt-3 text-gray-400 text-sm">
                        {props.description}
                    </p>
                </a>
            </div>
        </div>
    )
}
