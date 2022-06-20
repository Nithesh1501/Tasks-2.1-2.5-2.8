
const three = 3 ;
const seven = 7;
const twenty= 20;
const forty = 40;
const fifty = 50;


function rentalCarCost(d) {

  if(d>=seven)
    {
    return (d*forty)-fifty;
    }
  else if(d>=three)
    {
      return (d*forty)-twenty;
    }
  else
    {
      return d*forty;
    }
}
