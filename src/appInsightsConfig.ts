namespace cc.appinsights {
    'use strict';
    
    export type TelemetryInitializer = (envelope: Microsoft.ApplicationInsights.Telemetry.Common.Envelope) => boolean;
    export type TelemetryItemSelector = (envelope: Microsoft.ApplicationInsights.Telemetry.Common.Envelope) => boolean;

    /**
     * Defines the options used to configure the module.
     */
    export interface AppInsightsConfig {
        /**
         * If true, automatically start the service during the run phase of the angular application.
         * Set false if you want to take control over when this service will start (default=true) 
         */
        autoRun?: boolean;
        /**
         * If true, decorate the $exceptionHandler service to automatically send exceptions
         * (default=true) 
         */
        autoTrackExceptions?: boolean;
        /**
         * If true, automatically send a page view event on each $route change (default=true) 
         */
        autoTrackPageViews?: boolean;
        /**
         * Telemtry initializers that should run when an ajax dependency item is about to be sent;
         */
        ajaxTelemetryInitializers?: Array<TelemetryInitializer | string>,
        /**
         * Telemtry initializers that should run when a page view item is about to be sent;
         * _ccDefaultPageViewTelemetryInitializer will be included by default
         */
        pageViewTelemetryInitializers?: Array<TelemetryInitializer | string>,
        /**
         * Telemtry initializers that should run when any telemetry item is about to be sent
         */
        telemetryInitializers?: Array<TelemetryInitializer | string>
    }
}