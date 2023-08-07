import { Heading } from '../../components/Heading';
import * as Styled from './styles';
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
          children: 'mundo',
          link: '/about',
          newTab: false
        },
        {
          children: 'coldplay',
          link: '/UK',
          newTab: false
        },

      ]} />
    </div>
  );
}
export default Home;
