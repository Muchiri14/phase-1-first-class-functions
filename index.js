function receivesAFunction(callback) {
    callback();
}
function returnsANamedFunction() {
    function name(){
    }
    return name
}
function returnsAnAnonymousFunction() {
    return () => {}
}