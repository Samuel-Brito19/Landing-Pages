import * as Styled from './styles';
import linksMock from '../../components/NavLinks/mock'
import { GridContent } from '../../components/GridContent';
import { GridSection } from '../../components/GridSection';
import mock from '../../components/GridSection/mock';



function Home() {
  return (
    <div className="App">
      <GridSection {...mock} />
    </div>
  );
}
export default Home;
