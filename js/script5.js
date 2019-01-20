"use strict";

function ask(question, answer, ok, fail) {
  var result = prompt(question, '');
  if (result === answer) {
    ok();
  } else {
    fail();
  }
}

var user = {
  login: 'Andrew',
  password: '12345',

  loginOk: function () {
    console.log(this.login + ' - login success');
  },

  loginFail: function () {
    console.log(this.login + ' - login failed');
  },

  checkPasswordWithBind: function () {
    ask("Your password?", this.password, this.loginOk.bind(this), this.loginFail.bind(this));
  },

  checkPasswordWithClosure: function () {
    let self = this;
    ask("Your password?", self.password, function () {
      self.loginOk()
    }, function () {
      self.loginFail()
    });
  }
};

var user2 = user;
user = null;

console.log("user2 check with bind");
user2.checkPasswordWithBind();
console.log("user2 check with closure");
user2.checkPasswordWithClosure();