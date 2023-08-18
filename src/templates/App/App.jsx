import { GridTwoColum } from '../../components/GridTwoColum'
import { GridSection } from '../../components/GridSection'
import { GridImage } from '../../components/GridImage';

import { Base } from '../Base';
import { useEffect, useState, useRef } from 'react';
import { mapData } from '../../api/map-data'
import { PageNotFound } from '../PageNotFound';
import { Loading } from '../Loading';

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const load = async () => {
      try {
        console.log('fetching');
        const data = await fetch(
          'http://localhost:1337/api/pages/?filters[slug]=pagina-louca&populate=deep'
        );
        const json = await data.json();
        const pageData = mapData(json);
        setData(pageData[0]);
      } catch (e) {
        console.log(e);
        setData(undefined);
      }
    };
    load();
  }, []);
  if (data === undefined) {
    return <PageNotFound />;
  }
  if (data && !data.slug) {
    return <Loading />;
  }


  const { menu, sections, footerHtml, slug } = data;
  const { links, text, link, srcImg } = menu;

  return (
    <Base
      links={links}
      footerHtml={footerHtml}
      logoData={{ text, link, srcImg }}
    >
      {sections.map((section, index) => {
        const { component } = section;
        const key = `${slug}-${index}`;

        if (component === 'section.section-two-columns') {
          return <GridTwoColum key={key} {...section} />;
        }

        if (component === 'section.section-content') {
          return <GridContent key={key} {...section} />;
        }

        if (component === 'section.section-grid-text') {
          return <GridSection key={key} {...section} />;
        }

        if (component === 'section.section-grid-image') {
          return <GridImage key={key} {...section} />;
        }
      })}
    </Base>
  );
}


export default Home;
