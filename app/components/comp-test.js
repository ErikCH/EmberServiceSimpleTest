import Ember from 'ember';
var inject = Ember.inject;

export default Ember.Component.extend({
    start: inject.service(),
    message: 'test',
    actions: {
        pressMe: function() {
            var testText = this.get('start').thisistest();
            this.set('message',testText); 
            console.log(this.get('start').isAuthenticated);
        }
    }

});
