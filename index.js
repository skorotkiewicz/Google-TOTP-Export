function decodeProtobuf(payload) {
  const protobuf = require("protobufjs");
  const root = protobuf.loadSync("google_auth.proto");
  const MigrationPayload = root.lookupType("googleauth.MigrationPayload");
  const message = MigrationPayload.decode(payload);

  return MigrationPayload.toObject(message, {
    longs: String,
    enums: String,
    bytes: String,
  });
}

function toBase32(base64String) {
  const base32 = require("./edbase32");
  const raw = Buffer.from(base64String, "base64");
  return base32.encode(raw);
}

function decode(data) {
  const buffer = Buffer.from(decodeURIComponent(data), "base64");
  const payload = decodeProtobuf(buffer);

  const accounts = payload.otpParameters.map((account) => {
    account.totpSecret = toBase32(account.secret);
    return account;
  });

  return accounts;
}

// otpauth-migration://offline?data=<THIS DATA PASTE TO decode()>
console.log(decode(""));
