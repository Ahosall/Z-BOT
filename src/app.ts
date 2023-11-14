import {
  fetchLatestBaileysVersion,
  makeCacheableSignalKeyStore,
  makeWASocket,
  useMultiFileAuthState,
} from "@whiskeysockets/baileys";

import pino from "pino";

import { readdirSync } from "node:fs";
import { join } from "node:path";

require("dotenv").config();

(async () => {
  const { version } = await fetchLatestBaileysVersion();
  const { state } = await useMultiFileAuthState(process.cwd() + "/auth/");
  const logger = pino({ level: "silent" });

  const client = makeWASocket({
    version,
    auth: {
      creds: state.creds,
      keys: await makeCacheableSignalKeyStore(state.keys, logger as any),
    },
  });

  // Commands
  const cmdsPath = join(__dirname, "commands");
  readdirSync(cmdsPath).forEach((category) => {
    const ctgrPath = join(__dirname, `${cmdsPath}/${category}`);
    readdirSync(ctgrPath).forEach((command) => {
      const props = require(`${ctgrPath}/${command}`);

      // Lógica para colocar os comandos dentro do client
    });
  });
  // Events
})();
