'use client'

import Image from "next/image";
import {useState} from 'react'

import styles from './sidebar.module.css'

import {Home, FoodOrder, Favorite, OrderHistory} from '@/components/icons'
import Settings from '@/public/assets/icons/Setting.svg'
import Logo from '@/public/assets/icons/GoMeal..png'
import Link from "next/link";


const menuItems = [
    {id:1, label:'Home', icon:<Home  fill="#A098AE" />, link: '/'},
    {id:2, label:'Food Order', icon:<FoodOrder fill="#A098AE"/>, link: '/foodorder'},
    {id:3, label:'Favorite', icon:<Favorite/>, link: '/favorite'},
    {id:4, label:'Order History', icon:<OrderHistory/>, link: '/orderhistory'},
    {id:5, label:'Setting', icon:<Settings/>, link: '/settings'},
]


export default function SideBar(){

    const [activeTab, setActiveTab] = useState('');

    console.log(activeTab)

    return <div className={styles.container}>
        <Image src={Logo} alt={'Logo'} />
        <div >
        <ul>
            {menuItems.map((menu, index) => (
                <Link href={menu.link} style={{ textDecoration: 'none' }}>
                    <li key={index}  onClick={()=>setActiveTab(menu.label)}>
                            {menu.icon}
                        <span>{menu.label}</span>
                    </li>
                </Link>
            ))}
        </ul>
        </div>
    </div>
}

