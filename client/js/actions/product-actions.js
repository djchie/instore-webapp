var AppDispatcher = require('../dispatcher/AppDispatcher');
var ProductConstants = require('../constants/product-constants');

var ProductActions = {

  searchProduct: function(query, location){
    var mockResults = ['Apple iPhone 6s', 'Apple iPhone 6s Plus', 'Apple iPhone 6s', 'Apple iPhone 6'];
    AppDispatcher.handleAction({
      actionType: ProductConstants.SEARCH_PRODUCT,
      searchResults: mockResults
    });
  }

};

module.exports = ProductActions;
