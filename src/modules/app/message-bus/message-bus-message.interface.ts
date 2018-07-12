import { MessageBusChannel } from './message-bus-channel.enum';

export interface MessageBusMessage {
  channel: MessageBusChannel;
  data: any;
}
