import { Base } from '.';

import mock from './mock';
import { GridSection } from '../../components/GridSection';
import gridMock from '../../components/GridSection/mock';

export const mockBase = {
  children: (
    <>
      <GridSection {...gridMock} background />
      <GridSection {...gridMock} />
      <GridSection {...gridMock} background />
      <GridSection {...gridMock} />
      <GridSection {...gridMock} background />
    </>
  ),
  ...mock,
}

export default {
  title: 'Templates/Base',
  component: Base,
  args: {

  },
};

export const Template = (args) => {
  return (
    <div>
      <Base {...args} />
    </div>
  );
};
