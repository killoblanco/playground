import Landing from 'landing';
import i18n from 'locales';
import { StrictMode } from 'react';
import { I18nextProvider } from 'react-i18next';
import AppThemeProvider from 'styles/provider';

function Core() {
  return (
    <StrictMode>
      <I18nextProvider i18n={i18n}>
        <AppThemeProvider>
          <Landing />
        </AppThemeProvider>
      </I18nextProvider>
    </StrictMode>
  );
}

export default Core;
