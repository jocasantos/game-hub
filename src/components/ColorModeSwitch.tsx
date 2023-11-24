import { HStack, Text, useColorMode, Switch } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text>{colorMode === "light" ? "Dark" : "Light"}</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
