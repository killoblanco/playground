import { Container } from '@mui/material';
import Section from 'components/section';
import NavBar from 'components/nav-bar';
import Footer from 'components/footer';
import DemoGrid from './components/demo-grid';

function Landing() {
  return (
    <Section>
      <Container fixed>
        <NavBar />
        <DemoGrid />
      </Container>
      <Footer />
    </Section>
  );
}

export default Landing;
