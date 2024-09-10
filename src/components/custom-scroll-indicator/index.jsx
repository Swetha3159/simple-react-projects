import React, { useEffect, useState } from "react";
import "./scroll.css";

const CustomScrollIndicator = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(" ");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    fetchProductS(url);
  }, [url]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, [scrollPercentage]);
  //   console.log(scrollPercentage);

  const handleScrollPercentage = () => {
    // console.log(document.body.scrollTop);
    // console.log(document.documentElement.scrollTop);
    // console.log(document.documentElement.scrollHeight);
    // console.log(document.documentElement.clientHeight);
    const howmuchScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrollPercentage((howmuchScroll / height) * 100);
  };
  const fetchProductS = async (getUrl) => {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const result = await response.json();
      if (result && result.products && result.products.length > 0) {
        setData(result.products);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
      setLoading(true);
    }
  };
  if (loading) {
    return <div>Loading Product !! Please Wait</div>;
  }
  return (
    <div>
      <div className="top-container">
        <h1>Custom Scroll Indicator</h1>
        <div className="scroll-progress-tracking-container">
          <div
            className="current-progress-bar"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>

      <div className="data-container">
        {data && data.length > 0
          ? data.map((dataItem) => {
              return <p> {dataItem.title}</p>;
            })
          : null}
      </div>
    </div>
  );
};

export default CustomScrollIndicator;
