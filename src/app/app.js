import angular from 'angular';
import uiBootStrap from 'angular-ui-bootstrap';
import ngSanitize from 'angular-sanitize';
import appDirective from "./directives/appDir";
import appController from "./controllers/appCtr";
import appService from "./services/appService";
import appConstants from "./constants/appConstants";
import '../style/app.css';
import 'bootstrap/dist/css/bootstrap.css';

const MODULE = "app";

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  };
};

angular.module(MODULE, [uiBootStrap, ngSanitize, appConstants, appController, appDirective, appService]);
export default MODULE;