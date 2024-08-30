

export const asyncAwait2Component = async(element) => {
  
    // const value1 = await slowPromise();
    // const value2 = await midPromise();
    // const value3 = await fastPromise();

    const [value1, value2, value3] = await Promise.all([
        slowPromise(),
        midPromise(),
        fastPromise()
    ]);

    element.innerHTML = `${value1} - ${value2} - ${value3}`;

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