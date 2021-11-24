import i18n from 'locales';
import { StrictMode } from 'react';
import { I18nextProvider } from 'react-i18next';
import AppThemeProvider from 'styles/provider';
import Router from './router';

function Core() {
  return (
    <StrictMode>
      <I18nextProvider i18n={i18n}>
        <AppThemeProvider>
          <Router />
        </AppThemeProvider>
      </I18nextProvider>
    </StrictMode>
  );
}

export default Core;
