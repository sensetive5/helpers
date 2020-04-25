function isOdd(num = 0) {
  const result = num % 2;
  return !!result;
}

function getOddNumbers(array = []) {
  return array.filter(isOdd);
}

function sortOddNumbers(array = []) {
  const arrayForSort = [...array];
  return arrayForSort.sort((a, b) => a - b);
}

function sort(array = []) {
  if (array.length === 0)
  	return array;
    
  const oddNumbers = getOddNumbers(array);
  
  if (oddNumbers.length === 0)
  	return array;
  
  let acc = 0;
  const sortedOddNumbers = sortOddNumbers(oddNumbers);
  const preparedArray = [];

  array.forEach(num => {
		if (isOdd(num)) {
    	finalArray.push(sortedOddNumbers[acc]);
      acc++;
    } else {
    	finalArray.push(num);
    }
  });
  
  return prepared;
}

module.exports = {
  getOddNumbers,
  sortOddNumbers,
  sort
}
