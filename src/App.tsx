import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Card, CardBody, Button } from '@material-tailwind/react'
import './assets/css/App.css'

const App = () => {
    const [count, setCount] = useState(0)

    return (
        <div className="bg-blue-gray-500">
            <div className="flex justify-center">
                <div className="">
                    <a href="https://vitejs.dev" target="_blank">
                        <img src={viteLogo} className="logo" alt="Vite logo" />
                    </a>
                    <a href="https://react.dev" target="_blank">
                        <img
                            src={reactLogo}
                            className="logo react"
                            alt="React logo"
                        />
                    </a>
                </div>
            </div>
            <h1>Vite + React</h1>
            <Card>
                <CardBody>
                    <Button onClick={() => setCount((count) => count + 1)}>
                        count is {count}
                    </Button>
                    <p>
                        Edit <code>src/App.tsx</code> and save to test HMR
                    </p>
                </CardBody>
            </Card>
            <p className="text-white">
                Click on the Vite and React logos to learn more
            </p>
        </div>
    )
}

export default App
