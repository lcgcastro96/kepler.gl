'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _keymirror = require('keymirror');

var _keymirror2 = _interopRequireDefault(_keymirror);

var _defaultSettings = require('./default-settings');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ActionTypes = (0, _keymirror2.default)({

  // visState
  ADD_DATA: null,
  ADD_FILTER: null,
  ADD_LAYER: null,
  INTERACTION_CONFIG_CHANGE: null,
  LAYER_CONFIG_CHANGE: null,
  LAYER_VISUAL_CHANNEL_CHANGE: null,
  LAYER_TYPE_CHANGE: null,
  LAYER_VIS_CONFIG_CHANGE: null,
  LAYER_HOVER: null,
  LAYER_CLICK: null,
  MAP_CLICK: null,
  REMOVE_FILTER: null,
  REMOVE_LAYER: null,
  REMOVE_DATASET: null,
  REORDER_LAYER: null,
  SET_FILTER: null,
  SHOW_DATASET_TABLE: null,
  UPDATE_LAYER_BLENDING: null,
  UPDATE_VIS_DATA: null,
  TOGGLE_FILTER_ANIMATION: null,
  TOGGLE_LAYER_CONFIG_ACTIVE: null,
  ENLARGE_FILTER: null,
  SET_VISIBLE_LAYERS_FOR_MAP: null,
  TOGGLE_LAYER_FOR_MAP: null,
  SET_FILTER_PLOT: null,
  LOAD_FILES: null,
  LOAD_FILES_ERR: null,

  // mapState
  UPDATE_MAP: null,
  FIT_BOUNDS: null,
  TOGGLE_PERSPECTIVE: null,
  TOGGLE_SPLIT_MAP: null,
  TOGGLE_FULLSCREEN: null,

  // mapStyle
  MAP_CONFIG_CHANGE: null,
  SET_DEFAULT_MAP_STYLE: null,
  MAP_STYLE_CHANGE: null,
  LOAD_MAP_STYLES: null,
  LOAD_MAP_STYLE_ERR: null,
  MAP_BUILDING_CHANGE: null,

  // uiState
  TOGGLE_SIDE_PANEL: null,
  TOGGLE_MODAL: null,
  OPEN_DELETE_MODAL: null,

  // buildingData
  // TODO: remove this after mapzen shut down
  UPDATE_BUILDING_TILES: null,
  LOAD_BUILDING_TILE: null,
  LOAD_BUILDING_TILE_START: null,
  LOAD_BUILDING_TILE_SUCCESS: null,
  LOAD_BUILDING_TILE_ERROR: null,
  INITIATE_BUILDING_DATA: null,

  // all
  INIT: null,
  RECEIVE_MAP_CONFIG: null,
  RESET_MAP_CONFIG: null
});

var addPrefix = function addPrefix(actions) {
  return Object.keys(actions).reduce(function (accu, key) {
    var _extends2;

    return (0, _extends4.default)({}, accu, (_extends2 = {}, _extends2[key] = '' + _defaultSettings.ACTION_PREFIX + actions[key], _extends2));
  }, {});
};

