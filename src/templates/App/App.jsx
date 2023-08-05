import { Heading } from '../../components/Heading';
import * as Styled from './styles';
import { SectionBackground } from '../../components/SectionBackground';
import { NavLinks } from '../../components/NavLinks';

function Home() {
  return (
    <div className="App">
      <NavLinks links={[
        {
          children: 'olá',
          link: '/sobre',
          newTab: false
        },
        {
          children: 'Messi',
          link: '/messi',
          newTab: true
        }
      ]} />
    </div>
  );
}
export default Home;
