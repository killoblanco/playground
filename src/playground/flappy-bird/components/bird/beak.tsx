import { alpha, Box, styled } from '@mui/material';
import { red } from '@mui/material/colors';

const Beak = styled(Box)(({theme}) => ({
  backgroundColor: red['400'],
  backgroundImage: `linear-gradient(
    to bottom,
    transparent 40%,
    ${red['600']} 50%,
    transparent 60%
  )`,
  backgroundPositionX: theme.spacing(0.75),
  backgroundRepeat: 'no-repeat',
  border: `solid 1px ${alpha(red['700'], 0.5)}`,
  borderRadius: '50% 24% 50% 50%',
  height: '33%',
  position: 'absolute',
  top: '45%',
  right: theme.spacing(-0.75),
  width: '60%',
}))

export default Beak;
