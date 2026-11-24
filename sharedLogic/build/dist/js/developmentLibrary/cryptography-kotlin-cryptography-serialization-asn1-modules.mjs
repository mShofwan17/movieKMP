import {
  createThis2j2avj17cvnv2 as createThis,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  VOID3gxj6tk5isa35 as VOID,
  getAssociatedObjectIdbkjrzq7ou3z9 as getAssociatedObjectId,
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  constructCallableReference23y65rf941mch as constructCallableReference,
  getKClass3t8tygqu4lcxf as getKClass,
  Unit_getInstanceu5z48rdn3d6z as Unit_getInstance,
  arrayOf1akklvh2at202 as arrayOf,
  createKType31ecntyyaay3k as createKType,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  isInterface3d6p8outrmvmk as isInterface,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  LinkedHashMap1zhqxkxv3xnkl as LinkedHashMap,
  getKClassFromExpression348iqjl4fnx2f as getKClassFromExpression,
  toString1pkumu07cwy4m as toString,
  IllegalStateExceptionkoljg5n0nrlr as IllegalStateException,
  protoOf180f3jzyo7rfj as protoOf,
  equals2au1ep9vhcato as equals,
  LazyThreadSafetyMode_PUBLICATION_getInstance23f213579at67 as LazyThreadSafetyMode_PUBLICATION_getInstance,
  lazy1261dae0bgscp as lazy,
} from './kotlin-kotlin-stdlib.mjs';
import {
  SerializerFactory1qv9hivitncuv as SerializerFactory,
  SerializableWithd2dap36updxd as SerializableWith,
  serializer1hwzc6m64v1op as serializer,
  KSerializerzf77vz1967fq as KSerializer,
  CONTEXTUAL_getInstance20l1ap7hne5we as CONTEXTUAL_getInstance,
  buildSerialDescriptor2873qmkp8r2ib as buildSerialDescriptor,
  OPEN_getInstance3fojhnrvzj4l0 as OPEN_getInstance,
  NothingSerializer3oixyyf77l4xt as NothingSerializer,
  get_nullable1xmxlk8ba6b4f as get_nullable,
  PluginGeneratedSerialDescriptorqdzeg5asqhfg as PluginGeneratedSerialDescriptor,
  IntSerializer_getInstance3jyhns9ue706g as IntSerializer_getInstance,
  UnknownFieldExceptiona60e3a6v1xqo as UnknownFieldException,
  get_nullable197rfua9r7fsz as get_nullable_0,
  typeParametersSerializers2likxjr48tr7y as typeParametersSerializers,
  GeneratedSerializer1f7t7hssdd2ws as GeneratedSerializer,
  throwMissingFieldException2cmke0v3ynf14 as throwMissingFieldException,
  InlineClassDescriptor2odlvyasjrmr0 as InlineClassDescriptor,
  ByteArraySerializer_getInstance2fuv9a137bvc4 as ByteArraySerializer_getInstance,
  ContextualSerializer1uidivg94sh5v as ContextualSerializer,
} from './kotlinx-serialization-kotlinx-serialization-core.mjs';
import {
  Companion_getInstance10n28muborka as Companion_getInstance,
  ObjectIdentifierz6uf0uceu1gm as ObjectIdentifier,
  ObjectIdentifier__toString_impl_dtwsrd390jgdxftpsig as ObjectIdentifier__toString_impl_dtwsrd,
  _ObjectIdentifier___init__impl__7hutfr2doqt13dpqtw2 as _ObjectIdentifier___init__impl__7hutfr,
  $serializer_getInstance3267e9px7r3t7 as $serializer_getInstance,
  ObjectIdentifier__hashCode_impl_7x941i166o21hey6yjq as ObjectIdentifier__hashCode_impl_7x941i,
  TagType_EXPLICIT_getInstance233c5s3cq8nyy as TagType_EXPLICIT_getInstance,
  ContextSpecificTag1nleqg541pedp as ContextSpecificTag,
  $serializer_getInstance42ouk6y25o1i as $serializer_getInstance_0,
  TagType_IMPLICIT_getInstance35ldd1o1hwiv9 as TagType_IMPLICIT_getInstance,
} from './cryptography-kotlin-cryptography-serialization-asn1.mjs';
import { BigIntAsStringSerializer_getInstance3isniqtbvm463 as BigIntAsStringSerializer_getInstance } from './cryptography-kotlin-cryptography-bigint.mjs';
//region block: imports
//endregion
//region block: pre-declaration
class Companion {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_serialization_asn1_modules_AlgorithmIdentifier_Companion_8opubp_k$();
  }
  static new_dev_whyoleg_cryptography_serialization_asn1_modules_AlgorithmIdentifier_Companion_8opubp_k$($box) {
    var $this = createThis(this, $box);
    Companion_instance = $this;
    return $this;
  }
  serializer_9w0wvi_k$() {
    return DefaultAlgorithmIdentifierSerializer_getInstance();
  }
  serializer_nv39qc_k$(typeParamsSerializers) {
    return this.serializer_9w0wvi_k$();
  }
}
class AlgorithmIdentifier {}
class AlgorithmIdentifierSerializer {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_serialization_asn1_modules_AlgorithmIdentifierSerializer_huqsfp_k$();
  }
  static new_dev_whyoleg_cryptography_serialization_asn1_modules_AlgorithmIdentifierSerializer_huqsfp_k$($box) {
    var $this = createThis(this, $box);
    var tmp = $this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.byClass_1 = LinkedHashMap.new_kotlin_collections_LinkedHashMap_8xehp8_k$();
    var tmp_0 = $this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.byOid_1 = LinkedHashMap.new_kotlin_collections_LinkedHashMap_8xehp8_k$();
    var tmp_1 = $this;
    var tmp_2 = OPEN_getInstance();
    tmp_1.descriptor_1 = buildSerialDescriptor('AlgorithmIdentifier', tmp_2, [], AlgorithmIdentifierSerializer$descriptor$lambda);
    return $this;
  }
  algorithm_v0wplk_k$(oid, cls, parametersSerializer, factory) {
    return algorithm(this, oid, cls, AlgorithmEntry.new_dev_whyoleg_cryptography_serialization_asn1_modules_AlgorithmIdentifierSerializer_AlgorithmEntry_u8f494_k$(parametersSerializer, typeof factory === 'function' ? factory : THROW_CCE()));
  }
  algorithm_t5lral_k$(oid, cls, instance, encodeNull) {
    var tmp = encodeNull ? NothingSerializer() : AbsentNothingSerializer_getInstance();
    return this.algorithm_v0wplk_k$(oid, cls, tmp, AlgorithmIdentifierSerializer$algorithm$lambda(instance));
  }
  get_descriptor_wjt6a0_k$() {
    return this.descriptor_1;
  }
  serialize_r2rg33_k$(encoder, value) {
    // Inline function 'kotlinx.serialization.encoding.encodeStructure' call
    var descriptor = this.descriptor_1;
    var composite = encoder.beginStructure_yljocp_k$(descriptor);
    composite.encodeSerializableElement_isqxcl_k$(this.descriptor_1, 0, Companion_getInstance().serializer_9w0wvi_k$(), new ObjectIdentifier(value.get_algorithm_ww1v0i_k$()));
    var tmp0_safe_receiver = this.byClass_1.get_wei43m_k$(getKClassFromExpression(value));
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.serializer_1;
    var tmp1_elvis_lhs = (!(tmp == null) ? isInterface(tmp, KSerializer) : false) ? tmp : null;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.error' call
      var message = 'No serializer for ' + toString(getKClassFromExpression(value));
      throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message));
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    composite.encodeNullableSerializableElement_5lquiv_k$(this.descriptor_1, 1, tmp_0, value.get_parameters_cl4rkd_k$());
    composite.endStructure_1xqz0n_k$(descriptor);
    return Unit_getInstance();
  }
  serialize_5ase3y_k$(encoder, value) {
    return this.serialize_r2rg33_k$(encoder, (!(value == null) ? isInterface(value, AlgorithmIdentifier) : false) ? value : THROW_CCE());
  }
  deserialize_sy6x50_k$(decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.descriptor_1;
    var composite = decoder.beginStructure_yljocp_k$(descriptor);
    // Inline function 'kotlin.check' call
    if (!(composite.decodeElementIndex_bstkhp_k$(this.descriptor_1) === 0)) {
      throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$('Check failed.');
    }
    var algorithm = composite.decodeSerializableElement$default_j0zaoi_k$(this.descriptor_1, 0, Companion_getInstance().serializer_9w0wvi_k$()).value_1;
    var tmp0_elvis_lhs = this.byOid_1.get_wei43m_k$(new ObjectIdentifier(algorithm));
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.error' call
      var message = 'Unknown algorithm: ' + ObjectIdentifier__toString_impl_dtwsrd(algorithm);
      throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var entry = tmp;
    var index = composite.decodeElementIndex_bstkhp_k$(this.descriptor_1);
    var tmp_0;
    switch (index) {
      case 1:
        var parameters = composite.decodeNullableSerializableElement$default_q1b6sc_k$(this.descriptor_1, 1, entry.serializer_1);
        // Inline function 'kotlin.check' call

        if (!(composite.decodeElementIndex_bstkhp_k$(this.descriptor_1) === -1)) {
          throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$('Check failed.');
        }

        tmp_0 = parameters;
        break;
      case -1:
        tmp_0 = null;
        break;
      default:
        // Inline function 'kotlin.error' call

        var message_0 = 'Unexpected element index: ' + index;
        throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message_0));
    }
    var parameters_0 = tmp_0;
    var result = entry.factory_1(parameters_0);
    composite.endStructure_1xqz0n_k$(descriptor);
    return result;
  }
}
class DefaultAlgorithmIdentifierSerializer extends AlgorithmIdentifierSerializer {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_serialization_asn1_modules_DefaultAlgorithmIdentifierSerializer_7muapp_k$();
  }
  static new_dev_whyoleg_cryptography_serialization_asn1_modules_DefaultAlgorithmIdentifierSerializer_7muapp_k$($box) {
    DefaultAlgorithmIdentifierSerializer_instance = null;
    var $this = this.new_dev_whyoleg_cryptography_serialization_asn1_modules_AlgorithmIdentifierSerializer_huqsfp_k$($box);
    DefaultAlgorithmIdentifierSerializer_instance = $this;
    var tmp2 = get_RSA(Companion_getInstance());
    // Inline function 'dev.whyoleg.cryptography.serialization.asn1.modules.AlgorithmIdentifierSerializer.algorithm' call
    var instance = RsaAlgorithmIdentifier_getInstance();
    $this.algorithm_t5lral_k$(tmp2, getKClass(RsaAlgorithmIdentifier), instance, true);
    var tmp2_0 = get_EC(Companion_getInstance());
    // Inline function 'dev.whyoleg.cryptography.serialization.asn1.modules.AlgorithmIdentifierSerializer.algorithm' call
    var factory = EcAlgorithmIdentifier$_init_$ref_qcyxlh();
    var tmp = getKClass(EcAlgorithmIdentifier);
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(EcParameters), arrayOf([]), true));
    var tmp$ret$2 = isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
    $this.algorithm_v0wplk_k$(tmp2_0, tmp, tmp$ret$2, factory);
    var tmp2_1 = get_DH(Companion_getInstance());
    // Inline function 'dev.whyoleg.cryptography.serialization.asn1.modules.AlgorithmIdentifierSerializer.algorithm' call
    var factory_0 = DhAlgorithmIdentifier$_init_$ref_z516pb();
    var tmp_0 = getKClass(DhAlgorithmIdentifier);
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_1 = serializer(createKType(getKClass(DhParameters), arrayOf([]), true));
    var tmp$ret$5 = isInterface(this_1, KSerializer) ? this_1 : THROW_CCE();
    $this.algorithm_v0wplk_k$(tmp2_1, tmp_0, tmp$ret$5, factory_0);
    var tmp2_2 = get_DSA(Companion_getInstance());
    // Inline function 'dev.whyoleg.cryptography.serialization.asn1.modules.AlgorithmIdentifierSerializer.algorithm' call
    var factory_1 = DsaAlgorithmIdentifier$_init_$ref_pugpj3();
    var tmp_1 = getKClass(DsaAlgorithmIdentifier);
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(createKType(getKClass(DsaParameters), arrayOf([]), true));
    var tmp$ret$8 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    $this.algorithm_v0wplk_k$(tmp2_2, tmp_1, tmp$ret$8, factory_1);
    var tmp2_3 = get_X25519(Companion_getInstance());
    // Inline function 'dev.whyoleg.cryptography.serialization.asn1.modules.AlgorithmIdentifierSerializer.algorithm' call
    var instance_0 = X25519AlgorithmIdentifier_getInstance();
    $this.algorithm_t5lral_k$(tmp2_3, getKClass(X25519AlgorithmIdentifier), instance_0, false);
    var tmp2_4 = get_X448(Companion_getInstance());
    // Inline function 'dev.whyoleg.cryptography.serialization.asn1.modules.AlgorithmIdentifierSerializer.algorithm' call
    var instance_1 = X448AlgorithmIdentifier_getInstance();
    $this.algorithm_t5lral_k$(tmp2_4, getKClass(X448AlgorithmIdentifier), instance_1, false);
    var tmp2_5 = get_Ed25519(Companion_getInstance());
    // Inline function 'dev.whyoleg.cryptography.serialization.asn1.modules.AlgorithmIdentifierSerializer.algorithm' call
    var instance_2 = Ed25519AlgorithmIdentifier_getInstance();
    $this.algorithm_t5lral_k$(tmp2_5, getKClass(Ed25519AlgorithmIdentifier), instance_2, false);
    var tmp2_6 = get_Ed448(Companion_getInstance());
    // Inline function 'dev.whyoleg.cryptography.serialization.asn1.modules.AlgorithmIdentifierSerializer.algorithm' call
    var instance_3 = Ed448AlgorithmIdentifier_getInstance();
    $this.algorithm_t5lral_k$(tmp2_6, getKClass(Ed448AlgorithmIdentifier), instance_3, false);
    return $this;
  }
}
class AlgorithmEntry {
  constructor(serializer, factory) {
    return new.target.new_dev_whyoleg_cryptography_serialization_asn1_modules_AlgorithmIdentifierSerializer_AlgorithmEntry_u8f494_k$(serializer, factory);
  }
  static new_dev_whyoleg_cryptography_serialization_asn1_modules_AlgorithmIdentifierSerializer_AlgorithmEntry_u8f494_k$(serializer, factory, $box) {
    var $this = createThis(this, $box);
    $this.serializer_1 = serializer;
    $this.factory_1 = factory;
    return $this;
  }
  get_serializer_u29zhh_k$() {
    return this.serializer_1;
  }
  get_factory_gsiw2n_k$() {
    return this.factory_1;
  }
}
class AbsentNothingSerializer {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_serialization_asn1_modules_AbsentNothingSerializer_lf2xx8_k$();
  }
  static new_dev_whyoleg_cryptography_serialization_asn1_modules_AbsentNothingSerializer_lf2xx8_k$($box) {
    var $this = createThis(this, $box);
    AbsentNothingSerializer_instance = $this;
    $this.descriptor_1 = get_nullable(NothingSerializer().get_descriptor_wjt6a0_k$());
    return $this;
  }
  get_descriptor_wjt6a0_k$() {
    return this.descriptor_1;
  }
  serialize_z06x37_k$(encoder, value) {
  }
  serialize_5ase3y_k$(encoder, value) {
    var tmp;
    var tmp_0;
    if (value == null) {
      tmp_0 = true;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = value;
    } else {
      tmp = THROW_CCE();
    }
    return this.serialize_z06x37_k$(encoder, tmp);
  }
  deserialize_sy6x50_k$(decoder) {
    return null;
  }
}
class Companion_0 {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_serialization_asn1_modules_DhParameters_Companion_m2nprp_k$();
  }
  static new_dev_whyoleg_cryptography_serialization_asn1_modules_DhParameters_Companion_m2nprp_k$($box) {
    var $this = createThis(this, $box);
    Companion_instance_0 = $this;
    return $this;
  }
  serializer_9w0wvi_k$() {
    return $serializer_getInstance_1();
  }
}
class $serializer {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_serialization_asn1_modules_DhParameters_$serializer_ik3csu_k$();
  }
  static new_dev_whyoleg_cryptography_serialization_asn1_modules_DhParameters_$serializer_ik3csu_k$($box) {
    var $this = createThis(this, $box);
    $serializer_instance = $this;
    var tmp0_serialDesc = PluginGeneratedSerialDescriptor.new_kotlinx_serialization_internal_PluginGeneratedSerialDescriptor_x9evkg_k$('dev.whyoleg.cryptography.serialization.asn1.modules.DhParameters', $this, 3);
    tmp0_serialDesc.addElement_5pzumi_k$('prime', false);
    tmp0_serialDesc.addElement_5pzumi_k$('base', false);
    tmp0_serialDesc.addElement_5pzumi_k$('privateValueLength', true);
    $this.descriptor_1 = tmp0_serialDesc;
    return $this;
  }
  serialize_xfwcun_k$(encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    tmp1_output.encodeSerializableElement_isqxcl_k$(tmp0_desc, 0, BigIntAsStringSerializer_getInstance(), value.prime_1);
    tmp1_output.encodeSerializableElement_isqxcl_k$(tmp0_desc, 1, BigIntAsStringSerializer_getInstance(), value.base_1);
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 2) ? true : !(value.privateValueLength_1 == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 2, IntSerializer_getInstance(), value.privateValueLength_1);
    }
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  }
  serialize_5ase3y_k$(encoder, value) {
    return this.serialize_xfwcun_k$(encoder, value instanceof DhParameters ? value : THROW_CCE());
  }
  deserialize_sy6x50_k$(decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp7_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp7_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 0, BigIntAsStringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 1, BigIntAsStringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 2, IntSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 0, BigIntAsStringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 1, BigIntAsStringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 2, IntSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.new_kotlinx_serialization_UnknownFieldException_r32xsj_k$(tmp2_index);
        }
      }
    tmp7_input.endStructure_1xqz0n_k$(tmp0_desc);
    return DhParameters.new_dev_whyoleg_cryptography_serialization_asn1_modules_DhParameters_vyx3fz_k$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  get_descriptor_wjt6a0_k$() {
    return this.descriptor_1;
  }
  childSerializers_5ghqw5_k$() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [BigIntAsStringSerializer_getInstance(), BigIntAsStringSerializer_getInstance(), get_nullable_0(IntSerializer_getInstance())];
  }
}
class DhParameters {
  constructor(prime, base, privateValueLength) {
    return new.target.new_dev_whyoleg_cryptography_serialization_asn1_modules_DhParameters_u0vp48_k$(prime, base, privateValueLength);
  }
  static new_dev_whyoleg_cryptography_serialization_asn1_modules_DhParameters_u0vp48_k$(prime, base, privateValueLength, $box) {
    Companion_getInstance_1();
    privateValueLength = privateValueLength === VOID ? null : privateValueLength;
    var $this = createThis(this, $box);
    $this.prime_1 = prime;
    $this.base_1 = base;
    $this.privateValueLength_1 = privateValueLength;
    return $this;
  }
  get_prime_ix1f86_k$() {
    return this.prime_1;
  }
  get_base_wojaxm_k$() {
    return this.base_1;
  }
  get_privateValueLength_4w6rsz_k$() {
    return this.privateValueLength_1;
  }
  static new_dev_whyoleg_cryptography_serialization_asn1_modules_DhParameters_vyx3fz_k$(seen0, prime, base, privateValueLength, serializationConstructorMarker, $box) {
    Companion_getInstance_1();
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_1().descriptor_1);
    }
    var $this = createThis(this, $box);
    $this.prime_1 = prime;
    $this.base_1 = base;
    if (0 === (seen0 & 4))
      $this.privateValueLength_1 = null;
    else
      $this.privateValueLength_1 = privateValueLength;
    return $this;
  }
}
class DhAlgorithmIdentifier {
  constructor(parameters) {
    return new.target.new_dev_whyoleg_cryptography_serialization_asn1_modules_DhAlgorithmIdentifier_943ow2_k$(parameters);
  }
  static new_dev_whyoleg_cryptography_serialization_asn1_modules_DhAlgorithmIdentifier_943ow2_k$(parameters, $box) {
    var $this = createThis(this, $box);
    $this.parameters_1 = parameters;
    return $this;
  }
  get_parameters_cl4rkd_k$() {
    return this.parameters_1;
  }
  get_algorithm_ww1v0i_k$() {
    return get_DH(Companion_getInstance());
  }
}
class Companion_1 {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_serialization_asn1_modules_DsaParameters_Companion_m5nqbp_k$();
  }
  static new_dev_whyoleg_cryptography_serialization_asn1_modules_DsaParameters_Companion_m5nqbp_k$($box) {
    var $this = createThis(this, $box);
    Companion_instance_1 = $this;
    return $this;
  }
  serializer_9w0wvi_k$() {
    return $serializer_getInstance_2();
  }
}
class $serializer_0 {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_serialization_asn1_modules_DsaParameters_$serializer_2i5j40_k$();
  }
  static new_dev_whyoleg_cryptography_serialization_asn1_modules_DsaParameters_$serializer_2i5j40_k$($box) {
    var $this = createThis(this, $box);
    $serializer_instance_0 = $this;
    var tmp0_serialDesc = PluginGeneratedSerialDescriptor.new_kotlinx_serialization_internal_PluginGeneratedSerialDescriptor_x9evkg_k$('dev.whyoleg.cryptography.serialization.asn1.modules.DsaParameters', $this, 3);
    tmp0_serialDesc.addElement_5pzumi_k$('prime', false);
    tmp0_serialDesc.addElement_5pzumi_k$('subprime', false);
    tmp0_serialDesc.addElement_5pzumi_k$('generator', false);
    $this.descriptor_1 = tmp0_serialDesc;
    return $this;
  }
  serialize_1mkve3_k$(encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    tmp1_output.encodeSerializableElement_isqxcl_k$(tmp0_desc, 0, BigIntAsStringSerializer_getInstance(), value.prime_1);
    tmp1_output.encodeSerializableElement_isqxcl_k$(tmp0_desc, 1, BigIntAsStringSerializer_getInstance(), value.subprime_1);
    tmp1_output.encodeSerializableElement_isqxcl_k$(tmp0_desc, 2, BigIntAsStringSerializer_getInstance(), value.generator_1);
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  }
  serialize_5ase3y_k$(encoder, value) {
    return this.serialize_1mkve3_k$(encoder, value instanceof DsaParameters ? value : THROW_CCE());
  }
  deserialize_sy6x50_k$(decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp7_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp7_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 0, BigIntAsStringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 1, BigIntAsStringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 2, BigIntAsStringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 0, BigIntAsStringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 1, BigIntAsStringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 2, BigIntAsStringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.new_kotlinx_serialization_UnknownFieldException_r32xsj_k$(tmp2_index);
        }
      }
    tmp7_input.endStructure_1xqz0n_k$(tmp0_desc);
    return DsaParameters.new_dev_whyoleg_cryptography_serialization_asn1_modules_DsaParameters_qor0g3_k$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  get_descriptor_wjt6a0_k$() {
    return this.descriptor_1;
  }
  childSerializers_5ghqw5_k$() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [BigIntAsStringSerializer_getInstance(), BigIntAsStringSerializer_getInstance(), BigIntAsStringSerializer_getInstance()];
  }
}
class DsaParameters {
  constructor(prime, subprime, generator) {
    return new.target.new_dev_whyoleg_cryptography_serialization_asn1_modules_DsaParameters_z5s19g_k$(prime, subprime, generator);
  }
  static new_dev_whyoleg_cryptography_serialization_asn1_modules_DsaParameters_z5s19g_k$(prime, subprime, generator, $box) {
    Companion_getInstance_2();
    var $this = createThis(this, $box);
    $this.prime_1 = prime;
    $this.subprime_1 = subprime;
    $this.generator_1 = generator;
    return $this;
  }
  get_prime_ix1f86_k$() {
    return this.prime_1;
  }
  get_subprime_53d1c8_k$() {
    return this.subprime_1;
  }
  get_generator_d9da22_k$() {
    return this.generator_1;
  }
  static new_dev_whyoleg_cryptography_serialization_asn1_modules_DsaParameters_qor0g3_k$(seen0, prime, subprime, generator, serializationConstructorMarker, $box) {
    Companion_getInstance_2();
    if (!(7 === (7 & seen0))) {
      throwMissingFieldException(seen0, 7, $serializer_getInstance_2().descriptor_1);
    }
    var $this = createThis(this, $box);
    $this.prime_1 = prime;
    $this.subprime_1 = subprime;
    $this.generator_1 = generator;
    return $this;
  }
}
class DsaAlgorithmIdentifier {
  constructor(parameters) {
    return new.target.new_dev_whyoleg_cryptography_serialization_asn1_modules_DsaAlgorithmIdentifier_xk2cfk_k$(parameters);
  }
  static new_dev_whyoleg_cryptography_serialization_asn1_modules_DsaAlgorithmIdentifier_xk2cfk_k$(parameters, $box) {
    var $this = createThis(this, $box);
    $this.parameters_1 = parameters;
    return $this;
  }
  get_parameters_cl4rkd_k$() {
    return this.parameters_1;
  }
  get_algorithm_ww1v0i_k$() {
    return get_DSA(Companion_getInstance());
  }
}
class Companion_2 {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_serialization_asn1_modules_DssSignatureValue_Companion_9z1onb_k$();
  }
  static new_dev_whyoleg_cryptography_serialization_asn1_modules_DssSignatureValue_Companion_9z1onb_k$($box) {
    var $this = createThis(this, $box);
    Companion_instance_2 = $this;
    return $this;
  }
  serializer_9w0wvi_k$() {
    return $serializer_getInstance_3();
  }
}
class $serializer_1 {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_serialization_asn1_modules_DssSignatureValue_$serializer_5r46g3_k$();
  }
  static new_dev_whyoleg_cryptography_serialization_asn1_modules_DssSignatureValue_$serializer_5r46g3_k$($box) {
    var $this = createThis(this, $box);
    $serializer_instance_1 = $this;
    var tmp0_serialDesc = PluginGeneratedSerialDescriptor.new_kotlinx_serialization_internal_PluginGeneratedSerialDescriptor_x9evkg_k$('dev.whyoleg.cryptography.serialization.asn1.modules.DssSignatureValue', $this, 2);
    tmp0_serialDesc.addElement_5pzumi_k$('r', false);
    tmp0_serialDesc.addElement_5pzumi_k$('s', false);
    $this.descriptor_1 = tmp0_serialDesc;
    return $this;
  }
  serialize_szmk22_k$(encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    tmp1_output.encodeSerializableElement_isqxcl_k$(tmp0_desc, 0, BigIntAsStringSerializer_getInstance(), value.r_1);
    tmp1_output.encodeSerializableElement_isqxcl_k$(tmp0_desc, 1, BigIntAsStringSerializer_getInstance(), value.s_1);
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  }
  serialize_5ase3y_k$(encoder, value) {
    return this.serialize_szmk22_k$(encoder, value instanceof DssSignatureValue ? value : THROW_CCE());
  }
  deserialize_sy6x50_k$(decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp6_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp6_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 0, BigIntAsStringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 1, BigIntAsStringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 0, BigIntAsStringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 1, BigIntAsStringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.new_kotlinx_serialization_UnknownFieldException_r32xsj_k$(tmp2_index);
        }
      }
    tmp6_input.endStructure_1xqz0n_k$(tmp0_desc);
    return DssSignatureValue.new_dev_whyoleg_cryptography_serialization_asn1_modules_DssSignatureValue_7mcq2o_k$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  get_descriptor_wjt6a0_k$() {
    return this.descriptor_1;
  }
  childSerializers_5ghqw5_k$() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [BigIntAsStringSerializer_getInstance(), BigIntAsStringSerializer_getInstance()];
  }
}
class DssSignatureValue {
  constructor(r, s) {
    return new.target.new_dev_whyoleg_cryptography_serialization_asn1_modules_DssSignatureValue_i3q4rg_k$(r, s);
  }
  static new_dev_whyoleg_cryptography_serialization_asn1_modules_DssSignatureValue_i3q4rg_k$(r, s, $box) {
    Companion_getInstance_3();
    var $this = createThis(this, $box);
    $this.r_1 = r;
    $this.s_1 = s;
    return $this;
  }
  get_r_1mhr61_k$() {
    return this.r_1;
  }
  get_s_1mhr62_k$() {
    return this.s_1;
  }
  static new_dev_whyoleg_cryptography_serialization_asn1_modules_DssSignatureValue_7mcq2o_k$(seen0, r, s, serializationConstructorMarker, $box) {
    Companion_getInstance_3();
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_3().descriptor_1);
    }
    var $this = createThis(this, $box);
    $this.r_1 = r;
    $this.s_1 = s;
    return $this;
  }
}
class EcAlgorithmIdentifier {
  constructor(parameters) {
    return new.target.new_dev_whyoleg_cryptography_serialization_asn1_modules_EcAlgorithmIdentifier_rfrljw_k$(parameters);
  }
  static new_dev_whyoleg_cryptography_serialization_asn1_modules_EcAlgorithmIdentifier_rfrljw_k$(parameters, $box) {
    var $this = createThis(this, $box);
    $this.parameters_1 = parameters;
    return $this;
  }
  get_parameters_sh3uwq_k$() {
    return this.parameters_1;
  }
  get_parameters_cl4rkd_k$() {
    var tmp = this.get_parameters_sh3uwq_k$();
    return tmp == null ? null : new EcParameters(tmp);
  }
  get_algorithm_ww1v0i_k$() {
    return get_EC(Companion_getInstance());
  }
}
class Companion_3 {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_serialization_asn1_modules_EcParameters_Companion_8h1fxx_k$();
  }
  static new_dev_whyoleg_cryptography_serialization_asn1_modules_EcParameters_Companion_8h1fxx_k$($box) {
    var $this = createThis(this, $box);
    Companion_instance_3 = $this;
    return $this;
  }
  serializer_9w0wvi_k$() {
    return $serializer_getInstance_4();
  }
}
class $serializer_2 {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_serialization_asn1_modules_EcParameters_$serializer_bll08k_k$();
  }
  static new_dev_whyoleg_cryptography_serialization_asn1_modules_EcParameters_$serializer_bll08k_k$($box) {
    var $this = createThis(this, $box);
    $serializer_instance_2 = $this;
    var tmp0_serialDesc = InlineClassDescriptor.new_kotlinx_serialization_internal_InlineClassDescriptor_mqqz6i_k$('dev.whyoleg.cryptography.serialization.asn1.modules.EcParameters', $this);
    tmp0_serialDesc.addElement_5pzumi_k$('namedCurve', false);
    $this.descriptor_1 = tmp0_serialDesc;
    return $this;
  }
  serialize_tdg7pz_k$(encoder, value) {
    var tmp0_inlineEncoder = encoder.encodeInline_wxp5pu_k$(this.descriptor_1);
    if (tmp0_inlineEncoder == null)
      null;
    else {
      tmp0_inlineEncoder.encodeSerializableValue_3uuzip_k$($serializer_getInstance(), new ObjectIdentifier(_EcParameters___get_namedCurve__impl__oibidm(value)));
    }
  }
  serialize_5ase3y_k$(encoder, value) {
    return this.serialize_tdg7pz_k$(encoder, value instanceof EcParameters ? value.namedCurve_1 : THROW_CCE());
  }
  deserialize_84zdeg_k$(decoder) {
    return _EcParameters___init__impl__i4ww9z(decoder.decodeInline_ux3vza_k$(this.descriptor_1).decodeSerializableValue_xpnpad_k$($serializer_getInstance()).value_1);
  }
  deserialize_sy6x50_k$(decoder) {
    return new EcParameters(this.deserialize_84zdeg_k$(decoder));
  }
  get_descriptor_wjt6a0_k$() {
    return this.descriptor_1;
  }
  childSerializers_5ghqw5_k$() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [$serializer_getInstance()];
  }
}
class EcParameters {
  constructor(namedCurve) {
    Companion_getInstance_4();
    this.namedCurve_1 = namedCurve;
  }
  toString() {
    return EcParameters__toString_impl_mgxjuh(this.namedCurve_1);
  }
  hashCode() {
    return EcParameters__hashCode_impl_prn1m(this.namedCurve_1);
  }
  equals(other) {
    return EcParameters__equals_impl_5tm4e2(this.namedCurve_1, other);
  }
}
class Companion_4 {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_serialization_asn1_modules_EcPrivateKey_Companion_r4n0p7_k$();
  }
  static new_dev_whyoleg_cryptography_serialization_asn1_modules_EcPrivateKey_Companion_r4n0p7_k$($box) {
    var $this = createThis(this, $box);
    Companion_instance_4 = $this;
    return $this;
  }
  serializer_9w0wvi_k$() {
    return $serializer_getInstance_5();
  }
}
class $serializer_3 {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_serialization_asn1_modules_EcPrivateKey_$serializer_tsgxry_k$();
  }
  static new_dev_whyoleg_cryptography_serialization_asn1_modules_EcPrivateKey_$serializer_tsgxry_k$($box) {
    var $this = createThis(this, $box);
    $serializer_instance_3 = $this;
    var tmp0_serialDesc = PluginGeneratedSerialDescriptor.new_kotlinx_serialization_internal_PluginGeneratedSerialDescriptor_x9evkg_k$('dev.whyoleg.cryptography.serialization.asn1.modules.EcPrivateKey', $this, 4);
    tmp0_serialDesc.addElement_5pzumi_k$('version', false);
    tmp0_serialDesc.addElement_5pzumi_k$('privateKey', false);
    tmp0_serialDesc.addElement_5pzumi_k$('parameters', true);
    tmp0_serialDesc.pushAnnotation_fm15ho_k$(new ContextSpecificTag(0, TagType_EXPLICIT_getInstance()));
    tmp0_serialDesc.addElement_5pzumi_k$('publicKey', true);
    tmp0_serialDesc.pushAnnotation_fm15ho_k$(new ContextSpecificTag(1, TagType_EXPLICIT_getInstance()));
    $this.descriptor_1 = tmp0_serialDesc;
    return $this;
  }
  serialize_9lbnyz_k$(encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 0, value.version_1);
    tmp1_output.encodeSerializableElement_isqxcl_k$(tmp0_desc, 1, ByteArraySerializer_getInstance(), value.privateKey_1);
    var tmp;
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 2)) {
      tmp = true;
    } else {
      var tmp_0 = value.parameters_1;
      tmp = !((tmp_0 == null ? null : new EcParameters(tmp_0)) == null);
    }
    if (tmp) {
      var tmp_1 = $serializer_getInstance_4();
      var tmp_2 = value.parameters_1;
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 2, tmp_1, tmp_2 == null ? null : new EcParameters(tmp_2));
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 3) ? true : !(value.publicKey_1 == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 3, $serializer_getInstance_0(), value.publicKey_1);
    }
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  }
  serialize_5ase3y_k$(encoder, value) {
    return this.serialize_9lbnyz_k$(encoder, value instanceof EcPrivateKey ? value : THROW_CCE());
  }
  deserialize_sy6x50_k$(decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp8_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp8_input.decodeIntElement_941u6a_k$(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 1, ByteArraySerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      var tmp = $serializer_getInstance_4();
      var tmp_0 = tmp6_local2;
      var tmp_1 = tmp8_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 2, tmp, tmp_0 == null ? null : new EcParameters(tmp_0));
      tmp6_local2 = tmp_1 == null ? null : tmp_1.namedCurve_1;
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 3, $serializer_getInstance_0(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.decodeIntElement_941u6a_k$(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 1, ByteArraySerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            var tmp_2 = $serializer_getInstance_4();
            var tmp_3 = tmp6_local2;
            var tmp_4 = tmp8_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 2, tmp_2, tmp_3 == null ? null : new EcParameters(tmp_3));
            tmp6_local2 = tmp_4 == null ? null : tmp_4.namedCurve_1;
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 3, $serializer_getInstance_0(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException.new_kotlinx_serialization_UnknownFieldException_r32xsj_k$(tmp2_index);
        }
      }
    tmp8_input.endStructure_1xqz0n_k$(tmp0_desc);
    return EcPrivateKey.new_dev_whyoleg_cryptography_serialization_asn1_modules_EcPrivateKey_inlcr1_k$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  get_descriptor_wjt6a0_k$() {
    return this.descriptor_1;
  }
  childSerializers_5ghqw5_k$() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), ByteArraySerializer_getInstance(), get_nullable_0($serializer_getInstance_4()), get_nullable_0($serializer_getInstance_0())];
  }
}
class EcPrivateKey {
  constructor(version, privateKey, parameters, publicKey) {
    return new.target.new_dev_whyoleg_cryptography_serialization_asn1_modules_EcPrivateKey_tbmsa_k$(version, privateKey, parameters, publicKey);
  }
  static new_dev_whyoleg_cryptography_serialization_asn1_modules_EcPrivateKey_tbmsa_k$(version, privateKey, parameters, publicKey, $box) {
    Companion_getInstance_5();
    parameters = parameters === VOID ? null : parameters;
    publicKey = publicKey === VOID ? null : publicKey;
    var $this = createThis(this, $box);
    $this.version_1 = version;
    $this.privateKey_1 = privateKey;
    $this.parameters_1 = parameters;
    $this.publicKey_1 = publicKey;
    return $this;
  }
  get_version_72w4j3_k$() {
    return this.version_1;
  }
  get_privateKey_jtw9r9_k$() {
    return this.privateKey_1;
  }
  get_parameters_sh3uwq_k$() {
    return this.parameters_1;
  }
  get_publicKey_wfyw0d_k$() {
    return this.publicKey_1;
  }
  static new_dev_whyoleg_cryptography_serialization_asn1_modules_EcPrivateKey_inlcr1_k$(seen0, version, privateKey, parameters, publicKey, serializationConstructorMarker, $box) {
    Companion_getInstance_5();
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_5().descriptor_1);
    }
    var $this = createThis(this, $box);
    $this.version_1 = version;
    $this.privateKey_1 = privateKey;
    if (0 === (seen0 & 4))
      $this.parameters_1 = null;
    else
      $this.parameters_1 = parameters;
    if (0 === (seen0 & 8))
      $this.publicKey_1 = null;
    else
      $this.publicKey_1 = publicKey;
    return $this;
  }
}
class Ed25519AlgorithmIdentifier {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_serialization_asn1_modules_Ed25519AlgorithmIdentifier_5juptb_k$();
  }
  static new_dev_whyoleg_cryptography_serialization_asn1_modules_Ed25519AlgorithmIdentifier_5juptb_k$($box) {
    var $this = createThis(this, $box);
    Ed25519AlgorithmIdentifier_instance = $this;
    return $this;
  }
  get_parameters_cl4rkd_k$() {
    return null;
  }
  get_algorithm_ww1v0i_k$() {
    return get_Ed25519(Companion_getInstance());
  }
}
class Ed448AlgorithmIdentifier {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_serialization_asn1_modules_Ed448AlgorithmIdentifier_2hclin_k$();
  }
  static new_dev_whyoleg_cryptography_serialization_asn1_modules_Ed448AlgorithmIdentifier_2hclin_k$($box) {
    var $this = createThis(this, $box);
    Ed448AlgorithmIdentifier_instance = $this;
    return $this;
  }
  get_parameters_cl4rkd_k$() {
    return null;
  }
  get_algorithm_ww1v0i_k$() {
    return get_Ed448(Companion_getInstance());
  }
}
class X25519AlgorithmIdentifier {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_serialization_asn1_modules_X25519AlgorithmIdentifier_fny4rd_k$();
  }
  static new_dev_whyoleg_cryptography_serialization_asn1_modules_X25519AlgorithmIdentifier_fny4rd_k$($box) {
    var $this = createThis(this, $box);
    X25519AlgorithmIdentifier_instance = $this;
    return $this;
  }
  get_parameters_cl4rkd_k$() {
    return null;
  }
  get_algorithm_ww1v0i_k$() {
    return get_X25519(Companion_getInstance());
  }
}
class X448AlgorithmIdentifier {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_serialization_asn1_modules_X448AlgorithmIdentifier_m5xjvh_k$();
  }
  static new_dev_whyoleg_cryptography_serialization_asn1_modules_X448AlgorithmIdentifier_m5xjvh_k$($box) {
    var $this = createThis(this, $box);
    X448AlgorithmIdentifier_instance = $this;
    return $this;
  }
  get_parameters_cl4rkd_k$() {
    return null;
  }
  get_algorithm_ww1v0i_k$() {
    return get_X448(Companion_getInstance());
  }
}
class Companion_5 {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_serialization_asn1_modules_PrivateKeyInfo_Companion_34wymj_k$();
  }
  static new_dev_whyoleg_cryptography_serialization_asn1_modules_PrivateKeyInfo_Companion_34wymj_k$($box) {
    var $this = createThis(this, $box);
    Companion_instance_5 = $this;
    var tmp = $this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.$childSerializers_1 = [null, lazy(tmp_0, PrivateKeyInfo$Companion$$childSerializers$_anonymous__z2jngg), null, null];
    return $this;
  }
  serializer_9w0wvi_k$() {
    return $serializer_getInstance_6();
  }
}
class $serializer_4 {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_serialization_asn1_modules_PrivateKeyInfo_$serializer_ehwtu_k$();
  }
  static new_dev_whyoleg_cryptography_serialization_asn1_modules_PrivateKeyInfo_$serializer_ehwtu_k$($box) {
    var $this = createThis(this, $box);
    $serializer_instance_4 = $this;
    var tmp0_serialDesc = PluginGeneratedSerialDescriptor.new_kotlinx_serialization_internal_PluginGeneratedSerialDescriptor_x9evkg_k$('dev.whyoleg.cryptography.serialization.asn1.modules.PrivateKeyInfo', $this, 4);
    tmp0_serialDesc.addElement_5pzumi_k$('version', false);
    tmp0_serialDesc.addElement_5pzumi_k$('privateKeyAlgorithm', false);
    tmp0_serialDesc.addElement_5pzumi_k$('privateKey', false);
    tmp0_serialDesc.addElement_5pzumi_k$('publicKey', true);
    tmp0_serialDesc.pushAnnotation_fm15ho_k$(new ContextSpecificTag(1, TagType_IMPLICIT_getInstance()));
    $this.descriptor_1 = tmp0_serialDesc;
    return $this;
  }
  serialize_d3kqxh_k$(encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp2_cached = Companion_getInstance_6().$childSerializers_1;
    tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 0, value.version_1);
    tmp1_output.encodeSerializableElement_isqxcl_k$(tmp0_desc, 1, tmp2_cached[1].get_value_j01efc_k$(), value.privateKeyAlgorithm_1);
    tmp1_output.encodeSerializableElement_isqxcl_k$(tmp0_desc, 2, ByteArraySerializer_getInstance(), value.privateKey_1);
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 3) ? true : !(value.publicKey_1 == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 3, $serializer_getInstance_0(), value.publicKey_1);
    }
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  }
  serialize_5ase3y_k$(encoder, value) {
    return this.serialize_d3kqxh_k$(encoder, value instanceof PrivateKeyInfo ? value : THROW_CCE());
  }
  deserialize_sy6x50_k$(decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp9_cached = Companion_getInstance_6().$childSerializers_1;
    if (tmp8_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp8_input.decodeIntElement_941u6a_k$(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 1, tmp9_cached[1].get_value_j01efc_k$(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 2, ByteArraySerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 3, $serializer_getInstance_0(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.decodeIntElement_941u6a_k$(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 1, tmp9_cached[1].get_value_j01efc_k$(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 2, ByteArraySerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 3, $serializer_getInstance_0(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException.new_kotlinx_serialization_UnknownFieldException_r32xsj_k$(tmp2_index);
        }
      }
    tmp8_input.endStructure_1xqz0n_k$(tmp0_desc);
    return PrivateKeyInfo.new_dev_whyoleg_cryptography_serialization_asn1_modules_PrivateKeyInfo_td5d13_k$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  get_descriptor_wjt6a0_k$() {
    return this.descriptor_1;
  }
  childSerializers_5ghqw5_k$() {
    var tmp0_cached = Companion_getInstance_6().$childSerializers_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), tmp0_cached[1].get_value_j01efc_k$(), ByteArraySerializer_getInstance(), get_nullable_0($serializer_getInstance_0())];
  }
}
class PrivateKeyInfo {
  constructor(version, privateKeyAlgorithm, privateKey, publicKey) {
    return new.target.new_dev_whyoleg_cryptography_serialization_asn1_modules_PrivateKeyInfo_sg7ksa_k$(version, privateKeyAlgorithm, privateKey, publicKey);
  }
  static new_dev_whyoleg_cryptography_serialization_asn1_modules_PrivateKeyInfo_sg7ksa_k$(version, privateKeyAlgorithm, privateKey, publicKey, $box) {
    Companion_getInstance_6();
    publicKey = publicKey === VOID ? null : publicKey;
    var $this = createThis(this, $box);
    $this.version_1 = version;
    $this.privateKeyAlgorithm_1 = privateKeyAlgorithm;
    $this.privateKey_1 = privateKey;
    $this.publicKey_1 = publicKey;
    return $this;
  }
  get_version_72w4j3_k$() {
    return this.version_1;
  }
  get_privateKeyAlgorithm_pvzcdy_k$() {
    return this.privateKeyAlgorithm_1;
  }
  get_privateKey_jtw9r9_k$() {
    return this.privateKey_1;
  }
  get_publicKey_wfyw0d_k$() {
    return this.publicKey_1;
  }
  static new_dev_whyoleg_cryptography_serialization_asn1_modules_PrivateKeyInfo_td5d13_k$(seen0, version, privateKeyAlgorithm, privateKey, publicKey, serializationConstructorMarker, $box) {
    Companion_getInstance_6();
    if (!(7 === (7 & seen0))) {
      throwMissingFieldException(seen0, 7, $serializer_getInstance_6().descriptor_1);
    }
    var $this = createThis(this, $box);
    $this.version_1 = version;
    $this.privateKeyAlgorithm_1 = privateKeyAlgorithm;
    $this.privateKey_1 = privateKey;
    if (0 === (seen0 & 8))
      $this.publicKey_1 = null;
    else
      $this.publicKey_1 = publicKey;
    return $this;
  }
}
class Companion_6 {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_serialization_asn1_modules_SubjectPublicKeyInfo_Companion_xta2h7_k$();
  }
  static new_dev_whyoleg_cryptography_serialization_asn1_modules_SubjectPublicKeyInfo_Companion_xta2h7_k$($box) {
    var $this = createThis(this, $box);
    Companion_instance_6 = $this;
    var tmp = $this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.$childSerializers_1 = [lazy(tmp_0, SubjectPublicKeyInfo$Companion$$childSerializers$_anonymous__ezpjw2), null];
    return $this;
  }
  serializer_9w0wvi_k$() {
    return $serializer_getInstance_7();
  }
}
class $serializer_5 {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_serialization_asn1_modules_SubjectPublicKeyInfo_$serializer_bgu89w_k$();
  }
  static new_dev_whyoleg_cryptography_serialization_asn1_modules_SubjectPublicKeyInfo_$serializer_bgu89w_k$($box) {
    var $this = createThis(this, $box);
    $serializer_instance_5 = $this;
    var tmp0_serialDesc = PluginGeneratedSerialDescriptor.new_kotlinx_serialization_internal_PluginGeneratedSerialDescriptor_x9evkg_k$('dev.whyoleg.cryptography.serialization.asn1.modules.SubjectPublicKeyInfo', $this, 2);
    tmp0_serialDesc.addElement_5pzumi_k$('algorithm', false);
    tmp0_serialDesc.addElement_5pzumi_k$('subjectPublicKey', false);
    $this.descriptor_1 = tmp0_serialDesc;
    return $this;
  }
  serialize_hberyf_k$(encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp2_cached = Companion_getInstance_7().$childSerializers_1;
    tmp1_output.encodeSerializableElement_isqxcl_k$(tmp0_desc, 0, tmp2_cached[0].get_value_j01efc_k$(), value.algorithm_1);
    tmp1_output.encodeSerializableElement_isqxcl_k$(tmp0_desc, 1, $serializer_getInstance_0(), value.subjectPublicKey_1);
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  }
  serialize_5ase3y_k$(encoder, value) {
    return this.serialize_hberyf_k$(encoder, value instanceof SubjectPublicKeyInfo ? value : THROW_CCE());
  }
  deserialize_sy6x50_k$(decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp7_cached = Companion_getInstance_7().$childSerializers_1;
    if (tmp6_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp6_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 0, tmp7_cached[0].get_value_j01efc_k$(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 1, $serializer_getInstance_0(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 0, tmp7_cached[0].get_value_j01efc_k$(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 1, $serializer_getInstance_0(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.new_kotlinx_serialization_UnknownFieldException_r32xsj_k$(tmp2_index);
        }
      }
    tmp6_input.endStructure_1xqz0n_k$(tmp0_desc);
    return SubjectPublicKeyInfo.new_dev_whyoleg_cryptography_serialization_asn1_modules_SubjectPublicKeyInfo_rnkeq8_k$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  get_descriptor_wjt6a0_k$() {
    return this.descriptor_1;
  }
  childSerializers_5ghqw5_k$() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_7().$childSerializers_1[0].get_value_j01efc_k$(), $serializer_getInstance_0()];
  }
}
class SubjectPublicKeyInfo {
  constructor(algorithm, subjectPublicKey) {
    return new.target.new_dev_whyoleg_cryptography_serialization_asn1_modules_SubjectPublicKeyInfo_7qk8mk_k$(algorithm, subjectPublicKey);
  }
  static new_dev_whyoleg_cryptography_serialization_asn1_modules_SubjectPublicKeyInfo_7qk8mk_k$(algorithm, subjectPublicKey, $box) {
    Companion_getInstance_7();
    var $this = createThis(this, $box);
    $this.algorithm_1 = algorithm;
    $this.subjectPublicKey_1 = subjectPublicKey;
    return $this;
  }
  get_algorithm_c8rufa_k$() {
    return this.algorithm_1;
  }
  get_subjectPublicKey_593n77_k$() {
    return this.subjectPublicKey_1;
  }
  static new_dev_whyoleg_cryptography_serialization_asn1_modules_SubjectPublicKeyInfo_rnkeq8_k$(seen0, algorithm, subjectPublicKey, serializationConstructorMarker, $box) {
    Companion_getInstance_7();
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_7().descriptor_1);
    }
    var $this = createThis(this, $box);
    $this.algorithm_1 = algorithm;
    $this.subjectPublicKey_1 = subjectPublicKey;
    return $this;
  }
}
class RsaAlgorithmIdentifier {
  constructor() {
    return new.target.new_dev_whyoleg_cryptography_serialization_asn1_modules_RsaAlgorithmIdentifier_i4q79r_k$();
  }
  static new_dev_whyoleg_cryptography_serialization_asn1_modules_RsaAlgorithmIdentifier_i4q79r_k$($box) {
    var $this = createThis(this, $box);
    RsaAlgorithmIdentifier_instance = $this;
    return $this;
  }
  get_algorithm_ww1v0i_k$() {
    return get_RSA(Companion_getInstance());
  }
  get_parameters_cl4rkd_k$() {
    return null;
  }
}
//endregion
var Companion_instance;
function Companion_getInstance_0() {
  if (Companion_instance === VOID)
    Companion.new_dev_whyoleg_cryptography_serialization_asn1_modules_AlgorithmIdentifier_Companion_8opubp_k$();
  return Companion_instance;
}
function EcAlgorithmIdentifier$_init_$ref_qcyxlh() {
  return constructCallableReference((p0) => {
    var tmp = p0;
    return EcAlgorithmIdentifier.new_dev_whyoleg_cryptography_serialization_asn1_modules_EcAlgorithmIdentifier_rfrljw_k$(tmp == null ? null : tmp.namedCurve_1);
  }, 1, 0, 'dev.whyoleg.cryptography.serialization.asn1.modules/EcAlgorithmIdentifier.<init>|<init>(dev.whyoleg.cryptography.serialization.asn1.modules.EcParameters?){}[0]', '<init>');
}
function DhAlgorithmIdentifier$_init_$ref_z516pb() {
  return constructCallableReference((p0) => DhAlgorithmIdentifier.new_dev_whyoleg_cryptography_serialization_asn1_modules_DhAlgorithmIdentifier_943ow2_k$(p0), 1, 0, 'dev.whyoleg.cryptography.serialization.asn1.modules/DhAlgorithmIdentifier.<init>|<init>(dev.whyoleg.cryptography.serialization.asn1.modules.DhParameters?){}[0]', '<init>');
}
function DsaAlgorithmIdentifier$_init_$ref_pugpj3() {
  return constructCallableReference((p0) => DsaAlgorithmIdentifier.new_dev_whyoleg_cryptography_serialization_asn1_modules_DsaAlgorithmIdentifier_xk2cfk_k$(p0), 1, 0, 'dev.whyoleg.cryptography.serialization.asn1.modules/DsaAlgorithmIdentifier.<init>|<init>(dev.whyoleg.cryptography.serialization.asn1.modules.DsaParameters?){}[0]', '<init>');
}
var DefaultAlgorithmIdentifierSerializer_instance;
function DefaultAlgorithmIdentifierSerializer_getInstance() {
  if (DefaultAlgorithmIdentifierSerializer_instance === VOID)
    DefaultAlgorithmIdentifierSerializer.new_dev_whyoleg_cryptography_serialization_asn1_modules_DefaultAlgorithmIdentifierSerializer_7muapp_k$();
  return DefaultAlgorithmIdentifierSerializer_instance;
}
function _get_byClass__ita6gg($this) {
  return $this.byClass_1;
}
function _get_byOid__j8boaq($this) {
  return $this.byOid_1;
}
function algorithm($this, oid, cls, entry) {
  // Inline function 'kotlin.collections.set' call
  $this.byClass_1.put_4fpzoq_k$(cls, entry);
  var tmp0 = $this.byOid_1;
  // Inline function 'kotlin.collections.set' call
  var key = new ObjectIdentifier(oid);
  tmp0.put_4fpzoq_k$(key, entry);
}
function AlgorithmIdentifierSerializer$algorithm$lambda($instance) {
  return (it) => $instance;
}
function AlgorithmIdentifierSerializer$descriptor$lambda($this$buildSerialDescriptor) {
  $this$buildSerialDescriptor.element$default_ey7ac9_k$('algorithm', Companion_getInstance().serializer_9w0wvi_k$().get_descriptor_wjt6a0_k$());
  $this$buildSerialDescriptor.element$default_ey7ac9_k$('parameters', buildSerialDescriptor('Any', CONTEXTUAL_getInstance(), []));
  return Unit_getInstance();
}
var AbsentNothingSerializer_instance;
function AbsentNothingSerializer_getInstance() {
  if (AbsentNothingSerializer_instance === VOID)
    AbsentNothingSerializer.new_dev_whyoleg_cryptography_serialization_asn1_modules_AbsentNothingSerializer_lf2xx8_k$();
  return AbsentNothingSerializer_instance;
}
function get_DH(_this__u8e3s4) {
  return _ObjectIdentifier___init__impl__7hutfr('1.2.840.113549.1.3.1');
}
var Companion_instance_0;
function Companion_getInstance_1() {
  if (Companion_instance_0 === VOID)
    Companion_0.new_dev_whyoleg_cryptography_serialization_asn1_modules_DhParameters_Companion_m2nprp_k$();
  return Companion_instance_0;
}
var $serializer_instance;
function $serializer_getInstance_1() {
  if ($serializer_instance === VOID)
    $serializer.new_dev_whyoleg_cryptography_serialization_asn1_modules_DhParameters_$serializer_ik3csu_k$();
  return $serializer_instance;
}
function get_DSA(_this__u8e3s4) {
  return _ObjectIdentifier___init__impl__7hutfr('1.2.840.10040.4.1');
}
var Companion_instance_1;
function Companion_getInstance_2() {
  if (Companion_instance_1 === VOID)
    Companion_1.new_dev_whyoleg_cryptography_serialization_asn1_modules_DsaParameters_Companion_m5nqbp_k$();
  return Companion_instance_1;
}
var $serializer_instance_0;
function $serializer_getInstance_2() {
  if ($serializer_instance_0 === VOID)
    $serializer_0.new_dev_whyoleg_cryptography_serialization_asn1_modules_DsaParameters_$serializer_2i5j40_k$();
  return $serializer_instance_0;
}
var Companion_instance_2;
function Companion_getInstance_3() {
  if (Companion_instance_2 === VOID)
    Companion_2.new_dev_whyoleg_cryptography_serialization_asn1_modules_DssSignatureValue_Companion_9z1onb_k$();
  return Companion_instance_2;
}
var $serializer_instance_1;
function $serializer_getInstance_3() {
  if ($serializer_instance_1 === VOID)
    $serializer_1.new_dev_whyoleg_cryptography_serialization_asn1_modules_DssSignatureValue_$serializer_5r46g3_k$();
  return $serializer_instance_1;
}
function get_secp256r1(_this__u8e3s4) {
  return _ObjectIdentifier___init__impl__7hutfr('1.2.840.10045.3.1.7');
}
function get_secp384r1(_this__u8e3s4) {
  return _ObjectIdentifier___init__impl__7hutfr('1.3.132.0.34');
}
function get_secp521r1(_this__u8e3s4) {
  return _ObjectIdentifier___init__impl__7hutfr('1.3.132.0.35');
}
function _EcParameters___init__impl__i4ww9z(namedCurve) {
  return namedCurve;
}
function _EcParameters___get_namedCurve__impl__oibidm($this) {
  return $this;
}
var Companion_instance_3;
function Companion_getInstance_4() {
  if (Companion_instance_3 === VOID)
    Companion_3.new_dev_whyoleg_cryptography_serialization_asn1_modules_EcParameters_Companion_8h1fxx_k$();
  return Companion_instance_3;
}
var $serializer_instance_2;
function $serializer_getInstance_4() {
  if ($serializer_instance_2 === VOID)
    $serializer_2.new_dev_whyoleg_cryptography_serialization_asn1_modules_EcParameters_$serializer_bll08k_k$();
  return $serializer_instance_2;
}
function EcParameters__toString_impl_mgxjuh($this) {
  return 'EcParameters(namedCurve=' + ObjectIdentifier__toString_impl_dtwsrd($this) + ')';
}
function EcParameters__hashCode_impl_prn1m($this) {
  return ObjectIdentifier__hashCode_impl_7x941i($this);
}
function EcParameters__equals_impl_5tm4e2($this, other) {
  if (!(other instanceof EcParameters))
    return false;
  var tmp0_other_with_cast = other.namedCurve_1;
  if (!equals(new ObjectIdentifier($this), new ObjectIdentifier(tmp0_other_with_cast)))
    return false;
  return true;
}
var Companion_instance_4;
function Companion_getInstance_5() {
  if (Companion_instance_4 === VOID)
    Companion_4.new_dev_whyoleg_cryptography_serialization_asn1_modules_EcPrivateKey_Companion_r4n0p7_k$();
  return Companion_instance_4;
}
var $serializer_instance_3;
function $serializer_getInstance_5() {
  if ($serializer_instance_3 === VOID)
    $serializer_3.new_dev_whyoleg_cryptography_serialization_asn1_modules_EcPrivateKey_$serializer_tsgxry_k$();
  return $serializer_instance_3;
}
function get_EC(_this__u8e3s4) {
  return _ObjectIdentifier___init__impl__7hutfr('1.2.840.10045.2.1');
}
var Ed25519AlgorithmIdentifier_instance;
function Ed25519AlgorithmIdentifier_getInstance() {
  if (Ed25519AlgorithmIdentifier_instance === VOID)
    Ed25519AlgorithmIdentifier.new_dev_whyoleg_cryptography_serialization_asn1_modules_Ed25519AlgorithmIdentifier_5juptb_k$();
  return Ed25519AlgorithmIdentifier_instance;
}
var Ed448AlgorithmIdentifier_instance;
function Ed448AlgorithmIdentifier_getInstance() {
  if (Ed448AlgorithmIdentifier_instance === VOID)
    Ed448AlgorithmIdentifier.new_dev_whyoleg_cryptography_serialization_asn1_modules_Ed448AlgorithmIdentifier_2hclin_k$();
  return Ed448AlgorithmIdentifier_instance;
}
var X25519AlgorithmIdentifier_instance;
function X25519AlgorithmIdentifier_getInstance() {
  if (X25519AlgorithmIdentifier_instance === VOID)
    X25519AlgorithmIdentifier.new_dev_whyoleg_cryptography_serialization_asn1_modules_X25519AlgorithmIdentifier_fny4rd_k$();
  return X25519AlgorithmIdentifier_instance;
}
var X448AlgorithmIdentifier_instance;
function X448AlgorithmIdentifier_getInstance() {
  if (X448AlgorithmIdentifier_instance === VOID)
    X448AlgorithmIdentifier.new_dev_whyoleg_cryptography_serialization_asn1_modules_X448AlgorithmIdentifier_m5xjvh_k$();
  return X448AlgorithmIdentifier_instance;
}
function get_X25519(_this__u8e3s4) {
  return _ObjectIdentifier___init__impl__7hutfr('1.3.101.110');
}
function get_X448(_this__u8e3s4) {
  return _ObjectIdentifier___init__impl__7hutfr('1.3.101.111');
}
function get_Ed25519(_this__u8e3s4) {
  return _ObjectIdentifier___init__impl__7hutfr('1.3.101.112');
}
function get_Ed448(_this__u8e3s4) {
  return _ObjectIdentifier___init__impl__7hutfr('1.3.101.113');
}
function _get_$childSerializers__r2zwns($this) {
  return $this.$childSerializers_1;
}
function PrivateKeyInfo$Companion$$childSerializers$_anonymous__z2jngg() {
  var tmp = getKClass(AlgorithmIdentifier);
  var tmp_0 = DefaultAlgorithmIdentifierSerializer_getInstance();
  // Inline function 'kotlin.arrayOf' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var tmp$ret$0 = [];
  return ContextualSerializer.new_kotlinx_serialization_ContextualSerializer_g2dwtf_k$(tmp, tmp_0, tmp$ret$0);
}
var Companion_instance_5;
function Companion_getInstance_6() {
  if (Companion_instance_5 === VOID)
    Companion_5.new_dev_whyoleg_cryptography_serialization_asn1_modules_PrivateKeyInfo_Companion_34wymj_k$();
  return Companion_instance_5;
}
var $serializer_instance_4;
function $serializer_getInstance_6() {
  if ($serializer_instance_4 === VOID)
    $serializer_4.new_dev_whyoleg_cryptography_serialization_asn1_modules_PrivateKeyInfo_$serializer_ehwtu_k$();
  return $serializer_instance_4;
}
function _get_$childSerializers__r2zwns_0($this) {
  return $this.$childSerializers_1;
}
function SubjectPublicKeyInfo$Companion$$childSerializers$_anonymous__ezpjw2() {
  var tmp = getKClass(AlgorithmIdentifier);
  var tmp_0 = DefaultAlgorithmIdentifierSerializer_getInstance();
  // Inline function 'kotlin.arrayOf' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var tmp$ret$0 = [];
  return ContextualSerializer.new_kotlinx_serialization_ContextualSerializer_g2dwtf_k$(tmp, tmp_0, tmp$ret$0);
}
var Companion_instance_6;
function Companion_getInstance_7() {
  if (Companion_instance_6 === VOID)
    Companion_6.new_dev_whyoleg_cryptography_serialization_asn1_modules_SubjectPublicKeyInfo_Companion_xta2h7_k$();
  return Companion_instance_6;
}
var $serializer_instance_5;
function $serializer_getInstance_7() {
  if ($serializer_instance_5 === VOID)
    $serializer_5.new_dev_whyoleg_cryptography_serialization_asn1_modules_SubjectPublicKeyInfo_$serializer_bgu89w_k$();
  return $serializer_instance_5;
}
var RsaAlgorithmIdentifier_instance;
function RsaAlgorithmIdentifier_getInstance() {
  if (RsaAlgorithmIdentifier_instance === VOID)
    RsaAlgorithmIdentifier.new_dev_whyoleg_cryptography_serialization_asn1_modules_RsaAlgorithmIdentifier_i4q79r_k$();
  return RsaAlgorithmIdentifier_instance;
}
function get_RSA(_this__u8e3s4) {
  return _ObjectIdentifier___init__impl__7hutfr('1.2.840.113549.1.1.1');
}
//region block: post-declaration
initMetadataForCompanion(Companion, VOID, [SerializerFactory]);
initMetadataForInterface(AlgorithmIdentifier, 'AlgorithmIdentifier', VOID, VOID, VOID, VOID, VOID, {[getAssociatedObjectId(SerializableWith)]: DefaultAlgorithmIdentifierSerializer_getInstance});
initMetadataForClass(AlgorithmIdentifierSerializer, 'AlgorithmIdentifierSerializer', VOID, VOID, [KSerializer]);
initMetadataForObject(DefaultAlgorithmIdentifierSerializer, 'DefaultAlgorithmIdentifierSerializer');
initMetadataForClass(AlgorithmEntry, 'AlgorithmEntry');
initMetadataForObject(AbsentNothingSerializer, 'AbsentNothingSerializer', VOID, VOID, [KSerializer]);
initMetadataForCompanion(Companion_0);
protoOf($serializer).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(DhParameters, 'DhParameters', VOID, VOID, VOID, VOID, VOID, {[getAssociatedObjectId(SerializableWith)]: $serializer_getInstance_1});
initMetadataForClass(DhAlgorithmIdentifier, 'DhAlgorithmIdentifier', VOID, VOID, [AlgorithmIdentifier]);
initMetadataForCompanion(Companion_1);
protoOf($serializer_0).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
initMetadataForObject($serializer_0, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(DsaParameters, 'DsaParameters', VOID, VOID, VOID, VOID, VOID, {[getAssociatedObjectId(SerializableWith)]: $serializer_getInstance_2});
initMetadataForClass(DsaAlgorithmIdentifier, 'DsaAlgorithmIdentifier', VOID, VOID, [AlgorithmIdentifier]);
initMetadataForCompanion(Companion_2);
protoOf($serializer_1).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
initMetadataForObject($serializer_1, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(DssSignatureValue, 'DssSignatureValue', VOID, VOID, VOID, VOID, VOID, {[getAssociatedObjectId(SerializableWith)]: $serializer_getInstance_3});
initMetadataForClass(EcAlgorithmIdentifier, 'EcAlgorithmIdentifier', VOID, VOID, [AlgorithmIdentifier]);
initMetadataForCompanion(Companion_3);
protoOf($serializer_2).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
initMetadataForObject($serializer_2, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(EcParameters, 'EcParameters', VOID, VOID, VOID, VOID, VOID, {[getAssociatedObjectId(SerializableWith)]: $serializer_getInstance_4});
initMetadataForCompanion(Companion_4);
protoOf($serializer_3).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
initMetadataForObject($serializer_3, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(EcPrivateKey, 'EcPrivateKey', VOID, VOID, VOID, VOID, VOID, {[getAssociatedObjectId(SerializableWith)]: $serializer_getInstance_5});
initMetadataForObject(Ed25519AlgorithmIdentifier, 'Ed25519AlgorithmIdentifier', VOID, VOID, [AlgorithmIdentifier]);
initMetadataForObject(Ed448AlgorithmIdentifier, 'Ed448AlgorithmIdentifier', VOID, VOID, [AlgorithmIdentifier]);
initMetadataForObject(X25519AlgorithmIdentifier, 'X25519AlgorithmIdentifier', VOID, VOID, [AlgorithmIdentifier]);
initMetadataForObject(X448AlgorithmIdentifier, 'X448AlgorithmIdentifier', VOID, VOID, [AlgorithmIdentifier]);
initMetadataForCompanion(Companion_5);
protoOf($serializer_4).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
initMetadataForObject($serializer_4, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(PrivateKeyInfo, 'PrivateKeyInfo', VOID, VOID, VOID, VOID, VOID, {[getAssociatedObjectId(SerializableWith)]: $serializer_getInstance_6});
initMetadataForCompanion(Companion_6);
protoOf($serializer_5).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
initMetadataForObject($serializer_5, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(SubjectPublicKeyInfo, 'SubjectPublicKeyInfo', VOID, VOID, VOID, VOID, VOID, {[getAssociatedObjectId(SerializableWith)]: $serializer_getInstance_7});
initMetadataForObject(RsaAlgorithmIdentifier, 'RsaAlgorithmIdentifier', VOID, VOID, [AlgorithmIdentifier]);
//endregion
//region block: exports
export {
  DssSignatureValue as DssSignatureValue3jvso0k07b2ds,
  get_EC as get_EC3qybz3fx59ngu,
  EcAlgorithmIdentifier as EcAlgorithmIdentifier2ixamvm4d11qi,
  EcParameters as EcParameters35jj38oq07nkm,
  EcPrivateKey as EcPrivateKey2terz948ch7xt,
  PrivateKeyInfo as PrivateKeyInfou42ielkmgvu2,
  get_RSA as get_RSA30ci1l0u72mkd,
  SubjectPublicKeyInfo as SubjectPublicKeyInfo1tner6n57cb2l,
  get_secp256r1 as get_secp256r12zskpql6xanyk,
  get_secp384r1 as get_secp384r13mvgyp383nadu,
  get_secp521r1 as get_secp521r13hkek2jcv829c,
  _EcParameters___init__impl__i4ww9z as _EcParameters___init__impl__i4ww9z1oapdy943fybu,
  Companion_getInstance_3 as Companion_getInstance1m3pi1bmqnnnw,
  Companion_getInstance_5 as Companion_getInstanced4h0gkzuili3,
  Ed25519AlgorithmIdentifier_getInstance as Ed25519AlgorithmIdentifier_getInstance303ty0i9rxd08,
  Ed448AlgorithmIdentifier_getInstance as Ed448AlgorithmIdentifier_getInstance1vwhmmzrz09wk,
  Companion_getInstance_6 as Companion_getInstance1rsflyem72ib5,
  RsaAlgorithmIdentifier_getInstance as RsaAlgorithmIdentifier_getInstance3l6s4irb03iv3,
  Companion_getInstance_7 as Companion_getInstance3ksb72sc2wstc,
  X25519AlgorithmIdentifier_getInstance as X25519AlgorithmIdentifier_getInstanceua7aozhg9pav,
  X448AlgorithmIdentifier_getInstance as X448AlgorithmIdentifier_getInstance10xrt840f1jiu,
};
//endregion

//# sourceMappingURL=cryptography-kotlin-cryptography-serialization-asn1-modules.mjs.map
