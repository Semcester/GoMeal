import styles from "./categorycard.module.css";
import Image from "next/image";
import {useSelector} from "react-redux";



export default function CategoryCard({ image, name, selected, isAll}) {
    const state = useSelector(state=>state.category)
    let renderImage;
    const imgUrl = 'https://static.smartlimon.com/' ;

    if(state.isMockData){
        renderImage = image
    }else{
        renderImage= isAll ? image : imgUrl + image;
    }


  return (
    <div className={selected ? styles.activeContainer : styles.container}>
      <Image width={45} height={46} src={renderImage} alt={name} />
      <span>{name} </span>
    </div>
  );
}
