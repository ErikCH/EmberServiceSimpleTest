import Ember from 'ember';

export default Ember.Service.extend({
    isAuthenticated: true,
    thisistest: function() {
        return "this is erik";
    }
});
