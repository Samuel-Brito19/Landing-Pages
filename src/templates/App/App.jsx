import { GridImage } from '../../components/GridImage';
import * as Styled from './styles';
import mock from '../../components/GridImage/mock'
import { Footer } from '../../components/Footer';




function Home() {
  return (
    <div className="App">
      <Footer html={`<p><a href="https://beacons.page/otaviomiranda">Feito com ❤ por Samuel Magomedov</a></p>`} />
    </div>
  );
}
export default Home;
