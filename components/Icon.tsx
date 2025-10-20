const Icon = ({
  icon,
  name,
  link,
}: {
  icon: string;
  name: string;
  link: string;
}) => {
  return (
    <div className="p-2.5 bg-gray8 rounded-full">
      <a href={link}>
        <img width={20} height={20} src={icon} alt={name} />
      </a>
    </div>
  );
};

export default Icon;
