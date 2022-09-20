import waldoImg from '../characterpics/waldo.png';
import bowserImg from '../characterpics/bowser.png';
import zoidbergImg from '../characterpics/zoidberg.png';

export default function CharIcons() {
  return (
    <div className="flex flex-col fixed right-0 top-1/3 bg-black bg-opacity-80 rounded-md p-1">
      <img className="h-16" src={waldoImg}></img>
      <img className="h-16" src={bowserImg}></img>
      <img className="h-16" src={zoidbergImg}></img>
    </div>
  );
}
