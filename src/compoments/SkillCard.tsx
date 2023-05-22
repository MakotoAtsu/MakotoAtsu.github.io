export interface SkillType {
    type: string
    skills: string[]
}

export interface SkillCardProps {
    title: string
    skills?: string[]
    typeSkills?: SkillType[]
}

export default function SkillCard(props: SkillCardProps) {
    return (
        <div className="h-full p-6 border rounded-lg shadow bg-gray-900 border-gray-700">
            <h3 className="text-center text-2xl font-bold tracking-tight text-white">
                {props.title}
            </h3>
            {props.skills && props.skills.length > 0 && (
                <div className="ml-6 pt-2">
                    <ul className="list-disc">
                        {props.skills.map((skill, idx) => (
                            <li
                                key={idx}
                                className="font-normal text-gray-700 dark:text-gray-400"
                            >
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {props.typeSkills && props.typeSkills.length > 0 && (
                <div>
                    {props.typeSkills.map((type) => (
                        <>
                            <h5 className="text-lg font-medium tracking-tight text-white">
                                {type.type}
                            </h5>
                            <div className="ml-6 mb-3">
                                <ul className="list-disc">
                                    {type.skills.map((skill, s_idx) => (
                                        <li
                                            key={s_idx}
                                            className="font-normal text-gray-700 dark:text-gray-400"
                                        >
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </>
                    ))}
                </div>
            )}
            {/* {props.typeSkills.map((type, t_idx) => (
        <div className="ml-6 pt-2">
            <ul className="list-disc">
                    <li
                        key={t_idx}
                        className="font-normal text-gray-700 dark:text-gray-400"
                    >
                        {type}
                    </li>
                    </ul>
                    </div>
                    ))}
    <> */}
        </div>
    )
}
