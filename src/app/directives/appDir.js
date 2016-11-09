/**
 * Created by PY028031 on 11/5/2016.
 */
const MODULE_DIRECTIVES = "app.directives";

let app = () => {
    return {
        template: require('../app.html'),
        controller: 'AppCtrl',
        controllerAs: 'app'
    }
};

angular.module(MODULE_DIRECTIVES, [])
    .directive("app", app);

export default MODULE_DIRECTIVES;