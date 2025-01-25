#!/usr/bin/env node

const _ = require('lodash');

const income = parseFloat(process.argv[2]);

const rate = 0.12;

/*
 * all the values below are only for 2025
 */

const healthInsurance = 1384.97;
const healthInsuranceToReduce = 0;

const retirementInsurance = 1015.78;
const disabilityInsurance = 416.30;
const accidentInsurance = 86.90;
const workFund = 127.49;

const totalSocialInsurance = retirementInsurance + disabilityInsurance + accidentInsurance;
const taxableIncome = Math.round(income - totalSocialInsurance);
const incomeTax = Math.round(taxableIncome * rate - healthInsuranceToReduce);

const totalInsurance = totalSocialInsurance + healthInsurance + workFund;
const netIncome = income - incomeTax - totalInsurance;

const result = {
  netIncome,
  incomeTax,
  totalInsurance,
  totalSocialInsurance,
  healthInsurance,
  workFund,
};

const printableResult = _.mapValues(result, value => value.toFixed(2));

console.log(printableResult);
