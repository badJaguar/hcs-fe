import * as React from 'react';
import type { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';

import createEmotionCache from '../utility/createEmotionCache';
import { getDesignTokens } from '../styles/theme/palette';
import GlobalStyles from '../styles/theme/globalStyle';
import ResponsiveAppBar from '../src/common/app-bar';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import themeOptions from '../styles/theme/themeOptions';

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const modedTheme = createTheme({ ...themeOptions, ...getDesignTokens('light') });

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={modedTheme}>
        <GlobalStyles />
        <CssBaseline />
        <ResponsiveAppBar />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
