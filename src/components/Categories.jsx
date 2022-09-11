import React from "react";

function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  const onClickCategory = (index) => {
    setActiveIndex(index);
  }

  return (//рендерим <li> из массива categories
    <div className="categories">
      <ul>  
        {categories.map((category, index) => (
            <li onClick={() => onClickCategory(index)} className={activeIndex === index ? "active" : ""}>
              {category}
            </li>
        ))} 
      </ul>
    </div>
  );
}

export default Categories;

//  <li onClick={() => onClickCategory(5)} className={activeIndex === 5 ? "active" : ""}>         Закрытые</li>