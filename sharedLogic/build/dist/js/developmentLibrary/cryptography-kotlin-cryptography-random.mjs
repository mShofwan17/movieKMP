import {
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  Default_getInstancee1f46otjvolq as Default_getInstance,
  VOID3gxj6tk5isa35 as VOID,
  Random24dxadk52mliy as Random,
  Unit_getInstanceu5z48rdn3d6z as Unit_getInstance,
} from './kotlin-kotlin-stdlib.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
class CryptographyRandom extends Random {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_random_CryptographyRandom_vlxypm_k$();
  }
  static new_dev_whyoleg_cryptography_random_CryptographyRandom_vlxypm_k$($box) {
    Default_getInstance_0();
    return this.new_kotlin_random_Random_1ua4qs_k$($box);
  }
}
class AbstractRandom extends CryptographyRandom {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_random_AbstractRandom_dijhxb_k$();
  }
  static new_dev_whyoleg_cryptography_random_AbstractRandom_dijhxb_k$($box) {
    return this.new_dev_whyoleg_cryptography_random_CryptographyRandom_vlxypm_k$($box);
  }
  nextBits_kty4bl_k$(bitCount) {
    var numBytes = (bitCount + 7 | 0) / 8 | 0;
    var b = this.nextBytes_dtk0kg_k$(numBytes);
    var next = 0;
    var inductionVariable = 0;
    if (inductionVariable < numBytes)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        next = (next << 8) + (b[i] & 255) | 0;
      }
       while (inductionVariable < numBytes);
    return next >>> (imul(numBytes, 8) - bitCount | 0) | 0;
  }
  nextBytes_ln07bs_k$(array) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(array.length === 0)) {
      this.fillBytes_4b4b08_k$(array);
    }
    return array;
  }
}
class Default extends CryptographyRandom {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_random_CryptographyRandom_Default_y64wuo_k$();
  }
  static new_dev_whyoleg_cryptography_random_CryptographyRandom_Default_y64wuo_k$($box) {
    Default_instance = null;
    var $this = this.new_dev_whyoleg_cryptography_random_CryptographyRandom_vlxypm_k$($box);
    Default_instance = $this;
    $this.defaultRandom_1 = defaultCryptographyRandom();
    return $this;
  }
  nextBits_kty4bl_k$(bitCount) {
    return this.defaultRandom_1.nextBits_kty4bl_k$(bitCount);
  }
  nextInt_ujorgc_k$() {
    return this.defaultRandom_1.nextInt_ujorgc_k$();
  }
  nextInt_kn2qxo_k$(until) {
    return this.defaultRandom_1.nextInt_kn2qxo_k$(until);
  }
  nextInt_ak696k_k$(from, until) {
    return this.defaultRandom_1.nextInt_ak696k_k$(from, until);
  }
  nextLong_njwv0v_k$() {
    return this.defaultRandom_1.nextLong_njwv0v_k$();
  }
  nextLong_x1xvj_k$(until) {
    return this.defaultRandom_1.nextLong_x1xvj_k$(until);
  }
  nextLong_m0lbld_k$(from, until) {
    return this.defaultRandom_1.nextLong_m0lbld_k$(from, until);
  }
  nextBoolean_nfdk1h_k$() {
    return this.defaultRandom_1.nextBoolean_nfdk1h_k$();
  }
  nextDouble_s2xvfg_k$() {
    return this.defaultRandom_1.nextDouble_s2xvfg_k$();
  }
  nextDouble_iluu8u_k$(until) {
    return this.defaultRandom_1.nextDouble_iluu8u_k$(until);
  }
  nextDouble_lk9bac_k$(from, until) {
    return this.defaultRandom_1.nextDouble_lk9bac_k$(from, until);
  }
  nextFloat_jqti5l_k$() {
    return this.defaultRandom_1.nextFloat_jqti5l_k$();
  }
  nextBytes_ln07bs_k$(array) {
    return this.defaultRandom_1.nextBytes_ln07bs_k$(array);
  }
  nextBytes_dtk0kg_k$(size) {
    return this.defaultRandom_1.nextBytes_dtk0kg_k$(size);
  }
  nextBytes_ykc5js_k$(array, fromIndex, toIndex) {
    return this.defaultRandom_1.nextBytes_ykc5js_k$(array, fromIndex, toIndex);
  }
}
class WebCryptoCryptographyRandom extends AbstractRandom {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_random_WebCryptoCryptographyRandom_el2qo9_k$();
  }
  static new_dev_whyoleg_cryptography_random_WebCryptoCryptographyRandom_el2qo9_k$($box) {
    WebCryptoCryptographyRandom_instance = null;
    var $this = this.new_dev_whyoleg_cryptography_random_AbstractRandom_dijhxb_k$($box);
    WebCryptoCryptographyRandom_instance = $this;
    $this.MAX_ARRAY_SIZE_1 = 65536;
    $this.crypto_1 = getCrypto();
    return $this;
  }
  fillBytes_4b4b08_k$(array) {
    // Inline function 'dev.whyoleg.cryptography.random.useAsInt8Array' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    fillBytes(this, array);
    return Unit_getInstance();
  }
}
//endregion
function _get_defaultRandom__d0xjir($this) {
  return $this.defaultRandom_1;
}
var Default_instance;
function Default_getInstance_0() {
  if (Default_instance === VOID) {
    Default_getInstance();
    Default.new_dev_whyoleg_cryptography_random_CryptographyRandom_Default_y64wuo_k$();
  }
  return Default_instance;
}
function useAsInt8Array(_this__u8e3s4, block) {
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  block(_this__u8e3s4);
}
function defaultCryptographyRandom() {
  return WebCryptoCryptographyRandom_getInstance();
}
function _get_MAX_ARRAY_SIZE__1ta7kn($this) {
  return $this.MAX_ARRAY_SIZE_1;
}
function _get_crypto__fwud1y($this) {
  return $this.crypto_1;
}
function fillBytes($this, jsArray) {
  var size = jsArray.length;
  if (size <= 65536) {
    $this.crypto_1.getRandomValues(jsArray);
  } else {
    var filled = 0;
    do {
      // Inline function 'kotlin.comparisons.minOf' call
      var b = size - filled | 0;
      var chunkSize = Math.min(65536, b);
      $this.crypto_1.getRandomValues(jsArray.subarray(filled, filled + chunkSize | 0));
      filled = filled + chunkSize | 0;
    }
     while (filled < size);
  }
}
var WebCryptoCryptographyRandom_instance;
function WebCryptoCryptographyRandom_getInstance() {
  if (WebCryptoCryptographyRandom_instance === VOID)
    WebCryptoCryptographyRandom.new_dev_whyoleg_cryptography_random_WebCryptoCryptographyRandom_el2qo9_k$();
  return WebCryptoCryptographyRandom_instance;
}
function getCrypto() {
  return globalThis ? globalThis.crypto : window.crypto || window.msCrypto;
}
//region block: post-declaration
initMetadataForClass(CryptographyRandom, 'CryptographyRandom');
initMetadataForClass(AbstractRandom, 'AbstractRandom');
initMetadataForObject(Default, 'Default');
initMetadataForObject(WebCryptoCryptographyRandom, 'WebCryptoCryptographyRandom');
//endregion
//region block: exports
export {
  Default_getInstance_0 as Default_getInstance1zramwb175hhz,
};
//endregion

//# sourceMappingURL=cryptography-kotlin-cryptography-random.mjs.map
