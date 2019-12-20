import { Component, OnInit } from '@angular/core';
import { SocketService } from "@web-core";

@Component({
  selector: 'app-socket',
  templateUrl: './socket.component.html',
  styleUrls: ['./socket.component.css']
})
export class SocketComponent implements OnInit {

  constructor(private socketService: SocketService) { }
  socketWeb;
  socketMobile;
  ngOnInit() {
    this.socketWeb = this.socketService.getSocket('web');
    this.socketMobile = this.socketService.getSocket('mobile');
    setTimeout(() => {
      this.socketWeb.emit('events', 'hello socketWeb', (data) => {
        console.log(data);
      });
    }, 2000);

    this.socketWeb.on('demo', (data) => {
      console.log(data);

    })
  }

  sendMessage() {
    this.socketWeb.emit('events', 'sendMessage', (data) => {
      console.log(data);
    });
  }

  webConnect() {
  }

  mobileConnect() {
  }

}
