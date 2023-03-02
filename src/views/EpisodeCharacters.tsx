import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, Title } from "../components";
import Container from "../layouts/Container";
import { Result } from "../types";

const EpisodeCharacters = () => {
  const { pathname } = useLocation();
  const [characterList, setCharacterList] = useState<Result[]>([]);
  const navigate = useNavigate();
  const episodeId = pathname.split("/")[2];
  const route = pathname.includes("episodes") ? "episode" : "location";

  const fetcher = () =>
    fetch(`${import.meta.env.VITE_BASE_URL}/${route}/${episodeId}`).then(
      (res) => res.json()
    );

  const { data } = useQuery([episodeId], fetcher);

  const { episode, characters, residents, name } = data;

  const getCharacterList = async () => {
    const results = await Promise.all(
      characters
        ? characters
        : residents.map(async (character: string) => {
            const response = await fetch(character);
            return response.json();
          })
    );

    setCharacterList(results);

    return results;
  };

  console.log(data);

  useEffect(() => {
    getCharacterList();
  }, []);

  return (
    <Container>
      <button
        className="text-white rotate-180 absolute top-4"
        onClick={() => navigate(-1)}
      >
        <svg
          width="30"
          height="30"
          fill="currentColor"
          viewBox="0 0 15 15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414Z" />
        </svg>
      </button>
      <Title label={`${episode || name} Characters`} />
      <p className="w-full text-center mb-3 text-gray-400">
        {characters?.length || residents?.length} characters
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
