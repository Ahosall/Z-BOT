import { WASocket } from "@whiskeysockets/baileys";
import { Message } from "./message.builder";

export type TCommand = {
  name: String;
  description: String;
  aliases: String[];
  run: (client: WASocket, message: Message, args?: String[]) => Promise<void>;
};
