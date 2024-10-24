import React from 'react';
import IconTextButton from './IconTextButton'; // CircleButton 컴포넌트 임포트



// 스토리 메타 데이터를 반드시 export
export default {
  title: 'common/IconTextButton', // 스토리북에서 표시될 이름 (폴더 구조처럼)
  component: IconTextButton, // 스토리북에서 다룰 컴포넌트 지정
  args: {}
};

const Template = (args) => <IconTextButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  // 여기에 CircleButton이 필요로 하는 기본 props를 설정
  icon: '+',
  color: '#E2E8F0',
};
