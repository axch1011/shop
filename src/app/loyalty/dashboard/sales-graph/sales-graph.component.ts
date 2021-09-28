import {Component, OnInit, ViewChild} from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {BaseChartDirective, Color, Label} from 'ng2-charts';
import {AngularFirestore} from '@angular/fire/firestore';
import {Purchase} from '../../../entity/Purchase';
import {map} from 'rxjs/operators';
import {PurchaseService} from '../../../shared/controller/purchase.service';

@Component({
  selector: 'app-sales-graph',
  templateUrl: './sales-graph.component.html',
  styleUrls: ['./sales-graph.component.css']
})
export class SalesGraphComponent implements OnInit {

  public lineChartData: ChartDataSets[] = [
    { data: []},
  ];
  public lineChartLabels: Label[] = [];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{
        gridLines: {
          color: 'transparent'
        },
      }],
      yAxes: [{
        gridLines: {
          color: 'transparent'
        }
      }]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };
  public lineChartColors: Color[] = [
    { // grey
      backgroundColor: 'crimson',
      borderColor: 'whitesmoke',
      pointBackgroundColor: 'white',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = false;
  public lineChartType: ChartType = 'line';
  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  purchases: Purchase[];
  monthlyRevenue = new Map();

  constructor(public purchaseService: PurchaseService) {
    this.getAllPurchases();
  }

  ngOnInit(): void {
    this.getAllPurchases();
  }

  getAllPurchases(): void {
    this.purchaseService.getAllPurchases()
        .subscribe(res => {
          this.purchases = res;
          this.createStats();
        });
  }

  createStats(): void {
    this.purchases.forEach(p => {
      const date = new Date(p.creationDate.seconds * 1000);
      if (!this.monthlyRevenue.get(date.getMonth())) { this.monthlyRevenue.set(date.getMonth(), 0); }
      this.monthlyRevenue.set(date.getMonth(), this.monthlyRevenue.get(date.getMonth()) + parseFloat(String(p.price)));
      console.log(this.monthlyRevenue);
    });
    this.monthlyRevenue.forEach((v, k) => {
      this.lineChartLabels.push(k + '.2020');
      this.lineChartData[0].data.push(v);
    });
  }
}
