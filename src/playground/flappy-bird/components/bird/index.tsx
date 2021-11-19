import { Box, keyframes, styled } from '@mui/material';
import { amber, grey } from '@mui/material/colors';
import Beak from './beak';
import Wing from './wing';
import Eye from './eye';

const bounce = keyframes({
  'from': { transform: 'translatey(-10px)' },
  'to': { transform: 'translatey(10px)' },
});

const Body = styled(Box)(({ theme }) => ({
  animation: `
    ${bounce}
    400ms
    ease-in-out
    infinite
    alternate`,
  backgroundImage: `linear-gradient(
    150deg,
    ${grey['100']},
    ${amber.A400} 25%,
    ${amber.A400} 50%,
    ${amber['900']}
  )`,
  borderRadius: '50%',
  height: theme.spacing(5),
  placeSelf: 'center',
  position: 'relative',
  width: theme.spacing(6.25),
  zIndex: 100,
}));

function Bird() {
  return (
    <Body>
      <Eye />
      <Beak />
      <Wing />
    </Body>
  );
}

export default Bird;
