import ProfileCard from './ProfileCard'
import Background from './Background'
import JobCard from './compoments/JobCard'
import EduCard from './compoments/EduCard'
import Title from './compoments/Title'
import Summary from './compoments/Summary'
import history from './history.json'

const App = () => {
    return (
        <>
            <Background />
            <div
                id="profile-card"
                className={`
                md:fixed 
                md:flex 
                md:w-[24vw] 
                md:h-[92vh]
                md:pt-0
                pt-20 flex-col justify-center`}
            >
                <ProfileCard />
            </div>
            <div
                id="content"
                className={`
                px-[5vw]
                md:px-[10vw]
                md:pl-[33vw] 
                md:pt-[20vh]
                flex flex-col 
                items-center
                `}
            >
                <Title text="Who am I ?" />
                <Summary />
                <Title text="My History" />

                {history
                    .map((job, idx) => <JobCard key={idx} {...job} />)
                    .reduce((x, y) => (
                        <>
                            {x}
                            <div className="w-full h-5">
                                <div className="w-1/2 h-full border-r-2 border-gray-400" />
                            </div>
                            {y}
                        </>
                    ))}

                <div className="w-full h-5">
                    <div className="w-1/2 h-full border-r-2 border-gray-400" />
                </div>
                <EduCard />
                <div className="my-3" />
            </div>
        </>
    )
}

export default App
