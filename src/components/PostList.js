import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MyButton from './MyButton';
import PostItem from './PostItem';

const sortOptionList = [
  { value: 'latest', name: '최신순' },
  { value: 'oldest', name: '오래된 순' },
];

const filterOptionList = [
  { value: 'all', name: '모든 장르' },
  { value: 'novel', name: '소설' },
  { value: 'poem', name: '시' },
  { value: 'humanities', name: '인문' },
  { value: 'science', name: '과학' },
  { value: 'etc', name: '기타' },
];

const ControlMenu = React.memo(({ value, onChange, optionList }) => {
  return (
    <select className="ControlMenu" value={value} onChange={(e) => onChange(e.target.value)}>
      {optionList.map((it, idx) => (
        <option key={idx} value={it.value}>
          {it.name}
        </option>
      ))}
    </select>
  );
});

const PostList = ({ postList }) => {
  const navigate = useNavigate();
  const [sortType, setSortType] = useState('latest');
  const [filter, setFilter] = useState('all');

  const getProcessedPostList = () => {
    const filterCallBack = (item) => {
      if (filter === 'novel') {
        return item.genre === 'novel';
      } else if (filter === 'poem') {
        return item.genre === 'poem';
      } else if (filter === 'humanities') {
        return item.genre === 'humanities';
      } else if (filter === 'science') {
        return item.genre === 'science';
      } else if (filter === 'etc') {
        return item.genre === 'etc';
      }
    };
    const compare = (a, b) => {
      if (sortType === 'latest') {
        return parseInt(b.date) - parseInt(a.date);
      } else {
        return parseInt(a.date) - parseInt(b.date);
      }
    };

    const copyList = JSON.parse(JSON.stringify(postList));

    const filteredList = filter === 'all' ? copyList : copyList.filter((it) => filterCallBack(it));

    const sortedList = filteredList.sort(compare);
    return sortedList;
  };

  return (
    <div className="PostList">
      <div className="menu_wrapper">
        <div className="left_col">
          <ControlMenu value={sortType} onChange={setSortType} optionList={sortOptionList} />
          <ControlMenu value={filter} onChange={setFilter} optionList={filterOptionList} />
        </div>
        <div className="right_col">
          <MyButton type={'positive'} text={'새 글 쓰기'} onClick={() => navigate('/new')} />
        </div>
      </div>
      {getProcessedPostList().map((it) => (
        <PostItem key={it.id} {...it} />
      ))}
    </div>
  );
};

PostList.defaultProps = {
  postList: [],
};

export default PostList;
