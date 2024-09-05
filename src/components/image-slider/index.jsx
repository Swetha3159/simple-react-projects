import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./style.css";

const ImageSlider = ({ url, page = 1, limit = 10 }) => {
  const [data, setData] = useState([]);
  const [currentValue, setCurrentValue] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setErrorMsg] = useState("");
  useEffect(() => {
    if (url !== "") {
      fetchImages(url, page, limit);
    }
  }, [url]);
  console.log(data);
  const fetchImages = async (url, page, limit) => {
    try {
      setLoading(true);
      const response = await fetch(`${url}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setData(data);
        setLoading(false);
      }
    } catch (error) {
      setErrorMsg(error.message);
      setLoading(true);
    }
  };

  const handleLeft = () => {
    if (currentValue === 0) {
      setCurrentValue(data.length - 1);
    } else {
      setCurrentValue(currentValue - 1);
    }
  };
  const handleRight = () => {
    if (currentValue === data.length - 1) {
      setCurrentValue(0);
    } else {
      setCurrentValue(currentValue + 1);
    }
  };
  if (loading) {
    return <div>Loading .....</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div className="container">
      <BsArrowLeftCircleFill
        className="arrow arrow-left"
        onClick={handleLeft}
      />
      {data && data.length
        ? data.map((image, index) => {
            return (
              <img
                key={image.id}
                src={image.download_url}
                alt={image.download_url}
                className={
                  currentValue === index
                    ? "current-image"
                    : "current-image hide-current-image"
                }
              />
            );
          })
        : null}
      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={handleRight}
      />
      <span className="circle-indicators">
        {data && data.length
          ? data.map((_, index) => {
              return (
                <button
                  key={index}
                  className={
                    currentValue === index
                      ? "current-indicator"
                      : "current-indicator inactive"
                  }
                  onClick={() => setCurrentValue(index)}
                />
              );
            })
          : null}
      </span>
    </div>
  );
};

export default ImageSlider;
