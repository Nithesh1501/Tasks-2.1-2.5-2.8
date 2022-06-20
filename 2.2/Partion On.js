// partition the items array so that all values for which pred returns true are
// at the end, returning the index of the first true value
function partitionOn(pred, items) {
  var leftPartition = [];
  var rightPartition = [];
  
  for(var i = 0; i < items.length; i++) {
    var item = items[i];
    
    if(!pred(item)) {
      leftPartition.push(item);
    } else {
      rightPartition.push(item);
    }
  }
  
  items.length = 0;
  
  for(var i = 0; i < leftPartition.length; i++) {
    items.push(leftPartition[i]);
  }
  
  for(var i = 0; i < rightPartition.length; i++) {
    items.push(rightPartition[i]);
  }
  
  return leftPartition.length;
}