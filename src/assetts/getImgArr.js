import level0 from '../assetts/level1.jpg';
import level1 from '../assetts/level2.jpg';

export default function getImgArr() {
  let imgArr = [];
  imgArr[0] = { img: level0, id: 0 };
  imgArr[1] = { img: level1, id: 1 };

  return imgArr;
}
