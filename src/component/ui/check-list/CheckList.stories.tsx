
import React from 'react';
import CheckList from './CheckList'; // CircleButton 컴포넌트 임포트

// 스토리 메타 데이터를 반드시 export
export default {
  title: 'ui/CheckList', // 스토리북에서 표시될 이름 (폴더 구조처럼)
  component: CheckList, // 스토리북에서 다룰 컴포넌트 지정
  args: {
    label: '비타민 챙겨먹기',
    checked: false
  }
};

const Template = (args) => <CheckList {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: '할 일을 입력해주세요',
};

export const Checked = Template.bind({});
Checked.args = {
  placeholder: '할 일을 입력해주세요',
  checked: true
};
