console.log('Script started');

function lowerCaseWords(arr) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(arr)) {
      reject("Input must be an array");
    } else {
      const result = arr
        .filter(item => typeof item === 'string')
        .map(str => str.toLowerCase());

      resolve(result);
    }
  });
}

const mixedArray = ['Hello', 'WORLD', 123, 'JavaScript', true, 'nodeJS'];

lowerCaseWords(mixedArray)
  .then(result => console.log(result))   
  .catch(error => console.error(error));