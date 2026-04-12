import { movePastGamesToArchive } from "../libs/archiveServices.js";

export async function archiveFinishedGames() {
  const result = await movePastGamesToArchive();
  console.log(`[ARCHIVE] Finished:`, result);
  return result;
}
