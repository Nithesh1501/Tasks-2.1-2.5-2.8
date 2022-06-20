//Get the Middle Character
function getMiddle(s)
{
  const one = 1;
  const two = 2;
  var position;
  var length;
  
  if(isOddorisEven(length)==='odd') {
      position = s.length / two;
      length = one;
  } 
  else {
      position = s.length / two - one;
      length = two;
  }
  return s.substring(position, position + length)
}

function isOddorisEven(length)
{
  if(length%two==one)
  {
    return 'odd';
  }
  else
  {
    return 'even';
  }
}
