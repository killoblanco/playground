import { Container } from '@mui/material';
import { PropsWithChildren } from 'react';
import Footer from 'components/footer';
import NavBar from 'components/nav-bar';
import Section from 'components/section';

function MainLayout({children}: PropsWithChildren<any>) {
  return (
    <Section>
      <Container fixed>
        <NavBar />
        {children}
      </Container>
      <Footer />
    </Section>
  );
}

export default MainLayout;
