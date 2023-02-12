import React from 'react';
import { Game } from './components/Game.jsx';

export default {
  title: 'Q2/Game',
  component: Game,
};

const Template = (args) => <Game {...args} />;

export const Index = Template.bind({});
Index.args = {
  history: [
    {
      squares: ['X', 'O', 'X', 'X', 'O', 'O', 'O', 'X', 'X'],
    },
  ],
};
