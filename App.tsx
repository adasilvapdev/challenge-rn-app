import React from 'react';
import RootNavigation from './app/navigations/RootNavigation';
import { ThemeProvider } from './app/styles/themes/default/ThemeProvider'

const App = () => {
  return (
    <ThemeProvider>
      <RootNavigation />
    </ThemeProvider>
  );
};

export default App;