import React, { useContext, useEffect, useState } from 'react';
import { PostStateContext } from '../App';

import MyHeader from './../components/MyHeader';
import MyButton from './../components/MyButton';
import PostList from './../components/PostList';

const Home = () => {
  const postList = useContext(PostStateContext);

  const [data, setData] = useState([]);
  const [curDate, setCurDate] = useState(new Date());
  const headText = `${curDate.getFullYear()}년`;

  useEffect(() => {
    const titleElement = document.getElementsByTagName('title')[0];
    titleElement.innerHTML = `Woot's BookShelf`;
  }, []);


  useEffect(() => {
    if (postList.length >= 1) {
      const firstDay = new Date(curDate.getFullYear(), 0, 1).getTime();

      const lastDay = new Date(
        curDate.getFullYear(),
        11,
        31,
        23,
        59,
        59
      ).getTime();

      setData(postList.filter((it) => firstDay <= it.date && it.date <= lastDay));
    }
  }, [postList, curDate]);

  const increaseYear = () => {
    setCurDate(new Date(curDate.getFullYear() + 1, curDate.getMonth(), curDate.getDate()));
  };

  const decreaseYear = () => {
    setCurDate(new Date(curDate.getFullYear() - 1, curDate.getMonth(), curDate.getDate()));
  };

  return (
    <div>
      <MyHeader
        headText={headText}
        leftChild={<MyButton text={'<'} onClick={decreaseYear} />}
        rightChild={<MyButton text={'>'} onClick={increaseYear} />}
      />
      <PostList postList={data} />
    </div>
  );
};

export default Home;
