class User {
  constructor(name) {
    this.name = name;
    this.room = 0;
  }
  send(message, to) {
    this.room.send(message, this, to)
  }
  receive(message, from) {
    console.log(`${from.name} => ${this.name}: ${message}`)
  }
}

class ChatRoom {
  constructor() {
    this.users = {};
  }
  register(user) {
    this.users[user.name] = user;
    user.room = this;
  }
  send(message, from, to) {
    if (to) {
      to.receive(message,from)
    }
  }
}

const rose = new User('Rose');
const jack = new User('Jack');
const billy = new User('Billy');

const room = new ChatRoom();
room.register(rose);
room.register(jack);
room.register(billy);

jack.send('Hello', rose);
rose.send('Hello, hello', billy)
billy.send('Buy-buy', rose);

