import c from "classnames";

type CardProps = {
  children?: any;
  className?: string;
};

const Card= ({ children, className }: CardProps) => {
  return (
    <div
      className={c(
        "Card border border-brand-gray-300 -mb-px py-5 px-[15px]",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;