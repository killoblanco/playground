import { Card, CardActionArea, CardContent, CardMedia, Chip, Grid, styled, Typography } from '@mui/material';
import { PlaygroundElement } from 'playground/list';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Media = styled(CardMedia)(() => ({
  aspectRatio: '16 / 10',
})) as typeof CardMedia;

function DemoCard({
  description,
  path,
  preview,
  title,
  tags,
}: PlaygroundElement) {
  const { t } = useTranslation();
  const [isHover, setIsHover] = useState(false);
  const toggleHover = () => setIsHover(!isHover);

  return (
    <Card
      elevation={isHover ? 12 : 2}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <CardActionArea component={Link} to={`/${path}`}>
        <Media
          component="img"
          image={preview}
          alt={t(title)}
        />
        <CardContent>
          <Typography variant="h5">{t(title)}</Typography>
          <Typography variant="body1">{t(description)}</Typography>
          <Grid container spacing={1} mt={1}>
            {tags.map((tag) => (
              <Grid item key={tag}>
                <Chip label={tag} variant="outlined" size="small" />
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default DemoCard;
