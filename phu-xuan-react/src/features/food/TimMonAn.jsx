import { useRef, useEffect, useState } from 'react';

function TimMonAn() {
  const oTimKiemRef = useRef(null);
  const soLanRenderRef = useRef(0);
  const [tuKhoa, setTuKhoa] = useState('');

  // Đếm số lần render (chạy mỗi lần hàm component được gọi lại)
  soLanRenderRef.current = soLanRenderRef.current + 1;
  console.log('TimMonAn đã render:', soLanRenderRef.current, 'lần');

  // Auto-focus khi mount
  useEffect(() => {
    oTimKiemRef.current.focus();
  }, []);

  return (
    <div className="tim-mon-an">
      <label className="tim-mon-an__label" htmlFor="input-tim-kiem">
        🔍 Tìm món ăn Huế
      </label>
      <input
        id="input-tim-kiem"
        ref={oTimKiemRef}
        type="text"
        className="tim-mon-an__input"
        value={tuKhoa}
        onChange={(e) => setTuKhoa(e.target.value)}
        placeholder="Tìm bún bò, cơm hến, bánh bèo…"
      />
      <p className="tim-mon-an__count">
        Đã render <strong>{soLanRenderRef.current}</strong> lần
      </p>
    </div>
  );
}

export default TimMonAn;
