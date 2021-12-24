import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mainimg = "https://gulfcoastwestern.com/storage/media/gcw_header_1.jpg";



  imgCollection: Array<object> = [
    {
      image: 'https://gulfcoastwestern.com/gcw_Laravel/storage/gallery_images/thumbnail_55641636693536.jpeg',
      thumbImage: 'https://gulfcoastwestern.com/gcw_Laravel/storage/gallery_images/thumbnail_55641636693536.jpeg',
      alt: 'Image 1',
      title: 'Image 1'
    }, {
      image: 'https://gulfcoastwestern.com/gcw_Laravel/storage/gallery_images/thumbnail_5071636694377.jpeg',
      thumbImage: 'https://gulfcoastwestern.com/gcw_Laravel/storage/gallery_images/thumbnail_5071636694377.jpeg',
      title: 'Image 2',
      alt: 'Image 2'
    }, {
      image: 'https://gulfcoastwestern.com/gcw_Laravel/storage/gallery_images/thumbnail_78111636695021.jpg',
      thumbImage: 'https://gulfcoastwestern.com/gcw_Laravel/storage/gallery_images/thumbnail_78111636695021.jpg',
      title: 'Image 3',
      alt: 'Image 3'
    }, {
      image: 'https://gulfcoastwestern.com/gcw_Laravel/storage/gallery_images/thumbnail_36821607427478.jpg',
      thumbImage: 'https://gulfcoastwestern.com/gcw_Laravel/storage/gallery_images/thumbnail_36821607427478.jpg',
      title: 'Image 4',
      alt: 'Image 4'
    }, {
      image: 'https://gulfcoastwestern.com/gcw_Laravel/storage/gallery_images/thumbnail_6821607427515.jpg',
      thumbImage: 'https://gulfcoastwestern.com/gcw_Laravel/storage/gallery_images/thumbnail_6821607427515.jpg',
      title: 'Image 5',
      alt: 'Image 5'
    }, {
      image: 'https://gulfcoastwestern.com/gcw_Laravel/storage/gallery_images/thumbnail_62391607427643.jpg',
      thumbImage: 'https://gulfcoastwestern.com/gcw_Laravel/storage/gallery_images/thumbnail_62391607427643.jpg',
      title: 'Image 6',
      alt: 'Image 6'
    },
    {
      image: 'https://gulfcoastwestern.com/gcw_Laravel/storage/gallery_images/thumbnail_49721607427837.jpg',
      thumbImage: 'https://gulfcoastwestern.com/gcw_Laravel/storage/gallery_images/thumbnail_49721607427837.jpg',
      title: 'Image 7',
      alt: 'Image 7'
    },
    {
      image: 'https://gulfcoastwestern.com/gcw_Laravel/storage/gallery_images/thumbnail_55981607427993.jpg',
      thumbImage: 'https://gulfcoastwestern.com/gcw_Laravel/storage/gallery_images/thumbnail_55981607427993.jpg',
      title: 'Image 8',
      alt: 'Image 8'
    },
    {
      image: 'https://gulfcoastwestern.com/gcw_Laravel/storage/gallery_images/thumbnail_24631607429829.jpg',
      thumbImage: 'https://gulfcoastwestern.com/gcw_Laravel/storage/gallery_images/thumbnail_24631607429829.jpg',
      title: 'Image 9',
      alt: 'Image 9'
    },
    {
      image: 'https://gulfcoastwestern.com/gcw_Laravel/storage/gallery_images/thumbnail_52891607430129.jpg',
      thumbImage: 'https://gulfcoastwestern.com/gcw_Laravel/storage/gallery_images/thumbnail_52891607430129.jpg',
      title: 'Image 10',
      alt: 'Image 10'
    },
    {
      image: 'https://gulfcoastwestern.com/gcw_Laravel/storage/gallery_images/thumbnail_67491607430456.jpg',
      thumbImage: 'https://gulfcoastwestern.com/gcw_Laravel/storage/gallery_images/thumbnail_67491607430456.jpg',
      title: 'Image 11',
      alt: 'Image 11'
    }
];

}
