var payRate = 17.3;
var hoursWorked = 45;
var regularHours = 40;
var grossPay;
var overtimeHours;
var overtimePay;

if (hoursWorked > 40) {
  // calculate amount being paid during overtime
  overtimeHours = hoursWorked - regularHours;
  overtimePay = overtimeHours * payRate * 1.5;

  // calculate grosspay and print
  grossPay = regularHours * payRate + overtimePay;
  console.log(grossPay);
} else {
  grossPay = regularHours * payRate;
  console.log(grossPay);
}





const getGrossPay = (payRate, hoursWorked) => {
  let grossPay;
  let reason = "Exactly 40 hours";
  if (hoursWorked > 40) {
    grossPay = 40 * payRate + getOvertimePay(payRate, hoursWorked);
    reason = "Over 40 hours";
    return `Pay Rate: ${payRate} Hours Worked: ${hoursWorked} Gross Pay: ${grossPay} Reason: ${reason}`;
  }
  grossPay = hoursWorked * payRate;
  if (hoursWorked < 40) {
    reason = "Under 40 hours";
  }

  return `Pay Rate: ${payRate} Hours Worked: ${hoursWorked} Gross Pay: ${grossPay} Reason: ${reason}`;
};

const getOvertimePay = (payRate, hoursWorked) => {
  const overTimeHours = hoursWorked - 40;
  const overTimePay = overTimeHours * (payRate * 1.5);
  return overTimePay;
};

console.log(getGrossPay(12.50, 20));
console.log(getGrossPay(25, 40));
console.log(getGrossPay(17.30, 45));
