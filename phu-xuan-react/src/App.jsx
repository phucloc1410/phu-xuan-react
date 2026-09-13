import { useState } from 'react';
import AttractionList from './components/AttractionList';
import CategoryTabs from './components/CategoryTabs';
import { attractions } from './data/attractions';
import LuotXemDaiNoi from './features/landmarks/LuotXemDaiNoi';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');
  const [hienThi, setHienThi] = useState(true);

  const categories = [
    'Tất cả',
    ...new Set(attractions.map((item) => item.category)),
  ];

  const filteredAttractions =
    selectedCategory === 'Tất cả'
      ? attractions
      : attractions.filter((item) => item.category === selectedCategory);

  return (
    <div className="app">
      <h1>Khám phá Huế</h1>

      <button
        type="button"
        className="toggle-btn"
        onClick={() => setHienThi(!hienThi)}
      >
        {hienThi ? 'Ẩn thẻ Đại Nội' : 'Hiện thẻ Đại Nội'}
      </button>

      {hienThi && <LuotXemDaiNoi />}

      <CategoryTabs
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <AttractionList attractions={filteredAttractions} />
    </div>
  );
}

export default App;
