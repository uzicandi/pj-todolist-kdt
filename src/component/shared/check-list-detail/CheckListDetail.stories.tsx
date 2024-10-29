
import React from 'react';
import CheckListDetail from './CheckListDetail';

export default {
  title: 'ui/CheckListDetail',
  component: CheckListDetail,
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
