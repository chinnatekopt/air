import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'primeng/carousel';
import { RouterModule } from '@angular/router';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,FormsModule,CarouselModule,DropdownModule,CalendarModule,DialogModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  soption: any;
  dateview: boolean = false;
  stateOptions: any = [
    {label: 'Test', value:'hey'},
    {label: 'Nameer', value:'hey2'},
  ];
  countries = [
    {name: 'Nigeria',img: './assets/img/offer1.png'},
    {name: 'Indonesia',img: './assets/img/offer2.png'},
  ]
  items = [
    {
      img: './assets/img/offer1.png',
    },
    {
      img: './assets/img/offer2.png',
    },
    {
      img: './assets/img/offer3.png',
    },
    {
      img: './assets/img/offer4.png',
    },
    {
      img: './assets/img/offer5.png',
    },
    {
      img: './assets/img/offer6.png',
    },
  ];
  constructor() {
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  dateselect() {
    this.dateview = true;
  }

}
