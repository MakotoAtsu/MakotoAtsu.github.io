export default function Summary() {
    const content = (text: string) => (
        <p className="font-normal text-gray-200 pt-2">{text}</p>
    )

    return (
        <div id="summary">
            {content("Hi there! I'm 育誠 (Yu Chen).")}
            {content(
                "I'm your go-to guy for all things software development, with a cool 7 years and a B.S. degree in Computer Science."
            )}
            {content(
                "When I'm not writing killer code, you might catch me snapping a few pictures, fishing for shrimp, mastering the art of table tennis, or simply coding just for the pure fun of it!"
            )}
            {content(
                "In the coding world, I'm pretty handy with C#, and I'm also no stranger to TypeScript and Python either. If you are looking for someone to handle your Asp.Net, Django/FastAPI, or even Node.js applications, that's exactly what I specialize in!"
            )}
            {content(
                "I'm also a bit of a problem-solving whiz, I've got system design down to an art, and I'm always hungry to learn more."
            )}
            {content("How's that for a well-rounded techie?")}
        </div>
    )
}
