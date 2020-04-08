import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'lodash';
import {
  SET_DIFFICULT,
  SET_DURATION,
  TOGGLE_ADDITION, TOGGLE_DIVISION, TOGGLE_EXPONENTIATION,
  TOGGLE_MULTIPLICATION,
  TOGGLE_SUBTRACTION,
} from './mutation-types';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    stats: [],
    settings: {
      duration: 7,
      difficult: 3,
      operations: {
        addition: true,
        subtraction: false,
        division: false,
        multiplication: false,
        exponentiation: false
      }
    }
  },
  mutations: {
    [SET_DURATION] (state, e) {
      state.settings.duration = Number(e.target.value)
    },
    [SET_DIFFICULT] (state, e) {
      state.settings.difficult = Number(e.target.value)
    },
    [TOGGLE_ADDITION] (state) {
      state.settings.operations.addition = !state.settings.operations.addition
    },
    [TOGGLE_SUBTRACTION] (state) {
      state.settings.operations.subtraction = !state.settings.operations.subtraction
    },
    [TOGGLE_DIVISION] (state) {
      state.settings.operations.division = !state.settings.operations.division
    },
    [TOGGLE_MULTIPLICATION] (state) {
      state.settings.operations.multiplication = !state.settings.operations.multiplication
    },
    [TOGGLE_EXPONENTIATION] (state) {
      state.settings.operations.exponentiation = !state.settings.operations.exponentiation
    },
  },
  actions: {},
  getters: {
    getTrainingDay: state => {
      const days = _.map(state.stats, 'day');
      return _.uniq(days).length + 1;
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
  },
});
