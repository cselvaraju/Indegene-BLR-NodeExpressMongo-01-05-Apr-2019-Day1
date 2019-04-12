function objTraverse(obj, objName) {
    let keys = Object.keys(obj);
    keys.forEach(
        k => {
            if (typeof obj[k] === 'object' &&
                Array.isArray(obj[k]) === false) {
                objTraverse(obj[k], objName + '.' + k);
            } else {
                console.log('Key:', objName + '.' + k,
                    'Value:', obj[k],
                    'TYPE:', typeof (obj[k]));
            }
        }
    );
}

obj = {
    name: 'ABCD',
    scores: [10, 20, 30],
    address: {
        flat: 30,
        street: 'ABC Street',
        city: {
            name: 'Bangalore',
            pincode: 560001
        }
    }
};
objTraverse(obj, 'obj');