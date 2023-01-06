import { api } from "..";
import { user } from "../auth";
import { setEventsCache } from "./cache";
import { Data, SanitizedData } from "./types";

const sanitizeEvents = (data: Data[]) => {
  return data.map((el) => {
    const eventNameLC = el.event.type.name.toLowerCase();
    let kind = "default";
    switch (true) {
      case eventNameLC.includes("ride45"):
        kind = "ride45";
        break;

      case eventNameLC.includes("hiit"):
        kind = "hiit";
        break;

      case eventNameLC.includes("strength"):
        kind = "strength";
        break;

      case eventNameLC.includes("strength") && eventNameLC.includes("cardio"):
        kind = "strength&cardio";
        break;
    }

    return {
      id: el.event.id,
      eventName: el.event.type.name,
      locationName: el.event.location.name,
      coachName: el.event.coach.forename,
      date: el.event.date_begin,
      maxPax: +el.event.max_participants,
      currentPax: +el.event.current_participants_count,
      kind,
      // For debug
      // kind: ["ride45", "hiit", "strength", "strength&cardio", "default"][
      //   Math.floor(Math.random() * (5 - 0) + 0)
      // ],
    };
  });
};

const sortEvents = (data: SanitizedData[]) => {
  return data.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
};

export const fetchEvents = async () => {
  try {
    const foo = {
      user_id: user.userId,
      "$sort[event_date_begin]": 1,
      event_date_begin_gte: new Date().toISOString(),
      status_ne: "cancelled",
      $limit: 100,
      $skip: 0,
    };
    const response = await api.get(
      `/tickets`,
      {
        params: foo,
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${user.token}`,
        },
      }
    );

    const sanitizedData = sanitizeEvents(response.data.data);
    const sanitizedAndSorted = sortEvents(sanitizedData);
    response.data.data = sanitizedAndSorted;
    response.data.updatedAt = +new Date();

    setEventsCache(response.data);
  } catch (e) {
    console.log(e);
  }
};
