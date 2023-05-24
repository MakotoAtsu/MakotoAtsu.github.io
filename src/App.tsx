import ProfileCard from './ProfileCard'
import Background from './Background'
import JobCard, { JobCardProps } from './compoments/JobCard'
import EduCard from './compoments/EduCard'
import Title from './compoments/Title'
import Summary from './compoments/Summary'

const App = () => {
    const pinkoi: JobCardProps = {
        title: 'Sr. Backend Developer',
        company: 'Pinkoi',
        companyUrl: 'https://www.pinkoi.com/',
        description: `Pinkoi is an online marketplace based in Taiwan, 
             founded in 2011. It is known for selling uniquely designed goods by independent designers worldwide. 
             Similar to Etsy, Pinkoi focuses on handcrafted and independent designs, but is more popular in Asia.`,
        startDate: 'Feb. 2023',
        endDate: 'NOWADAYS',
        techniques: [
            'Backend: Python / Django / FastAPI',
            'Frontend: TypeScript / React.js',
            'Database: MySQL / Redis / AWS Athena / Elastic Search',
            'Testing: Pytest / unittest.mock',
            'CI/CD: GitHub Action',
            'Cloud: AWS',
            'Virtualization: Docker / K8s',
            'Domain: RabbitMQ',
        ],
    }

    const koobits: JobCardProps = {
        title: 'Sr. Backend Developer',
        company: 'KooBits',
        companyUrl: 'https://www.koobits.com/',
        description: `KooBits is a platform that provides online learning solutions, 
                      primarily focused on mathematics for primary school students. 
                      It combines interactive digital content, a motivational system, 
                      and personalized learning to engage students and improve their learning outcomes.`,
        achievement: [
            'Introduce UnitTest in 2 services and enable TDD.',
            "Import the Unit Of Work pattern to solve the performance of DB's connection too much issue.",
            'Integrating GitHub Action to enable CI after creating Pull-Request.',
        ],
        startDate: 'Apr. 2022',
        endDate: 'Aug. 2022',
        techniques: [
            'Backend: C# / ASP.NET Core',
            'Frontend: TypeScript / React.js',
            'ORM: Entity Framework Core',
            'Database: PostgreSQL / Redis',
            'Testing: XUnit / NSubstitute',
            'CI/CD: GitHub Action , Azure DevOps',
            'Cloud: AWS',
            'Virtualization: Docker / K8s',
            'Source Control: Git',
        ],
    }

    const pixis: JobCardProps = {
        title: 'Software Team Lead',
        company: 'PIXIS',
        companyUrl: 'https://www.pixis.com.tw/',
        achievement: [
            'Led team product development for a comprehensive solution of Network Access Control, IPAM, and Device Discovery.',
            'Dockerized product, and reduced network probe software IP occupancy by 45%',
            'Introduced HAProxy and Redis, enabling high availability characteristics for the product.',
            'Separated frontend and backend, introduce JS framework (Vue.js) and modern software architecture to speed up development time.',
            'Migrated from .Net Framework to .Net Core, enhancing product performance and security.',
            'Built a new Custom Report feature to provide users the ability to create any reports.',
            'Managed support of 802.1x dynamic VLAN assignment, and strengthen product competitiveness.',
            'Optimized loading performance, and increase the concurrent amount by 30% every 30 minutes.',
            'Created CI/CD, shorten product development life cycle.',
        ],
        description: '',
        startDate: 'Mar. 2019',
        endDate: 'Mar. 2022',
        techniques: [
            'Backend: C# / ASP.NET / TypeScript / Electron.js',
            'Frontend: TypeScript / Vue.js',
            'Database: SQL Server / Redis',
            'ORM: Entity Framework / Dapper',
            'Testing: XUnit / NSubstitute',
            'CI/CD: Azure DevOps',
            'Virtualization: Docker / Docker-Compose / MACVLAN',
            'Source Control: Git',
            'Domain: TCP/IP / ARP / 902.1Q / 802.1x / Radius / DHCP / DNS / SNMP / LDAP / AD',
        ],
    }

    const mxic: JobCardProps = {
        title: 'Sr. Software Engineer',
        company: 'Macronix',
        companyUrl: 'https://www.mxic.com.tw/',
        description: `Macronix International Co., Ltd. is a company based in Taiwan 
                      that specializes in non-volatile memory semiconductor solutions. 
                      It's one of the leading manufacturers globally in this area. 
                      The company's product portfolio includes NOR Flash, NAND Flash, 
                      and ROM products which are used in a wide range of electronic devices, 
                      including computers, consumer electronics, and industrial automation systems.`,
        achievement: [
            'Designed and improved automation software for semiconductor equipment.',
            'Independently developed 15 measurement equipment EAPs (Equipment Automation Program) from the ground up, enabled automatic product measurement and report-data upload.',
            'Managed and implemented POCs (proof of concepts) for 9 EAPs to automate equipment recipe selection and production.',
            'Improved 54 EAPs feature based on user demand.',
            'Developed a Dynamic Calculation system, using C# and CodeDOM to enable dynamic source code creation, code compilation, and code execution to calculate measurement data.',
            'Constructed a new system to allow Manufacturing Dept. to collect and control all factory equipment info in real-time.',
        ],
        startDate: 'Feb. 2016',
        endDate: 'Mar. 2019',
        techniques: [
            'Backend: C# / ASP.NET / WPF / WinForm',
            'Database: SQL Server / MySQL',
            'ORM: Entity Framework / ADO.NET',
            'Domain: Semiconductor / Automation / SECS-GEM / UART (RS-232) / Message Queue (IBM MQ)',
            'Sourcce Control: SVN',
        ],
    }

    const whetron: JobCardProps = {
        title: 'Firmware Engineer (Intern)',
        company: 'Whetron',
        companyUrl: 'http://www.whetron.com/',
        description: `Whetron, founded in 1983, 
                      aims to be a leading supplier of automotive electronic parts globally. 
                      Whetron offers a range of products, including remote access, parking aid systems, 
                      and keyless entry. They prioritize safety, convenience, and reliability.`,
        achievement: [
            'Developed and maintained firmware for parking sensors.',
            'Built and implemented testing tools for products.',
            'Built a new testing tool for smart-key, allowing operators faster and more accurate product testing execution.',
        ],
        startDate: 'Jul. 2014',
        endDate: 'Jul. 2015',
        techniques: ['ANSI C / MPASM assembly'],
    }

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
                <JobCard {...pinkoi} />
                <div className="w-full h-5">
                    <div className="w-1/2 h-full border-r-2 border-gray-400" />
                </div>
                <JobCard {...koobits} />
                <div className="w-full h-5">
                    <div className="w-1/2 h-full border-r-2 border-gray-400" />
                </div>
                <JobCard {...pixis} />
                <div className="w-full h-5">
                    <div className="w-1/2 h-full border-r-2 border-gray-400" />
                </div>
                <JobCard {...mxic} />
                <div className="w-full h-5">
                    <div className="w-1/2 h-full border-r-2 border-gray-400" />
                </div>
                <JobCard {...whetron} />
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
