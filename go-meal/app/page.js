import Search from "@/components/Search/page";
import Advertise from "@/components/advertise";


import styles from './page.module.css'
import Category from "@/components/category";
export default function Home() {
  return (
    <main className={styles.container}>
        <Search/>
        <Advertise/>
        <Category/>

    </main>
  )
}
