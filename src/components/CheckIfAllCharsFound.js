import { useSelector } from 'react-redux';
import stopStopWatch from './reducers/stopwatch/stopStopWatch';

export default function CheckIfAllCharsFound(charState) {
  let waldoState = charState.waldoIsFound;
  let bowserState = charState.bowserIsFound;
  let zoidbergState = charState.zoidbergIsFound;
  let isAllCharsFound = false;
  // const foundCharsData = useSelector((state) => state.charPics);
  // const bowserIsFound = foundCharsData.bowserIsFound;
  // const waldoIsFound = foundCharsData.waldoIsFound;
  // const zoidbergIsFound = foundCharsData.zoidbergIsFound;
  // console.log({ bowserIsFound, waldoIsFound, zoidbergIsFound });
  if (waldoState === true && bowserState === true && zoidbergState === true) {
    isAllCharsFound = true;
  }
  //   console.log({ waldoState, bowserState, zoidbergState });
  // if (bowserIsFound == true && waldoIsFound == true && zoidbergIsFound == true) {
  //   stopStopWatch();
  console.log({ waldoState, bowserState, zoidbergState });
  // }
  return isAllCharsFound;
}
