import NodeCache from "node-cache";
import { CachedEventObject } from "./types";

const eventsCache = new NodeCache();
const KEY = 'events';

export const setEventsCache = (events: CachedEventObject) => {
  eventsCache.set(KEY, events)
}

export const getEventsCache = () => {
  const events = eventsCache.get(KEY);
  if (!events){
      return {data: [], total: 0}
  }

  return events
}
