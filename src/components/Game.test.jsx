import renderer from 'react-test-renderer';
import { Game } from './Game';

it('renders correctly', () => {
  const tree = renderer.create(<Game />).toJSON();
  expect(tree).toMatchSnapshot();
});
