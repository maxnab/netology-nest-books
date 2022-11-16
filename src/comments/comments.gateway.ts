import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WsResponse,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@WebSocketGateway({ cors: true, namespace: 'comments' })
export class CommentsGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('events')
  onEvent(): Observable<WsResponse<number>> {
    const event = 'events';
    const response = [1, 2, 3];
    return from(response).pipe(map((data) => ({ event, data })));
  }
}
