import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PostDispatchContext } from './../App.js';

import MyHeader from './MyHeader';
import MyButton from './MyButton';
import GenreItem from './GenreItem';

import { getStringDate } from '../util/date.js';
import { genreList } from '../util/genre.js';

const PostEditor = ({ isEdit, originData }) => {
  const contentRef = useRef();
  const [content, setContent] = useState('');
  const [genre, setGenre] = useState('etc');
  const [date, setDate] = useState(getStringDate(new Date()));

  const { onCreate, onEdit, onRemove } = useContext(PostDispatchContext);

  const handleClickGenre = useCallback((genre) => {
    setGenre(genre);
  }, []);

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (content.length < 1) {
      contentRef.current.focus();
      return;
    }

    if (window.confirm(isEdit ? '포스트를 수정하시겠습니까?' : '새 포스트를 작성하시겠습니까?')) {
      if (!isEdit) {
        onCreate(date, content, genre);
      } else {
        onEdit(originData.id, date, content, genre);
      }
    }

    navigate('/', { replace: true });
  };

  const handleRemove = () => {
    if (window.confirm('삭제하시겠습니까?')) {
      onRemove(originData.id);
      navigate('/', { replace: true });
    }
  };

  useEffect(() => {
    if (isEdit) {
      setDate(getStringDate(new Date(parseInt(originData.date))));
      setGenre(originData.genre);
      setContent(originData.content);
    }
  }, [isEdit, originData]);

  return (
    <div className="PostEditor">
      <MyHeader
        headText={isEdit ? '수정하기' : '새 글 쓰기'}
        leftChild={<MyButton text={'< 뒤로 가기'} onClick={() => navigate(-1)} />}
        rightChild={
          isEdit && <MyButton text={'삭제하기'} type={'negative'} onClick={handleRemove} />
        }
      />
      <div>
        <section>
          <h4>오늘은</h4>
          <div className="input_box">
            <input
              className="input_date"
              value={date}
              type="date"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </section>
        <section>
          <h4>장르</h4>
          <div className="input_box genre_list_wrapper">
            {genreList.map((it) => (
              <GenreItem
                key={it.genre}
                {...it}
                onClick={handleClickGenre}
                isSelected={it.genre === genre}
              />
            ))}
          </div>
        </section>
        <section>
          <h4>포스트</h4>
          <div className="input_box text_wrapper">
            <textarea
              placeholder="책 속에는 과거의 모든 영혼이 가로누워 있다.  -칼라일"
              ref={contentRef}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </section>
        <section>
          <div className="control_box">
            <MyButton text={'취소'} onClick={() => navigate(-1)} />
            <MyButton text={'저장'} type={'positive'} onClick={handleSubmit} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default PostEditor;
