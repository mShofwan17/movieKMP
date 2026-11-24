import {
  indexOfwa4w6635jewi as indexOf,
  _Char___init__impl__6a9atxrzocepzq3zgi as _Char___init__impl__6a9atx,
  indexOf1xbs558u7wr52 as indexOf_0,
  substringiqarkczpya5m as substring,
  Unit_getInstanceu5z48rdn3d6z as Unit_getInstance,
  Default_getInstance3483fw4bkmewo as Default_getInstance,
  orPromise1iucc2to2udt2 as orPromise,
  constructCallableReference23y65rf941mch as constructCallableReference,
  createThis2j2avj17cvnv2 as createThis,
  sequence2vgswtrxvqoa7 as sequence,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  VOID3gxj6tk5isa35 as VOID,
  decodeToString1x4faah2liw2p as decodeToString,
  equals2au1ep9vhcato as equals,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  encodeToByteArray1onwao0uakjfh as encodeToByteArray,
  arrayCopytctsywo3h7gj as arrayCopy,
  get_lastIndex2l2ov8zd410zb as get_lastIndex,
  Long2qws0ah9gnpki as Long,
  equalsLong28bsrfhwvd686 as equalsLong,
  fromInt1lka3ktyu79a4 as fromInt,
  add85si75olwt6n as add,
  compare2uud5j30pw5xc as compare,
  convertToIntofdoxh9bstof as convertToInt,
  subtract16cg4lfi29fq9 as subtract,
  IllegalArgumentException2asla15b5jaob as IllegalArgumentException,
  getStringHashCode26igk1bx568vk as getStringHashCode,
} from './kotlin-kotlin-stdlib.mjs';
import {
  decodeToByteString3tro9u5lq4c4p as decodeToByteString,
  indexOfx28b7bpt5qur as indexOf_1,
  indexOf16bk3d5tuwzca as indexOf_2,
  decodeToString2ede220pr5xir as decodeToString_0,
  decodeToByteString2vbian6p7mijx as decodeToByteString_0,
  UnsafeByteStringOperations_getInstance2r21wmnszr009 as UnsafeByteStringOperations_getInstance,
  ByteString10sanmoo66key as ByteString,
  encodeIntoByteArray24tt3572gw5h7 as encodeIntoByteArray,
} from './kotlinx-io-kotlinx-io-bytestring.mjs';
import {
  discardingSink3pwcbae4o9g4q as discardingSink,
  indexOf29nspdgx2e3ap as indexOf_3,
  readByteString2hnsbql6t4ads as readByteString,
  indexOf30pmfk6mje86v as indexOf_4,
} from './kotlinx-io-kotlinx-io-core.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
class Companion {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_serialization_pem_PemDocument_Companion_kezyh1_k$();
  }
  static new_dev_whyoleg_cryptography_serialization_pem_PemDocument_Companion_kezyh1_k$($box) {
    var $this = createThis(this, $box);
    Companion_instance = $this;
    return $this;
  }
  decode_gmof1w_k$(text) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'dev.whyoleg.cryptography.serialization.pem.tryDecodeFromString' call
      var beginIndex = indexOf(text, '-----BEGIN ', 0);
      if (beginIndex === -1) {
        tmp$ret$0 = null;
        break $l$block;
      }
      var beginLineEndIndex = indexOf_0(text, _Char___init__impl__6a9atx(10), beginIndex + 11 | 0);
      if (beginLineEndIndex === -1) {
        throwPemMissingNewLineAfterBeginLabel();
      }
      var beginSuffixIndex = indexOf(text, '-----', beginIndex + 11 | 0);
      if (beginSuffixIndex === -1 || beginSuffixIndex > beginLineEndIndex) {
        throwPemMissingBeginLabelSuffix();
      }
      var beginLabel = substring(text, beginIndex + 11 | 0, beginSuffixIndex);
      var endIndex = indexOf(text, '-----END ', beginLineEndIndex);
      if (endIndex === -1) {
        throwPemMissingEndLabel();
      }
      var endLineEndIndex = indexOf_0(text, _Char___init__impl__6a9atx(10), endIndex + 9 | 0);
      var endSuffixIndex = indexOf(text, '-----', endIndex + 9 | 0);
      if (endSuffixIndex === -1 || (!(endLineEndIndex === -1) && endSuffixIndex > endLineEndIndex)) {
        throwPemMissingEndLabelSuffix();
      }
      var endLabel = substring(text, endIndex + 9 | 0, endSuffixIndex);
      if (!(endLabel === beginLabel)) {
        throwPemBeginEndLabelMismatch(beginLabel, endLabel);
      }
      var tmp;
      if (endLineEndIndex === -1) {
        tmp = endSuffixIndex + 5 | 0;
      } else {
        tmp = endLineEndIndex + 1 | 0;
      }
      tmp$ret$0 = PemDocument.new_dev_whyoleg_cryptography_serialization_pem_PemDocument_762iym_k$(_PemLabel___init__impl__xifhtx(beginLabel), decodeToByteString(Default_getInstance().get_Pem_18jm9d_k$(), text, beginLineEndIndex + 1 | 0, endIndex));
    }
    var tmp0_elvis_lhs = tmp$ret$0;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      throwPemMissingBeginLabel();
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    return tmp_0;
  }
  decodeToSequence_kfpcuo_k$(text) {
    return sequence(PemDocument$Companion$decodeToSequence$slambda(text));
  }
  decode_eed1rm_k$(bytes) {
    return this.decode_6fr7xl_k$(UnsafeByteStringOperations_getInstance().wrapUnsafe_3fobxs_k$(bytes));
  }
  decodeToSequence_g0fo3u_k$(bytes) {
    return this.decodeToSequence_3g23xh_k$(UnsafeByteStringOperations_getInstance().wrapUnsafe_3fobxs_k$(bytes));
  }
  decode_6fr7xl_k$(bytes) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'dev.whyoleg.cryptography.serialization.pem.tryDecodeFromByteString' call
      var beginIndex = indexOf_1(bytes, get_BEGIN_BYTES(), 0);
      if (beginIndex === -1) {
        tmp$ret$0 = null;
        break $l$block;
      }
      var beginLineEndIndex = indexOf_2(bytes, 10, beginIndex + get_BEGIN_BYTES().length | 0);
      if (beginLineEndIndex === -1) {
        throwPemMissingNewLineAfterBeginLabel();
      }
      var beginSuffixIndex = indexOf_1(bytes, get_SUFFIX_BYTES(), beginIndex + get_BEGIN_BYTES().length | 0);
      if (beginSuffixIndex === -1 || beginSuffixIndex > beginLineEndIndex) {
        throwPemMissingBeginLabelSuffix();
      }
      var beginLabel = bytes.substring_d7lab3_k$(beginIndex + get_BEGIN_BYTES().length | 0, beginSuffixIndex);
      var endIndex = indexOf_1(bytes, get_END_BYTES(), beginLineEndIndex);
      if (endIndex === -1) {
        throwPemMissingEndLabel();
      }
      var endLineEndIndex = indexOf_2(bytes, 10, endIndex + get_END_BYTES().length | 0);
      var endSuffixIndex = indexOf_1(bytes, get_SUFFIX_BYTES(), endIndex + get_END_BYTES().length | 0);
      if (endSuffixIndex === -1 || (!(endLineEndIndex === -1) && endSuffixIndex > endLineEndIndex)) {
        throwPemMissingEndLabelSuffix();
      }
      var endLabel = bytes.substring_d7lab3_k$(endIndex + get_END_BYTES().length | 0, endSuffixIndex);
      if (!endLabel.equals(beginLabel)) {
        throwPemBeginEndLabelMismatch(decodeToString_0(beginLabel), decodeToString_0(endLabel));
      }
      var tmp;
      if (endLineEndIndex === -1) {
        tmp = endSuffixIndex + get_SUFFIX_BYTES().length | 0;
      } else {
        tmp = endLineEndIndex + 1 | 0;
      }
      tmp$ret$0 = PemDocument.new_dev_whyoleg_cryptography_serialization_pem_PemDocument_762iym_k$(_PemLabel___init__impl__xifhtx(decodeToString_0(beginLabel)), decodeToByteString_0(Default_getInstance().get_Pem_18jm9d_k$(), bytes, beginLineEndIndex + 1 | 0, endIndex));
    }
    var tmp0_elvis_lhs = tmp$ret$0;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      throwPemMissingBeginLabel();
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    return tmp_0;
  }
  decodeToSequence_3g23xh_k$(bytes) {
    return sequence(PemDocument$Companion$decodeToSequence$slambda_0(bytes));
  }
  decode_u71uhx_k$(source) {
    var tmp0_elvis_lhs = tryDecodeFromSource(source);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwPemMissingBeginLabel();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  decodeToSequence_oeds0x_k$(source) {
    return sequence(PemDocument$Companion$decodeToSequence$slambda_1(source));
  }
}
class PemDocument {
  constructor(label, content) {
    return new.target.new_dev_whyoleg_cryptography_serialization_pem_PemDocument_762iym_k$(label, content);
  }
  static new_dev_whyoleg_cryptography_serialization_pem_PemDocument_762iym_k$(label, content, $box) {
    Companion_getInstance();
    var $this = createThis(this, $box);
    $this.label_1 = label;
    $this.content_1 = content;
    return $this;
  }
  get_label_wnplto_k$() {
    return this.label_1;
  }
  get_content_h02jrk_k$() {
    return this.content_1;
  }
  static new_dev_whyoleg_cryptography_serialization_pem_PemDocument_wimngl_k$(label, content, $box) {
    Companion_getInstance();
    return this.new_dev_whyoleg_cryptography_serialization_pem_PemDocument_762iym_k$(label, ByteString.new_kotlinx_io_bytestring_ByteString_7stnyz_k$(content), $box);
  }
  encodeToString_om380u_k$() {
    return decodeToString(encodeToByteArrayImpl(this));
  }
  encodeToByteArray_s4v2f4_k$() {
    return encodeToByteArrayImpl(this);
  }
  encodeToByteString_sdbdca_k$() {
    return UnsafeByteStringOperations_getInstance().wrapUnsafe_3fobxs_k$(encodeToByteArrayImpl(this));
  }
  encodeToSink_a1tj8r_k$(sink) {
    return sink.write$default_h97jte_k$(encodeToByteArrayImpl(this));
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof PemDocument))
      return false;
    if (!equals(new PemLabel(this.label_1), new PemLabel(other.label_1)))
      return false;
    if (!this.content_1.equals(other.content_1))
      return false;
    return true;
  }
  hashCode() {
    var result = PemLabel__hashCode_impl_aw96zu(this.label_1);
    result = imul(31, result) + this.content_1.hashCode() | 0;
    return result;
  }
  toString() {
    return 'PemDocument(label=' + _PemLabel___get_value__impl__2g6opl(this.label_1) + ', content=' + this.content_1.toString() + ')';
  }
}
class Companion_0 {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_serialization_pem_PemLabel_Companion_jf7lx5_k$();
  }
  static new_dev_whyoleg_cryptography_serialization_pem_PemLabel_Companion_jf7lx5_k$($box) {
    var $this = createThis(this, $box);
    Companion_instance_0 = $this;
    $this.PublicKey_1 = _PemLabel___init__impl__xifhtx('PUBLIC KEY');
    $this.PrivateKey_1 = _PemLabel___init__impl__xifhtx('PRIVATE KEY');
    $this.EncryptedPrivateKey_1 = _PemLabel___init__impl__xifhtx('ENCRYPTED PRIVATE KEY');
    $this.RsaPublicKey_1 = _PemLabel___init__impl__xifhtx('RSA PUBLIC KEY');
    $this.RsaPrivateKey_1 = _PemLabel___init__impl__xifhtx('RSA PRIVATE KEY');
    $this.EcPrivateKey_1 = _PemLabel___init__impl__xifhtx('EC PRIVATE KEY');
    $this.Certificate_1 = _PemLabel___init__impl__xifhtx('CERTIFICATE');
    $this.CertificateRequest_1 = _PemLabel___init__impl__xifhtx('CERTIFICATE REQUEST');
    $this.DhParameters_1 = _PemLabel___init__impl__xifhtx('DH PARAMETERS');
    $this.DsaParameters_1 = _PemLabel___init__impl__xifhtx('DSA PARAMETERS');
    return $this;
  }
  get_PublicKey_bnjdsy_k$() {
    return this.PublicKey_1;
  }
  get_PrivateKey_96ev0q_k$() {
    return this.PrivateKey_1;
  }
  get_EncryptedPrivateKey_uthg6g_k$() {
    return this.EncryptedPrivateKey_1;
  }
  get_RsaPublicKey_xtckkw_k$() {
    return this.RsaPublicKey_1;
  }
  get_RsaPrivateKey_k95cm4_k$() {
    return this.RsaPrivateKey_1;
  }
  get_EcPrivateKey_9ka0zw_k$() {
    return this.EcPrivateKey_1;
  }
  get_Certificate_x2ri0v_k$() {
    return this.Certificate_1;
  }
  get_CertificateRequest_yzetg2_k$() {
    return this.CertificateRequest_1;
  }
  get_DhParameters_dwehns_k$() {
    return this.DhParameters_1;
  }
  get_DsaParameters_bv30mc_k$() {
    return this.DsaParameters_1;
  }
}
class PemLabel {
  constructor(value) {
    Companion_getInstance_0();
    this.value_1 = value;
  }
  toString() {
    return PemLabel__toString_impl_auwpt1(this.value_1);
  }
  hashCode() {
    return PemLabel__hashCode_impl_aw96zu(this.value_1);
  }
  equals(other) {
    return PemLabel__equals_impl_42ic6q(this.value_1, other);
  }
}
//endregion
function get_BEGIN_BYTES() {
  _init_properties_PemDocument_kt__bib5cv();
  return BEGIN_BYTES;
}
var BEGIN_BYTES;
function get_END_BYTES() {
  _init_properties_PemDocument_kt__bib5cv();
  return END_BYTES;
}
var END_BYTES;
function get_SUFFIX_BYTES() {
  _init_properties_PemDocument_kt__bib5cv();
  return SUFFIX_BYTES;
}
var SUFFIX_BYTES;
function PemDocument$Companion$decodeToSequence$slambda($text) {
  return constructCallableReference(($this$sequence, $completion) => orPromise($completion, function *($completion) {
    var startIndex = 0;
    $l$loop: while (startIndex < $text.length) {
      var tmp0 = $text;
      var tmp2 = startIndex;
      var tmp$ret$0;
      $l$block: {
        // Inline function 'dev.whyoleg.cryptography.serialization.pem.tryDecodeFromString' call
        var beginIndex = indexOf(tmp0, '-----BEGIN ', tmp2);
        if (beginIndex === -1) {
          tmp$ret$0 = null;
          break $l$block;
        }
        var beginLineEndIndex = indexOf_0(tmp0, _Char___init__impl__6a9atx(10), beginIndex + 11 | 0);
        if (beginLineEndIndex === -1) {
          throwPemMissingNewLineAfterBeginLabel();
        }
        var beginSuffixIndex = indexOf(tmp0, '-----', beginIndex + 11 | 0);
        if (beginSuffixIndex === -1 || beginSuffixIndex > beginLineEndIndex) {
          throwPemMissingBeginLabelSuffix();
        }
        var beginLabel = substring(tmp0, beginIndex + 11 | 0, beginSuffixIndex);
        var endIndex = indexOf(tmp0, '-----END ', beginLineEndIndex);
        if (endIndex === -1) {
          throwPemMissingEndLabel();
        }
        var endLineEndIndex = indexOf_0(tmp0, _Char___init__impl__6a9atx(10), endIndex + 9 | 0);
        var endSuffixIndex = indexOf(tmp0, '-----', endIndex + 9 | 0);
        if (endSuffixIndex === -1 || (!(endLineEndIndex === -1) && endSuffixIndex > endLineEndIndex)) {
          throwPemMissingEndLabelSuffix();
        }
        var endLabel = substring(tmp0, endIndex + 9 | 0, endSuffixIndex);
        if (!(endLabel === beginLabel)) {
          throwPemBeginEndLabelMismatch(beginLabel, endLabel);
        }
        var tmp;
        if (endLineEndIndex === -1) {
          tmp = endSuffixIndex + 5 | 0;
        } else {
          tmp = endLineEndIndex + 1 | 0;
        }
        startIndex = tmp;
        tmp$ret$0 = PemDocument.new_dev_whyoleg_cryptography_serialization_pem_PemDocument_762iym_k$(_PemLabel___init__impl__xifhtx(beginLabel), decodeToByteString(Default_getInstance().get_Pem_18jm9d_k$(), tmp0, beginLineEndIndex + 1 | 0, endIndex));
      }
      var tmp0_elvis_lhs = tmp$ret$0;
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        break $l$loop;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      yield* $this$sequence.yield_3xhcex_k$(tmp_0, $completion);
    }
    return Unit_getInstance();
  }), 1);
}
function PemDocument$Companion$decodeToSequence$slambda_0($bytes) {
  return constructCallableReference(($this$sequence, $completion) => orPromise($completion, function *($completion) {
    var startIndex = 0;
    $l$loop: while (startIndex < $bytes.get_size_woubt6_k$()) {
      var tmp0 = $bytes;
      var tmp2 = startIndex;
      var tmp$ret$0;
      $l$block: {
        // Inline function 'dev.whyoleg.cryptography.serialization.pem.tryDecodeFromByteString' call
        var beginIndex = indexOf_1(tmp0, get_BEGIN_BYTES(), tmp2);
        if (beginIndex === -1) {
          tmp$ret$0 = null;
          break $l$block;
        }
        var beginLineEndIndex = indexOf_2(tmp0, 10, beginIndex + get_BEGIN_BYTES().length | 0);
        if (beginLineEndIndex === -1) {
          throwPemMissingNewLineAfterBeginLabel();
        }
        var beginSuffixIndex = indexOf_1(tmp0, get_SUFFIX_BYTES(), beginIndex + get_BEGIN_BYTES().length | 0);
        if (beginSuffixIndex === -1 || beginSuffixIndex > beginLineEndIndex) {
          throwPemMissingBeginLabelSuffix();
        }
        var beginLabel = tmp0.substring_d7lab3_k$(beginIndex + get_BEGIN_BYTES().length | 0, beginSuffixIndex);
        var endIndex = indexOf_1(tmp0, get_END_BYTES(), beginLineEndIndex);
        if (endIndex === -1) {
          throwPemMissingEndLabel();
        }
        var endLineEndIndex = indexOf_2(tmp0, 10, endIndex + get_END_BYTES().length | 0);
        var endSuffixIndex = indexOf_1(tmp0, get_SUFFIX_BYTES(), endIndex + get_END_BYTES().length | 0);
        if (endSuffixIndex === -1 || (!(endLineEndIndex === -1) && endSuffixIndex > endLineEndIndex)) {
          throwPemMissingEndLabelSuffix();
        }
        var endLabel = tmp0.substring_d7lab3_k$(endIndex + get_END_BYTES().length | 0, endSuffixIndex);
        if (!endLabel.equals(beginLabel)) {
          throwPemBeginEndLabelMismatch(decodeToString_0(beginLabel), decodeToString_0(endLabel));
        }
        var tmp;
        if (endLineEndIndex === -1) {
          tmp = endSuffixIndex + get_SUFFIX_BYTES().length | 0;
        } else {
          tmp = endLineEndIndex + 1 | 0;
        }
        startIndex = tmp;
        tmp$ret$0 = PemDocument.new_dev_whyoleg_cryptography_serialization_pem_PemDocument_762iym_k$(_PemLabel___init__impl__xifhtx(decodeToString_0(beginLabel)), decodeToByteString_0(Default_getInstance().get_Pem_18jm9d_k$(), tmp0, beginLineEndIndex + 1 | 0, endIndex));
      }
      var tmp0_elvis_lhs = tmp$ret$0;
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        break $l$loop;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      yield* $this$sequence.yield_3xhcex_k$(tmp_0, $completion);
    }
    return Unit_getInstance();
  }), 1);
}
function PemDocument$Companion$decodeToSequence$slambda_1($source) {
  return constructCallableReference(($this$sequence, $completion) => orPromise($completion, function *($completion) {
    $l$loop: while (!$source.exhausted_p1jt55_k$()) {
      var tmp0_elvis_lhs = tryDecodeFromSource($source);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        break $l$loop;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      yield* $this$sequence.yield_3xhcex_k$(tmp, $completion);
    }
    return Unit_getInstance();
  }), 1);
}
var Companion_instance;
function Companion_getInstance() {
  if (Companion_instance === VOID)
    Companion.new_dev_whyoleg_cryptography_serialization_pem_PemDocument_Companion_kezyh1_k$();
  return Companion_instance;
}
function encodeToByteArrayImpl(_this__u8e3s4) {
  _init_properties_PemDocument_kt__bib5cv();
  var label = encodeToByteArray(_PemLabel___get_value__impl__2g6opl(_this__u8e3s4.label_1));
  var encodedSize = encodeToByteArrayImpl$base64EncodedSize(_this__u8e3s4.content_1.get_size_woubt6_k$());
  var array = new Int8Array(((((((((get_BEGIN_BYTES().length + label.length | 0) + get_SUFFIX_BYTES().length | 0) + 1 | 0) + encodedSize | 0) + 1 | 0) + get_END_BYTES().length | 0) + label.length | 0) + get_SUFFIX_BYTES().length | 0) + 1 | 0);
  // Inline function 'kotlin.collections.copyInto' call
  var this_0 = get_BEGIN_BYTES();
  var endIndex = this_0.length;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var tmp = this_0;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  arrayCopy(tmp, array, 0, 0, endIndex);
  // Inline function 'kotlin.collections.copyInto' call
  var destinationOffset = get_BEGIN_BYTES().length;
  var endIndex_0 = label.length;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var tmp_0 = label;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  arrayCopy(tmp_0, array, destinationOffset, 0, endIndex_0);
  var tmp0 = get_SUFFIX_BYTES();
  // Inline function 'kotlin.collections.copyInto' call
  var destinationOffset_0 = get_BEGIN_BYTES().length + label.length | 0;
  var endIndex_1 = tmp0.length;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var tmp_1 = tmp0;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  arrayCopy(tmp_1, array, destinationOffset_0, 0, endIndex_1);
  array[(get_BEGIN_BYTES().length + label.length | 0) + get_SUFFIX_BYTES().length | 0] = 10;
  encodeIntoByteArray(Default_getInstance().get_Pem_18jm9d_k$(), _this__u8e3s4.content_1, array, ((get_BEGIN_BYTES().length + label.length | 0) + get_SUFFIX_BYTES().length | 0) + 1 | 0);
  array[(((get_BEGIN_BYTES().length + label.length | 0) + get_SUFFIX_BYTES().length | 0) + 1 | 0) + encodedSize | 0] = 10;
  var tmp0_0 = get_END_BYTES();
  // Inline function 'kotlin.collections.copyInto' call
  var destinationOffset_1 = ((((get_BEGIN_BYTES().length + label.length | 0) + get_SUFFIX_BYTES().length | 0) + 1 | 0) + encodedSize | 0) + 1 | 0;
  var endIndex_2 = tmp0_0.length;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var tmp_2 = tmp0_0;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  arrayCopy(tmp_2, array, destinationOffset_1, 0, endIndex_2);
  // Inline function 'kotlin.collections.copyInto' call
  var destinationOffset_2 = (((((get_BEGIN_BYTES().length + label.length | 0) + get_SUFFIX_BYTES().length | 0) + 1 | 0) + encodedSize | 0) + 1 | 0) + get_END_BYTES().length | 0;
  var endIndex_3 = label.length;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var tmp_3 = label;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  arrayCopy(tmp_3, array, destinationOffset_2, 0, endIndex_3);
  var tmp0_1 = get_SUFFIX_BYTES();
  // Inline function 'kotlin.collections.copyInto' call
  var destinationOffset_3 = ((((((get_BEGIN_BYTES().length + label.length | 0) + get_SUFFIX_BYTES().length | 0) + 1 | 0) + encodedSize | 0) + 1 | 0) + get_END_BYTES().length | 0) + label.length | 0;
  var endIndex_4 = tmp0_1.length;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var tmp_4 = tmp0_1;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  arrayCopy(tmp_4, array, destinationOffset_3, 0, endIndex_4);
  array[get_lastIndex(array)] = 10;
  return array;
}
function tryDecodeFromString(text, startIndex, saveEndIndex) {
  _init_properties_PemDocument_kt__bib5cv();
  var beginIndex = indexOf(text, '-----BEGIN ', startIndex);
  if (beginIndex === -1)
    return null;
  var beginLineEndIndex = indexOf_0(text, _Char___init__impl__6a9atx(10), beginIndex + 11 | 0);
  if (beginLineEndIndex === -1) {
    throwPemMissingNewLineAfterBeginLabel();
  }
  var beginSuffixIndex = indexOf(text, '-----', beginIndex + 11 | 0);
  if (beginSuffixIndex === -1 || beginSuffixIndex > beginLineEndIndex) {
    throwPemMissingBeginLabelSuffix();
  }
  var beginLabel = substring(text, beginIndex + 11 | 0, beginSuffixIndex);
  var endIndex = indexOf(text, '-----END ', beginLineEndIndex);
  if (endIndex === -1) {
    throwPemMissingEndLabel();
  }
  var endLineEndIndex = indexOf_0(text, _Char___init__impl__6a9atx(10), endIndex + 9 | 0);
  var endSuffixIndex = indexOf(text, '-----', endIndex + 9 | 0);
  if (endSuffixIndex === -1 || (!(endLineEndIndex === -1) && endSuffixIndex > endLineEndIndex)) {
    throwPemMissingEndLabelSuffix();
  }
  var endLabel = substring(text, endIndex + 9 | 0, endSuffixIndex);
  if (!(endLabel === beginLabel)) {
    throwPemBeginEndLabelMismatch(beginLabel, endLabel);
  }
  var tmp;
  if (endLineEndIndex === -1) {
    tmp = endSuffixIndex + 5 | 0;
  } else {
    tmp = endLineEndIndex + 1 | 0;
  }
  saveEndIndex(tmp);
  return PemDocument.new_dev_whyoleg_cryptography_serialization_pem_PemDocument_762iym_k$(_PemLabel___init__impl__xifhtx(beginLabel), decodeToByteString(Default_getInstance().get_Pem_18jm9d_k$(), text, beginLineEndIndex + 1 | 0, endIndex));
}
function throwPemMissingBeginLabel() {
  _init_properties_PemDocument_kt__bib5cv();
  throwPemInvalid('missing BEGIN label');
}
function tryDecodeFromByteString(bytes, startIndex, saveEndIndex) {
  _init_properties_PemDocument_kt__bib5cv();
  var beginIndex = indexOf_1(bytes, get_BEGIN_BYTES(), startIndex);
  if (beginIndex === -1)
    return null;
  var beginLineEndIndex = indexOf_2(bytes, 10, beginIndex + get_BEGIN_BYTES().length | 0);
  if (beginLineEndIndex === -1) {
    throwPemMissingNewLineAfterBeginLabel();
  }
  var beginSuffixIndex = indexOf_1(bytes, get_SUFFIX_BYTES(), beginIndex + get_BEGIN_BYTES().length | 0);
  if (beginSuffixIndex === -1 || beginSuffixIndex > beginLineEndIndex) {
    throwPemMissingBeginLabelSuffix();
  }
  var beginLabel = bytes.substring_d7lab3_k$(beginIndex + get_BEGIN_BYTES().length | 0, beginSuffixIndex);
  var endIndex = indexOf_1(bytes, get_END_BYTES(), beginLineEndIndex);
  if (endIndex === -1) {
    throwPemMissingEndLabel();
  }
  var endLineEndIndex = indexOf_2(bytes, 10, endIndex + get_END_BYTES().length | 0);
  var endSuffixIndex = indexOf_1(bytes, get_SUFFIX_BYTES(), endIndex + get_END_BYTES().length | 0);
  if (endSuffixIndex === -1 || (!(endLineEndIndex === -1) && endSuffixIndex > endLineEndIndex)) {
    throwPemMissingEndLabelSuffix();
  }
  var endLabel = bytes.substring_d7lab3_k$(endIndex + get_END_BYTES().length | 0, endSuffixIndex);
  if (!endLabel.equals(beginLabel)) {
    throwPemBeginEndLabelMismatch(decodeToString_0(beginLabel), decodeToString_0(endLabel));
  }
  var tmp;
  if (endLineEndIndex === -1) {
    tmp = endSuffixIndex + get_SUFFIX_BYTES().length | 0;
  } else {
    tmp = endLineEndIndex + 1 | 0;
  }
  saveEndIndex(tmp);
  return PemDocument.new_dev_whyoleg_cryptography_serialization_pem_PemDocument_762iym_k$(_PemLabel___init__impl__xifhtx(decodeToString_0(beginLabel)), decodeToByteString_0(Default_getInstance().get_Pem_18jm9d_k$(), bytes, beginLineEndIndex + 1 | 0, endIndex));
}
function tryDecodeFromSource(source) {
  _init_properties_PemDocument_kt__bib5cv();
  var beginIndex = tryDecodeFromSource$indexOf(source, get_BEGIN_BYTES());
  if (equalsLong(beginIndex, Long.new_kotlin_Long_147cmg_k$(-1, -1))) {
    source.transferTo_lu4ka2_k$(discardingSink());
    return null;
  }
  // Inline function 'kotlin.Long.plus' call
  var other = get_BEGIN_BYTES().length;
  var tmp$ret$0 = add(beginIndex, fromInt(other));
  source.skip_bgd4sf_k$(tmp$ret$0);
  var beginLineEndIndex = indexOf_3(source, 10);
  if (equalsLong(beginLineEndIndex, Long.new_kotlin_Long_147cmg_k$(-1, -1))) {
    throwPemMissingNewLineAfterBeginLabel();
  }
  var beginSuffixIndex = tryDecodeFromSource$indexOf(source, get_SUFFIX_BYTES());
  if (equalsLong(beginSuffixIndex, Long.new_kotlin_Long_147cmg_k$(-1, -1)) || compare(beginSuffixIndex, beginLineEndIndex) > 0) {
    throwPemMissingBeginLabelSuffix();
  }
  var beginLabel = readByteString(source, convertToInt(beginSuffixIndex));
  // Inline function 'kotlin.Long.plus' call
  var tmp$ret$1 = add(beginLineEndIndex, fromInt(1));
  source.skip_bgd4sf_k$(subtract(tmp$ret$1, beginSuffixIndex));
  var endIndex = tryDecodeFromSource$indexOf(source, get_END_BYTES());
  if (equalsLong(endIndex, Long.new_kotlin_Long_147cmg_k$(-1, -1))) {
    throwPemMissingEndLabel();
  }
  var base64Content = readByteString(source, convertToInt(endIndex));
  source.skip_bgd4sf_k$(fromInt(get_END_BYTES().length));
  var endLineEndIndex = indexOf_3(source, 10);
  var endSuffixIndex = tryDecodeFromSource$indexOf(source, get_SUFFIX_BYTES());
  if (equalsLong(endSuffixIndex, Long.new_kotlin_Long_147cmg_k$(-1, -1)) || (!equalsLong(endLineEndIndex, Long.new_kotlin_Long_147cmg_k$(-1, -1)) && compare(endSuffixIndex, endLineEndIndex) > 0)) {
    throwPemMissingEndLabelSuffix();
  }
  var endLabel = readByteString(source, convertToInt(endSuffixIndex));
  if (equalsLong(endLineEndIndex, Long.new_kotlin_Long_147cmg_k$(-1, -1))) {
    source.skip_bgd4sf_k$(fromInt(get_SUFFIX_BYTES().length));
  } else {
    // Inline function 'kotlin.Long.plus' call
    var tmp$ret$2 = add(endLineEndIndex, fromInt(1));
    source.skip_bgd4sf_k$(subtract(tmp$ret$2, endSuffixIndex));
  }
  if (!endLabel.equals(beginLabel)) {
    throwPemBeginEndLabelMismatch(decodeToString_0(beginLabel), decodeToString_0(endLabel));
  }
  return PemDocument.new_dev_whyoleg_cryptography_serialization_pem_PemDocument_762iym_k$(_PemLabel___init__impl__xifhtx(decodeToString_0(beginLabel)), decodeToByteString_0(Default_getInstance().get_Pem_18jm9d_k$(), base64Content));
}
function throwPemMissingNewLineAfterBeginLabel() {
  _init_properties_PemDocument_kt__bib5cv();
  throwPemInvalid('missing new line after BEGIN label');
}
function throwPemMissingBeginLabelSuffix() {
  _init_properties_PemDocument_kt__bib5cv();
  throwPemInvalid('missing BEGIN label suffix');
}
function throwPemMissingEndLabel() {
  _init_properties_PemDocument_kt__bib5cv();
  throwPemInvalid('missing END label');
}
function throwPemMissingEndLabelSuffix() {
  _init_properties_PemDocument_kt__bib5cv();
  throwPemInvalid('missing END label suffix');
}
function throwPemBeginEndLabelMismatch(beginLabel, endLabel) {
  _init_properties_PemDocument_kt__bib5cv();
  throwPemInvalid('BEGIN(' + beginLabel + ') and END(' + endLabel + ') labels mismatch');
}
function throwPemInvalid(message) {
  _init_properties_PemDocument_kt__bib5cv();
  throw IllegalArgumentException.new_kotlin_IllegalArgumentException_f8t9r5_k$('Invalid PEM format: ' + message);
}
function encodeToByteArrayImpl$base64EncodedSize(sourceSize) {
  var groups = sourceSize / 3 | 0;
  var trailingBytes = sourceSize % 3 | 0;
  var size = imul(groups, 4);
  if (!(trailingBytes === 0)) {
    size = size + 4 | 0;
  }
  if (size < 0) {
    throw IllegalArgumentException.new_kotlin_IllegalArgumentException_f8t9r5_k$('Input is too big');
  }
  size = size + imul((size - 1 | 0) / 64 | 0, 2) | 0;
  if (size < 0) {
    throw IllegalArgumentException.new_kotlin_IllegalArgumentException_f8t9r5_k$('Input is too big');
  }
  return size;
}
function tryDecodeFromSource$indexOf(_this__u8e3s4, bytes, startIndex) {
  startIndex = startIndex === VOID ? Long.new_kotlin_Long_147cmg_k$(0, 0) : startIndex;
  return indexOf_4(_this__u8e3s4, UnsafeByteStringOperations_getInstance().wrapUnsafe_3fobxs_k$(bytes), startIndex);
}
var properties_initialized_PemDocument_kt_iw02jh;
function _init_properties_PemDocument_kt__bib5cv() {
  if (!properties_initialized_PemDocument_kt_iw02jh) {
    properties_initialized_PemDocument_kt_iw02jh = true;
    BEGIN_BYTES = encodeToByteArray('-----BEGIN ');
    END_BYTES = encodeToByteArray('-----END ');
    SUFFIX_BYTES = encodeToByteArray('-----');
  }
}
function _PemLabel___init__impl__xifhtx(value) {
  return value;
}
function _PemLabel___get_value__impl__2g6opl($this) {
  return $this;
}
var Companion_instance_0;
function Companion_getInstance_0() {
  if (Companion_instance_0 === VOID)
    Companion_0.new_dev_whyoleg_cryptography_serialization_pem_PemLabel_Companion_jf7lx5_k$();
  return Companion_instance_0;
}
function PemLabel__toString_impl_auwpt1($this) {
  return 'PemLabel(value=' + $this + ')';
}
function PemLabel__hashCode_impl_aw96zu($this) {
  return getStringHashCode($this);
}
function PemLabel__equals_impl_42ic6q($this, other) {
  if (!(other instanceof PemLabel))
    return false;
  if (!($this === other.value_1))
    return false;
  return true;
}
//region block: post-declaration
initMetadataForCompanion(Companion);
initMetadataForClass(PemDocument, 'PemDocument');
initMetadataForCompanion(Companion_0);
initMetadataForClass(PemLabel, 'PemLabel');
//endregion
//region block: exports
export {
  PemDocument as PemDocument3hasxe838waa9,
  PemLabel as PemLabel2vn9143gxwn6e,
  PemLabel__toString_impl_auwpt1 as PemLabel__toString_impl_auwpt16u8f3e7qhffe,
  Companion_getInstance as Companion_getInstance10jkiay585w8h,
  Companion_getInstance_0 as Companion_getInstancej72x2kyb8m41,
};
//endregion

//# sourceMappingURL=cryptography-kotlin-cryptography-serialization-pem.mjs.map
