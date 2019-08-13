/* 
    compose函数，将x(y(z(component)))变成compose(x, y, z)(component)
*/
compose = (...fns) => fns.reduce((f, g) => (...args) => g(f(args)));