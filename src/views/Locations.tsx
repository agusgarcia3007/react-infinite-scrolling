import { Title, Loader, Card } from "../components";
import { useGetLocations } from "../hooks/useGetLocations";
import Container from "../layouts/Container";
import InfiniteScroll from "react-infinite-scroll-component";

const Locations = () => {
  const { locations, error, fetchNextPage, status, hasNextPage } =
    useGetLocations();

  if (status === "error") return <h4>Ups!, {`${error}` as string}</h4>;

  return (
    <Container>
      <Title label="Locations" />
      <InfiniteScroll
        dataLength={locations ? locations.results.length : 0}
        next={() => fetchNextPage()}
        hasMore={!!hasNextPage}
        loader={<Loader />}
      >
        <div className="w-full gap-2 sm:gap-6 overflow-x-hidden  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
          {locations?.results.map((location) => (
            <Card
              key={location.id}
              id={location.id}
              name={location.name}
              type={location.type}
              dimension={location.dimension}
              residents={location.residents}
              created={location.created}
            />
          ))}
        </div>
      </InfiniteScroll>
    </Container>
  );
};

export default Locations;
