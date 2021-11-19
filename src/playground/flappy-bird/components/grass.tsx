import { alpha, Box, keyframes, styled } from '@mui/material';
import { green, lightGreen, lime, teal } from '@mui/material/colors';

const grass = keyframes({
  to: { backgroundPosition: '110%, 100%' },
});

const Grass = styled(Box)(({ theme }) => ({
  animation: `
    ${grass}
    8s
    linear
    infinite
  `,
  backgroundImage: `repeating-linear-gradient(
    -45deg,
    transparent,
    transparent ${theme.spacing(1.25)},
    ${alpha(teal[500], 0.3)} ${theme.spacing(1.25)},
    ${alpha(teal[500], 0.3)} ${theme.spacing(2.5)}
  ),
  linear-gradient(
    to bottom,
    ${lime['500']},
    ${lightGreen['500']},
    ${green['500']}
  )`,
  backgroundSize: '200% 100%, 100%',
  boxShadow: theme.shadows[12],
  height: theme.spacing(3),
  width: '100%',
}));

export default Grass;
