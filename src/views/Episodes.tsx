import InfiniteScroll from "react-infinite-scroll-component";
import { Card, Loader, Title } from "../components";
import { useGetEpisodes } from "../hooks/useGetEpisodes";
import Container from "../layouts/Container";

const Episodes = () => {
  const { episodes, fetchNextPage, error, status, hasNextPage } =
    useGetEpisodes();

  if (status === "error") return <h4>Ups!, {`${error}` as string}</h4>;

  return (
    <Container>
      <Title label="Episodes" />
      <InfiniteScroll
        dataLength={episodes ? episodes.results.length : 0}
        next={() => fetchNextPage()}
        hasMore={!!hasNextPage}
        loader={<Loader />}
      >
        <div className="w-full gap-2 sm:gap-6 overflow-x-hidden  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
          {episodes?.results.map((episode) => (
            <Card
              key={episode.id}
              created={episode.created}
              id={episode.id}
              name={episode.name}
              air_date={episode.air_date}
              episode={episode.episode}
              characters={episode.characters}
              url={episode.url}
            />
          ))}
        </div>
      </InfiniteScroll>
    </Container>
  );
};

export default Episodes;
