import { useEffect, useState } from "react";

const useReviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/reviews`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return { reviews };
};

export default useReviews;
