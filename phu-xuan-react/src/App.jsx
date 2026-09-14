import { useState } from 'react';
import MenuList from './components/MenuList';
import { menuItems } from './data/menu';

function App() {
  // Câu 6: Nâng State lên - Đặt state đếm ở App
  const [favoriteCount, setFavoriteCount] = useState(0);

  // Callback truyền xuống MenuList -> MenuItem
  const handleToggleFavorite = (isNowFavorite) => {
    setFavoriteCount(prev => isNowFavorite ? prev + 1 : prev - 1);
  };

  return (
    <div className="app-container">
      <header className="hero-header">
        <div className="hero-content">
          <h1>Ẩm Thực Cố Đô Huế</h1>
          <p className="subtitle">Khám phá tinh hoa ẩm thực truyền thống Việt Nam</p>
          
          {/* Câu 6: Hiển thị tổng số món đang được yêu thích */}
          <div className="favorite-counter">
            <span className="heart-icon">❤️</span>
            <span className="count-text">Số món đã yêu thích: <strong>{favoriteCount}/{menuItems.length}</strong></span>
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="section-title">
          <h2>Thực Đơn Nổi Bật</h2>
          <div className="title-underline"></div>
        </div>
        
        {/* Câu 4: Truyền danh sách và hàm callback xuống MenuList */}
        <MenuList 
          items={menuItems} 
          onToggleFavorite={handleToggleFavorite} 
        />
      </main>
      
      <footer className="footer">
        <p>Phu Xuan React - Bài kiểm tra Buổi 4-5</p>
      </footer>
    </div>
  );
}

export default App;
