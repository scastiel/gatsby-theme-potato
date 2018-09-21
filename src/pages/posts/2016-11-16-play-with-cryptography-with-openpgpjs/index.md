---
title: 'Play with cryptography with OpenPGP.js'
date: '2016-11-16'
redirect_from:
  - /posts/003-play-with-cryptography-with-openpgpjs.html
---

For about a year now, I use [ProtonMail](https://protonmail.com) as my mail provider. If you don't know it, you should definitively give it a look! The mails are encrypted _end-to-end_, which means that ProtonMail has absolutely no readable version of the stored emails, nor any key to decrypt them.

But one thing ProtonMail doesn't do is giving the ability to export emails, for example if you want to make back-ups, or move to another provider. That's why I developed [a tool to give you this ability](https://github.com/scastiel/protonmail-export); and to develop this tool I used a fantastic library: [OpenPGP.js](https://openpgpjs.org/), which is by the way maintained by ProtonMail ;)

If you know asymetric cryptography principles, I'll just show how OpenPGP.js provides a very easy way to play with private and public key generation, and of course encrypting/decrypting and signing/verifying messages. If you don't, this article may also be the opportunity to discover it with very simple examples.

<!--readmore-->

## Generate keys

Let's start with the basics! If you want to send or receive encrypted data to someone, the first thing you'll need is a key. And more precisely a pair of a public key and a private key. The private key will be used to decrypt data (only you have it, it's very secret), and the public key will be used to encrypt the data (you must send it to your friends so they can send you encrypted data).

The easiest way to put this in practice is to open two terminal windows in the same directory. From one of them, run the commands `npm init -y` and `npm install openpgp`. Then from both windows, start Node prompt with command `node`, and import the module with `var openpgp = require('openpgp')`. In the following examples, we'll imagine that each prompt represents a person (let's call them Alice and Bob), and the two persons want to send encrypted data to each other.

So, let's generate our keys! From Alice's prompt, run the following:

```javascript
var options = {
  userIds: [{ name: 'Alice', email: 'alice@example.com' }],
  numBits: 2048,
  passphrase: 'secret'
}
var pubKey, privKey
openpgp.generateKey(options).then(key => {
  privKey = key.privateKeyArmored
  pubKey = key.publicKeyArmored
  console.log('Key generated')
})
```

The message “Keys generated” may take a few seconds to come; key generation can be a quite long process. If you run `console.log(pubKey); console.log(privKey)`, you should see the two keys (in base-64), beginning respectively with “-----BEGIN PGP PUBLIC KEY BLOCK-----” and “-----BEGIN PGP PRIVATE KEY BLOCK-----”.

## Encrypt a message

As I said, the public key can be sent to everyone to encrypt data that only Alice will be able to decrypt. So let's copy Alice's public key into a variable in Bob's prompt:

```javascript
var alicePublicKey = `-----BEGIN PGP PUBLIC KEY BLOCK-----(...)`
```

_Note that we use backquotes instead of simple or double quote, because it allows to write strings on multiple lines._

Now that he has her public key, Bob wants to send a secret message to Alice. So let's do it:

```javascript
var options = {
  data: 'This is a very secret message',
  publicKeys: openpgp.key.readArmored(alicePublicKey).keys
}
openpgp.encrypt(options).then(encryptedData => {
  console.log(encryptedData.data)
})
```

You should see the encrypted message, beginning with ”-----BEGIN PGP MESSAGE-----”. That's the data Bob can now send to Alice!

Let's copy this message into Alice's prompt:

```javascript
var bobEncryptedMessage = `-----BEGIN PGP MESSAGE-----(...)`
```

## Decrypt the message

To decrypt Bob's message, all Alice needs is her private key. But before she can use it, she must unlock it with here passphrase.

```javascript
var key = openpgp.key.readArmored(privKey).keys[0]
key.decrypt('secret')
var options = {
  message: openpgp.message.readArmored(bobEncryptedMessage),
  privateKey: key
}
openpgp.decrypt(options).then(decryptedMessage => {
  console.log(decryptedMessage.data)
})
```

The original message appears :)

## Sign a message

In our previous example, Bob sends an encrypted message to Alice that only her can decrypt. But Alice cannot be sure that the message comes from Bob, since she sent her public key to all of her friends. That's why assymetric cryptography gives a second very useful feature: signing data.

The principle is almost the same than encrypting data, but to sign his message, Bob will use his own private key, and to verify that the message comes from Bob, Alice will use Bob's public key.

First let's generate public and private key for Bob: (in Bob's prompt, so)

```javascript
var options = {
  userIds: [{ name: 'Bob', email: 'bob@example.com' }],
  numBits: 2048,
  passphrase: 'secret'
}
var pubKey, privKey
openpgp.generateKey(options).then(key => {
  privKey = key.privateKeyArmored
  pubKey = key.publicKeyArmored
  console.log('Key generated')
})
```

Next let's ”send” Bob's public key to Alice by running `console.log(pubKey);` in Bob's prompt, and copying-pasting the result into Alice's:

```javascript
var bobPublicKey = `-----BEGIN PGP PUBLIC KEY BLOCK-----(...)`
```

Next, in Bob's prompt, let's encrypt our message again, but this time we'll also sign it. To do this, we just add a private key to the encrypting process.

```javascript
var key = openpgp.key.readArmored(privKey).keys[0]
key.decrypt('secret')
var options = {
  data: 'This is a very secret and signed message',
  publicKeys: openpgp.key.readArmored(alicePublicKey).keys,
  privateKeys: [key]
}
openpgp.encrypt(options).then(encryptedData => {
  console.log(encryptedData.data)
})
```

Again, let's copy the resulting encrypted and signed message into Alice's prompt:

```javascript
var bobEncryptedAnsSignedMessage = `-----BEGIN PGP MESSAGE-----(...)`
```

## Verify the signed message

To sign the message we added a private key to the encrypting process; well to verify the signature we'll just add Bob's public key to the decrypting process:

```javascript
var key = openpgp.key.readArmored(privKey).keys[0]
key.decrypt('secret')
var options = {
  message: openpgp.message.readArmored(bobEncryptedAnsSignedMessage),
  publicKeys: openpgp.key.readArmored(bobPublicKey).keys,
  privateKey: key
}
openpgp.decrypt(options).then(decryptedMessage => {
  console.log(decryptedMessage.data)
  console.log(decryptedMessage.signatures[0].valid)
})
```

As a result you can still see the decrypted message, but also that the signature associated with the message is valid regarding Bob's public key! No possible doubt, the message was encrypted by Bob :)

---

This is it for this brief introduction to cryptography using OpenPGP.js! If you were already familiar with OpenPGP, I hope this article convinced you that using in JavaScript is very easy; if you were not, I hope it made you want to know more about it and maybe use it in your own applications.

Just a last thing: OpenPGP.js can be used with Node.js (as we saw it), but also directly client-side in the browser :D

Resources:

- [OpenPGP.js's Github](https://github.com/openpgpjs/openpgpjs), with some examples
- [ProtonMail now the maintainer of OpenPGPjs email encryption library](https://protonmail.com/blog/openpgpjs-email-encryption/) on ProtonMail's blog
