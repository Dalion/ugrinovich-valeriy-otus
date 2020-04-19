import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'lodash';
import {
  ADD_STAT,
  DECREMENT_DURATION,
  GENERATE_EXPRESSION,
  SET_DIFFICULT,
  SET_DURATION,
  TOGGLE_ADDITION,
  TOGGLE_DIVISION,
  TOGGLE_EXPONENTIATION,
  TOGGLE_MULTIPLICATION,
  TOGGLE_SUBTRACTION,
} from './mutation-types';
import mapStateToLocalStorage from '../plugins/mapStateToLocalStorage';

Vue.use(Vuex);

function randomInt(min, max) {
  return min + Math.floor((max - min) * Math.random());
}

const OPERATOR_MAP = {
  addition: '+',
  subtraction: '-',
  division: '/',
  multiplication: '*',
  exponentiation: '^'
};

export default new Vuex.Store({
  state: {
    stats: [],
    settings: {
      duration: 420,
      difficult: 3,
      operations: {
        addition: true,
        subtraction: false,
        division: false,
        multiplication: false,
        exponentiation: false,
      },
    },
    expression: {
      firstOperand: 15,
      secondOperand: null,
      thirdOperand: null,
      firstOperator: "+",
      secondOperator: '-',
      total: 32
    }
  },
  mutations: {
    initialiseStore(state) {
      if(localStorage.getItem('store')) {
        //eslint-disable-next-line
        const {expression, ...initialState} = JSON.parse(localStorage.getItem('store'));
        this.replaceState(
            Object.assign(state, initialState)
        );
      }
    },
    [DECREMENT_DURATION](state) {
      state.settings.duration -= 1;
    },
    [SET_DURATION](state, e) {
      state.settings.duration = Number(e.target.value) * 60;
    },
    [SET_DIFFICULT](state, e) {
      state.settings.difficult = Number(e.target.value);
    },
    [TOGGLE_ADDITION](state) {
      state.settings.operations.addition = !state.settings.operations.addition;
    },
    [TOGGLE_SUBTRACTION](state) {
      state.settings.operations.subtraction = !state.settings.operations.subtraction;
    },
    [TOGGLE_DIVISION](state) {
      state.settings.operations.division = !state.settings.operations.division;
    },
    [TOGGLE_MULTIPLICATION](state) {
      state.settings.operations.multiplication = !state.settings.operations.multiplication;
    },
    [TOGGLE_EXPONENTIATION](state) {
      state.settings.operations.exponentiation = !state.settings.operations.exponentiation;
    },
    [GENERATE_EXPRESSION](state) {
      const difficult = state.settings.difficult;
      const firstOperand = randomInt(0, 10 * difficult);
      const secondOperand = randomInt(0, 10 * difficult);
      const thirdOperand = randomInt(0, 10 * difficult);
      const operatorsObj = _.pickBy(state.settings.operations, (value) => value);
      const operatorsArr = _.map(_.keys(operatorsObj), operator => OPERATOR_MAP[operator]);
      const firstOperator = operatorsArr[randomInt(0, operatorsArr.length)];
      const secondOperator = operatorsArr[randomInt(0, operatorsArr.length)];
      const total = eval(`
            ${firstOperand}
            ${firstOperator}
            ${secondOperand}
            ${secondOperator}
            ${thirdOperand}
        `);
      state.expression = {
        firstOperand: firstOperand,
        secondOperand: secondOperand,
        thirdOperand: thirdOperand,
        firstOperator: firstOperator,
        secondOperator: secondOperator,
        total: total
      };
    },
    [ADD_STAT] (state, payload) {
      state.stats.push(payload);
    }
  },
  actions: {},
  getters: {
    getTrainingDay: state => {
      const days = _.map(state.stats, 'day');
      return _.uniq(days).length;
    },
    lastResult: state => {
      return _.last(state.stats);
    },
    avgAccuracy: state => {
      const accuracyArr = _.map(state.stats, 'accuracy');
      return accuracyArr.length > 0
          ? _.sum(accuracyArr) / accuracyArr.length
          : undefined;
    },
    getDuration: state => {
      return state.settings.duration;
    },
    getExpressionElements: state => {
      return {
        ...state.expression
      };
    }
  },
  plugins: [mapStateToLocalStorage],
});
