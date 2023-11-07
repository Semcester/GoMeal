'use client'

import Image from "next/image";
import styles from './advertise.module.css'




export default function Advertise(){



    return <div className={styles.container}>
        <div className={styles.wrapper}>
                <div className={styles.content}>
                    <h3>Get Discount Voucher Up To 20%</h3>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</span>
                </div>
                 <Image className={styles.image} width={359} height={239} src={"/assets/img/women.png"} alt={'Logo'} />
        </div>
    </div>
}

