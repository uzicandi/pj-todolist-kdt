
import React from 'react';
import CheckListDetail from './CheckListDetail'; // CircleButton 컴포넌트 임포트

// 스토리 메타 데이터를 반드시 export
export default {
  title: 'ui/CheckListDetail', // 스토리북에서 표시될 이름 (폴더 구조처럼)
  component: CheckListDetail, // 스토리북에서 다룰 컴포넌트 지정
  args: {
    label: '비타민 챙겨먹기',
    checked: false
  }
};

const Template = (args) => <CheckListDetail {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: '할 일을 입력해주세요',
};

export const Checked = Template.bind({});
Checked.args = {
  placeholder: '할 일을 입력해주세요',
  checked: true
};
