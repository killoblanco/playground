import { Box, styled } from '@mui/material';

const Stage = styled(Box)(() => ({
  display: 'grid',
  gridTemplate: '1fr 16vh / 1fr',
  height: '100vh',
}))

export default Stage;
