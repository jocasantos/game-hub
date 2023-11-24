import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/Logo/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack pr={3} justifyContent={"space-between"}>
      <Image boxSize={"60px"} src={logo} />
      <Text>NavBar</Text>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
