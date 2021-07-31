import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  isAllowServer: boolean = false;
  serverName: string = '';
  serverCreationStatus = '';
  serverCreated = false;
  servers = ['Testserveer', 'Testserver 2'];

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.isAllowServer = true;
    }, 2000);
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server is been created';
    this.servers.push(this.serverName);
    this.serverName = '';
    this.serverCreated = true;
  }
}
