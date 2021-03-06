var prettifyJSONString = function(str) {
  'use strict';
  var obj = JSON.parse(str);
  return JSON.stringify(obj, null, 2);
};

function get_param_list(_raw_param) {
  var param_list = [];
  if (_raw_param) {
    var _param = _raw_param[0];
    //console.log(_param);
    for (var _key_param in _param) {
      var obj_list = _param[_key_param];
      for (var i = 0; i < obj_list.length; ++i) {
        for (var _key_obj in obj_list[i]) {
          param_list.push(_key_obj);
          if (_key_obj == "weight_filler" || _key_obj == "bias_filler" ||
              _key_obj == "scale_filler" || _key_obj == "shift_filler" ||
              _key_obj == "data_filler") {
            param_list.push(_key_obj+"_type");
            for (var j = 0;j < _filler_info.length; ++j) {
              param_list.push(_key_obj+"_"+_filler_info[j]);
            }
          }
        }
      }
    }
  }
  return param_list;
}

function get_param_default(_raw_param) {
  var param_default = {};
  if (_raw_param) {
    var _param = _raw_param[0];
    //console.log(_param);
    for (var _key_param in _param) {
      var obj_list = _param[_key_param];
      for (var i = 0; i < obj_list.length; ++i) {
        for (var _key_obj in obj_list[i]) {
          param_default[_key_obj] = obj_list[i][_key_obj];
        }
      }
    }
  }
  return param_default;
}

String.prototype.trim = function(patterns) {
  var result = "";
  for (var i = 0; i < this.length; i++) {
    var valid = true;
    for (var j = 0; j < patterns.length; j++) {
      if (this[i] == patterns[j]) {
        valid = false;
      }
    }
    if (valid === true) {
      result += this[i];
    }
  }
  return result;
};
