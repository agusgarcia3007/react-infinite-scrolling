import type { Result } from "../types";
import { getStatus } from "../utils/getStatus";
import { parseStringLength } from "../utils/parseStringLength";
import { someKeyIsEmpty } from "../utils/validators";

const Card = ({
  id,
  name,
  created,
  image,
  status,
  species,
  location,
  air_date,
  characters,
  episode,
  url,
}: Result) => {
  const characterProps = { image, status, species, location };
  const episodeProps = { air_date, characters, episode, url, id };

  const cardBasicClassNames =
    "flex sm:flex-col items-cente rounded-lg  shadow-lg md:flex-row mx-2 bg-[#1f1f1f]";

  if (!someKeyIsEmpty(characterProps))
    return (
      <div className={cardBasicClassNames}>
        <img
          className="object-cover rounded-l-lg h-48 w-48 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={image}
          alt={name}
          title={`created at ${created}`}
          draggable={false}
        />
        <div className="flex flex-col w-full sm:w-auto justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900  dark:text-white">
            {name}
          </h5>
          <span className="flex text-gray-400 items-center">
            <p>status: {status}</p>
            <span className="mx-0.5 lg:mx-3">
              {getStatus(status?.toLowerCase()!)}
            </span>
          </span>
          <p className="text-gray-400">species: {species} </p>

          <p className="text-gray-400 text-xs mt-3 w-full">
            location: {location && parseStringLength(location?.name)}
          </p>
        </div>
      </div>
    );

  if (!someKeyIsEmpty(episodeProps))
    return (
      <div className={cardBasicClassNames}>
        {/* <section className="h-48 w-48 border border-white"></section> */}
        <div className="flex flex-col w-full sm:w-auto justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900  dark:text-white">
            {id}. {name}{" "}
            <span className="mx-0.5 text-base text-gray-400 lg:mx-3">
              {episode}
            </span>
          </h5>
          <span className="flex text-gray-400 items-center">
            <p className="capitalize">air date: {air_date}</p>
          </span>
        </div>
      </div>
    );

  return <div className={cardBasicClassNames}></div>;
};

export default Card;
