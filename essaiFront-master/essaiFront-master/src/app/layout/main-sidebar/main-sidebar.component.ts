import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-main-sidebar',
  templateUrl: './main-sidebar.component.html',
  styleUrls: ['./main-sidebar.component.scss']
})
export class MainSidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    $('.menu-toggle').on('click', (event:any) => {
      const menuItem = $(event.currentTarget).closest('.menu-item');
      menuItem.toggleClass('open');
      //menuItem.find('.menu-sub').slideToggle();
    });
  }
}
