import * as THREE from 'three';

import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-demo-threejs',
  templateUrl: './demo-threejs.component.html',
  styleUrls: ['./demo-threejs.component.scss']
})
export class DemoThreejsComponent implements OnInit, AfterViewInit {
  // 提到 Three.js，就必须说一下 OpenGL 和 WebGL。
  // OpenGL 大概许多人都有所听闻，它是最常用的跨平台图形处理开源库。
  // WebGL 就是基于 OpenGL 设计的面向 web 的 3D 图形标准，它提供了一系列 JavaScript API，通过这些 API 进行图形渲染，系统硬件会加速 3D 渲染，从而获得较高性能。
  // 而 Three.js 是 JavaScript 编写的 WebGL 第三方库，通过对 WebGL 接口的封装与简化而形成的一个易用的图形库。 https://zhuanlan.zhihu.com/p/27296011

  /* 在Three.js中，要渲染物体到网页中:
  我们需要3个组建：场景（scene）、相机（camera）和渲染器（renderer）。有了这三样东西，才能将物体渲染到网页中去。 */


/*
1、在Threejs中场景就只有一种，用THREE.Scene来表示，要构件一个场景也很简单，只要new一个对象就可以了，代码如下：
var scene = new THREE.Scene();
场景是所有物体的容器，如果要显示一个苹果，就需要将苹果对象加入场景中。

2、另一个组建是相机，相机决定了场景中那个角度的景色会显示出来。相机就像人的眼睛一样，人站在不同位置，抬头或者低头都能够看到不同的景色。
场景只有一种，但是相机却又很多种。和现实中一样，不同的相机确定了呈相的各个方面。
比如有的相机适合人像，有的相机适合风景，专业的摄影师根据实际用途不一样，选择不同的相机。对程序员来说，只要设置不同的相机参数，就能够让相机产生不一样的效果。

3、渲染器决定了渲染的结果应该画在页面的什么元素上面，并且以怎样的方式来绘制。
 */
  @ViewChild('rendererContainer', {
    static: true
  }) rendererContainer: ElementRef;

  renderer = new THREE.WebGLRenderer();
  scene = null;
  camera = null;
  mesh = null;

  constructor() {

  }

  ngOnInit() {
    this.scene = new THREE.Scene(); // 场景
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000); // 相机
    this.camera.position.z = 1000;
    const geometry = new THREE.BoxGeometry(200, 200, 200);
    const material = new THREE.MeshBasicMaterial({color: 0xff0000, wireframe: true});
    this.mesh = new THREE.Mesh(geometry, material);
    this.scene.add(this.mesh);







    // var renderer;
    // function initRender() {
    //     renderer = new THREE.WebGLRenderer({antialias:true});
    //     renderer.setSize(window.innerWidth, window.innerHeight);
    //     document.body.appendChild(renderer.domElement);
    // }

    // var camera;
    // function initCamera() {
    //     camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 1, 10000);
    //     camera.position.set(0, 0, 600);
    // }

    // var scene;
    // function initScene() {
    //     scene = new THREE.Scene();
    // }

    // var light;
    // function initLight() {
    //     scene.add(new THREE.AmbientLight(0x404040));

    //     light = new THREE.DirectionalLight(0xffffff);
    //     light.position.set(1,1,1);
    //     scene.add(light);
    // }

    // function initModel() {
    //     generatePoints();
    // }

    // //生成模型调用的方法
    // function generatePoints() {
    //     // 随机生成一组顶点
    //     var points = [];
    //     for (var i = 0; i < 20; i++) {
    //         //xyz轴的坐标点的位置会随机生成在+-150以内
    //         var randomX = -150 + Math.round(Math.random() * 300);
    //         var randomY = -150 + Math.round(Math.random() * 300);
    //         var randomZ = -150 + Math.round(Math.random() * 300);

    //         //创建一个坐标点并添加到数组当中
    //         points.push(new THREE.Vector3(randomX, randomY, randomZ));
    //     }

