import waldoImg from '../characterpics/waldo.png';
import bowserImg from '../characterpics/bowser.png';
import zoidbergImg from '../characterpics/zoidberg.png';
import { useSelector } from 'react-redux';
export default function CharIcons() {
  let waldoState = useSelector((state) => state.charPics.waldoIsFound);
  let bowserState = useSelector((state) => state.charPics.bowserIsFound);
  let zoidbergState = useSelector((state) => state.charPics.zoidbergIsFound);

  return (
    <div className="flex flex-col fixed right-0 top-1/3 bg-black bg-opacity-80 rounded-md p-1 ">
      <img className={'h-16 bg-black' + (waldoState ? 'opacity-50' : '')} src={waldoImg}></img>
      <img className={'h-16 bg-black' + (bowserState ? 'opacity-50' : '')} src={bowserImg}></img>
      <img className={'h-16 bg-black' + (zoidbergState ? 'opacity-50' : '')} src={zoidbergImg}></img>
    </div>
  );
}
