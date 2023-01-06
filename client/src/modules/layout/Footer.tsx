import React from "react";
import { Box, Center, Text } from "@chakra-ui/react";
import { format } from "timeago.js";

export const Footer: React.FC<{ updatedAt: number }> = ({ updatedAt }) => (
  <Box w="100%" px={10} h="20px" position={"fixed"} bottom={"50px"}>
    <Center>
      <Text
        fontSize="20"
        color={"white"}
        bg="rgba(0,0,0,0.2)"
        opacity={0.5}
        transition={".5s"}
        _hover={{ bg: "rgba(0,0,0,0.6)", transition: "0.5s", opacity: 1 }}
        px={6}
        py={3}
        borderRadius={20}
      >
        Updated {format(new Date(updatedAt))}
      </Text>
    </Center>
  </Box>
);
