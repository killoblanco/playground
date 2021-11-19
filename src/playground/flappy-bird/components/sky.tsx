import { Box, styled } from '@mui/material';
import { cyan } from '@mui/material/colors';
import noise from 'assets/noise.svg';

const Sky = styled(Box)(() => ({
  alignItems: 'center',
  backgroundColor: cyan.A100,
  backgroundImage: `linear-gradient(
    to bottom,
    ${cyan.A700},
    transparent
  ),
  url(${noise})`,
  display: 'center',
  filter: 'contrast(100%) brightness(100%)',
  gridColumn: 1,
  gridRow: 1,
  justifyContent: 'center',
  overflow: 'hidden',
  position: 'relative',
}));

export default Sky;
