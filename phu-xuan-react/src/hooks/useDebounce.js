import { useState, useEffect } from 'react';

function useDebounce(giaTri, doTre) {
  const [giaTriDaTre, setGiaTriDaTre] = useState(giaTri);

  useEffect(() => {
    // Đặt setTimeout để cập nhật giaTriDaTre sau `doTre` mili-giây
    const timeoutId = setTimeout(() => {
      setGiaTriDaTre(giaTri);
    }, doTre);

    // Return hàm cleanup gọi clearTimeout
    return () => {
      clearTimeout(timeoutId);
    };
  }, [giaTri, doTre]);

  return giaTriDaTre;
}

export default useDebounce;
