import { Component } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-dashnav',
  standalone: true,
  imports: [SidenavComponent],
  templateUrl: './dashnav.component.html',
  styleUrl: './dashnav.component.scss'
})
export class DashnavComponent {

}
