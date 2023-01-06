import { MdDirectionsBike } from "react-icons/md";
import { GiWeightLiftingUp } from "react-icons/gi";
import { GoZap } from "react-icons/go";
import { FaRegGrinBeamSweat } from "react-icons/fa";
import { BiDumbbell } from "react-icons/bi";
import { Avatar } from "@chakra-ui/react";

export const AvatarIcons = {
  ride45: (
    <Avatar
      size="lg"
      bg="green.300"
      icon={<MdDirectionsBike fontSize="2rem" fill="blue.500" />}
    />
  ),
  strength: (
    <Avatar
      size="lg"
      bg="yellow.300"
      icon={<BiDumbbell fontSize="2rem" fill="blue.500" />}
    />
  ),
  "strength&cardio": (
    <Avatar
      size="lg"
      bg="orange.300"
      icon={<GoZap fontSize="2rem" fill="orange.300" />}
    />
  ),
  hiit: (
    <Avatar
      size="lg"
      bg="red.300"
      icon={<FaRegGrinBeamSweat fontSize="2rem" fill="yellow.900" />}
    />
  ),
  default: (
    <Avatar
      size="lg"
      bg="purple.300"
      icon={<GiWeightLiftingUp fontSize="2rem" fill="blue.500" />}
    />
  ),
};
