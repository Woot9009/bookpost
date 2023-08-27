import React, { useEffect } from 'react';
import PostEditor from '../components/PostEditor';

const New = () => {

  useEffect(() => {
    const titleElement = document.getElementsByTagName('title')[0];
    titleElement.innerHTML = `Woot's BookShelf - 새 독후감`;
  }, []);

  return (
    <div>
      <PostEditor />
    </div>
  );
};

export default New;
