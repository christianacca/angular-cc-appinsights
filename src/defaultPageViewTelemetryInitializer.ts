namespace cc.appinsights {
    'use strict';

    _defaultPageViewTelemetryInitializer.$inject = ['$route'];

    export function _defaultPageViewTelemetryInitializer($route: ng.route.IRouteService): TelemetryInitializer {

        return setPageViewProperties;

        function parseControllerName(name?: string|angular.route.InlineAnnotatedFunction) {
            if (typeof name !== "string") {
                return null;
            }
            return name.split(' as')[0];
        }

        function setPageViewProperties(envelope: Microsoft.Telemetry.Envelope) {
            if (!$route.current) return true;

            var pageView = envelope.data.baseData;
            pageView.properties = pageView.properties || {};
            pageView.properties["Ng.Controller"] = parseControllerName($route.current.controller);
            pageView.properties["Ng.RoutePath"] = $route.current.originalPath || "/";

            return true;
        }
    }
}