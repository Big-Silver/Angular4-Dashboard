import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ni-pagination',
  templateUrl: './ni-pagination.component.html',
  styleUrls: ['./ni-pagination.component.scss']
})
export class NiPaginationComponent implements OnInit {
  @Input() totalItems: any = 1;
  @Input() itemPerPage: any = 5;
  @Output() changePage = new EventEmitter();
  @Input() currentPage: any = 1;
  
  itemsPerPage = [5, 10, 25, 100];
  firstItem = 1;
  lastItem = 5;

  constructor() {

  }

  ngOnInit() {
    this.getPageItem();
  }

  goNext() {
    if (this.itemPerPage * this.currentPage < this.totalItems) {
      this.currentPage += 1;
      this.getPageItem();
      this.changePage.emit([this.itemPerPage, this.currentPage]);
    }
  }

  goPrev() {
    if (this.currentPage > 1) {
      this.currentPage -= 1;
      this.getPageItem();
      this.changePage.emit([this.itemPerPage, this.currentPage]);
    }
  }

  getPageItem() {
    if (this.currentPage * this.itemPerPage > this.totalItems) {
      this.lastItem = this.totalItems;
    } else {
      this.lastItem = this.currentPage * this.itemPerPage;
    }
    this.firstItem = 1 + (this.currentPage - 1) * this.itemPerPage;
  }

  changeItemsPerPage() {
    this.currentPage = 1;
    this.getPageItem();
    this.changePage.emit([this.itemPerPage, this.currentPage]);
  }
}
