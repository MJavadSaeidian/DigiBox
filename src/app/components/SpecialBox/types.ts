export interface SpecialBoxProduct {

    id:string;

    title:string;

    image:string;

    price:number;

}



export interface SpecialBoxType {


    id:string;

    title:string;

    description:string;

    image:string;

    products:SpecialBoxProduct[];

    boxPrice:number;


}