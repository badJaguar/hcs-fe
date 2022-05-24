import * as React from 'react';
import { useRouter } from 'next/router';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { TabContext, TabList } from '@mui/lab';

import Link from '../NextLink';
import { PAGES_WEB, TabValue } from './utils/constants';

const DesktopAppMenu = () => {
  const { asPath } = useRouter();
  const [value, setValue] = React.useState<TabValue>(PAGES_WEB[0].value);

  const handleChange = (_: React.SyntheticEvent, newValue: TabValue) => {
    setValue(newValue);
  };

  React.useLayoutEffect(() => {
    setValue(asPath as TabValue);
  }, [asPath]);

  return (
    <Box sx={{
      flexGrow: 1,
      justifyContent: 'flex-end',
      pr: 3,
      display: { xxs: 'none', md: 'flex' }
    }}>
      <TabContext value={value}>
        <Box>
          <TabList onChange={handleChange} aria-label="tabs">
            {PAGES_WEB.map(p => (
              <Tab
                key={p.label}
                component={Link}
                href={p.value}
                label={p.label}
                value={p.value}
              />
            ))}
          </TabList>
        </Box>
      </TabContext>
    </Box >
  );
};

export default DesktopAppMenu;
