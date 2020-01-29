#!/usr/bin/env node

const _ = require('lodash');

const income = parseFloat(process.argv[2]);

const rate = 0.17;

/*
 * all the values below are only for 2019
 */

const healthInsurance = 362.34;
const healthInsuranceToReduce = 312.02;

// after 6 months and before 30 months (previously before 24 months):
//const retirementInsurance = 152.26;
//const disabilityInsurance = 62.40;
//const accidentInsurance = 13.03;
//const workFund = 0;

// after 30 months (previously after 24 months)
const retirementInsurance = 612.19;
const disabilityInsurance = 250.90;
const accidentInsurance = 52.37;
const workFund = 76.84;

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
