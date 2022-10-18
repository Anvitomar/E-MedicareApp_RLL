import { Component, OnInit } from '@angular/core';
import { Addtocart } from '../addtocart';
import { AddtocartService } from '../addtocart.service';

@Component({
  selector: 'app-ordersummary',
  templateUrl: './ordersummary.component.html',
  styleUrls: ['./ordersummary.component.css']
})
export class OrdersummaryComponent implements OnInit {
  email:string=""
  bill:string=""
  items:Array<Addtocart>=[]
  sum:number=0;
  constructor(public as:AddtocartService) { }

  ngOnInit(): void {
    let obj = sessionStorage.getItem("userDetails");
    if(obj!=null){
      this.email=obj;
    }
    this.OrderSummary(this.email);
  }
  
  OrderSummary(email:string){
    this.as.viewmyCart(this.email).subscribe({     
      next:(result:any)=>{this.items=JSON.parse(result)
        let obj1 = sessionStorage.getItem("total");
        if(obj1!=null){
          this.bill=obj1;
        }
      },
      error:(error:any)=>console.log(error),
      complete:()=>console.log("completed")
      
    })
    
  }

  

}
