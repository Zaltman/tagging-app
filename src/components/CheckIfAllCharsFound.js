export default function CheckIfAllCharsFound(charState) {
  let waldoState = charState.waldoIsFound;
  let bowserState = charState.bowserIsFound;
  let zoidbergState = charState.zoidbergIsFound;
  let isAllCharsFound = false;
  if (waldoState === true && bowserState === true && zoidbergState === true) {
    isAllCharsFound = true;
  }
  return isAllCharsFound;
}
