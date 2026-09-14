import MenuItem from './MenuItem';

export default function MenuList({ items, onToggleFavorite }) {
  return (
    <div className="menu-list">
      {/* Câu 4: Dùng map() để render danh sách, dùng id làm key */}
      {items.map((item) => (
        <MenuItem 
          key={item.id} 
          name={item.name}
          price={item.price}
          description={item.description}
          isSpicy={item.isSpicy}
          image={item.image}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}
