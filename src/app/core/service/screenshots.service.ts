import { Injectable } from '@angular/core';
import html2canvas from 'html2canvas';


@Injectable({
  providedIn: 'root'
})
export class ScreenshotsService {
  constructor() { }

  printTitle;
  // 下载
  public download(element, fileName): void {

    html2canvas(document.querySelector(element)).then(canvas => {

      var img = canvas.toDataURL("image/png");

      let a = document.createElement("a");

      a.href = img;

      a.download = fileName + ".png";

      document.body.appendChild(a);

      a.click();

      a.remove();

    });
  }

  // 打印
  public print(element): void {

    let title = this.printTitle;

    var printWindow = window.open();

    html2canvas(document.querySelector(element)).then(canvas => {

      var compress = document.createElement('canvas');

      // change the image size

      compress.width = canvas.width;

      compress.height = canvas.height;

      var imageStr = canvas.toDataURL("image/png");

      var image = new Image();

      image.src = imageStr;

      image.onload = function () {

        compress.getContext("2d").drawImage(image, 0, 0, compress.width, compress.height);

        var imgString = compress.toDataURL("image/png");

        var iframe = '<iframe src="' + imgString + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>'

        printWindow.document.open();

        printWindow.document.write("<head><title>" + title +"</title></head>");

        printWindow.document.write(iframe);

        printWindow.document.close();

        printWindow.onload = function() {

          printWindow.print();

        };

        printWindow.focus();

      }

    });
  }

  // 截图
  screenshots(element, appendElement) {
    console.log(window.screen.availWidth);

    html2canvas(document.querySelector(element), {
      backgroundColor: null,   //设置截图的背景色
　　　　useCORS: true, // 如果截图的内容里有图片,可能会有跨域的情况,加上这个参数,解决文件跨域问题
      allowTaint: false, //允许跨域（图片跨域相关）
      // width: window.screen.availWidth,     //显示的canvas窗口的宽度
      // height: window.screen.availHeight,    //显示的canvas窗口的高度
      // windowWidth: document.body.scrollWidth,   // 获取X轴方向滚动条中的内容
      // windowHeight: document.body.scrollHeight,   // 获取Y轴方向滚动条中的内容
      // x: 0,   // 页面在X轴上没有滚动，故设为0
      // y: window.pageYOffset,   // 页面在垂直方向的滚动距离
      // taintTest: true, //是否在渲染前测试图片
    }).then(canvas => {
      let url = canvas.toDataURL('image/png')
      // document.body.appendChild(canvas);  // 直接使用canvas
      document.querySelector(appendElement).appendChild(canvas);
      // this.htmlUrl = url
      // var imgUrl = canvas.toDataURL("image/png"); // 将canvas转换成img的src流
      // var imgUrl = canvas.toDataURL('image/png', 1); // 此方法可以设置截图质量0-1





      // 目前，Data URI scheme支持的类型有：
      // data:,文本数据
      // data:text/plain,文本数据
      // data:text/html,HTML代码
      // data:text/html;base64,base64编码的HTML代码
      // data:text/css,CSS代码
      // data:text/css;base64,base64编码的CSS代码
      // data:text/javascript,Javascript代码
      // data:text/javascript;base64,base64编码的Javascript代码
      // data:image/gif;base64,base64编码的gif图片数据
      // data:image/png;base64,base64编码的png图片数据
      // data:image/jpeg;base64,base64编码的jpeg图片数据
      // data:image/x-icon;base64,base64编码的icon图片数据
  });
  }
}
