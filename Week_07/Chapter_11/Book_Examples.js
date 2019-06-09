/* ES7 */
const isMomHappy = true;

// Promise
const willIGetNewPhone = new Promise(
    (resolve, reject) => {
        if (isMomHappy) {
            const phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone);
        } else {
            const reason = new Error('mom is not happy');
            reject(reason);
        }

    }
);

// 2nd promise
async function showOff(phone) {
    return new Promise(
        (resolve, reject) => {
            var message = 'Hey friend, I have a new ' +
                phone.color + ' ' + phone.brand + ' phone';

            resolve(message);
        }
    );
};

// call our promise
async function askMom() {
    try {
        console.log('before asking Mom');

        let phone = await willIGetNewPhone;
        let message = await showOff(phone);

        console.log(message);
        console.log('after asking mom');
    }
    catch (error) {
        console.log(error.message);
    }
}

(async () => {
    await askMom();
})();




let resultA, resultB, resultC;

function addAsync(num1, num2) {
  
    return Promise.resolve(num1 + num2);
}

addAsync(1, 2)
	.then(success => {
		resultA = success;
        return resultA;
	})
	.then(success => addAsync(success, 3))
	.then(success => {
		resultB = success;
        return resultB;
	})
	.then(success => addAsync(success, 4))
	.then(success => {
		resultC = success;
        return resultC;
	})
    .then(success => {
        console.log('total: ' + success)
        console.log(resultA, resultB, resultC)
    });