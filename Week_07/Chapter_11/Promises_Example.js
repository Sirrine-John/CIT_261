function Promise_all(promises) {
    return new Promise((resolve, reject) => {
      let len = promises.length;
      let cnt = 0
      let resultArray = new Array;
      resultArray = [];
      for (cnt; cnt<len; cnt++){
        resultArray.push(promises[cnt].then(function(result){return resolve(result)})
        .catch(reject => {return reject(promises[cnt])}))};
    // resolve(resultArray);
    resolve(resultArray);
    })
    };
  
  // Test code.
  Promise_all([]).then(array => {
    console.log("This should be []:", array);
  });
  function soon(val) {
    return new Promise(resolve => {
      setTimeout(() => resolve(val), Math.random() * 500);
    });
  }
  Promise_all([soon(1), soon(2), soon(3)]).then(array => {
    console.log("This should be [1, 2, 3]:", array);
  });
  // Promise_all([soon(1), Promise.reject("X"), soon(3)])
  //   .then(array => {
  //     console.log("We should not get here");
  //   })
  //   .catch(error => {
  //     if (error != "X") {
  //       console.log("Unexpected failure:", error);
  //     }
  //   });