import { useState } from 'react';
import ChiTietMonAn from './ChiTietMonAn';
import TimMonAn from './TimMonAn';

function TrangMonAn() {
  const [idDangChon, setIdDangChon] = useState(1);

  return (
    <div className="trang-mon-an">
      {/* Lab 3: Ô tìm kiếm tự động focus + đếm số lần render */}
      <TimMonAn />

      <div className="food-buttons">
        <button
          type="button"
          className={idDangChon === 1 ? 'is-active' : ''}
          onClick={() => setIdDangChon(1)}
        >
          Bún bò Huế
        </button>
        <button
          type="button"
          className={idDangChon === 2 ? 'is-active' : ''}
          onClick={() => setIdDangChon(2)}
        >
          Cơm hến
        </button>
        <button
          type="button"
          className={idDangChon === 3 ? 'is-active' : ''}
          onClick={() => setIdDangChon(3)}
        >
          Bánh bèo
        </button>
        <button
          type="button"
          className={idDangChon === 4 ? 'is-active' : ''}
          onClick={() => setIdDangChon(4)}
        >
          Nem lụi
        </button>
      </div>
      <ChiTietMonAn idMonAn={idDangChon} />
    </div>
  );
}

export default TrangMonAn;
