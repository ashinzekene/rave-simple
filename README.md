# rave-simple
![rave-simple bundle size](https://badgen.net/bundlephobia/min/rave-simple) 
![MIT](https://badgen.net/badge/license/MIT/blue)
![NPM](https://badgen.net/npm/v/rave-simple)
[![Build Status](https://travis-ci.com/ashinzekene/rave-simple.svg?token=NZ9bRAtxPTjYc4NsqPws&branch=master)](https://travis-ci.com/ashinzekene/rave-simple)

<1kb Framework/Library agnostic rave wrapper


## INSTALLATION

```
npm install rave-simple
```

## USAGE

### Basic Usage
```js
import rave from "rave-simple";

const rave = Rave();

rave.addOptions({
  PBFPubKey: 'PBFPubKey-xxxx-xxxx',
  customer_email: 'mail@example.com',
  customer_phone: '0810987655432',
  amount: 150000,
  txref: `REF-${(Math.random() * 10000).toFixed()}`,
  callback: () => {
    r.close();
  },
});

rave.pay();
```

### Test Environment
```js
import rave from "rave-simple";

const rave = Rave({ test: true }); // Uses rave's test script

rave.addOptions({
  PBFPubKey: 'PBFPubKey-xxxx-xxxx',
  customer_email: 'mail@example.com',
  customer_phone: '0810987655432',
  amount: 150000,
  txref: `REF-${(Math.random() * 10000).toFixed()}`,
  callback: () => {
    r.close();
  },
});

rave.pay();
```

### Set GlobalConfig

```js
import Rave, { setGlobalConfig } from "rave-simple";

setGlobalConfig({ PBFPubKey: 'PBFPubKey-xxxx-xxxx' }) // Key has been set globally

const paymentInstance = Rave();

paymentInstance.addOptions({ // No need to add it here
  amount: 5000,
  customer_email: 'mail@example.com',
  customer_phone: '0810987655432',
  callback: (res) => {
    paymentInstance.close()
    // act on response
  }
})

paymentInstance.pay() // Pay
```

## What's Cool?
- Less than 1kb
- Framework/Library agnostic
- Simple API
- Intellisense support