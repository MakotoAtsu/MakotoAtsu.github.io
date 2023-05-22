import { useState } from 'react'
export interface JobCardProps {
    title: string
    company: string
    companyUrl?: string
    startDate: string
    endDate: string
    description: string
    achievement?: string[]
}

export default function JobCard(props: JobCardProps) {
    const [isVisible, setVisible] = useState(false)

    return (
        <div className="w-full" onClick={() => setVisible(!isVisible)}>
            <div
                // href="#"
                // max-w-sm
                className="block p-6 border rounded-lg shadow bg-gray-900 border-gray-700"
            >
                <div className="md:flex justify-between">
                    <h3 className="inline-block mb-2 text-2xl font-bold tracking-tight text-white">
                        {props.title}
                    </h3>
                </div>
                <div className="flex justify-between">
                    {props.companyUrl ? (
                        <a
                            target="_blank"
                            href={props.companyUrl}
                            className="inline-block mb-2 text-xl font-bold tracking-tight text-blue-700"
                        >
                            {props.company}
                        </a>
                    ) : (
                        <h4 className="mb-2 text-xl font-bold tracking-tight text-white">
                            {props.company}
                        </h4>
                    )}
                    <h4 className="mb-2 text-x1 font-bold tracking-tight text-white">
                        {props.startDate} - {props.endDate}
                    </h4>
                </div>
                <div>
                    <p className="text-sm font-normal text-gray-700 dark:text-gray-400">
                        {props.description}
                    </p>
                </div>
                {props.achievement && props.achievement.length > 0 && (
                    <div className="mt-3">
                        <div
                            className={`ml-6 pt-4 ${isVisible ? '' : 'hidden'}`}
                        >
                            <ul className="list-disc">
                                {props.achievement.map((item, idx) => (
                                    <li
                                        key={idx}
                                        className="font-normal text-gray-700 dark:text-gray-400"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <a
                            className="text-white"
                            onClick={() => setVisible(!isVisible)}
                        >
                            {isVisible ? 'Hide ...' : 'Show ...'}
                        </a>
                    </div>
                )}
            </div>
        </div>
    )
}
