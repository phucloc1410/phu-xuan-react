function App() {
  // ── Dữ liệu ──────────────────────────────────────────
  const soLuongDiaDiem = 3;              // Lỗi 1: thiếu dấu ; (đã sửa)
  const trangThaiMoCua = true;           // Lỗi 1: thiếu dấu ; (đã sửa)

  const diaDiem = [
    {
      ten: "Hoàng thành Thăng Long",
      moTa: "Di sản văn hóa thế giới UNESCO, trung tâm quyền lực suốt 13 thế kỷ của Việt Nam.",
      hinhAnh: "https://placehold.co/400x240/6366f1/ffffff?text=Ho%C3%A0ng+Th%C3%A0nh",
      loai: "Di sản thế giới",
    },
    {
      ten: "Hồ Hoàn Kiếm",
      moTa: "Trái tim của Hà Nội, nơi gắn liền với truyền thuyết vua Lê trả gươm thần.",
      hinhAnh: "https://placehold.co/400x240/8b5cf6/ffffff?text=H%E1%BB%93+Ho%C3%A0n+Ki%E1%BA%BFm",
      loai: "Danh thắng",
    },
    {
      ten: "Văn Miếu — Quốc Tử Giám",
      moTa: "Trường đại học đầu tiên của Việt Nam, biểu tượng cho truyền thống hiếu học.",
      hinhAnh: "https://placehold.co/400x240/0ea5e9/ffffff?text=V%C4%83n+Mi%E1%BA%BFu",
      loai: "Di tích lịch sử",
    },
  ];

  return (
    // Lỗi 3: hai phần tử gốc → bọc Fragment <> (đã sửa)
    <>
      <div className="trang-chu">
        {/* ── Header ── */}
        <header className="page-header">
          <div className="header-content">
            <span className="header-icon">🏛️</span>
            <div>
              <h1>Danh sách địa điểm</h1>
              <p className="header-subtitle">
                Khám phá {soLuongDiaDiem} địa điểm nổi tiếng tại Hà Nội
              </p>
            </div>
          </div>
        </header>

        {/* ── Status Bar ── */}
        <div className="status-bar">
          <div className="status-item">
            <span className="status-dot active" />
            <span>
              Trạng thái:{" "}
              {/* Lỗi 4: thiếu dấu : trong ternary (đã sửa) */}
              {trangThaiMoCua ? "Đang mở cửa" : "Đã đóng cửa"}
            </span>
          </div>
          <div className="status-item">
            <span className="status-count">{soLuongDiaDiem}</span>
            <span>địa điểm</span>
          </div>
        </div>

        {/* ── Cards Grid ── */}
        <div className="cards-grid">
          {diaDiem.map((dd, index) => (
            <div className="place-card" key={index}>
              {/* Lỗi 5: thẻ img không đóng → thêm /> (đã sửa) */}
              {/* Lỗi 2: class → className (đã sửa) */}
              <img
                src={dd.hinhAnh}
                className="place-img"
                alt={dd.ten}
              />
              <div className="place-body">
                <span className="place-tag">{dd.loai}</span>
                <h3 className="place-name">{dd.ten}</h3>
                <p className="place-desc">{dd.moTa}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Footer ── */}
        <footer className="page-footer">
          <span>phu-xuan-react</span>
          <span className="dot" />
          <span>Lab 3 — Buổi 4: Săn lỗi JSX</span>
        </footer>
      </div>
    </>
  );
}

export default App;
