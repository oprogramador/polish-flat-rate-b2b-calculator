#!/usr/bin/env node

const _ = require('lodash');

const income = parseFloat(process.argv[2]);

const rate = 0.17;

/*
 * all the values below are only for 2020
 */

const healthInsurance = 381.81;
const healthInsuranceToReduce = 328.78;

const retirementInsurance = 615.93;
const disabilityInsurance = 252.43;
const accidentInsurance = 52.70;
const workFund = 77.31;

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
