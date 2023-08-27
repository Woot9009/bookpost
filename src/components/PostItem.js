import React from 'react';
import { useNavigate } from 'react-router-dom';
import MyButton from './MyButton';

const PostItem = ({ id, genre, content, date }) => {

  const navigate = useNavigate();
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || '';

  const strDate = new Date(parseInt(date)).toLocaleDateString();

  const goDetail = ()=>{
    navigate(`/post/${id}`);
  };

  const goEdit = ()=>{
    navigate(`/edit/${id}`);
  };

  return (
    <div className="PostItem">
      <div onClick={goDetail} className={['thumbnail_wrapper', `thumbnail_wrapper_${genre}`].join(' ')}>
        <img src={process.env.PUBLIC_URL + `/assets/${genre}.png`} />
      </div>
      <div onClick={goDetail} className="info_wrapper">
        <div className="post_date">{strDate}</div>
        <div className="post_content_preview">{content.slice(0, 25)}</div>
      </div>
      <div className='btn_wrapper'>
        <MyButton onClick={goEdit} text={'수정하기'} />
      </div>
    </div>
  );
};

export default React.memo(PostItem);
