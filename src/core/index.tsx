import FlappyBird from 'playground/flappy-bird';
import { StrictMode } from 'react';
import AppThemeProvider from 'styles/provider';

function Core() {
  return (
    <StrictMode>
      <AppThemeProvider>
        <FlappyBird />
      </AppThemeProvider>
    </StrictMode>
  );
}

export default Core;
