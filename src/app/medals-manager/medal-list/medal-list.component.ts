import {Component, OnInit, ViewChild} from '@angular/core';
import {MedalDataService} from "../medals-result-service";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator, PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-medal-list',
  templateUrl: './medal-list.component.html',
  styleUrls: ['./medal-list.component.scss'],
})
export class MedalListComponent implements OnInit {
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['country', 'gold', 'silver', 'bronze', 'total'];

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;


  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;

  length = 0;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];

  showPageSizeOptions = true;

  pageEvent: PageEvent = new PageEvent;

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }



  constructor(private medalService: MedalDataService) { }

  ngOnInit(): void {
    this.medalService.getMedalData().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.length = this.getDataSourceLength()
      this.dataSource.paginator = this.paginator
    });
  }

  getDataSourceLength(): number {
    // Get the length of the data source
    return this.dataSource ? this.dataSource.data.length : 0;
  }
}
