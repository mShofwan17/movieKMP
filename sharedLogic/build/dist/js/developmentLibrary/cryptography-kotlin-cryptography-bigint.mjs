import {
  createThis2j2avj17cvnv2 as createThis,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  VOID3gxj6tk5isa35 as VOID,
  toHexString5bhtjxqec7ow as toHexString,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  Number22v9c06q24q04 as Number_0,
  toByte1ihbgyfg5m688 as toByte,
  toShort1i0zdidogv7z as toShort,
  toInt2q8uldh7sc951 as toInt,
  toLongkk4waq8msp1k as toLong,
  toDouble1kn912gjoizjp as toDouble,
  getStringHashCode26igk1bx568vk as getStringHashCode,
  Comparable198qfk8pnblz0 as Comparable,
  getAssociatedObjectIdbkjrzq7ou3z9 as getAssociatedObjectId,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  arrayCopytctsywo3h7gj as arrayCopy,
  Unit_getInstanceu5z48rdn3d6z as Unit_getInstance,
  Long2qws0ah9gnpki as Long,
  equalsLong28bsrfhwvd686 as equalsLong,
  IllegalArgumentException2asla15b5jaob as IllegalArgumentException,
  toString1pkumu07cwy4m as toString,
  isBlank1dvkhjjvox3p0 as isBlank,
  IllegalStateExceptionkoljg5n0nrlr as IllegalStateException,
  hexToByteArrayj26yk4970vc7 as hexToByteArray,
  toByte4i43936u611k as toByte_0,
} from './kotlin-kotlin-stdlib.mjs';
import {
  STRING_getInstance7xungxdjbzv as STRING_getInstance,
  PrimitiveSerialDescriptor3egfp53lutxj2 as PrimitiveSerialDescriptor,
  KSerializerzf77vz1967fq as KSerializer,
  SerializableWithd2dap36updxd as SerializableWith,
} from './kotlinx-serialization-kotlinx-serialization-core.mjs';
//region block: imports
//endregion
//region block: pre-declaration
class BigIntAsStringSerializer {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_bigint_BigIntAsStringSerializer_moxup7_k$();
  }
  static new_dev_whyoleg_cryptography_bigint_BigIntAsStringSerializer_moxup7_k$($box) {
    var $this = createThis(this, $box);
    BigIntAsStringSerializer_instance = $this;
    $this.descriptor_1 = PrimitiveSerialDescriptor('BigInt', STRING_getInstance());
    return $this;
  }
  get_descriptor_wjt6a0_k$() {
    return this.descriptor_1;
  }
  serialize_ybumcl_k$(encoder, value) {
    encoder.encodeString_424b5v_k$(value.toString());
  }
  serialize_5ase3y_k$(encoder, value) {
    return this.serialize_ybumcl_k$(encoder, value instanceof BigInt_0 ? value : THROW_CCE());
  }
  deserialize_sy6x50_k$(decoder) {
    return toBigInt_3(decoder.decodeString_x3hxsx_k$());
  }
}
class Companion {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_bigint_BigInt_Companion_2l27t7_k$();
  }
  static new_dev_whyoleg_cryptography_bigint_BigInt_Companion_2l27t7_k$($box) {
    var $this = createThis(this, $box);
    Companion_instance = $this;
    $this.ZERO_1 = BigInt_0.new_dev_whyoleg_cryptography_bigint_BigInt_ijab80_k$(BigInt(0));
    return $this;
  }
  get_ZERO_wodlgx_k$() {
    return this.ZERO_1;
  }
  fromMagnitude_nw172_k$(sign, magnitude) {
    // Inline function 'kotlin.collections.isEmpty' call
    if (magnitude.length === 0)
      return this.ZERO_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.all' call
      var inductionVariable = 0;
      var last = magnitude.length;
      while (inductionVariable < last) {
        var element = magnitude[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        if (!(element === 0)) {
          tmp$ret$1 = false;
          break $l$block;
        }
      }
      tmp$ret$1 = true;
    }
    if (tmp$ret$1)
      return this.ZERO_1;
    var jsBigInt = BigInt('0x' + toHexString(magnitude));
    return sign === -1 ? BigInt_0.new_dev_whyoleg_cryptography_bigint_BigInt_ijab80_k$(jsBigIntNegate(jsBigInt)) : BigInt_0.new_dev_whyoleg_cryptography_bigint_BigInt_ijab80_k$(jsBigInt);
  }
  serializer_9w0wvi_k$() {
    return BigIntAsStringSerializer_getInstance();
  }
}
class BigInt_0 extends Number_0 {
  constructor(jsBigInt) {
    return new.target.new_dev_whyoleg_cryptography_bigint_BigInt_ijab80_k$(jsBigInt);
  }
  static new_dev_whyoleg_cryptography_bigint_BigInt_ijab80_k$(jsBigInt, $box) {
    Companion_getInstance();
    var $this = this.new_kotlin_Number_gdi5g_k$($box);
    $this.jsBigInt_1 = jsBigInt;
    return $this;
  }
  get_jsBigInt_w033h4_k$() {
    return this.jsBigInt_1;
  }
  get_sign_woubd2_k$() {
    return jsBigIntSign(this.jsBigInt_1);
  }
  get_absoluteValue_ed7wtr_k$() {
    return this.get_sign_woubd2_k$() >= 0 ? this : BigInt_0.new_dev_whyoleg_cryptography_bigint_BigInt_ijab80_k$(jsBigIntNegate(this.jsBigInt_1));
  }
  magnitudeToByteArray_jaoh16_k$() {
    return decodeHexToByteArray(this.get_absoluteValue_ed7wtr_k$().jsBigInt_1.toString(16));
  }
  unaryPlus_g9fn1l_k$() {
    return this;
  }
  unaryMinus_6uz0qp_k$() {
    return this.get_sign_woubd2_k$() === 0 ? this : BigInt_0.new_dev_whyoleg_cryptography_bigint_BigInt_ijab80_k$(jsBigIntNegate(this.jsBigInt_1));
  }
  compareTo_z0c5i0_k$(other) {
    return this.compareTo_5xro4o_k$(toBigInt_0(other));
  }
  compareTo_ka11ag_k$(other) {
    return this.compareTo_5xro4o_k$(toBigInt_1(other));
  }
  compareTo_7hwzko_k$(other) {
    return this.compareTo_5xro4o_k$(toBigInt(other));
  }
  compareTo_9jj042_k$(other) {
    return this.compareTo_5xro4o_k$(toBigInt_2(other));
  }
  compareTo_5xro4o_k$(other) {
    return jsBigIntCompareTo(this.jsBigInt_1, other.jsBigInt_1);
  }
  compareTo_hpufkf_k$(other) {
    return this.compareTo_5xro4o_k$(other instanceof BigInt_0 ? other : THROW_CCE());
  }
  toByte_edm0nx_k$() {
    return toByte(jsBigIntAsInt(this.jsBigInt_1, 8).toString());
  }
  toShort_ja8oqn_k$() {
    return toShort(jsBigIntAsInt(this.jsBigInt_1, 16).toString());
  }
  toInt_1tsl84_k$() {
    return toInt(jsBigIntAsInt(this.jsBigInt_1, 32).toString());
  }
  toLong_edfucp_k$() {
    return toLong(jsBigIntAsInt(this.jsBigInt_1, 64).toString());
  }
  toFloat_jhbgwv_k$() {
    // Inline function 'kotlin.text.toFloat' call
    var this_0 = this.toString();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toDouble(this_0);
  }
  toDouble_ygsx0s_k$() {
    return toDouble(this.toString());
  }
  toString() {
    return this.jsBigInt_1.toString();
  }
  hashCode() {
    return getStringHashCode(this.jsBigInt_1.toString(36));
  }
  equals(other) {
    if (!(other instanceof BigInt_0))
      return false;
    return jsBigIntEquals(this.jsBigInt_1, other.jsBigInt_1);
  }
}
//endregion
var BigIntAsStringSerializer_instance;
function BigIntAsStringSerializer_getInstance() {
  if (BigIntAsStringSerializer_instance === VOID)
    BigIntAsStringSerializer.new_dev_whyoleg_cryptography_bigint_BigIntAsStringSerializer_moxup7_k$();
  return BigIntAsStringSerializer_instance;
}
var Companion_instance;
function Companion_getInstance() {
  if (Companion_instance === VOID)
    Companion.new_dev_whyoleg_cryptography_bigint_BigInt_Companion_2l27t7_k$();
  return Companion_instance;
}
function encodeToByteArray(_this__u8e3s4) {
  var positive = _this__u8e3s4.compareTo_7hwzko_k$(0) >= 0;
  var bytes = positive ? decodeHexToByteArray(_this__u8e3s4.jsBigInt_1.toString(16)) : invertTwoComplement(decodeHexToByteArray(jsBigIntNegate(_this__u8e3s4.jsBigInt_1).toString(16)));
  var firstBytePositive = bytes[0] >= 0;
  if (positive === firstBytePositive)
    return bytes;
  // Inline function 'kotlin.also' call
  var this_0 = new Int8Array(bytes.length + 1 | 0);
  this_0[0] = positive ? 0 : -1;
  // Inline function 'kotlin.collections.copyInto' call
  var endIndex = bytes.length;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var tmp = bytes;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  arrayCopy(tmp, this_0, 1, 0, endIndex);
  return this_0;
}
function toBigInt(_this__u8e3s4) {
  return _this__u8e3s4 === 0 ? Companion_getInstance().ZERO_1 : BigInt_0.new_dev_whyoleg_cryptography_bigint_BigInt_ijab80_k$(BigInt(_this__u8e3s4));
}
function toBigInt_0(_this__u8e3s4) {
  return toBigInt(_this__u8e3s4);
}
function toBigInt_1(_this__u8e3s4) {
  return toBigInt(_this__u8e3s4);
}
function toBigInt_2(_this__u8e3s4) {
  return equalsLong(_this__u8e3s4, Long.new_kotlin_Long_147cmg_k$(0, 0)) ? Companion_getInstance().ZERO_1 : BigInt_0.new_dev_whyoleg_cryptography_bigint_BigInt_ijab80_k$(BigInt(_this__u8e3s4.toString()));
}
function decodeToBigInt(_this__u8e3s4) {
  // Inline function 'kotlin.collections.isNotEmpty' call
  // Inline function 'kotlin.collections.isEmpty' call
  // Inline function 'kotlin.require' call
  if (!!(_this__u8e3s4.length === 0)) {
    var message = 'empty array';
    throw IllegalArgumentException.new_kotlin_IllegalArgumentException_f8t9r5_k$(toString(message));
  }
  if (_this__u8e3s4.length === 1 && _this__u8e3s4[0] === 0)
    return Companion_getInstance().ZERO_1;
  var positive = _this__u8e3s4[0] >= 0;
  var tmp;
  if (positive) {
    tmp = BigInt('0x' + toHexString(_this__u8e3s4));
  } else {
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$4 = _this__u8e3s4.slice();
    tmp = jsBigIntNegate(BigInt('0x' + toHexString(invertTwoComplement(tmp$ret$4))));
  }
  var jsBigInt = tmp;
  return BigInt_0.new_dev_whyoleg_cryptography_bigint_BigInt_ijab80_k$(jsBigInt);
}
function toBigInt_3(_this__u8e3s4) {
  // Inline function 'kotlin.text.isNotBlank' call
  // Inline function 'kotlin.check' call
  if (!!isBlank(_this__u8e3s4)) {
    var message = 'empty or blank string';
    throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message));
  }
  return BigInt_0.new_dev_whyoleg_cryptography_bigint_BigInt_ijab80_k$(BigInt(_this__u8e3s4));
}
function decodeHexToByteArray(_this__u8e3s4) {
  return hexToByteArray((_this__u8e3s4.length % 2 | 0) === 0 ? _this__u8e3s4 : '0' + _this__u8e3s4);
}
function invertTwoComplement(_this__u8e3s4) {
  var tmp$ret$0;
  $l$block: {
    // Inline function 'kotlin.collections.indexOfLast' call
    var inductionVariable = _this__u8e3s4.length - 1 | 0;
    if (0 <= inductionVariable)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        if (!(_this__u8e3s4[index] === 0)) {
          tmp$ret$0 = index;
          break $l$block;
        }
      }
       while (0 <= inductionVariable);
    tmp$ret$0 = -1;
  }
  var firstNonZeroFromEnd = tmp$ret$0;
  // Inline function 'kotlin.repeat' call
  var times = _this__u8e3s4.length;
  var inductionVariable_0 = 0;
  if (inductionVariable_0 < times)
    do {
      var index_0 = inductionVariable_0;
      inductionVariable_0 = inductionVariable_0 + 1 | 0;
      var negated = ~_this__u8e3s4[index_0];
      _this__u8e3s4[index_0] = toByte_0(index_0 < firstNonZeroFromEnd ? negated : negated + 1 | 0);
    }
     while (inductionVariable_0 < times);
  return _this__u8e3s4;
}
function jsBigIntNegate(value) {
  return -value;
}
function jsBigIntSign(value) {
  return value == 0 ? 0 : value < 0 ? -1 : 1;
}
function jsBigIntCompareTo(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}
function jsBigIntAsInt(value, bits) {
  return BigInt.asIntN(bits, value);
}
function jsBigIntEquals(a, b) {
  return a === b;
}
//region block: post-declaration
initMetadataForObject(BigIntAsStringSerializer, 'BigIntAsStringSerializer', VOID, VOID, [KSerializer]);
initMetadataForCompanion(Companion);
initMetadataForClass(BigInt_0, 'BigInt', VOID, VOID, [Comparable], VOID, VOID, {[getAssociatedObjectId(SerializableWith)]: BigIntAsStringSerializer_getInstance});
//endregion
//region block: exports
export {
  BigInt_0 as BigInt23zwv5kv3od56,
  decodeToBigInt as decodeToBigInt1petkle13vaiv,
  encodeToByteArray as encodeToByteArrayripney4e4aue,
  toBigInt as toBigInt3kphjqnio21gn,
  toBigInt_0 as toBigInt2ed03w99r27qk,
  toBigInt_2 as toBigInt11bczolyoumqk,
  toBigInt_1 as toBigInt29u3xna2n8w21,
  Companion_getInstance as Companion_getInstance1vpjfpz3a9qg7,
  BigIntAsStringSerializer_getInstance as BigIntAsStringSerializer_getInstance3isniqtbvm463,
};
//endregion

//# sourceMappingURL=cryptography-kotlin-cryptography-bigint.mjs.map
