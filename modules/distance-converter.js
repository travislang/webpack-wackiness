const milesToKilometers = miles => {
    return miles * 1.60934;
};

const inchesToCentimeters = inches => {
    return inches * 2.54;
}

const distanceConverter = {
    milesToKilometers,
    inchesToCentimeters
};

export default distanceConverter;