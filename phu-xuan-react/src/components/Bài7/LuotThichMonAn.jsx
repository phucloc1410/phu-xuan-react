import { useState } from 'react';
 
export default function LuotThichMonAn() {
  const [luotThich, setLuotThich] = useState(0);
 
  // Dùng hàm cập nhật: mỗi lời gọi nhận kết quả của lời gọi trước
  function handleThich3() {
    setLuotThich((truoc) => truoc + 1);
    setLuotThich((truoc) => truoc + 1);
    setLuotThich((truoc) => truoc + 1);
  }
 
  return (
    <div className="luot-thich lab">
      <h2>Lượt thích Bún bò Huế</h2>
      <p className="thong-ke">Bún bò Huế — <strong>{luotThich}</strong> lượt thích</p>
      <div className="hanh-dong">
        <button onClick={() => setLuotThich((t) => t + 1)}>+1</button>
        <button onClick={handleThich3}>+3 lượt thích</button>
        <button onClick={() => setLuotThich(0)}>Đặt lại</button>
      </div>
    </div>
  );
}
