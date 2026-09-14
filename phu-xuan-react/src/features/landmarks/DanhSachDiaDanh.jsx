import { useState, useMemo, useCallback } from 'react';
import diaDanhData from '../../data/dia-danh.json';
import TheDiaDanh from './TheDiaDanh';

function DanhSachDiaDanh() {
  const [boLoc, setBoLoc] = useState('');

  // useMemo: chỉ tính lại danh sách lọc khi boLoc thay đổi
  const danhSachDaLoc = useMemo(() => {
    console.log('useMemo: đang lọc danh sách địa danh theo từ khoá:', boLoc);
    if (!boLoc.trim()) return diaDanhData;
    return diaDanhData.filter((dd) =>
      dd.ten.toLowerCase().includes(boLoc.toLowerCase())
    );
  }, [boLoc]);

  // useCallback: giữ nguyên tham chiếu hàm qua các lần render
  const themYeuThich = useCallback((id) => {
    console.log('Yêu thích địa danh id:', id);
  }, []);

  return (
    <div className="danh-sach-dia-danh">
      <h2 className="danh-sach-dia-danh__title">🗺️ Địa danh Huế</h2>
      <input
        type="text"
        className="danh-sach-dia-danh__filter"
        value={boLoc}
        onChange={(e) => setBoLoc(e.target.value)}
        placeholder="Lọc theo tên địa danh…"
      />
      <p className="danh-sach-dia-danh__count">
        Hiển thị <strong>{danhSachDaLoc.length}</strong> / {diaDanhData.length} địa danh
      </p>
      <div className="danh-sach-dia-danh__list">
        {danhSachDaLoc.map((dd) => (
          <TheDiaDanh
            key={dd.id}
            diaDanh={dd}
            onYeuThich={themYeuThich}
          />
        ))}
      </div>
    </div>
  );
}

export default DanhSachDiaDanh;
