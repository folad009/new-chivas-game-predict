import cron from "node-cron";
import { archiveFinishedGames } from "./archived-finished-games";



cron.schedule("* * * * *", async () => {
  console.log("Running daily archive job...");
  await archiveFinishedGames();
});
