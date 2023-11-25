import styles from './categorySkeleton.module.css'

import Skeleton from "react-loading-skeleton";
export default function categorySkeleton(){
    return  <div className={ styles.container}>
        <Skeleton circle width={56} height={56}/>
        <Skeleton/>
    </div>
}