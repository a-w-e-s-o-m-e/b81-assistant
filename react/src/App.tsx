import React, { useEffect, useState } from "react";
import axios from "axios";
import { DarkMode, Spinner, VStack, Text } from "@chakra-ui/react";
import { EventCard } from "./modules/events/EventCard";
import { Header } from "./modules/layout/Header";
import { Footer } from "./modules/layout/Footer";
import { Data } from "./modules/types";

export const App: React.FC = () => {
  const [events, setEvents] = useState<Data>();

  const fetchData = async () => {
    const response = await axios.get<Data>(process.env.REACT_APP_API_URL);
    setEvents(response.data);
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 10 * 1000);
    return () => clearInterval(interval);
  }, []);

  if (!events?.data) {
    return (
      <VStack py="2.5vh" h={{ base: "91vh", md: "100vh" }}>
        <Spinner />
        <Text>Fetching all the workouts</Text>
      </VStack>
    );
  }

  return (
    <DarkMode>
      <VStack py="2.5vh" h={{ base: "91vh", md: "100vh" }}>
        <VStack spacing={4} w={"100%"} px={2}>
          <Header total={events.total} />
          <VStack
            h={{ base: "60vh", md: "75vh" }}
            align="stretch"
            alignItems="center"
            spacing={4}
            overflow="auto"
            w={"100%"}
            px={2}
          >
            {events.data.map((event) => (
              <EventCard
                name={event.eventName}
                location={event.locationName}
                eventDate={event.date}
                maxPax={event.maxPax}
                currentPax={event.currentPax}
                coachName={event.coachName}
                kind={event.kind}
                id={event.id}
                key={event.id}
              />
            ))}
          </VStack>
        </VStack>
        <Footer updatedAt={events.updatedAt} />
      </VStack>
    </DarkMode>
  );
};
