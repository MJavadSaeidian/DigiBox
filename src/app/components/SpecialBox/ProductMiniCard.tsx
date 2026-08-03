import styles from "./SpecialBox.module.scss";


interface Props {

    title:string;

    image:string;

}



export default function ProductMiniCard({
    title,
    image
}:Props){


    return (

        <div className={styles.productCard}>


            <img
                src={image}
                alt={title}
                className={styles.productImage}
            />


            <span>
                {title}
            </span>


        </div>

    );


}