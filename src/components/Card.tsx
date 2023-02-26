import type { Result } from "../types";

const Card = ({ name, created, image }: Result) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <p>{name}</p>
      <time>{new Date(created).toDateString()}</time>
    </div>
  );
};

export default Card;
