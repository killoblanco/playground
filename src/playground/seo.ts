import { SeoProps } from '../components/seo';
import tags from './tags';

const PlaygroundSeo: { [k: string]: SeoProps } = {
  flappyBird: {
    title: 'Flappy Bird',
    description: 'A simple Flappy Bird clone',
    keywords: [
      'flappy bird',
      'flappy',
      'bird',
      'clone',
      tags.mui,
      tags.react,
      tags.styled,
      tags.typescript,
    ],
  },
};

export default PlaygroundSeo;
