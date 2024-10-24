import React from 'react';
import CircleButton from './CircleButton';
import colors from '../../../../src/styles/theme/colors';
import { PlusGrayIcon } from '@/assets/icons/plus_gray';
import { EditIcon } from '@/assets/icons/edit';



export default {
  title: 'common/CircleButton',
  component: CircleButton,
};

const Template = (args) => <CircleButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: <PlusGrayIcon />,
  color: colors.grey900,
};

export const Edit = Template.bind({});
Edit.args = {
  icon: <EditIcon />,
  color: colors.grey500,
};
