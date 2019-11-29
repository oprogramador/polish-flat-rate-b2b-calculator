#!/usr/bin/env node

const _ = require('lodash');

const income = parseFloat(process.argv[2]);

const rate = 0.17;

/*
 * all the values below are only for 2019
 */

const healthInsurance = 342.32;
const healthInsuranceToReduce = 294.78;

// after 6 months and before 30 months (previously before 24 months):
//const retirementInsurance = 131.76;
//const disabilityInsurance = 54.00;
//const accidentInsurance = 11.27;
//const workFund = 0;

// after 30 months (previously after 24 months)
const retirementInsurance = 558.08;
const disabilityInsurance = 228.72;
const accidentInsurance = 47.75;
const workFund = 70.05;

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
