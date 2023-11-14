import { AnyRegularMessageContent, WAMessage } from "@whiskeysockets/baileys";

type TMessageSend = string | AnyRegularMessageContent;

export class Message {
  constructor(m: WAMessage) {}

  get author() {
    return null;
  }

  reply(message: TMessageSend) {}
}
