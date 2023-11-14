import { TCommand } from "../../utils/command.type";

const command: TCommand = {
  name: "help",
  description: "Comando de ajuda, use caso você queira ver algum comando",
  aliases: ["ajuda", "?", "h"],
  run: async (client, message, args) => {
    message.reply("Teste");
  },
};

export default command;
