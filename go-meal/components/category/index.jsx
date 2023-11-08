'use client'
import styles from "./category.module.css";
import CategoryCard from "@/components/category/categoryCard";
import Image from "next/image";
import Arrow from "@/public/assets/img/chevron-down.png";
import {useState} from "react";


const categories = [
    {id:1, img:'/assets/img/Baked.png', label:'Bakery'},
    {id:2, img:'/assets/img/Burger.png', label:'Burger'},
    {id:3, img:'/assets/img/Coffee.png', label:'Beverage'},
    {id:4, img:'/assets/img/Chicken.png', label:'Chicken'},
    {id:5, img:'/assets/img/Fast.png', label:'Pizza'},
    {id:6, img:'/assets/img/Fish.png', label:'Seafood'},
    {id:6, img:'/assets/img/Fish.png', label:'Seafood'},
    {id:6, img:'/assets/img/Fish.png', label:'Seafood'},
]

export default function Category() {

    const [showAll, setShowAll] = useState(false);

    const visibleElements = showAll ? categories : categories.slice(0, 6);


    return <div className={styles.container}>
        <div className={styles.content}>
            <h1>Category</h1>
            <div className={styles.view} onClick={() => setShowAll(true)}>
                <span>View all </span>
                <Image width={24} height={24} src={Arrow} alt={'Arrow'}/>
            </div>
        </div>
        <div className={styles.wrapper}>
            {visibleElements.map((category)=>{
               return <CategoryCard image={category.img} label={category.label}/>
            })}
        </div>
    </div>
}
