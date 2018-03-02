import { module } from 'angular';
import * as ngMaterial from 'angular-material';
import uiRouter from 'angular-ui-router';
import 'chart.js'; 
import 'angular-chart.js';
import configure from './core.config';

const core = module('app.core', [ngMaterial, uiRouter, 'ngMessages', 'chart.js'])
    .config(configure)
    .name;

export default core;