---
nav: Http
group:
  title: 安全
  order: 1
toc: content
title: 前端加密
mobile: false
---

## 前端加密

<a target="_blank" href="https://juejin.cn/post/7280057907055919144">参考</a>

前端中常见的加密算法主要形式包括`哈希函数、对称加密和非对称加密算法`

### 哈希函数

哈希也叫`散列`，是指将任意长度的消息映射为固定长度的输出的算法，该输出一般叫做散列值或者哈希值，也叫做`摘要（Digest)`。简单来说，这种映射就是一种`数据压缩`，`而且散列是不可逆的，也就是无法通过输出还原输入`。

特点：`不可逆性（单向性）`、抗碰撞性（消息不同其散列值也不同）、长度固定

常见应用场景：由于不可逆性，常用于密码存储、数字签名、电子邮件验证、验证下载等方面，更多的是用用在验证数据的完整性方面。

- 密码存储：明文保存密码是危险的。通常我们把密码哈希加密之后保存，这样即使泄漏了密码，因为是散列后的值，也没有办法推导出密码明文(字典攻击难以破解)。验证的时候，只需要对密码(明文)做同样的散列，对比散列后的输出和保存的密码散列值，就可以验证同一性。

- 可用于验证下载文件的完整性以及防篡改：比如网站提供安装包的时候，通常也同时提供 md5 值，这样用户下载之后，可以重算安装包的 md5 值，如果一致，则证明下载到本地的安装包跟网站提供的安装包是一致的，网络传输过程中没有出错。

优势：不可逆，速度快、存储体积小，可以帮助保护数据的完整性和减轻篡改风险

缺点：安全性不高、容易受到暴力破解

常见类型：`SHA-512、SHA-256、MD5`（MD5 生成的散列码是 128 位）等。

- MD5（Message Digest Algorithm 5） ：是 RSA 数据安全公司开发的一种单向散列算法，非可逆，相同的明文产生相同的密文。
- SHA（Secure Hash Algorithm） ：可以对任意长度的数据运算生成一个固定位数的数值。  
  SHA/MD5 对比：SHA 在安全性方面优于 MD5，并且可以选择多种不同的密钥长度。 但是，由于内存需求更高，运行速度可能会更慢。 不过，MD5 因其速度而得到广泛使用，但是由于存在碰撞攻击风险，因此不再推荐使用。

### crypto-js 使用

CryptoJS 是一个 JavaScript 加密库，它提供了多种加密算法来帮助你保护数据的安全性。它不是指一种特定的加密方式，而是包含了一系列的加密算法和工具函数。这个库可以用于实现数据的散列（hashing）、加密和解密等操作。

CryptoJS 支持的加密方式和功能主要包括：

- 散列算法：如 MD5、SHA-1、SHA-256、SHA-512 等。这些算法可以用于生成数据的散列值（hash），通常用于密码存储或验证数据的完整性。

- HMAC（哈希消息认证码）：使用一个密钥和一个散列函数生成消息的认证码，常用于消息验证。

- 对称加密算法：如 AES（高级加密标准）、DES（数据加密标准）、TripleDES（三重数据加密算法），用于实现数据的加密和解密，需要加密和解密双方共享相同的密钥。

```js
// 解密方法
export const Decrypt = (word, aesKey) => {
  let key = CryptoJS.enc.Utf8.parse(aesKey);
  let encryptedHexStr = CryptoJS.enc.Hex.parse(word);
  let srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
  let decrypt = CryptoJS.AES.decrypt(srcs, key, {
    iv: null,
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });
  let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
  let result = JSON.parse(decryptedStr.toString());
  return result;
};
// 加密方法
export const Encrypt = (word, aesKey) => {
  let key = CryptoJS.enc.Utf8.parse(aesKey);
  let srcs = CryptoJS.enc.Utf8.parse(word);
  let encrypted = CryptoJS.AES.encrypt(srcs, key, {
    iv: null,
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });
  return encrypted.ciphertext.toString().toUpperCase();
};
```

- 不对称加密算法：虽然 CryptoJS 库本身不直接支持如 RSA 这样的不对称加密算法，但可以和其他库结合使用来实现不对称加密。

- 编码工具函数：如 Base64、Latin1、Hex 等编码工具，这些工具可以用于在不同的数据表示格式之间转换数据。

### 对称加密

定义：指加密和解密使用同一种密钥的算法。
常见应用场景：适用于需要高速加密/解密的场景，例如` HTTP 传输的 SSL/TLS 部分`，适用于加密大量数据，如文件加密、网络通信加密、数据加密、电子邮件、Web 聊天等。

常见类型：`DES，3DES，AES` 等:

### 非对称加密

定义：指加密和解密使用不同密钥的算法，通常情况下使用公共密钥进行加密，而私有密钥用于解密数据。公钥和私钥是成对存在，公钥是从私钥中提取产生公开给所有人的，如果使用公钥对数据进行加密，那么只有对应的私钥（不能公开）才能解密，反之亦然。

常见类型：`RSA，DSA，DSS，ECC` 等

前端使用非对称加密原理很简单，平时用的比较多的也是非对称加密，前后端共用一套加密解密算法，前端使用公钥对数据加密，后端使用私钥将数据解密为明文。中间攻击人拿到密文，如果没有私钥的话是没办法破解的。
