import React from 'react';
import IconTextButton from './IconTextButton';
import colors from '@/styles/theme/colors';
import { PlusGrayIcon } from '@/assets/icons/plus_gray';

export default {
  title: 'common/IconTextButton',
  component: IconTextButton,
  args: {}
};

const Template = (args) => <IconTextButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: <PlusGrayIcon />,
  text: '추가하기',
  color: colors.slate200
};

