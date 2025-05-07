import { archiveFinishedGames } from "../cron/archived-finished-games.js";

async function run() {
  try {
    console.log("⏳ Running archive job...");
    await archiveFinishedGames();
    console.log("✅ Archive job completed successfully.");
    process.exit(0);
  } catch (err) {
    console.error("❌ Error running archive job:", err);
    process.exit(1);
  }
}

run();
