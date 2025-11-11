import React, { useEffect, useRef } from "react";
import loader from '../../assets/b2b_loader.gif';
import "./styles.css";

const InfiniteScroll = ({ isLoading, hasMore, loadMore, children }) => {
  const sentinelRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const observerCallback = (entries) => {
      if (entries[0].isIntersecting && !isLoading && hasMore) {
        loadMore();
      }
    };

    observerRef.current = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    });

    if (sentinelRef.current) {
      observerRef.current.observe(sentinelRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [isLoading, hasMore, loadMore]);

  return (
    <div>
      {children}
      <div ref={sentinelRef}></div>
      <div className="loader-conatainer">
        {isLoading && (
            <img src={loader} alt="loading..." className="loader-image" />
        )}
      </div>
    </div>
  );
};

export default InfiniteScroll;
