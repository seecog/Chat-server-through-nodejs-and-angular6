
import * as io from 'socket.io-client';
import { Observable } from '../../../node_modules/rxjs';
export class ChatService{
private socket = io("http://localhost:3001");

sendMessage(data){
this.socket.emit('client_msg',data);
}

getMessage(){
    return new Observable((observer)=>{
        this.socket.on('server_reply',(res)=>{
observer.next(res)
        })
    })
}

joinGroup(data){
    this.socket.emit('user_join',data);
}

    
}