import { MenuOpenRounded, MenuRounded } from '@mui/icons-material';
import { Box, Drawer, Fab, List, ListItem, ListItemText, styled } from '@mui/material';
import Logo from 'components/logo';
import { PropsWithChildren, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import PlaygroundList from 'playground/list';
import SEO, { SeoProps } from '../../components/seo';

const MenuBtn = styled(Fab)(({ theme }) => ({
  position: 'absolute',
  zIndex: theme.zIndex.drawer + 10,
  top: theme.spacing(2),
  right: theme.spacing(2),
}));

const LogoBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  zIndex: theme.zIndex.drawer + 10,
  top: theme.spacing(2),
  left: theme.spacing(2),
}));

const Menu = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    top: theme.spacing(9),
    right: theme.spacing(2),
    width: theme.spacing(32),
    height: `calc(100vh - ${theme.spacing(11)})`,
    borderRadius: theme.spacing(1.5),
  },
}));

function Playground({ children, seo }: PropsWithChildren<{ seo: SeoProps }>) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const drawerOptions = useMemo(() => PlaygroundList.sort((a, b) => {
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 0;
  }), []);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <SEO {...seo}/>
      <LogoBox><Logo /></LogoBox>
      <MenuBtn color="primary" size="small" onClick={toggleDrawer}>
        {open ? <MenuOpenRounded sx={{ transform: 'rotate(180deg)' }} /> : <MenuRounded />}
      </MenuBtn>
      <Menu anchor="right" open={open} onClose={toggleDrawer}>
        <List>
          {drawerOptions.map(({ title, path }) => (
            <ListItem
              key={title}
              button
              component={Link}
              to={`/${path}`}
              onClick={toggleDrawer}
            >
              <ListItemText primary={t(title)} />
            </ListItem>
          ))}
        </List>
      </Menu>
      {children}
    </>
  );
}

export default Playground;
