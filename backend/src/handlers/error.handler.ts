module.exports = function( target, key, descriptor ) {
    const oldFunction = descriptor.value;
    descriptor.value =  function (...args: any) {
        try{
            console.log(1);
            oldFunction.apply(this, args);
            console.log(args.next);
        }
        catch ( error ) {
            console.error(error);
        }
    }

    return descriptor;
}
