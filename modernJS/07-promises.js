const apiCall = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Success!');
    // reject('Error!');
  }, 2000);
});

// apiCall.then((value) => {
//   console.log(value); // Logs: Success!
// }).catch((error) => {
//   console.error(error); // Logs any error that occurred
// });

async function run() {
  try {
    const response = await apiCall;
    console.log(response); // Logs: Success!
    console.log('After the promise'); // This line will be executed immediately after the Promise is created
  } catch (error) {
    console.error(error); // Logs any error that occurred
  }
}

run();