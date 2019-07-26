import * as Highcharts from 'highcharts';

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

// declare var require: any;
// const Boost = require('highcharts/modules/boost');
// const noData = require('highcharts/modules/no-data-to-display');
// const More = require('highcharts/highcharts-more');

// Boost(Highcharts);
// noData(Highcharts);
// More(Highcharts);
// noData(Highcharts);

@Component({
  selector: 'app-demo-highcharts',
  templateUrl: './demo-highcharts.component.html',
  styleUrls: ['./demo-highcharts.component.scss']
})
export class DemoHighchartsComponent implements OnInit {

  constructor() { }

  @ViewChild('container', {
    static: true
  }) container: ElementRef;

  highcharts = Highcharts;

  options = {
    chart: {
      type: 'bar',                       // 指定图表的类型，默认是折线图（line）
      renderTo: this.container.nativeElement  // 或 document.getElementById('container')
    },
    title: {
      text: '我的第一个图表'                 // 标题
    },
    xAxis: {
      categories: ['苹果', '香蕉', '橙子']   // x 轴分类
    },
    yAxis: {
      title: {
        text: '吃水果个数'                // y 轴标题
      }
    },
    series: [{                              // 数据列
      name: '小明',                        // 数据列名
      data: [1, 0, 4]                     // 数据
    }, {
      name: '小红',
      data: [5, 7, 3]
    }]
  };

  options2 = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: '2018 年浏览器市场份额'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false
        },
        showInLegend: true
      }
    },
    series: [{
      name: 'Brands',
      colorByPoint: true,
      data: [{
        name: 'Chrome',
        y: 61.41,
        sliced: true,
        selected: true
      }, {
        name: 'Internet Explorer',
        y: 11.84
      }, {
        name: 'Firefox',
        y: 10.85
      }, {
        name: 'Edge',
        y: 4.67
      }, {
        name: 'Safari',
        y: 4.18
      }, {
        name: 'Other',
        y: 7.05
      }]
    }]
  };


  ngOnInit() {

    // this.highcharts.chart('container', this.options);

    // const myCharts = Highcharts.chart(options);
  }

}
