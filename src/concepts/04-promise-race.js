

export const promiseRaceComponent = (element) => {
  
    element.innerHTML = 'Loading...';

    const renderValue = (value) => {
        element.innerHTML = value;
    }

    Promise.race([
        slowPromise(), 
        midPromise(), 
        fastPromise()
    ]).then(renderValue);

}

const slowPromise = () => new Promise (resolve => {
    setTimeout(() => {
        resolve('Slow Promise');
    }, 2000);
    }
);

const midPromise = () => new Promise (resolve => {
    setTimeout(() => {
        resolve('Mid Promise');
    }, 1500);
    }
);

const fastPromise = () => new Promise (resolve => {
    setTimeout(() => {
        resolve('Fast Promise');
    }, 1000);
    }
);