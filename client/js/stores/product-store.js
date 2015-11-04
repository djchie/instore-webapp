var AppDispatcher = require('../dispatcher/AppDispatcher');
var ProductConstants = require('../constants/product-constants');
var objectAssign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _store = {
  searchResults: []
};

function _setSearchResults (searchResults) {
  _store.searchResults = searchResults;
}

var ProductStore = objectAssign({}, EventEmitter.prototype, {
  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  getSearchResults: function() {
    console.log('product-store: getSearchResults', _store.searchResults);
    return _store.searchResults;
  },
});

AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.actionType) {
    case ProductConstants.SEARCH_PRODUCT:
      _setSearchResults(action.searchResults);
      console.log('Change emitted!', _store.searchResults);
      break;

    default:
      return true;
  }

  ProductStore.emitChange();

});

module.exports = ProductStore;
