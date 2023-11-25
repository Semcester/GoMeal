'use client'

import {useEffect, useRef} from "react";
import {notificationMock} from "@/mockData/notification";

import styles from './notification.module.css'
import Image from "next/image";




export default function NotificationMenu({ closeMenu }){
    const menuRef = useRef(null);
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                closeMenu();
            }
        };

        // Add event listener when the component mounts
        document.addEventListener('click', handleOutsideClick);

        // Remove event listener when the component unmounts
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [closeMenu]); // Re-run effect when closeMenu changes


    return <div className={styles.container} ref={menuRef}>
        {notificationMock.map(notif=>{
            return (
                <div key={notif.id} className={styles.wrapper}>
                    <Image src={notif.img} width={55} height={50} alt={notif.message}/>
                    <span>{notif.message}</span>
                    <hr/>
                </div>
            )
        })}

    </div>
}
