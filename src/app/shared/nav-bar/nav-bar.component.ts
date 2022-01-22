import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  /**
   * Boolean variable used to check weather user is login or not
   */
  isUserLoginIn: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
