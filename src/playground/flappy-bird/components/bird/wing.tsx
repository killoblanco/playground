import { alpha, Box, keyframes, styled } from '@mui/material';
import { amber, grey } from '@mui/material/colors';

const flapping = keyframes({
  'from': { transform: 'rotatex(180deg)' },
  'to': { transform: 'rotatex(0deg)' },
});

const Wing = styled(Box)(({ theme }) => ({
  animation: `
    ${flapping}
    200ms
    ease-in-out
    infinite
    alternate-reverse`,
  backgroundImage: `linear-gradient(
    150deg,
    ${grey['100']},
    ${amber.A400} 25%,
    ${amber.A400} 50%,
    ${amber['900']}
  )`,
  border: `1px solid ${alpha(grey['600'], 0.25)}`,
  borderRadius: `50% ${theme.spacing(0.75)} 50% 25%`,
  height: '45%',
  left: theme.spacing(-0.5),
  position: 'absolute',
  top: '45%',
  transformOrigin: 'top center',
  width: '45%',
}));

export default Wing;
