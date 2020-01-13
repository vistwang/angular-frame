import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit {

  constructor() { }

  items = [4,7,2,1,9,5,6,0,8,3];
  items2 = [4,7,2,1,9,5,6,0,8,3];
  items3 = [4,7,2,1,9,5,6,0,8,3];

  ngOnInit() {
  }

  // 排序算法稳定不稳定的决定因素是： 对相同值的元素的相对位置造成改变，改变则不稳定

  paixu1() {
    // 冒泡排序
    for (let i = 0; i < this.items.length-1; i++) {
      // 第一层遍历是为了整个都执行一边
      for (let j = 0; j < this.items.length-1-i; j++) {
        // 第二层遍历为了 找出相邻的最大值
        if(this.items[j] > this.items[j+1]) {
          let temp = this.items[j];
          this.items[j] = this.items[j+1];
          this.items[j+1] = temp;
        }
      }
    }
  }
  paixu2() {
    // 选择排序 不稳定
    let temp, minIndex;
    for (let i = 0; i < this.items2.length - 1; i++) {
      minIndex = i;
      for (let j = i+1; j < this.items2.length; j++) {
        if(this.items2[j] < this.items2[minIndex]) {
          minIndex = j;
        }
      }

      temp = this.items2[i];
      this.items2[i] = this.items2[minIndex];
      this.items2[minIndex] = temp;
    }
  }
  paixu3() {
    // 快速排序
    quickSort(this.items3);
    function quickSort(arr, left?, right?) {
      var len = arr.length,
          partitionIndex,
          left: any = typeof left != 'number'? 0 : left,
          right: any = typeof right != 'number'? len - 1 : right;

      if(left < right) {
          partitionIndex = partition(arr, left, right);
          quickSort(arr, left, partitionIndex-1);
          quickSort(arr, partitionIndex+1, right);
      }
      return arr;
    }

    function partition(arr, left ,right) {     // 分区操作
        var pivot = left,                      // 设定基准值（pivot）
            index = pivot + 1;
        for(var i = index; i <= right; i++) {
            if(arr[i] < arr[pivot]) {
                swap(arr, i, index);
                index++;
            }
        }
        swap(arr, pivot, index - 1);
        return index-1;
    }

    function swap(arr, i, j) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
  }

}
