import * as io from "socket.io-client";

import { Injectable } from "@angular/core";
@Injectable({
  providedIn: "root"
})
export class SocketService {
  // var socketAgreement = 'https:';
  socketAgreement; // 获取当前协议 配置文件动态获取
  // toBeReturnSocket: SocketIOClient.Socket;
  toBeReturnSocket;
  socketTimeout;
  loginUrl;
  constructor() // private socket: Socket
  {}

  private getSocketUrl() {
    // 协议类型
    this.loginUrl = "http://localhost:3000";
    return {
      loginUrl: this.loginUrl
    };
  }

  getSocket() {
    if (this.toBeReturnSocket) {
      return this.toBeReturnSocket;
      // return this.socket;
    } else {
      const loginObject = this.getSocketUrl();
      this.toBeReturnSocket = io.connect(loginObject.loginUrl);
      return this.toBeReturnSocket;
    }
  }
}
