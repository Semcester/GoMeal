'use client'

import Image from "next/image";
import {useState} from 'react'
import { useRouter } from 'next/router';

import styles from './sidebar.module.css'

import {Home, FoodOrder, Favorite, OrderHistory} from '@/components/icons'
import Settings from '@/public/assets/icons/Setting.svg'
import Logo from '@/public/assets/icons/GoMeal..png'
import Link from "next/link";




export default function SideBar(){

    const menuItems = [
        {id:1, label:'Home', icon:<Home/>, link: '/'},
        {id:2, label:'Food Order', icon:<FoodOrder/>, link: '/foodorder'},
        {id:3, label:'Favorite', icon:<Favorite/>, link: '/favorite'},
        {id:4, label:'Order History', icon:<OrderHistory/>, link: '/orderhistory'},
        {id:5, label:'Setting', icon:<Settings />, link: '/settings'},
    ]

    const [activeTab, setActiveTab] = useState(1);

    return <div className={styles.container}>
        <Image src={Logo} alt={'Logo'} />
        <div >
        <ul>
            {menuItems.map((menu, index) => (
                <Link key={"id_" + menu.id} href={menu.link} style={{ textDecoration: 'none' }}>
                    <li onClick={()=>setActiveTab(menu.id)}  className={activeTab === menu.id ? styles.active : ''}>
                        <div className={activeTab ? styles.active :styles.icon} >{menu.icon}</div>
                        <span>{menu.label}</span>
                    </li>
                </Link>
            ))}
        </ul>
        </div>
    </div>
}

