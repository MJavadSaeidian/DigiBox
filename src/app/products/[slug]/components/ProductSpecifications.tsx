import styles from "./ProductSpecifications.module.scss";

import {
    LuBatteryCharging,
    LuCamera,
    LuCpu,
    LuHardDrive,
    LuMemoryStick,
    LuMonitor,
    LuSmartphone
} from "react-icons/lu";


type ProductSpecificationsProps = {

    product: {

        specifications?: {

            label:string;

            value:string;

        }[];

    };

};




const getIcon = (
    label:string
) => {


    switch(label){


        case "نمایشگر":

            return <LuMonitor />;


        case "پردازنده":

            return <LuCpu />;



        case "رم":

            return <LuMemoryStick />;



        case "حافظه داخلی":

            return <LuHardDrive />;



        case "دوربین":

            return <LuCamera />;



        case "باتری":

            return <LuBatteryCharging />;



        default:

            return <LuSmartphone />;


    }

}





function ProductSpecifications({

    product

}:ProductSpecificationsProps){



    const specifications =
        product.specifications || [];




    if(!specifications.length)

        return null;





    return (


        <section className={styles.specifications}>


            <h2>

                مشخصات فنی

            </h2>





            <div className={styles.list}>


                {
                    specifications.map(

                        (item,index)=>(


                            <div

                                key={`${item.label}-${index}`}

                                className={styles.item}

                            >



                                <div className={styles.label}>


                                    <span className={styles.icon}>

                                        {
                                            getIcon(
                                                item.label
                                            )
                                        }

                                    </span>



                                    <span>

                                        {item.label}

                                    </span>


                                </div>





                                <span className={styles.value}>

                                    {item.value}

                                </span>




                            </div>


                        )

                    )
                }



            </div>



        </section>


    );

}


export default ProductSpecifications;