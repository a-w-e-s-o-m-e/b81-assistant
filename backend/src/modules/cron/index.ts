import { CronJob } from "cron";
import { authenticate } from "../api/auth";
import { fetchEvents } from "../api/fetchEvents";

export const initCron = () => {
  // every 1 minute
  const fetchCron = new CronJob("* * * * *", async () => {
    await fetchEvents();
  });
  // every day at 8am refresh the token
  const authenticateCron = new CronJob("0 8 * * *", async () => {
    await authenticate();
  });

  fetchCron.start();
  authenticateCron.start();
};
