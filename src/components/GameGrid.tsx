import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import CardSkeleton from "./CardSkeleton";
import CardContainer from "./CardContainer";

const GameGrid = () => {
  const { data, error, isLoading } = useGames();

  const skeletons = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding={5}
        spacing={3}
      >
        {isLoading &&
          skeletons.map((s) => (
            <CardContainer>
              <CardSkeleton key={s} />
            </CardContainer>
          ))}
        {data.map((game) => (
          <CardContainer>
            <GameCard key={game.id} game={game}></GameCard>
          </CardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
