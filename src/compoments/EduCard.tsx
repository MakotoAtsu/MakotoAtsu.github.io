export default function EduCard() {
    return (
        <div className="w-full">
            <div className="block p-6 border rounded-lg shadow bg-gray-900 border-gray-700">
                <div className="md:flex justify-between">
                    <h4 className="inline-block mb-2 text-2xl font-bold tracking-tight text-white">
                        Computer Science and Information Engineering
                    </h4>
                </div>
                <div className="flex justify-between">
                    <a
                        href="https://www.isu.edu.tw"
                        target="_blank"
                        className="inline-block mb-2 text-xl font-bold tracking-tight text-blue-700"
                    >
                        I-Shou University
                    </a>
                    <h4 className="mb-2 text-x1 font-bold tracking-tight text-white">
                        B.S, 2016
                    </h4>
                </div>
            </div>
        </div>
    )
}
