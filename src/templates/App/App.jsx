import * as Styled from './styles';
import linksMock from '../../components/NavLinks/mock'
import { GridContent } from '../../components/GridContent';
import { GridSection } from '../../components/GridSection';
import mock from '../../components/GridSection/mock';



function Home() {
  return (
    <div className="App">
      <GridSection
        title={'MY GRID'}
        description={'Não pega'}
        grid={[
          {
            title: 'Teste 1',
            description:
              'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.',
          },
          {
            title: 'Teste 2',
            description:
              'Lorem ipsum dolor, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.',
          },
          {
            title: 'Teste 3',
            description:
              'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.',
          },
        ]}
      />
    </div>
  );
}
export default Home;
