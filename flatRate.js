#!/usr/bin/env node

const _ = require('lodash');

const income = parseFloat(process.argv[2]);

const rate = 0.12;

/*
 * There is no guarentee of any correctness of this file (or this entire repo)
 * including numbers and business logic.
 * All the values below are only for the year 2026.
 */

const healthInsurance = 1495.04;
const healthInsuranceToReduce = 0;

const retirementInsurance = 1103.27;
const disabilityInsurance = 452.16;
const accidentInsurance =  94.39;
const workFund = 138.47;

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
