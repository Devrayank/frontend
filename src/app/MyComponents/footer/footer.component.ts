import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footimg = "https://gulfcoastwestern.com/storage/media/gcw_header_1.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
