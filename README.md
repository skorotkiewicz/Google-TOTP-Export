## Minimalistic version of:

https://github.com/krissrex/google-authenticator-exporter

### Usage

```sh
yarn
# or
npm install
```

Edit `index.js` and paste data to `console.log(decode("<HERE_DATA>"));`

```js
// otpauth-migration://offline?data=<DATA>
console.log(decode("<HERE_DATA>"));
```

Run `index.js`.

```sh
node index.js
```

```js
[
  {
    secret: "XXXXXXXXX",
    name: "example@example.com",
    issuer: "Exampler",
    algorithm: "ALGO_SHA1",
    digits: 1,
    type: "OTP_TOTP",
    totpSecret: "XYZXYZXYZXYZ", // <== This is what we want to use in other password managers.
  },
];
```
