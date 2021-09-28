import { Component, OnInit } from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Label} from 'ng2-charts';
import {PurchaseService} from '../../../shared/controller/purchase.service';
import {Purchase} from '../../../entity/Purchase';

@Component({
  selector: 'app-product-revenue-graph',
  templateUrl: './product-revenue-graph.component.html',
  styleUrls: ['./product-revenue-graph.component.css']
})
export class ProductRevenueGraphComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = false;

  public barChartData: ChartDataSets[] = [
    { data: [], label: ''}
  ];

  // Data
  purchases: Purchase[];
  typeRevenue = new Map();

  constructor(public purchaseService: PurchaseService) {
    this.getAllPurchases();
  }

  ngOnInit(): void {
  }

  getAllPurchases(): void {
    this.purchaseService.getAllPurchases()
        .subscribe(res => {
          this.purchases = res;
          this.orderRevenueByPurchaseType();
        });
  }

  orderRevenueByPurchaseType(): void{
    this.purchases.forEach(p => {
      let i = 0;
      p.itemType.forEach(t => {
        if (!this.typeRevenue.get(t)) { this.typeRevenue.set(t, 0); }
        this.typeRevenue.set(t, this.typeRevenue.get(t) + parseInt(p.itemPrice[i]));
        i++;
      });
    });
    this.setUpChart();
  }

  setUpChart(): void {
    this.typeRevenue.forEach((v, k) => {
      this.barChartLabels.push(k);
      this.barChartData[0].data.push(v);
    });
  }

}
