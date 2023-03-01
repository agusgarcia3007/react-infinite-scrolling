import { lazy } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Loader, Title } from "./components";
import { useGetCharacters } from "./hooks/useGetCharacters";
import Container from "./layouts/Container";
const Card = lazy(() => import("./components/Card"));

const App = () => {
  const { characters, error, fetchNextPage, hasNextPage, status } =
    useGetCharacters();

  if (status === "error") return <h4>Ups!, {`${error}` as string}</h4>;

  return (
    <>
      <Container>
        <Title label="Rick and Morty Infinite Scroll" />
        <InfiniteScroll
          dataLength={characters ? characters.results.length : 0}
          next={() => fetchNextPage()}
          hasMore={!!hasNextPage}
          loader={<Loader />}
        >
          <div className="w-full gap-2 sm:gap-6 overflow-x-hidden  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
            {characters?.results.map((character) => (
              <Card
                key={character.id}
                created={character.created}
                id={character.id}
                name={character.name}
                image={character.image}
                status={character.status}
                species={character.species}
                location={character.location}
              />
            ))}
          </div>
        </InfiniteScroll>
      </Container>
    </>
  );
};

export default App;
