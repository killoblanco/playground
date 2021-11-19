import { Box, styled } from '@mui/material';
import { brown } from '@mui/material/colors';
import noise from 'assets/noise.svg';

const Ground = styled(Box)(() => ({
  alignItems: 'flex-start',
  backgroundColor: brown['300'],
  backgroundImage: `linear-gradient(
    to bottom,
    ${brown['500']},
    transparent
  ),
  url(${noise})`,
  display: 'flex',
  filter: 'contrast(100%) brightness(100%)',
  gridColumn: 1,
  gridRow: 2,
  height: '100%',
}));

export default Ground;
