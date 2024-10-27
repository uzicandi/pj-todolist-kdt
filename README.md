# TODOLIST

## Getting Started

run the development server:

```bash
yarn dev
```

## Folder Structure

```
src
├── apis
│   ├── todos.ts
│   └── todos.type.ts
├── assets
│   ├── icons
│   └── images
├── component
│   ├── commonㅁ
│   │   ├── CircleButton
│   │   └── IconTextButton
│   ├── feature
│   │   ├── ImageForm
│   │   ├── MemoForm
│   │   ├── SearchForm
│   │   └── TodoList
│   ├── layout
│   │   ├── Header
│   │   ├── MainDetail
│   │   └── MainTodos
│   ├── shared
│   │   ├── check-list
│   │   ├── check-list-detail
│   │   └── search
│   └── ui
│       └── ContentArea
├── pages
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── api
│   │   └── api.ts
│   ├── fonts
│   │   ├── GeistMonoVF.woff
│   │   └── GeistVF.woff
│   ├── index.tsx
│   └── items
│       └── [itemId].tsx
├── store
│   ├── atoms.ts
│   └── todos.ts
└── styles
    ├── components
    │   ├── Button.module.css
    │   └── Icon.module.css
    ├── globals.css
    └── theme
        ├── colors.ts
        └── fonts.ts
```

## Packages

- jotai-tanstack-query
  - Jotai와 TanStack Query를 결합한 라이브러리. 상태 관리와 비동기 데이터 페칭을 간편하게 하기 위함
- jotai
  - 최소한의 코드로 전역 상태를 관리할 수 있어 사용
  - detail 페이지에서 이미지와 메모 값을 관리하는데 사용
- ky
  - fetch를 기반으로 하여 간단하고 효율적으로 처리
- react-responsive
  - 컴포넌트에서 삽입이 필요한 경우 hook을 사용
- storybook

## Implementation Function

### **공통**

- [x] **폰트 설정**: 제시된 폰트가 프로젝트에 적용되었나요?
- [x] **컬러 시스템 설정**: 디자인 시안에 따른 컬러 시스템이 구현되었나요?
- [x] **공용 컴포넌트 작성**: 공통적으로 사용되는 UI 요소가 재사용 가능한 컴포넌트로 작성되었나요?
- [x] **반응형 웹 디자인**:
  - [x] 모바일 레이아웃에서 정상적으로 작동하나요?
  - [x] 태블릿 레이아웃에서 정상적으로 작동하나요?
  - [x] 데스크탑 레이아웃에서 정상적으로 작동하나요?

### **할 일 목록 페이지(`/`)**

- [x] **목록 조회 기능**:
  - [x] 로고 버튼을 클릭했을 때 `/` 페이지로 이동(새로고침)이 되나요?
  - [x] 진행 중인 할 일과 완료된 할 일이 구분되어 표시되나요?
- [x] **할 일 추가 기능**:
  - [x] 입력창에 할 일을 입력하고 `추가하기` 버튼을 클릭하거나 엔터를 눌렀을 때 새로운 할 일이 생성되나요?
- [x] **할 일 완료 처리**:
  - [x] 진행 중인 할 일 항목의 체크박스를 클릭했을 때 완료 상태로 변경되나요?
  - [x] 완료된 할 일 항목의 체크박스를 클릭했을 때 다시 진행 중 상태로 변경되나요?

### **할 일 상세 페이지(`/items/{itemId}`)**

- [x] **할 일 수정 기능**:
  - [x] 할 일 항목의 이름을 수정할 수 있나요?
  - [x] 할 일의 진행 상태를 수정할 수 있나요?
  - [x] 메모를 추가할 수 있나요?
  - [x] 이미지를 첨부할 수 있나요? (이미지 파일 이름은 영어로만 이루어지고, 크기는 5MB 이하인가요?)
  - [x] `수정 완료` 버튼을 클릭했을 때 수정 사항이 반영되고 할 일 목록 페이지로 이동되나요?
  - [x] 다시 할 일을 클릭했을 때 추가된 메모와 이미지가 잘 보이나요?
- [x] **할 일 삭제 기능**:
  - [x] `삭제하기` 버튼을 클릭했을 때 할 일이 삭제되고, 할 일 목록 페이지로 이동되나요?

### **추가 요구사항**

- [x] **코드 주석 및 문서화**:
  - [x] 주요 기능과 컴포넌트에 대한 주석이 작성되었나요?
- [x] **README.md 작성**:
  - [x] 프로젝트 설명이 명시되었나요?
  - [x] 사용 방법이 명시되었나요?
