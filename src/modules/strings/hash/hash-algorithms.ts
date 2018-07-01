export enum HashAlgorithm {
  MD5 = 'md5',
  RIPEMD160 = 'ripemd160',
  SHA = 'sha',
  SHA1 = 'sha1',
  SHA224 = 'sha224',
  SHA256 = 'sha256',
  SHA384 = 'sha384',
  SHA512 = 'sha512'
}

export const hashAlgorithms = {
  'MD5': HashAlgorithm.MD5,
  'RIPEMD-160': HashAlgorithm.RIPEMD160,
  'SHA': HashAlgorithm.SHA,
  'SHA-1': HashAlgorithm.SHA1,
  'SHA-224': HashAlgorithm.SHA224,
  'SHA-256': HashAlgorithm.SHA256,
  'SHA-384': HashAlgorithm.SHA384,
  'SHA-512': HashAlgorithm.SHA512
};
