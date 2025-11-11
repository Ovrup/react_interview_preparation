import { useCallback, useEffect, useState } from "react";
import "./styles.css";
import Image from "./imageComponent";
import InfiniteScroll from "../infiniteScroll";

const ImageGallery = () => {
  const BASE_URL = "https://picsum.photos/v2/list";

  const [urlParams, setUrlParams] = useState({
    page: 1,
    limit: 20,
  });
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true); 

  async function fetchImages() {
    const searchParams = new URLSearchParams(urlParams).toString();
    try {
      setIsLoading(true);
      const response = await fetch(`${BASE_URL}?${searchParams}`, {
        method: "GET",
      });
      const data = await response.json();
      setImages((prev) => [...prev, ...(data || [])]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchImages();
  }, [urlParams]);

  const loadMore = () => {
    console.log("load more called");
    setUrlParams((prev) => ({
      ...prev,
      page: prev.page + 1,
    }));
  };

  return (
    <div>
      <h1>Image Gallery</h1>
      <InfiniteScroll
        isLoading={isLoading}
        hasMore={hasMore}
        loadMore={loadMore}
      >
        <div className="image-container">
          {images.map((image) => {
            return <Image image={image} />;
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default ImageGallery;
