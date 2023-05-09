import img from './assets/background.jpg'

export default function Background() {
    return (
        <div
            id="background"
            className="fixed bg-repeat-round h-[100vh] w-[100vw] -z-50"
            style={{ backgroundImage: `url(${img})` }}
        >
            <div className="bg-black h-full w-full opacity-40"></div>
        </div>
    )
}
