import { v4 as uuidv4 } from "uuid";

export const getConversationId = (): Promise<string> =>
  new Promise((resolve) => {
    resolve(uuidv4());
  });
