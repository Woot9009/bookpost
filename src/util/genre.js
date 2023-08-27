const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || '';

export const genreList = [
  {
    genre: 'novel',
    genre_img: process.env.PUBLIC_URL + `/assets/novel.png`,
    genre_descript: '소설',
  },
  {
    genre: 'poem',
    genre_img: process.env.PUBLIC_URL + `/assets/poem.png`,
    genre_descript: '시',
  },
  {
    genre: 'humanities',
    genre_img: process.env.PUBLIC_URL + `/assets/humanities.png`,
    genre_descript: '인문',
  },
  {
    genre: 'science',
    genre_img: process.env.PUBLIC_URL + `/assets/science.png`,
    genre_descript: '과학',
  },
  {
    genre: 'etc',
    genre_img: process.env.PUBLIC_URL + `/assets/etc.png`,
    genre_descript: '기타',
  },
];
