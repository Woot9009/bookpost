import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { PostStateContext } from '../App';
import { getStringDate } from '../util/date.js';
import { genreList } from '../util/genre';

import MyHeader from '../components/MyHeader';
import MyButton from '../components/MyButton';

const Post = () => {
  const { id } = useParams();
  const postList = useContext(PostStateContext);
  const navigate = useNavigate();
  const [data, setData] = useState();

  useEffect(() => {
    const titleElement = document.getElementsByTagName('title')[0];
    titleElement.innerHTML = `Woot's BookShelf - ${id}번 독후감`;
  }, []);

  useEffect(() => {
    if (postList.length >= 1) {
      const targetPost = postList.find((it) => parseInt(it.id) === parseInt(id));

      if (targetPost) {
        setData(targetPost);
      } else {
        alert('없는 포스트입니다.');
        navigate('/', { replace: true });
      }
    }
  }, [id, postList]);

  if (!data) {
    return <div className="PostPage">로딩중입니다...</div>;
  } else {
    const curGenreData = genreList.find((it) => it.genre === data.genre);

    return (
      <div className="PostPage">
        <MyHeader
          headText={`${getStringDate(new Date(data.date))} 기록`}
          leftChild={<MyButton text={'< 뒤로가기'} onClick={() => navigate(-1)} />}
          rightChild={<MyButton text={'수정하기'} onClick={() => navigate(`/edit/${data.id}`)} />}
        />
        <article>
          <section>
            <h4>장르</h4>
            <div className="post_img_wrapper">
              <img src={curGenreData.genre_img} />
              <div className="genre_descript">{curGenreData.genre_descript}</div>
            </div>
          </section>
          <section>
            <h4>포스트</h4>
            <div className="post_content_wrapper">
              <pre>{data.content}</pre>
            </div>
          </section>
        </article>
      </div>
    );
  }
};

export default Post;
