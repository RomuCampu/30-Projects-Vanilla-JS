function calculateAge(birthYear) {
    return 2018 - birthYear;
};
calculateAge(1981);
var ageJaqui = calculateAge(1978);
var ageCari = calculateAge(1983);
var ageMami = calculateAge(1959);
var ageChuqui = calculateAge(1981);

console.log(ageJaqui, ageCari, ageMami, ageChuqui);

function yearsUntilRetirment(year, firstName) {
    var age = calculateAge(year);
    var retirement = 67 - age;
    if (firstName == 'Chuqui') retirement = retirement - 17
    if (firstName == 'Mami') retirement = firstName + ' is already retired'
    if (retirement > 0) {
        return firstName + ' retires in ' + retirement + ' Years';
    } else {
        return firstName + ' is already retired';
    }
}
console.log(yearsUntilRetirment(1981, 'Chuqui'));
console.log(yearsUntilRetirment(1978, 'Jaqui'));
console.log(yearsUntilRetirment(1983, 'Carina'));
console.log(yearsUntilRetirment(1959, 'Mami'));
console.log(yearsUntilRetirment(1950, 'Madrina'));