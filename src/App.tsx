import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      gridTemplateRows={"60px 1fr"}
      gridTemplateColumns={{
        base: "1fr",
        lg: "150px 1fr",
      }}
      h="800px"
      gap="1"
      color="WhiteAlpha 700"
    >
      <GridItem pl="2" area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem pl="2" area={"aside"}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem pl="5" area={"main"}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
