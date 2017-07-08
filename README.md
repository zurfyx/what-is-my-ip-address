# What Is My IP Address

> Your external IP address in a JavaScript library.

[![npm Version](https://img.shields.io/npm/v/what-is-my-ip-address.svg)](https://www.npmjs.com/package/what-is-my-ip-address)
[![Build Status](https://travis-ci.org/zurfyx/what-is-my-ip-address.svg?branch=master)](https://travis-ci.org/zurfyx/what-is-my-ip-address)
[![David](https://david-dm.org/zurfyx/what-is-my-ip-address.svg)](https://david-dm.org/zurfyx/what-is-my-ip-address)
[![David](https://david-dm.org/zurfyx/what-is-my-ip-address/dev-status.svg)](https://david-dm.org/zurfyx/what-is-my-ip-address#info=devDependencies)
[![Coverage Status](https://coveralls.io/repos/github/zurfyx/what-is-my-ip-address/badge.svg?branch=master)](https://coveralls.io/github/zurfyx/what-is-my-ip-address?branch=master)
[![Code Climate](https://codeclimate.com/github/zurfyx/what-is-my-ip-address/badges/gpa.svg)](https://codeclimate.com/github/zurfyx/what-is-my-ip-address)

## Why?

I am aware that there are other libraries out there to get your public / external IP right with JavaScript ([public-ip](https://www.npmjs.com/package/public-ip), [external-ip](https://www.npmjs.com/package/external-ip)). But they faced a *serious* compatibility issue: they did not support ES5.

Although [some think that ES5 is a thing of a past](https://github.com/sindresorhus/ama/issues/446#issuecomment-281014491) (with all due respect), some builders are still requiring it, for example [Uglify](https://github.com/angular/angular-cli/issues/6370) (which comes built-in with angular-cli). Thus, it is currently [recommended to transpile to ES5](https://github.com/facebookincubator/create-react-app/issues/1125#issuecomment-264158377).

`What-Is-My-Ip-Address` aims to support developers looking forward to gather their IP address on the client side. The latest versions of Node should be fine regardless since they understand ES6.

## Getting started

`npm install --save what-is-my-ip-address`

IP v4:
```
var ip = require('what-is-my-ip-address');
ip.v4()
  .then((ip) => {
    ...
  })
  .catch((error) => {
    // Do you have IP v4?
  });
```

IP v6:
```
var ip = require('what-is-my-ip-address');
ip.v6()
  .then((ip) => {
    ...
  })
  .catch((error) => {
    // Do you have IP v6?
  });
```

## Contributions

Contributions are very welcome.

## Special thanks

To [@major/icanhaz](https://github.com/major/icanhaz) for his awesome IP address service.

## License

MIT © [Gerard Rovira Sánchez](//zurfyx.com)