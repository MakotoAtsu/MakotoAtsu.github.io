import { Typography } from '@material-tailwind/react'
import displayPhoto from './assets/displayPhoto.jpg'
import IconLink from './compoments/IconLink'
import github_svg from './assets/icon/github.svg'
import linkedin_svg from './assets/icon/linkedin.svg'
import position_svg from './assets/icon/position.svg'
import mail_svg from './assets/icon/mail.svg'
import lang_svg from './assets/icon/lang.svg'
import hand_wave from './assets/icon/hand_wave.svg'
import resume from '../public/ChangYuChen.pdf'
import Tooltip from './compoments/Tooltip'

export default function ProfileCard() {
    return (
        <div className="flex flex-col justify-center items-center text-white">
            <img
                className="h-36 rounded-full mt-20"
                src={displayPhoto}
                alt="Avatar"
            ></img>
            <div className="pt-5">
                <Typography variant="h2" className="text-xl">
                    張育誠
                </Typography>
                <Typography variant="h3" className="text-lg">
                    (Chang Yu Chen)
                </Typography>

                <Tooltip tip="Click to download my resume">
                    <div className="text-red-600 text-lg font-semibold">
                        <IconLink
                            id="hire"
                            icon={hand_wave}
                            text="Available for hire"
                            linkUrl={resume}
                        />
                    </div>
                </Tooltip>
                <div className="pt-3">
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
