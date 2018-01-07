import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../layouts/shared-service';


@Component({
  selector: 'page-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class PageAboutusComponent implements OnInit {
  pageTitle: string = 'aboutus';
  breadcrumb = [{title: 'aboutus'}];

  constructor( private _sharedService: SharedService ) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {}

  // lineChart
  public lineChartData: any[] = [
    {
      data: [30, 42, 46, 51, 65, 73, 80],
      label: 'Users',
      borderWidth: 1,
      pointRadius: 1
    },
    {
      data: [42, 43, 52, 47, 65, 70, 79],
      label: 'Pages',
      borderWidth: 1,
      pointRadius: 1
    },
    {
      data: [51, 48, 45, 56, 61, 69, 67],
      label: 'Visits',
      borderWidth: 1,
      pointRadius: 1
    }
  ];
  public lineChartLabels: any[] = [
    'Mon.',
    'Tue.',
    'Wed.',
    'Thu.',
    'Fri.',
    'Sat.',
    'Sun.'
  ];
  public lineChartOptions: any = {
    responsiveAnimationDuration: 500,
    responsive: true,
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        }
      }],
      yAxes: [{
        gridLines: {
          display: true
        },
        ticks: {
          beginAtZero: true
        }
      }],
    }
  };
  public lineChartColors: any[] = [
    {
      backgroundColor: 'rgba(93,173,224,0.2)',
      borderColor: '#5dade0',
      pointBackgroundColor: '#5dade0',
      pointBorderColor: '#0e7cc5',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#000'
    },
    {
      backgroundColor: 'rgba(255,140,0,0.2)',
      borderColor: '#ff8c00',
      pointBackgroundColor: '#ff8c00',
      pointBorderColor: '#FF630B',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#000'
    },
    {
      backgroundColor: 'rgba(220,20,60,0.2)',
      borderColor: '#dc143c',
      pointBackgroundColor: '#dc143c',
      pointBorderColor: '#7E2303',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#000'
    }
  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';
}
