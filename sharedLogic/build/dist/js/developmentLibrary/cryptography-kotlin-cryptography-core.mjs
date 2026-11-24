import {
  IllegalArgumentException2asla15b5jaob as IllegalArgumentException,
  toString1pkumu07cwy4m as toString,
  Unit_getInstanceu5z48rdn3d6z as Unit_getInstance,
  compareTo3ankvs086tmwq as compareTo,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  createThis2j2avj17cvnv2 as createThis,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  VOID3gxj6tk5isa35 as VOID,
  Comparable198qfk8pnblz0 as Comparable,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  asSequence2phdjljfh9jhx as asSequence,
  lazyOf3bovaovqmwekz as lazyOf,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  IllegalStateExceptionkoljg5n0nrlr as IllegalStateException,
  Annotation1hwww4cseplu9 as Annotation,
  constructCallableReference23y65rf941mch as constructCallableReference,
  KProperty1ca4yb4wlo496 as KProperty1,
  getPropertyCallableRef3hckxc0xueiaj as getPropertyCallableRef,
  joinToString1cxrrlmo0chqs as joinToString,
  equals2au1ep9vhcato as equals,
  FunctionAdapter3lcrrz3moet5b as FunctionAdapter,
  isInterface3d6p8outrmvmk as isInterface,
  Comparator2b3maoeh98xtg as Comparator,
  hashCodeq5arwsb9dgti as hashCode,
  compareValues1n2ayl87ihzfk as compareValues,
  sortedWith2csnbbb21k0lg as sortedWith,
  ArrayList3it5z8td81qkl as ArrayList,
  collectionSizeOrDefault36dulx8yinfqm as collectionSizeOrDefault,
  first58ocm7j58k3q as first,
  LinkedHashMap1zhqxkxv3xnkl as LinkedHashMap,
  lazy2hsh8ze7j6ikd as lazy,
  KtMap140uvy3s5zad8 as KtMap,
  THROW_IAE23kobfj9wdoxr as THROW_IAE,
  enumEntries20mr21zbe3az4 as enumEntries,
  Enum3alwj03lh1n41 as Enum,
  getStringHashCode26igk1bx568vk as getStringHashCode,
  isByteArray4nnzfn1x4o3w as isByteArray,
  closeFinally1sadm0w9gt3u4 as closeFinally,
  AutoCloseable1l5p57f9lp7kv as AutoCloseable,
  subtract16cg4lfi29fq9 as subtract,
  Long2qws0ah9gnpki as Long,
  compare2uud5j30pw5xc as compare,
  IndexOutOfBoundsException1qfr429iumro0 as IndexOutOfBoundsException,
  convertToIntofdoxh9bstof as convertToInt,
  fromInt1lka3ktyu79a4 as fromInt,
  add85si75olwt6n as add,
  equalsLong28bsrfhwvd686 as equalsLong,
} from './kotlin-kotlin-stdlib.mjs';
import { Default_getInstance1zramwb175hhz as Default_getInstance } from './cryptography-kotlin-cryptography-random.mjs';
import { UnsafeByteStringOperations_getInstance2r21wmnszr009 as UnsafeByteStringOperations_getInstance } from './kotlinx-io-kotlinx-io-bytestring.mjs';
import { toBigInt3kphjqnio21gn as toBigInt } from './cryptography-kotlin-cryptography-bigint.mjs';
import {
  buffered3kq86cdmguv3h as buffered,
  discardingSink3pwcbae4o9g4q as discardingSink,
  UnsafeBufferOperations_getInstance9l64a3vgfrr4 as UnsafeBufferOperations_getInstance,
  get_BufferIterationContextImpl14gom6kxmxgqh as get_BufferIterationContextImpl,
  RawSource1nqecrmn829sh as RawSource,
  RawSinkiemxu944wkhp as RawSink,
} from './kotlinx-io-kotlinx-io-core.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
class Companion {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_BinarySize_Companion_2etq1_k$();
  }
  static new_dev_whyoleg_cryptography_BinarySize_Companion_2etq1_k$($box) {
    var $this = createThis(this, $box);
    Companion_instance = $this;
    return $this;
  }
  get_bits_lxmv6s_k$(_this__u8e3s4) {
    return _BinarySize___init__impl__j238f5(_this__u8e3s4);
  }
  get_bytes_4lc9hl_k$(_this__u8e3s4) {
    return _BinarySize___init__impl__j238f5(imul(_this__u8e3s4, 8));
  }
}
class BinarySize {
  constructor(bits) {
    Companion_getInstance();
    this.bits_1 = bits;
  }
  compareTo_y98yb3_k$(other) {
    return BinarySize__compareTo_impl_cv1osx(this.bits_1, other);
  }
  compareTo_hpufkf_k$(other) {
    return BinarySize__compareTo_impl_cv1osx_0(this, other);
  }
  toString() {
    return BinarySize__toString_impl_jf6uip(this.bits_1);
  }
  hashCode() {
    return BinarySize__hashCode_impl_turank(this.bits_1);
  }
  equals(other) {
    return BinarySize__equals_impl_ii71f8(this.bits_1, other);
  }
}
class CryptographyAlgorithm {}
class CryptographyAlgorithmId {
  constructor(name) {
    return new.target.new_dev_whyoleg_cryptography_CryptographyAlgorithmId_4vvh7e_k$(name);
  }
  static new_dev_whyoleg_cryptography_CryptographyAlgorithmId_4vvh7e_k$(name, $box) {
    var $this = createThis(this, $box);
    $this.name_1 = name;
    return $this;
  }
  get_name_woqyms_k$() {
    return this.name_1;
  }
}
class Registry {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_CryptographyProvider_Registry_m98rul_k$();
  }
  static new_dev_whyoleg_cryptography_CryptographyProvider_Registry_m98rul_k$($box) {
    var $this = createThis(this, $box);
    Registry_instance = $this;
    return $this;
  }
  get_registeredProviders_vpg1qv_k$() {
    return asSequence(CryptographySystem_getInstance().getRegisteredProviders_e978qy_k$());
  }
  registerProvider_4p4myo_k$(provider) {
    CryptographySystem_getInstance().registerProvider_gzjt6_k$(lazyOf(provider), 0);
  }
  registerProvider_1mqadu_k$(provider) {
    CryptographySystem_getInstance().registerProvider_gzjt6_k$(provider, 0);
  }
}
class Companion_0 {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_CryptographyProvider_Companion_u1y29v_k$();
  }
  static new_dev_whyoleg_cryptography_CryptographyProvider_Companion_u1y29v_k$($box) {
    var $this = createThis(this, $box);
    Companion_instance_0 = $this;
    return $this;
  }
  get_Default_goqax4_k$() {
    return CryptographySystem_getInstance().getDefaultProvider_91tau4_k$();
  }
}
class CryptographyProvider {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_CryptographyProvider_mki3ma_k$();
  }
  static new_dev_whyoleg_cryptography_CryptographyProvider_mki3ma_k$($box) {
    Companion_getInstance_0();
    return createThis(this, $box);
  }
  get_h06bmj_k$(identifier) {
    var tmp0_elvis_lhs = this.getOrNull_kgvn1t_k$(identifier);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$('Algorithm not found: ' + toString(identifier));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
}
class CryptographyProviderApi {
  equals(other) {
    if (!(other instanceof CryptographyProviderApi))
      return false;
    other instanceof CryptographyProviderApi || THROW_CCE();
    return true;
  }
  hashCode() {
    return 0;
  }
  toString() {
    return '@dev.whyoleg.cryptography.CryptographyProviderApi(' + ')';
  }
}
class CryptographySystem {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_CryptographySystem_h2gu8e_k$();
  }
  static new_dev_whyoleg_cryptography_CryptographySystem_h2gu8e_k$($box) {
    var $this = createThis(this, $box);
    CryptographySystem_instance = $this;
    $this.impl_1 = CryptographySystemImpl.new_dev_whyoleg_cryptography_CryptographySystemImpl_ap6n7y_k$();
    loadProviders($this);
    return $this;
  }
  setDefaultProvider_67wizg_k$(provider) {
    return this.impl_1.setDefaultProvider_67wizg_k$(provider);
  }
  getDefaultProvider_91tau4_k$() {
    return this.impl_1.getDefaultProvider_91tau4_k$();
  }
  registerProvider_gzjt6_k$(provider, priority) {
    return this.impl_1.registerProvider_gzjt6_k$(provider, priority);
  }
  getRegisteredProviders_e978qy_k$() {
    return this.impl_1.getRegisteredProviders_e978qy_k$();
  }
  setDefaultRandom_qc0ute_k$(random) {
    return this.impl_1.setDefaultRandom_qc0ute_k$(random);
  }
  getDefaultRandom_35b8lu_k$() {
    return this.impl_1.getDefaultRandom_35b8lu_k$();
  }
}
class CompositeProvider extends CryptographyProvider {
  constructor(providers) {
    return new.target.new_dev_whyoleg_cryptography_CryptographySystemImpl_CompositeProvider_y2ydiq_k$(providers);
  }
  static new_dev_whyoleg_cryptography_CryptographySystemImpl_CompositeProvider_y2ydiq_k$(providers, $box) {
    var $this = this.new_dev_whyoleg_cryptography_CryptographyProvider_mki3ma_k$($box);
    $this.providers_1 = providers;
    return $this;
  }
  get_name_woqyms_k$() {
    var tmp = KProperty1;
    return joinToString(this.providers_1, ',', 'Composite(', ')', VOID, VOID, getPropertyCallableRef('name', 1, tmp, CryptographyProvider$_get_name_$ref_bg4mly(), null));
  }
  getOrNull_kgvn1t_k$(identifier) {
    var tmp0 = this.providers_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.collections.firstNotNullOfOrNull' call
      var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        var result = element.getOrNull_kgvn1t_k$(identifier);
        if (!(result == null)) {
          tmp$ret$0 = result;
          break $l$block;
        }
      }
      tmp$ret$0 = null;
    }
    return tmp$ret$0;
  }
}
class sam$kotlin_Comparator$0 {
  constructor(function_0) {
    return new.target.new_dev_whyoleg_cryptography_CryptographySystemImpl_sam$kotlin_Comparator$0_bpepew_k$(function_0);
  }
  static new_dev_whyoleg_cryptography_CryptographySystemImpl_sam$kotlin_Comparator$0_bpepew_k$(function_0, $box) {
    var $this = createThis(this, $box);
    $this.function_1 = function_0;
    return $this;
  }
  compare_bczr_k$(a, b) {
    return this.function_1(a, b);
  }
  compare(a, b) {
    return this.compare_bczr_k$(a, b);
  }
  getFunctionDelegate_jtodtf_k$() {
    return this.function_1;
  }
  equals(other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  }
  hashCode() {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  }
}
class CryptographySystemImpl {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_CryptographySystemImpl_ap6n7y_k$();
  }
  static new_dev_whyoleg_cryptography_CryptographySystemImpl_ap6n7y_k$($box) {
    var $this = createThis(this, $box);
    var tmp = $this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.registeredProviders_1 = LinkedHashMap.new_kotlin_collections_LinkedHashMap_8xehp8_k$();
    var tmp_0 = $this;
    tmp_0.lazyRegisteredProviders_1 = lazy(CryptographySystemImpl$lazyRegisteredProviders$lambda($this));
    $this.defaultProvider_1 = null;
    var tmp_1 = $this;
    tmp_1.lazyDefaultProvider_1 = lazy(CryptographySystemImpl$lazyDefaultProvider$lambda($this));
    $this.defaultRandom_1 = null;
    var tmp_2 = $this;
    tmp_2.lazyDefaultRandom_1 = lazy(CryptographySystemImpl$lazyDefaultRandom$lambda($this));
    return $this;
  }
  getDefaultProvider_91tau4_k$() {
    return this.lazyDefaultProvider_1.get_value_j01efc_k$();
  }
  setDefaultProvider_67wizg_k$(provider) {
    // Inline function 'kotlin.check' call
    if (!!this.lazyDefaultProvider_1.isInitialized_2wsk3a_k$()) {
      var message = 'Cannot set default provider after `getDefaultProvider` was called';
      throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message));
    }
    // Inline function 'kotlin.check' call
    if (!(this.defaultProvider_1 == null)) {
      var message_0 = 'Default provider already set';
      throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message_0));
    }
    this.defaultProvider_1 = provider;
  }
  getRegisteredProviders_e978qy_k$() {
    return this.lazyRegisteredProviders_1.get_value_j01efc_k$();
  }
  registerProvider_gzjt6_k$(provider, priority) {
    // Inline function 'kotlin.require' call
    if (!(priority >= 0)) {
      var message = 'Priority must be greater or equal to 0';
      throw IllegalArgumentException.new_kotlin_IllegalArgumentException_f8t9r5_k$(toString(message));
    }
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    var this_0 = this.registeredProviders_1;
    // Inline function 'kotlin.require' call
    if (!!(isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).containsKey_aw81wo_k$(priority)) {
      var message_0 = 'Provider with priority ' + priority + ' already registered. Every registered provider should have unique priority.';
      throw IllegalArgumentException.new_kotlin_IllegalArgumentException_f8t9r5_k$(toString(message_0));
    }
    // Inline function 'kotlin.check' call
    if (!!this.lazyRegisteredProviders_1.isInitialized_2wsk3a_k$()) {
      var message_1 = 'Cannot register provider after `getRegisteredProviders` was called';
      throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message_1));
    }
    // Inline function 'kotlin.collections.set' call
    this.registeredProviders_1.put_4fpzoq_k$(priority, provider);
  }
  setDefaultRandom_qc0ute_k$(random) {
    // Inline function 'kotlin.check' call
    if (!!this.lazyDefaultRandom_1.isInitialized_2wsk3a_k$()) {
      var message = 'Cannot set default random after `getDefaultRandom` was called';
      throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message));
    }
    // Inline function 'kotlin.check' call
    if (!(this.defaultRandom_1 == null)) {
      var message_0 = 'Default random already set';
      throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message_0));
    }
    this.defaultRandom_1 = random;
  }
  getDefaultRandom_35b8lu_k$() {
    return this.lazyDefaultRandom_1.get_value_j01efc_k$();
  }
}
class DelicateCryptographyApi {
  equals(other) {
    if (!(other instanceof DelicateCryptographyApi))
      return false;
    other instanceof DelicateCryptographyApi || THROW_CCE();
    return true;
  }
  hashCode() {
    return 0;
  }
  toString() {
    return '@dev.whyoleg.cryptography.DelicateCryptographyApi(' + ')';
  }
}
class EncodingFormat {}
class Format extends Enum {
  constructor(name, ordinal) {
    return new.target.new_dev_whyoleg_cryptography_algorithms_AES_Key_Format_32hb8n_k$(name, ordinal);
  }
  static new_dev_whyoleg_cryptography_algorithms_AES_Key_Format_32hb8n_k$(name, ordinal, $box) {
    return this.new_kotlin_Enum_a1ijns_k$(name, ordinal, $box);
  }
}
class Size {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_AES_Key_Size_a87hj2_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_AES_Key_Size_a87hj2_k$($box) {
    var $this = createThis(this, $box);
    Size_instance = $this;
    return $this;
  }
  get_B128_oe34ld_k$() {
    return Companion_getInstance().get_bits_lxmv6s_k$(128);
  }
  get_B192_v1ojla_k$() {
    return Companion_getInstance().get_bits_lxmv6s_k$(192);
  }
  get_B256_wnuig5_k$() {
    return Companion_getInstance().get_bits_lxmv6s_k$(256);
  }
}
class Companion_1 extends CryptographyAlgorithmId {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_AES_GCM_Companion_cdh3fo_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_AES_GCM_Companion_cdh3fo_k$($box) {
    Companion_instance_1 = null;
    var $this = this.new_dev_whyoleg_cryptography_CryptographyAlgorithmId_4vvh7e_k$('AES-GCM', $box);
    Companion_instance_1 = $this;
    return $this;
  }
}
class Encodable {}
function *encodeToByteArray(format, $completion) {
  return this.encodeToByteArrayBlocking_lxmk1m_k$(format);
}
function *encodeToByteString(format, $completion) {
  // Inline function 'dev.whyoleg.cryptography.asByteString' call
  var this_0 = yield* this.encodeToByteArray_cywd8m_k$(format, $completion);
  return UnsafeByteStringOperations_getInstance().wrapUnsafe_3fobxs_k$(this_0);
}
function encodeToByteStringBlocking(format) {
  // Inline function 'dev.whyoleg.cryptography.asByteString' call
  var this_0 = this.encodeToByteArrayBlocking_lxmk1m_k$(format);
  return UnsafeByteStringOperations_getInstance().wrapUnsafe_3fobxs_k$(this_0);
}
class Key {}
class Key_0 {}
function cipher$default(tagSize, $super) {
  tagSize = tagSize === VOID ? Companion_getInstance().get_bits_lxmv6s_k$(128) : tagSize;
  return $super === VOID ? this.cipher_4lf9bw_k$(tagSize) : $super.cipher_4lf9bw_k$.call(this, new BinarySize(tagSize));
}
class Companion_2 extends CryptographyAlgorithmId {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_AES_CCM_Companion_c97r9s_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_AES_CCM_Companion_c97r9s_k$($box) {
    Companion_instance_2 = null;
    var $this = this.new_dev_whyoleg_cryptography_CryptographyAlgorithmId_4vvh7e_k$('AES-CCM', $box);
    Companion_instance_2 = $this;
    return $this;
  }
}
class Key_1 {}
function cipher$default_0(tagSize, $super) {
  tagSize = tagSize === VOID ? Companion_getInstance().get_bits_lxmv6s_k$(128) : tagSize;
  return $super === VOID ? this.cipher_4lf9bw_k$(tagSize) : $super.cipher_4lf9bw_k$.call(this, new BinarySize(tagSize));
}
class Companion_3 extends CryptographyAlgorithmId {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_AES_CTR_Companion_w7c8ss_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_AES_CTR_Companion_w7c8ss_k$($box) {
    Companion_instance_3 = null;
    var $this = this.new_dev_whyoleg_cryptography_CryptographyAlgorithmId_4vvh7e_k$('AES-CTR', $box);
    Companion_instance_3 = $this;
    return $this;
  }
}
class Key_2 {}
class Companion_4 extends CryptographyAlgorithmId {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_AES_CBC_Companion_3u1qq3_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_AES_CBC_Companion_3u1qq3_k$($box) {
    Companion_instance_4 = null;
    var $this = this.new_dev_whyoleg_cryptography_CryptographyAlgorithmId_4vvh7e_k$('AES-CBC', $box);
    Companion_instance_4 = $this;
    return $this;
  }
}
class Key_3 {}
function cipher$default_1(padding, $super) {
  padding = padding === VOID ? true : padding;
  return $super === VOID ? this.cipher_h07u2u_k$(padding) : $super.cipher_h07u2u_k$.call(this, padding);
}
class Companion_5 extends CryptographyAlgorithmId {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_AES_CMAC_Companion_wa000f_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_AES_CMAC_Companion_wa000f_k$($box) {
    Companion_instance_5 = null;
    var $this = this.new_dev_whyoleg_cryptography_CryptographyAlgorithmId_4vvh7e_k$('AES-CMAC', $box);
    Companion_instance_5 = $this;
    return $this;
  }
}
class Key_4 {}
class Companion_6 extends CryptographyAlgorithmId {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_AES_ECB_Companion_dtbtjp_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_AES_ECB_Companion_dtbtjp_k$($box) {
    Companion_instance_6 = null;
    var $this = this.new_dev_whyoleg_cryptography_CryptographyAlgorithmId_4vvh7e_k$('AES-ECB', $box);
    Companion_instance_6 = $this;
    return $this;
  }
}
class Key_5 {}
function cipher$default_2(padding, $super) {
  padding = padding === VOID ? true : padding;
  return $super === VOID ? this.cipher_h07u2u_k$(padding) : $super.cipher_h07u2u_k$.call(this, padding);
}
class Companion_7 extends CryptographyAlgorithmId {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_AES_OFB_Companion_tgbsuu_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_AES_OFB_Companion_tgbsuu_k$($box) {
    Companion_instance_7 = null;
    var $this = this.new_dev_whyoleg_cryptography_CryptographyAlgorithmId_4vvh7e_k$('AES-OFB', $box);
    Companion_instance_7 = $this;
    return $this;
  }
}
class Key_6 {}
class Companion_8 extends CryptographyAlgorithmId {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_AES_CFB_Companion_qldapm_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_AES_CFB_Companion_qldapm_k$($box) {
    Companion_instance_8 = null;
    var $this = this.new_dev_whyoleg_cryptography_CryptographyAlgorithmId_4vvh7e_k$('AES-CFB', $box);
    Companion_instance_8 = $this;
    return $this;
  }
}
class Key_7 {}
class Companion_9 extends CryptographyAlgorithmId {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_AES_CFB8_Companion_3c4g8y_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_AES_CFB8_Companion_3c4g8y_k$($box) {
    Companion_instance_9 = null;
    var $this = this.new_dev_whyoleg_cryptography_CryptographyAlgorithmId_4vvh7e_k$('AES-CFB8', $box);
    Companion_instance_9 = $this;
    return $this;
  }
}
class Key_8 {}
class AES {}
function keyGenerator$default(keySize, $super) {
  keySize = keySize === VOID ? Size_getInstance().get_B256_wnuig5_k$() : keySize;
  return $super === VOID ? this.keyGenerator_hfus3p_k$(keySize) : $super.keyGenerator_hfus3p_k$.call(this, new BinarySize(keySize));
}
function keyGenerator(keySize) {
  return this.keyGenerator_hfus3p_k$(_SymmetricKeySize___get_value__impl__5onst0(keySize));
}
class GCM {}
function get_id() {
  return Companion_getInstance_1();
}
class CCM {}
function get_id_0() {
  return Companion_getInstance_2();
}
class CTR {}
function get_id_1() {
  return Companion_getInstance_3();
}
class CBC {}
function get_id_2() {
  return Companion_getInstance_4();
}
class CMAC {}
function get_id_3() {
  return Companion_getInstance_5();
}
class ECB {}
function get_id_4() {
  return Companion_getInstance_6();
}
class OFB {}
function get_id_5() {
  return Companion_getInstance_7();
}
class CFB {}
function get_id_6() {
  return Companion_getInstance_8();
}
class CFB8 {}
function get_id_7() {
  return Companion_getInstance_9();
}
class SHA1 extends CryptographyAlgorithmId {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_SHA1_teb0ye_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_SHA1_teb0ye_k$($box) {
    SHA1_instance = null;
    var $this = this.new_dev_whyoleg_cryptography_CryptographyAlgorithmId_4vvh7e_k$('SHA-1', $box);
    SHA1_instance = $this;
    return $this;
  }
}
class SHA256 extends CryptographyAlgorithmId {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_SHA256_laih92_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_SHA256_laih92_k$($box) {
    SHA256_instance = null;
    var $this = this.new_dev_whyoleg_cryptography_CryptographyAlgorithmId_4vvh7e_k$('SHA-256', $box);
    SHA256_instance = $this;
    return $this;
  }
}
class SHA384 extends CryptographyAlgorithmId {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_SHA384_ful652_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_SHA384_ful652_k$($box) {
    SHA384_instance = null;
    var $this = this.new_dev_whyoleg_cryptography_CryptographyAlgorithmId_4vvh7e_k$('SHA-384', $box);
    SHA384_instance = $this;
    return $this;
  }
}
class SHA512 extends CryptographyAlgorithmId {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_SHA512_dnmos6_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_SHA512_dnmos6_k$($box) {
    SHA512_instance = null;
    var $this = this.new_dev_whyoleg_cryptography_CryptographyAlgorithmId_4vvh7e_k$('SHA-512', $box);
    SHA512_instance = $this;
    return $this;
  }
}
class Digest {}
class Companion_10 {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_EC_Curve_Companion_cbsyrq_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_EC_Curve_Companion_cbsyrq_k$($box) {
    var $this = createThis(this, $box);
    Companion_instance_10 = $this;
    return $this;
  }
  get_P256_677g2n_k$() {
    return _Curve___init__impl__ygix12('P-256');
  }
  get_P384_c2h7r7_k$() {
    return _Curve___init__impl__ygix12('P-384');
  }
  get_P521_812tlq_k$() {
    return _Curve___init__impl__ygix12('P-521');
  }
  get_secp256k1_o5lcka_k$() {
    return _Curve___init__impl__ygix12('secp256k1');
  }
  get_brainpoolP256r1_d0e82o_k$() {
    return _Curve___init__impl__ygix12('brainpoolP256r1');
  }
  get_brainpoolP384r1_tou7gc_k$() {
    return _Curve___init__impl__ygix12('brainpoolP384r1');
  }
  get_brainpoolP512r1_utm6gz_k$() {
    return _Curve___init__impl__ygix12('brainpoolP512r1');
  }
}
class Format_0 {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_EC_PublicKey_Format_spj3vf_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_EC_PublicKey_Format_spj3vf_k$($box) {
    return createThis(this, $box);
  }
  toString() {
    return this.get_name_woqyms_k$();
  }
}
class RAW extends Format_0 {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_EC_PublicKey_Format_RAW_8wlaxt_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_EC_PublicKey_Format_RAW_8wlaxt_k$($box) {
    Uncompressed_getInstance();
    return this.new_dev_whyoleg_cryptography_algorithms_EC_PublicKey_Format_spj3vf_k$($box);
  }
}
class Uncompressed extends RAW {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_EC_PublicKey_Format_RAW_Uncompressed_hvrks6_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_EC_PublicKey_Format_RAW_Uncompressed_hvrks6_k$($box) {
    Uncompressed_instance = null;
    var $this = this.new_dev_whyoleg_cryptography_algorithms_EC_PublicKey_Format_RAW_8wlaxt_k$($box);
    Uncompressed_instance = $this;
    return $this;
  }
  get_name_woqyms_k$() {
    return 'RAW';
  }
}
class Compressed extends RAW {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_EC_PublicKey_Format_RAW_Compressed_mnnxm_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_EC_PublicKey_Format_RAW_Compressed_mnnxm_k$($box) {
    Compressed_instance = null;
    var $this = this.new_dev_whyoleg_cryptography_algorithms_EC_PublicKey_Format_RAW_8wlaxt_k$($box);
    Compressed_instance = $this;
    return $this;
  }
  get_name_woqyms_k$() {
    return 'RAW/COMPRESSED';
  }
  hashCode() {
    return -876424098;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof Compressed))
      return false;
    return true;
  }
}
class JWK extends Format_0 {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_EC_PublicKey_Format_JWK_cguxjh_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_EC_PublicKey_Format_JWK_cguxjh_k$($box) {
    JWK_instance = null;
    var $this = this.new_dev_whyoleg_cryptography_algorithms_EC_PublicKey_Format_spj3vf_k$($box);
    JWK_instance = $this;
    return $this;
  }
  get_name_woqyms_k$() {
    return 'JWK';
  }
  hashCode() {
    return -164862489;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof JWK))
      return false;
    return true;
  }
}
class DER extends Format_0 {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_EC_PublicKey_Format_DER_dgio4z_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_EC_PublicKey_Format_DER_dgio4z_k$($box) {
    DER_instance = null;
    var $this = this.new_dev_whyoleg_cryptography_algorithms_EC_PublicKey_Format_spj3vf_k$($box);
    DER_instance = $this;
    return $this;
  }
  get_name_woqyms_k$() {
    return 'DER';
  }
  hashCode() {
    return -164868806;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof DER))
      return false;
    return true;
  }
}
class PEM extends Format_0 {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_EC_PublicKey_Format_PEM_rf858f_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_EC_PublicKey_Format_PEM_rf858f_k$($box) {
    PEM_instance = null;
    var $this = this.new_dev_whyoleg_cryptography_algorithms_EC_PublicKey_Format_spj3vf_k$($box);
    PEM_instance = $this;
    return $this;
  }
  get_name_woqyms_k$() {
    return 'PEM';
  }
  hashCode() {
    return -164857279;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof PEM))
      return false;
    return true;
  }
}
class Format_1 {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_EC_PrivateKey_Format_t7uhyv_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_EC_PrivateKey_Format_t7uhyv_k$($box) {
    return createThis(this, $box);
  }
  toString() {
    return this.get_name_woqyms_k$();
  }
}
class DER_0 extends Format_1 {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_EC_PrivateKey_Format_DER_vy3vc7_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_EC_PrivateKey_Format_DER_vy3vc7_k$($box) {
    Generic_getInstance();
    return this.new_dev_whyoleg_cryptography_algorithms_EC_PrivateKey_Format_t7uhyv_k$($box);
  }
}
class Generic extends DER_0 {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_EC_PrivateKey_Format_DER_Generic_vo19yl_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_EC_PrivateKey_Format_DER_Generic_vo19yl_k$($box) {
    Generic_instance = null;
    var $this = this.new_dev_whyoleg_cryptography_algorithms_EC_PrivateKey_Format_DER_vy3vc7_k$($box);
    Generic_instance = $this;
    return $this;
  }
  get_name_woqyms_k$() {
    return 'DER';
  }
}
class SEC1 extends DER_0 {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_EC_PrivateKey_Format_DER_SEC1_itdssh_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_EC_PrivateKey_Format_DER_SEC1_itdssh_k$($box) {
    SEC1_instance = null;
    var $this = this.new_dev_whyoleg_cryptography_algorithms_EC_PrivateKey_Format_DER_vy3vc7_k$($box);
    SEC1_instance = $this;
    return $this;
  }
  get_name_woqyms_k$() {
    return 'DER/SEC1';
  }
  hashCode() {
    return -137777718;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof SEC1))
      return false;
    return true;
  }
}
class PEM_0 extends Format_1 {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_EC_PrivateKey_Format_PEM_gqv20p_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_EC_PrivateKey_Format_PEM_gqv20p_k$($box) {
    Generic_getInstance_0();
    return this.new_dev_whyoleg_cryptography_algorithms_EC_PrivateKey_Format_t7uhyv_k$($box);
  }
}
class Generic_0 extends PEM_0 {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_EC_PrivateKey_Format_PEM_Generic_azrh0s_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_EC_PrivateKey_Format_PEM_Generic_azrh0s_k$($box) {
    Generic_instance_0 = null;
    var $this = this.new_dev_whyoleg_cryptography_algorithms_EC_PrivateKey_Format_PEM_gqv20p_k$($box);
    Generic_instance_0 = $this;
    return $this;
  }
  get_name_woqyms_k$() {
    return 'PEM';
  }
}
class SEC1_0 extends PEM_0 {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_EC_PrivateKey_Format_PEM_SEC1_qd552w_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_EC_PrivateKey_Format_PEM_SEC1_qd552w_k$($box) {
    SEC1_instance_0 = null;
    var $this = this.new_dev_whyoleg_cryptography_algorithms_EC_PrivateKey_Format_PEM_gqv20p_k$($box);
    SEC1_instance_0 = $this;
    return $this;
  }
  get_name_woqyms_k$() {
    return 'PEM/SEC1';
  }
  hashCode() {
    return -842035933;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof SEC1_0))
      return false;
    return true;
  }
}
class JWK_0 extends Format_1 {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_EC_PrivateKey_Format_JWK_9fes07_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_EC_PrivateKey_Format_JWK_9fes07_k$($box) {
    JWK_instance_0 = null;
    var $this = this.new_dev_whyoleg_cryptography_algorithms_EC_PrivateKey_Format_t7uhyv_k$($box);
    JWK_instance_0 = $this;
    return $this;
  }
  get_name_woqyms_k$() {
    return 'JWK';
  }
  hashCode() {
    return 1029262513;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof JWK_0))
      return false;
    return true;
  }
}
class RAW_0 extends Format_1 {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_EC_PrivateKey_Format_RAW_ji4b95_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_EC_PrivateKey_Format_RAW_ji4b95_k$($box) {
    RAW_instance = null;
    var $this = this.new_dev_whyoleg_cryptography_algorithms_EC_PrivateKey_Format_t7uhyv_k$($box);
    RAW_instance = $this;
    return $this;
  }
  get_name_woqyms_k$() {
    return 'RAW';
  }
  hashCode() {
    return 1029269531;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof RAW_0))
      return false;
    return true;
  }
}
class Curve {
  constructor(name) {
    Companion_getInstance_10();
    this.name_1 = name;
  }
  toString() {
    return Curve__toString_impl_5205v2(this.name_1);
  }
  hashCode() {
    return Curve__hashCode_impl_qt62nx(this.name_1);
  }
  equals(other) {
    return Curve__equals_impl_vp328v(this.name_1, other);
  }
}
class KeyPair {}
class PublicKey {}
class PublicKeyAccessor {}
function *getPublicKey($completion) {
  return this.getPublicKeyBlocking_9n4uz9_k$();
}
class PrivateKey {}
class EC {}
class Companion_11 extends CryptographyAlgorithmId {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_ECDH_Companion_lpuwkp_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_ECDH_Companion_lpuwkp_k$($box) {
    Companion_instance_11 = null;
    var $this = this.new_dev_whyoleg_cryptography_CryptographyAlgorithmId_4vvh7e_k$('ECDH', $box);
    Companion_instance_11 = $this;
    return $this;
  }
}
class KeyPair_0 {}
class PublicKey_0 {}
class PrivateKey_0 {}
class ECDH {}
function get_id_8() {
  return Companion_getInstance_11();
}
class Companion_12 extends CryptographyAlgorithmId {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_ECDSA_Companion_he1ioj_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_ECDSA_Companion_he1ioj_k$($box) {
    Companion_instance_12 = null;
    var $this = this.new_dev_whyoleg_cryptography_CryptographyAlgorithmId_4vvh7e_k$('ECDSA', $box);
    Companion_instance_12 = $this;
    return $this;
  }
}
class KeyPair_1 {}
class PublicKey_1 {}
class PrivateKey_1 {}
class SignatureFormat extends Enum {
  constructor(name, ordinal) {
    return new.target.new_dev_whyoleg_cryptography_algorithms_ECDSA_SignatureFormat_3lowkq_k$(name, ordinal);
  }
  static new_dev_whyoleg_cryptography_algorithms_ECDSA_SignatureFormat_3lowkq_k$(name, ordinal, $box) {
    return this.new_kotlin_Enum_a1ijns_k$(name, ordinal, $box);
  }
}
class ECDSA {}
function get_id_9() {
  return Companion_getInstance_12();
}
class Format_2 {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_EdDSA_PublicKey_Format_gmrwr9_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_EdDSA_PublicKey_Format_gmrwr9_k$($box) {
    return createThis(this, $box);
  }
  toString() {
    return this.get_name_woqyms_k$();
  }
}
class JWK_1 extends Format_2 {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_EdDSA_PublicKey_Format_JWK_t2zqg_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_EdDSA_PublicKey_Format_JWK_t2zqg_k$($box) {
    JWK_instance_1 = null;
    var $this = this.new_dev_whyoleg_cryptography_algorithms_EdDSA_PublicKey_Format_gmrwr9_k$($box);
    JWK_instance_1 = $this;
    return $this;
  }
  get_name_woqyms_k$() {
    return 'JWK';
  }
  hashCode() {
    return 1590929730;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof JWK_1))
      return false;
    return true;
  }
}
class RAW_1 extends Format_2 {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_EdDSA_PublicKey_Format_RAW_p9pp9k_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_EdDSA_PublicKey_Format_RAW_p9pp9k_k$($box) {
    RAW_instance_0 = null;
    var $this = this.new_dev_whyoleg_cryptography_algorithms_EdDSA_PublicKey_Format_gmrwr9_k$($box);
    RAW_instance_0 = $this;
    return $this;
  }
  get_name_woqyms_k$() {
    return 'RAW';
  }
  hashCode() {
    return 1590936748;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof RAW_1))
      return false;
    return true;
  }
}
class DER_1 extends Format_2 {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_EdDSA_PublicKey_Format_DER_xcgi60_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_EdDSA_PublicKey_Format_DER_xcgi60_k$($box) {
    DER_instance_0 = null;
    var $this = this.new_dev_whyoleg_cryptography_algorithms_EdDSA_PublicKey_Format_gmrwr9_k$($box);
    DER_instance_0 = $this;
    return $this;
  }
  get_name_woqyms_k$() {
    return 'DER';
  }
  hashCode() {
    return 1590923413;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof DER_1))
      return false;
    return true;
  }
}
class PEM_1 extends Format_2 {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_EdDSA_PublicKey_Format_PEM_ay9kq0_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_EdDSA_PublicKey_Format_PEM_ay9kq0_k$($box) {
    PEM_instance_0 = null;
    var $this = this.new_dev_whyoleg_cryptography_algorithms_EdDSA_PublicKey_Format_gmrwr9_k$($box);
    PEM_instance_0 = $this;
    return $this;
  }
  get_name_woqyms_k$() {
    return 'PEM';
  }
  hashCode() {
    return 1590934940;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof PEM_1))
      return false;
    return true;
  }
}
class Format_3 {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_EdDSA_PrivateKey_Format_h849a9_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_EdDSA_PrivateKey_Format_h849a9_k$($box) {
    return createThis(this, $box);
  }
  toString() {
    return this.get_name_woqyms_k$();
  }
}
class JWK_2 extends Format_3 {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_EdDSA_PrivateKey_Format_JWK_g85dba_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_EdDSA_PrivateKey_Format_JWK_g85dba_k$($box) {
    JWK_instance_2 = null;
    var $this = this.new_dev_whyoleg_cryptography_algorithms_EdDSA_PrivateKey_Format_h849a9_k$($box);
    JWK_instance_2 = $this;
    return $this;
  }
  get_name_woqyms_k$() {
    return 'JWK';
  }
  hashCode() {
    return -375753546;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof JWK_2))
      return false;
    return true;
  }
}
class RAW_2 extends Format_3 {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_EdDSA_PrivateKey_Format_RAW_bmn6tu_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_EdDSA_PrivateKey_Format_RAW_bmn6tu_k$($box) {
    RAW_instance_1 = null;
    var $this = this.new_dev_whyoleg_cryptography_algorithms_EdDSA_PrivateKey_Format_h849a9_k$($box);
    RAW_instance_1 = $this;
    return $this;
  }
  get_name_woqyms_k$() {
    return 'RAW';
  }
  hashCode() {
    return -375746528;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof RAW_2))
      return false;
    return true;
  }
}
class DER_2 extends Format_3 {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_EdDSA_PrivateKey_Format_DER_bly37k_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_EdDSA_PrivateKey_Format_DER_bly37k_k$($box) {
    DER_instance_1 = null;
    var $this = this.new_dev_whyoleg_cryptography_algorithms_EdDSA_PrivateKey_Format_h849a9_k$($box);
    DER_instance_1 = $this;
    return $this;
  }
  get_name_woqyms_k$() {
    return 'DER';
  }
  hashCode() {
    return -375759863;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof DER_2))
      return false;
    return true;
  }
}
class PEM_2 extends Format_3 {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_EdDSA_PrivateKey_Format_PEM_qma7bi_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_EdDSA_PrivateKey_Format_PEM_qma7bi_k$($box) {
    PEM_instance_1 = null;
    var $this = this.new_dev_whyoleg_cryptography_algorithms_EdDSA_PrivateKey_Format_h849a9_k$($box);
    PEM_instance_1 = $this;
    return $this;
  }
  get_name_woqyms_k$() {
    return 'PEM';
  }
  hashCode() {
    return -375748336;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof PEM_2))
      return false;
    return true;
  }
}
class Companion_13 extends CryptographyAlgorithmId {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_EdDSA_Companion_6xzbww_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_EdDSA_Companion_6xzbww_k$($box) {
    Companion_instance_13 = null;
    var $this = this.new_dev_whyoleg_cryptography_CryptographyAlgorithmId_4vvh7e_k$('EdDSA', $box);
    Companion_instance_13 = $this;
    return $this;
  }
}
class Curve_0 extends Enum {
  constructor(name, ordinal) {
    return new.target.new_dev_whyoleg_cryptography_algorithms_EdDSA_Curve_df9qv_k$(name, ordinal);
  }
  static new_dev_whyoleg_cryptography_algorithms_EdDSA_Curve_df9qv_k$(name, ordinal, $box) {
    return this.new_kotlin_Enum_a1ijns_k$(name, ordinal, $box);
  }
}
class KeyPair_2 {}
class PublicKey_2 {}
class PrivateKey_2 {}
class EdDSA {}
function get_id_10() {
  return Companion_getInstance_13();
}
class Companion_14 extends CryptographyAlgorithmId {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_HKDF_Companion_os2sp2_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_HKDF_Companion_os2sp2_k$($box) {
    Companion_instance_14 = null;
    var $this = this.new_dev_whyoleg_cryptography_CryptographyAlgorithmId_4vvh7e_k$('HKDF', $box);
    Companion_instance_14 = $this;
    return $this;
  }
}
class HKDF {}
function get_id_11() {
  return Companion_getInstance_14();
}
function secretDerivation$default(digest, outputSize, salt, info, $super) {
  info = info === VOID ? null : info;
  return $super === VOID ? this.secretDerivation_e603d7_k$(digest, outputSize, salt, info) : $super.secretDerivation_e603d7_k$.call(this, digest, new BinarySize(outputSize), salt, info);
}
function secretDerivation(digest, outputSize, salt, info) {
  var tmp;
  if (salt == null) {
    tmp = null;
  } else {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'dev.whyoleg.cryptography.asByteArray' call
      // Inline function 'kotlinx.io.bytestring.unsafe.UnsafeByteStringOperations.withByteArrayUnsafe' call
      UnsafeByteStringOperations_getInstance();
      tmp$ret$0 = salt.getBackingArrayReference_x19ruh_k$();
      break $l$block;
    }
    tmp = tmp$ret$0;
  }
  var tmp_0 = tmp;
  var tmp_1;
  if (info == null) {
    tmp_1 = null;
  } else {
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'dev.whyoleg.cryptography.asByteArray' call
      // Inline function 'kotlinx.io.bytestring.unsafe.UnsafeByteStringOperations.withByteArrayUnsafe' call
      UnsafeByteStringOperations_getInstance();
      tmp$ret$3 = info.getBackingArrayReference_x19ruh_k$();
      break $l$block_0;
    }
    tmp_1 = tmp$ret$3;
  }
  return this.secretDerivation_e603d7_k$(digest, outputSize, tmp_0, tmp_1);
}
function secretDerivation$default_0(digest, outputSize, salt, info, $super) {
  info = info === VOID ? null : info;
  return $super === VOID ? this.secretDerivation_pqbx9l_k$(digest, outputSize, salt, info) : secretDerivation(digest, outputSize, salt, info);
}
class Format_4 extends Enum {
  constructor(name, ordinal) {
    return new.target.new_dev_whyoleg_cryptography_algorithms_HMAC_Key_Format_q94z1x_k$(name, ordinal);
  }
  static new_dev_whyoleg_cryptography_algorithms_HMAC_Key_Format_q94z1x_k$(name, ordinal, $box) {
    return this.new_kotlin_Enum_a1ijns_k$(name, ordinal, $box);
  }
}
class Companion_15 extends CryptographyAlgorithmId {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_HMAC_Companion_bgd21w_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_HMAC_Companion_bgd21w_k$($box) {
    Companion_instance_15 = null;
    var $this = this.new_dev_whyoleg_cryptography_CryptographyAlgorithmId_4vvh7e_k$('HMAC', $box);
    Companion_instance_15 = $this;
    return $this;
  }
}
class Key_9 {}
class HMAC {}
function get_id_12() {
  return Companion_getInstance_15();
}
function keyGenerator$default_0(digest, $super) {
  digest = digest === VOID ? SHA512_getInstance() : digest;
  return $super === VOID ? this.keyGenerator_r3mfeh_k$(digest) : $super.keyGenerator_r3mfeh_k$.call(this, digest);
}
class Companion_16 extends CryptographyAlgorithmId {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_PBKDF2_Companion_8q6pxw_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_PBKDF2_Companion_8q6pxw_k$($box) {
    Companion_instance_16 = null;
    var $this = this.new_dev_whyoleg_cryptography_CryptographyAlgorithmId_4vvh7e_k$('PBKDF2', $box);
    Companion_instance_16 = $this;
    return $this;
  }
}
class PBKDF2 {}
function get_id_13() {
  return Companion_getInstance_16();
}
function secretDerivation_0(digest, iterations, outputSize, salt) {
  var tmp$ret$0;
  $l$block: {
    // Inline function 'dev.whyoleg.cryptography.asByteArray' call
    // Inline function 'kotlinx.io.bytestring.unsafe.UnsafeByteStringOperations.withByteArrayUnsafe' call
    UnsafeByteStringOperations_getInstance();
    tmp$ret$0 = salt.getBackingArrayReference_x19ruh_k$();
    break $l$block;
  }
  return this.secretDerivation_q5gxu9_k$(digest, iterations, outputSize, tmp$ret$0);
}
class Format_5 {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_RSA_PublicKey_Format_2oei0l_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_RSA_PublicKey_Format_2oei0l_k$($box) {
    return createThis(this, $box);
  }
  toString() {
    return this.get_name_woqyms_k$();
  }
}
class DER_3 extends Format_5 {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_RSA_PublicKey_Format_DER_prjh5n_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_RSA_PublicKey_Format_DER_prjh5n_k$($box) {
    Generic_getInstance_1();
    return this.new_dev_whyoleg_cryptography_algorithms_RSA_PublicKey_Format_2oei0l_k$($box);
  }
}
class Generic_1 extends DER_3 {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_RSA_PublicKey_Format_DER_Generic_qbwaj5_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_RSA_PublicKey_Format_DER_Generic_qbwaj5_k$($box) {
    Generic_instance_1 = null;
    var $this = this.new_dev_whyoleg_cryptography_algorithms_RSA_PublicKey_Format_DER_prjh5n_k$($box);
    Generic_instance_1 = $this;
    return $this;
  }
  get_name_woqyms_k$() {
    return 'DER';
  }
}
class PKCS1 extends DER_3 {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_RSA_PublicKey_Format_DER_PKCS1_i7epqn_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_RSA_PublicKey_Format_DER_PKCS1_i7epqn_k$($box) {
    PKCS1_instance = null;
    var $this = this.new_dev_whyoleg_cryptography_algorithms_RSA_PublicKey_Format_DER_prjh5n_k$($box);
    PKCS1_instance = $this;
    return $this;
  }
  get_name_woqyms_k$() {
    return 'DER/PKCS#1';
  }
  hashCode() {
    return 1950278528;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof PKCS1))
      return false;
    return true;
  }
}
class PEM_3 extends Format_5 {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_RSA_PublicKey_Format_PEM_3fecjf_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_RSA_PublicKey_Format_PEM_3fecjf_k$($box) {
    Generic_getInstance_2();
    return this.new_dev_whyoleg_cryptography_algorithms_RSA_PublicKey_Format_2oei0l_k$($box);
  }
}
class Generic_2 extends PEM_3 {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_RSA_PublicKey_Format_PEM_Generic_21f0gm_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_RSA_PublicKey_Format_PEM_Generic_21f0gm_k$($box) {
    Generic_instance_2 = null;
    var $this = this.new_dev_whyoleg_cryptography_algorithms_RSA_PublicKey_Format_PEM_3fecjf_k$($box);
    Generic_instance_2 = $this;
    return $this;
  }
  get_name_woqyms_k$() {
    return 'PEM';
  }
}
class PKCS1_0 extends PEM_3 {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_RSA_PublicKey_Format_PEM_PKCS1_x05hme_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_RSA_PublicKey_Format_PEM_PKCS1_x05hme_k$($box) {
    PKCS1_instance_0 = null;
    var $this = this.new_dev_whyoleg_cryptography_algorithms_RSA_PublicKey_Format_PEM_3fecjf_k$($box);
    PKCS1_instance_0 = $this;
    return $this;
  }
  get_name_woqyms_k$() {
    return 'PEM/PKCS#1';
  }
  hashCode() {
    return 1593110343;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof PKCS1_0))
      return false;
    return true;
  }
}
class JWK_3 extends Format_5 {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_RSA_PublicKey_Format_JWK_mqvhhh_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_RSA_PublicKey_Format_JWK_mqvhhh_k$($box) {
    JWK_instance_3 = null;
    var $this = this.new_dev_whyoleg_cryptography_algorithms_RSA_PublicKey_Format_2oei0l_k$($box);
    JWK_instance_3 = $this;
    return $this;
  }
  get_name_woqyms_k$() {
    return 'JWK';
  }
  hashCode() {
    return -1819476043;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof JWK_3))
      return false;
    return true;
  }
}
class Format_6 {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_RSA_PrivateKey_Format_ik5d3v_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_RSA_PrivateKey_Format_ik5d3v_k$($box) {
    return createThis(this, $box);
  }
  toString() {
    return this.get_name_woqyms_k$();
  }
}
class DER_4 extends Format_6 {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_RSA_PrivateKey_Format_DER_7f26tv_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_RSA_PrivateKey_Format_DER_7f26tv_k$($box) {
    Generic_getInstance_3();
    return this.new_dev_whyoleg_cryptography_algorithms_RSA_PrivateKey_Format_ik5d3v_k$($box);
  }
}
class Generic_3 extends DER_4 {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_RSA_PrivateKey_Format_DER_Generic_o7726j_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_RSA_PrivateKey_Format_DER_Generic_o7726j_k$($box) {
    Generic_instance_3 = null;
    var $this = this.new_dev_whyoleg_cryptography_algorithms_RSA_PrivateKey_Format_DER_7f26tv_k$($box);
    Generic_instance_3 = $this;
    return $this;
  }
  get_name_woqyms_k$() {
    return 'DER';
  }
}
class PKCS1_1 extends DER_4 {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_RSA_PrivateKey_Format_DER_PKCS1_n4h9wp_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_RSA_PrivateKey_Format_DER_PKCS1_n4h9wp_k$($box) {
    PKCS1_instance_1 = null;
    var $this = this.new_dev_whyoleg_cryptography_algorithms_RSA_PrivateKey_Format_DER_7f26tv_k$($box);
    PKCS1_instance_1 = $this;
    return $this;
  }
  get_name_woqyms_k$() {
    return 'DER/PKCS#1';
  }
  hashCode() {
    return -1024989714;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof PKCS1_1))
      return false;
    return true;
  }
}
class PEM_4 extends Format_6 {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_RSA_PrivateKey_Format_PEM_3dr797_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_RSA_PrivateKey_Format_PEM_3dr797_k$($box) {
    Generic_getInstance_4();
    return this.new_dev_whyoleg_cryptography_algorithms_RSA_PrivateKey_Format_ik5d3v_k$($box);
  }
}
class Generic_4 extends PEM_4 {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_RSA_PrivateKey_Format_PEM_Generic_phnpea_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_RSA_PrivateKey_Format_PEM_Generic_phnpea_k$($box) {
    Generic_instance_4 = null;
    var $this = this.new_dev_whyoleg_cryptography_algorithms_RSA_PrivateKey_Format_PEM_3dr797_k$($box);
    Generic_instance_4 = $this;
    return $this;
  }
  get_name_woqyms_k$() {
    return 'PEM';
  }
}
class PKCS1_2 extends PEM_4 {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_RSA_PrivateKey_Format_PEM_PKCS1_v0fg0_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_RSA_PrivateKey_Format_PEM_PKCS1_v0fg0_k$($box) {
    PKCS1_instance_2 = null;
    var $this = this.new_dev_whyoleg_cryptography_algorithms_RSA_PrivateKey_Format_PEM_3dr797_k$($box);
    PKCS1_instance_2 = $this;
    return $this;
  }
  get_name_woqyms_k$() {
    return 'PEM/PKCS#1';
  }
  hashCode() {
    return -1382157899;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof PKCS1_2))
      return false;
    return true;
  }
}
class JWK_4 extends Format_6 {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_RSA_PrivateKey_Format_JWK_blcn5l_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_RSA_PrivateKey_Format_JWK_blcn5l_k$($box) {
    JWK_instance_4 = null;
    var $this = this.new_dev_whyoleg_cryptography_algorithms_RSA_PrivateKey_Format_ik5d3v_k$($box);
    JWK_instance_4 = $this;
    return $this;
  }
  get_name_woqyms_k$() {
    return 'JWK';
  }
  hashCode() {
    return 1275849891;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof JWK_4))
      return false;
    return true;
  }
}
class Companion_17 extends CryptographyAlgorithmId {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_RSA_OAEP_Companion_m63575_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_RSA_OAEP_Companion_m63575_k$($box) {
    Companion_instance_17 = null;
    var $this = this.new_dev_whyoleg_cryptography_CryptographyAlgorithmId_4vvh7e_k$('RSA-OAEP', $box);
    Companion_instance_17 = $this;
    return $this;
  }
}
class KeyPair_3 {}
class KeyPair_4 {}
class PublicKey_3 {}
class PublicKey_4 {}
class PrivateKey_3 {}
class PrivateKey_4 {}
class Companion_18 extends CryptographyAlgorithmId {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_RSA_PSS_Companion_fews5w_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_RSA_PSS_Companion_fews5w_k$($box) {
    Companion_instance_18 = null;
    var $this = this.new_dev_whyoleg_cryptography_CryptographyAlgorithmId_4vvh7e_k$('RSA-PSS', $box);
    Companion_instance_18 = $this;
    return $this;
  }
}
class KeyPair_5 {}
class PublicKey_5 {}
class PrivateKey_5 {}
class Companion_19 extends CryptographyAlgorithmId {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_RSA_PKCS1_Companion_qtl2a6_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_RSA_PKCS1_Companion_qtl2a6_k$($box) {
    Companion_instance_19 = null;
    var $this = this.new_dev_whyoleg_cryptography_CryptographyAlgorithmId_4vvh7e_k$('RSA-PKCS1-V1.5', $box);
    Companion_instance_19 = $this;
    return $this;
  }
}
class KeyPair_6 {}
class PublicKey_6 {}
class PrivateKey_6 {}
class Companion_20 extends CryptographyAlgorithmId {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_RSA_RAW_Companion_fl3b78_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_RSA_RAW_Companion_fl3b78_k$($box) {
    Companion_instance_20 = null;
    var $this = this.new_dev_whyoleg_cryptography_CryptographyAlgorithmId_4vvh7e_k$('RSA-RAW', $box);
    Companion_instance_20 = $this;
    return $this;
  }
}
class KeyPair_7 {}
class PublicKey_7 {}
class PrivateKey_7 {}
class RSA {}
function keyPairGenerator$default(keySize, digest, publicExponent, $super) {
  keySize = keySize === VOID ? Companion_getInstance().get_bits_lxmv6s_k$(4096) : keySize;
  digest = digest === VOID ? SHA512_getInstance() : digest;
  publicExponent = publicExponent === VOID ? toBigInt(65537) : publicExponent;
  return $super === VOID ? this.keyPairGenerator_q7335c_k$(keySize, digest, publicExponent) : $super.keyPairGenerator_q7335c_k$.call(this, new BinarySize(keySize), digest, publicExponent);
}
class OAEP {}
function get_id_14() {
  return Companion_getInstance_17();
}
class PSS {}
function get_id_15() {
  return Companion_getInstance_18();
}
class PKCS1_3 {}
function get_id_16() {
  return Companion_getInstance_19();
}
class RAW_3 {}
function get_id_17() {
  return Companion_getInstance_20();
}
class Format_7 {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_XDH_PublicKey_Format_3qt5u3_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_XDH_PublicKey_Format_3qt5u3_k$($box) {
    return createThis(this, $box);
  }
  toString() {
    return this.get_name_woqyms_k$();
  }
}
class JWK_5 extends Format_7 {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_XDH_PublicKey_Format_JWK_44b2f3_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_XDH_PublicKey_Format_JWK_44b2f3_k$($box) {
    JWK_instance_5 = null;
    var $this = this.new_dev_whyoleg_cryptography_algorithms_XDH_PublicKey_Format_3qt5u3_k$($box);
    JWK_instance_5 = $this;
    return $this;
  }
  get_name_woqyms_k$() {
    return 'JWK';
  }
  hashCode() {
    return -799639431;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof JWK_5))
      return false;
    return true;
  }
}
class RAW_4 extends Format_7 {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_XDH_PublicKey_Format_RAW_x1u5of_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_XDH_PublicKey_Format_RAW_x1u5of_k$($box) {
    RAW_instance_2 = null;
    var $this = this.new_dev_whyoleg_cryptography_algorithms_XDH_PublicKey_Format_3qt5u3_k$($box);
    RAW_instance_2 = $this;
    return $this;
  }
  get_name_woqyms_k$() {
    return 'RAW';
  }
  hashCode() {
    return -799632413;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof RAW_4))
      return false;
    return true;
  }
}
class DER_5 extends Format_7 {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_XDH_PublicKey_Format_DER_iee0wx_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_XDH_PublicKey_Format_DER_iee0wx_k$($box) {
    DER_instance_2 = null;
    var $this = this.new_dev_whyoleg_cryptography_algorithms_XDH_PublicKey_Format_3qt5u3_k$($box);
    DER_instance_2 = $this;
    return $this;
  }
  get_name_woqyms_k$() {
    return 'DER';
  }
  hashCode() {
    return -799645748;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof DER_5))
      return false;
    return true;
  }
}
class PEM_5 extends Format_7 {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_XDH_PublicKey_Format_PEM_uakwfz_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_XDH_PublicKey_Format_PEM_uakwfz_k$($box) {
    PEM_instance_2 = null;
    var $this = this.new_dev_whyoleg_cryptography_algorithms_XDH_PublicKey_Format_3qt5u3_k$($box);
    PEM_instance_2 = $this;
    return $this;
  }
  get_name_woqyms_k$() {
    return 'PEM';
  }
  hashCode() {
    return -799634221;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof PEM_5))
      return false;
    return true;
  }
}
class Format_8 {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_XDH_PrivateKey_Format_m79pn7_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_XDH_PrivateKey_Format_m79pn7_k$($box) {
    return createThis(this, $box);
  }
  toString() {
    return this.get_name_woqyms_k$();
  }
}
class JWK_6 extends Format_8 {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_XDH_PrivateKey_Format_JWK_lcd85f_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_XDH_PrivateKey_Format_JWK_lcd85f_k$($box) {
    JWK_instance_6 = null;
    var $this = this.new_dev_whyoleg_cryptography_algorithms_XDH_PrivateKey_Format_m79pn7_k$($box);
    JWK_instance_6 = $this;
    return $this;
  }
  get_name_woqyms_k$() {
    return 'JWK';
  }
  hashCode() {
    return -1468953505;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof JWK_6))
      return false;
    return true;
  }
}
class RAW_5 extends Format_8 {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_XDH_PrivateKey_Format_RAW_sg9sbt_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_XDH_PrivateKey_Format_RAW_sg9sbt_k$($box) {
    RAW_instance_3 = null;
    var $this = this.new_dev_whyoleg_cryptography_algorithms_XDH_PrivateKey_Format_m79pn7_k$($box);
    RAW_instance_3 = $this;
    return $this;
  }
  get_name_woqyms_k$() {
    return 'RAW';
  }
  hashCode() {
    return -1468946487;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof RAW_5))
      return false;
    return true;
  }
}
class DER_6 extends Format_8 {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_XDH_PrivateKey_Format_DER_pinoh5_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_XDH_PrivateKey_Format_DER_pinoh5_k$($box) {
    DER_instance_3 = null;
    var $this = this.new_dev_whyoleg_cryptography_algorithms_XDH_PrivateKey_Format_m79pn7_k$($box);
    DER_instance_3 = $this;
    return $this;
  }
  get_name_woqyms_k$() {
    return 'DER';
  }
  hashCode() {
    return -1468959822;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof DER_6))
      return false;
    return true;
  }
}
class PEM_6 extends Format_8 {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_XDH_PrivateKey_Format_PEM_ypmzex_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_XDH_PrivateKey_Format_PEM_ypmzex_k$($box) {
    PEM_instance_3 = null;
    var $this = this.new_dev_whyoleg_cryptography_algorithms_XDH_PrivateKey_Format_m79pn7_k$($box);
    PEM_instance_3 = $this;
    return $this;
  }
  get_name_woqyms_k$() {
    return 'PEM';
  }
  hashCode() {
    return -1468948295;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof PEM_6))
      return false;
    return true;
  }
}
class Companion_21 extends CryptographyAlgorithmId {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_XDH_Companion_gfh01h_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_XDH_Companion_gfh01h_k$($box) {
    Companion_instance_21 = null;
    var $this = this.new_dev_whyoleg_cryptography_CryptographyAlgorithmId_4vvh7e_k$('XDH', $box);
    Companion_instance_21 = $this;
    return $this;
  }
}
class Curve_1 extends Enum {
  constructor(name, ordinal) {
    return new.target.new_dev_whyoleg_cryptography_algorithms_XDH_Curve_32x1wy_k$(name, ordinal);
  }
  static new_dev_whyoleg_cryptography_algorithms_XDH_Curve_32x1wy_k$(name, ordinal, $box) {
    return this.new_kotlin_Enum_a1ijns_k$(name, ordinal, $box);
  }
}
class KeyPair_8 {}
class PublicKey_8 {}
class PrivateKey_8 {}
class XDH {}
function get_id_18() {
  return Companion_getInstance_21();
}
class Companion_22 {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_algorithms_symmetric_SymmetricKeySize_Companion_a7a657_k$();
  }
  static new_dev_whyoleg_cryptography_algorithms_symmetric_SymmetricKeySize_Companion_a7a657_k$($box) {
    var $this = createThis(this, $box);
    Companion_instance_22 = $this;
    return $this;
  }
  get_B128_nt4ga7_k$() {
    return _SymmetricKeySize___init__impl__8vlm4o(Companion_getInstance().get_bits_lxmv6s_k$(128));
  }
  get_B192_izucos_k$() {
    return _SymmetricKeySize___init__impl__8vlm4o(Companion_getInstance().get_bits_lxmv6s_k$(192));
  }
  get_B256_blclw3_k$() {
    return _SymmetricKeySize___init__impl__8vlm4o(Companion_getInstance().get_bits_lxmv6s_k$(256));
  }
}
class SymmetricKeySize {
  constructor(value) {
    Companion_getInstance_22();
    this.value_1 = value;
  }
  toString() {
    return SymmetricKeySize__toString_impl_ed4jrc(this.value_1);
  }
  hashCode() {
    return SymmetricKeySize__hashCode_impl_ywtlex(this.value_1);
  }
  equals(other) {
    return SymmetricKeySize__equals_impl_yoqnjv(this.value_1, other);
  }
}
class Decoder {}
function *decodeFromByteArray(format, bytes, $completion) {
  return this.decodeFromByteArrayBlocking_igkog1_k$(format, bytes);
}
function *decodeFromByteString(format, byteString, $completion) {
  var tmp$ret$0;
  $l$block: {
    // Inline function 'dev.whyoleg.cryptography.asByteArray' call
    // Inline function 'kotlinx.io.bytestring.unsafe.UnsafeByteStringOperations.withByteArrayUnsafe' call
    UnsafeByteStringOperations_getInstance();
    tmp$ret$0 = byteString.getBackingArrayReference_x19ruh_k$();
    break $l$block;
  }
  return yield* this.decodeFromByteArray_wm6hc8_k$(format, tmp$ret$0, $completion);
}
function decodeFromByteStringBlocking(format, byteString) {
  var tmp$ret$0;
  $l$block: {
    // Inline function 'dev.whyoleg.cryptography.asByteArray' call
    // Inline function 'kotlinx.io.bytestring.unsafe.UnsafeByteStringOperations.withByteArrayUnsafe' call
    UnsafeByteStringOperations_getInstance();
    tmp$ret$0 = byteString.getBackingArrayReference_x19ruh_k$();
    break $l$block;
  }
  return this.decodeFromByteArrayBlocking_igkog1_k$(format, tmp$ret$0);
}
class Encryptor {}
function *encrypt(plaintext, $completion) {
  return this.encryptBlocking_er2jdm_k$(plaintext);
}
function *encrypt_0(plaintext, $completion) {
  var tmp$ret$0;
  $l$block: {
    // Inline function 'dev.whyoleg.cryptography.asByteArray' call
    // Inline function 'kotlinx.io.bytestring.unsafe.UnsafeByteStringOperations.withByteArrayUnsafe' call
    UnsafeByteStringOperations_getInstance();
    tmp$ret$0 = plaintext.getBackingArrayReference_x19ruh_k$();
    break $l$block;
  }
  // Inline function 'dev.whyoleg.cryptography.asByteString' call
  var this_0 = yield* this.encrypt_q0vfci_k$(tmp$ret$0, $completion);
  return UnsafeByteStringOperations_getInstance().wrapUnsafe_3fobxs_k$(this_0);
}
function encryptBlocking(plaintext) {
  var tmp$ret$0;
  $l$block: {
    // Inline function 'dev.whyoleg.cryptography.asByteArray' call
    // Inline function 'kotlinx.io.bytestring.unsafe.UnsafeByteStringOperations.withByteArrayUnsafe' call
    UnsafeByteStringOperations_getInstance();
    tmp$ret$0 = plaintext.getBackingArrayReference_x19ruh_k$();
    break $l$block;
  }
  // Inline function 'dev.whyoleg.cryptography.asByteString' call
  var this_0 = this.encryptBlocking_er2jdm_k$(tmp$ret$0);
  return UnsafeByteStringOperations_getInstance().wrapUnsafe_3fobxs_k$(this_0);
}
class AuthenticatedEncryptor {}
function *encrypt_1(plaintext, $completion) {
  return yield* this.encrypt_3cx9e3_k$(plaintext, null, $completion);
}
function *encrypt_2(plaintext, $completion) {
  return yield* this.encrypt_qyo9d9_k$(plaintext, null, $completion);
}
function *encrypt_3(plaintext, associatedData, $completion) {
  return this.encryptBlocking_tjn9kj_k$(plaintext, associatedData);
}
function *encrypt_4(plaintext, associatedData, $completion) {
  var tmp$ret$0;
  $l$block: {
    // Inline function 'dev.whyoleg.cryptography.asByteArray' call
    // Inline function 'kotlinx.io.bytestring.unsafe.UnsafeByteStringOperations.withByteArrayUnsafe' call
    UnsafeByteStringOperations_getInstance();
    tmp$ret$0 = plaintext.getBackingArrayReference_x19ruh_k$();
    break $l$block;
  }
  var tmp = tmp$ret$0;
  var tmp_0;
  if (associatedData == null) {
    tmp_0 = null;
  } else {
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'dev.whyoleg.cryptography.asByteArray' call
      // Inline function 'kotlinx.io.bytestring.unsafe.UnsafeByteStringOperations.withByteArrayUnsafe' call
      UnsafeByteStringOperations_getInstance();
      tmp$ret$3 = associatedData.getBackingArrayReference_x19ruh_k$();
      break $l$block_0;
    }
    tmp_0 = tmp$ret$3;
  }
  // Inline function 'dev.whyoleg.cryptography.asByteString' call
  var this_0 = yield* this.encrypt_3cx9e3_k$(tmp, tmp_0, $completion);
  return UnsafeByteStringOperations_getInstance().wrapUnsafe_3fobxs_k$(this_0);
}
function encryptBlocking_0(plaintext) {
  return this.encryptBlocking_tjn9kj_k$(plaintext, null);
}
function encryptBlocking_1(plaintext) {
  return this.encryptBlocking_4ec8qz_k$(plaintext, null);
}
function encryptBlocking_2(plaintext, associatedData) {
  var tmp$ret$0;
  $l$block: {
    // Inline function 'dev.whyoleg.cryptography.asByteArray' call
    // Inline function 'kotlinx.io.bytestring.unsafe.UnsafeByteStringOperations.withByteArrayUnsafe' call
    UnsafeByteStringOperations_getInstance();
    tmp$ret$0 = plaintext.getBackingArrayReference_x19ruh_k$();
    break $l$block;
  }
  var tmp = tmp$ret$0;
  var tmp_0;
  if (associatedData == null) {
    tmp_0 = null;
  } else {
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'dev.whyoleg.cryptography.asByteArray' call
      // Inline function 'kotlinx.io.bytestring.unsafe.UnsafeByteStringOperations.withByteArrayUnsafe' call
      UnsafeByteStringOperations_getInstance();
      tmp$ret$3 = associatedData.getBackingArrayReference_x19ruh_k$();
      break $l$block_0;
    }
    tmp_0 = tmp$ret$3;
  }
  // Inline function 'dev.whyoleg.cryptography.asByteString' call
  var this_0 = this.encryptBlocking_tjn9kj_k$(tmp, tmp_0);
  return UnsafeByteStringOperations_getInstance().wrapUnsafe_3fobxs_k$(this_0);
}
function encryptingSource(plaintext) {
  return this.encryptingSource_j38kw7_k$(plaintext, (null == null ? true : isByteArray(null)) ? null : THROW_CCE());
}
function encryptingSource_0(plaintext, associatedData) {
  var tmp;
  if (associatedData == null) {
    tmp = null;
  } else {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'dev.whyoleg.cryptography.asByteArray' call
      // Inline function 'kotlinx.io.bytestring.unsafe.UnsafeByteStringOperations.withByteArrayUnsafe' call
      UnsafeByteStringOperations_getInstance();
      tmp$ret$0 = associatedData.getBackingArrayReference_x19ruh_k$();
      break $l$block;
    }
    tmp = tmp$ret$0;
  }
  return this.encryptingSource_j38kw7_k$(plaintext, tmp);
}
function encryptingSink(ciphertext) {
  return this.encryptingSink_uprd3b_k$(ciphertext, (null == null ? true : isByteArray(null)) ? null : THROW_CCE());
}
function encryptingSink_0(ciphertext, associatedData) {
  var tmp;
  if (associatedData == null) {
    tmp = null;
  } else {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'dev.whyoleg.cryptography.asByteArray' call
      // Inline function 'kotlinx.io.bytestring.unsafe.UnsafeByteStringOperations.withByteArrayUnsafe' call
      UnsafeByteStringOperations_getInstance();
      tmp$ret$0 = associatedData.getBackingArrayReference_x19ruh_k$();
      break $l$block;
    }
    tmp = tmp$ret$0;
  }
  return this.encryptingSink_uprd3b_k$(ciphertext, tmp);
}
class Decryptor {}
function *decrypt(ciphertext, $completion) {
  return this.decryptBlocking_3pds5e_k$(ciphertext);
}
function *decrypt_0(ciphertext, $completion) {
  var tmp$ret$0;
  $l$block: {
    // Inline function 'dev.whyoleg.cryptography.asByteArray' call
    // Inline function 'kotlinx.io.bytestring.unsafe.UnsafeByteStringOperations.withByteArrayUnsafe' call
    UnsafeByteStringOperations_getInstance();
    tmp$ret$0 = ciphertext.getBackingArrayReference_x19ruh_k$();
    break $l$block;
  }
  // Inline function 'dev.whyoleg.cryptography.asByteString' call
  var this_0 = yield* this.decrypt_c997li_k$(tmp$ret$0, $completion);
  return UnsafeByteStringOperations_getInstance().wrapUnsafe_3fobxs_k$(this_0);
}
function decryptBlocking(ciphertext) {
  var tmp$ret$0;
  $l$block: {
    // Inline function 'dev.whyoleg.cryptography.asByteArray' call
    // Inline function 'kotlinx.io.bytestring.unsafe.UnsafeByteStringOperations.withByteArrayUnsafe' call
    UnsafeByteStringOperations_getInstance();
    tmp$ret$0 = ciphertext.getBackingArrayReference_x19ruh_k$();
    break $l$block;
  }
  // Inline function 'dev.whyoleg.cryptography.asByteString' call
  var this_0 = this.decryptBlocking_3pds5e_k$(tmp$ret$0);
  return UnsafeByteStringOperations_getInstance().wrapUnsafe_3fobxs_k$(this_0);
}
class AuthenticatedDecryptor {}
function *decrypt_1(ciphertext, $completion) {
  return yield* this.decrypt_2f3s0z_k$(ciphertext, null, $completion);
}
function *decrypt_2(ciphertext, $completion) {
  return yield* this.decrypt_oprzcr_k$(ciphertext, null, $completion);
}
function *decrypt_3(ciphertext, associatedData, $completion) {
  return this.decryptBlocking_6am5d1_k$(ciphertext, associatedData);
}
function *decrypt_4(ciphertext, associatedData, $completion) {
  var tmp$ret$0;
  $l$block: {
    // Inline function 'dev.whyoleg.cryptography.asByteArray' call
    // Inline function 'kotlinx.io.bytestring.unsafe.UnsafeByteStringOperations.withByteArrayUnsafe' call
    UnsafeByteStringOperations_getInstance();
    tmp$ret$0 = ciphertext.getBackingArrayReference_x19ruh_k$();
    break $l$block;
  }
  var tmp = tmp$ret$0;
  var tmp_0;
  if (associatedData == null) {
    tmp_0 = null;
  } else {
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'dev.whyoleg.cryptography.asByteArray' call
      // Inline function 'kotlinx.io.bytestring.unsafe.UnsafeByteStringOperations.withByteArrayUnsafe' call
      UnsafeByteStringOperations_getInstance();
      tmp$ret$3 = associatedData.getBackingArrayReference_x19ruh_k$();
      break $l$block_0;
    }
    tmp_0 = tmp$ret$3;
  }
  // Inline function 'dev.whyoleg.cryptography.asByteString' call
  var this_0 = yield* this.decrypt_2f3s0z_k$(tmp, tmp_0, $completion);
  return UnsafeByteStringOperations_getInstance().wrapUnsafe_3fobxs_k$(this_0);
}
function decryptBlocking_0(ciphertext) {
  return this.decryptBlocking_6am5d1_k$(ciphertext, null);
}
function decryptBlocking_1(ciphertext) {
  return this.decryptBlocking_1r3bsj_k$(ciphertext, null);
}
function decryptBlocking_2(ciphertext, associatedData) {
  var tmp$ret$0;
  $l$block: {
    // Inline function 'dev.whyoleg.cryptography.asByteArray' call
    // Inline function 'kotlinx.io.bytestring.unsafe.UnsafeByteStringOperations.withByteArrayUnsafe' call
    UnsafeByteStringOperations_getInstance();
    tmp$ret$0 = ciphertext.getBackingArrayReference_x19ruh_k$();
    break $l$block;
  }
  var tmp = tmp$ret$0;
  var tmp_0;
  if (associatedData == null) {
    tmp_0 = null;
  } else {
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'dev.whyoleg.cryptography.asByteArray' call
      // Inline function 'kotlinx.io.bytestring.unsafe.UnsafeByteStringOperations.withByteArrayUnsafe' call
      UnsafeByteStringOperations_getInstance();
      tmp$ret$3 = associatedData.getBackingArrayReference_x19ruh_k$();
      break $l$block_0;
    }
    tmp_0 = tmp$ret$3;
  }
  // Inline function 'dev.whyoleg.cryptography.asByteString' call
  var this_0 = this.decryptBlocking_6am5d1_k$(tmp, tmp_0);
  return UnsafeByteStringOperations_getInstance().wrapUnsafe_3fobxs_k$(this_0);
}
function decryptingSource(ciphertext) {
  return this.decryptingSource_rmx6nj_k$(ciphertext, (null == null ? true : isByteArray(null)) ? null : THROW_CCE());
}
function decryptingSource_0(ciphertext, associatedData) {
  var tmp;
  if (associatedData == null) {
    tmp = null;
  } else {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'dev.whyoleg.cryptography.asByteArray' call
      // Inline function 'kotlinx.io.bytestring.unsafe.UnsafeByteStringOperations.withByteArrayUnsafe' call
      UnsafeByteStringOperations_getInstance();
      tmp$ret$0 = associatedData.getBackingArrayReference_x19ruh_k$();
      break $l$block;
    }
    tmp = tmp$ret$0;
  }
  return this.decryptingSource_rmx6nj_k$(ciphertext, tmp);
}
function decryptingSink(plaintext) {
  return this.decryptingSink_9pejhr_k$(plaintext, (null == null ? true : isByteArray(null)) ? null : THROW_CCE());
}
function decryptingSink_0(plaintext, associatedData) {
  var tmp;
  if (associatedData == null) {
    tmp = null;
  } else {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'dev.whyoleg.cryptography.asByteArray' call
      // Inline function 'kotlinx.io.bytestring.unsafe.UnsafeByteStringOperations.withByteArrayUnsafe' call
      UnsafeByteStringOperations_getInstance();
      tmp$ret$0 = associatedData.getBackingArrayReference_x19ruh_k$();
      break $l$block;
    }
    tmp = tmp$ret$0;
  }
  return this.decryptingSink_9pejhr_k$(plaintext, tmp);
}
class Cipher {}
class AuthenticatedCipher {}
class Hasher {}
function *hash(data, $completion) {
  return this.hashBlocking_c55rk3_k$(data);
}
function *hash_0(data, $completion) {
  var tmp$ret$0;
  $l$block: {
    // Inline function 'dev.whyoleg.cryptography.asByteArray' call
    // Inline function 'kotlinx.io.bytestring.unsafe.UnsafeByteStringOperations.withByteArrayUnsafe' call
    UnsafeByteStringOperations_getInstance();
    tmp$ret$0 = data.getBackingArrayReference_x19ruh_k$();
    break $l$block;
  }
  // Inline function 'dev.whyoleg.cryptography.asByteString' call
  var this_0 = yield* this.hash_axk155_k$(tmp$ret$0, $completion);
  return UnsafeByteStringOperations_getInstance().wrapUnsafe_3fobxs_k$(this_0);
}
function *hash_1(data, $completion) {
  return this.hashBlocking_40pxp1_k$(data);
}
function hashBlocking(data) {
  var tmp0 = this.createHashFunction_mc7k82_k$();
  var tmp$ret$0;
  $l$block: {
    // Inline function 'kotlin.use' call
    var exception = null;
    try {
      tmp0.update$default_2vzpx4_k$(data);
      tmp$ret$0 = tmp0.hashToByteArray_87vl6w_k$();
      break $l$block;
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        exception = e;
        throw e;
      } else {
        throw $p;
      }
    }
    finally {
      closeFinally(tmp0, exception);
    }
  }
  return tmp$ret$0;
}
function hashBlocking_0(data) {
  var tmp$ret$0;
  $l$block: {
    // Inline function 'dev.whyoleg.cryptography.asByteArray' call
    // Inline function 'kotlinx.io.bytestring.unsafe.UnsafeByteStringOperations.withByteArrayUnsafe' call
    UnsafeByteStringOperations_getInstance();
    tmp$ret$0 = data.getBackingArrayReference_x19ruh_k$();
    break $l$block;
  }
  // Inline function 'dev.whyoleg.cryptography.asByteString' call
  var this_0 = this.hashBlocking_c55rk3_k$(tmp$ret$0);
  return UnsafeByteStringOperations_getInstance().wrapUnsafe_3fobxs_k$(this_0);
}
function hashBlocking_1(data) {
  var tmp0 = this.createHashFunction_mc7k82_k$();
  var tmp$ret$0;
  $l$block: {
    // Inline function 'kotlin.use' call
    var exception = null;
    try {
      tmp0.update_guoif5_k$(data);
      tmp$ret$0 = tmp0.hash_1whe6_k$();
      break $l$block;
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        exception = e;
        throw e;
      } else {
        throw $p;
      }
    }
    finally {
      closeFinally(tmp0, exception);
    }
  }
  return tmp$ret$0;
}
class UpdateFunction {}
function update$default(source, startIndex, endIndex, $super) {
  startIndex = startIndex === VOID ? 0 : startIndex;
  endIndex = endIndex === VOID ? source.length : endIndex;
  var tmp;
  if ($super === VOID) {
    this.update_6igkux_k$(source, startIndex, endIndex);
    tmp = Unit_getInstance();
  } else {
    tmp = $super.update_6igkux_k$.call(this, source, startIndex, endIndex);
  }
  return tmp;
}
function update(source, startIndex, endIndex) {
  var tmp$ret$0;
  $l$block: {
    // Inline function 'dev.whyoleg.cryptography.asByteArray' call
    // Inline function 'kotlinx.io.bytestring.unsafe.UnsafeByteStringOperations.withByteArrayUnsafe' call
    UnsafeByteStringOperations_getInstance();
    tmp$ret$0 = source.getBackingArrayReference_x19ruh_k$();
    break $l$block;
  }
  this.update_6igkux_k$(tmp$ret$0, startIndex, endIndex);
}
function update$default_0(source, startIndex, endIndex, $super) {
  startIndex = startIndex === VOID ? 0 : startIndex;
  endIndex = endIndex === VOID ? source.get_size_woubt6_k$() : endIndex;
  var tmp;
  if ($super === VOID) {
    this.update_ppay4s_k$(source, startIndex, endIndex);
    tmp = Unit_getInstance();
  } else {
    update(source, startIndex, endIndex);
    tmp = Unit_getInstance();
  }
  return tmp;
}
function update_0(source) {
  buffered(this.updatingSource_a0s88n_k$(source)).transferTo_lu4ka2_k$(discardingSink());
}
function updatingSource(source) {
  return UpdatingSource.new_dev_whyoleg_cryptography_operations_UpdatingSource_kczy0_k$(source, this);
}
function updatingSink(sink) {
  return UpdatingSink.new_dev_whyoleg_cryptography_operations_UpdatingSink_fottzs_k$(sink, this);
}
class HashFunction {}
function hashIntoByteArray$default(destination, destinationOffset, $super) {
  destinationOffset = destinationOffset === VOID ? 0 : destinationOffset;
  return $super === VOID ? this.hashIntoByteArray_jmd0h7_k$(destination, destinationOffset) : $super.hashIntoByteArray_jmd0h7_k$.call(this, destination, destinationOffset);
}
function hash_2() {
  // Inline function 'dev.whyoleg.cryptography.asByteString' call
  var this_0 = this.hashToByteArray_87vl6w_k$();
  return UnsafeByteStringOperations_getInstance().wrapUnsafe_3fobxs_k$(this_0);
}
class IvEncryptor {}
function *encryptWithIv(iv, plaintext, $completion) {
  return this.encryptWithIvBlocking_j0abo3_k$(iv, plaintext);
}
function *encryptWithIv_0(iv, plaintext, $completion) {
  var tmp$ret$0;
  $l$block: {
    // Inline function 'dev.whyoleg.cryptography.asByteArray' call
    // Inline function 'kotlinx.io.bytestring.unsafe.UnsafeByteStringOperations.withByteArrayUnsafe' call
    UnsafeByteStringOperations_getInstance();
    tmp$ret$0 = iv.getBackingArrayReference_x19ruh_k$();
    break $l$block;
  }
  var tmp = tmp$ret$0;
  var tmp$ret$3;
  $l$block_0: {
    // Inline function 'dev.whyoleg.cryptography.asByteArray' call
    // Inline function 'kotlinx.io.bytestring.unsafe.UnsafeByteStringOperations.withByteArrayUnsafe' call
    UnsafeByteStringOperations_getInstance();
    tmp$ret$3 = plaintext.getBackingArrayReference_x19ruh_k$();
    break $l$block_0;
  }
  // Inline function 'dev.whyoleg.cryptography.asByteString' call
  var this_0 = yield* this.encryptWithIv_brcy8x_k$(tmp, tmp$ret$3, $completion);
  return UnsafeByteStringOperations_getInstance().wrapUnsafe_3fobxs_k$(this_0);
}
function encryptWithIvBlocking(iv, plaintext) {
  var tmp$ret$0;
  $l$block: {
    // Inline function 'dev.whyoleg.cryptography.asByteArray' call
    // Inline function 'kotlinx.io.bytestring.unsafe.UnsafeByteStringOperations.withByteArrayUnsafe' call
    UnsafeByteStringOperations_getInstance();
    tmp$ret$0 = iv.getBackingArrayReference_x19ruh_k$();
    break $l$block;
  }
  var tmp = tmp$ret$0;
  var tmp$ret$3;
  $l$block_0: {
    // Inline function 'dev.whyoleg.cryptography.asByteArray' call
    // Inline function 'kotlinx.io.bytestring.unsafe.UnsafeByteStringOperations.withByteArrayUnsafe' call
    UnsafeByteStringOperations_getInstance();
    tmp$ret$3 = plaintext.getBackingArrayReference_x19ruh_k$();
    break $l$block_0;
  }
  // Inline function 'dev.whyoleg.cryptography.asByteString' call
  var this_0 = this.encryptWithIvBlocking_j0abo3_k$(tmp, tmp$ret$3);
  return UnsafeByteStringOperations_getInstance().wrapUnsafe_3fobxs_k$(this_0);
}
function encryptingSourceWithIv(iv, plaintext) {
  var tmp$ret$0;
  $l$block: {
    // Inline function 'dev.whyoleg.cryptography.asByteArray' call
    // Inline function 'kotlinx.io.bytestring.unsafe.UnsafeByteStringOperations.withByteArrayUnsafe' call
    UnsafeByteStringOperations_getInstance();
    tmp$ret$0 = iv.getBackingArrayReference_x19ruh_k$();
    break $l$block;
  }
  return this.encryptingSourceWithIv_uwj0dv_k$(tmp$ret$0, plaintext);
}
function encryptingSinkWithIv(iv, ciphertext) {
  var tmp$ret$0;
  $l$block: {
    // Inline function 'dev.whyoleg.cryptography.asByteArray' call
    // Inline function 'kotlinx.io.bytestring.unsafe.UnsafeByteStringOperations.withByteArrayUnsafe' call
    UnsafeByteStringOperations_getInstance();
    tmp$ret$0 = iv.getBackingArrayReference_x19ruh_k$();
    break $l$block;
  }
  return this.encryptingSinkWithIv_9n07qr_k$(tmp$ret$0, ciphertext);
}
class IvDecryptor {}
function *decryptWithIv(iv, ciphertext, $completion) {
  return this.decryptWithIvBlocking_stjyqd_k$(iv, ciphertext);
}
function *decryptWithIv_0(iv, ciphertext, $completion) {
  var tmp$ret$0;
  $l$block: {
    // Inline function 'dev.whyoleg.cryptography.asByteArray' call
    // Inline function 'kotlinx.io.bytestring.unsafe.UnsafeByteStringOperations.withByteArrayUnsafe' call
    UnsafeByteStringOperations_getInstance();
    tmp$ret$0 = iv.getBackingArrayReference_x19ruh_k$();
    break $l$block;
  }
  var tmp = tmp$ret$0;
  var tmp$ret$3;
  $l$block_0: {
    // Inline function 'dev.whyoleg.cryptography.asByteArray' call
    // Inline function 'kotlinx.io.bytestring.unsafe.UnsafeByteStringOperations.withByteArrayUnsafe' call
    UnsafeByteStringOperations_getInstance();
    tmp$ret$3 = ciphertext.getBackingArrayReference_x19ruh_k$();
    break $l$block_0;
  }
  // Inline function 'dev.whyoleg.cryptography.asByteString' call
  var this_0 = yield* this.decryptWithIv_7wthtj_k$(tmp, tmp$ret$3, $completion);
  return UnsafeByteStringOperations_getInstance().wrapUnsafe_3fobxs_k$(this_0);
}
function decryptWithIvBlocking(iv, ciphertext) {
  var tmp$ret$0;
  $l$block: {
    // Inline function 'dev.whyoleg.cryptography.asByteArray' call
    // Inline function 'kotlinx.io.bytestring.unsafe.UnsafeByteStringOperations.withByteArrayUnsafe' call
    UnsafeByteStringOperations_getInstance();
    tmp$ret$0 = iv.getBackingArrayReference_x19ruh_k$();
    break $l$block;
  }
  var tmp = tmp$ret$0;
  var tmp$ret$3;
  $l$block_0: {
    // Inline function 'dev.whyoleg.cryptography.asByteArray' call
    // Inline function 'kotlinx.io.bytestring.unsafe.UnsafeByteStringOperations.withByteArrayUnsafe' call
    UnsafeByteStringOperations_getInstance();
    tmp$ret$3 = ciphertext.getBackingArrayReference_x19ruh_k$();
    break $l$block_0;
  }
  // Inline function 'dev.whyoleg.cryptography.asByteString' call
  var this_0 = this.decryptWithIvBlocking_stjyqd_k$(tmp, tmp$ret$3);
  return UnsafeByteStringOperations_getInstance().wrapUnsafe_3fobxs_k$(this_0);
}
function decryptingSourceWithIv(iv, ciphertext) {
  var tmp$ret$0;
  $l$block: {
    // Inline function 'dev.whyoleg.cryptography.asByteArray' call
    // Inline function 'kotlinx.io.bytestring.unsafe.UnsafeByteStringOperations.withByteArrayUnsafe' call
    UnsafeByteStringOperations_getInstance();
    tmp$ret$0 = iv.getBackingArrayReference_x19ruh_k$();
    break $l$block;
  }
  return this.decryptingSourceWithIv_xhynwr_k$(tmp$ret$0, ciphertext);
}
function decryptingSinkWithIv(iv, plaintext) {
  var tmp$ret$0;
  $l$block: {
    // Inline function 'dev.whyoleg.cryptography.asByteArray' call
    // Inline function 'kotlinx.io.bytestring.unsafe.UnsafeByteStringOperations.withByteArrayUnsafe' call
    UnsafeByteStringOperations_getInstance();
    tmp$ret$0 = iv.getBackingArrayReference_x19ruh_k$();
    break $l$block;
  }
  return this.decryptingSinkWithIv_9j99md_k$(tmp$ret$0, plaintext);
}
class IvCipher {}
class IvAuthenticatedEncryptor {}
function *encryptWithIv_1(iv, plaintext, $completion) {
  return yield* this.encryptWithIv_w9p61k_k$(iv, plaintext, null, $completion);
}
function *encryptWithIv_2(iv, plaintext, $completion) {
  return yield* this.encryptWithIv_nh2vbv_k$(iv, plaintext, null, $completion);
}
function *encryptWithIv_3(iv, plaintext, associatedData, $completion) {
  return this.encryptWithIvBlocking_8917fe_k$(iv, plaintext, associatedData);
}
function *encryptWithIv_4(iv, plaintext, associatedData, $completion) {
  var tmp$ret$0;
  $l$block: {
    // Inline function 'dev.whyoleg.cryptography.asByteArray' call
    // Inline function 'kotlinx.io.bytestring.unsafe.UnsafeByteStringOperations.withByteArrayUnsafe' call
    UnsafeByteStringOperations_getInstance();
    tmp$ret$0 = iv.getBackingArrayReference_x19ruh_k$();
    break $l$block;
  }
  var tmp = tmp$ret$0;
  var tmp$ret$3;
  $l$block_0: {
    // Inline function 'dev.whyoleg.cryptography.asByteArray' call
    // Inline function 'kotlinx.io.bytestring.unsafe.UnsafeByteStringOperations.withByteArrayUnsafe' call
    UnsafeByteStringOperations_getInstance();
    tmp$ret$3 = plaintext.getBackingArrayReference_x19ruh_k$();
    break $l$block_0;
  }
  var tmp_0 = tmp$ret$3;
  // Inline function 'dev.whyoleg.cryptography.asByteString' call
  var this_0 = yield* this.encryptWithIv_w9p61k_k$(tmp, tmp_0, associatedData == null ? null : associatedData.toByteArray$default_jc5aj_k$(), $completion);
  return UnsafeByteStringOperations_getInstance().wrapUnsafe_3fobxs_k$(this_0);
}
function encryptWithIvBlocking_0(iv, plaintext) {
  return this.encryptWithIvBlocking_8917fe_k$(iv, plaintext, null);
}
function encryptWithIvBlocking_1(iv, plaintext) {
  return this.encryptWithIvBlocking_1khfrd_k$(iv, plaintext, null);
}
function encryptWithIvBlocking_2(iv, plaintext, associatedData) {
  var tmp$ret$0;
  $l$block: {
    // Inline function 'dev.whyoleg.cryptography.asByteArray' call
    // Inline function 'kotlinx.io.bytestring.unsafe.UnsafeByteStringOperations.withByteArrayUnsafe' call
    UnsafeByteStringOperations_getInstance();
    tmp$ret$0 = iv.getBackingArrayReference_x19ruh_k$();
    break $l$block;
  }
  var tmp = tmp$ret$0;
  var tmp$ret$3;
  $l$block_0: {
    // Inline function 'dev.whyoleg.cryptography.asByteArray' call
    // Inline function 'kotlinx.io.bytestring.unsafe.UnsafeByteStringOperations.withByteArrayUnsafe' call
    UnsafeByteStringOperations_getInstance();
    tmp$ret$3 = plaintext.getBackingArrayReference_x19ruh_k$();
    break $l$block_0;
  }
  var tmp_0 = tmp$ret$3;
  // Inline function 'dev.whyoleg.cryptography.asByteString' call
  var this_0 = this.encryptWithIvBlocking_8917fe_k$(tmp, tmp_0, associatedData == null ? null : associatedData.toByteArray$default_jc5aj_k$());
  return UnsafeByteStringOperations_getInstance().wrapUnsafe_3fobxs_k$(this_0);
}
function encryptingSourceWithIv_0(iv, plaintext) {
  return this.encryptingSourceWithIv_fcdxnw_k$(iv, plaintext, null);
}
function encryptingSourceWithIv_1(iv, plaintext, associatedData) {
  var tmp$ret$0;
  $l$block: {
    // Inline function 'dev.whyoleg.cryptography.asByteArray' call
    // Inline function 'kotlinx.io.bytestring.unsafe.UnsafeByteStringOperations.withByteArrayUnsafe' call
    UnsafeByteStringOperations_getInstance();
    tmp$ret$0 = iv.getBackingArrayReference_x19ruh_k$();
    break $l$block;
  }
  var tmp = tmp$ret$0;
  var tmp_0;
  if (associatedData == null) {
    tmp_0 = null;
  } else {
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'dev.whyoleg.cryptography.asByteArray' call
      // Inline function 'kotlinx.io.bytestring.unsafe.UnsafeByteStringOperations.withByteArrayUnsafe' call
      UnsafeByteStringOperations_getInstance();
      tmp$ret$3 = associatedData.getBackingArrayReference_x19ruh_k$();
      break $l$block_0;
    }
    tmp_0 = tmp$ret$3;
  }
  return this.encryptingSourceWithIv_fcdxnw_k$(tmp, plaintext, tmp_0);
}
function encryptingSinkWithIv_0(iv, ciphertext) {
  return this.encryptingSinkWithIv_17e6uk_k$(iv, ciphertext, null);
}
function encryptingSinkWithIv_1(iv, ciphertext, associatedData) {
  var tmp$ret$0;
  $l$block: {
    // Inline function 'dev.whyoleg.cryptography.asByteArray' call
    // Inline function 'kotlinx.io.bytestring.unsafe.UnsafeByteStringOperations.withByteArrayUnsafe' call
    UnsafeByteStringOperations_getInstance();
    tmp$ret$0 = iv.getBackingArrayReference_x19ruh_k$();
    break $l$block;
  }
  var tmp = tmp$ret$0;
  return this.encryptingSinkWithIv_17e6uk_k$(tmp, ciphertext, associatedData == null ? null : associatedData.toByteArray$default_jc5aj_k$());
}
class IvAuthenticatedDecryptor {}
function *decryptWithIv_1(iv, ciphertext, $completion) {
  return yield* this.decryptWithIv_ar828g_k$(iv, ciphertext, null, $completion);
}
function *decryptWithIv_2(iv, ciphertext, $completion) {
  return yield* this.decryptWithIv_jn4s8j_k$(iv, ciphertext, null, $completion);
}
function *decryptWithIv_3(iv, ciphertext, associatedData, $completion) {
  return this.decryptWithIvBlocking_uxb13i_k$(iv, ciphertext, associatedData);
}
function *decryptWithIv_4(iv, ciphertext, associatedData, $completion) {
  var tmp$ret$0;
  $l$block: {
    // Inline function 'dev.whyoleg.cryptography.asByteArray' call
    // Inline function 'kotlinx.io.bytestring.unsafe.UnsafeByteStringOperations.withByteArrayUnsafe' call
    UnsafeByteStringOperations_getInstance();
    tmp$ret$0 = iv.getBackingArrayReference_x19ruh_k$();
    break $l$block;
  }
  var tmp = tmp$ret$0;
  var tmp$ret$3;
  $l$block_0: {
    // Inline function 'dev.whyoleg.cryptography.asByteArray' call
    // Inline function 'kotlinx.io.bytestring.unsafe.UnsafeByteStringOperations.withByteArrayUnsafe' call
    UnsafeByteStringOperations_getInstance();
    tmp$ret$3 = ciphertext.getBackingArrayReference_x19ruh_k$();
    break $l$block_0;
  }
  var tmp_0 = tmp$ret$3;
  // Inline function 'dev.whyoleg.cryptography.asByteString' call
  var this_0 = yield* this.decryptWithIv_ar828g_k$(tmp, tmp_0, associatedData == null ? null : associatedData.toByteArray$default_jc5aj_k$(), $completion);
  return UnsafeByteStringOperations_getInstance().wrapUnsafe_3fobxs_k$(this_0);
}
function decryptWithIvBlocking_0(iv, ciphertext) {
  return this.decryptWithIvBlocking_uxb13i_k$(iv, ciphertext, null);
}
function decryptWithIvBlocking_1(iv, ciphertext) {
  return this.decryptWithIvBlocking_etdxpd_k$(iv, ciphertext, null);
}
function decryptWithIvBlocking_2(iv, ciphertext, associatedData) {
  var tmp$ret$0;
  $l$block: {
    // Inline function 'dev.whyoleg.cryptography.asByteArray' call
    // Inline function 'kotlinx.io.bytestring.unsafe.UnsafeByteStringOperations.withByteArrayUnsafe' call
    UnsafeByteStringOperations_getInstance();
    tmp$ret$0 = iv.getBackingArrayReference_x19ruh_k$();
    break $l$block;
  }
  var tmp = tmp$ret$0;
  var tmp$ret$3;
  $l$block_0: {
    // Inline function 'dev.whyoleg.cryptography.asByteArray' call
    // Inline function 'kotlinx.io.bytestring.unsafe.UnsafeByteStringOperations.withByteArrayUnsafe' call
    UnsafeByteStringOperations_getInstance();
    tmp$ret$3 = ciphertext.getBackingArrayReference_x19ruh_k$();
    break $l$block_0;
  }
  var tmp_0 = tmp$ret$3;
  // Inline function 'dev.whyoleg.cryptography.asByteString' call
  var this_0 = this.decryptWithIvBlocking_uxb13i_k$(tmp, tmp_0, associatedData == null ? null : associatedData.toByteArray$default_jc5aj_k$());
  return UnsafeByteStringOperations_getInstance().wrapUnsafe_3fobxs_k$(this_0);
}
function decryptingSourceWithIv_0(iv, ciphertext) {
  return this.decryptingSourceWithIv_93ex6s_k$(iv, ciphertext, null);
}
function decryptingSourceWithIv_1(iv, ciphertext, associatedData) {
  var tmp$ret$0;
  $l$block: {
    // Inline function 'dev.whyoleg.cryptography.asByteArray' call
    // Inline function 'kotlinx.io.bytestring.unsafe.UnsafeByteStringOperations.withByteArrayUnsafe' call
    UnsafeByteStringOperations_getInstance();
    tmp$ret$0 = iv.getBackingArrayReference_x19ruh_k$();
    break $l$block;
  }
  var tmp = tmp$ret$0;
  var tmp_0;
  if (associatedData == null) {
    tmp_0 = null;
  } else {
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'dev.whyoleg.cryptography.asByteArray' call
      // Inline function 'kotlinx.io.bytestring.unsafe.UnsafeByteStringOperations.withByteArrayUnsafe' call
      UnsafeByteStringOperations_getInstance();
      tmp$ret$3 = associatedData.getBackingArrayReference_x19ruh_k$();
      break $l$block_0;
    }
    tmp_0 = tmp$ret$3;
  }
  return this.decryptingSourceWithIv_93ex6s_k$(tmp, ciphertext, tmp_0);
}
function decryptingSinkWithIv_0(iv, plaintext) {
  return this.decryptingSinkWithIv_x8od1g_k$(iv, plaintext, null);
}
function decryptingSinkWithIv_1(iv, plaintext, associatedData) {
  var tmp$ret$0;
  $l$block: {
    // Inline function 'dev.whyoleg.cryptography.asByteArray' call
    // Inline function 'kotlinx.io.bytestring.unsafe.UnsafeByteStringOperations.withByteArrayUnsafe' call
    UnsafeByteStringOperations_getInstance();
    tmp$ret$0 = iv.getBackingArrayReference_x19ruh_k$();
    break $l$block;
  }
  var tmp = tmp$ret$0;
  return this.decryptingSinkWithIv_x8od1g_k$(tmp, plaintext, associatedData == null ? null : associatedData.toByteArray$default_jc5aj_k$());
}
class IvAuthenticatedCipher {}
class KeyGenerator {}
function *generateKey($completion) {
  return this.generateKeyBlocking_s6q6f5_k$();
}
class SecretDerivation {}
function *deriveSecretToByteArray(input, $completion) {
  return this.deriveSecretToByteArrayBlocking_ciihh0_k$(input);
}
function *deriveSecretToByteArray_0(input, $completion) {
  var tmp$ret$0;
  $l$block: {
    // Inline function 'dev.whyoleg.cryptography.asByteArray' call
    // Inline function 'kotlinx.io.bytestring.unsafe.UnsafeByteStringOperations.withByteArrayUnsafe' call
    UnsafeByteStringOperations_getInstance();
    tmp$ret$0 = input.getBackingArrayReference_x19ruh_k$();
    break $l$block;
  }
  return yield* this.deriveSecretToByteArray_wpvleg_k$(tmp$ret$0, $completion);
}
function *deriveSecret(input, $completion) {
  // Inline function 'dev.whyoleg.cryptography.asByteString' call
  var this_0 = yield* this.deriveSecretToByteArray_wpvleg_k$(input, $completion);
  return UnsafeByteStringOperations_getInstance().wrapUnsafe_3fobxs_k$(this_0);
}
function *deriveSecret_0(input, $completion) {
  var tmp$ret$0;
  $l$block: {
    // Inline function 'dev.whyoleg.cryptography.asByteArray' call
    // Inline function 'kotlinx.io.bytestring.unsafe.UnsafeByteStringOperations.withByteArrayUnsafe' call
    UnsafeByteStringOperations_getInstance();
    tmp$ret$0 = input.getBackingArrayReference_x19ruh_k$();
    break $l$block;
  }
  // Inline function 'dev.whyoleg.cryptography.asByteString' call
  var this_0 = yield* this.deriveSecretToByteArray_wpvleg_k$(tmp$ret$0, $completion);
  return UnsafeByteStringOperations_getInstance().wrapUnsafe_3fobxs_k$(this_0);
}
function deriveSecretToByteArrayBlocking(input) {
  var tmp$ret$0;
  $l$block: {
    // Inline function 'dev.whyoleg.cryptography.asByteArray' call
    // Inline function 'kotlinx.io.bytestring.unsafe.UnsafeByteStringOperations.withByteArrayUnsafe' call
    UnsafeByteStringOperations_getInstance();
    tmp$ret$0 = input.getBackingArrayReference_x19ruh_k$();
    break $l$block;
  }
  return this.deriveSecretToByteArrayBlocking_ciihh0_k$(tmp$ret$0);
}
function deriveSecretBlocking(input) {
  // Inline function 'dev.whyoleg.cryptography.asByteString' call
  var this_0 = this.deriveSecretToByteArrayBlocking_ciihh0_k$(input);
  return UnsafeByteStringOperations_getInstance().wrapUnsafe_3fobxs_k$(this_0);
}
function deriveSecretBlocking_0(input) {
  var tmp$ret$0;
  $l$block: {
    // Inline function 'dev.whyoleg.cryptography.asByteArray' call
    // Inline function 'kotlinx.io.bytestring.unsafe.UnsafeByteStringOperations.withByteArrayUnsafe' call
    UnsafeByteStringOperations_getInstance();
    tmp$ret$0 = input.getBackingArrayReference_x19ruh_k$();
    break $l$block;
  }
  // Inline function 'dev.whyoleg.cryptography.asByteString' call
  var this_0 = this.deriveSecretToByteArrayBlocking_ciihh0_k$(tmp$ret$0);
  return UnsafeByteStringOperations_getInstance().wrapUnsafe_3fobxs_k$(this_0);
}
class SharedSecretGenerator {}
function *generateSharedSecretToByteArray(other, $completion) {
  return this.generateSharedSecretToByteArrayBlocking_d5bkvr_k$(other);
}
function *generateSharedSecret(other, $completion) {
  // Inline function 'dev.whyoleg.cryptography.asByteString' call
  var this_0 = yield* this.generateSharedSecretToByteArray_dhxvzx_k$(other, $completion);
  return UnsafeByteStringOperations_getInstance().wrapUnsafe_3fobxs_k$(this_0);
}
function generateSharedSecretBlocking(other) {
  // Inline function 'dev.whyoleg.cryptography.asByteString' call
  var this_0 = this.generateSharedSecretToByteArrayBlocking_d5bkvr_k$(other);
  return UnsafeByteStringOperations_getInstance().wrapUnsafe_3fobxs_k$(this_0);
}
class SignatureVerifier {}
function *tryVerifySignature(data, signature, $completion) {
  return this.tryVerifySignatureBlocking_2eqmu1_k$(data, signature);
}
function *tryVerifySignature_0(data, signature, $completion) {
  var tmp$ret$0;
  $l$block: {
    // Inline function 'dev.whyoleg.cryptography.asByteArray' call
    // Inline function 'kotlinx.io.bytestring.unsafe.UnsafeByteStringOperations.withByteArrayUnsafe' call
    UnsafeByteStringOperations_getInstance();
    tmp$ret$0 = data.getBackingArrayReference_x19ruh_k$();
    break $l$block;
  }
  var tmp = tmp$ret$0;
  var tmp$ret$3;
  $l$block_0: {
    // Inline function 'dev.whyoleg.cryptography.asByteArray' call
    // Inline function 'kotlinx.io.bytestring.unsafe.UnsafeByteStringOperations.withByteArrayUnsafe' call
    UnsafeByteStringOperations_getInstance();
    tmp$ret$3 = signature.getBackingArrayReference_x19ruh_k$();
    break $l$block_0;
  }
  return yield* this.tryVerifySignature_ibri9w_k$(tmp, tmp$ret$3, $completion);
}
function *tryVerifySignature_1(data, signature, $completion) {
  return this.tryVerifySignatureBlocking_2mxjr8_k$(data, signature);
}
function tryVerifySignatureBlocking(data, signature) {
  var tmp0 = this.createVerifyFunction_bmqnil_k$();
  var tmp$ret$0;
  $l$block: {
    // Inline function 'kotlin.use' call
    var exception = null;
    try {
      tmp0.update$default_2vzpx4_k$(data);
      tmp$ret$0 = tmp0.tryVerify$default_qv372z_k$(signature);
      break $l$block;
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        exception = e;
        throw e;
      } else {
        throw $p;
      }
    }
    finally {
      closeFinally(tmp0, exception);
    }
  }
  return tmp$ret$0;
}
function tryVerifySignatureBlocking_0(data, signature) {
  var tmp$ret$0;
  $l$block: {
    // Inline function 'dev.whyoleg.cryptography.asByteArray' call
    // Inline function 'kotlinx.io.bytestring.unsafe.UnsafeByteStringOperations.withByteArrayUnsafe' call
    UnsafeByteStringOperations_getInstance();
    tmp$ret$0 = data.getBackingArrayReference_x19ruh_k$();
    break $l$block;
  }
  var tmp = tmp$ret$0;
  var tmp$ret$3;
  $l$block_0: {
    // Inline function 'dev.whyoleg.cryptography.asByteArray' call
    // Inline function 'kotlinx.io.bytestring.unsafe.UnsafeByteStringOperations.withByteArrayUnsafe' call
    UnsafeByteStringOperations_getInstance();
    tmp$ret$3 = signature.getBackingArrayReference_x19ruh_k$();
    break $l$block_0;
  }
  return this.tryVerifySignatureBlocking_2eqmu1_k$(tmp, tmp$ret$3);
}
function tryVerifySignatureBlocking_1(data, signature) {
  var tmp0 = this.createVerifyFunction_bmqnil_k$();
  var tmp$ret$0;
  $l$block: {
    // Inline function 'kotlin.use' call
    var exception = null;
    try {
      tmp0.update_guoif5_k$(data);
      tmp$ret$0 = tmp0.tryVerify$default_gd6lg8_k$(signature);
      break $l$block;
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        exception = e;
        throw e;
      } else {
        throw $p;
      }
    }
    finally {
      closeFinally(tmp0, exception);
    }
  }
  return tmp$ret$0;
}
function *verifySignature(data, signature, $completion) {
  this.verifySignatureBlocking_phsgos_k$(data, signature);
  return Unit_getInstance();
}
function *verifySignature_0(data, signature, $completion) {
  var tmp$ret$0;
  $l$block: {
    // Inline function 'dev.whyoleg.cryptography.asByteArray' call
    // Inline function 'kotlinx.io.bytestring.unsafe.UnsafeByteStringOperations.withByteArrayUnsafe' call
    UnsafeByteStringOperations_getInstance();
    tmp$ret$0 = data.getBackingArrayReference_x19ruh_k$();
    break $l$block;
  }
  var tmp = tmp$ret$0;
  var tmp$ret$3;
  $l$block_0: {
    // Inline function 'dev.whyoleg.cryptography.asByteArray' call
    // Inline function 'kotlinx.io.bytestring.unsafe.UnsafeByteStringOperations.withByteArrayUnsafe' call
    UnsafeByteStringOperations_getInstance();
    tmp$ret$3 = signature.getBackingArrayReference_x19ruh_k$();
    break $l$block_0;
  }
  return yield* this.verifySignature_6cjzyg_k$(tmp, tmp$ret$3, $completion);
}
function *verifySignature_1(data, signature, $completion) {
  this.verifySignatureBlocking_t99hd3_k$(data, signature);
  return Unit_getInstance();
}
function verifySignatureBlocking(data, signature) {
  var tmp0 = this.createVerifyFunction_bmqnil_k$();
  $l$block: {
    // Inline function 'kotlin.use' call
    var exception = null;
    try {
      tmp0.update$default_2vzpx4_k$(data);
      tmp0.verify$default_6l5ghm_k$(signature);
      break $l$block;
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        exception = e;
        throw e;
      } else {
        throw $p;
      }
    }
    finally {
      closeFinally(tmp0, exception);
    }
  }
}
function verifySignatureBlocking_0(data, signature) {
  var tmp$ret$0;
  $l$block: {
    // Inline function 'dev.whyoleg.cryptography.asByteArray' call
    // Inline function 'kotlinx.io.bytestring.unsafe.UnsafeByteStringOperations.withByteArrayUnsafe' call
    UnsafeByteStringOperations_getInstance();
    tmp$ret$0 = data.getBackingArrayReference_x19ruh_k$();
    break $l$block;
  }
  var tmp = tmp$ret$0;
  var tmp$ret$3;
  $l$block_0: {
    // Inline function 'dev.whyoleg.cryptography.asByteArray' call
    // Inline function 'kotlinx.io.bytestring.unsafe.UnsafeByteStringOperations.withByteArrayUnsafe' call
    UnsafeByteStringOperations_getInstance();
    tmp$ret$3 = signature.getBackingArrayReference_x19ruh_k$();
    break $l$block_0;
  }
  return this.verifySignatureBlocking_phsgos_k$(tmp, tmp$ret$3);
}
function verifySignatureBlocking_1(data, signature) {
  var tmp0 = this.createVerifyFunction_bmqnil_k$();
  $l$block: {
    // Inline function 'kotlin.use' call
    var exception = null;
    try {
      tmp0.update_guoif5_k$(data);
      tmp0.verify$default_4a8sa5_k$(signature);
      break $l$block;
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        exception = e;
        throw e;
      } else {
        throw $p;
      }
    }
    finally {
      closeFinally(tmp0, exception);
    }
  }
}
class SignatureGenerator {}
function *generateSignature(data, $completion) {
  return this.generateSignatureBlocking_z9m3ns_k$(data);
}
function *generateSignature_0(data, $completion) {
  var tmp$ret$0;
  $l$block: {
    // Inline function 'dev.whyoleg.cryptography.asByteArray' call
    // Inline function 'kotlinx.io.bytestring.unsafe.UnsafeByteStringOperations.withByteArrayUnsafe' call
    UnsafeByteStringOperations_getInstance();
    tmp$ret$0 = data.getBackingArrayReference_x19ruh_k$();
    break $l$block;
  }
  // Inline function 'dev.whyoleg.cryptography.asByteString' call
  var this_0 = yield* this.generateSignature_h7xejw_k$(tmp$ret$0, $completion);
  return UnsafeByteStringOperations_getInstance().wrapUnsafe_3fobxs_k$(this_0);
}
function *generateSignature_1(data, $completion) {
  return this.generateSignatureBlocking_cmu7og_k$(data);
}
function generateSignatureBlocking(data) {
  var tmp0 = this.createSignFunction_mvlo0h_k$();
  var tmp$ret$0;
  $l$block: {
    // Inline function 'kotlin.use' call
    var exception = null;
    try {
      tmp0.update$default_2vzpx4_k$(data);
      tmp$ret$0 = tmp0.signToByteArray_2hwzcp_k$();
      break $l$block;
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        exception = e;
        throw e;
      } else {
        throw $p;
      }
    }
    finally {
      closeFinally(tmp0, exception);
    }
  }
  return tmp$ret$0;
}
function generateSignatureBlocking_0(data) {
  var tmp$ret$0;
  $l$block: {
    // Inline function 'dev.whyoleg.cryptography.asByteArray' call
    // Inline function 'kotlinx.io.bytestring.unsafe.UnsafeByteStringOperations.withByteArrayUnsafe' call
    UnsafeByteStringOperations_getInstance();
    tmp$ret$0 = data.getBackingArrayReference_x19ruh_k$();
    break $l$block;
  }
  // Inline function 'dev.whyoleg.cryptography.asByteString' call
  var this_0 = this.generateSignatureBlocking_z9m3ns_k$(tmp$ret$0);
  return UnsafeByteStringOperations_getInstance().wrapUnsafe_3fobxs_k$(this_0);
}
function generateSignatureBlocking_1(data) {
  var tmp0 = this.createSignFunction_mvlo0h_k$();
  var tmp$ret$0;
  $l$block: {
    // Inline function 'kotlin.use' call
    var exception = null;
    try {
      tmp0.update_guoif5_k$(data);
      tmp$ret$0 = tmp0.sign_23nwd_k$();
      break $l$block;
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        exception = e;
        throw e;
      } else {
        throw $p;
      }
    }
    finally {
      closeFinally(tmp0, exception);
    }
  }
  return tmp$ret$0;
}
class VerifyFunction {}
function tryVerify$default(signature, startIndex, endIndex, $super) {
  startIndex = startIndex === VOID ? 0 : startIndex;
  endIndex = endIndex === VOID ? signature.length : endIndex;
  return $super === VOID ? this.tryVerify_vzx898_k$(signature, startIndex, endIndex) : $super.tryVerify_vzx898_k$.call(this, signature, startIndex, endIndex);
}
function tryVerify(signature, startIndex, endIndex) {
  var tmp$ret$0;
  $l$block: {
    // Inline function 'dev.whyoleg.cryptography.asByteArray' call
    // Inline function 'kotlinx.io.bytestring.unsafe.UnsafeByteStringOperations.withByteArrayUnsafe' call
    UnsafeByteStringOperations_getInstance();
    tmp$ret$0 = signature.getBackingArrayReference_x19ruh_k$();
    break $l$block;
  }
  return this.tryVerify_vzx898_k$(tmp$ret$0, startIndex, endIndex);
}
function tryVerify$default_0(signature, startIndex, endIndex, $super) {
  startIndex = startIndex === VOID ? 0 : startIndex;
  endIndex = endIndex === VOID ? signature.get_size_woubt6_k$() : endIndex;
  return $super === VOID ? this.tryVerify_2tgcnj_k$(signature, startIndex, endIndex) : tryVerify(signature, startIndex, endIndex);
}
function verify$default(signature, startIndex, endIndex, $super) {
  startIndex = startIndex === VOID ? 0 : startIndex;
  endIndex = endIndex === VOID ? signature.length : endIndex;
  var tmp;
  if ($super === VOID) {
    this.verify_nf84on_k$(signature, startIndex, endIndex);
    tmp = Unit_getInstance();
  } else {
    tmp = $super.verify_nf84on_k$.call(this, signature, startIndex, endIndex);
  }
  return tmp;
}
function verify(signature, startIndex, endIndex) {
  var tmp$ret$0;
  $l$block: {
    // Inline function 'dev.whyoleg.cryptography.asByteArray' call
    // Inline function 'kotlinx.io.bytestring.unsafe.UnsafeByteStringOperations.withByteArrayUnsafe' call
    UnsafeByteStringOperations_getInstance();
    tmp$ret$0 = signature.getBackingArrayReference_x19ruh_k$();
    break $l$block;
  }
  return this.verify_nf84on_k$(tmp$ret$0, startIndex, endIndex);
}
function verify$default_0(signature, startIndex, endIndex, $super) {
  startIndex = startIndex === VOID ? 0 : startIndex;
  endIndex = endIndex === VOID ? signature.get_size_woubt6_k$() : endIndex;
  var tmp;
  if ($super === VOID) {
    this.verify_l0k1wc_k$(signature, startIndex, endIndex);
    tmp = Unit_getInstance();
  } else {
    verify(signature, startIndex, endIndex);
    tmp = Unit_getInstance();
  }
  return tmp;
}
class SignFunction {}
function signIntoByteArray$default(destination, destinationOffset, $super) {
  destinationOffset = destinationOffset === VOID ? 0 : destinationOffset;
  return $super === VOID ? this.signIntoByteArray_s3505g_k$(destination, destinationOffset) : $super.signIntoByteArray_s3505g_k$.call(this, destination, destinationOffset);
}
function sign() {
  // Inline function 'dev.whyoleg.cryptography.asByteString' call
  var this_0 = this.signToByteArray_2hwzcp_k$();
  return UnsafeByteStringOperations_getInstance().wrapUnsafe_3fobxs_k$(this_0);
}
class UpdatingSource {
  constructor(source, function_0) {
    return new.target.new_dev_whyoleg_cryptography_operations_UpdatingSource_kczy0_k$(source, function_0);
  }
  static new_dev_whyoleg_cryptography_operations_UpdatingSource_kczy0_k$(source, function_0, $box) {
    var $this = createThis(this, $box);
    $this.source_1 = source;
    $this.function_1 = function_0;
    return $this;
  }
  readAtMostTo_nyls31_k$(sink, byteCount) {
    var bytesRead = this.source_1.readAtMostTo_nyls31_k$(sink, byteCount);
    if (!equalsLong(bytesRead, Long.new_kotlin_Long_147cmg_k$(-1, -1))) {
      var sinkOffset = subtract(sink.get_size_woubt6_k$(), bytesRead);
      // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.iterate' call
      UnsafeBufferOperations_getInstance();
      // Inline function 'kotlin.require' call
      if (!(compare(sinkOffset, Long.new_kotlin_Long_147cmg_k$(0, 0)) >= 0)) {
        var message = 'Offset must be non-negative: ' + sinkOffset.toString();
        throw IllegalArgumentException.new_kotlin_IllegalArgumentException_f8t9r5_k$(toString(message));
      }
      if (compare(sinkOffset, sink.get_size_woubt6_k$()) >= 0) {
        throw IndexOutOfBoundsException.new_kotlin_IndexOutOfBoundsException_9eekaf_k$("Offset should be less than buffer's size (" + sink.get_size_woubt6_k$().toString() + '): ' + sinkOffset.toString());
      }
      $l$block_1: {
        // Inline function 'kotlinx.io.seek' call
        if (sink.get_head_1rxik1_k$() == null) {
          var o = Long.new_kotlin_Long_147cmg_k$(-1, -1);
          var context = get_BufferIterationContextImpl();
          var segment = null;
          var additionalOffset = convertToInt(subtract(sinkOffset, o));
          while (!(segment == null)) {
            // Inline function 'kotlinx.io.unsafe.withData' call
            var segment_0 = segment;
            var tmp0 = segment_0.dataAsByteArray_g1m4im_k$(true);
            var tmp2 = segment_0.get_pos_c7hn7x_k$();
            var endIndex = segment_0.get_limit_kzbf7q_k$();
            this.function_1.update_6igkux_k$(tmp0, tmp2 + additionalOffset | 0, endIndex);
            segment = context.next_oktxsl_k$(segment);
            additionalOffset = 0;
          }
          break $l$block_1;
        }
        if (compare(subtract(sink.get_size_woubt6_k$(), sinkOffset), sinkOffset) < 0) {
          var s = sink.get_tail_yzvxr5_k$();
          var offset = sink.get_size_woubt6_k$();
          $l$loop: while (!(s == null) && compare(offset, sinkOffset) > 0) {
            offset = subtract(offset, fromInt(s.get_limit_kzbf7q_k$() - s.get_pos_c7hn7x_k$() | 0));
            if (compare(offset, sinkOffset) <= 0)
              break $l$loop;
            s = s.get_prev_d7or6k_k$();
          }
          var tmp0_0 = s;
          var o_0 = offset;
          var context_0 = get_BufferIterationContextImpl();
          var segment_1 = tmp0_0;
          var additionalOffset_0 = convertToInt(subtract(sinkOffset, o_0));
          while (!(segment_1 == null)) {
            // Inline function 'kotlinx.io.unsafe.withData' call
            var segment_2 = segment_1;
            var tmp0_1 = segment_2.dataAsByteArray_g1m4im_k$(true);
            var tmp2_0 = segment_2.get_pos_c7hn7x_k$();
            var endIndex_0 = segment_2.get_limit_kzbf7q_k$();
            this.function_1.update_6igkux_k$(tmp0_1, tmp2_0 + additionalOffset_0 | 0, endIndex_0);
            segment_1 = context_0.next_oktxsl_k$(segment_1);
            additionalOffset_0 = 0;
          }
          break $l$block_1;
        } else {
          var s_0 = sink.get_head_1rxik1_k$();
          var offset_0 = Long.new_kotlin_Long_147cmg_k$(0, 0);
          $l$loop_0: while (!(s_0 == null)) {
            var tmp0_2 = offset_0;
            // Inline function 'kotlin.Long.plus' call
            var other = s_0.get_limit_kzbf7q_k$() - s_0.get_pos_c7hn7x_k$() | 0;
            var nextOffset = add(tmp0_2, fromInt(other));
            if (compare(nextOffset, sinkOffset) > 0)
              break $l$loop_0;
            s_0 = s_0.get_next_dym7ms_k$();
            offset_0 = nextOffset;
          }
          var tmp0_3 = s_0;
          var o_1 = offset_0;
          var context_1 = get_BufferIterationContextImpl();
          var segment_3 = tmp0_3;
          var additionalOffset_1 = convertToInt(subtract(sinkOffset, o_1));
          while (!(segment_3 == null)) {
            // Inline function 'kotlinx.io.unsafe.withData' call
            var segment_4 = segment_3;
            var tmp0_4 = segment_4.dataAsByteArray_g1m4im_k$(true);
            var tmp2_1 = segment_4.get_pos_c7hn7x_k$();
            var endIndex_1 = segment_4.get_limit_kzbf7q_k$();
            this.function_1.update_6igkux_k$(tmp0_4, tmp2_1 + additionalOffset_1 | 0, endIndex_1);
            segment_3 = context_1.next_oktxsl_k$(segment_3);
            additionalOffset_1 = 0;
          }
          break $l$block_1;
        }
      }
    }
    return bytesRead;
  }
  close_yn9xrc_k$() {
    return this.source_1.close_yn9xrc_k$();
  }
}
class UpdatingSink {
  constructor(sink, function_0) {
    return new.target.new_dev_whyoleg_cryptography_operations_UpdatingSink_fottzs_k$(sink, function_0);
  }
  static new_dev_whyoleg_cryptography_operations_UpdatingSink_fottzs_k$(sink, function_0, $box) {
    var $this = createThis(this, $box);
    $this.sink_1 = sink;
    $this.function_1 = function_0;
    return $this;
  }
  write_yvqjfp_k$(source, byteCount) {
    source.require_28r0pl_k$(byteCount);
    // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.iterate' call
    UnsafeBufferOperations_getInstance();
    var tmp0 = get_BufferIterationContextImpl();
    var remaining = byteCount;
    var segment = source.get_head_1rxik1_k$();
    while (!(segment == null) && compare(remaining, Long.new_kotlin_Long_147cmg_k$(0, 0)) > 0) {
      // Inline function 'kotlinx.io.unsafe.withData' call
      var segment_0 = segment;
      var tmp0_0 = segment_0.dataAsByteArray_g1m4im_k$(true);
      var tmp2 = segment_0.get_pos_c7hn7x_k$();
      var endIndex = segment_0.get_limit_kzbf7q_k$();
      var tmp0_1 = remaining;
      // Inline function 'kotlin.comparisons.minOf' call
      var b = fromInt(endIndex - tmp2 | 0);
      var tmp$ret$4 = compare(tmp0_1, b) <= 0 ? tmp0_1 : b;
      var toUpdate = convertToInt(tmp$ret$4);
      this.function_1.update_6igkux_k$(tmp0_0, tmp2, tmp2 + toUpdate | 0);
      // Inline function 'kotlin.Long.minus' call
      var this_0 = remaining;
      remaining = subtract(this_0, fromInt(toUpdate));
      segment = tmp0.next_oktxsl_k$(segment);
    }
    this.sink_1.write_yvqjfp_k$(source, byteCount);
  }
  flush_shahbo_k$() {
    return this.sink_1.flush_shahbo_k$();
  }
  close_yn9xrc_k$() {
    return this.sink_1.close_yn9xrc_k$();
  }
}
//endregion
function _BinarySize___init__impl__j238f5(bits) {
  // Inline function 'kotlin.require' call
  if (!(_get_bits__d4bv2d(bits) >= 0)) {
    var message = 'Value must be greater than or equal to 0';
    throw IllegalArgumentException.new_kotlin_IllegalArgumentException_f8t9r5_k$(toString(message));
  }
  // Inline function 'kotlin.require' call
  if (!((_get_bits__d4bv2d(bits) % 8 | 0) === 0)) {
    var message_0 = 'Value must be a multiple of 8';
    throw IllegalArgumentException.new_kotlin_IllegalArgumentException_f8t9r5_k$(toString(message_0));
  }
  return bits;
}
function _get_bits__d4bv2d($this) {
  return $this;
}
function _BinarySize___get_inBits__impl__p3mjjl($this) {
  return _get_bits__d4bv2d($this);
}
function _BinarySize___get_inBytes__impl__9v620y($this) {
  return _get_bits__d4bv2d($this) / 8 | 0;
}
function BinarySize__plus_impl_ndwnzj($this, other) {
  return _BinarySize___init__impl__j238f5(_get_bits__d4bv2d($this) + _get_bits__d4bv2d(other) | 0);
}
function BinarySize__minus_impl_flyfwf($this, other) {
  return _BinarySize___init__impl__j238f5(_get_bits__d4bv2d($this) - _get_bits__d4bv2d(other) | 0);
}
function BinarySize__times_impl_dbfvmx($this, other) {
  return _BinarySize___init__impl__j238f5(imul(_get_bits__d4bv2d($this), other));
}
function BinarySize__div_impl_gmk3y6($this, other) {
  return _BinarySize___init__impl__j238f5(_get_bits__d4bv2d($this) / other | 0);
}
function BinarySize__rem_impl_20qqhh($this, other) {
  return _BinarySize___init__impl__j238f5(_get_bits__d4bv2d($this) % other | 0);
}
function BinarySize__compareTo_impl_cv1osx($this, other) {
  return compareTo(_get_bits__d4bv2d($this), _get_bits__d4bv2d(other));
}
function BinarySize__compareTo_impl_cv1osx_0($this, other) {
  return BinarySize__compareTo_impl_cv1osx($this.bits_1, other instanceof BinarySize ? other.bits_1 : THROW_CCE());
}
function BinarySize__toString_impl_jf6uip($this) {
  return '' + _get_bits__d4bv2d($this) + ' bits';
}
var Companion_instance;
function Companion_getInstance() {
  if (Companion_instance === VOID)
    Companion.new_dev_whyoleg_cryptography_BinarySize_Companion_2etq1_k$();
  return Companion_instance;
}
function BinarySize__hashCode_impl_turank($this) {
  return $this;
}
function BinarySize__equals_impl_ii71f8($this, other) {
  if (!(other instanceof BinarySize))
    return false;
  if (!($this === other.bits_1))
    return false;
  return true;
}
var Registry_instance;
function Registry_getInstance() {
  if (Registry_instance === VOID)
    Registry.new_dev_whyoleg_cryptography_CryptographyProvider_Registry_m98rul_k$();
  return Registry_instance;
}
var Companion_instance_0;
function Companion_getInstance_0() {
  if (Companion_instance_0 === VOID)
    Companion_0.new_dev_whyoleg_cryptography_CryptographyProvider_Companion_u1y29v_k$();
  return Companion_instance_0;
}
function _get_impl__d88w17($this) {
  return $this.impl_1;
}
var CryptographySystem_instance;
function CryptographySystem_getInstance() {
  if (CryptographySystem_instance === VOID)
    CryptographySystem.new_dev_whyoleg_cryptography_CryptographySystem_h2gu8e_k$();
  return CryptographySystem_instance;
}
function _get_providers__i8h1jl($this) {
  return $this.providers_1;
}
function CryptographyProvider$_get_name_$ref_bg4mly() {
  return constructCallableReference((p0) => p0.get_name_woqyms_k$(), 1, 0, 'dev.whyoleg.cryptography/CryptographyProvider.name.<get-name>|<get-name>(){}[0]');
}
function _get_registeredProviders__pi7041($this) {
  return $this.registeredProviders_1;
}
function _get_lazyRegisteredProviders__o4hnqd($this) {
  return $this.lazyRegisteredProviders_1;
}
function _set_defaultProvider__lwl4zx($this, _set____db54di) {
  $this.defaultProvider_1 = _set____db54di;
}
function _get_defaultProvider__bsuxhd($this) {
  return $this.defaultProvider_1;
}
function _get_lazyDefaultProvider__q08e1f($this) {
  return $this.lazyDefaultProvider_1;
}
function _set_defaultRandom__26tyzl($this, _set____db54di) {
  $this.defaultRandom_1 = _set____db54di;
}
function _get_defaultRandom__d0xjir($this) {
  return $this.defaultRandom_1;
}
function _get_lazyDefaultRandom__ycifb3($this) {
  return $this.lazyDefaultRandom_1;
}
function CryptographySystemImpl$lazyRegisteredProviders$lambda$lambda(a, b) {
  // Inline function 'kotlin.comparisons.compareValuesBy' call
  var tmp = a.get_key_18j28a_k$();
  var tmp$ret$2 = b.get_key_18j28a_k$();
  return compareValues(tmp, tmp$ret$2);
}
function CryptographySystemImpl$lazyRegisteredProviders$lambda(this$0) {
  return () => {
    // Inline function 'kotlin.collections.sortedBy' call
    var this_0 = this$0.registeredProviders_1.get_entries_p20ztl_k$();
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp = CryptographySystemImpl$lazyRegisteredProviders$lambda$lambda;
    var tmp$ret$1 = sam$kotlin_Comparator$0.new_dev_whyoleg_cryptography_CryptographySystemImpl_sam$kotlin_Comparator$0_bpepew_k$(tmp);
    // Inline function 'kotlin.collections.map' call
    var this_1 = sortedWith(this_0, tmp$ret$1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList.new_kotlin_collections_ArrayList_l811p6_k$(collectionSizeOrDefault(this_1, 10));
    var _iterator__ex2g4s = this_1.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var item = _iterator__ex2g4s.next_20eer_k$();
      var tmp$ret$4 = item.get_value_j01efc_k$().get_value_j01efc_k$();
      destination.add_utx5q5_k$(tmp$ret$4);
    }
    return destination;
  };
}
function CryptographySystemImpl$lazyDefaultProvider$lambda(this$0) {
  return () => {
    var tmp0_elvis_lhs = this$0.defaultProvider_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.let' call
      var it = this$0.lazyRegisteredProviders_1.get_value_j01efc_k$();
      var tmp_0;
      switch (it.get_size_woubt6_k$()) {
        case 0:
          // Inline function 'kotlin.error' call

          var message = 'No providers registered. Please provide a dependency or register provider explicitly';
          throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message));
        case 1:
          tmp_0 = first(it);
          break;
        default:
          tmp_0 = CompositeProvider.new_dev_whyoleg_cryptography_CryptographySystemImpl_CompositeProvider_y2ydiq_k$(it);
          break;
      }
      tmp = tmp_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
}
function CryptographySystemImpl$lazyDefaultRandom$lambda(this$0) {
  return () => {
    var tmp0_elvis_lhs = this$0.defaultRandom_1;
    return tmp0_elvis_lhs == null ? Default_getInstance() : tmp0_elvis_lhs;
  };
}
var static_init_called;
function static_init() {
  if (static_init_called)
    return Unit_getInstance();
  static_init_called = true;
  Format_RAW_instance = Format.new_dev_whyoleg_cryptography_algorithms_AES_Key_Format_32hb8n_k$('RAW', 0);
  Format_JWK_instance = Format.new_dev_whyoleg_cryptography_algorithms_AES_Key_Format_32hb8n_k$('JWK', 1);
}
var Format_RAW_instance;
var Format_JWK_instance;
function values() {
  static_init();
  return [Format_RAW_getInstance(), Format_JWK_getInstance()];
}
function valueOf(value) {
  static_init();
  switch (value) {
    case 'RAW':
      return Format_RAW_getInstance();
    case 'JWK':
      return Format_JWK_getInstance();
    default:
      THROW_IAE('No enum constant dev.whyoleg.cryptography.algorithms.AES.Key.Format.' + value);
      break;
  }
}
function get_entries() {
  static_init();
  if ($ENTRIES == null)
    $ENTRIES = enumEntries(values());
  return $ENTRIES;
}
var $ENTRIES;
var Size_instance;
function Size_getInstance() {
  if (Size_instance === VOID)
    Size.new_dev_whyoleg_cryptography_algorithms_AES_Key_Size_a87hj2_k$();
  return Size_instance;
}
function Format_RAW_getInstance() {
  static_init();
  return Format_RAW_instance;
}
function Format_JWK_getInstance() {
  static_init();
  return Format_JWK_instance;
}
var Companion_instance_1;
function Companion_getInstance_1() {
  if (Companion_instance_1 === VOID)
    Companion_1.new_dev_whyoleg_cryptography_algorithms_AES_GCM_Companion_cdh3fo_k$();
  return Companion_instance_1;
}
var Companion_instance_2;
function Companion_getInstance_2() {
  if (Companion_instance_2 === VOID)
    Companion_2.new_dev_whyoleg_cryptography_algorithms_AES_CCM_Companion_c97r9s_k$();
  return Companion_instance_2;
}
var Companion_instance_3;
function Companion_getInstance_3() {
  if (Companion_instance_3 === VOID)
    Companion_3.new_dev_whyoleg_cryptography_algorithms_AES_CTR_Companion_w7c8ss_k$();
  return Companion_instance_3;
}
var Companion_instance_4;
function Companion_getInstance_4() {
  if (Companion_instance_4 === VOID)
    Companion_4.new_dev_whyoleg_cryptography_algorithms_AES_CBC_Companion_3u1qq3_k$();
  return Companion_instance_4;
}
var Companion_instance_5;
function Companion_getInstance_5() {
  if (Companion_instance_5 === VOID)
    Companion_5.new_dev_whyoleg_cryptography_algorithms_AES_CMAC_Companion_wa000f_k$();
  return Companion_instance_5;
}
var Companion_instance_6;
function Companion_getInstance_6() {
  if (Companion_instance_6 === VOID)
    Companion_6.new_dev_whyoleg_cryptography_algorithms_AES_ECB_Companion_dtbtjp_k$();
  return Companion_instance_6;
}
var Companion_instance_7;
function Companion_getInstance_7() {
  if (Companion_instance_7 === VOID)
    Companion_7.new_dev_whyoleg_cryptography_algorithms_AES_OFB_Companion_tgbsuu_k$();
  return Companion_instance_7;
}
var Companion_instance_8;
function Companion_getInstance_8() {
  if (Companion_instance_8 === VOID)
    Companion_8.new_dev_whyoleg_cryptography_algorithms_AES_CFB_Companion_qldapm_k$();
  return Companion_instance_8;
}
var Companion_instance_9;
function Companion_getInstance_9() {
  if (Companion_instance_9 === VOID)
    Companion_9.new_dev_whyoleg_cryptography_algorithms_AES_CFB8_Companion_3c4g8y_k$();
  return Companion_instance_9;
}
var SHA1_instance;
function SHA1_getInstance() {
  if (SHA1_instance === VOID)
    SHA1.new_dev_whyoleg_cryptography_algorithms_SHA1_teb0ye_k$();
  return SHA1_instance;
}
var SHA256_instance;
function SHA256_getInstance() {
  if (SHA256_instance === VOID)
    SHA256.new_dev_whyoleg_cryptography_algorithms_SHA256_laih92_k$();
  return SHA256_instance;
}
var SHA384_instance;
function SHA384_getInstance() {
  if (SHA384_instance === VOID)
    SHA384.new_dev_whyoleg_cryptography_algorithms_SHA384_ful652_k$();
  return SHA384_instance;
}
var SHA512_instance;
function SHA512_getInstance() {
  if (SHA512_instance === VOID)
    SHA512.new_dev_whyoleg_cryptography_algorithms_SHA512_dnmos6_k$();
  return SHA512_instance;
}
function _Curve___init__impl__ygix12(name) {
  return name;
}
function _Curve___get_name__impl__klrusc($this) {
  return $this;
}
var Companion_instance_10;
function Companion_getInstance_10() {
  if (Companion_instance_10 === VOID)
    Companion_10.new_dev_whyoleg_cryptography_algorithms_EC_Curve_Companion_cbsyrq_k$();
  return Companion_instance_10;
}
function Curve__toString_impl_5205v2($this) {
  return 'Curve(name=' + $this + ')';
}
function Curve__hashCode_impl_qt62nx($this) {
  return getStringHashCode($this);
}
function Curve__equals_impl_vp328v($this, other) {
  if (!(other instanceof Curve))
    return false;
  if (!($this === other.name_1))
    return false;
  return true;
}
var Uncompressed_instance;
function Uncompressed_getInstance() {
  if (Uncompressed_instance === VOID)
    Uncompressed.new_dev_whyoleg_cryptography_algorithms_EC_PublicKey_Format_RAW_Uncompressed_hvrks6_k$();
  return Uncompressed_instance;
}
var Compressed_instance;
function Compressed_getInstance() {
  if (Compressed_instance === VOID)
    Compressed.new_dev_whyoleg_cryptography_algorithms_EC_PublicKey_Format_RAW_Compressed_mnnxm_k$();
  return Compressed_instance;
}
var JWK_instance;
function JWK_getInstance() {
  if (JWK_instance === VOID)
    JWK.new_dev_whyoleg_cryptography_algorithms_EC_PublicKey_Format_JWK_cguxjh_k$();
  return JWK_instance;
}
var DER_instance;
function DER_getInstance() {
  if (DER_instance === VOID)
    DER.new_dev_whyoleg_cryptography_algorithms_EC_PublicKey_Format_DER_dgio4z_k$();
  return DER_instance;
}
var PEM_instance;
function PEM_getInstance() {
  if (PEM_instance === VOID)
    PEM.new_dev_whyoleg_cryptography_algorithms_EC_PublicKey_Format_PEM_rf858f_k$();
  return PEM_instance;
}
var Generic_instance;
function Generic_getInstance() {
  if (Generic_instance === VOID)
    Generic.new_dev_whyoleg_cryptography_algorithms_EC_PrivateKey_Format_DER_Generic_vo19yl_k$();
  return Generic_instance;
}
var SEC1_instance;
function SEC1_getInstance() {
  if (SEC1_instance === VOID)
    SEC1.new_dev_whyoleg_cryptography_algorithms_EC_PrivateKey_Format_DER_SEC1_itdssh_k$();
  return SEC1_instance;
}
var Generic_instance_0;
function Generic_getInstance_0() {
  if (Generic_instance_0 === VOID)
    Generic_0.new_dev_whyoleg_cryptography_algorithms_EC_PrivateKey_Format_PEM_Generic_azrh0s_k$();
  return Generic_instance_0;
}
var SEC1_instance_0;
function SEC1_getInstance_0() {
  if (SEC1_instance_0 === VOID)
    SEC1_0.new_dev_whyoleg_cryptography_algorithms_EC_PrivateKey_Format_PEM_SEC1_qd552w_k$();
  return SEC1_instance_0;
}
var JWK_instance_0;
function JWK_getInstance_0() {
  if (JWK_instance_0 === VOID)
    JWK_0.new_dev_whyoleg_cryptography_algorithms_EC_PrivateKey_Format_JWK_9fes07_k$();
  return JWK_instance_0;
}
var RAW_instance;
function RAW_getInstance() {
  if (RAW_instance === VOID)
    RAW_0.new_dev_whyoleg_cryptography_algorithms_EC_PrivateKey_Format_RAW_ji4b95_k$();
  return RAW_instance;
}
var Companion_instance_11;
function Companion_getInstance_11() {
  if (Companion_instance_11 === VOID)
    Companion_11.new_dev_whyoleg_cryptography_algorithms_ECDH_Companion_lpuwkp_k$();
  return Companion_instance_11;
}
var static_init_called_0;
function static_init_0() {
  if (static_init_called_0)
    return Unit_getInstance();
  static_init_called_0 = true;
  SignatureFormat_RAW_instance = SignatureFormat.new_dev_whyoleg_cryptography_algorithms_ECDSA_SignatureFormat_3lowkq_k$('RAW', 0);
  SignatureFormat_DER_instance = SignatureFormat.new_dev_whyoleg_cryptography_algorithms_ECDSA_SignatureFormat_3lowkq_k$('DER', 1);
}
var SignatureFormat_RAW_instance;
var SignatureFormat_DER_instance;
function values_0() {
  static_init_0();
  return [SignatureFormat_RAW_getInstance(), SignatureFormat_DER_getInstance()];
}
function valueOf_0(value) {
  static_init_0();
  switch (value) {
    case 'RAW':
      return SignatureFormat_RAW_getInstance();
    case 'DER':
      return SignatureFormat_DER_getInstance();
    default:
      THROW_IAE('No enum constant dev.whyoleg.cryptography.algorithms.ECDSA.SignatureFormat.' + value);
      break;
  }
}
function get_entries_0() {
  static_init_0();
  if ($ENTRIES_0 == null)
    $ENTRIES_0 = enumEntries(values_0());
  return $ENTRIES_0;
}
var $ENTRIES_0;
var Companion_instance_12;
function Companion_getInstance_12() {
  if (Companion_instance_12 === VOID)
    Companion_12.new_dev_whyoleg_cryptography_algorithms_ECDSA_Companion_he1ioj_k$();
  return Companion_instance_12;
}
function SignatureFormat_RAW_getInstance() {
  static_init_0();
  return SignatureFormat_RAW_instance;
}
function SignatureFormat_DER_getInstance() {
  static_init_0();
  return SignatureFormat_DER_instance;
}
var static_init_called_1;
function static_init_1() {
  if (static_init_called_1)
    return Unit_getInstance();
  static_init_called_1 = true;
  Curve_Ed25519_instance = Curve_0.new_dev_whyoleg_cryptography_algorithms_EdDSA_Curve_df9qv_k$('Ed25519', 0);
  Curve_Ed448_instance = Curve_0.new_dev_whyoleg_cryptography_algorithms_EdDSA_Curve_df9qv_k$('Ed448', 1);
}
var Curve_Ed25519_instance;
var Curve_Ed448_instance;
function values_1() {
  static_init_1();
  return [Curve_Ed25519_getInstance(), Curve_Ed448_getInstance()];
}
function valueOf_1(value) {
  static_init_1();
  switch (value) {
    case 'Ed25519':
      return Curve_Ed25519_getInstance();
    case 'Ed448':
      return Curve_Ed448_getInstance();
    default:
      THROW_IAE('No enum constant dev.whyoleg.cryptography.algorithms.EdDSA.Curve.' + value);
      break;
  }
}
function get_entries_1() {
  static_init_1();
  if ($ENTRIES_1 == null)
    $ENTRIES_1 = enumEntries(values_1());
  return $ENTRIES_1;
}
var $ENTRIES_1;
var JWK_instance_1;
function JWK_getInstance_1() {
  if (JWK_instance_1 === VOID)
    JWK_1.new_dev_whyoleg_cryptography_algorithms_EdDSA_PublicKey_Format_JWK_t2zqg_k$();
  return JWK_instance_1;
}
var RAW_instance_0;
function RAW_getInstance_0() {
  if (RAW_instance_0 === VOID)
    RAW_1.new_dev_whyoleg_cryptography_algorithms_EdDSA_PublicKey_Format_RAW_p9pp9k_k$();
  return RAW_instance_0;
}
var DER_instance_0;
function DER_getInstance_0() {
  if (DER_instance_0 === VOID)
    DER_1.new_dev_whyoleg_cryptography_algorithms_EdDSA_PublicKey_Format_DER_xcgi60_k$();
  return DER_instance_0;
}
var PEM_instance_0;
function PEM_getInstance_0() {
  if (PEM_instance_0 === VOID)
    PEM_1.new_dev_whyoleg_cryptography_algorithms_EdDSA_PublicKey_Format_PEM_ay9kq0_k$();
  return PEM_instance_0;
}
var JWK_instance_2;
function JWK_getInstance_2() {
  if (JWK_instance_2 === VOID)
    JWK_2.new_dev_whyoleg_cryptography_algorithms_EdDSA_PrivateKey_Format_JWK_g85dba_k$();
  return JWK_instance_2;
}
var RAW_instance_1;
function RAW_getInstance_1() {
  if (RAW_instance_1 === VOID)
    RAW_2.new_dev_whyoleg_cryptography_algorithms_EdDSA_PrivateKey_Format_RAW_bmn6tu_k$();
  return RAW_instance_1;
}
var DER_instance_1;
function DER_getInstance_1() {
  if (DER_instance_1 === VOID)
    DER_2.new_dev_whyoleg_cryptography_algorithms_EdDSA_PrivateKey_Format_DER_bly37k_k$();
  return DER_instance_1;
}
var PEM_instance_1;
function PEM_getInstance_1() {
  if (PEM_instance_1 === VOID)
    PEM_2.new_dev_whyoleg_cryptography_algorithms_EdDSA_PrivateKey_Format_PEM_qma7bi_k$();
  return PEM_instance_1;
}
var Companion_instance_13;
function Companion_getInstance_13() {
  if (Companion_instance_13 === VOID)
    Companion_13.new_dev_whyoleg_cryptography_algorithms_EdDSA_Companion_6xzbww_k$();
  return Companion_instance_13;
}
function Curve_Ed25519_getInstance() {
  static_init_1();
  return Curve_Ed25519_instance;
}
function Curve_Ed448_getInstance() {
  static_init_1();
  return Curve_Ed448_instance;
}
var Companion_instance_14;
function Companion_getInstance_14() {
  if (Companion_instance_14 === VOID)
    Companion_14.new_dev_whyoleg_cryptography_algorithms_HKDF_Companion_os2sp2_k$();
  return Companion_instance_14;
}
var static_init_called_2;
function static_init_2() {
  if (static_init_called_2)
    return Unit_getInstance();
  static_init_called_2 = true;
  Format_RAW_instance_0 = Format_4.new_dev_whyoleg_cryptography_algorithms_HMAC_Key_Format_q94z1x_k$('RAW', 0);
  Format_JWK_instance_0 = Format_4.new_dev_whyoleg_cryptography_algorithms_HMAC_Key_Format_q94z1x_k$('JWK', 1);
}
var Format_RAW_instance_0;
var Format_JWK_instance_0;
function values_2() {
  static_init_2();
  return [Format_RAW_getInstance_0(), Format_JWK_getInstance_0()];
}
function valueOf_2(value) {
  static_init_2();
  switch (value) {
    case 'RAW':
      return Format_RAW_getInstance_0();
    case 'JWK':
      return Format_JWK_getInstance_0();
    default:
      THROW_IAE('No enum constant dev.whyoleg.cryptography.algorithms.HMAC.Key.Format.' + value);
      break;
  }
}
function get_entries_2() {
  static_init_2();
  if ($ENTRIES_2 == null)
    $ENTRIES_2 = enumEntries(values_2());
  return $ENTRIES_2;
}
var $ENTRIES_2;
function Format_RAW_getInstance_0() {
  static_init_2();
  return Format_RAW_instance_0;
}
function Format_JWK_getInstance_0() {
  static_init_2();
  return Format_JWK_instance_0;
}
var Companion_instance_15;
function Companion_getInstance_15() {
  if (Companion_instance_15 === VOID)
    Companion_15.new_dev_whyoleg_cryptography_algorithms_HMAC_Companion_bgd21w_k$();
  return Companion_instance_15;
}
var Companion_instance_16;
function Companion_getInstance_16() {
  if (Companion_instance_16 === VOID)
    Companion_16.new_dev_whyoleg_cryptography_algorithms_PBKDF2_Companion_8q6pxw_k$();
  return Companion_instance_16;
}
var Generic_instance_1;
function Generic_getInstance_1() {
  if (Generic_instance_1 === VOID)
    Generic_1.new_dev_whyoleg_cryptography_algorithms_RSA_PublicKey_Format_DER_Generic_qbwaj5_k$();
  return Generic_instance_1;
}
var PKCS1_instance;
function PKCS1_getInstance() {
  if (PKCS1_instance === VOID)
    PKCS1.new_dev_whyoleg_cryptography_algorithms_RSA_PublicKey_Format_DER_PKCS1_i7epqn_k$();
  return PKCS1_instance;
}
var Generic_instance_2;
function Generic_getInstance_2() {
  if (Generic_instance_2 === VOID)
    Generic_2.new_dev_whyoleg_cryptography_algorithms_RSA_PublicKey_Format_PEM_Generic_21f0gm_k$();
  return Generic_instance_2;
}
var PKCS1_instance_0;
function PKCS1_getInstance_0() {
  if (PKCS1_instance_0 === VOID)
    PKCS1_0.new_dev_whyoleg_cryptography_algorithms_RSA_PublicKey_Format_PEM_PKCS1_x05hme_k$();
  return PKCS1_instance_0;
}
var JWK_instance_3;
function JWK_getInstance_3() {
  if (JWK_instance_3 === VOID)
    JWK_3.new_dev_whyoleg_cryptography_algorithms_RSA_PublicKey_Format_JWK_mqvhhh_k$();
  return JWK_instance_3;
}
var Generic_instance_3;
function Generic_getInstance_3() {
  if (Generic_instance_3 === VOID)
    Generic_3.new_dev_whyoleg_cryptography_algorithms_RSA_PrivateKey_Format_DER_Generic_o7726j_k$();
  return Generic_instance_3;
}
var PKCS1_instance_1;
function PKCS1_getInstance_1() {
  if (PKCS1_instance_1 === VOID)
    PKCS1_1.new_dev_whyoleg_cryptography_algorithms_RSA_PrivateKey_Format_DER_PKCS1_n4h9wp_k$();
  return PKCS1_instance_1;
}
var Generic_instance_4;
function Generic_getInstance_4() {
  if (Generic_instance_4 === VOID)
    Generic_4.new_dev_whyoleg_cryptography_algorithms_RSA_PrivateKey_Format_PEM_Generic_phnpea_k$();
  return Generic_instance_4;
}
var PKCS1_instance_2;
function PKCS1_getInstance_2() {
  if (PKCS1_instance_2 === VOID)
    PKCS1_2.new_dev_whyoleg_cryptography_algorithms_RSA_PrivateKey_Format_PEM_PKCS1_v0fg0_k$();
  return PKCS1_instance_2;
}
var JWK_instance_4;
function JWK_getInstance_4() {
  if (JWK_instance_4 === VOID)
    JWK_4.new_dev_whyoleg_cryptography_algorithms_RSA_PrivateKey_Format_JWK_blcn5l_k$();
  return JWK_instance_4;
}
var Companion_instance_17;
function Companion_getInstance_17() {
  if (Companion_instance_17 === VOID)
    Companion_17.new_dev_whyoleg_cryptography_algorithms_RSA_OAEP_Companion_m63575_k$();
  return Companion_instance_17;
}
var Companion_instance_18;
function Companion_getInstance_18() {
  if (Companion_instance_18 === VOID)
    Companion_18.new_dev_whyoleg_cryptography_algorithms_RSA_PSS_Companion_fews5w_k$();
  return Companion_instance_18;
}
var Companion_instance_19;
function Companion_getInstance_19() {
  if (Companion_instance_19 === VOID)
    Companion_19.new_dev_whyoleg_cryptography_algorithms_RSA_PKCS1_Companion_qtl2a6_k$();
  return Companion_instance_19;
}
var Companion_instance_20;
function Companion_getInstance_20() {
  if (Companion_instance_20 === VOID)
    Companion_20.new_dev_whyoleg_cryptography_algorithms_RSA_RAW_Companion_fl3b78_k$();
  return Companion_instance_20;
}
var static_init_called_3;
function static_init_3() {
  if (static_init_called_3)
    return Unit_getInstance();
  static_init_called_3 = true;
  Curve_X25519_instance = Curve_1.new_dev_whyoleg_cryptography_algorithms_XDH_Curve_32x1wy_k$('X25519', 0);
  Curve_X448_instance = Curve_1.new_dev_whyoleg_cryptography_algorithms_XDH_Curve_32x1wy_k$('X448', 1);
}
var Curve_X25519_instance;
var Curve_X448_instance;
function values_3() {
  static_init_3();
  return [Curve_X25519_getInstance(), Curve_X448_getInstance()];
}
function valueOf_3(value) {
  static_init_3();
  switch (value) {
    case 'X25519':
      return Curve_X25519_getInstance();
    case 'X448':
      return Curve_X448_getInstance();
    default:
      THROW_IAE('No enum constant dev.whyoleg.cryptography.algorithms.XDH.Curve.' + value);
      break;
  }
}
function get_entries_3() {
  static_init_3();
  if ($ENTRIES_3 == null)
    $ENTRIES_3 = enumEntries(values_3());
  return $ENTRIES_3;
}
var $ENTRIES_3;
var JWK_instance_5;
function JWK_getInstance_5() {
  if (JWK_instance_5 === VOID)
    JWK_5.new_dev_whyoleg_cryptography_algorithms_XDH_PublicKey_Format_JWK_44b2f3_k$();
  return JWK_instance_5;
}
var RAW_instance_2;
function RAW_getInstance_2() {
  if (RAW_instance_2 === VOID)
    RAW_4.new_dev_whyoleg_cryptography_algorithms_XDH_PublicKey_Format_RAW_x1u5of_k$();
  return RAW_instance_2;
}
var DER_instance_2;
function DER_getInstance_2() {
  if (DER_instance_2 === VOID)
    DER_5.new_dev_whyoleg_cryptography_algorithms_XDH_PublicKey_Format_DER_iee0wx_k$();
  return DER_instance_2;
}
var PEM_instance_2;
function PEM_getInstance_2() {
  if (PEM_instance_2 === VOID)
    PEM_5.new_dev_whyoleg_cryptography_algorithms_XDH_PublicKey_Format_PEM_uakwfz_k$();
  return PEM_instance_2;
}
var JWK_instance_6;
function JWK_getInstance_6() {
  if (JWK_instance_6 === VOID)
    JWK_6.new_dev_whyoleg_cryptography_algorithms_XDH_PrivateKey_Format_JWK_lcd85f_k$();
  return JWK_instance_6;
}
var RAW_instance_3;
function RAW_getInstance_3() {
  if (RAW_instance_3 === VOID)
    RAW_5.new_dev_whyoleg_cryptography_algorithms_XDH_PrivateKey_Format_RAW_sg9sbt_k$();
  return RAW_instance_3;
}
var DER_instance_3;
function DER_getInstance_3() {
  if (DER_instance_3 === VOID)
    DER_6.new_dev_whyoleg_cryptography_algorithms_XDH_PrivateKey_Format_DER_pinoh5_k$();
  return DER_instance_3;
}
var PEM_instance_3;
function PEM_getInstance_3() {
  if (PEM_instance_3 === VOID)
    PEM_6.new_dev_whyoleg_cryptography_algorithms_XDH_PrivateKey_Format_PEM_ypmzex_k$();
  return PEM_instance_3;
}
var Companion_instance_21;
function Companion_getInstance_21() {
  if (Companion_instance_21 === VOID)
    Companion_21.new_dev_whyoleg_cryptography_algorithms_XDH_Companion_gfh01h_k$();
  return Companion_instance_21;
}
function Curve_X25519_getInstance() {
  static_init_3();
  return Curve_X25519_instance;
}
function Curve_X448_getInstance() {
  static_init_3();
  return Curve_X448_instance;
}
function _SymmetricKeySize___init__impl__8vlm4o(value) {
  return value;
}
function _SymmetricKeySize___get_value__impl__5onst0($this) {
  return $this;
}
var Companion_instance_22;
function Companion_getInstance_22() {
  if (Companion_instance_22 === VOID)
    Companion_22.new_dev_whyoleg_cryptography_algorithms_symmetric_SymmetricKeySize_Companion_a7a657_k$();
  return Companion_instance_22;
}
function SymmetricKeySize__toString_impl_ed4jrc($this) {
  return 'SymmetricKeySize(value=' + BinarySize__toString_impl_jf6uip($this) + ')';
}
function SymmetricKeySize__hashCode_impl_ywtlex($this) {
  return BinarySize__hashCode_impl_turank($this);
}
function SymmetricKeySize__equals_impl_yoqnjv($this, other) {
  if (!(other instanceof SymmetricKeySize))
    return false;
  var tmp0_other_with_cast = other.value_1;
  if (!equals(new BinarySize($this), new BinarySize(tmp0_other_with_cast)))
    return false;
  return true;
}
function _get_source__4cuw5s($this) {
  return $this.source_1;
}
function _get_function__m6jw1f($this) {
  return $this.function_1;
}
function _get_sink__ddo8ig($this) {
  return $this.sink_1;
}
function _get_function__m6jw1f_0($this) {
  return $this.function_1;
}
function asByteArray(_this__u8e3s4) {
  // Inline function 'kotlinx.io.bytestring.unsafe.UnsafeByteStringOperations.withByteArrayUnsafe' call
  UnsafeByteStringOperations_getInstance();
  return _this__u8e3s4.getBackingArrayReference_x19ruh_k$();
}
function asByteString(_this__u8e3s4) {
  return UnsafeByteStringOperations_getInstance().wrapUnsafe_3fobxs_k$(_this__u8e3s4);
}
function loadProviders(_this__u8e3s4) {
}
//region block: post-declaration
initMetadataForCompanion(Companion);
initMetadataForClass(BinarySize, 'BinarySize', VOID, VOID, [Comparable]);
initMetadataForInterface(CryptographyAlgorithm, 'CryptographyAlgorithm');
initMetadataForClass(CryptographyAlgorithmId, 'CryptographyAlgorithmId');
initMetadataForObject(Registry, 'Registry');
initMetadataForCompanion(Companion_0);
initMetadataForClass(CryptographyProvider, 'CryptographyProvider');
initMetadataForClass(CryptographyProviderApi, 'CryptographyProviderApi', VOID, VOID, [Annotation]);
initMetadataForObject(CryptographySystem, 'CryptographySystem');
initMetadataForClass(CompositeProvider, 'CompositeProvider');
initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
initMetadataForClass(CryptographySystemImpl, 'CryptographySystemImpl', CryptographySystemImpl.new_dev_whyoleg_cryptography_CryptographySystemImpl_ap6n7y_k$);
initMetadataForClass(DelicateCryptographyApi, 'DelicateCryptographyApi', VOID, VOID, [Annotation]);
initMetadataForInterface(EncodingFormat, 'EncodingFormat');
initMetadataForClass(Format, 'Format', VOID, VOID, [EncodingFormat]);
initMetadataForObject(Size, 'Size');
initMetadataForCompanion(Companion_1);
initMetadataForInterface(Encodable, 'Encodable', VOID, VOID, VOID, [1]);
initMetadataForInterface(Key, 'Key', VOID, VOID, [Encodable], [1]);
initMetadataForInterface(Key_0, 'Key', VOID, VOID, [Key], [1]);
initMetadataForCompanion(Companion_2);
initMetadataForInterface(Key_1, 'Key', VOID, VOID, [Key], [1]);
initMetadataForCompanion(Companion_3);
initMetadataForInterface(Key_2, 'Key', VOID, VOID, [Key], [1]);
initMetadataForCompanion(Companion_4);
initMetadataForInterface(Key_3, 'Key', VOID, VOID, [Key], [1]);
initMetadataForCompanion(Companion_5);
initMetadataForInterface(Key_4, 'Key', VOID, VOID, [Key], [1]);
initMetadataForCompanion(Companion_6);
initMetadataForInterface(Key_5, 'Key', VOID, VOID, [Key], [1]);
initMetadataForCompanion(Companion_7);
initMetadataForInterface(Key_6, 'Key', VOID, VOID, [Key], [1]);
initMetadataForCompanion(Companion_8);
initMetadataForInterface(Key_7, 'Key', VOID, VOID, [Key], [1]);
initMetadataForCompanion(Companion_9);
initMetadataForInterface(Key_8, 'Key', VOID, VOID, [Key], [1]);
initMetadataForInterface(AES, 'AES', VOID, VOID, [CryptographyAlgorithm]);
initMetadataForInterface(GCM, 'GCM', VOID, VOID, [AES]);
initMetadataForInterface(CCM, 'CCM', VOID, VOID, [AES]);
initMetadataForInterface(CTR, 'CTR', VOID, VOID, [AES]);
initMetadataForInterface(CBC, 'CBC', VOID, VOID, [AES]);
initMetadataForInterface(CMAC, 'CMAC', VOID, VOID, [AES]);
initMetadataForInterface(ECB, 'ECB', VOID, VOID, [AES]);
initMetadataForInterface(OFB, 'OFB', VOID, VOID, [AES]);
initMetadataForInterface(CFB, 'CFB', VOID, VOID, [AES]);
initMetadataForInterface(CFB8, 'CFB8', VOID, VOID, [AES]);
initMetadataForObject(SHA1, 'SHA1');
initMetadataForObject(SHA256, 'SHA256');
initMetadataForObject(SHA384, 'SHA384');
initMetadataForObject(SHA512, 'SHA512');
initMetadataForInterface(Digest, 'Digest', VOID, VOID, [CryptographyAlgorithm]);
initMetadataForCompanion(Companion_10);
initMetadataForClass(Format_0, 'Format', VOID, VOID, [EncodingFormat]);
initMetadataForClass(RAW, 'RAW');
initMetadataForObject(Uncompressed, 'Uncompressed');
initMetadataForObject(Compressed, 'Compressed');
initMetadataForObject(JWK, 'JWK');
initMetadataForObject(DER, 'DER');
initMetadataForObject(PEM, 'PEM');
initMetadataForClass(Format_1, 'Format', VOID, VOID, [EncodingFormat]);
initMetadataForClass(DER_0, 'DER');
initMetadataForObject(Generic, 'Generic');
initMetadataForObject(SEC1, 'SEC1');
initMetadataForClass(PEM_0, 'PEM');
initMetadataForObject(Generic_0, 'Generic');
initMetadataForObject(SEC1_0, 'SEC1');
initMetadataForObject(JWK_0, 'JWK');
initMetadataForObject(RAW_0, 'RAW');
initMetadataForClass(Curve, 'Curve');
initMetadataForInterface(KeyPair, 'KeyPair');
initMetadataForInterface(PublicKey, 'PublicKey', VOID, VOID, [Encodable], [1]);
initMetadataForInterface(PublicKeyAccessor, 'PublicKeyAccessor', VOID, VOID, VOID, [0]);
initMetadataForInterface(PrivateKey, 'PrivateKey', VOID, VOID, [Encodable, PublicKeyAccessor], [1, 0]);
initMetadataForInterface(EC, 'EC', VOID, VOID, [CryptographyAlgorithm]);
initMetadataForCompanion(Companion_11);
initMetadataForInterface(KeyPair_0, 'KeyPair', VOID, VOID, [KeyPair]);
initMetadataForInterface(PublicKey_0, 'PublicKey', VOID, VOID, [PublicKey], [1]);
initMetadataForInterface(PrivateKey_0, 'PrivateKey', VOID, VOID, [PrivateKey], [1, 0]);
initMetadataForInterface(ECDH, 'ECDH', VOID, VOID, [EC]);
initMetadataForCompanion(Companion_12);
initMetadataForInterface(KeyPair_1, 'KeyPair', VOID, VOID, [KeyPair]);
initMetadataForInterface(PublicKey_1, 'PublicKey', VOID, VOID, [PublicKey], [1]);
initMetadataForInterface(PrivateKey_1, 'PrivateKey', VOID, VOID, [PrivateKey], [1, 0]);
initMetadataForClass(SignatureFormat, 'SignatureFormat');
initMetadataForInterface(ECDSA, 'ECDSA', VOID, VOID, [EC]);
initMetadataForClass(Format_2, 'Format', VOID, VOID, [EncodingFormat]);
initMetadataForObject(JWK_1, 'JWK');
initMetadataForObject(RAW_1, 'RAW');
initMetadataForObject(DER_1, 'DER');
initMetadataForObject(PEM_1, 'PEM');
initMetadataForClass(Format_3, 'Format', VOID, VOID, [EncodingFormat]);
initMetadataForObject(JWK_2, 'JWK');
initMetadataForObject(RAW_2, 'RAW');
initMetadataForObject(DER_2, 'DER');
initMetadataForObject(PEM_2, 'PEM');
initMetadataForCompanion(Companion_13);
initMetadataForClass(Curve_0, 'Curve');
initMetadataForInterface(KeyPair_2, 'KeyPair');
initMetadataForInterface(PublicKey_2, 'PublicKey', VOID, VOID, [Encodable], [1]);
initMetadataForInterface(PrivateKey_2, 'PrivateKey', VOID, VOID, [Encodable, PublicKeyAccessor], [1, 0]);
initMetadataForInterface(EdDSA, 'EdDSA', VOID, VOID, [CryptographyAlgorithm]);
initMetadataForCompanion(Companion_14);
initMetadataForInterface(HKDF, 'HKDF', VOID, VOID, [CryptographyAlgorithm]);
initMetadataForClass(Format_4, 'Format', VOID, VOID, [EncodingFormat]);
initMetadataForCompanion(Companion_15);
initMetadataForInterface(Key_9, 'Key', VOID, VOID, [Encodable], [1]);
initMetadataForInterface(HMAC, 'HMAC', VOID, VOID, [CryptographyAlgorithm]);
initMetadataForCompanion(Companion_16);
initMetadataForInterface(PBKDF2, 'PBKDF2', VOID, VOID, [CryptographyAlgorithm]);
initMetadataForClass(Format_5, 'Format', VOID, VOID, [EncodingFormat]);
initMetadataForClass(DER_3, 'DER');
initMetadataForObject(Generic_1, 'Generic');
initMetadataForObject(PKCS1, 'PKCS1');
initMetadataForClass(PEM_3, 'PEM');
initMetadataForObject(Generic_2, 'Generic');
initMetadataForObject(PKCS1_0, 'PKCS1');
initMetadataForObject(JWK_3, 'JWK');
initMetadataForClass(Format_6, 'Format', VOID, VOID, [EncodingFormat]);
initMetadataForClass(DER_4, 'DER');
initMetadataForObject(Generic_3, 'Generic');
initMetadataForObject(PKCS1_1, 'PKCS1');
initMetadataForClass(PEM_4, 'PEM');
initMetadataForObject(Generic_4, 'Generic');
initMetadataForObject(PKCS1_2, 'PKCS1');
initMetadataForObject(JWK_4, 'JWK');
initMetadataForCompanion(Companion_17);
initMetadataForInterface(KeyPair_3, 'KeyPair');
initMetadataForInterface(KeyPair_4, 'KeyPair', VOID, VOID, [KeyPair_3]);
initMetadataForInterface(PublicKey_3, 'PublicKey', VOID, VOID, [Encodable], [1]);
initMetadataForInterface(PublicKey_4, 'PublicKey', VOID, VOID, [PublicKey_3], [1]);
initMetadataForInterface(PrivateKey_3, 'PrivateKey', VOID, VOID, [Encodable, PublicKeyAccessor], [1, 0]);
initMetadataForInterface(PrivateKey_4, 'PrivateKey', VOID, VOID, [PrivateKey_3], [1, 0]);
initMetadataForCompanion(Companion_18);
initMetadataForInterface(KeyPair_5, 'KeyPair', VOID, VOID, [KeyPair_3]);
initMetadataForInterface(PublicKey_5, 'PublicKey', VOID, VOID, [PublicKey_3], [1]);
initMetadataForInterface(PrivateKey_5, 'PrivateKey', VOID, VOID, [PrivateKey_3], [1, 0]);
initMetadataForCompanion(Companion_19);
initMetadataForInterface(KeyPair_6, 'KeyPair', VOID, VOID, [KeyPair_3]);
initMetadataForInterface(PublicKey_6, 'PublicKey', VOID, VOID, [PublicKey_3], [1]);
initMetadataForInterface(PrivateKey_6, 'PrivateKey', VOID, VOID, [PrivateKey_3], [1, 0]);
initMetadataForCompanion(Companion_20);
initMetadataForInterface(KeyPair_7, 'KeyPair', VOID, VOID, [KeyPair_3]);
initMetadataForInterface(PublicKey_7, 'PublicKey', VOID, VOID, [PublicKey_3], [1]);
initMetadataForInterface(PrivateKey_7, 'PrivateKey', VOID, VOID, [PrivateKey_3], [1, 0]);
initMetadataForInterface(RSA, 'RSA', VOID, VOID, [CryptographyAlgorithm]);
initMetadataForInterface(OAEP, 'OAEP', VOID, VOID, [RSA]);
initMetadataForInterface(PSS, 'PSS', VOID, VOID, [RSA]);
initMetadataForInterface(PKCS1_3, 'PKCS1', VOID, VOID, [RSA]);
initMetadataForInterface(RAW_3, 'RAW', VOID, VOID, [RSA]);
initMetadataForClass(Format_7, 'Format', VOID, VOID, [EncodingFormat]);
initMetadataForObject(JWK_5, 'JWK');
initMetadataForObject(RAW_4, 'RAW');
initMetadataForObject(DER_5, 'DER');
initMetadataForObject(PEM_5, 'PEM');
initMetadataForClass(Format_8, 'Format', VOID, VOID, [EncodingFormat]);
initMetadataForObject(JWK_6, 'JWK');
initMetadataForObject(RAW_5, 'RAW');
initMetadataForObject(DER_6, 'DER');
initMetadataForObject(PEM_6, 'PEM');
initMetadataForCompanion(Companion_21);
initMetadataForClass(Curve_1, 'Curve');
initMetadataForInterface(KeyPair_8, 'KeyPair');
initMetadataForInterface(PublicKey_8, 'PublicKey', VOID, VOID, [Encodable], [1]);
initMetadataForInterface(PrivateKey_8, 'PrivateKey', VOID, VOID, [Encodable, PublicKeyAccessor], [1, 0]);
initMetadataForInterface(XDH, 'XDH', VOID, VOID, [CryptographyAlgorithm]);
initMetadataForCompanion(Companion_22);
initMetadataForClass(SymmetricKeySize, 'SymmetricKeySize');
initMetadataForInterface(Decoder, 'Decoder', VOID, VOID, VOID, [2]);
initMetadataForInterface(Encryptor, 'Encryptor', VOID, VOID, VOID, [1]);
initMetadataForInterface(AuthenticatedEncryptor, 'AuthenticatedEncryptor', VOID, VOID, [Encryptor], [1, 2]);
initMetadataForInterface(Decryptor, 'Decryptor', VOID, VOID, VOID, [1]);
initMetadataForInterface(AuthenticatedDecryptor, 'AuthenticatedDecryptor', VOID, VOID, [Decryptor], [1, 2]);
initMetadataForInterface(Cipher, 'Cipher', VOID, VOID, [Encryptor, Decryptor], [1]);
initMetadataForInterface(AuthenticatedCipher, 'AuthenticatedCipher', VOID, VOID, [Cipher, AuthenticatedEncryptor, AuthenticatedDecryptor], [1, 2]);
initMetadataForInterface(Hasher, 'Hasher', VOID, VOID, VOID, [1]);
initMetadataForInterface(UpdateFunction, 'UpdateFunction', VOID, VOID, [AutoCloseable]);
initMetadataForInterface(HashFunction, 'HashFunction', VOID, VOID, [UpdateFunction]);
initMetadataForInterface(IvEncryptor, 'IvEncryptor', VOID, VOID, [Encryptor], [2, 1]);
initMetadataForInterface(IvDecryptor, 'IvDecryptor', VOID, VOID, [Decryptor], [2, 1]);
initMetadataForInterface(IvCipher, 'IvCipher', VOID, VOID, [Cipher, IvEncryptor, IvDecryptor], [1, 2]);
initMetadataForInterface(IvAuthenticatedEncryptor, 'IvAuthenticatedEncryptor', VOID, VOID, [IvEncryptor, AuthenticatedEncryptor], [2, 3, 1]);
initMetadataForInterface(IvAuthenticatedDecryptor, 'IvAuthenticatedDecryptor', VOID, VOID, [IvDecryptor, AuthenticatedDecryptor], [2, 3, 1]);
initMetadataForInterface(IvAuthenticatedCipher, 'IvAuthenticatedCipher', VOID, VOID, [IvCipher, AuthenticatedCipher, IvAuthenticatedEncryptor, IvAuthenticatedDecryptor], [1, 2, 3]);
initMetadataForInterface(KeyGenerator, 'KeyGenerator', VOID, VOID, VOID, [0]);
initMetadataForInterface(SecretDerivation, 'SecretDerivation', VOID, VOID, VOID, [1]);
initMetadataForInterface(SharedSecretGenerator, 'SharedSecretGenerator', VOID, VOID, VOID, [1]);
initMetadataForInterface(SignatureVerifier, 'SignatureVerifier', VOID, VOID, VOID, [2]);
initMetadataForInterface(SignatureGenerator, 'SignatureGenerator', VOID, VOID, VOID, [1]);
initMetadataForInterface(VerifyFunction, 'VerifyFunction', VOID, VOID, [UpdateFunction]);
initMetadataForInterface(SignFunction, 'SignFunction', VOID, VOID, [UpdateFunction]);
initMetadataForClass(UpdatingSource, 'UpdatingSource', VOID, VOID, [RawSource]);
initMetadataForClass(UpdatingSink, 'UpdatingSink', VOID, VOID, [RawSink]);
//endregion
//region block: exports
export {
  Key_3 as Key3v6kv6nm3fosy,
  get_id_2 as get_id13s3azew0oj05,
  CBC as CBC2h2h8s8tnsyrv,
  Key_2 as Key38j7ghx1i78sx,
  get_id_1 as get_id2xgw5okioad74,
  CTR as CTRvt7y0f8sa7ru,
  Key_0 as Key213qgkkvc7dgh,
  get_id as get_id1r57u1dak6ha4,
  GCM as GCM1wgezbeyqt6ek,
  Format as Format3dwngdi37q0un,
  Key as Key2oawnfgbl41sv,
  keyGenerator as keyGenerator2fendx8gsjwcn,
  AES as AES2hp2oazjg3gnu,
  Digest as Digest2wphescsfypif,
  Format_1 as Format2r6rz6bygg1d5,
  PrivateKey as PrivateKey20ndpzr3hp1jb,
  Format_0 as Format1u440c2w9z1t5,
  PublicKey as PublicKey3jw1madk5qoqt,
  KeyPair_0 as KeyPair1hidulzwy4tns,
  PrivateKey_0 as PrivateKey2luh571ew0i4p,
  PublicKey_0 as PublicKey3birjp2i58xr,
  get_id_8 as get_id16hn8lqd1ythl,
  ECDH as ECDH17qsxfyh2w2kx,
  KeyPair_1 as KeyPairon0qg6viulpc,
  PrivateKey_1 as PrivateKey33i5l5vu0y2yh,
  PublicKey_1 as PublicKey7390y1ayc62p,
  get_id_9 as get_id1sfj7kzf4mvx8,
  ECDSA as ECDSA2k4h5dy13ymhd,
  EC as EC2zd2pkaez2qry,
  KeyPair_2 as KeyPair1wf95p7le4j88,
  Format_3 as Format54thjh0l90r5,
  PrivateKey_2 as PrivateKeyk0hgkok9ylkc,
  Format_2 as Formatg0fr6snd4fji,
  PublicKey_2 as PublicKey26jn3ixhh5z2i,
  get_id_10 as get_id11w8hzzdtq426,
  EdDSA as EdDSA1o9g8iwezbad1,
  get_id_11 as get_id3tk7msv421r25,
  secretDerivation as secretDerivation1d4q7annscw1m,
  HKDF as HKDF3esr2gg2i2i1w,
  Format_4 as Format1jug7lc3rg0qd,
  Key_9 as Key3a59hcbrj96x,
  get_id_12 as get_id2pmo0xbxaufft,
  HMAC as HMACyk6yj2a8emt0,
  get_id_13 as get_id1m97p23uce9ee,
  secretDerivation_0 as secretDerivation28j59eiodhigr,
  PBKDF2 as PBKDF23th21sw2r56lb,
  KeyPair_4 as KeyPair3isd3rrpricgj,
  PrivateKey_4 as PrivateKeya25e3tkmhdps,
  PublicKey_4 as PublicKeynuf8wr3mm11s,
  get_id_14 as get_id252wgqagl7rwd,
  OAEP as OAEP1wqbcfon16n7a,
  KeyPair_6 as KeyPairhbfqzlmboy77,
  PrivateKey_6 as PrivateKey3c43z0z5rvxn8,
  PublicKey_6 as PublicKey2025bm01ch0ce,
  get_id_16 as get_id2l09slr7v7cxh,
  PKCS1_3 as PKCS11yl69stm7ik9c,
  KeyPair_5 as KeyPair2p33sr1og5a1c,
  PrivateKey_5 as PrivateKey3l1o6eegm14fa,
  PublicKey_5 as PublicKey8buj0y4lx3z5,
  get_id_15 as get_id7qfci2k6iux3,
  PSS as PSS31bzeflfm4ta8,
  Format_6 as Format1i0i1l8xjk06m,
  PrivateKey_3 as PrivateKey9nv8ew54g6z0,
  Format_5 as Format2v29dvc3oaj5k,
  PublicKey_3 as PublicKey2ip3y3rr0ffp7,
  RSA as RSA1mq151qk9ib8k,
  KeyPair_8 as KeyPairmxkuuefxxnd5,
  Format_8 as Format1m0xt4jsfgeex,
  PrivateKey_8 as PrivateKey25pp0g85167ob,
  Format_7 as Format23cb2g7ljayhv,
  PublicKey_8 as PublicKey1kxcbk6l0m6ui,
  get_id_18 as get_id2kwj4e9hbn7h9,
  XDH as XDH1b5ej3lhg5pg4,
  decodeFromByteStringBlocking as decodeFromByteStringBlocking24euq9iyefb71,
  Decoder as Decoder1rfhzrndvrugi,
  encodeToByteStringBlocking as encodeToByteStringBlocking3veavekj0o11d,
  Encodable as Encodable2gzovwbp8jjlj,
  EncodingFormat as EncodingFormat2va16rlt4t38i,
  decryptBlocking_2 as decryptBlocking3jy6w4uuu156u,
  decryptBlocking_0 as decryptBlocking2p4ixdbmyk1u4,
  decryptBlocking_1 as decryptBlocking3g2ctatzvmm7j,
  decryptingSink as decryptingSink2w6yujmkugk8g,
  decryptingSink_0 as decryptingSink119mtzzz2t903,
  decryptingSource as decryptingSource18hxyg2714jgl,
  decryptingSource_0 as decryptingSource37brtpooxvjoi,
  AuthenticatedDecryptor as AuthenticatedDecryptor1up1tk26frfqy,
  encryptBlocking_2 as encryptBlockingfyfq8e9j42n8,
  encryptBlocking_0 as encryptBlocking2uebbyw57yndi,
  encryptBlocking_1 as encryptBlocking27u3z3sr2moqn,
  encryptingSink_0 as encryptingSink3ezjsipqysdfj,
  encryptingSink as encryptingSink2aj47td15npu6,
  encryptingSource as encryptingSource2ouqy1ebuypj8,
  encryptingSource_0 as encryptingSource3s6hymwbpmf2v,
  AuthenticatedEncryptor as AuthenticatedEncryptor2anzbb6nn070y,
  decryptBlocking as decryptBlocking1to4gfyfx72cf,
  encryptBlocking as encryptBlockingh6tzsz8yw1ig,
  hashBlocking_0 as hashBlocking2rl4hdoddzrxf,
  Hasher as Hashera1nteuzom60c,
  IvAuthenticatedCipher as IvAuthenticatedCipher3tt0m4c8u7t9o,
  decryptWithIvBlocking_2 as decryptWithIvBlocking3uv9ycehwj8pa,
  decryptWithIvBlocking_1 as decryptWithIvBlocking23szbq26n32bk,
  decryptWithIvBlocking_0 as decryptWithIvBlocking1id9fjul1t60b,
  decryptingSinkWithIv_1 as decryptingSinkWithIv1tglfh5ruuod4,
  decryptingSinkWithIv_0 as decryptingSinkWithIv38dkfhia7yiun,
  decryptingSourceWithIv_0 as decryptingSourceWithIv33u1oyek2gskj,
  decryptingSourceWithIv_1 as decryptingSourceWithIv2o9f09ebbxjpt,
  encryptWithIvBlocking_0 as encryptWithIvBlocking2iofmlj3mx9qj,
  encryptWithIvBlocking_2 as encryptWithIvBlockingr3lg3yg0tqz8,
  encryptWithIvBlocking_1 as encryptWithIvBlocking1f4qyuzwa8rjz,
  encryptingSinkWithIv_1 as encryptingSinkWithIv2p5j6j7oiurrc,
  encryptingSinkWithIv_0 as encryptingSinkWithIvn5bk71sqlha4,
  encryptingSourceWithIv_0 as encryptingSourceWithIv39mb5dpu03ch7,
  encryptingSourceWithIv_1 as encryptingSourceWithIv7q516bt37eic,
  IvCipher as IvCipher1nak6fysz2zc9,
  decryptWithIvBlocking as decryptWithIvBlocking1zdft5f4xc24u,
  decryptingSinkWithIv as decryptingSinkWithIv1ebqin5d4tiro,
  decryptingSourceWithIv as decryptingSourceWithIv201wsko08r80l,
  encryptWithIvBlocking as encryptWithIvBlocking3tx47u828jc5v,
  encryptingSinkWithIv as encryptingSinkWithIvfbtf7ou3cyif,
  encryptingSourceWithIv as encryptingSourceWithIv3eo5wdvqo9iek,
  KeyGenerator as KeyGenerator1bxslzm6k76ep,
  deriveSecretBlocking as deriveSecretBlocking21c0dt4y3yaj3,
  deriveSecretBlocking_0 as deriveSecretBlocking2a222r9we2bl9,
  deriveSecretToByteArrayBlocking as deriveSecretToByteArrayBlockingm19vy59ympom,
  SecretDerivation as SecretDerivation2kq6lh3z9mho2,
  generateSharedSecretBlocking as generateSharedSecretBlocking14u7mc3o96lpy,
  SharedSecretGenerator as SharedSecretGenerator3j6hot6ehfkh6,
  generateSignatureBlocking_0 as generateSignatureBlocking1b7w290kkmg9f,
  SignatureGenerator as SignatureGenerator3tx2fdhty5h2c,
  tryVerifySignatureBlocking_0 as tryVerifySignatureBlocking3h54xkgo922gu,
  verifySignatureBlocking_0 as verifySignatureBlocking1fvytrw5lah8,
  SignatureVerifier as SignatureVerifier3d0d5di1vhrbd,
  CryptographyAlgorithm as CryptographyAlgorithmhhdrgo7p9qei,
  CryptographyProvider as CryptographyProviderwgv0x40nzvjc,
  _Curve___get_name__impl__klrusc as _Curve___get_name__impl__klruscjv6hsov7bey0,
  _BinarySize___get_inBits__impl__p3mjjl as _BinarySize___get_inBits__impl__p3mjjl3bgym1eadcbs9,
  _BinarySize___get_inBytes__impl__9v620y as _BinarySize___get_inBytes__impl__9v620y2jqkg86t3wxzc,
  Companion_getInstance_4 as Companion_getInstance1har8a7t18iqu,
  Companion_getInstance_3 as Companion_getInstanceg8lp1ei5pw1i,
  Companion_getInstance_1 as Companion_getInstance1hhiq6dkqkxmn,
  Companion_getInstance_10 as Companion_getInstance344fm9duuxwuu,
  Generic_getInstance as Generic_getInstance2khf7qppqxova,
  SEC1_getInstance as SEC1_getInstanceyb9qlkvt79n5,
  JWK_getInstance_0 as JWK_getInstance1d3hw8f2moiyr,
  Generic_getInstance_0 as Generic_getInstance2dzloff21twgu,
  SEC1_getInstance_0 as SEC1_getInstancetsx59q1gmmuw,
  RAW_getInstance as RAW_getInstance6w2g7i9ezlqc,
  DER_getInstance as DER_getInstance3oucfl614d8vq,
  JWK_getInstance as JWK_getInstance1vb4ijyxqk5vi,
  PEM_getInstance as PEM_getInstance24te7accuki6c,
  Compressed_getInstance as Compressed_getInstance39ytpv5rliroh,
  Uncompressed_getInstance as Uncompressed_getInstance3murirr3ehg5l,
  Companion_getInstance_11 as Companion_getInstance2bz1ki9klkifr,
  Companion_getInstance_12 as Companion_getInstance38xsqxw2twd8s,
  Companion_getInstance_13 as Companion_getInstance3uo1munv0897j,
  DER_getInstance_1 as DER_getInstance104dnggcnnvsg,
  JWK_getInstance_2 as JWK_getInstance1ozkkdkhv1o3c,
  PEM_getInstance_1 as PEM_getInstance1vijv0odddhq0,
  RAW_getInstance_1 as RAW_getInstance32945w8b8bkzr,
  DER_getInstance_0 as DER_getInstance3ru7uc78xongu,
  JWK_getInstance_1 as JWK_getInstance35gns8go8ka5u,
  PEM_getInstance_0 as PEM_getInstance2ex1yxgjalzju,
  RAW_getInstance_0 as RAW_getInstance2hfv2qzzhsxcr,
  Companion_getInstance_14 as Companion_getInstance3rel27rzmvldh,
  Companion_getInstance_15 as Companion_getInstance3n2d9r31tjmkn,
  Companion_getInstance_16 as Companion_getInstance5z6vvchdk8hn,
  Companion_getInstance_17 as Companion_getInstancely5gjzor8ajf,
  Companion_getInstance_19 as Companion_getInstance10llrkthwp34h,
  Companion_getInstance_18 as Companion_getInstance3tnz80l6pgyha,
  Generic_getInstance_3 as Generic_getInstancem5lf4malmjha,
  PKCS1_getInstance_1 as PKCS1_getInstance19k028a4v3fpm,
  JWK_getInstance_4 as JWK_getInstancej0n9fwozazgg,
  Generic_getInstance_4 as Generic_getInstance2luq7btb3kdoc,
  PKCS1_getInstance_2 as PKCS1_getInstance2fkqy3cu5p8hv,
  Generic_getInstance_1 as Generic_getInstancevy11mh42cm2f,
  PKCS1_getInstance as PKCS1_getInstancesqk26xpkp5rr,
  JWK_getInstance_3 as JWK_getInstance2vd7amvhmoav,
  Generic_getInstance_2 as Generic_getInstance27i2bnn2xpu2b,
  PKCS1_getInstance_0 as PKCS1_getInstance3bza66qgm0r9x,
  SHA1_getInstance as SHA1_getInstance1rjs1ojrxlu80,
  SHA256_getInstance as SHA256_getInstance2a5z243btaw78,
  SHA384_getInstance as SHA384_getInstance3debhkblmoqb,
  SHA512_getInstance as SHA512_getInstance1jn3pm22cl2h,
  Companion_getInstance_21 as Companion_getInstance2bdqr44yo2gig,
  DER_getInstance_3 as DER_getInstance2k964198i6nde,
  JWK_getInstance_6 as JWK_getInstance33y66cswry1ym,
  PEM_getInstance_3 as PEM_getInstance21or7i7y33vbi,
  RAW_getInstance_3 as RAW_getInstance7unenglo8odj,
  DER_getInstance_2 as DER_getInstance1k5h5l8iovvdq,
  JWK_getInstance_5 as JWK_getInstancewwd4kr0pxi6t,
  PEM_getInstance_2 as PEM_getInstanced9g99vkigiab,
  RAW_getInstance_2 as RAW_getInstance3epkyylacjbe8,
  Companion_getInstance as Companion_getInstance3d9a0v4v0zpey,
  Companion_getInstance_0 as Companion_getInstance153arfkt3lsxz,
  CryptographySystem_getInstance as CryptographySystem_getInstance4e2ihcoisse,
  decodeFromByteString as decodeFromByteString1veldbkoki59m,
  encodeToByteString as encodeToByteString1rjdwjxki3z0f,
  decrypt_2 as decrypt2o3zs7dp3w95d,
  decrypt_1 as decrypt3hwdih5vd27qi,
  decrypt_4 as decryptxq9bufwmxpin,
  encrypt_1 as encrypt2g3oy757jomol,
  encrypt_2 as encrypt7tq01ojls55b,
  encrypt_4 as encrypt1aibnfovqyghl,
  decrypt_0 as decrypt1sr3k1l9x6aw1,
  encrypt_0 as encryptfxc438h48j3c,
  hash_0 as hashjnlxvf40xzu8,
  decryptWithIv_1 as decryptWithIv3h3thuwy18g5j,
  decryptWithIv_2 as decryptWithIv3ird57y0x0r2p,
  decryptWithIv_4 as decryptWithIv3iqe1hmfziy1s,
  encryptWithIv_2 as encryptWithIv88adecgfi2bv,
  encryptWithIv_4 as encryptWithIv1cxpexw2glwjf,
  encryptWithIv_1 as encryptWithIv3smc5sfyct38x,
  decryptWithIv_0 as decryptWithIv1ynz7y081itte,
  encryptWithIv_0 as encryptWithIvvkg9ayajn9un,
  deriveSecretToByteArray_0 as deriveSecretToByteArray2bsfoks8i4k3t,
  deriveSecret_0 as deriveSecret18i2524y7dofw,
  deriveSecret as deriveSecret3rkk3jmordz1x,
  generateSharedSecret as generateSharedSecret239pbqeivnllg,
  generateSignature_0 as generateSignature303hc74xucmsq,
  tryVerifySignature_0 as tryVerifySignaturekm086x20vjzp,
  verifySignature_0 as verifySignaturedhcob0ik6av6,
  cipher$default_1 as cipher$default2y5aefflbpjdv,
  cipher$default as cipher$default3q509ckoqqrme,
  keyGenerator$default as keyGenerator$default1pu4tzqcpl6ef,
  secretDerivation$default as secretDerivation$default1cr7tp2rz06op,
  secretDerivation$default_0 as secretDerivation$default2b4efvrzi4gs5,
  keyGenerator$default_0 as keyGenerator$defaultle8un2m52otl,
  keyPairGenerator$default as keyPairGenerator$default3pf8uyp97i55l,
};
//endregion

//# sourceMappingURL=cryptography-kotlin-cryptography-core.mjs.map
