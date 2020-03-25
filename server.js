const port = 8088;
var io = require('socket.io')(port);

io.on('connection', function (socket) {
  /**
   * 房间定义[可修改]
   */
  let url = socket.request.headers.referer;
  let splited = url.split('/');
  let room = splited[splited.length - 1];
  /**
   * 加入房间
   */
  socket.join(room);

  /**
   * userinfo
   * {id: userId, name: name}
   */
  socket.on('enter', function (userinfo) {
    io.sockets.to(room).emit('enter', userinfo.name + '进入房间！');
    console.log(userinfo.name + '进入房间！');
  });

  /**
   * data
   * {name: name, message: message}
   */
  socket.on('message', function (data) {
    data.room = room;
    console.log(data);
    io.sockets.to(room).emit('message', data);
  });

  /**
   *
   */
  socket.on('disconnect', function () {
    io.sockets.to(room).emit('leave', socket.id + '退出房间！');
    console.log(socket.id + '退出房间！');
  });
});
