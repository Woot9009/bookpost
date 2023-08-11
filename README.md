# Woot's Book Shelf
<img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=white"/>

<br/><br/>

[Woot's Book Shelf(독후감앱) 바로가기](https://woot9009.github.io/bookshelf/)

- 독후감 기능의 웹앱입니다.
- 독후감을 작성, 저장, 수정, 삭제 등이 가능합니다.
- 저장한 독후감의 장르별 분류 및 일자별 정렬을 통해 지난 독서기록을 되돌아 볼 수 있습니다.

<br/><br/>

#### <만들며 어려웠던 점과 해결방법>
<br/>
❔: 바닐라자바스크립트와 달리 여러의 컴포넌트를 넘나들어야함.(SPA의 장점을 살리기 위해 컴포넌트 구분이 중요)
<br/><br/>

❗: 컴포넌트 트리를 손으로 그려보고, 폴더를 구분.
___

❔: 작성 및 수정페이지에서 장르구분 전달에러.(아예 에러가 뜨거나 저장 후 포스트목록에서 엑스박스가 뜸)

❗: 장르 컴포넌트에서 매개변수명 수정.

___

❔: 포스트 상세페이지에서 정렬이 어긋남.(div나 p태그로 지정시 줄바꿈이 안됨. pre태그는 영역밖으로 넘어감)

❗: pre태그로 설정하되 css에서 white-space와 word-wrap을 부여.

___

❔: 빌드 후 페이지가 렌더링되지 않음.(body와 root는 뜨는 것을 보아 App컴포넌트 이후의 문제로 추정)

❗: 라우팅 홈페이지 설정과정에서의 문제. BrowserRouter 태그의 basename을 {process.env.PUBLIC_URL}로 설정.

<br/><br/>

##### <추후 개선점>
- 도서 사진, 저자 등을 함께 검색해 저장할 수 있도록. (네이버 책검색 Open API 연동)
- 로그인 기능을 추가하고 이용자별 데이터관리. (로그인 기능 구현 및 백엔드 추가 필요)
- 작성페이지에서 달력을 넘길 경우 저장이 안됨. (에디터 컴포넌트에서 인풋방식 수정 필요)
