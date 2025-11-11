import { useEffect, useRef, useState } from "react";
import "./styles.css";

const Image = ({ image }) => {
  const imageRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if(imageRef?.current && imageRef.current.complete) {
        setIsLoaded(true);
    } else {
        imageRef.current.addEventListener("load", () => {
            setIsLoaded(true);
        });
    }
  }, []);

  return (
    <div className={`image-wrapper ${isLoaded ? "loaded" : ""}`}>
      <img src={image.download_url} className="image" ref={imageRef} />
    </div>
  );
};

export default Image;
