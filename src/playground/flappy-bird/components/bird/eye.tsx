import { alpha, Box, styled } from '@mui/material';
import { blueGrey, grey } from '@mui/material/colors';

const Eye = styled(Box)(({ theme }) => ({
  backgroundImage: `radial-gradient(
    circle at 60% 45%,
    ${blueGrey['800']} 10%,
    transparent 20%
  ), linear-gradient(
    70deg,
    ${alpha(blueGrey['500'], 0.5)},
    ${grey['100']} 25%
  )`,
  border: `1px solid ${alpha(grey['600'], 0.4)}`,
  borderRadius: `${theme.spacing(0.75)} 50%`,
  height: theme.spacing(2.25),
  position: 'absolute',
  right: 0,
  top: 0,
  transform: 'rotate(8deg)',
  width: theme.spacing(2.5),
}));

export default Eye;
