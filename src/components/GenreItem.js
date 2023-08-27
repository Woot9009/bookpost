import React from 'react';

const GenreItem = ({ genre, genre_img, genre_descript, onClick, isSelected }) => {
  return (
    <div
      className={['GenreItem', isSelected ? `GenreItem_on` : `GenreItem_off`].join(' ')}
      onClick={() => onClick(genre)}
    >
      <img src={genre_img} />
      <span>{genre_descript}</span>
    </div>
  );
};

export default React.memo(GenreItem);
