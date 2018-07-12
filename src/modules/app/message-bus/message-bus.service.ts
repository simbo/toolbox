import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { MessageBusMessage } from './message-bus-message.interface';
import { MessageBusChannel } from './message-bus-channel.enum';

@Injectable({
  providedIn: 'root'
})
export class MessageBusService {

  public readonly bus: Subject<MessageBusMessage>;

  constructor() {
    this.bus = new Subject<MessageBusMessage>();
  }

  public push(channel: MessageBusChannel, data?: any): void {
    this.bus.next({channel, data});
  }

  public channel(
    channels: MessageBusChannel | MessageBusChannel[]
  ): Observable<any> {
    if (!Array.isArray(channels)) {
      channels = [channels];
    }
    return this.bus.pipe(
      filter(
        (msg) => (channels as MessageBusChannel[]).indexOf(msg.channel) !== -1
      ),
      map((msg) => msg.data)
    );
  }

}
