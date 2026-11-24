import {
  Default_getInstance170n0qpi87z9q as Default_getInstance,
  ObjectIdentifierz6uf0uceu1gm as ObjectIdentifier,
  _ObjectIdentifier___get_value__impl__wqzjw31bh5gezoxh9eh as _ObjectIdentifier___get_value__impl__wqzjw3,
  ObjectIdentifier__toString_impl_dtwsrd390jgdxftpsig as ObjectIdentifier__toString_impl_dtwsrd,
  Companion_getInstance10n28muborka as Companion_getInstance,
  BitArray3ibxegq42amh4 as BitArray,
} from './cryptography-kotlin-cryptography-serialization-asn1.mjs';
import {
  Companion_getInstance1m3pi1bmqnnnw as Companion_getInstance_0,
  DssSignatureValue3jvso0k07b2ds as DssSignatureValue,
  Companion_getInstance1rsflyem72ib5 as Companion_getInstance_1,
  PrivateKeyInfou42ielkmgvu2 as PrivateKeyInfo,
  Companion_getInstanced4h0gkzuili3 as Companion_getInstance_2,
  EcParameters35jj38oq07nkm as EcParameters,
  EcAlgorithmIdentifier2ixamvm4d11qi as EcAlgorithmIdentifier,
  get_EC3qybz3fx59ngu as get_EC,
  EcPrivateKey2terz948ch7xt as EcPrivateKey,
  Companion_getInstance3ksb72sc2wstc as Companion_getInstance_3,
  SubjectPublicKeyInfo1tner6n57cb2l as SubjectPublicKeyInfo,
} from './cryptography-kotlin-cryptography-serialization-asn1-modules.mjs';
import {
  arrayCopytctsywo3h7gj as arrayCopy,
  IllegalStateExceptionkoljg5n0nrlr as IllegalStateException,
  toString1pkumu07cwy4m as toString,
  Unit_getInstanceu5z48rdn3d6z as Unit_getInstance,
  copyOfRange3alro60z4hhf8 as copyOfRange,
  equals2au1ep9vhcato as equals,
} from './kotlin-kotlin-stdlib.mjs';
import { Companion_getInstance1vpjfpz3a9qg7 as Companion_getInstance_4 } from './cryptography-kotlin-cryptography-bigint.mjs';
import {
  Companion_getInstance10jkiay585w8h as Companion_getInstance_5,
  PemLabel2vn9143gxwn6e as PemLabel,
  PemLabel__toString_impl_auwpt16u8f3e7qhffe as PemLabel__toString_impl_auwpt1,
  PemDocument3hasxe838waa9 as PemDocument,
} from './cryptography-kotlin-cryptography-serialization-pem.mjs';
import { UnsafeByteStringOperations_getInstance2r21wmnszr009 as UnsafeByteStringOperations_getInstance } from './kotlinx-io-kotlinx-io-bytestring.mjs';
import { ByteArraySerializersn06x87bo7h0 as ByteArraySerializer } from './kotlinx-serialization-kotlinx-serialization-core.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
//endregion
function convertDssDerSignatureToRaw(orderSize, derSignature) {
  var signatureValue = Default_getInstance().decodeFromByteArray_8opj5c_k$(Companion_getInstance_0().serializer_9w0wvi_k$(), derSignature);
  var r = signatureValue.get_r_1mhr61_k$().magnitudeToByteArray_jaoh16_k$();
  var s = signatureValue.get_s_1mhr62_k$().magnitudeToByteArray_jaoh16_k$();
  var rawSignature = new Int8Array(imul(orderSize, 2));
  // Inline function 'kotlin.collections.copyInto' call
  var destinationOffset = orderSize - r.length | 0;
  var endIndex = r.length;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var tmp = r;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  arrayCopy(tmp, rawSignature, destinationOffset, 0, endIndex);
  // Inline function 'kotlin.collections.copyInto' call
  var destinationOffset_0 = imul(orderSize, 2) - s.length | 0;
  var endIndex_0 = s.length;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var tmp_0 = s;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  arrayCopy(tmp_0, rawSignature, destinationOffset_0, 0, endIndex_0);
  return rawSignature;
}
function convertDssRawSignatureToDer(orderSize, rawSignature, startIndex, endIndex) {
  // Inline function 'kotlin.check' call
  if (!((endIndex - startIndex | 0) === imul(orderSize, 2))) {
    var message = 'Expected signature size ' + imul(orderSize, 2) + ', received: ' + (endIndex - startIndex | 0);
    throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message));
  }
  var signatureValue = DssSignatureValue.new_dev_whyoleg_cryptography_serialization_asn1_modules_DssSignatureValue_i3q4rg_k$(Companion_getInstance_4().fromMagnitude_nw172_k$(1, copyOfRange(rawSignature, startIndex, startIndex + orderSize | 0)), Companion_getInstance_4().fromMagnitude_nw172_k$(1, copyOfRange(rawSignature, startIndex + orderSize | 0, endIndex)));
  return Default_getInstance().encodeToByteArray_n90khx_k$(Companion_getInstance_0().serializer_9w0wvi_k$(), signatureValue);
}
function get_EmptyByteArray() {
  _init_properties_bytes_kt__yz6anb();
  return EmptyByteArray;
}
var EmptyByteArray;
var properties_initialized_bytes_kt_a5jamz;
function _init_properties_bytes_kt__yz6anb() {
  if (!properties_initialized_bytes_kt_a5jamz) {
    properties_initialized_bytes_kt_a5jamz = true;
    EmptyByteArray = new Int8Array(0);
  }
}
function unwrapPem(label, key) {
  var document = Companion_getInstance_5().decode_eed1rm_k$(key);
  // Inline function 'kotlin.check' call
  if (!equals(new PemLabel(document.get_label_wnplto_k$()), new PemLabel(label))) {
    var message = 'Wrong PEM label, expected ' + PemLabel__toString_impl_auwpt1(label) + ', actual ' + PemLabel__toString_impl_auwpt1(document.get_label_wnplto_k$());
    throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message));
  }
  UnsafeByteStringOperations_getInstance();
  // Inline function 'kotlinx.io.bytestring.unsafe.UnsafeByteStringOperations.withByteArrayUnsafe' call
  return document.get_content_h02jrk_k$().getBackingArrayReference_x19ruh_k$();
}
function wrapPem(label, key) {
  var document = PemDocument.new_dev_whyoleg_cryptography_serialization_pem_PemDocument_762iym_k$(label, UnsafeByteStringOperations_getInstance().wrapUnsafe_3fobxs_k$(key));
  return document.encodeToByteArray_s4v2f4_k$();
}
function wrapCurvePrivateKeyInfo(version, identifier, key) {
  var curvePrivateKey = Default_getInstance().encodeToByteArray_n90khx_k$(ByteArraySerializer(), key);
  return wrapPrivateKeyInfo(version, identifier, curvePrivateKey);
}
function unwrapCurvePrivateKeyInfo(algorithm, key) {
  var curvePrivateKey = unwrapPrivateKeyInfo(algorithm, key);
  return Default_getInstance().decodeFromByteArray_8opj5c_k$(ByteArraySerializer(), curvePrivateKey);
}
function wrapPrivateKeyInfo(version, identifier, key) {
  return Default_getInstance().encodeToByteArray_n90khx_k$(Companion_getInstance_1().serializer_9w0wvi_k$(), PrivateKeyInfo.new_dev_whyoleg_cryptography_serialization_asn1_modules_PrivateKeyInfo_sg7ksa_k$(version, identifier, key));
}
function convertEcPrivateKeyFromSec1ToPkcs8(input) {
  var ecPrivateKey = Default_getInstance().decodeFromByteArray_8opj5c_k$(Companion_getInstance_2().serializer_9w0wvi_k$(), input);
  var tmp = ecPrivateKey.get_parameters_sh3uwq_k$();
  var tmp0 = tmp == null ? null : new EcParameters(tmp);
  $l$block: {
    // Inline function 'kotlin.checkNotNull' call
    if (tmp0 == null) {
      var message = 'EC Parameters are not present in the key';
      throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message));
    } else {
      tmp0.namedCurve_1;
      break $l$block;
    }
  }
  var privateKeyInfo = PrivateKeyInfo.new_dev_whyoleg_cryptography_serialization_asn1_modules_PrivateKeyInfo_sg7ksa_k$(0, EcAlgorithmIdentifier.new_dev_whyoleg_cryptography_serialization_asn1_modules_EcAlgorithmIdentifier_rfrljw_k$(ecPrivateKey.get_parameters_sh3uwq_k$()), input);
  return Default_getInstance().encodeToByteArray_n90khx_k$(Companion_getInstance_1().serializer_9w0wvi_k$(), privateKeyInfo);
}
function unwrapPrivateKeyInfo(algorithm, key) {
  // Inline function 'kotlin.also' call
  var this_0 = Default_getInstance().decodeFromByteArray_8opj5c_k$(Companion_getInstance_1().serializer_9w0wvi_k$(), key);
  // Inline function 'kotlin.check' call
  if (!equals(new ObjectIdentifier(this_0.get_privateKeyAlgorithm_pvzcdy_k$().get_algorithm_ww1v0i_k$()), new ObjectIdentifier(algorithm))) {
    var message = "Expected algorithm '" + _ObjectIdentifier___get_value__impl__wqzjw3(algorithm) + "', received: '" + ObjectIdentifier__toString_impl_dtwsrd(this_0.get_privateKeyAlgorithm_pvzcdy_k$().get_algorithm_ww1v0i_k$()) + "'";
    throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message));
  }
  return this_0.get_privateKey_jtw9r9_k$();
}
function convertEcPrivateKeyFromPkcs8ToSec1(input) {
  var privateKeyInfo = Default_getInstance().decodeFromByteArray_8opj5c_k$(Companion_getInstance_1().serializer_9w0wvi_k$(), input);
  var privateKeyAlgorithm = privateKeyInfo.get_privateKeyAlgorithm_pvzcdy_k$();
  // Inline function 'kotlin.check' call
  if (!(privateKeyAlgorithm instanceof EcAlgorithmIdentifier)) {
    var message = "Expected algorithm '" + ObjectIdentifier__toString_impl_dtwsrd(get_EC(Companion_getInstance())) + "', received: '" + ObjectIdentifier__toString_impl_dtwsrd(privateKeyAlgorithm.get_algorithm_ww1v0i_k$()) + "'";
    throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message));
  }
  var ecPrivateKey = Default_getInstance().decodeFromByteArray_8opj5c_k$(Companion_getInstance_2().serializer_9w0wvi_k$(), privateKeyInfo.get_privateKey_jtw9r9_k$());
  var tmp = ecPrivateKey.get_parameters_sh3uwq_k$();
  if (!((tmp == null ? null : new EcParameters(tmp)) == null))
    return privateKeyInfo.get_privateKey_jtw9r9_k$();
  var enhancedEcPrivateKey = EcPrivateKey.new_dev_whyoleg_cryptography_serialization_asn1_modules_EcPrivateKey_tbmsa_k$(ecPrivateKey.get_version_72w4j3_k$(), ecPrivateKey.get_privateKey_jtw9r9_k$(), privateKeyAlgorithm.get_parameters_sh3uwq_k$(), ecPrivateKey.get_publicKey_wfyw0d_k$());
  return Default_getInstance().encodeToByteArray_n90khx_k$(Companion_getInstance_2().serializer_9w0wvi_k$(), enhancedEcPrivateKey);
}
function wrapSubjectPublicKeyInfo(identifier, key) {
  return Default_getInstance().encodeToByteArray_n90khx_k$(Companion_getInstance_3().serializer_9w0wvi_k$(), SubjectPublicKeyInfo.new_dev_whyoleg_cryptography_serialization_asn1_modules_SubjectPublicKeyInfo_7qk8mk_k$(identifier, BitArray.new_dev_whyoleg_cryptography_serialization_asn1_BitArray_acvcee_k$(0, key)));
}
function unwrapSubjectPublicKeyInfo(algorithm, key) {
  // Inline function 'kotlin.also' call
  var this_0 = Default_getInstance().decodeFromByteArray_8opj5c_k$(Companion_getInstance_3().serializer_9w0wvi_k$(), key);
  // Inline function 'kotlin.check' call
  if (!equals(new ObjectIdentifier(this_0.get_algorithm_c8rufa_k$().get_algorithm_ww1v0i_k$()), new ObjectIdentifier(algorithm))) {
    var message = "Expected algorithm '" + _ObjectIdentifier___get_value__impl__wqzjw3(algorithm) + "', received: '" + ObjectIdentifier__toString_impl_dtwsrd(this_0.get_algorithm_c8rufa_k$().get_algorithm_ww1v0i_k$()) + "'";
    throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message));
  }
  return this_0.get_subjectPublicKey_593n77_k$().get_byteArray_pv7794_k$();
}
//region block: exports
export {
  convertDssDerSignatureToRaw as convertDssDerSignatureToRaw38sdgzgzd0yb3,
  convertDssRawSignatureToDer as convertDssRawSignatureToDermiu9y96pspze,
  convertEcPrivateKeyFromPkcs8ToSec1 as convertEcPrivateKeyFromPkcs8ToSec13kgzul582fe0,
  convertEcPrivateKeyFromSec1ToPkcs8 as convertEcPrivateKeyFromSec1ToPkcs8200uha5nqpua0,
  unwrapCurvePrivateKeyInfo as unwrapCurvePrivateKeyInfo1xkkthzv3m918,
  unwrapPem as unwrapPem161z0z59ia531,
  unwrapPrivateKeyInfo as unwrapPrivateKeyInfo4ku292uyad5s,
  unwrapSubjectPublicKeyInfo as unwrapSubjectPublicKeyInfo2dhoesdpj8yhz,
  wrapCurvePrivateKeyInfo as wrapCurvePrivateKeyInfo5tdu343wjttt,
  wrapPem as wrapPem1angtyp3pe1uv,
  wrapPrivateKeyInfo as wrapPrivateKeyInfo17k87f6o17l2g,
  wrapSubjectPublicKeyInfo as wrapSubjectPublicKeyInfo2h4otainmboih,
  get_EmptyByteArray as get_EmptyByteArray1135hu9r1pi3l,
};
//endregion

//# sourceMappingURL=cryptography-kotlin-cryptography-provider-base.mjs.map
