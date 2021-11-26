import { Container } from '@mui/material';
import Footer from 'components/footer';
import NavBar from 'components/nav-bar';
import Section from 'components/section';
import { PropsWithChildren } from 'react';
import SEO from '../../components/seo';

function MainLayout({ children }: PropsWithChildren<any>) {
  return (
    <Section>
      <SEO
        title="Playground"
        description="Take a look at my playground where I show you fun projects that I have done in my free time"
        keywords={[
          'playground',
          'react',
          'typescript',
          'javascript',
          'frontend',
          'web development',
          'web design',
          'design',
          'kamilo vasquez'
        ]}
      />
      <Container fixed>
        <NavBar />
        {children}
      </Container>
      <Footer />
    </Section>
  );
}

export default MainLayout;
