import { memo } from 'react';

const TheDiaDanh = memo(function TheDiaDanh({ diaDanh, onYeuThich }) {
  console.log('TheDiaDanh render:', diaDanh.ten);

  return (
    <div className="the-dia-danh">
      <div className="the-dia-danh__info">
        <span className="the-dia-danh__ten">{diaDanh.ten}</span>
        <span className="the-dia-danh__khu">{diaDanh.khuVuc}</span>
      </div>
      <button
        type="button"
        className="the-dia-danh__btn"
        onClick={() => onYeuThich(diaDanh.id)}
      >
        ❤️ Yêu thích
      </button>
    </div>
  );
});

export default TheDiaDanh;
