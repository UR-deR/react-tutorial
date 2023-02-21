import React from 'react';
import { Game } from './Game';

export class GameContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: [],
        },
      ],
    };
  }
  render() {
    return (
      <Game
        history={this.state.history}
        updateHistory={(history, squares) => {
          this.setState({
            history: history.concat([
              {
                squares: squares,
              },
            ]),
          });
        }}
      />
    );
  }
}
