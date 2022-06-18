import renderer from 'react-test-renderer';
import {APPCard} from '../../../components/card';

it('should render component', () => {
  const mockGif:any = {
    images: {fixed_height :{url:'https://localhost'}},
    title: 'name',

  }

  const component = renderer.create(
    <APPCard gif={mockGif} handleView={(mockGif) => {} } />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});