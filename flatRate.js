#!/usr/bin/env node

const _ = require('lodash');

const income = parseFloat(process.argv[2]);

const rate = 0.12;

/*
 * all the values below are only for 2024
 */

const healthInsurance = 1258.39;
const healthInsuranceToReduce = 0;

const retirementInsurance = 916.35;
const disabilityInsurance = 375.55;
const accidentInsurance = 78.40;
const workFund = 115.01;

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
