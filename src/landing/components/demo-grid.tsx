import Masonry from '@mui/lab/Masonry';
import { Box } from '@mui/material';
import PlaygroundList from 'playground/list';
import DemoCard from './demo-card';

function DemoGrid() {

  return (
    <Box py={4}>
      <Masonry columns={{ sx: 1, sm: 2, md: 3, lg: 4, xl: 4 }}>
        {PlaygroundList.map((props) => (
          <DemoCard key={props.title} {...props} />
        ))}
      </Masonry>
    </Box>
  );
}

export default DemoGrid;
