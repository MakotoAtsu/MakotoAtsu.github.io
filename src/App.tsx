import ProfileCard from './ProfileCard'
import Background from './Background'
import JobCard from './compoments/JobCard'
import EduCard from './compoments/EduCard'
import Title from './compoments/Title'
import Summary from './compoments/Summary'
import history from './history.json'
import ProjectCard from './compoments/ProjectCard'
import Carousel from './compoments/Carousel'
import RefCard from './compoments/RefCard'

const App = () => {
    const HankRef = {
        text: `育誠是一位優秀的程式開發者，他在合作的各個案子中展現出卓越的表現。  
        他不僅能夠符合需求並超越預期，而且在日常工作中展現出高度的責任感和努力。  
        他致力於解決問題，並不斷追求進步，確保工作的順利完成。  
        我非常推薦他作為一個優秀的程式開發者，他的才華和努力定能為任何團隊或項目帶來卓越的成果`,
        name: `Hank Chen`,
    }

    const LarryRef = {
        text: `在一起工作的時間裡，育誠很快速的理解了整個系統，並能獨立解決問題。  
        在管理方面的能力尤其出色，且總能迅速學習新的技術和工具。  
        除此之外，團隊合作能力也非常優秀。總是能有效地與團隊成員進行溝通，並在需要的時候樂於助人。正面的態度和對工作的熱情也在團隊中深受大家的喜愛。`,
        name: `Larry Tang`,
    }

    return (
        <>
            <Background />
            <div
                id="profile-card"
                className={[
                    'md:fixed',
                    'md:flex',
                    'md:w-[24vw] ',
                    'md:h-[92vh]',
                    'md:pt-0',
                    'pt-20 flex-col justify-center',
                ].join(' ')}
            >
                <ProfileCard />
            </div>
            <div
                id="content"
                className={[
                    'px-[5vw] md:px-[10vw]',
                    'md:pl-[33vw]',
                    'pt-[15vh] md:pt-[20vh]',
                    'flex flex-col',
                    'items-center',
                ].join(' ')}
            >
                <Title text="Who am I ?" />
                <Summary />
                <Title className="mt-[20vh]" text="Personal Project" />
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

                <div className="w-full rounded-lg shadow bg-gray-900 border-gray-700 border text-gray-400">
                    <Carousel>
                        <RefCard {...HankRef} />
                        <RefCard {...LarryRef} />
                    </Carousel>
                </div>
                <div className="my-3" />
            </div>
        </>
    )
}

export default App
