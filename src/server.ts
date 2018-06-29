import { Utils } from './utils';
import app from './app';

const PORT = 3000;

const utils = new Utils();

console.log(utils.getRandom(100));

app.listen(PORT, () => {
  console.log('Listening : ' + PORT);
});
