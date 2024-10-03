// Function that logs a success message after 500ms
const delayedSuccess = () => {
    setTimeout(() => {
      let success = { message: 'delayed success!' };
      console.log(success);
    }, 500);
  };
  
  // Function that throws and catches an error after 500mss
  const delayedException = () => {
    setTimeout(() => {
      try {
        throw new Error('error: delayed exception!');
      } catch (e) {
        console.error(e);
      }
    }, 500);
  };
  
  // Call the functions
  delayedSuccess();
  delayedException();