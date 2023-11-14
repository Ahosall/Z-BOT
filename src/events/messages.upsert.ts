import { MessageUpsertType, WAMessage } from "@whiskeysockets/baileys";

type TMessage = {
  messages: WAMessage[];
  type: MessageUpsertType;
};

export default {
  run: async ({ messages, type }: TMessage) => {
    console.log("Salve");
  },
};
