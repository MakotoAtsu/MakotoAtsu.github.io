export default function Summary() {
    const content = (text: string) => (
        <p className="font-normal text-gray-200">{text}</p>
    )

    return (
        <div id="summary">
            {content('Hi, My name is 育誠 (Yu Chen)')}
            {content(
                'Profession software developer with over 7 years of experience and a B.S. degree in Computer Science.'
            )}
            {content(
                'Expert in C# .NET and the Microsoft technology stack, with solid skills in TypeScript, Vue.js, React.js, Python, and Node.js.'
            )}
            {content(
                'Demonstrated abilities in problem-solving, system design, and continuous learning.'
            )}
            {content(
                'Adept at working as a team player and manager, boasting robust collaboration, communication, and extensive cross-group coordination skills.'
            )}
        </div>
    )
}
