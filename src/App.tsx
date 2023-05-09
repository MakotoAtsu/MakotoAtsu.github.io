import ProfileCard from './ProfileCard'
import Background from './Background'
import { Card } from '@material-tailwind/react'

const App = () => {
    const breakpoint = 'md'
    return (
        <>
            <Background />
            <div
                id="profile-card"
                className={`
                ${breakpoint}:fixed 
                ${breakpoint}:flex 
                ${breakpoint}:w-[24vw] 
                ${breakpoint}:h-[92vh]
                ${breakpoint}:pt-0
                pt-20 flex-col justify-center`}
            >
                <ProfileCard />
            </div>
            <div
                id="content"
                className={`
                ${breakpoint}:pl-[25vw] 
                pt-[5vh]
                flex flex-col text-white
                items-center
                `}
            >
                <Card>Card 1</Card>
                <Card>Card 2</Card>
                <Card>Card 3</Card>
                <Card>Card 4</Card>
                <Card>Card 5</Card>
                <Card>Card 6</Card>
            </div>
        </>
    )
}

export default App
