export function initialize(container, app) {
  // application.inject('route', 'foo', 'service:foo');
            app.inject('route', 'start', 'service:start');
            app.inject('controller', 'start', 'service:start');
//            app.inject('component', 'start', 'service:start');
}

export default {
   
  name: 'init',
  initialize: initialize
};
