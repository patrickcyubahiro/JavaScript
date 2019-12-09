var param = 'size';
var config = {
    [param]: 12,
    ['mobile' + param.charAt(0).toUpperCase() + param.slice(1)]: 4
};

console.log(config.mobileSize); // 4
