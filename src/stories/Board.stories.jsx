import React from 'react';
import { Board } from '../components/Board';

export default {
  title: 'Q2/Board',
  component: Board,
};

const Template = (args) => <Board {...args} />;

export const Index = Template.bind({});
Index.args = {
  squares: Array(9).fill('△'),
  onClick: () => console.log('You clicked Board!'),
};
