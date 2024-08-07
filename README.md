# :memo:Address0의 React 공부공간
### 2024-06-11 ~
## 목차  
1. React 정의 및 설치
  - [:mag\_right:React란?](#mag_rightreact란)
  - [React 설치](#react-설치)
  - [:+1: Google 공식문서 활용 자습하기](#1-google-공식문서-활용-자습하기)
2. DOM 작성
  - [컴포넌트](#컴포넌트)
  - [스타일 추가](#스타일-추가-classname으로-css-class지정)
  - [함수 정의](#함수-정의)
  - [import/export](#importexport)
  - [JSX](#jsx)
  - [Props](#props)
  - [조건부 렌더링](#조건부-렌더링)
  - [반복 렌더링(리스트 렌더링)](#반복-렌더링리스트-렌더링)
  - [Pure Components](#pure-components)
## 1. React 정의 및 설치
### :mag_right:React란?
**페이스북에서 개발한 오픈소스 라이브러리**  
- 사용자 인터페이스(UI) 구축에 사용
- 대규모 애플리케이션&데이터 잦은 변경에 높은 성능
- Vue와의 공통점: 컴포넌트 기반 아키텍처 사용 :arrow_forward: 높은 재사용성과 유지보수
- Vue와의 차이점: Vue는 프레임워크, React는 라이브러리 기반 개발 도구
### React 설치
명령어 및 설치 과정
1. `node.js` 및 npm 설치
- [Node.js](https://nodejs.org/en/) :arrow_forward: 해당 링크에서 LTS 설치 시 npm 함께 설치
2. `react-app` 설치
```bash
$ npx create-react-app my-app
```
3. 리액트 앱 시작
```bash
$ cd my-app
$ npm start
# 코드 초기화
$ rm -f src/*
```
### :+1: Google 공식문서 활용 자습하기
- 참고링크: [React로 대화형 틱택토 구현하기](https://reactjs-kr.firebaseapp.com/tutorial/tutorial.html)
```bash
# React app 설치
$ npm install -g create-react-app
$ create-react-app firstapp
$ npm start
# 코드 초기화
$ cd my-app
$ rm -f src/*
```
## 2. DOM 작성
* 비고: npm업데이트 문제로 해결을 위해 npm cache app 설치됨
### 컴포넌트
- JSX 문법으로 작성(Javascript + return(HTML))
- 컴포넌트 이름은 항상 대문자로 시작
- HTML 태그는 소문자로 시작
- 컴포넌트 생성 및 중첩
- **하나의 컴포넌트는 여러 개의 JSX태드를 반환할 수 없다.**(`<div></div>` 또는 `<></>`부모로 감싸야 함)
```js
// 컴포넌트 생성
function MyButton() {
  return (
    <button>I'm a button</button>
  );
}
// 컴포넌트 중첩: MyApp 안에 MyButton 중첩하기
// export default: 파일의 기본 컴포넌트 지정
export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <br />   
      {/* JSX: HTML과 달리 모든 태그를 닫아야 함 */}
      <MyButton />
    </div>
  );
}
```
- 출력 화면  
![컴포넌트 결과물](readme_photos/image.png)
### 스타일 추가: `className`으로 css class지정
```js
function MyButton() {
  return (
    <button classname="avatar">I'm a button</button>
  );
}
```
```css
.avatar {
  border-radius: 50px;
}
```
### 함수 정의
- `function Name() {}` 사용하여 함수 정의
- `export default`로 함수 내보내기
- **컴포넌트 안에 다른 컴포넌트 정의 불가** :arrow_forward: 최상위 레벨에서 컴포넌트 정의
```js
function Hello () {
  return (
    <div>
      <button>Click!</button>
    </div>
  )
};
export default Hello;  // 컴포넌트 사용가능
```
### import/export
- Default export 방식: 특정 파일에서 기본적으로 export하는 컴포넌트 사용
- Name export방식: 파일 내 특정 컴포넌트 사용
```js
// App.js
import Hello from './Hello';  // Default import
import { Goodbye } from './Hello';  // Name import

function App() {
  return (
    <div>
      <Hello />
      <Goodbye />
    </div>
  );
}

export default App;
// Hello.js
function hello() {
  const click = function (event) {
    alert('Hello, world!')
  }

  return (
    <button onClick={click}>click me!</button>
  )
}

export function Goodbye () {
  const click = function (event) {
    alert('Goodbye, world!')
  }

  return (
    <button onClick={click}>Don't click me!!</button>
  )
}  // Name export

export default hello;  // Default export
```
### JSX
- JSX: JavaScript 안에서 HTML 마크업 실행(컴포넌트 역할)
- 컴포넌트 생성 및 다수 element 반환 시, 하나의 부모 태그로 감싸기 > 기본적으로 html이 아닌 JS 객체로 변환되기 때문
- 모든 태그는 닫아야 함
- 변수명은 Camel Case로 작성(`aria-*`, `data-*`) 제외
- Tip: html과 svg를 JSX로 변환하는 변환기 사용가능  [JSX변환기](https://transform.tools/html-to-jsx)
```html
<!-- 변환 전 -->
<ul>
    <li>Invent new traffic lights
    <li>Rehearse a movie scene
    <li>Improve the spectrum technology
</ul>
```
```js
// 변환 후
export default function TodoList() {
  return (
    <>
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
    </>
  );
}
```
- attribute 정적 지정: 따옴표("", '')로 묶기
- attribute 동적 지정: 중괄호({})로 묶기(함수 호출 가능)
  - JSX 태그 안의 문자, `=` 바로 뒤에 오는 속성만 단일 중괄호 사용
  - ex: `<h1>{name}'s To Do List</h1>`, `src={avatar}`
- Object 및 CSS 인라인 스타일: 이중 중괄호
  - 사실 JSX 단일 중괄호 안에 JS객체(중괄호로 구성)가 들어있는 구조라 문법상으로는 다르지않음..
```js
function formatDate(date) {
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long' }
  ).format(date);
}    // 함수작성

export default function Avatar() {
  const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
  const description = 'Gregorio Y. Zara';
  return (
    <h1 style={{backgroundColor: 'black', color:'pink'}}>Today: {formatDate(today)}</h1>
    <img
      className="avatar"  // 정적 지정
      src={avatar}        // 동적 지정
      alt={description}
    />
  );
}
```
- **여러 표현식을 하나의 Object로 옮겨서 참조 가능**
```js
const person = {
    name: 'SSAFY',
    theme: {
      backgroundColor: 'black',
      color: 'pink'
    }
}
```
### Props
- props: 부모-자식 간 정보 통신 수단
- 부모 컴포넌트: props 전달 / 자식 컴포넌트: props read
- 자식 컴포넌트 지정 시, 인자 기본값 설정 가능(`props={undefined}`으로 전달될 때만 사용)
- props 속성명과 자식 컴포넌트 속성명이 일치할 시 spread(`{...props}`) 사용가능
```js
function Avatar({ person, size = 100 }) {    // 원래 props만 인자로 받지만, 구조분해 할당으로 상속받음. size 기본값: 100
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}
// 원래 상속되는 모습
function Avatar(props) {
  let person = props.person;
  let size = props.size;
  // ...
}

function Profile(props) {   // spread 문법
  return (
    <div className="card">
      <Avatar {...props} />
    </div>
  );
}

export default function Profile() {
  return (
    <div>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi', 
          imageId: 'YfeOqp2'
        }}
      />
      <Profile 
        size={200}
        person={{ 
          name: 'Katsuko Saruhashi', 
          imageId: 'YfeOqp2'
        }}
      />
    </div>
  );
}
```
### Props: Component 중첩
- `{children}` prop을 통해 JSX 태그 내 컨텐츠 중첩 가능
```js
function Card({children}) {
  return (
    <div className="card">
      {children}   {/* 부모 컴포넌트에서 임의로 채우는 구멍을 만드는 늑김.. */}
    </div>
  )
}

export default function Profile() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
       />
    </Card>
  )
}
```
![alt text](readme_photos/children.png)
- props는 페이지 렌더링마다 새로운 버전의 props 전달받음
- props 데이터가 사용자와 상호작용할 경우, **props 자체 변경이 아닌 state를 설정해야 한다.**
### 조건부 렌더링
- `if`, `&&`, `?:` 연산자로 조건부 JSX 렌더링 가능
- 아무것도 반환하지 않을 땐 `return null`이나 `&&` 활용
- `&&` 사용 시, 조건을 숫자로 두지 않기(0으로 조건을 걸면 0=false가 아닌 0 자체로 인식하여 반환함)
```js
// if 사용법
if (bool_name) {
  return ( {/* bool_name이 True일때 출력하는 요소 */} );
  // 반환X -> return null
}
return ( {/* bool_name이 False일때 출력하는 요소 */} );
// 삼항 연산자(?:) 사용법
return (
  <li className="item">
    {bool_name ? {/* bool_name이 True일때 */} : {/* bool_name이 False일때 */}}
  </li>
);
// && 활용
return (
  <li className="item">
    {name} {bool_name && 'bool_name=true일때 추가로 렌더링할 요소'}
  </li>
);
// 변수 조건부 활용
let content = name;
if (bool_name) {
  content = (<del>name</del>)
}
return <li>{content}</li>
```
### 반복 렌더링(리스트 렌더링)
- JS sequence 메서드 사용하여 유사한 컴포넌트 반복 표시 가능: `filter()`, `map()`
```js
const listname = [a, b, c, d]  // 데이터 배열 정의
export default function List () {
  const listItems = listname.map(item => 
    <li key={item.id}>{item}</li>    // 반복 시 항상 key 지정
  )  // listname의 요소들을(item) listItems에 매핑
  return <ul>{listItems}</ul>
}  // listItems 반환
```
- 반복 시 필수 요소인 key: 항상 고유한 값을 가지고, 변경 허용하지 않음(DB 항목 간 식별 기능)
### Pure Components
- React: 모든 components == pure 가정하고 동작함
- React 컴포넌트 input에 대해 항상 같은 JSX 반환
- **Side Effect**: 컴포넌트 렌더링 전 정의한 객체or변수 변경 시 발생하는 버그
```js
let guest = 0;

function Cup() {
  // 컴포넌트 렌더링 시 변수값 변경: 버그 발생 위험
  guest = guest + 1;
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
  return (
    <>
      <Cup />
      <Cup />
      <Cup />
    </>
  );
}
```
![alt text](readme_photos/side_effect.png)
- 해결 방법: 렌더링 시 local에서 객체 생성하여 변경
```js
function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaGathering() {
  let cups = [];   // 빈 배열: cup 생성하여 push
  for (let i = 1; i <= 12; i++) {
    cups.push(<Cup key={i} guest={i} />);
  }
  return cups;
}
```