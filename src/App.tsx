import ProfileCard from './ProfileCard'
import Background from './Background'
import JobCard from './compoments/JobCard'
import EduCard from './compoments/EduCard'
import Title from './compoments/Title'
import Summary from './compoments/Summary'
import history from './history.json'
import ProjectCard from './compoments/ProjectCard'

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
                className="
                px-[5vw] md:px-[10vw]
                md:pl-[33vw] 
                pt-[15vh] md:pt-[20vh]
                flex flex-col 
                items-center
                "
            >
                <Title text="Who am I ?" />
                <Summary />
                <Title className='mt-[20vh]' text="Personal Project" />
                <div className="w-full grid xl:grid-cols-2 gap-4">
                    <ProjectCard
                        title="AspNetCore_Vite_Starter"
                        description="Integrating Vite Project In ASP.NET Core. Support hot reload, https, and auto build with backend."
                        link="https://marketplace.visualstudio.com/items?itemName=MakotoAtsu.AspNetCoreViteStarter"
                    />
                    <ProjectCard
                        title="DDD-in-RESTful-Flask-example"
                        description="Explain simply how to combine DDD and RESTful Flask Service using the least amount of code."
                        link="https://github.com/MakotoAtsu/DDD-in-RESTful-Flask-example"
                    />
                    <ProjectCard
                        title="LinqToWUApi"
                        description="Support for using the LINQ Where method with WUApiLib."
                        link="https://github.com/MakotoAtsu/LinqToWUApi"
                    />
                    <ProjectCard
                        title="Lookup-GPT"
                        description="A Chrome Extension that provide you easy way to look up word in context."
                        link="https://github.com/MakotoAtsu/Lookup-GPT"
                    />
                    <ProjectCard
                        title="MakotoAtsu.github.io"
                        description="My personal website."
                        link="https://github.com/MakotoAtsu/MakotoAtsu.github.io"
                    />
                </div>
                <Title text="My Jounary" />

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
