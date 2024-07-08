# :memo:Address0의 React 공부공간
### 2024-06-11 ~
## 목차
[React 정의 및 설치](#1일차-react-정의-및-설치)  
[DOM 작성](#2일차-dom-작성)
  - [컴포넌트](#컴포넌트)
  - [스타일 추가(class)](#스타일-추가-classname으로-css-class지정)
  - [함수 정의](#함수-정의)
  - [export와 import](#importexport)
  - [JSX 정리](#jsx)
## 1일차: React 정의 및 설치
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
## 2일차: DOM 작성
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