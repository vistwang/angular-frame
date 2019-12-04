import { Component, OnInit } from '@angular/core';
import { SocketService } from "@web-core";

@Component({
  selector: 'app-socket',
  templateUrl: './socket.component.html',
  styleUrls: ['./socket.component.css']
})
export class SocketComponent implements OnInit {

  constructor(private socketService: SocketService) { }
  socket;
  ngOnInit() {
    this.socket = this.socketService.getSocket();

    setTimeout(() => {
      this.socket.emit('events', 'hello socket');
    }, 2000);
  }

}
