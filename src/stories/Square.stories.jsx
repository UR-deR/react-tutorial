import React from 'react';
import { Square } from '..';

export default {
  title: 'Q2/Square',
  component: Square,
};

const Template = (args) => <Square {...args} />;

export const Index = Template.bind({});
Index.args = {
  onClick: () => console.log('You clicked Square!'),
  value: '△',
};
