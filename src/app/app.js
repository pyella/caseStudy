import angular from 'angular';
import uiBootStrap from 'angular-ui-bootstrap';
import ngSanitize from 'angular-sanitize';
import appDirective from "./directives/appDir";
import appController from "./controllers/appCtr";
import '../style/app.css';
import 'bootstrap/dist/css/bootstrap.css';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor() {
    this.url = 'https://github.com/preboot/angular-webpack';
  }
}

const MODULE = "app";

angular.module(MODULE, [uiBootStrap, ngSanitize, appController, appDirective]);
export default MODULE;