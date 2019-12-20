import { Component, OnInit } from '@angular/core';

interface Lengthwise {
  length: number;
}
// 泛型接口
interface CreateArrayFunc {
  <T>(length: number, value: T): Array<T>;
}
@Component({
  selector: 'app-async-await',
  templateUrl: './async-await.component.html',
  styleUrls: ['./async-await.component.scss']
})
export class AsyncAwaitComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('ngOnInit start');

    this.getJson();

    console.log('ngOnInit end');

    this.jiekou<Lengthwise, number>('小米', 10);

    console.log(this.removeDuplicates([1,1,3]));

  }

  jiekou<T extends Lengthwise , U>(name: T, age: U): Array<T> {
    console.log({name, age});
    return [name]

  }

  removeDuplicates(nums) {
    if(Array.isArray(nums)){
        const xxx = [];
        return nums.filter((item) => {
            if(xxx.includes(item)){
              return false;
            } else {
                xxx.push(item);
                return true;
            }
        });
    }else{
        return []
    }
  };

  async getJson() {
    console.log(111);
    const xxx = await new Promise((resolve) => {
      console.log(222);
      setTimeout(resolve, 0, 333)}).then((data) => {
      console.log(data);
    }).then(() => {
      console.log(444);
      return new Promise((resolve, reject) => {
        setTimeout(resolve, 0, 555)});
    }).then((data) => {
      console.log(data);
    }).then((data) => {
      console.log(data);
    })

    console.log(xxx);

    await new Promise((resolve, reject) => {
      console.log(777);
      resolve();
    }).then(() => {
      console.log(888);
    })

    await setTimeout(() => {
      console.log(999);
    });
    console.log(1010);
  }

}
