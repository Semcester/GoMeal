'use client'

import Image from "next/image";


import styles from './rightsidebar.module.css'
import Logo from '@/public/assets/icons/GoMeal..png'
export default function RightsideBar(){


    return <div className={styles.container}>
        <div className={styles.wrapper}>

            <Image src={Logo} alt={'Logo'} />
            <div >
                    <h1>Right Side</h1>
            </div>
        </div>
    </div>
}

