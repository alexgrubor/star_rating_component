import { useState } from "react";
import Star from "./Star";
interface RatingProps {
  totalStarNum: number;
}
interface TextObject {
  [key: number]: string;
}

const text: TextObject = {
  1: "We're sorry to hear that you had a bad experience. We would like to learn more about what happened and how we can make things right.",
  2: "We apologize for the inconvenience you experienced. We appreciate your feedback and would like to work with you to address any issues.",
  3: "Thank you for your feedback. We're sorry to hear that your experience wasn't perfect. We would love to hear more about your concerns to see how we can improve.",
  4: "Thank you for your positive feedback! We're glad to know that you had a great experience and we appreciate your support.",
  5: "Excellent! We're thrilled to hear you had such a positive experience. Thank you for choosing our product/service.",
};

const Rating = ({ totalStarNum }: RatingProps) => {
  const [rating, setRating] = useState<number | null>(null);
  const [hoverRating, setHoverRating] = useState<number | null>(null);

  const handleStarClick = (starValue: number) => {
    setRating(starValue);
  };

  const handleStarMouseOver = (starValue: number) => {
    setHoverRating(starValue);
  };

  const handleStarMouseOut = () => {
    setHoverRating(null);
  };

  const calculateFill = (starNumber: number) => {
    if (hoverRating !== null) {
      return starNumber <= hoverRating ? "full" : "empty";
    } else if (rating !== null) {
      return starNumber <= rating ? "full" : "empty";
    } else {
      return "empty";
    }
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= totalStarNum; i++) {
      stars.push(
        <Star
          key={i}
          fill={calculateFill(i)}
          size={32}
          onClick={() => handleStarClick(i)}
          onMouseOver={() => handleStarMouseOver(i)}
          onMouseOut={handleStarMouseOut}
        />
      );
    }
    return stars;
  };

  return (
    <div className="rating">
      <h1>How many stars would you give to our Online Code Editor?</h1>
      <div className="stars-container">{renderStars()}</div>
      <p>{rating !== null ? text[rating] : "Please rate the service."}</p>
    </div>
  );
};
export default Rating;
