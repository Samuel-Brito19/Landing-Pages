import { GridImage } from '../../components/GridImage';
import * as Styled from './styles';
import mock from '../Base/mock';
import { GridSection } from '../../components/GridSection'
import gridMock from '../../components/GridSection/mock'
import { Base } from '../Base';




function Home() {
  return (
    <div className="App">
      <Base {...mock} children={
        <>
          <GridSection {...gridMock} background />
          <GridSection {...gridMock} />
          <GridSection {...gridMock} background />
          <GridSection {...gridMock} />
        </>
      } />
    </div>
  );
}
export default Home;
