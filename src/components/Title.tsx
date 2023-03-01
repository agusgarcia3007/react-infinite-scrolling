type TitleProps = {
  label: string;
};

const Title = ({ label }: TitleProps) => {
  return (
    <h1 className="text-center w-full  py-7 text-3xl md:text-5xl">{label}</h1>
  );
};

export default Title;
