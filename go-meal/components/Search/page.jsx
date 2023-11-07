
import styles from './search.module.css'


export default function Search(){
    return <div className={styles.container}>
            <h1 className={styles.heading}>Hello, Mahmut</h1>
           <input type="search" placeholder={'What do you want eat today...'}/>
    </div>
}