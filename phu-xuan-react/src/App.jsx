import DiaDiem1 from "./components/DiaDiem1.jsx";
import DiaDiem2 from "./components/DiaDiem2.jsx";
import DiaDiem3 from "./components/DiaDiem3.jsx";
import { NhanTrangThai, demTongSoDiaDiem } from "./components/TienIch.jsx";

function App() {
  const danhSachTen = ["Đại Nội Huế", "Chợ Đông Ba", "Cầu Tràng Tiền"];
  const gioHienTaiLa8Gio = true; // giả lập giờ hiện tại để kiểm tra NhanTrangThai

  return (
    <div className="trang-chu">
      <h1>Danh sách địa điểm — phu-xuan-react</h1>
      <p>
        Tổng số địa điểm: {demTongSoDiaDiem(danhSachTen)}
        {" "}— <NhanTrangThai dangMoCua={gioHienTaiLa8Gio} />
      </p>

      <DiaDiem1 />
      <DiaDiem2 />
      <DiaDiem3 />
    </div>
  );
}

export default App;
