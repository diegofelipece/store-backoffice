import { Component, OnInit } from '@angular/core';

import { SingleDataSet, Label } from 'ng2-charts';
import { ChartType } from 'chart.js';
import { CategoriesService } from '../categories.service';
import { Category } from '../category';

@Component({
  selector: 'app-categories-chart',
  templateUrl: './categories-chart.component.html',
  styleUrls: ['./categories-chart.component.scss']
})
export class CategoriesChartComponent implements OnInit {

  public labels: Label[];
  public data: SingleDataSet;
  public enableLegend = true;

  public chartType: ChartType = 'polarArea';

  public dataFetched = false;
  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.categoriesService.getCategories().subscribe(categories => {
      this.setChartValues(categories);
    });
  }

  setChartValues(categories: Category[]) {
    this.labels = categories.map(({ name }) => name );
    this.data = categories.map(({ productsCount }) => productsCount );

    this.dataFetched = true;
  }
}
