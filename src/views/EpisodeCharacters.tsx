import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Card, Title } from "../components";
import Container from "../layouts/Container";
import { Result } from "../types";

const EpisodeCharacters = () => {
  const { pathname } = useLocation();
  const episodeId = pathname.split("/")[2];
  const [characterList, setCharacterList] = useState<Result[]>([]);

  const fetcher = () =>
    fetch(`${import.meta.env.VITE_BASE_URL}/episode/${episodeId}`).then((res) =>
      res.json()
    );

  const { data } = useQuery([episodeId], fetcher);

  const { episode, characters } = data;

  const getCharacterList = async () => {
    const characterPromises = characters.map((character: string) => {
      return fetch(character).then((res) => res.json());
    });

    const results = await Promise.all(characterPromises);

    setCharacterList(results);

    return results;
  };

  useEffect(() => {
    getCharacterList();
  }, []);

  return (
    <Container>
      <Title label={`${episode} Episode Characters`} />
      <p className="w-full text-center mb-3 text-gray-400">
        {characters.length} characters
      </p>
      <div className="w-full gap-2 sm:gap-6 overflow-x-hidden  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
        {characterList?.map((character) => (
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
    </Container>
  );
};

export default EpisodeCharacters;
