import React from 'react';
import { Game } from '..';

export default {
  title: 'Q2/Game',
  component: Game,
};

const Template = (args) => <Game {...args} />;

export const Index = Template.bind({});
