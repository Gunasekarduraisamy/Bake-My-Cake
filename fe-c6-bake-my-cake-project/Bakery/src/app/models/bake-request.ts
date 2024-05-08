export type BakeRequest = {
    id?: string;
    bakeName?: string;
    dateOfCake?: Date;
    customerName?: string;
    customerEmail?: string;
    customerPhone?: string;
    quantity?:number;
    doorNo?:number;
    street?:string;
    city?:string;
    state?:string;
    pincode?:number;
    totalPrice?:number;

}