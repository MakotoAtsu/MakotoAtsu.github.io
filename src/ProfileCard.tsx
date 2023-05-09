import { Typography } from '@material-tailwind/react'
import react_svg from './assets/icon/react.svg'
import IconLink from './compoments/IconLink'
import github_svg from './assets/icon/github.svg'
import linkedin_svg from './assets/icon/linkedin.svg'
import position_svg from './assets/icon/position.svg'
import mail_svg from './assets/icon/mail.svg'
import lang_svg from './assets/icon/lang.svg'

export default function ProfileCard() {
    return (
        <div
            className="flex flex-col justify-center items-center
                     border-yellow-500 border-2 text-white"
        >
            <img className="h-[50px]" src={react_svg} />
            <div className="pt-10">
                <Typography variant="h2" className="text-xl">
                    張育誠
                </Typography>
                <Typography variant="h3" className="text-lg">
                    (Chang Yu Chen)
                </Typography>
                <div className="pt-10">
                    <IconLink
                        id="github-info"
                        icon={github_svg}
                        linkUrl="https://github.com/MakotoAtsu"
                        text="@MakotoAtsu"
                    />
                    <IconLink
                        id="linkedin-info"
                        icon={linkedin_svg}
                        linkUrl="https://www.linkedin.com/in/makotoc"
                        text="@MakotoC"
                    />
                    <IconLink
                        id="email-info"
                        icon={mail_svg}
                        text="chris03152008@gmail.com"
                    />
                    <IconLink
                        id="position-info"
                        icon={position_svg}
                        text="Taipei, Taiwan"
                    />
                    <IconLink
                        id="lang-info"
                        icon={lang_svg}
                        text="Mandarin (Native), English"
                    />
                </div>
            </div>
        </div>
    )
}
