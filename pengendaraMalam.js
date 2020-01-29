module.exports = n => {
    let hours = Math.floor(n / 60);
    let minutes = Math.round(((n / 60) - hours) * 60);
    hours = (hours.toString().length < 2) ? "0" + hours : hours;
    minutes = (minutes.toString().length < 2) ? "0" + minutes : minutes;
    return (hours + minutes).split('').map(val => parseInt(val)).reduce((prev, cur) => prev + cur);
};