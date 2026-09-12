function App() {
  const hoTen = "Lê Thị Hồng";
  const maSinhVien = "22CNTT045";
  const diemChuyenCan = 9;
  const diemBaiTap = 8;
  const diemKiemTra = 7.5;
  const daNopBaiTapVeNha = false; // thử đổi thành true để xem sự khác biệt

  const diemQuaTrinh =
    diemChuyenCan * 0.2 + diemBaiTap * 0.4 + diemKiemTra * 0.4;

  return (
    <div className="student-card">
      {/* ── Card Header ── */}
      <div className="card-header">
        <h2>{hoTen}</h2>
        <p className="student-id">MSV: {maSinhVien}</p>
      </div>

      {/* ── Avatar ── */}
      <div className="avatar-wrapper">
        <img
          src="https://placehold.co/72x72/6366f1/ffffff?text=SV"
          className="avatar"
          alt={hoTen}
        />
      </div>

      {/* ── Card Body ── */}
      <div className="card-body">
        {/* Score Detail Grid */}
        <div className="score-details">
          <div className="score-item">
            <div className="score-label">Chuyên cần</div>
            <div className="score-number">{diemChuyenCan}</div>
          </div>
          <div className="score-item">
            <div className="score-label">Bài tập</div>
            <div className="score-number">{diemBaiTap}</div>
          </div>
          <div className="score-item">
            <div className="score-label">Kiểm tra</div>
            <div className="score-number">{diemKiemTra}</div>
          </div>
        </div>

        {/* Overall Score */}
        <div className="info-row">
          <span className="info-label">
            <span className="icon">📊</span>
            Điểm quá trình
          </span>
          <span className="info-value score">{diemQuaTrinh}</span>
        </div>

        {/* Mã sinh viên */}
        <div className="info-row">
          <span className="info-label">
            <span className="icon">🎓</span>
            Mã số SV
          </span>
          <span className="info-value">{maSinhVien}</span>
        </div>

        {/* Homework Status — ternary operator */}
        <div
          className={
            "status-badge " +
            (daNopBaiTapVeNha ? "submitted" : "not-submitted")
          }
        >
          <span className="status-icon">
            {daNopBaiTapVeNha ? "✅" : "⚠️"}
          </span>
          <span>
            {daNopBaiTapVeNha
              ? "Đã nộp bài tập về nhà Buổi 3."
              : "Chưa nộp bài tập về nhà Buổi 3 — cần nộp trước Buổi 4!"}
          </span>
        </div>
      </div>

      {/* ── Card Footer ── */}
      <div className="card-footer">
        <span>phu-xuan-react</span>
        <span className="dot" />
        <span>Buổi 4: Giới thiệu JSX</span>
      </div>
    </div>
  );
}

export default App;
