import { Button, Grid, Stack, styled, Typography } from '@mui/material';
import teapot from 'assets/teapot.gif';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import MainLayout from './layouts/main';

const Teapot = styled('img')(({ theme }) => ({
  margin: '0 auto',
  width: theme.spacing(30),
}));

const Wrapper = styled(Grid)(({ theme }) => ({
  minHeight: `calc(100vh - ${theme.spacing(9.25)})`,
  height: `calc(100vh - ${theme.spacing(25.75)})`,
  padding: theme.spacing(4, 0),
}));

function NotFound() {
  const { t } = useTranslation('translation', { keyPrefix: '404' });
  return (
    <MainLayout>
      <Wrapper container justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={6} md={4}>
          <Stack spacing={4}>
            <Teapot src={teapot} alt={t('ImgAlt') as string} />
            <Typography variant="h4" align="center">
              {t('Title')}
            </Typography>
            <Typography variant="h5" align="center">
              {t('Subtitle')}
            </Typography>
            <Button
              component={Link}
              to="/"
              color="primary"
              variant="contained"
              size="large"
            >
              {t('BackBtn')}
            </Button>
          </Stack>
        </Grid>
      </Wrapper>
    </MainLayout>
  );
}

export default NotFound;
