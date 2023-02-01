#!/usr/bin/env node

const _ = require('lodash');

const income = parseFloat(process.argv[2]);

const rate = 0.12;

/*
 * all the values below are only for 2023
 */

const healthInsurance = 1128.48;
const healthInsuranceToReduce = 0;

const retirementInsurance = 812.23;
const disabilityInsurance = 332.88;
const accidentInsurance = 69.49;
const workFund = 101.94;

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
