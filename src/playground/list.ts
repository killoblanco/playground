import flappyBird from 'assets/previews/flappy-bird.jpg';
import tags from './tags';

export interface PlaygroundElement {
  description: string;
  preview: string;
  title: string;
  tags: string[];
}

const PlaygroundList: PlaygroundElement[] = [
  {
    description: 'Playground.FlappyBird.Description',
    preview: flappyBird,
    title: 'Playground.FlappyBird.Title',
    tags: [
      tags.mui,
      tags.react,
      tags.styled,
      tags.typescript,
    ],
  },
];

export default PlaygroundList;
