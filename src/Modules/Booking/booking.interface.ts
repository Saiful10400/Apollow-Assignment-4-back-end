interface Tbooking {
    name: string;
    email: string;
    phone: string;
    address: string;
    payment?:string;
    booking: [
      {
        product: string; 
        count: number;
      }
    ];
  }
  
  export default Tbooking