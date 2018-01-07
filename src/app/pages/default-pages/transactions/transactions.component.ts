import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../layouts/shared-service';
import { AmChartsService } from '@amcharts/amcharts3-angular';
import { User } from '../../../ni-components/ni-chat/user';
import { Message } from '../../../ni-components/ni-chat/message';
import { ApiService } from '../../../services/api.service';


const timelineData: any[] = [
  {
    'timeline': [
      {
        'date': '12 minutes ago',
        'content': `You <span class="text-info">recommended</span> Sem B.`,
        'pointColor': '#ea8080'
      },
      {
        'date': '37 minutes ago',
        'content': `You followed Sydney N.`,
        'pointColor': '#915035'
      },
      {
        'date': '2 hours ago',
        'content': `You <span class="text-danger">subscribed</span> to Harold Fuller`,
        'pointColor': '#B925FF'
      },
      {
        'date': '7 hours ago',
        'content': `You updated your profile picture`,
        'pointColor': '#C5CAE9'
      }
    ]
  }
];

@Component({
  selector: 'page-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class PageTransactionsComponent implements OnInit {
  pageTitle: string = 'transactions';
  timelineData: any[] = timelineData;
  breadcrumb = [{title: 'transactions'}];
  private chart: any;
  activeUser: User = {
    name: 'Amanda Li',
    lastSeen: 'last seen 10 minutes ago',
    avatar: 'assets/content/avatar-4.jpg'
  };

  constructor( private AmCharts: AmChartsService, private _sharedService: SharedService, private apiService: ApiService) {
    this._sharedService.emitChange(this.pageTitle);
    this.apiService.initHeaderGroup.next('');
  }

  ngOnInit() {
    this.chart = this.AmCharts.makeChart('amchart-1', {
      'type': 'pie',
      'theme': 'light',
      'dataProvider': [
        {
          'country': 'Lithuania',
          'litres': 501.9
        }, {
          'country': 'Czech Republic',
          'litres': 301.9
        }, {
          'country': 'Ireland',
          'litres': 201.1
        }, {
          'country': 'Germany',
          'litres': 165.8
        }, {
          'country': 'Australia',
          'litres': 139.9
        }, {
          'country': 'Austria',
          'litres': 128.3
        }, {
          'country': 'UK',
          'litres': 99
        }, {
          'country': 'Belgium',
          'litres': 60
        }, {
          'country': 'The Netherlands',
          'litres': 50
        }
      ],
      'pullOutRadius': 0,
      'labelRadius': -40,
      'valueField': 'litres',
      'titleField': 'country',
      'labelText': '[[litres]]',
      'balloon': {
        'fixedPosition': true
      }
    });

    this.chart = this.AmCharts.makeChart('amchart-2', {
      'type': 'pie',
      'theme': 'light',
      'dataProvider': [
        {
          'title': 'Chrome',
          'value': 70
        }, {
          'title': 'Firefox',
          'value': 15
        }, {
          'title': 'Opera',
          'value': 10
        }, {
          'title': 'Safari',
          'value': 12
        }, {
          'title': 'Edge',
          'value': 5
        }
      ],
      'titleField': 'title',
      'valueField': 'value',
      'labelRadius': -40,
      'radius': '46%',
      'innerRadius': '60%',
      'labelText': '[[title]]'
    });

    this.chart = this.AmCharts.makeChart('amchart-3', {
      'type': 'radar',
      'theme': 'light',
      'dataProvider': [
        {
          'country': 'Czech Republic',
          'litres': 156.9
        }, {
          'country': 'Ireland',
          'litres': 131.1
        }, {
          'country': 'Germany',
          'litres': 115.8
        }, {
          'country': 'Australia',
          'litres': 109.9
        }, {
          'country': 'Austria',
          'litres': 108.3
        }, {
          'country': 'UK',
          'litres': 99
        }
      ],
      'valueAxes': [ {
        'axisTitleOffset': 20,
        'minimum': 0,
        'axisAlpha': 0.15
      } ],
      'startDuration': 1,
      'graphs': [ {
        'balloonText': '[[value]] litres of beer per year',
        'bullet': 'round',
        'lineThickness': 2,
        'valueField': 'litres'
      } ],
      'categoryField': 'country'
    });
  }

  ngOnDestroy() {
    this.AmCharts.destroyChart(this.chart);
  }

  // Pie
  public pieChartLabels: string[] = [
    'Angular',
    'PHP',
    'HTML'
  ];
  public pieChartData: any[] = [
    300,
    500,
    100
  ];
  public pieChartColors: any[] = [
    {
      backgroundColor: [
        "#778391",
        "#5dade0",
        "#3c4e62"
      ],
    }
  ];
  public pieChartType: string = 'pie';
  public pieChartOptions: any = {
    elements: {
      arc : {
        borderWidth: 0
      }
    },
    tooltips: false
  };

  //Doughnut
  public doughnutChartLabels: string[] = [
    'Angular',
    'PHP',
    'HTML'
  ];
  public doughnutChartData: number[] = [
    350,
    450,
    100
  ];
  public doughnutChartColors: any[] = [
    {
      backgroundColor: [
        "#778391",
        "#ff8c00",
        "#3c4e62"
      ],
    }
  ];
  public doughnutChartType: string = 'doughnut';
  public doughnutChartOptions: any = {
    elements: {
      arc : {
        borderWidth: 0
      }
    },
    tooltips: false
  };

  // PolarArea
  public polarAreaChartLabels: string[] = [
    'Angular',
    'PHP',
    'HTML'
  ];
  public polarAreaChartData: number[] = [
    300,
    400,
    500
  ];
  public polarAreaChartColors: any[] = [
    {
      backgroundColor: [
        "#778391",
        "#dc143c",
        "#3c4e62"
      ],
    }
  ];
  public polarAreaChartType: string = 'polarArea';
  public polarAreaChartOptions: any = {
    elements: {
      arc : {
        borderWidth: 0
      }
    },
    tooltips: false
  };
}
