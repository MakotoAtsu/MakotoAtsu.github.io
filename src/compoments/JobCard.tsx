import { useState, useRef } from 'react'
import Devider from './Devider'
import narrow from '../assets/icon/narrow.svg'

interface CollapseListProps {
    title: string
    items: string[]
}

const CollapseList = (props: CollapseListProps) => {
    const [show, setShow] = useState(false)
    const innerRef = useRef<HTMLUListElement>(null)
    const height = innerRef.current?.clientHeight
    return (
        <>
            <div
                className="flex pt-2 items-center text-gray-400 cursor-pointer"
                onClick={() => setShow(!show)}
            >
                <img
                    className={`h-[20px] transition ${
                        show ? '' : 'rotate-180'
                    }`}
                    src={narrow}
                />
                <span className="pl-2">{props.title}</span>
            </div>
            <div
                className={`overflow-hidden transition-[height]`}
                style={{ height: `${show ? height : '0'}px` }}
            >
                <ul ref={innerRef} className="ml-6 list-disc">
                    {props.items.map((item, idx) => (
                        <li key={idx} className="font-normal text-gray-400 ">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export interface JobCardProps {
    title: string
    company: string
    companyUrl?: string
    startDate: string
    endDate: string
    description: string
    achievement?: string[]
    techniques?: string[]
}

export default function JobCard(props: JobCardProps) {
    return (
        <div className={`w-full`}>
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
                <div className="mb-6">
                    <p className="text-sm font-normal text-gray-700 dark:text-gray-400">
                        {props.description}
                    </p>
                </div>

                {props.achievement && props.achievement.length > 0 && (
                    <>
                        <CollapseList
                            title="Achievement"
                            items={props.achievement}
                        />
                        <Devider />
                    </>
                )}
                {props.techniques && props.techniques.length > 0 && (
                    <>
                        <CollapseList
                            title="Technique"
                            items={props.techniques}
                        />
                    </>
                )}
            </div>
        </div>
    )
}
