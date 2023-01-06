import React from "react";
import { Box, Button, Card, Flex, Icon, Link, Text } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { AvatarIcons } from "./AvatarIcons";
import { AiOutlineUser } from "react-icons/ai";

export const EventCard: React.FC<{
  name: string;
  location: string;
  eventDate: Date;
  coachName: string;
  maxPax: number;
  currentPax: number;
  kind: string;
  id: string;
}> = ({
  name,
  location,
  eventDate,
  coachName,
  maxPax,
  currentPax,
  kind,
  id,
}) => {
  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const date = new Date(eventDate);
  const dateString = `${weekday[date.getDay()]} ${date.toLocaleString()}`;
  const availability = +maxPax - +currentPax;

  const avatar = Object.keys(AvatarIcons).includes(kind)
    ? // @ts-ignore
      AvatarIcons[kind]
    : AvatarIcons.default;

  return (
    <Card maxW="550px" w="100%" key={id}>
      <Flex
        px={10}
        py={5}
        alignItems="center"
        flexDirection={{ base: "column", md: "row" }}
        gap={{ base: 5, md: 0 }}
      >
        <Box>{avatar}</Box>
        <Box px={10} w={300}>
          <Text fontSize="md" textAlign={{ base: "center", md: "left" }}>
            {location}
          </Text>
          <Text
            fontSize="2xl"
            fontWeight="bold"
            textAlign={{ base: "center", md: "left" }}
          >
            {name}
          </Text>
          <Text fontSize="md" textAlign={{ base: "center", md: "left" }}>
            {dateString}
          </Text>
        </Box>
        <Flex flexDirection={"column"} gap={2} alignItems="center">
          <Flex>
            <Icon
              as={AiOutlineUser}
              marginRight={"2"}
              verticalAlign={"center"}
            />
            <Text textAlign={"center"} fontSize={"xs"}>
              {coachName}
            </Text>
          </Flex>
          {/* TODO : Fix underline */}
          <Link
            href={`https://app.beat81.com/de/en/workouts/${id}`}
            isExternal
            textDecoration="none"
          >
            <Button>
              Book
              <ExternalLinkIcon marginLeft={"2"} />
            </Button>
          </Link>
          <Text
            fontSize={"xs"}
            color={availability > 0 ? `green.200` : "red.200"}
          >
            {availability > 0 ? `${availability} free spots` : "Join waitlist"}
          </Text>
        </Flex>
      </Flex>
    </Card>
  );
};
