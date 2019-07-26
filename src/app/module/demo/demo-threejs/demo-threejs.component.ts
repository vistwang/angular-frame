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
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
    this.camera.position.z = 1000;
    const geometry = new THREE.BoxGeometry(200, 200, 200);
    const material = new THREE.MeshBasicMaterial({color: 0xff0000, wireframe: true});
    this.mesh = new THREE.Mesh(geometry, material);
    this.scene.add(this.mesh);
  }

  ngAfterViewInit() {
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
      this.animate();
  }

  animate() {
      window.requestAnimationFrame(() => this.animate());
      this.mesh.rotation.x += 0.01;
      this.mesh.rotation.y += 0.02;
      this.renderer.render(this.scene, this.camera);
  }
}
