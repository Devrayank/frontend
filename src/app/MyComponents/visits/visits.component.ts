import { Component, OnInit } from '@angular/core';
import { WelldataService } from '../../services/welldata.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-visits',
  templateUrl: './visits.component.html',
  styleUrls: ['./visits.component.css']
})
export class VisitsComponent implements OnInit {
wells: any;
price:any;

  constructor(private welldata:WelldataService, private http: HttpClient) { 

    welldata.wells().subscribe((data)=>{
     // console.log("data",data);
      this.wells= data
     
    }

  );
  }

  AddCardFunction(productid:any,userid:any,price:any)
  {

    this.http.post<any>('https://codestaginggcw.herokuapp.com/post-card', { productid: productid,userid: userid, price:price }).subscribe(data => {
            this.price = data.id;
            console.log(data);
        })

  }

  ngOnInit() {
   
}

}
