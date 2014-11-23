FastRender.debugger = {};
FastRender.debugger._logs = [];
FastRender.debugger.log = function function_name(message/*, args..*/) {
  if(
    typeof console != 'undefined' &&
    typeof Meteor._localStorage != 'undefined' && 
    Meteor._localStorage.getItem('__frlog') == "1") 
  {
    FastRender.debugger._logs.push(arguments);
    arguments[0] = "FR: " + arguments[0];
    console.log.apply(console, arguments);
  }
}

FastRender.debugger.enable = function() {
  Meteor._localStorage.setItem('__frlog', "1");
  location.reload();
};

FastRender.debugger.disable = function() {
  Meteor._localStorage.removeItem('__frlog');
  location.reload();
};

FastRender.debugger.getLogs = function() {
  var stringifyLogs = JSON.stringify(FastRender.debugger._logs);
  console.log(stringifyLogs);
};

FastRender.debugger.blockDDP = function() {
  Meteor._localStorage.setItem('__frblockddp', "1");
  location.reload();
};

FastRender.debugger.unblockDDP = function() {
  Meteor._localStorage.removeItem('__frblockddp');
  location.reload();
};