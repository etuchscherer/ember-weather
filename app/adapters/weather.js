var Promise = Ember.RSVP.Promise;

function getJSON (url) {
  return new Promise(function(resolve, reject) {
    Ember.$.ajax({ // jquery + runloop + promises = fun times
      type: 'GET',
      url: url,
      success: function(data) {
        Ember.run(null, resolve, data);
      },
      error: function(err) {
        Ember.run(null, reject, err);
      }
    });
  });
}

export default DS.Adapter.extend({
  find: function(store, type, id) {
    return Ember.RSVP.hash({
      weatherCurrent: {blah: 'ahah'},
      weatherForecast: {blah: 'ahah'},
      imageApi: {blah: 'ahah'}
    });
  }
});

