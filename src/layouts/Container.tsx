import { Footer, Header } from "../components";
import { useGetCharacters } from "../hooks/useGetCharacters";
import { useGetEpisodes } from "../hooks/useGetEpisodes";
import { useGetLocations } from "../hooks/useGetLocations";

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  const { characters } = useGetCharacters();
  const { episodes } = useGetEpisodes();
  const { locations } = useGetLocations();

  return (
    <>
      <Header />
      <main className="w-screen min-h-screen bg-darkBackground text-light p-3 sm:p-6 flex flex-col justify-center">
        {children}
      </main>
      <Footer
        characters={characters?.info?.count!}
        episodes={episodes?.info?.count!}
        locations={locations?.info?.count!}
        serverStatus={characters && episodes && locations ? true : false}
      />
    </>
  );
};

export default Container;
