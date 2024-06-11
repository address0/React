# :memo:Address0의 React 공부공간
### 2024-06-11 ~
## 목차
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
2. `yarn` 설치
```bash
$ npm install --global yarn
```
3. CRA(Create-React-App)
```bash
# yarn create react-app 프로젝트명
$ yarn create react-app firstapp
# 리액트 앱 생성한 폴더로 이동
$ cd firstapp
# 리액트 앱 시작
$ yarn start
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