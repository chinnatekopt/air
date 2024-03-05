import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  socialSignIn: any;

  displayModal = false;
  val!: number;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  showModalDialog() {
    this.displayModal = true;
}
  url!: string;


Savesresponse(responce: any)
{
  this.url =  'http://localhost:4200';
  return this.http.post(this.url,responce);
}
Onclick(){

}

}


