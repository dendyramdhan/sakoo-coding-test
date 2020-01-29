const hartaKarun = (value1, weight1, value2, weight2, maxKeranjang) => ((weight1 + weight2) <= maxKeranjang) ? value1 + value2 : (value2 >= value1) ? ((weight2 > maxKeranjang) ? value1 : value2) : value1;

module.exports = hartaKarun;