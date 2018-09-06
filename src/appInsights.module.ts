namespace cc.appinsights {
    'use strict';

    export let module = angular.module('cc-appinsights', []);
    
    module
        .provider('ccAppInsights', AppInsightsProvider)
        .factory('_ccDefaultPageViewTelemetryInitializer', _defaultPageViewTelemetryInitializer)
        .run(_maybeAutoRun);
}