import { Component } from '@angular/core';
import { ChatService } from './providers/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private msg_arr : any[]=[]
private msg : string;
private user : string;
private group : string;
  constructor(private chatService : ChatService){
this.chatService.getMessage().subscribe(
(res)=>{
    this.msg_arr.push(res);
}

)
  }

  joinJava(group_name){
    this.group = group_name;
    this.chatService.joinGroup({user : this.user,group : group_name});
  }

  sendMessage(){
    console.log('The nessage is ',this.msg)
this.chatService.sendMessage({group :  this.group, user : this.user,msg : this.msg});
this.msg = '';

  }
}
