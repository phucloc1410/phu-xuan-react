import { useState, useRef } from 'react';
import { DS_MON_AN } from '../../data/monAnHue';
 
export default function MonAnYeuThich() {
  const [dsMon, setDsMon] = useState(DS_MON_AN.slice(0, 4));
  const [idDangKeo, setIdDangKeo] = useState(null);
  const [thongBao, setThongBao] = useState('');
  const vungThaRef = useRef(null);
 
  // --- Chuột & Cảm ứng ---
  function handleKeoBatDau(e, id) {
    setIdDangKeo(id);
    e.dataTransfer.effectAllowed = 'move';
    // Firefox cần data để cho phép kéo
    e.dataTransfer.setData('text/plain', id);
  }
 
  function handleKeoVao(e, viTriMoi) {
    e.preventDefault();
    if (idDangKeo === null) return;
 
    const viTriCu = dsMon.findIndex((m) => m.id === idDangKeo);
    if (viTriCu === viTriMoi) return;
 
    const dsMoi = [...dsMon];
    const [monDangKeo] = dsMoi.splice(viTriCu, 1);
    dsMoi.splice(viTriMoi, 0, monDangKeo);
    setDsMon(dsMoi);
  }
 
  function handleThaKeo() {
    setIdDangKeo(null);
  }
 
  // --- Bàn phím ---
  function handlePhim(e, index) {
    if (e.key === 'ArrowUp' && index > 0) {
      e.preventDefault();
      doiCho(index, index - 1);
      setThongBao(`Đã chuyển ${dsMon[index].ten} lên vị trí ${index}`);
    } else if (e.key === 'ArrowDown' && index < dsMon.length - 1) {
      e.preventDefault();
      doiCho(index, index + 1);
      setThongBao(`Đã chuyển ${dsMon[index].ten} xuống vị trí ${index + 2}`);
    }
  }
 
  function doiCho(vt1, vt2) {
    const dsMoi = [...dsMon];
    [dsMoi[vt1], dsMoi[vt2]] = [dsMoi[vt2], dsMoi[vt1]];
    setDsMon(dsMoi);
  }
 
  return (
    <section className="lab">
      <h2>Lab 5 — Xếp hạng món ăn yêu thích</h2>
      <p className="huong-dan">
        Kéo thả để sắp xếp, hoặc dùng phím Mũi tên Lên/Xuống.
      </p>
 
      {/* Thông báo ẩn cho trình đọc màn hình */}
      <div aria-live="polite" className="sr-only">
        {thongBao}
      </div>
 
      <ol
        className="ds-keo-tha"
        ref={vungThaRef}
        onDragOver={(e) => e.preventDefault()}
      >
        {dsMon.map((mon, index) => (
          <li
            key={mon.id}
            draggable
            tabIndex={0} // cho phép focus bằng phím Tab
            className={mon.id === idDangKeo ? 'dang-keo' : ''}
            onDragStart={(e) => handleKeoBatDau(e, mon.id)}
            onDragEnter={(e) => handleKeoVao(e, index)}
            onDragEnd={handleThaKeo}
            onKeyDown={(e) => handlePhim(e, index)}
            aria-label={`${mon.ten}, vị trí ${index + 1}`}
          >
            <span className="thu-tu">#{index + 1}</span>
            <span className="ten">{mon.ten}</span>
            <span className="tay-cam">↕</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
