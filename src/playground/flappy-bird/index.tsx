import Bird from './components/bird';
import Cloud from './components/cloud';
import Grass from './components/grass';
import Ground from './components/ground';
import Sky from './components/sky';
import Stage from './components/stage';

function FlappyBird() {
  return (
    <Stage>
      <Sky>
        <Cloud idx={1} />
        <Cloud idx={2} />
        <Cloud idx={3} />
        <Bird />
      </Sky>
      <Ground>
        <Grass />
      </Ground>
    </Stage>
  );
}

export default FlappyBird;
