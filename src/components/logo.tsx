import { IconButton, styled, Tooltip } from '@mui/material';
import me from 'assets/me.png';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Img = styled('img')(({ theme }) => ({
  width: theme.spacing(4),
  aspectRatio: '1 / 1',
}));

function Logo() {
  const { t } = useTranslation();
  return (
    <Tooltip title={t('Landing.Logo.Tooltip') as string}>
      <IconButton
        size="small"
        component={Link}
        to="/"
      >
        <Img src={me} alt={t('AltText')} />
      </IconButton>
    </Tooltip>
  );
}

export default Logo;
