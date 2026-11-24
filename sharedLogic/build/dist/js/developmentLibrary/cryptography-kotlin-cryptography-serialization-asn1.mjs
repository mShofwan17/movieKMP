import {
  Unit_getInstanceu5z48rdn3d6z as Unit_getInstance,
  THROW_IAE23kobfj9wdoxr as THROW_IAE,
  enumEntries20mr21zbe3az4 as enumEntries,
  Enum3alwj03lh1n41 as Enum,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  getStringHashCode26igk1bx568vk as getStringHashCode,
  Annotation1hwww4cseplu9 as Annotation,
  VOID3gxj6tk5isa35 as VOID,
  createThis2j2avj17cvnv2 as createThis,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  protoOf180f3jzyo7rfj as protoOf,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  last1x5hqf11b8kkw as last,
  countTrailingZeroBitszhs0313cn11e as countTrailingZeroBits,
  IllegalStateExceptionkoljg5n0nrlr as IllegalStateException,
  toString1pkumu07cwy4m as toString,
  getAssociatedObjectIdbkjrzq7ou3z9 as getAssociatedObjectId,
  copyOfRange3alro60z4hhf8 as copyOfRange,
  takeHighestOneBit9p7rdtda63bc as takeHighestOneBit,
  copyOfwy6h3t5vzqpl as copyOf,
  toByte4i43936u611k as toByte,
  arrayCopytctsywo3h7gj as arrayCopy,
  equals2au1ep9vhcato as equals,
  isByteArray4nnzfn1x4o3w as isByteArray,
  noWhenBranchMatchedException2a6r7ubxgky5j as noWhenBranchMatchedException,
  StringBuildermazzzhj6kkai as StringBuilder,
  _Char___init__impl__6a9atxrzocepzq3zgi as _Char___init__impl__6a9atx,
  split2bvyvnrlcifjv as split,
  toInt2q8uldh7sc951 as toInt,
  _UByte___init__impl__g9hnc49zztd2brjj2m as _UByte___init__impl__g9hnc4,
  toStringicfo093rs8qc as toString_0,
  UBytep4j7r1t64gz1 as UByte,
} from './kotlin-kotlin-stdlib.mjs';
import {
  PluginGeneratedSerialDescriptorqdzeg5asqhfg as PluginGeneratedSerialDescriptor,
  ByteArraySerializer_getInstance2fuv9a137bvc4 as ByteArraySerializer_getInstance,
  UnknownFieldExceptiona60e3a6v1xqo as UnknownFieldException,
  IntSerializer_getInstance3jyhns9ue706g as IntSerializer_getInstance,
  typeParametersSerializers2likxjr48tr7y as typeParametersSerializers,
  GeneratedSerializer1f7t7hssdd2ws as GeneratedSerializer,
  throwMissingFieldException2cmke0v3ynf14 as throwMissingFieldException,
  SerializableWithd2dap36updxd as SerializableWith,
  EmptySerializersModule991ju6pz9b79 as EmptySerializersModule,
  BinaryFormat3f3aelhmz0ro1 as BinaryFormat,
  InlineClassDescriptor2odlvyasjrmr0 as InlineClassDescriptor,
  StringSerializer_getInstance1p9zda6r6kb23 as StringSerializer_getInstance,
  AbstractDecoder35guh02ubh2hm as AbstractDecoder,
  ByteArraySerializersn06x87bo7h0 as ByteArraySerializer,
  PolymorphicKindla9gurooefwb as PolymorphicKind,
  CLASS_getInstance3jy3ydw5832xx as CLASS_getInstance,
  SerializationExceptioneqrdve3ts2n9 as SerializationException,
  AbstractEncoder2gxtu3xmy3f8j as AbstractEncoder,
} from './kotlinx-serialization-kotlinx-serialization-core.mjs';
import {
  Companion_getInstance1vpjfpz3a9qg7 as Companion_getInstance,
  toBigInt2ed03w99r27qk as toBigInt,
  toBigInt29u3xna2n8w21 as toBigInt_0,
  toBigInt3kphjqnio21gn as toBigInt_1,
  toBigInt11bczolyoumqk as toBigInt_2,
  BigInt23zwv5kv3od56 as BigInt,
  decodeToBigInt1petkle13vaiv as decodeToBigInt,
  encodeToByteArrayripney4e4aue as encodeToByteArray,
} from './cryptography-kotlin-cryptography-bigint.mjs';
//region block: imports
var imul = Math.imul;
var clz32 = Math.clz32;
//endregion
//region block: pre-declaration
class TagType extends Enum {
  constructor(name, ordinal) {
    return new.target.new_dev_whyoleg_cryptography_serialization_asn1_ContextSpecificTag_TagType_rqqrgw_k$(name, ordinal);
  }
  static new_dev_whyoleg_cryptography_serialization_asn1_ContextSpecificTag_TagType_rqqrgw_k$(name, ordinal, $box) {
    return this.new_kotlin_Enum_a1ijns_k$(name, ordinal, $box);
  }
}
class ContextSpecificTag {
  constructor(classIndex, type) {
    this.classIndex_1 = classIndex;
    this.type_1 = type;
  }
  get_classIndex_pbaddp_k$() {
    return this.classIndex_1;
  }
  get_type_wovaf7_k$() {
    return this.type_1;
  }
  equals(other) {
    if (!(other instanceof ContextSpecificTag))
      return false;
    var tmp0_other_with_cast = other instanceof ContextSpecificTag ? other : THROW_CCE();
    if (!(this.classIndex_1 === tmp0_other_with_cast.classIndex_1))
      return false;
    if (!this.type_1.equals(tmp0_other_with_cast.type_1))
      return false;
    return true;
  }
  hashCode() {
    var result = imul(getStringHashCode('classIndex'), 127) ^ this.classIndex_1;
    result = result + (imul(getStringHashCode('type'), 127) ^ this.type_1.hashCode()) | 0;
    return result;
  }
  toString() {
    return '@dev.whyoleg.cryptography.serialization.asn1.ContextSpecificTag(' + 'classIndex=' + this.classIndex_1 + ', ' + 'type=' + this.type_1.toString() + ')';
  }
}
class Companion {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_serialization_asn1_BitArray_Companion_cd0c4b_k$();
  }
  static new_dev_whyoleg_cryptography_serialization_asn1_BitArray_Companion_cd0c4b_k$($box) {
    var $this = createThis(this, $box);
    Companion_instance = $this;
    return $this;
  }
  serializer_9w0wvi_k$() {
    return $serializer_getInstance();
  }
}
class $serializer {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_serialization_asn1_BitArray_$serializer_lzpiiw_k$();
  }
  static new_dev_whyoleg_cryptography_serialization_asn1_BitArray_$serializer_lzpiiw_k$($box) {
    var $this = createThis(this, $box);
    $serializer_instance = $this;
    var tmp0_serialDesc = PluginGeneratedSerialDescriptor.new_kotlinx_serialization_internal_PluginGeneratedSerialDescriptor_x9evkg_k$('dev.whyoleg.cryptography.serialization.asn1.BitArray', $this, 2);
    tmp0_serialDesc.addElement_5pzumi_k$('unusedBits', false);
    tmp0_serialDesc.addElement_5pzumi_k$('byteArray', false);
    $this.descriptor_1 = tmp0_serialDesc;
    return $this;
  }
  serialize_cl8xs5_k$(encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 0, value.unusedBits_1);
    tmp1_output.encodeSerializableElement_isqxcl_k$(tmp0_desc, 1, ByteArraySerializer_getInstance(), value.byteArray_1);
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  }
  serialize_5ase3y_k$(encoder, value) {
    return this.serialize_cl8xs5_k$(encoder, value instanceof BitArray ? value : THROW_CCE());
  }
  deserialize_sy6x50_k$(decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = null;
    var tmp6_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp6_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp6_input.decodeIntElement_941u6a_k$(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 1, ByteArraySerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.decodeIntElement_941u6a_k$(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 1, ByteArraySerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.new_kotlinx_serialization_UnknownFieldException_r32xsj_k$(tmp2_index);
        }
      }
    tmp6_input.endStructure_1xqz0n_k$(tmp0_desc);
    return BitArray.new_dev_whyoleg_cryptography_serialization_asn1_BitArray_kcrjc7_k$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  get_descriptor_wjt6a0_k$() {
    return this.descriptor_1;
  }
  childSerializers_5ghqw5_k$() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), ByteArraySerializer_getInstance()];
  }
}
class BitArray {
  constructor(unusedBits, byteArray) {
    return new.target.new_dev_whyoleg_cryptography_serialization_asn1_BitArray_acvcee_k$(unusedBits, byteArray);
  }
  static new_dev_whyoleg_cryptography_serialization_asn1_BitArray_acvcee_k$(unusedBits, byteArray, $box) {
    Companion_getInstance_0();
    var $this = createThis(this, $box);
    $this.unusedBits_1 = unusedBits;
    $this.byteArray_1 = byteArray;
    // Inline function 'kotlin.collections.isEmpty' call
    if ($this.byteArray_1.length === 0) {
      // Inline function 'kotlin.check' call
      if (!($this.unusedBits_1 === 0)) {
        var message = "empty array couldn't have unused bits";
        throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message));
      }
    } else {
      // Inline function 'kotlin.countTrailingZeroBits' call
      var this_0 = last($this.byteArray_1);
      var tmp$ret$3 = countTrailingZeroBits(this_0 | 256);
      // Inline function 'kotlin.check' call
      if (!($this.unusedBits_1 <= tmp$ret$3)) {
        var message_0 = 'At least ' + $this.unusedBits_1 + ' last bits should be unused';
        throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message_0));
      }
    }
    return $this;
  }
  get_unusedBits_fr3b9_k$() {
    return this.unusedBits_1;
  }
  get_byteArray_pv7794_k$() {
    return this.byteArray_1;
  }
  static new_dev_whyoleg_cryptography_serialization_asn1_BitArray_kcrjc7_k$(seen0, unusedBits, byteArray, serializationConstructorMarker, $box) {
    Companion_getInstance_0();
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance().descriptor_1);
    }
    var $this = createThis(this, $box);
    $this.unusedBits_1 = unusedBits;
    $this.byteArray_1 = byteArray;
    // Inline function 'kotlin.collections.isEmpty' call
    if ($this.byteArray_1.length === 0) {
      // Inline function 'kotlin.check' call
      if (!($this.unusedBits_1 === 0)) {
        var message = "empty array couldn't have unused bits";
        throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message));
      }
    } else {
      // Inline function 'kotlin.countTrailingZeroBits' call
      var this_0 = last($this.byteArray_1);
      var tmp$ret$3 = countTrailingZeroBits(this_0 | 256);
      // Inline function 'kotlin.check' call
      if (!($this.unusedBits_1 <= tmp$ret$3)) {
        var message_0 = 'At least ' + $this.unusedBits_1 + ' last bits should be unused';
        throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message_0));
      }
    }
    return $this;
  }
}
class Der {
  constructor(serializersModule) {
    return new.target.new_dev_whyoleg_cryptography_serialization_asn1_Der_2024l4_k$(serializersModule);
  }
  static new_dev_whyoleg_cryptography_serialization_asn1_Der_2024l4_k$(serializersModule, $box) {
    Default_getInstance();
    var $this = createThis(this, $box);
    $this.serializersModule_1 = serializersModule;
    return $this;
  }
  get_serializersModule_piitvg_k$() {
    return this.serializersModule_1;
  }
  encodeToByteArray_n90khx_k$(serializer, value) {
    var output = ByteArrayOutput.new_dev_whyoleg_cryptography_serialization_asn1_internal_ByteArrayOutput_clb4f8_k$();
    DerEncoder.new_dev_whyoleg_cryptography_serialization_asn1_internal_DerEncoder_vlzdjz_k$(this, output).encodeSerializableValue_3uuzip_k$(serializer, value);
    return output.toByteArray_qczt2u_k$();
  }
  decodeFromByteArray_8opj5c_k$(deserializer, bytes) {
    var input = ByteArrayInput.new_dev_whyoleg_cryptography_serialization_asn1_internal_ByteArrayInput_y0n9jq_k$(bytes);
    return DerDecoder.new_dev_whyoleg_cryptography_serialization_asn1_internal_DerDecoder_k0uumo_k$(this, input).decodeSerializableValue_xpnpad_k$(deserializer);
  }
}
class Default extends Der {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_serialization_asn1_Der_Default_u645nn_k$();
  }
  static new_dev_whyoleg_cryptography_serialization_asn1_Der_Default_u645nn_k$($box) {
    Default_instance = null;
    var $this = this.new_dev_whyoleg_cryptography_serialization_asn1_Der_2024l4_k$(EmptySerializersModule(), $box);
    Default_instance = $this;
    return $this;
  }
}
class Builder {
  constructor(der) {
    return new.target.new_dev_whyoleg_cryptography_serialization_asn1_Der_Builder_vh1hv8_k$(der);
  }
  static new_dev_whyoleg_cryptography_serialization_asn1_Der_Builder_vh1hv8_k$(der, $box) {
    var $this = createThis(this, $box);
    $this.serializersModule_1 = der.get_serializersModule_piitvg_k$();
    return $this;
  }
  set_serializersModule_6xge6s_k$(_set____db54di) {
    this.serializersModule_1 = _set____db54di;
  }
  get_serializersModule_piitvg_k$() {
    return this.serializersModule_1;
  }
}
class Companion_0 {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_serialization_asn1_ObjectIdentifier_Companion_3n82zp_k$();
  }
  static new_dev_whyoleg_cryptography_serialization_asn1_ObjectIdentifier_Companion_3n82zp_k$($box) {
    var $this = createThis(this, $box);
    Companion_instance_0 = $this;
    return $this;
  }
  serializer_9w0wvi_k$() {
    return $serializer_getInstance_0();
  }
}
class $serializer_0 {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_serialization_asn1_ObjectIdentifier_$serializer_mwq1h0_k$();
  }
  static new_dev_whyoleg_cryptography_serialization_asn1_ObjectIdentifier_$serializer_mwq1h0_k$($box) {
    var $this = createThis(this, $box);
    $serializer_instance_0 = $this;
    var tmp0_serialDesc = InlineClassDescriptor.new_kotlinx_serialization_internal_InlineClassDescriptor_mqqz6i_k$('dev.whyoleg.cryptography.serialization.asn1.ObjectIdentifier', $this);
    tmp0_serialDesc.addElement_5pzumi_k$('value', false);
    $this.descriptor_1 = tmp0_serialDesc;
    return $this;
  }
  serialize_5q439d_k$(encoder, value) {
    var tmp0_inlineEncoder = encoder.encodeInline_wxp5pu_k$(this.descriptor_1);
    if (tmp0_inlineEncoder == null)
      null;
    else {
      tmp0_inlineEncoder.encodeString_424b5v_k$(_ObjectIdentifier___get_value__impl__wqzjw3(value));
    }
  }
  serialize_5ase3y_k$(encoder, value) {
    return this.serialize_5q439d_k$(encoder, value instanceof ObjectIdentifier ? value.value_1 : THROW_CCE());
  }
  deserialize_nl7bpc_k$(decoder) {
    return _ObjectIdentifier___init__impl__7hutfr(decoder.decodeInline_ux3vza_k$(this.descriptor_1).decodeString_x3hxsx_k$());
  }
  deserialize_sy6x50_k$(decoder) {
    return new ObjectIdentifier(this.deserialize_nl7bpc_k$(decoder));
  }
  get_descriptor_wjt6a0_k$() {
    return this.descriptor_1;
  }
  childSerializers_5ghqw5_k$() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance()];
  }
}
class ObjectIdentifier {
  constructor(value) {
    Companion_getInstance_1();
    this.value_1 = value;
  }
  toString() {
    return ObjectIdentifier__toString_impl_dtwsrd(this.value_1);
  }
  hashCode() {
    return ObjectIdentifier__hashCode_impl_7x941i(this.value_1);
  }
  equals(other) {
    return ObjectIdentifier__equals_impl_u5dbkq(this.value_1, other);
  }
}
class ByteArrayInput {
  constructor(array, startIndex, endIndex) {
    return new.target.new_dev_whyoleg_cryptography_serialization_asn1_internal_ByteArrayInput_y0n9jq_k$(array, startIndex, endIndex);
  }
  static new_dev_whyoleg_cryptography_serialization_asn1_internal_ByteArrayInput_y0n9jq_k$(array, startIndex, endIndex, $box) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    endIndex = endIndex === VOID ? array.length : endIndex;
    var $this = createThis(this, $box);
    $this.array_1 = array;
    $this.endIndex_1 = endIndex;
    $this.position_1 = startIndex;
    return $this;
  }
  get_eof_18j6gd_k$() {
    return _get_available__saq0tk(this) === 0;
  }
  toString() {
    return 'ByteArrayInput(size=' + this.array_1.length + ', endIndex=' + this.endIndex_1 + ', position=' + this.position_1 + ', available=' + _get_available__saq0tk(this) + ')';
  }
  peak_21ntr_k$() {
    ensureAvailableBytes(this, 1);
    return this.array_1[this.position_1];
  }
  read_22xsm_k$() {
    ensureAvailableBytes(this, 1);
    var _unary__edvuaz = this.position_1;
    this.position_1 = _unary__edvuaz + 1 | 0;
    return this.array_1[_unary__edvuaz];
  }
  read_yyte66_k$(length) {
    ensureAvailableBytes(this, length);
    if (length === 0)
      return get_emptyArray();
    // Inline function 'kotlin.also' call
    var this_0 = copyOfRange(this.array_1, this.position_1, this.position_1 + length | 0);
    this.position_1 = this.position_1 + length | 0;
    return this_0;
  }
  readSlice_41cssk_k$(length) {
    ensureAvailableBytes(this, length);
    if (length === 0)
      return ByteArrayInput.new_dev_whyoleg_cryptography_serialization_asn1_internal_ByteArrayInput_y0n9jq_k$(get_emptyArray());
    // Inline function 'kotlin.also' call
    var this_0 = ByteArrayInput.new_dev_whyoleg_cryptography_serialization_asn1_internal_ByteArrayInput_y0n9jq_k$(this.array_1, this.position_1, this.position_1 + length | 0);
    this.position_1 = this.position_1 + length | 0;
    return this_0;
  }
}
class ByteArrayOutput {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_serialization_asn1_internal_ByteArrayOutput_clb4f8_k$();
  }
  static new_dev_whyoleg_cryptography_serialization_asn1_internal_ByteArrayOutput_clb4f8_k$($box) {
    var $this = createThis(this, $box);
    $this.array_1 = new Int8Array(32);
    $this.position_1 = 0;
    return $this;
  }
  get_size_woubt6_k$() {
    return this.position_1;
  }
  toByteArray_qczt2u_k$() {
    return copyOf(this.array_1, this.position_1);
  }
  write_layvuf_k$(byte) {
    ensureCapacity(this, 1);
    var tmp = this.array_1;
    var _unary__edvuaz = this.position_1;
    this.position_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = byte;
  }
  write_mg8e2f_k$(byte) {
    this.write_layvuf_k$(toByte(byte));
  }
  write_g2w2un_k$(bytes) {
    // Inline function 'kotlin.collections.isEmpty' call
    if (bytes.length === 0)
      return Unit_getInstance();
    ensureCapacity(this, bytes.length);
    var tmp2 = this.array_1;
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset = this.position_1;
    var endIndex = bytes.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = bytes;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, tmp2, destinationOffset, 0, endIndex);
    this.position_1 = this.position_1 + bytes.length | 0;
  }
  write_h4gvfd_k$(output) {
    if (output.get_size_woubt6_k$() === 0)
      return Unit_getInstance();
    ensureCapacity(this, output.position_1);
    var tmp0 = output.array_1;
    var tmp2 = this.array_1;
    var tmp4 = this.position_1;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = output.position_1;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, tmp2, tmp4, 0, endIndex);
    this.position_1 = this.position_1 + output.position_1 | 0;
  }
}
class DerDecoder extends AbstractDecoder {
  constructor(der, byteArrayInput) {
    return new.target.new_dev_whyoleg_cryptography_serialization_asn1_internal_DerDecoder_k0uumo_k$(der, byteArrayInput);
  }
  static new_dev_whyoleg_cryptography_serialization_asn1_internal_DerDecoder_k0uumo_k$(der, byteArrayInput, $box) {
    var $this = this.new_kotlinx_serialization_encoding_AbstractDecoder_3cynny_k$($box);
    $this.der_1 = der;
    $this.input_1 = DerInput.new_dev_whyoleg_cryptography_serialization_asn1_internal_DerInput_kxyijv_k$(byteArrayInput);
    $this.currentIndex_1 = 0;
    $this.tagOverride_1 = null;
    return $this;
  }
  get_serializersModule_piitvg_k$() {
    return this.der_1.get_serializersModule_piitvg_k$();
  }
  decodeElementIndex_bstkhp_k$(descriptor) {
    if (this.input_1.get_eof_18j6gd_k$())
      return -1;
    var tag = this.input_1.peakTag_bhfirp_k$();
    $l$loop: while (true) {
      var index = this.currentIndex_1;
      this.tagOverride_1 = getElementContextSpecificTag(descriptor, index);
      var tmp;
      if (!(this.tagOverride_1 == null) && descriptor.isElementOptional_heqq56_k$(index)) {
        var tmp_0 = tag;
        var tmp0_safe_receiver = this.tagOverride_1;
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_tag(tmp0_safe_receiver);
        tmp = !(tmp_0 === (tmp1_safe_receiver == null ? null : tmp1_safe_receiver));
      } else {
        tmp = false;
      }
      if (tmp) {
        this.currentIndex_1 = this.currentIndex_1 + 1 | 0;
        continue $l$loop;
      }
      var _unary__edvuaz = this.currentIndex_1;
      this.currentIndex_1 = _unary__edvuaz + 1 | 0;
      return _unary__edvuaz;
    }
  }
  decodeNotNullMark_us4ba1_k$() {
    return this.input_1.isNotNull_pm3rzk_k$();
  }
  decodeNull_jzrmuj_k$() {
    return this.input_1.readNull_eclyv7_k$();
  }
  decodeByte_jzz7je_k$() {
    return this.input_1.readInteger_mwd8tu_k$(getAndResetTagOverride(this)).toByte_edm0nx_k$();
  }
  decodeShort_jjqk32_k$() {
    return this.input_1.readInteger_mwd8tu_k$(getAndResetTagOverride(this)).toShort_ja8oqn_k$();
  }
  decodeInt_8iq8f5_k$() {
    return this.input_1.readInteger_mwd8tu_k$(getAndResetTagOverride(this)).toInt_1tsl84_k$();
  }
  decodeLong_jzt186_k$() {
    return this.input_1.readInteger_mwd8tu_k$(getAndResetTagOverride(this)).toLong_edfucp_k$();
  }
  decodeSerializableValue_xpnpad_k$(deserializer) {
    var tmp0_subject = deserializer.get_descriptor_wjt6a0_k$();
    return equals(tmp0_subject, ByteArraySerializer().get_descriptor_wjt6a0_k$()) ? this.input_1.readOctetString_xxif3k_k$(getAndResetTagOverride(this)) : equals(tmp0_subject, Companion_getInstance_0().serializer_9w0wvi_k$().get_descriptor_wjt6a0_k$()) ? this.input_1.readBitString_ziixu6_k$(getAndResetTagOverride(this)) : equals(tmp0_subject, Companion_getInstance_1().serializer_9w0wvi_k$().get_descriptor_wjt6a0_k$()) ? new ObjectIdentifier(this.input_1.readObjectIdentifier_zgc8e8_k$(getAndResetTagOverride(this))) : equals(tmp0_subject, Companion_getInstance().serializer_9w0wvi_k$().get_descriptor_wjt6a0_k$()) ? this.input_1.readInteger_mwd8tu_k$(getAndResetTagOverride(this)) : deserializer.deserialize_sy6x50_k$(this);
  }
  beginStructure_yljocp_k$(descriptor) {
    var tmp0_subject = descriptor.get_kind_wop7ml_k$();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, CLASS_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      tmp = DerDecoder.new_dev_whyoleg_cryptography_serialization_asn1_internal_DerDecoder_k0uumo_k$(this.der_1, this.input_1.readSequence_d0bj0d_k$(getAndResetTagOverride(this)));
    } else {
      throw SerializationException.new_kotlinx_serialization_SerializationException_hajq3m_k$('This serial kind is not supported as structure: ' + toString(descriptor));
    }
    return tmp;
  }
  decodeInline_ux3vza_k$(descriptor) {
    return this;
  }
  decodeInlineElement_s8883o_k$(descriptor, index) {
    return this;
  }
  decodeEnum_slg6lu_k$(enumDescriptor) {
    // Inline function 'kotlin.error' call
    var message = 'Enum decoding is not supported';
    throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message));
  }
  decodeString_x3hxsx_k$() {
    // Inline function 'kotlin.error' call
    var message = 'String decoding is not supported';
    throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message));
  }
  decodeChar_dcmcfa_k$() {
    // Inline function 'kotlin.error' call
    var message = 'Char decoding is not supported';
    throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message));
  }
  decodeBoolean_m0aca_k$() {
    // Inline function 'kotlin.error' call
    var message = 'Boolean decoding is not supported';
    throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message));
  }
  decodeDouble_ur8l0f_k$() {
    // Inline function 'kotlin.error' call
    var message = 'Double decoding is not supported';
    throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message));
  }
  decodeFloat_jcnrwu_k$() {
    // Inline function 'kotlin.error' call
    var message = 'Float decoding is not supported';
    throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message));
  }
  decodeValue_jl9esj_k$() {
    // Inline function 'kotlin.error' call
    var message = 'should not be called';
    throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message));
  }
}
class DerEncoder extends AbstractEncoder {
  constructor(der, byteArrayOutput, parentOutput) {
    return new.target.new_dev_whyoleg_cryptography_serialization_asn1_internal_DerEncoder_vlzdjz_k$(der, byteArrayOutput, parentOutput);
  }
  static new_dev_whyoleg_cryptography_serialization_asn1_internal_DerEncoder_vlzdjz_k$(der, byteArrayOutput, parentOutput, $box) {
    parentOutput = parentOutput === VOID ? null : parentOutput;
    var $this = this.new_kotlinx_serialization_encoding_AbstractEncoder_2d7vxe_k$($box);
    $this.der_1 = der;
    $this.parentOutput_1 = parentOutput;
    $this.output_1 = DerOutput.new_dev_whyoleg_cryptography_serialization_asn1_internal_DerOutput_u9wyxy_k$(byteArrayOutput);
    $this.tagOverride_1 = null;
    return $this;
  }
  get_serializersModule_piitvg_k$() {
    return this.der_1.get_serializersModule_piitvg_k$();
  }
  shouldEncodeElementDefault_x8eyid_k$(descriptor, index) {
    return false;
  }
  encodeElement_5v7eyb_k$(descriptor, index) {
    this.tagOverride_1 = getElementContextSpecificTag(descriptor, index);
    return true;
  }
  encodeNotNullMark_415a1t_k$() {
  }
  encodeNull_ejiosz_k$() {
    return this.output_1.writeNull_ahwcvq_k$();
  }
  encodeByte_6txfee_k$(value) {
    return this.output_1.writeInteger_2dnegz_k$(getAndResetTagOverride_0(this), toBigInt(value));
  }
  encodeShort_gza6si_k$(value) {
    return this.output_1.writeInteger_2dnegz_k$(getAndResetTagOverride_0(this), toBigInt_0(value));
  }
  encodeInt_y5zi3z_k$(value) {
    return this.output_1.writeInteger_2dnegz_k$(getAndResetTagOverride_0(this), toBigInt_1(value));
  }
  encodeLong_3didw_k$(value) {
    return this.output_1.writeInteger_2dnegz_k$(getAndResetTagOverride_0(this), toBigInt_2(value));
  }
  encodeSerializableValue_3uuzip_k$(serializer, value) {
    var tmp0_subject = serializer.get_descriptor_wjt6a0_k$();
    var tmp;
    if (equals(tmp0_subject, ByteArraySerializer().get_descriptor_wjt6a0_k$())) {
      var tmp_0 = getAndResetTagOverride_0(this);
      this.output_1.writeOctetString_mb32mh_k$(tmp_0, (!(value == null) ? isByteArray(value) : false) ? value : THROW_CCE());
      tmp = Unit_getInstance();
    } else if (equals(tmp0_subject, Companion_getInstance_0().serializer_9w0wvi_k$().get_descriptor_wjt6a0_k$())) {
      var tmp_1 = getAndResetTagOverride_0(this);
      this.output_1.writeBitString_5qdqct_k$(tmp_1, value instanceof BitArray ? value : THROW_CCE());
      tmp = Unit_getInstance();
    } else if (equals(tmp0_subject, Companion_getInstance_1().serializer_9w0wvi_k$().get_descriptor_wjt6a0_k$())) {
      var tmp_2 = getAndResetTagOverride_0(this);
      this.output_1.writeObjectIdentifier_8c9sjj_k$(tmp_2, value instanceof ObjectIdentifier ? value.value_1 : THROW_CCE());
      tmp = Unit_getInstance();
    } else if (equals(tmp0_subject, Companion_getInstance().serializer_9w0wvi_k$().get_descriptor_wjt6a0_k$())) {
      var tmp_3 = getAndResetTagOverride_0(this);
      this.output_1.writeInteger_2dnegz_k$(tmp_3, value instanceof BigInt ? value : THROW_CCE());
      tmp = Unit_getInstance();
    } else {
      serializer.serialize_5ase3y_k$(this, value);
      tmp = Unit_getInstance();
    }
    return tmp;
  }
  beginStructure_yljocp_k$(descriptor) {
    var tmp0_subject = descriptor.get_kind_wop7ml_k$();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, CLASS_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      tmp = DerEncoder.new_dev_whyoleg_cryptography_serialization_asn1_internal_DerEncoder_vlzdjz_k$(this.der_1, ByteArrayOutput.new_dev_whyoleg_cryptography_serialization_asn1_internal_ByteArrayOutput_clb4f8_k$(), this.output_1);
    } else {
      throw SerializationException.new_kotlinx_serialization_SerializationException_hajq3m_k$('This serial kind is not supported as structure: ' + toString(descriptor));
    }
    return tmp;
  }
  endStructure_1xqz0n_k$(descriptor) {
    var tmp0 = this.parentOutput_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        var message = 'Should be called after beginStructure';
        throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message));
      } else {
        tmp$ret$0 = tmp0;
        break $l$block;
      }
    }
    tmp$ret$0.writeSequence_x661eo_k$(getAndResetTagOverride_0(this), this.output_1);
  }
  encodeInline_wxp5pu_k$(descriptor) {
    return this;
  }
  encodeEnum_v5vk7y_k$(enumDescriptor, index) {
    // Inline function 'kotlin.error' call
    var message = 'Enum encoding is not supported';
    throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message));
  }
  encodeEnum_2qin0y_k$(enumDescriptor, index) {
    return this.encodeEnum_v5vk7y_k$(enumDescriptor, index);
  }
  encodeString_424b5v_k$(value) {
    // Inline function 'kotlin.error' call
    var message = 'String encoding is not supported';
    throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message));
  }
  encodeChar_oxoup_k$(value) {
    // Inline function 'kotlin.error' call
    var message = 'Char encoding is not supported';
    throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message));
  }
  encodeBoolean_tu2e59_k$(value) {
    // Inline function 'kotlin.error' call
    var message = 'Boolean encoding is not supported';
    throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message));
  }
  encodeFloat_b8b85a_k$(value) {
    // Inline function 'kotlin.error' call
    var message = 'Float encoding is not supported';
    throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message));
  }
  encodeDouble_n270q9_k$(value) {
    // Inline function 'kotlin.error' call
    var message = 'Double encoding is not supported';
    throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message));
  }
  encodeValue_g68i1f_k$(value) {
    // Inline function 'kotlin.error' call
    var message = 'should not be called';
    throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message));
  }
}
class DerInput {
  constructor(input) {
    return new.target.new_dev_whyoleg_cryptography_serialization_asn1_internal_DerInput_kxyijv_k$(input);
  }
  static new_dev_whyoleg_cryptography_serialization_asn1_internal_DerInput_kxyijv_k$(input, $box) {
    var $this = createThis(this, $box);
    $this.input_1 = input;
    return $this;
  }
  get_eof_18j6gd_k$() {
    return this.input_1.get_eof_18j6gd_k$();
  }
  peakTag_bhfirp_k$() {
    return this.input_1.peak_21ntr_k$();
  }
  isNotNull_pm3rzk_k$() {
    return !(this.peakTag_bhfirp_k$() === 5);
  }
  readNull_eclyv7_k$() {
    readRequestedTag(this.input_1, 5);
    var length = readLength(this.input_1);
    // Inline function 'kotlin.check' call
    if (!(length === 0)) {
      var message = 'NULL tag length should be zero, but was: ' + length;
      throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message));
    }
    return null;
  }
  readInteger_mwd8tu_k$(tagOverride) {
    var tmp0 = this.input_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'dev.whyoleg.cryptography.serialization.asn1.internal.readTagWithOverride' call
      if (tagOverride == null) {
        readRequestedTag(tmp0, 2);
        var length = readLength(tmp0);
        var bytes = tmp0.read_yyte66_k$(length);
        tmp$ret$0 = decodeToBigInt(bytes);
        break $l$block;
      }
      readRequestedTag(tmp0, get_tag(tagOverride));
      var tmp;
      switch (tagOverride.get_type_wovaf7_k$().get_ordinal_ip24qg_k$()) {
        case 0:
          var length_0 = readLength(tmp0);
          var bytes_0 = tmp0.read_yyte66_k$(length_0);
          tmp = decodeToBigInt(bytes_0);
          break;
        case 1:
          var length_1 = readLength(tmp0);
          var explicitInput = tmp0.readSlice_41cssk_k$(length_1);
          readRequestedTag(explicitInput, 2);
          var length_2 = readLength(explicitInput);
          var bytes_1 = explicitInput.read_yyte66_k$(length_2);
          tmp = decodeToBigInt(bytes_1);
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      tmp$ret$0 = tmp;
    }
    return tmp$ret$0;
  }
  readBitString_ziixu6_k$(tagOverride) {
    var tmp0 = this.input_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'dev.whyoleg.cryptography.serialization.asn1.internal.readTagWithOverride' call
      if (tagOverride == null) {
        readRequestedTag(tmp0, 3);
        var length = readLength(tmp0);
        var unusedBits = tmp0.read_22xsm_k$();
        var bytes = tmp0.read_yyte66_k$(length - 1 | 0);
        // Inline function 'kotlin.collections.isEmpty' call
        if (bytes.length === 0) {
          // Inline function 'kotlin.check' call
          if (!(unusedBits === 0)) {
            var message = 'wrong number of unused bits, expected 0, received: ' + unusedBits;
            throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message));
          }
        } else {
          // Inline function 'kotlin.countTrailingZeroBits' call
          var this_0 = last(bytes);
          var trailingZeros = countTrailingZeroBits(this_0 | 256);
          // Inline function 'kotlin.check' call
          if (!(unusedBits <= trailingZeros)) {
            var message_0 = 'Not all unused bits are zeros, expected at least ' + unusedBits + ' trailing zeros, received ' + trailingZeros;
            throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message_0));
          }
        }
        tmp$ret$0 = BitArray.new_dev_whyoleg_cryptography_serialization_asn1_BitArray_acvcee_k$(unusedBits, bytes);
        break $l$block;
      }
      readRequestedTag(tmp0, get_tag(tagOverride));
      var tmp;
      switch (tagOverride.get_type_wovaf7_k$().get_ordinal_ip24qg_k$()) {
        case 0:
          var length_0 = readLength(tmp0);
          var unusedBits_0 = tmp0.read_22xsm_k$();
          var bytes_0 = tmp0.read_yyte66_k$(length_0 - 1 | 0);
          // Inline function 'kotlin.collections.isEmpty' call

          if (bytes_0.length === 0) {
            // Inline function 'kotlin.check' call
            if (!(unusedBits_0 === 0)) {
              var message_1 = 'wrong number of unused bits, expected 0, received: ' + unusedBits_0;
              throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message_1));
            }
          } else {
            // Inline function 'kotlin.countTrailingZeroBits' call
            var this_1 = last(bytes_0);
            var trailingZeros_0 = countTrailingZeroBits(this_1 | 256);
            // Inline function 'kotlin.check' call
            if (!(unusedBits_0 <= trailingZeros_0)) {
              var message_2 = 'Not all unused bits are zeros, expected at least ' + unusedBits_0 + ' trailing zeros, received ' + trailingZeros_0;
              throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message_2));
            }
          }

          tmp = BitArray.new_dev_whyoleg_cryptography_serialization_asn1_BitArray_acvcee_k$(unusedBits_0, bytes_0);
          break;
        case 1:
          var length_1 = readLength(tmp0);
          var explicitInput = tmp0.readSlice_41cssk_k$(length_1);
          readRequestedTag(explicitInput, 3);
          var length_2 = readLength(explicitInput);
          var unusedBits_1 = explicitInput.read_22xsm_k$();
          var bytes_1 = explicitInput.read_yyte66_k$(length_2 - 1 | 0);
          // Inline function 'kotlin.collections.isEmpty' call

          if (bytes_1.length === 0) {
            // Inline function 'kotlin.check' call
            if (!(unusedBits_1 === 0)) {
              var message_3 = 'wrong number of unused bits, expected 0, received: ' + unusedBits_1;
              throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message_3));
            }
          } else {
            // Inline function 'kotlin.countTrailingZeroBits' call
            var this_2 = last(bytes_1);
            var trailingZeros_1 = countTrailingZeroBits(this_2 | 256);
            // Inline function 'kotlin.check' call
            if (!(unusedBits_1 <= trailingZeros_1)) {
              var message_4 = 'Not all unused bits are zeros, expected at least ' + unusedBits_1 + ' trailing zeros, received ' + trailingZeros_1;
              throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message_4));
            }
          }

          tmp = BitArray.new_dev_whyoleg_cryptography_serialization_asn1_BitArray_acvcee_k$(unusedBits_1, bytes_1);
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      tmp$ret$0 = tmp;
    }
    return tmp$ret$0;
  }
  readOctetString_xxif3k_k$(tagOverride) {
    var tmp0 = this.input_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'dev.whyoleg.cryptography.serialization.asn1.internal.readTagWithOverride' call
      if (tagOverride == null) {
        readRequestedTag(tmp0, 4);
        var length = readLength(tmp0);
        tmp$ret$0 = tmp0.read_yyte66_k$(length);
        break $l$block;
      }
      readRequestedTag(tmp0, get_tag(tagOverride));
      var tmp;
      switch (tagOverride.get_type_wovaf7_k$().get_ordinal_ip24qg_k$()) {
        case 0:
          var length_0 = readLength(tmp0);
          tmp = tmp0.read_yyte66_k$(length_0);
          break;
        case 1:
          var length_1 = readLength(tmp0);
          var explicitInput = tmp0.readSlice_41cssk_k$(length_1);
          readRequestedTag(explicitInput, 4);
          var length_2 = readLength(explicitInput);
          tmp = explicitInput.read_yyte66_k$(length_2);
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      tmp$ret$0 = tmp;
    }
    return tmp$ret$0;
  }
  readObjectIdentifier_zgc8e8_k$(tagOverride) {
    var tmp0 = this.input_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'dev.whyoleg.cryptography.serialization.asn1.internal.readTagWithOverride' call
      if (tagOverride == null) {
        readRequestedTag(tmp0, 6);
        var length = readLength(tmp0);
        var slice = tmp0.readSlice_41cssk_k$(length);
        tmp$ret$0 = _ObjectIdentifier___init__impl__7hutfr(readOidElements(slice));
        break $l$block;
      }
      readRequestedTag(tmp0, get_tag(tagOverride));
      var tmp;
      switch (tagOverride.get_type_wovaf7_k$().get_ordinal_ip24qg_k$()) {
        case 0:
          var length_0 = readLength(tmp0);
          var slice_0 = tmp0.readSlice_41cssk_k$(length_0);
          tmp = new ObjectIdentifier(_ObjectIdentifier___init__impl__7hutfr(readOidElements(slice_0)));
          break;
        case 1:
          var length_1 = readLength(tmp0);
          var explicitInput = tmp0.readSlice_41cssk_k$(length_1);
          readRequestedTag(explicitInput, 6);
          var length_2 = readLength(explicitInput);
          var slice_1 = explicitInput.readSlice_41cssk_k$(length_2);
          tmp = new ObjectIdentifier(_ObjectIdentifier___init__impl__7hutfr(readOidElements(slice_1)));
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      tmp$ret$0 = tmp.value_1;
    }
    return tmp$ret$0;
  }
  readSequence_d0bj0d_k$(tagOverride) {
    var tmp0 = this.input_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'dev.whyoleg.cryptography.serialization.asn1.internal.readTagWithOverride' call
      if (tagOverride == null) {
        readRequestedTag(tmp0, 48);
        var length = readLength(tmp0);
        tmp$ret$0 = tmp0.readSlice_41cssk_k$(length);
        break $l$block;
      }
      readRequestedTag(tmp0, get_tag(tagOverride));
      var tmp;
      switch (tagOverride.get_type_wovaf7_k$().get_ordinal_ip24qg_k$()) {
        case 0:
          var length_0 = readLength(tmp0);
          tmp = tmp0.readSlice_41cssk_k$(length_0);
          break;
        case 1:
          var length_1 = readLength(tmp0);
          var explicitInput = tmp0.readSlice_41cssk_k$(length_1);
          readRequestedTag(explicitInput, 48);
          var length_2 = readLength(explicitInput);
          tmp = explicitInput.readSlice_41cssk_k$(length_2);
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      tmp$ret$0 = tmp;
    }
    return tmp$ret$0;
  }
}
class DerOutput {
  constructor(output) {
    return new.target.new_dev_whyoleg_cryptography_serialization_asn1_internal_DerOutput_u9wyxy_k$(output);
  }
  static new_dev_whyoleg_cryptography_serialization_asn1_internal_DerOutput_u9wyxy_k$(output, $box) {
    var $this = createThis(this, $box);
    $this.output_1 = output;
    return $this;
  }
  writeNull_ahwcvq_k$() {
    this.output_1.write_layvuf_k$(5);
    writeLength(this.output_1, 0);
  }
  writeInteger_2dnegz_k$(tagOverride, value) {
    var tmp0 = this.output_1;
    $l$block: {
      // Inline function 'dev.whyoleg.cryptography.serialization.asn1.internal.writeTagWithOverride' call
      if (tagOverride == null) {
        tmp0.write_layvuf_k$(2);
        writeBytes(tmp0, encodeToByteArray(value));
        break $l$block;
      }
      tmp0.write_layvuf_k$(get_tag(tagOverride));
      switch (tagOverride.get_type_wovaf7_k$().get_ordinal_ip24qg_k$()) {
        case 0:
          writeBytes(tmp0, encodeToByteArray(value));
          break;
        case 1:
          // Inline function 'dev.whyoleg.cryptography.serialization.asn1.internal.writeBytes' call

          // Inline function 'kotlin.apply' call

          var this_0 = ByteArrayOutput.new_dev_whyoleg_cryptography_serialization_asn1_internal_ByteArrayOutput_clb4f8_k$();
          this_0.write_layvuf_k$(2);
          writeBytes(this_0, encodeToByteArray(value));
          writeBytes_1(tmp0, this_0);
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
    }
  }
  writeBitString_5qdqct_k$(tagOverride, bits) {
    var tmp0 = this.output_1;
    $l$block: {
      // Inline function 'dev.whyoleg.cryptography.serialization.asn1.internal.writeTagWithOverride' call
      if (tagOverride == null) {
        tmp0.write_layvuf_k$(3);
        writeLength(tmp0, bits.get_byteArray_pv7794_k$().length + 1 | 0);
        tmp0.write_mg8e2f_k$(bits.get_unusedBits_fr3b9_k$());
        tmp0.write_g2w2un_k$(bits.get_byteArray_pv7794_k$());
        break $l$block;
      }
      tmp0.write_layvuf_k$(get_tag(tagOverride));
      switch (tagOverride.get_type_wovaf7_k$().get_ordinal_ip24qg_k$()) {
        case 0:
          writeLength(tmp0, bits.get_byteArray_pv7794_k$().length + 1 | 0);
          tmp0.write_mg8e2f_k$(bits.get_unusedBits_fr3b9_k$());
          tmp0.write_g2w2un_k$(bits.get_byteArray_pv7794_k$());
          break;
        case 1:
          // Inline function 'dev.whyoleg.cryptography.serialization.asn1.internal.writeBytes' call

          // Inline function 'kotlin.apply' call

          var this_0 = ByteArrayOutput.new_dev_whyoleg_cryptography_serialization_asn1_internal_ByteArrayOutput_clb4f8_k$();
          this_0.write_layvuf_k$(3);
          writeLength(this_0, bits.get_byteArray_pv7794_k$().length + 1 | 0);
          this_0.write_mg8e2f_k$(bits.get_unusedBits_fr3b9_k$());
          this_0.write_g2w2un_k$(bits.get_byteArray_pv7794_k$());
          writeBytes_1(tmp0, this_0);
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
    }
  }
  writeOctetString_mb32mh_k$(tagOverride, bytes) {
    var tmp0 = this.output_1;
    $l$block: {
      // Inline function 'dev.whyoleg.cryptography.serialization.asn1.internal.writeTagWithOverride' call
      if (tagOverride == null) {
        tmp0.write_layvuf_k$(4);
        writeBytes(tmp0, bytes);
        break $l$block;
      }
      tmp0.write_layvuf_k$(get_tag(tagOverride));
      switch (tagOverride.get_type_wovaf7_k$().get_ordinal_ip24qg_k$()) {
        case 0:
          writeBytes(tmp0, bytes);
          break;
        case 1:
          // Inline function 'dev.whyoleg.cryptography.serialization.asn1.internal.writeBytes' call

          // Inline function 'kotlin.apply' call

          var this_0 = ByteArrayOutput.new_dev_whyoleg_cryptography_serialization_asn1_internal_ByteArrayOutput_clb4f8_k$();
          this_0.write_layvuf_k$(4);
          writeBytes(this_0, bytes);
          writeBytes_1(tmp0, this_0);
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
    }
  }
  writeObjectIdentifier_8c9sjj_k$(tagOverride, value) {
    var tmp0 = this.output_1;
    $l$block: {
      // Inline function 'dev.whyoleg.cryptography.serialization.asn1.internal.writeTagWithOverride' call
      if (tagOverride == null) {
        tmp0.write_layvuf_k$(6);
        // Inline function 'dev.whyoleg.cryptography.serialization.asn1.internal.writeBytes' call
        // Inline function 'kotlin.apply' call
        var this_0 = ByteArrayOutput.new_dev_whyoleg_cryptography_serialization_asn1_internal_ByteArrayOutput_clb4f8_k$();
        writeOidElements(this_0, split(_ObjectIdentifier___get_value__impl__wqzjw3(value), ['.']));
        writeBytes_1(tmp0, this_0);
        break $l$block;
      }
      tmp0.write_layvuf_k$(get_tag(tagOverride));
      switch (tagOverride.get_type_wovaf7_k$().get_ordinal_ip24qg_k$()) {
        case 0:
          // Inline function 'dev.whyoleg.cryptography.serialization.asn1.internal.writeBytes' call

          // Inline function 'kotlin.apply' call

          var this_1 = ByteArrayOutput.new_dev_whyoleg_cryptography_serialization_asn1_internal_ByteArrayOutput_clb4f8_k$();
          writeOidElements(this_1, split(_ObjectIdentifier___get_value__impl__wqzjw3(value), ['.']));
          writeBytes_1(tmp0, this_1);
          break;
        case 1:
          // Inline function 'dev.whyoleg.cryptography.serialization.asn1.internal.writeBytes' call

          // Inline function 'kotlin.apply' call

          var this_2 = ByteArrayOutput.new_dev_whyoleg_cryptography_serialization_asn1_internal_ByteArrayOutput_clb4f8_k$();
          this_2.write_layvuf_k$(6);
          // Inline function 'dev.whyoleg.cryptography.serialization.asn1.internal.writeBytes' call

          // Inline function 'kotlin.apply' call

          var this_3 = ByteArrayOutput.new_dev_whyoleg_cryptography_serialization_asn1_internal_ByteArrayOutput_clb4f8_k$();
          writeOidElements(this_3, split(_ObjectIdentifier___get_value__impl__wqzjw3(value), ['.']));
          writeBytes_1(this_2, this_3);
          writeBytes_1(tmp0, this_2);
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
    }
  }
  writeSequence_x661eo_k$(tagOverride, bytes) {
    var tmp0 = this.output_1;
    $l$block: {
      // Inline function 'dev.whyoleg.cryptography.serialization.asn1.internal.writeTagWithOverride' call
      if (tagOverride == null) {
        tmp0.write_layvuf_k$(48);
        writeBytes_1(tmp0, bytes.output_1);
        break $l$block;
      }
      tmp0.write_layvuf_k$(get_tag(tagOverride));
      switch (tagOverride.get_type_wovaf7_k$().get_ordinal_ip24qg_k$()) {
        case 0:
          writeBytes_1(tmp0, bytes.output_1);
          break;
        case 1:
          // Inline function 'dev.whyoleg.cryptography.serialization.asn1.internal.writeBytes' call

          // Inline function 'kotlin.apply' call

          var this_0 = ByteArrayOutput.new_dev_whyoleg_cryptography_serialization_asn1_internal_ByteArrayOutput_clb4f8_k$();
          this_0.write_layvuf_k$(48);
          writeBytes_1(this_0, bytes.output_1);
          writeBytes_1(tmp0, this_0);
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
    }
  }
}
//endregion
var static_init_called;
function static_init() {
  if (static_init_called)
    return Unit_getInstance();
  static_init_called = true;
  TagType_IMPLICIT_instance = TagType.new_dev_whyoleg_cryptography_serialization_asn1_ContextSpecificTag_TagType_rqqrgw_k$('IMPLICIT', 0);
  TagType_EXPLICIT_instance = TagType.new_dev_whyoleg_cryptography_serialization_asn1_ContextSpecificTag_TagType_rqqrgw_k$('EXPLICIT', 1);
}
var TagType_IMPLICIT_instance;
var TagType_EXPLICIT_instance;
function values() {
  static_init();
  return [TagType_IMPLICIT_getInstance(), TagType_EXPLICIT_getInstance()];
}
function valueOf(value) {
  static_init();
  switch (value) {
    case 'IMPLICIT':
      return TagType_IMPLICIT_getInstance();
    case 'EXPLICIT':
      return TagType_EXPLICIT_getInstance();
    default:
      THROW_IAE('No enum constant dev.whyoleg.cryptography.serialization.asn1.ContextSpecificTag.TagType.' + value);
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
function TagType_IMPLICIT_getInstance() {
  static_init();
  return TagType_IMPLICIT_instance;
}
function TagType_EXPLICIT_getInstance() {
  static_init();
  return TagType_EXPLICIT_instance;
}
var Companion_instance;
function Companion_getInstance_0() {
  if (Companion_instance === VOID)
    Companion.new_dev_whyoleg_cryptography_serialization_asn1_BitArray_Companion_cd0c4b_k$();
  return Companion_instance;
}
var $serializer_instance;
function $serializer_getInstance() {
  if ($serializer_instance === VOID)
    $serializer.new_dev_whyoleg_cryptography_serialization_asn1_BitArray_$serializer_lzpiiw_k$();
  return $serializer_instance;
}
var Default_instance;
function Default_getInstance() {
  if (Default_instance === VOID)
    Default.new_dev_whyoleg_cryptography_serialization_asn1_Der_Default_u645nn_k$();
  return Default_instance;
}
function _ObjectIdentifier___init__impl__7hutfr(value) {
  return value;
}
function _ObjectIdentifier___get_value__impl__wqzjw3($this) {
  return $this;
}
var Companion_instance_0;
function Companion_getInstance_1() {
  if (Companion_instance_0 === VOID)
    Companion_0.new_dev_whyoleg_cryptography_serialization_asn1_ObjectIdentifier_Companion_3n82zp_k$();
  return Companion_instance_0;
}
var $serializer_instance_0;
function $serializer_getInstance_0() {
  if ($serializer_instance_0 === VOID)
    $serializer_0.new_dev_whyoleg_cryptography_serialization_asn1_ObjectIdentifier_$serializer_mwq1h0_k$();
  return $serializer_instance_0;
}
function ObjectIdentifier__toString_impl_dtwsrd($this) {
  return 'ObjectIdentifier(value=' + $this + ')';
}
function ObjectIdentifier__hashCode_impl_7x941i($this) {
  return getStringHashCode($this);
}
function ObjectIdentifier__equals_impl_u5dbkq($this, other) {
  if (!(other instanceof ObjectIdentifier))
    return false;
  if (!($this === other.value_1))
    return false;
  return true;
}
function get_emptyArray() {
  _init_properties_ByteArrayInput_kt__imea6f();
  return emptyArray;
}
var emptyArray;
function _get_array__jslnqg($this) {
  return $this.array_1;
}
function _get_endIndex__oqscuk($this) {
  return $this.endIndex_1;
}
function _set_position__5hlfea($this, _set____db54di) {
  $this.position_1 = _set____db54di;
}
function _get_position__iahqv2($this) {
  return $this.position_1;
}
function _get_available__saq0tk($this) {
  return $this.endIndex_1 - $this.position_1 | 0;
}
function ensureAvailableBytes($this, count) {
  // Inline function 'kotlin.check' call
  if (!(_get_available__saq0tk($this) >= count)) {
    var message = 'Unexpected EOF, available ' + _get_available__saq0tk($this) + ' bytes, requested: ' + count;
    throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message));
  }
}
var properties_initialized_ByteArrayInput_kt_acgl39;
function _init_properties_ByteArrayInput_kt__imea6f() {
  if (!properties_initialized_ByteArrayInput_kt_acgl39) {
    properties_initialized_ByteArrayInput_kt_acgl39 = true;
    emptyArray = new Int8Array(0);
  }
}
function _set_array__c8isr0($this, _set____db54di) {
  $this.array_1 = _set____db54di;
}
function _get_array__jslnqg_0($this) {
  return $this.array_1;
}
function _set_position__5hlfea_0($this, _set____db54di) {
  $this.position_1 = _set____db54di;
}
function _get_position__iahqv2_0($this) {
  return $this.position_1;
}
function ensureCapacity($this, elementsToAppend) {
  if (($this.position_1 + elementsToAppend | 0) <= $this.array_1.length)
    return Unit_getInstance();
  $this.array_1 = copyOf($this.array_1, takeHighestOneBit($this.position_1 + elementsToAppend | 0) << 1);
}
function _get_der__e67068($this) {
  return $this.der_1;
}
function _get_input__g2gq7t($this) {
  return $this.input_1;
}
function _set_currentIndex__cezf6m($this, _set____db54di) {
  $this.currentIndex_1 = _set____db54di;
}
function _get_currentIndex__ryq5qq($this) {
  return $this.currentIndex_1;
}
function _set_tagOverride__vbia7z($this, _set____db54di) {
  $this.tagOverride_1 = _set____db54di;
}
function _get_tagOverride__9f7lf9($this) {
  return $this.tagOverride_1;
}
function getAndResetTagOverride($this) {
  var tag = $this.tagOverride_1;
  $this.tagOverride_1 = null;
  return tag;
}
function _get_der__e67068_0($this) {
  return $this.der_1;
}
function _get_parentOutput__einpnk($this) {
  return $this.parentOutput_1;
}
function _get_output__ji2uqy($this) {
  return $this.output_1;
}
function _set_tagOverride__vbia7z_0($this, _set____db54di) {
  $this.tagOverride_1 = _set____db54di;
}
function _get_tagOverride__9f7lf9_0($this) {
  return $this.tagOverride_1;
}
function getAndResetTagOverride_0($this) {
  var tag = $this.tagOverride_1;
  $this.tagOverride_1 = null;
  return tag;
}
function _get_input__g2gq7t_0($this) {
  return $this.input_1;
}
function readRequestedTag(_this__u8e3s4, tag) {
  var currentTag = _this__u8e3s4.read_22xsm_k$();
  // Inline function 'kotlin.check' call
  if (!(currentTag === tag)) {
    var message = "Requested tag '" + DerTag_name(tag) + "', received: '" + DerTag_name(currentTag) + "'";
    throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message));
  }
}
function readLength(_this__u8e3s4) {
  var first = _this__u8e3s4.read_22xsm_k$();
  if (first >= 0)
    return first;
  var numberOfLengthBytes = first & 127;
  // Inline function 'kotlin.check' call
  if (!(numberOfLengthBytes <= 4)) {
    var message = 'Supported number of bytes for tag length are in range 1..4, but was: ' + numberOfLengthBytes + ' ';
    throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message));
  }
  var length = 0;
  // Inline function 'kotlin.repeat' call
  var inductionVariable = 0;
  if (inductionVariable < numberOfLengthBytes)
    do {
      var index = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      length = (length << 8) + (_this__u8e3s4.read_22xsm_k$() & 255) | 0;
    }
     while (inductionVariable < numberOfLengthBytes);
  // Inline function 'kotlin.check' call
  if (!(length > 0)) {
    var message_0 = 'length overflow: ' + length;
    throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message_0));
  }
  return length;
}
function readTagWithOverride(_this__u8e3s4, tagOverride, tag, block) {
  if (tagOverride == null) {
    readRequestedTag(_this__u8e3s4, tag);
    return block(_this__u8e3s4);
  }
  readRequestedTag(_this__u8e3s4, get_tag(tagOverride));
  var tmp;
  switch (tagOverride.get_type_wovaf7_k$().get_ordinal_ip24qg_k$()) {
    case 0:
      tmp = block(_this__u8e3s4);
      break;
    case 1:
      var length = readLength(_this__u8e3s4);
      var explicitInput = _this__u8e3s4.readSlice_41cssk_k$(length);
      readRequestedTag(explicitInput, tag);
      tmp = block(explicitInput);
      break;
    default:
      noWhenBranchMatchedException();
      break;
  }
  return tmp;
}
function readOidElements(_this__u8e3s4) {
  // Inline function 'kotlin.text.buildString' call
  // Inline function 'kotlin.apply' call
  var this_0 = StringBuilder.new_kotlin_text_StringBuilder_q3um6c_k$();
  var first = readOidElement(_this__u8e3s4);
  if (first < 40)
    this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(48)).append_am5a4z_k$(_Char___init__impl__6a9atx(46)).append_uppzia_k$(first);
  else if (first < 80)
    this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(49)).append_am5a4z_k$(_Char___init__impl__6a9atx(46)).append_uppzia_k$(first - 40 | 0);
  else
    this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(50)).append_am5a4z_k$(_Char___init__impl__6a9atx(46)).append_uppzia_k$(first - 80 | 0);
  while (!_this__u8e3s4.get_eof_18j6gd_k$()) {
    this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(46)).append_uppzia_k$(readOidElement(_this__u8e3s4));
  }
  return this_0.toString();
}
function readOidElement(_this__u8e3s4) {
  var element = 0;
  do {
    var b = _this__u8e3s4.read_22xsm_k$();
    element = (element << 7) + (b & 127) | 0;
  }
   while ((b & 128) === 128);
  // Inline function 'kotlin.check' call
  if (!(element >= 0)) {
    var message = 'element overflow: ' + element;
    throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message));
  }
  return element;
}
function _get_output__ji2uqy_0($this) {
  return $this.output_1;
}
function writeLength(_this__u8e3s4, length) {
  if (length < 128)
    return _this__u8e3s4.write_mg8e2f_k$(length);
  // Inline function 'kotlin.countLeadingZeroBits' call
  var numberOfLengthBytes = 4 - (clz32(length) / 8 | 0) | 0;
  _this__u8e3s4.write_mg8e2f_k$(numberOfLengthBytes | 128);
  // Inline function 'kotlin.repeat' call
  var inductionVariable = 0;
  if (inductionVariable < numberOfLengthBytes)
    do {
      var index = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      _this__u8e3s4.write_mg8e2f_k$(length >>> imul(8, (numberOfLengthBytes - 1 | 0) - index | 0) | 0);
    }
     while (inductionVariable < numberOfLengthBytes);
}
function writeTagWithOverride(_this__u8e3s4, tagOverride, tag, block) {
  if (tagOverride == null) {
    _this__u8e3s4.write_layvuf_k$(tag);
    block(_this__u8e3s4);
    return Unit_getInstance();
  }
  _this__u8e3s4.write_layvuf_k$(get_tag(tagOverride));
  switch (tagOverride.get_type_wovaf7_k$().get_ordinal_ip24qg_k$()) {
    case 0:
      block(_this__u8e3s4);
      break;
    case 1:
      // Inline function 'dev.whyoleg.cryptography.serialization.asn1.internal.writeBytes' call

      // Inline function 'kotlin.apply' call

      var this_0 = ByteArrayOutput.new_dev_whyoleg_cryptography_serialization_asn1_internal_ByteArrayOutput_clb4f8_k$();
      this_0.write_layvuf_k$(tag);
      block(this_0);
      writeBytes_1(_this__u8e3s4, this_0);
      break;
    default:
      noWhenBranchMatchedException();
      break;
  }
}
function writeBytes(_this__u8e3s4, bytes) {
  writeLength(_this__u8e3s4, bytes.length);
  _this__u8e3s4.write_g2w2un_k$(bytes);
}
function writeBytes_0(_this__u8e3s4, block) {
  // Inline function 'kotlin.apply' call
  var this_0 = ByteArrayOutput.new_dev_whyoleg_cryptography_serialization_asn1_internal_ByteArrayOutput_clb4f8_k$();
  block(this_0);
  writeBytes_1(_this__u8e3s4, this_0);
}
function writeOidElements(_this__u8e3s4, elements) {
  // Inline function 'kotlin.check' call
  if (!(elements.get_size_woubt6_k$() >= 2)) {
    var message = 'at least 2 components expected but was ' + elements.get_size_woubt6_k$();
    throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message));
  }
  writeOidElement(_this__u8e3s4, imul(writeOidElements$element(elements, 0), 40) + writeOidElements$element(elements, 1) | 0);
  // Inline function 'kotlin.repeat' call
  var times = elements.get_size_woubt6_k$() - 2 | 0;
  var inductionVariable = 0;
  if (inductionVariable < times)
    do {
      var index = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      writeOidElement(_this__u8e3s4, writeOidElements$element(elements, index + 2 | 0));
    }
     while (inductionVariable < times);
}
function writeBytes_1(_this__u8e3s4, bytes) {
  writeLength(_this__u8e3s4, bytes.get_size_woubt6_k$());
  _this__u8e3s4.write_h4gvfd_k$(bytes);
}
function writeOidElement(_this__u8e3s4, element) {
  if (element < 128)
    return _this__u8e3s4.write_mg8e2f_k$(element);
  // Inline function 'kotlin.countLeadingZeroBits' call
  var l = (32 - clz32(element) | 0) / 7 | 0;
  // Inline function 'kotlin.repeat' call
  var inductionVariable = 0;
  if (inductionVariable < l)
    do {
      var index = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var value = element >>> imul(l - index | 0, 7) | 0;
      if (!(value === 0)) {
        _this__u8e3s4.write_mg8e2f_k$(value & 127 | 128);
      }
    }
     while (inductionVariable < l);
  _this__u8e3s4.write_mg8e2f_k$(element & 127);
}
function writeOidElements$element($elements, index) {
  return toInt($elements.get_c1px32_k$(index));
}
function getElementContextSpecificTag(_this__u8e3s4, index) {
  var tmp0 = _this__u8e3s4.getElementAnnotations_omrjs6_k$(index);
  var tmp$ret$0;
  $l$block: {
    // Inline function 'kotlin.collections.firstOrNull' call
    var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      if (element instanceof ContextSpecificTag) {
        tmp$ret$0 = element;
        break $l$block;
      }
    }
    tmp$ret$0 = null;
  }
  var tmp = tmp$ret$0;
  var tmp0_elvis_lhs = tmp instanceof ContextSpecificTag ? tmp : null;
  var tmp_0;
  if (tmp0_elvis_lhs == null) {
    return null;
  } else {
    tmp_0 = tmp0_elvis_lhs;
  }
  var annotation = tmp_0;
  // Inline function 'kotlin.check' call
  if (!(annotation.get_classIndex_pbaddp_k$() < 31)) {
    var message = 'Context specific tag class must be less than 31, but was ' + annotation.get_classIndex_pbaddp_k$();
    throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message));
  }
  return annotation;
}
function get_tag(_this__u8e3s4) {
  var contextSpecificTag = _this__u8e3s4.get_classIndex_pbaddp_k$() | 128;
  var tmp;
  switch (_this__u8e3s4.get_type_wovaf7_k$().get_ordinal_ip24qg_k$()) {
    case 0:
      tmp = toByte(contextSpecificTag);
      break;
    case 1:
      tmp = toByte(contextSpecificTag | 32);
      break;
    default:
      noWhenBranchMatchedException();
      break;
  }
  return tmp;
}
function DerTag_name(tag) {
  var tmp;
  if (tag === 2) {
    tmp = 'INTEGER';
  } else if (tag === 3) {
    tmp = 'BIT_STRING';
  } else if (tag === 4) {
    tmp = 'OCTET_STRING';
  } else if (tag === 5) {
    tmp = 'NULL';
  } else if (tag === 6) {
    tmp = 'OID';
  } else if (tag === 48) {
    tmp = 'SEQUENCE';
  } else {
    var intTag = tag;
    var tmp_0;
    if (hasFlag(intTag, 128)) {
      var tmp_1;
      if (hasFlag(intTag, 32)) {
        // Inline function 'kotlin.toUByte' call
        var this_0 = (intTag - 128 | 0) - 32 | 0;
        var tmp$ret$0 = _UByte___init__impl__g9hnc4(toByte(this_0));
        tmp_1 = 'CONTEXT_SPECIFIC:EXPLICIT[' + new UByte(tmp$ret$0) + ']';
      } else {
        // Inline function 'kotlin.toUByte' call
        var this_1 = intTag - 128 | 0;
        var tmp$ret$1 = _UByte___init__impl__g9hnc4(toByte(this_1));
        tmp_1 = 'CONTEXT_SPECIFIC:IMPLICIT[' + new UByte(tmp$ret$1) + ']';
      }
      tmp_0 = tmp_1;
    } else {
      // Inline function 'kotlin.toUByte' call
      var tmp$ret$2 = _UByte___init__impl__g9hnc4(tag);
      tmp_0 = 'UNKNOWN[0x' + toString_0(tmp$ret$2, 16) + ']';
    }
    tmp = tmp_0;
  }
  return tmp;
}
function hasFlag(_this__u8e3s4, flag) {
  return (_this__u8e3s4 & flag) === flag;
}
//region block: post-declaration
initMetadataForClass(TagType, 'TagType');
initMetadataForClass(ContextSpecificTag, 'ContextSpecificTag', VOID, VOID, [Annotation]);
initMetadataForCompanion(Companion);
protoOf($serializer).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(BitArray, 'BitArray', VOID, VOID, VOID, VOID, VOID, {[getAssociatedObjectId(SerializableWith)]: $serializer_getInstance});
initMetadataForClass(Der, 'Der', VOID, VOID, [BinaryFormat]);
initMetadataForObject(Default, 'Default');
initMetadataForClass(Builder, 'Builder');
initMetadataForCompanion(Companion_0);
protoOf($serializer_0).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
initMetadataForObject($serializer_0, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(ObjectIdentifier, 'ObjectIdentifier', VOID, VOID, VOID, VOID, VOID, {[getAssociatedObjectId(SerializableWith)]: $serializer_getInstance_0});
initMetadataForClass(ByteArrayInput, 'ByteArrayInput');
initMetadataForClass(ByteArrayOutput, 'ByteArrayOutput', ByteArrayOutput.new_dev_whyoleg_cryptography_serialization_asn1_internal_ByteArrayOutput_clb4f8_k$);
initMetadataForClass(DerDecoder, 'DerDecoder');
initMetadataForClass(DerEncoder, 'DerEncoder');
initMetadataForClass(DerInput, 'DerInput');
initMetadataForClass(DerOutput, 'DerOutput');
//endregion
//region block: exports
export {
  BitArray as BitArray3ibxegq42amh4,
  ContextSpecificTag as ContextSpecificTag1nleqg541pedp,
  ObjectIdentifier as ObjectIdentifierz6uf0uceu1gm,
  _ObjectIdentifier___init__impl__7hutfr as _ObjectIdentifier___init__impl__7hutfr2doqt13dpqtw2,
  ObjectIdentifier__hashCode_impl_7x941i as ObjectIdentifier__hashCode_impl_7x941i166o21hey6yjq,
  ObjectIdentifier__toString_impl_dtwsrd as ObjectIdentifier__toString_impl_dtwsrd390jgdxftpsig,
  _ObjectIdentifier___get_value__impl__wqzjw3 as _ObjectIdentifier___get_value__impl__wqzjw31bh5gezoxh9eh,
  TagType_EXPLICIT_getInstance as TagType_EXPLICIT_getInstance233c5s3cq8nyy,
  TagType_IMPLICIT_getInstance as TagType_IMPLICIT_getInstance35ldd1o1hwiv9,
  $serializer_getInstance as $serializer_getInstance42ouk6y25o1i,
  Default_getInstance as Default_getInstance170n0qpi87z9q,
  $serializer_getInstance_0 as $serializer_getInstance3267e9px7r3t7,
  Companion_getInstance_1 as Companion_getInstance10n28muborka,
};
//endregion

//# sourceMappingURL=cryptography-kotlin-cryptography-serialization-asn1.mjs.map
