interface StarProps {
  fill: "empty" | "full" | "half";
  size: number;
  onClick: () => void;
  onMouseOver: () => void;
  onMouseOut: () => void;

}

const Star = ({ fill, size, onClick, onMouseOver, onMouseOut }: StarProps) => {
  const getFillColor = () => {
    if (fill === "empty") {
      return "lightgrey";
    } else if (fill === "half") {
      return "url(#halfFill)";
    } else if (fill === "full") {
      return "gold";
    } else {
      return fill;
    }
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      <defs>
        <linearGradient id="halfFill" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="50%" style={{ stopColor: "gold", stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: "lightgrey", stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <polygon
        points="8,0 10,5 16,5 11,9 13,16 8,12 3,16 5,9 0,5 6,5"
        fill={getFillColor()}
      />
    </svg>
  );
};

export default Star;