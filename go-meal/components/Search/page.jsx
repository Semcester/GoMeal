
import styles from './search.module.css'
import {useEffect} from "react";
import {useSession} from "next-auth/react";
import axios from "axios";


export default function Search(){

    const session = useSession()

    useEffect(() => {

    }, []);



    return <div className={styles.container}>
            <h1 className={styles.heading}>Hello, Mahmut</h1>
           <input type="search" placeholder={'What do you want eat today...'}/>
    </div>
}
