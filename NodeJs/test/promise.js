// Example function returning a Promise
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = 'This is some data';
      reject({data, message: "Failed"});
      // Uncomment the next line to simulate an error
      // reject(new Error('An error occurred'));
    }, 2000);
  });
}

// Using the Promise
fetchData()
  .then(data => {
    console.log('Promise resolved:', data);
  })
  .catch(error => {
    console.error('Promise rejected:', error.message);
  });
