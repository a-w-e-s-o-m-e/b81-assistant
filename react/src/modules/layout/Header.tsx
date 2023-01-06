import React from "react";
import { Box, Card, Center, Text, Flex } from "@chakra-ui/react";

export const Header: React.FC<{ total: number }> = ({ total }) => (
  <Card maxW="550px" w="100%" px={0} py={5}>
    <Center>
      <Text fontSize="3xl" fontWeight="bold">
        💪 Workout Schedule
      </Text>
    </Center>
    <Center>
      <Flex>
        <Box>
          <Text fontSize="lg" fontWeight="bold">
            Workouts on schedule:
          </Text>
          <Text fontSize="md" textAlign="center">
            {total}
          </Text>
        </Box>
      </Flex>
    </Center>
  </Card>
);
