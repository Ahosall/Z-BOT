import { ConnectionState } from "@whiskeysockets/baileys";

export default {
  run: async (update: Partial<ConnectionState>) => {
    console.log("Salve");
  },
};