exports.default = addPrefix(ActionTypes);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zdGFudHMvYWN0aW9uLXR5cGVzLmpzIl0sIm5hbWVzIjpbIkFjdGlvblR5cGVzIiwiQUREX0RBVEEiLCJBRERfRklMVEVSIiwiQUREX0xBWUVSIiwiSU5URVJBQ1RJT05fQ09ORklHX0NIQU5HRSIsIkxBWUVSX0NPTkZJR19DSEFOR0UiLCJMQVlFUl9WSVNVQUxfQ0hBTk5FTF9DSEFOR0UiLCJMQVlFUl9UWVBFX0NIQU5HRSIsIkxBWUVSX1ZJU19DT05GSUdfQ0hBTkdFIiwiTEFZRVJfSE9WRVIiLCJMQVlFUl9DTElDSyIsIk1BUF9DTElDSyIsIlJFTU9WRV9GSUxURVIiLCJSRU1PVkVfTEFZRVIiLCJSRU1PVkVfREFUQVNFVCIsIlJFT1JERVJfTEFZRVIiLCJTRVRfRklMVEVSIiwiU0hPV19EQVRBU0VUX1RBQkxFIiwiVVBEQVRFX0xBWUVSX0JMRU5ESU5HIiwiVVBEQVRFX1ZJU19EQVRBIiwiVE9HR0xFX0ZJTFRFUl9BTklNQVRJT04iLCJUT0dHTEVfTEFZRVJfQ09ORklHX0FDVElWRSIsIkVOTEFSR0VfRklMVEVSIiwiU0VUX1ZJU0lCTEVfTEFZRVJTX0ZPUl9NQVAiLCJUT0dHTEVfTEFZRVJfRk9SX01BUCIsIlNFVF9GSUxURVJfUExPVCIsIkxPQURfRklMRVMiLCJMT0FEX0ZJTEVTX0VSUiIsIlVQREFURV9NQVAiLCJGSVRfQk9VTkRTIiwiVE9HR0xFX1BFUlNQRUNUSVZFIiwiVE9HR0xFX1NQTElUX01BUCIsIlRPR0dMRV9GVUxMU0NSRUVOIiwiTUFQX0NPTkZJR19DSEFOR0UiLCJTRVRfREVGQVVMVF9NQVBfU1RZTEUiLCJNQVBfU1RZTEVfQ0hBTkdFIiwiTE9BRF9NQVBfU1RZTEVTIiwiTE9BRF9NQVBfU1RZTEVfRVJSIiwiTUFQX0JVSUxESU5HX0NIQU5HRSIsIlRPR0dMRV9TSURFX1BBTkVMIiwiVE9HR0xFX01PREFMIiwiT1BFTl9ERUxFVEVfTU9EQUwiLCJVUERBVEVfQlVJTERJTkdfVElMRVMiLCJMT0FEX0JVSUxESU5HX1RJTEUiLCJMT0FEX0JVSUxESU5HX1RJTEVfU1RBUlQiLCJMT0FEX0JVSUxESU5HX1RJTEVfU1VDQ0VTUyIsIkxPQURfQlVJTERJTkdfVElMRV9FUlJPUiIsIklOSVRJQVRFX0JVSUxESU5HX0RBVEEiLCJJTklUIiwiUkVDRUlWRV9NQVBfQ09ORklHIiwiUkVTRVRfTUFQX0NPTkZJRyIsImFkZFByZWZpeCIsIk9iamVjdCIsImtleXMiLCJhY3Rpb25zIiwicmVkdWNlIiwiYWNjdSIsImtleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxjQUFjLHlCQUFVOztBQUU1QjtBQUNBQyxZQUFVLElBSGtCO0FBSTVCQyxjQUFZLElBSmdCO0FBSzVCQyxhQUFXLElBTGlCO0FBTTVCQyw2QkFBMkIsSUFOQztBQU81QkMsdUJBQXFCLElBUE87QUFRNUJDLCtCQUE2QixJQVJEO0FBUzVCQyxxQkFBbUIsSUFUUztBQVU1QkMsMkJBQXlCLElBVkc7QUFXNUJDLGVBQWEsSUFYZTtBQVk1QkMsZUFBYSxJQVplO0FBYTVCQyxhQUFXLElBYmlCO0FBYzVCQyxpQkFBZSxJQWRhO0FBZTVCQyxnQkFBYyxJQWZjO0FBZ0I1QkMsa0JBQWdCLElBaEJZO0FBaUI1QkMsaUJBQWUsSUFqQmE7QUFrQjVCQyxjQUFZLElBbEJnQjtBQW1CNUJDLHNCQUFvQixJQW5CUTtBQW9CNUJDLHlCQUF1QixJQXBCSztBQXFCNUJDLG1CQUFpQixJQXJCVztBQXNCNUJDLDJCQUF5QixJQXRCRztBQXVCNUJDLDhCQUE0QixJQXZCQTtBQXdCNUJDLGtCQUFnQixJQXhCWTtBQXlCNUJDLDhCQUE0QixJQXpCQTtBQTBCNUJDLHdCQUFzQixJQTFCTTtBQTJCNUJDLG1CQUFpQixJQTNCVztBQTRCNUJDLGNBQVksSUE1QmdCO0FBNkI1QkMsa0JBQWdCLElBN0JZOztBQStCNUI7QUFDQUMsY0FBWSxJQWhDZ0I7QUFpQzVCQyxjQUFZLElBakNnQjtBQWtDNUJDLHNCQUFvQixJQWxDUTtBQW1DNUJDLG9CQUFrQixJQW5DVTtBQW9DNUJDLHFCQUFtQixJQXBDUzs7QUFzQzVCO0FBQ0FDLHFCQUFtQixJQXZDUztBQXdDNUJDLHlCQUF1QixJQXhDSztBQXlDNUJDLG9CQUFrQixJQXpDVTtBQTBDNUJDLG1CQUFpQixJQTFDVztBQTJDNUJDLHNCQUFvQixJQTNDUTtBQTRDNUJDLHVCQUFxQixJQTVDTzs7QUE4QzVCO0FBQ0FDLHFCQUFtQixJQS9DUztBQWdENUJDLGdCQUFjLElBaERjO0FBaUQ1QkMscUJBQW1CLElBakRTOztBQW1ENUI7QUFDQTtBQUNBQyx5QkFBdUIsSUFyREs7QUFzRDVCQyxzQkFBb0IsSUF0RFE7QUF1RDVCQyw0QkFBMEIsSUF2REU7QUF3RDVCQyw4QkFBNEIsSUF4REE7QUF5RDVCQyw0QkFBMEIsSUF6REU7QUEwRDVCQywwQkFBd0IsSUExREk7O0FBNEQ1QjtBQUNBQyxRQUFNLElBN0RzQjtBQThENUJDLHNCQUFvQixJQTlEUTtBQStENUJDLG9CQUFrQjtBQS9EVSxDQUFWLENBQXBCOztBQWtFQSxJQUFNQyxZQUFZLFNBQVpBLFNBQVk7QUFBQSxTQUNoQkMsT0FBT0MsSUFBUCxDQUFZQyxPQUFaLEVBQXFCQyxNQUFyQixDQUE0QixVQUFDQyxJQUFELEVBQU9DLEdBQVA7QUFBQTs7QUFBQSxzQ0FDdkJELElBRHVCLDZCQUV6QkMsR0FGeUIsMENBRUFILFFBQVFHLEdBQVIsQ0FGQTtBQUFBLEdBQTVCLEVBR0ksRUFISixDQURnQjtBQUFBLENBQWxCOztrQkFNZU4sVUFBVW5ELFdBQVYsQyIsImZpbGUiOiJhY3Rpb24tdHlwZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQga2V5TWlycm9yIGZyb20gJ2tleW1pcnJvcic7XG5pbXBvcnQge0FDVElPTl9QUkVGSVh9IGZyb20gJy4vZGVmYXVsdC1zZXR0aW5ncyc7XG5cbmNvbnN0IEFjdGlvblR5cGVzID0ga2V5TWlycm9yKHtcblxuICAvLyB2aXNTdGF0ZVxuICBBRERfREFUQTogbnVsbCxcbiAgQUREX0ZJTFRFUjogbnVsbCxcbiAgQUREX0xBWUVSOiBudWxsLFxuICBJTlRFUkFDVElPTl9DT05GSUdfQ0hBTkdFOiBudWxsLFxuICBMQVlFUl9DT05GSUdfQ0hBTkdFOiBudWxsLFxuICBMQVlFUl9WSVNVQUxfQ0hBTk5FTF9DSEFOR0U6IG51bGwsXG4gIExBWUVSX1RZUEVfQ0hBTkdFOiBudWxsLFxuICBMQVlFUl9WSVNfQ09ORklHX0NIQU5HRTogbnVsbCxcbiAgTEFZRVJfSE9WRVI6IG51bGwsXG4gIExBWUVSX0NMSUNLOiBudWxsLFxuICBNQVBfQ0xJQ0s6IG51bGwsXG4gIFJFTU9WRV9GSUxURVI6IG51bGwsXG4gIFJFTU9WRV9MQVlFUjogbnVsbCxcbiAgUkVNT1ZFX0RBVEFTRVQ6IG51bGwsXG4gIFJFT1JERVJfTEFZRVI6IG51bGwsXG4gIFNFVF9GSUxURVI6IG51bGwsXG4gIFNIT1dfREFUQVNFVF9UQUJMRTogbnVsbCxcbiAgVVBEQVRFX0xBWUVSX0JMRU5ESU5HOiBudWxsLFxuICBVUERBVEVfVklTX0RBVEE6IG51bGwsXG4gIFRPR0dMRV9GSUxURVJfQU5JTUFUSU9OOiBudWxsLFxuICBUT0dHTEVfTEFZRVJfQ09ORklHX0FDVElWRTogbnVsbCxcbiAgRU5MQVJHRV9GSUxURVI6IG51bGwsXG4gIFNFVF9WSVNJQkxFX0xBWUVSU19GT1JfTUFQOiBudWxsLFxuICBUT0dHTEVfTEFZRVJfRk9SX01BUDogbnVsbCxcbiAgU0VUX0ZJTFRFUl9QTE9UOiBudWxsLFxuICBMT0FEX0ZJTEVTOiBudWxsLFxuICBMT0FEX0ZJTEVTX0VSUjogbnVsbCxcblxuICAvLyBtYXBTdGF0ZVxuICBVUERBVEVfTUFQOiBudWxsLFxuICBGSVRfQk9VTkRTOiBudWxsLFxuICBUT0dHTEVfUEVSU1BFQ1RJVkU6IG51bGwsXG4gIFRPR0dMRV9TUExJVF9NQVA6IG51bGwsXG4gIFRPR0dMRV9GVUxMU0NSRUVOOiBudWxsLFxuXG4gIC8vIG1hcFN0eWxlXG4gIE1BUF9DT05GSUdfQ0hBTkdFOiBudWxsLFxuICBTRVRfREVGQVVMVF9NQVBfU1RZTEU6IG51bGwsXG4gIE1BUF9TVFlMRV9DSEFOR0U6IG51bGwsXG4gIExPQURfTUFQX1NUWUxFUzogbnVsbCxcbiAgTE9BRF9NQVBfU1RZTEVfRVJSOiBudWxsLFxuICBNQVBfQlVJTERJTkdfQ0hBTkdFOiBudWxsLFxuXG4gIC8vIHVpU3RhdGVcbiAgVE9HR0xFX1NJREVfUEFORUw6IG51bGwsXG4gIFRPR0dMRV9NT0RBTDogbnVsbCxcbiAgT1BFTl9ERUxFVEVfTU9EQUw6IG51bGwsXG5cbiAgLy8gYnVpbGRpbmdEYXRhXG4gIC8vIFRPRE86IHJlbW92ZSB0aGlzIGFmdGVyIG1hcHplbiBzaHV0IGRvd25cbiAgVVBEQVRFX0JVSUxESU5HX1RJTEVTOiBudWxsLFxuICBMT0FEX0JVSUxESU5HX1RJTEU6IG51bGwsXG4gIExPQURfQlVJTERJTkdfVElMRV9TVEFSVDogbnVsbCxcbiAgTE9BRF9CVUlMRElOR19USUxFX1NVQ0NFU1M6IG51bGwsXG4gIExPQURfQlVJTERJTkdfVElMRV9FUlJPUjogbnVsbCxcbiAgSU5JVElBVEVfQlVJTERJTkdfREFUQTogbnVsbCxcblxuICAvLyBhbGxcbiAgSU5JVDogbnVsbCxcbiAgUkVDRUlWRV9NQVBfQ09ORklHOiBudWxsLFxuICBSRVNFVF9NQVBfQ09ORklHOiBudWxsXG59KTtcblxuY29uc3QgYWRkUHJlZml4ID0gYWN0aW9ucyA9PlxuICBPYmplY3Qua2V5cyhhY3Rpb25zKS5yZWR1Y2UoKGFjY3UsIGtleSkgPT4gKHtcbiAgICAuLi5hY2N1LFxuICAgIFtrZXldOiBgJHtBQ1RJT05fUFJFRklYfSR7YWN0aW9uc1trZXldfWBcbiAgfSksIHt9KTtcblxuZXhwb3J0IGRlZmF1bHQgYWRkUHJlZml4KEFjdGlvblR5cGVzKTsiXX0=