    //     //声明一个存放所有点的网格对象
    //     spGroup = new THREE.Object3D();
    //     //声明一个网格基础材质
    //     var material = new THREE.MeshBasicMaterial({color: 0xff0000, transparent: false});
    //     //遍历数组生成小球点并添加到对象当中
    //     points.forEach(function (point) {

    //         var spGeom = new THREE.SphereGeometry(2);
    //         var spMesh = new THREE.Mesh(spGeom, material);
    //         spMesh.position.copy(point); //将当前小球的位置设置为当前点的坐标
    //         scene.add(spMesh);
    //     });
    //     // 将存放所有点的对象添加到场景当中
    //     scene.add(spGroup);

    //     // 使用这些点实例化一个THREE.ConvexGeometry几何体对象
    //     var hullGeometry = new THREE.ConvexGeometry(points);
    //     //生成模型
    //     hullMesh = createMesh(hullGeometry);
    //     //添加到场景
    //     scene.add(hullMesh);
    // }

    // function createMesh(geom) {

    //     // 实例化一个绿色的半透明的材质
    //     var meshMaterial = new THREE.MeshBasicMaterial({color: 0x00ff00, transparent: true, opacity: 0.2});
    //     meshMaterial.side = THREE.DoubleSide; //将材质设置成正面反面都可见
    //     var wireFrameMat = new THREE.MeshBasicMaterial();
    //     wireFrameMat.wireframe = true; //把材质渲染成线框

    //     // 将两种材质都赋给几何体
    //     var mesh = THREE.SceneUtils.createMultiMaterialObject(geom, [meshMaterial, wireFrameMat]);

    //     return mesh;
    // }

    // //初始化性能插件
    // var stats;
    // function initStats() {
    //     stats = new Stats();
    //     document.body.appendChild(stats.dom);
    // }

    // //用户交互插件 鼠标左键按住旋转，右键按住平移，滚轮缩放
    // var controls;
    // function initControls() {

    //     controls = new THREE.OrbitControls( camera, renderer.domElement );

    //     // 如果使用animate方法时，将此函数删除
    //     //controls.addEventListener( 'change', render );
    //     // 使动画循环使用时阻尼或自转 意思是否有惯性
    //     controls.enableDamping = true;
    //     //动态阻尼系数 就是鼠标拖拽旋转灵敏度
    //     //controls.dampingFactor = 0.25;
    //     //是否可以缩放
    //     controls.enableZoom = true;
    //     //是否自动旋转
    //     controls.autoRotate = true;
    //     //设置相机距离原点的最远距离
    //     controls.minDistance  = 200;
    //     //设置相机距离原点的最远距离
    //     controls.maxDistance  = 1600;
    //     //是否开启右键拖拽
    //     controls.enablePan = true;
    // }

    // function render() {
    //     renderer.render( scene, camera );
    // }

    // //窗口变动触发的函数
    // function onWindowResize() {
    //     camera.aspect = window.innerWidth / window.innerHeight;
    //     camera.updateProjectionMatrix();
    //     render();
    //     renderer.setSize( window.innerWidth, window.innerHeight );

    // }

    // function animate() {
    //     //更新控制器
    //     controls.update();
    //     render();

    //     //更新性能插件
    //     stats.update();
    //     requestAnimationFrame(animate);
    // }

    // function draw() {
    //     initRender();
    //     initScene();
    //     initCamera();
    //     initLight();
    //     initModel();
    //     initControls();
    //     initStats();

    //     animate();
    //     window.onresize = onWindowResize;
    // }








  }

  ngAfterViewInit() {
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
      this.animate();
  }

  animate() {
    // 这个函数就是让浏览器去执行一次参数中的函数，这样通过上面render中调用requestAnimationFrame()函数，
    // requestAnimationFrame()函数又让rander()再执行一次，就形成了我们通常所说的游戏循环了。
      window.requestAnimationFrame(() => this.animate());
      this.mesh.rotation.x += 0.01;
      this.mesh.rotation.y += 0.02;
      this.renderer.render(this.scene, this.camera);
  }
}
