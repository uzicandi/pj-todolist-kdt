import React from 'react';
import IconTextButton from './IconTextButton'; // CircleButton 컴포넌트 임포트
import colors from '@/styles/theme/colors';
import { PlusGrayIcon } from '@/assets/icons/plus_gray';

// 스토리 메타 데이터를 반드시 export
export default {
  title: 'common/IconTextButton', // 스토리북에서 표시될 이름 (폴더 구조처럼)
  component: IconTextButton, // 스토리북에서 다룰 컴포넌트 지정
  args: {}
};

const Template = (args) => <IconTextButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: <PlusGrayIcon />,
  text: '추가하기',
  color: colors.slate200
};

