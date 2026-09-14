import { useState } from 'react';

export default function MenuItem({ name, price, description, isSpicy, image, onToggleFavorite }) {
  // Câu 5: Trạng thái yêu thích bằng State
  const [isFavorite, setIsFavorite] = useState(false);

  const handleToggle = () => {
    const newValue = !isFavorite;
    setIsFavorite(newValue);
    
    // Câu 6: Nâng State lên (gọi hàm callback của App)
    if (onToggleFavorite) {
      onToggleFavorite(newValue);
    }
  };

  return (
    <div className={`menu-card ${isFavorite ? 'favorite-active' : ''}`}>
      {image && (
        <div className="card-img-wrapper">
          <img src={image} alt={name} className="card-img" />
          {/* Câu 3: Kết xuất có điều kiện */}
          {isSpicy && <span className="spicy-badge">🌶 Món cay</span>}
        </div>
      )}
      
      <div className="card-content">
        <div className="card-header">
          {/* Câu 2: Hiển thị Tên */}
          <h3 className="item-name">{name}</h3>
          {/* Câu 2: Hiển thị Giá định dạng */}
          <span className="item-price">{price.toLocaleString('vi-VN')}đ</span>
        </div>
        
        {/* Câu 2: Hiển thị Mô tả */}
        <p className="item-desc">{description}</p>
        
        <div className="card-actions">
          {/* Câu 5: Nút bấm đổi trạng thái */}
          <button 
            className={`fav-btn ${isFavorite ? 'active' : ''}`}
            onClick={handleToggle}
          >
            {isFavorite ? '♥ Đã yêu thích' : '♡ Yêu thích'}
          </button>
        </div>
      </div>
    </div>
  );
}
