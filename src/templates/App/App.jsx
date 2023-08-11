import { GridImage } from '../../components/GridImage';
import * as Styled from './styles';
import mock from '../../components/GridImage/mock'




function Home() {
  return (
    <div className="App">
      <GridImage {...mock} />
    </div>
  );
}
export default Home;
