import { Footer } from "../components";
import { useGetCharacters } from "../hooks/useGetCharacters";
import { useGetInfo } from "../hooks/useGetInfo";

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  const { characters } = useGetCharacters();
  const { locations, episodes } = useGetInfo();

  return (
    <>
      <main className="w-screen min-h-screen bg-darkBackground text-light p-3 sm:p-6 flex flex-col justify-center">
        {children}
      </main>
      <Footer
        characters={characters?.info?.count!}
        episodes={episodes?.info?.count!}
        locations={locations.info?.count}
        serverStatus={characters && episodes && locations}
      />
    </>
  );
};

export default Container;
