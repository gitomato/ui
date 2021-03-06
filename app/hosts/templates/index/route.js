import Ember from 'ember';

export default Ember.Route.extend({
  model(/* params */) {
    return this.get('store').findAll('hostTemplate').then((templates) => {
      if ( templates.length ) {
        return templates;
      } else {
        this.transitionTo('hosts.new');
      }
    });

  }
});
