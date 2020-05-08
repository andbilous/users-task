import { useState, useEffect } from 'react';

const useInfiniteScroll = (callback) => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
      
  }, []);

  return [isFetching, setIsFetching];
};

export default useInfiniteScroll;