import styles from "./category.module.css";
import CategoryCard from "@/components/categoryCard";



const categories = [
    {id:1, img:'/assets/img/Baked.png', label:'Bakery'},
    {id:2, img:'/assets/img/Burger.png', label:'Burger'},
    {id:3, img:'/assets/img/Coffee.png', label:'Beverage'},
    {id:4, img:'/assets/img/Chicken.png', label:'Chicken'},
    {id:5, img:'/assets/img/Fast.png', label:'Pizza'},
    {id:6, img:'/assets/img/Fish.png', label:'Seafood'},
]



export default function Category() {
    return <div className={styles.container}>
        <div className={styles.content}>
            <h1>Category</h1>
            <span>View all </span>


        </div>
        <div className={styles.wrapper}>
            <CategoryCard image={categories[0].img} label={categories[0].label}/>
            <CategoryCard image={categories[1].img} label={categories[1].label}/>
            <CategoryCard image={categories[2].img} label={categories[2].label}/>
            <CategoryCard image={categories[3].img} label={categories[3].label}/>
            <CategoryCard image={categories[4].img} label={categories[4].label}/>
            <CategoryCard image={categories[5].img} label={categories[5].label}/>
        </div>

    </div>
}
