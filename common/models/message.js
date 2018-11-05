module.exports = function(Message) {
  Message.greet = function(msg, cb) {
    process.nextTick(function() {
      msg = msg || 'hello';
      cb(null, 'Hola ' + msg + ' a todos');
    });
  };
};
