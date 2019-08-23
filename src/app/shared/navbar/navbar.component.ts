import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../services/service.index';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public _navBar: NavbarService) { }

  ngOnInit() {
  }

}
