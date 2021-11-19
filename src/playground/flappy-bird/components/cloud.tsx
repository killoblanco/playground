import { Box, keyframes, styled, Theme } from '@mui/material';
import { blueGrey, lightBlue } from '@mui/material/colors';

const bg = {
  backgroundColor: blueGrey['50'],
  backgroundImage: `radial-gradient(
    circle at center 80%,
    transparent 50%,
    ${lightBlue['200']}
  )`,
};

const cloudCorner = (theme: Theme) => ({
  bottom: 0,
  content: '" "',
  height: theme.spacing(8.75),
  position: 'absolute',
  width: theme.spacing(8.75),
});

const wind = keyframes({
  to: { right: '150vw' },
});

interface CloudProps {
  idx: number;
}

const Cloud = styled(Box)<CloudProps>(({ theme, idx }) => ({
  ...bg,
  animation: `
    ${wind}
    ${18 - ((idx - 1) * 3)}s
    ${((idx - 1) * 3)}s
    infinite
    ${(idx - 1) > 0 ? 'ease-out' : 'linear'}
  `,
  borderRadius: '50% 50% 0 0',
  height: theme.spacing(12.5),
  position: 'absolute',
  right: '-50vw',
  top: theme.spacing(3 + ((idx - 1) * 10)),
  width: theme.spacing(12.5),
  zIndex: 0,
  '&::after': {
    ...bg,
    ...cloudCorner(theme),
    borderRadius: '50% 50% 50% 0',
    right: theme.spacing(-6.25),
  },
  '&::before': {
    ...bg,
    ...cloudCorner(theme),
    borderRadius: '50% 50% 0 50%',
    left: theme.spacing(-6.25),
  },
}));

export default Cloud;
