import {
  createThis2j2avj17cvnv2 as createThis,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  VOID3gxj6tk5isa35 as VOID,
  plus1ogy4liedzq5j as plus,
  toMutableSetjdpdbr9jsqq8 as toMutableSet,
  ArrayList3it5z8td81qkl as ArrayList,
  protoOf180f3jzyo7rfj as protoOf,
  Exceptiondt2hlxn7j7vw as Exception,
  captureStack1fzi4aczwc4hg as captureStack,
  constructCallableReference23y65rf941mch as constructCallableReference,
  Unit_getInstanceu5z48rdn3d6z as Unit_getInstance,
  toString1pkumu07cwy4m as toString,
  Collection1k04j3hzsbod0 as Collection,
  isInterface3d6p8outrmvmk as isInterface,
  emptyList1g2z5xcrvp2zy as emptyList,
  getKClassFromExpression348iqjl4fnx2f as getKClassFromExpression,
  Unitkvevlwgzwiuc as Unit,
  ensureNotNull1e947j3ixpazm as ensureNotNull,
  equals2au1ep9vhcato as equals,
  joinToString1cxrrlmo0chqs as joinToString,
  collectionSizeOrDefault36dulx8yinfqm as collectionSizeOrDefault,
  orPromise1iucc2to2udt2 as orPromise,
  PrimitiveClasses_getInstance13wbaztpz3e2d as PrimitiveClasses_getInstance,
  getKClass3t8tygqu4lcxf as getKClass,
  setOf45ia9pnfhe90 as setOf,
  KtList3hktaavzmj137 as KtList,
  arrayOf1akklvh2at202 as arrayOf,
  createKType31ecntyyaay3k as createKType,
  createInvariantKTypeProjection3h5364czc0a8w as createInvariantKTypeProjection,
  endsWith3cq61xxngobwh as endsWith,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  LinkedHashSet2tkztfx86kyx2 as LinkedHashSet,
} from './kotlin-kotlin-stdlib.mjs';
import {
  ContentTypeMatcher380arka9cxqpd as ContentTypeMatcher,
  Application_getInstance3vhi2qmce4cj0 as Application_getInstance,
  HttpHeaders_getInstance1avhj7ffsen7f as HttpHeaders_getInstance,
  Companion_getInstance2mdqh2piyf0f8 as Companion_getInstance,
  OutgoingContent3t2ohmyam9o76 as OutgoingContent,
  contentType2zzm38yxo3syt as contentType,
  charset1dribv3ku48b1 as charset,
  NullBody_getInstancejm05lw1x3tn4 as NullBody_getInstance,
  contentType317fn4f991q9a as contentType_0,
  HttpStatusCode3o1wkms10pg4k as HttpStatusCode,
  ContentType1svlpabm9v7iz as ContentType,
} from './ktor-ktor-http.mjs';
import {
  register$default2ko31hm484mcz as register$default,
  Configuration20xgygxdzhlk5 as Configuration,
  deserialize3e6u4ptep3aeu as deserialize,
  suitableCharset1jgdcpdzbzgzn as suitableCharset,
} from './ktor-ktor-shared-ktor-serialization.mjs';
import {
  accept2gi3b7wj4jds9 as accept,
  EmptyContent_getInstance1v4yj3cymlz7 as EmptyContent_getInstance,
  get_request3dwcif5y0fvf1 as get_request,
  createClientPluginjwpvufjows5r as createClientPlugin,
} from './ktor-ktor-client-ktor-client-core.mjs';
import {
  Charsets_getInstancezrqwjk0yrlyw as Charsets_getInstance,
  ByteReadChannel2wzou76jce72d as ByteReadChannel,
} from './ktor-ktor-io.mjs';
import {
  KtorSimpleLogger1xdphsp5l4e48 as KtorSimpleLogger,
  TypeInfo2nbxsuf4v8os2 as TypeInfo,
  AttributeKey3aq8ytwgx54f7 as AttributeKey,
} from './ktor-ktor-utils.mjs';
//region block: imports
//endregion
//region block: pre-declaration
class ConverterRegistration {
  constructor(converter, contentTypeToSend, contentTypeMatcher) {
    return new.target.new_io_ktor_client_plugins_contentnegotiation_ContentNegotiationConfig_ConverterRegistration_hcxw3f_k$(converter, contentTypeToSend, contentTypeMatcher);
  }
  static new_io_ktor_client_plugins_contentnegotiation_ContentNegotiationConfig_ConverterRegistration_hcxw3f_k$(converter, contentTypeToSend, contentTypeMatcher, $box) {
    var $this = createThis(this, $box);
    $this.converter_1 = converter;
    $this.contentTypeToSend_1 = contentTypeToSend;
    $this.contentTypeMatcher_1 = contentTypeMatcher;
    return $this;
  }
  get_converter_2qavhz_k$() {
    return this.converter_1;
  }
  get_contentTypeToSend_v7r6xf_k$() {
    return this.contentTypeToSend_1;
  }
  get_contentTypeMatcher_b310yg_k$() {
    return this.contentTypeMatcher_1;
  }
}
class ContentNegotiationConfig$defaultMatcher$1 {
  constructor($pattern) {
    return new.target.new_io_ktor_client_plugins_contentnegotiation_ContentNegotiationConfig__no_name_provided__rnotj_k$($pattern);
  }
  static new_io_ktor_client_plugins_contentnegotiation_ContentNegotiationConfig__no_name_provided__rnotj_k$($pattern, $box) {
    var $this = createThis(this, $box);
    $this.$pattern_1 = $pattern;
    return $this;
  }
  contains_eqyxob_k$(contentType) {
    return contentType.match_syvve3_k$(this.$pattern_1);
  }
}
class ContentNegotiationConfig {
  constructor() {
    return new.target.new_io_ktor_client_plugins_contentnegotiation_ContentNegotiationConfig_lytvqg_k$();
  }
  static new_io_ktor_client_plugins_contentnegotiation_ContentNegotiationConfig_lytvqg_k$($box) {
    var $this = createThis(this, $box);
    $this.ignoredTypes_1 = toMutableSet(plus(get_DefaultIgnoredTypes(), get_DefaultCommonIgnoredTypes()));
    var tmp = $this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.registrations_1 = ArrayList.new_kotlin_collections_ArrayList_h94ppk_k$();
    $this.defaultAcceptHeaderQValue_1 = null;
    return $this;
  }
  get_ignoredTypes_65xo7h_k$() {
    return this.ignoredTypes_1;
  }
  get_registrations_yr9o38_k$() {
    return this.registrations_1;
  }
  set_defaultAcceptHeaderQValue_ly992q_k$(_set____db54di) {
    this.defaultAcceptHeaderQValue_1 = _set____db54di;
  }
  get_defaultAcceptHeaderQValue_k2nmyb_k$() {
    return this.defaultAcceptHeaderQValue_1;
  }
  register_48t3rv_k$(contentType, converter, configuration) {
    var matcher = contentType.match_syvve3_k$(Application_getInstance().get_Json_wo4ci9_k$()) ? JsonContentTypeMatcher_getInstance() : defaultMatcher(this, contentType);
    this.register_rs9lpt_k$(contentType, converter, matcher, configuration);
  }
  register_rs9lpt_k$(contentTypeToSend, converter, contentTypeMatcher, configuration) {
    // Inline function 'kotlin.apply' call
    configuration(converter);
    var registration = ConverterRegistration.new_io_ktor_client_plugins_contentnegotiation_ContentNegotiationConfig_ConverterRegistration_hcxw3f_k$(converter, contentTypeToSend, contentTypeMatcher);
    this.registrations_1.add_utx5q5_k$(registration);
  }
  removeIgnoredType_lfss1y_k$(type) {
    this.ignoredTypes_1.remove_cedx0m_k$(type);
  }
  ignoreType_eznety_k$(type) {
    this.ignoredTypes_1.add_utx5q5_k$(type);
  }
  clearIgnoredTypes_8dwsnw_k$() {
    this.ignoredTypes_1.clear_j9egeb_k$();
  }
}
class ContentConverterException extends Exception {
  constructor(message) {
    return new.target.new_io_ktor_client_plugins_contentnegotiation_ContentConverterException_dx8v68_k$(message);
  }
  static new_io_ktor_client_plugins_contentnegotiation_ContentConverterException_dx8v68_k$(message, $box) {
    var $this = this.new_kotlin_Exception_9db8xb_k$(message, $box);
    captureStack($this, $this.$throwableCtor_2);
    return $this;
  }
}
class JsonContentTypeMatcher {
  constructor() {
    return new.target.new_io_ktor_client_plugins_contentnegotiation_JsonContentTypeMatcher_rxnnb_k$();
  }
  static new_io_ktor_client_plugins_contentnegotiation_JsonContentTypeMatcher_rxnnb_k$($box) {
    var $this = createThis(this, $box);
    JsonContentTypeMatcher_instance = $this;
    return $this;
  }
  contains_eqyxob_k$(contentType) {
    if (contentType.match_syvve3_k$(Application_getInstance().get_Json_wo4ci9_k$())) {
      return true;
    }
    var value = contentType.withoutParameters_wrqe36_k$().toString();
    return Application_getInstance().contains_vaykv6_k$(value) && endsWith(value, '+json', true);
  }
}
//endregion
function get_LOGGER() {
  _init_properties_ContentNegotiation_kt__o183go();
  return LOGGER;
}
var LOGGER;
function get_DefaultCommonIgnoredTypes() {
  _init_properties_ContentNegotiation_kt__o183go();
  return DefaultCommonIgnoredTypes;
}
var DefaultCommonIgnoredTypes;
function get_ExcludedContentTypes() {
  _init_properties_ContentNegotiation_kt__o183go();
  return ExcludedContentTypes;
}
var ExcludedContentTypes;
function get_ContentNegotiation() {
  _init_properties_ContentNegotiation_kt__o183go();
  return ContentNegotiation;
}
var ContentNegotiation;
function defaultMatcher($this, pattern) {
  return ContentNegotiationConfig$defaultMatcher$1.new_io_ktor_client_plugins_contentnegotiation_ContentNegotiationConfig__no_name_provided__rnotj_k$(pattern);
}
function ContentNegotiationConfig$_init_$ref_1ne3ob() {
  return constructCallableReference(() => ContentNegotiationConfig.new_io_ktor_client_plugins_contentnegotiation_ContentNegotiationConfig_lytvqg_k$(), 0, 0, 'io.ktor.client.plugins.contentnegotiation/ContentNegotiationConfig.<init>|<init>(){}[0]', '<init>');
}
function ContentNegotiation$lambda($this$createClientPlugin) {
  _init_properties_ContentNegotiation_kt__o183go();
  var registrations = $this$createClientPlugin.get_pluginConfig_p50bdq_k$().registrations_1;
  var ignoredTypes = $this$createClientPlugin.get_pluginConfig_p50bdq_k$().ignoredTypes_1;
  $this$createClientPlugin.transformRequestBody_immy9t_k$(ContentNegotiation$lambda$slambda(registrations, $this$createClientPlugin, ignoredTypes));
  $this$createClientPlugin.transformResponseBody_ee7rr5_k$(ContentNegotiation$lambda$slambda_0(ignoredTypes, registrations, $this$createClientPlugin));
  return Unit_getInstance();
}
function ContentNegotiation$lambda$convertRequest$lambda(it) {
  _init_properties_ContentNegotiation_kt__o183go();
  return toString(it.converter_1);
}
function *invoke$convertRequest(registrations, $this_createClientPlugin, ignoredTypes, request, body, $completion) {
  var tmp;
  if (request.get_attributes_dgqof4_k$().contains_du0289_k$(get_ExcludedContentTypes())) {
    var excluded = request.get_attributes_dgqof4_k$().get_r696p5_k$(get_ExcludedContentTypes());
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList.new_kotlin_collections_ArrayList_h94ppk_k$();
    var _iterator__ex2g4s = registrations.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      var tmp$ret$3;
      $l$block_0: {
        // Inline function 'kotlin.collections.none' call
        var tmp_0;
        if (isInterface(excluded, Collection)) {
          tmp_0 = excluded.isEmpty_y1axqb_k$();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$3 = true;
          break $l$block_0;
        }
        var _iterator__ex2g4s_0 = excluded.iterator_jk1svi_k$();
        while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
          var element_0 = _iterator__ex2g4s_0.next_20eer_k$();
          if (element.contentTypeToSend_1.match_syvve3_k$(element_0)) {
            tmp$ret$3 = false;
            break $l$block_0;
          }
        }
        tmp$ret$3 = true;
      }
      if (tmp$ret$3) {
        destination.add_utx5q5_k$(element);
      }
    }
    tmp = destination;
  } else {
    tmp = registrations;
  }
  var requestRegistrations = tmp;
  // Inline function 'kotlin.collections.orEmpty' call
  var tmp0_elvis_lhs = request.get_headers_ef25jx_k$().getAll_ffxf4h_k$(HttpHeaders_getInstance().get_Accept_4a5gpb_k$());
  var acceptHeaders = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  // Inline function 'kotlin.collections.forEach' call
  var _iterator__ex2g4s_1 = requestRegistrations.iterator_jk1svi_k$();
  while (_iterator__ex2g4s_1.hasNext_bitz1p_k$()) {
    var element_1 = _iterator__ex2g4s_1.next_20eer_k$();
    var tmp$ret$8;
    $l$block_2: {
      // Inline function 'kotlin.collections.none' call
      var tmp_1;
      if (isInterface(acceptHeaders, Collection)) {
        tmp_1 = acceptHeaders.isEmpty_y1axqb_k$();
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp$ret$8 = true;
        break $l$block_2;
      }
      var _iterator__ex2g4s_2 = acceptHeaders.iterator_jk1svi_k$();
      while (_iterator__ex2g4s_2.hasNext_bitz1p_k$()) {
        var element_2 = _iterator__ex2g4s_2.next_20eer_k$();
        if (Companion_getInstance().parse_pc1q8p_k$(element_2).match_syvve3_k$(element_1.contentTypeToSend_1)) {
          tmp$ret$8 = false;
          break $l$block_2;
        }
      }
      tmp$ret$8 = true;
    }
    if (tmp$ret$8) {
      var qValue = $this_createClientPlugin.get_pluginConfig_p50bdq_k$().defaultAcceptHeaderQValue_1;
      var contentTypeToSend = qValue == null ? element_1.contentTypeToSend_1 : element_1.contentTypeToSend_1.withParameter_j6bpqb_k$('q', qValue.toString());
      get_LOGGER().trace_fti9bv_k$('Adding Accept=' + contentTypeToSend.toString() + ' header for ' + request.get_url_18iuii_k$().toString());
      accept(request, contentTypeToSend);
    }
  }
  var tmp_2;
  if (body instanceof OutgoingContent) {
    tmp_2 = true;
  } else {
    var tmp$ret$10;
    $l$block_4: {
      // Inline function 'kotlin.collections.any' call
      var tmp_3;
      if (isInterface(ignoredTypes, Collection)) {
        tmp_3 = ignoredTypes.isEmpty_y1axqb_k$();
      } else {
        tmp_3 = false;
      }
      if (tmp_3) {
        tmp$ret$10 = false;
        break $l$block_4;
      }
      var _iterator__ex2g4s_3 = ignoredTypes.iterator_jk1svi_k$();
      while (_iterator__ex2g4s_3.hasNext_bitz1p_k$()) {
        var element_3 = _iterator__ex2g4s_3.next_20eer_k$();
        if (element_3.isInstance_6tn68w_k$(body)) {
          tmp$ret$10 = true;
          break $l$block_4;
        }
      }
      tmp$ret$10 = false;
    }
    tmp_2 = tmp$ret$10;
  }
  if (tmp_2) {
    get_LOGGER().trace_fti9bv_k$('Body type ' + toString(getKClassFromExpression(body)) + ' is in ignored types. ' + ('Skipping ContentNegotiation for ' + request.get_url_18iuii_k$().toString() + '.'));
    return null;
  }
  var tmp0_elvis_lhs_0 = contentType(request);
  var tmp_4;
  if (tmp0_elvis_lhs_0 == null) {
    // Inline function 'kotlin.run' call
    get_LOGGER().trace_fti9bv_k$("Request doesn't have Content-Type header. Skipping ContentNegotiation for " + request.get_url_18iuii_k$().toString() + '.');
    return null;
  } else {
    tmp_4 = tmp0_elvis_lhs_0;
  }
  var contentType_0 = tmp_4;
  if (body instanceof Unit) {
    get_LOGGER().trace_fti9bv_k$('Sending empty body for ' + request.get_url_18iuii_k$().toString());
    request.get_headers_ef25jx_k$().remove_6241ba_k$(HttpHeaders_getInstance().get_ContentType_z1j0sq_k$());
    return EmptyContent_getInstance();
  }
  // Inline function 'kotlin.collections.filter' call
  // Inline function 'kotlin.collections.filterTo' call
  var destination_0 = ArrayList.new_kotlin_collections_ArrayList_h94ppk_k$();
  var _iterator__ex2g4s_4 = registrations.iterator_jk1svi_k$();
  while (_iterator__ex2g4s_4.hasNext_bitz1p_k$()) {
    var element_4 = _iterator__ex2g4s_4.next_20eer_k$();
    if (element_4.contentTypeMatcher_1.contains_eqyxob_k$(contentType_0)) {
      destination_0.add_utx5q5_k$(element_4);
    }
  }
  // Inline function 'kotlin.takeIf' call
  var tmp_5;
  // Inline function 'kotlin.collections.isNotEmpty' call
  if (!destination_0.isEmpty_y1axqb_k$()) {
    tmp_5 = destination_0;
  } else {
    tmp_5 = null;
  }
  var tmp1_elvis_lhs = tmp_5;
  var tmp_6;
  if (tmp1_elvis_lhs == null) {
    // Inline function 'kotlin.run' call
    get_LOGGER().trace_fti9bv_k$('None of the registered converters match request Content-Type=' + contentType_0.toString() + '. ' + ('Skipping ContentNegotiation for ' + request.get_url_18iuii_k$().toString() + '.'));
    return null;
  } else {
    tmp_6 = tmp1_elvis_lhs;
  }
  var matchingRegistrations = tmp_6;
  if (request.get_bodyType_3n7prv_k$() == null) {
    get_LOGGER().trace_fti9bv_k$('Request has unknown body type. Skipping ContentNegotiation for ' + request.get_url_18iuii_k$().toString() + '.');
    return null;
  }
  request.get_headers_ef25jx_k$().remove_6241ba_k$(HttpHeaders_getInstance().get_ContentType_z1j0sq_k$());
  var tmp$ret$22;
  $l$block_5: {
    // Inline function 'kotlin.collections.firstNotNullOfOrNull' call
    var _iterator__ex2g4s_5 = matchingRegistrations.iterator_jk1svi_k$();
    while (_iterator__ex2g4s_5.hasNext_bitz1p_k$()) {
      var element_5 = _iterator__ex2g4s_5.next_20eer_k$();
      var tmp0_elvis_lhs_1 = charset(contentType_0);
      var tmp_7 = tmp0_elvis_lhs_1 == null ? Charsets_getInstance().get_UTF_8_ihn39z_k$() : tmp0_elvis_lhs_1;
      var tmp_8 = ensureNotNull(request.get_bodyType_3n7prv_k$());
      // Inline function 'kotlin.takeIf' call
      var tmp_9;
      if (!equals(body, NullBody_getInstance())) {
        tmp_9 = body;
      } else {
        tmp_9 = null;
      }
      var tmp$ret$24 = tmp_9;
      var result = yield* element_5.converter_1.serialize_vlmgdn_k$(contentType_0, tmp_7, tmp_8, tmp$ret$24, $completion);
      if (!(result == null)) {
        get_LOGGER().trace_fti9bv_k$('Converted request body using ' + toString(element_5.converter_1) + ' for ' + request.get_url_18iuii_k$().toString());
      }
      var result_0 = result;
      if (!(result_0 == null)) {
        tmp$ret$22 = result_0;
        break $l$block_5;
      }
    }
    tmp$ret$22 = null;
  }
  var tmp2_elvis_lhs = tmp$ret$22;
  var tmp_10;
  if (tmp2_elvis_lhs == null) {
    var tmp_11 = "Can't convert " + toString(body) + ' with contentType ' + contentType_0.toString() + ' using converters ';
    throw ContentConverterException.new_io_ktor_client_plugins_contentnegotiation_ContentConverterException_dx8v68_k$(tmp_11 + joinToString(matchingRegistrations, VOID, VOID, VOID, VOID, VOID, ContentNegotiation$lambda$convertRequest$lambda));
  } else {
    tmp_10 = tmp2_elvis_lhs;
  }
  var serializedContent = tmp_10;
  return serializedContent;
}
function *invoke$convertResponse(ignoredTypes, registrations, $this_createClientPlugin, requestUrl, info, body, responseContentType, charset, $completion) {
  charset = charset === VOID ? Charsets_getInstance().get_UTF_8_ihn39z_k$() : charset;
  if (!isInterface(body, ByteReadChannel)) {
    get_LOGGER().trace_fti9bv_k$('Response body is already transformed. Skipping ContentNegotiation for ' + requestUrl.toString() + '.');
    return null;
  }
  if (ignoredTypes.contains_aljjnj_k$(info.get_type_wovaf7_k$())) {
    get_LOGGER().trace_fti9bv_k$('Response body type ' + toString(info.get_type_wovaf7_k$()) + ' is in ignored types. ' + ('Skipping ContentNegotiation for ' + requestUrl.toString() + '.'));
    return null;
  }
  // Inline function 'kotlin.collections.filter' call
  // Inline function 'kotlin.collections.filterTo' call
  var destination = ArrayList.new_kotlin_collections_ArrayList_h94ppk_k$();
  var _iterator__ex2g4s = registrations.iterator_jk1svi_k$();
  while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
    var element = _iterator__ex2g4s.next_20eer_k$();
    if (element.contentTypeMatcher_1.contains_eqyxob_k$(responseContentType)) {
      destination.add_utx5q5_k$(element);
    }
  }
  // Inline function 'kotlin.collections.map' call
  // Inline function 'kotlin.collections.mapTo' call
  var destination_0 = ArrayList.new_kotlin_collections_ArrayList_l811p6_k$(collectionSizeOrDefault(destination, 10));
  var _iterator__ex2g4s_0 = destination.iterator_jk1svi_k$();
  while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
    var item = _iterator__ex2g4s_0.next_20eer_k$();
    var tmp$ret$5 = item.converter_1;
    destination_0.add_utx5q5_k$(tmp$ret$5);
  }
  // Inline function 'kotlin.takeIf' call
  var tmp;
  // Inline function 'kotlin.collections.isNotEmpty' call
  if (!destination_0.isEmpty_y1axqb_k$()) {
    tmp = destination_0;
  } else {
    tmp = null;
  }
  var tmp0_elvis_lhs = tmp;
  var tmp_0;
  if (tmp0_elvis_lhs == null) {
    // Inline function 'kotlin.run' call
    get_LOGGER().trace_fti9bv_k$('None of the registered converters match response with Content-Type=' + responseContentType.toString() + '. ' + ('Skipping ContentNegotiation for ' + requestUrl.toString() + '.'));
    return null;
  } else {
    tmp_0 = tmp0_elvis_lhs;
  }
  var suitableConverters = tmp_0;
  var result = yield* deserialize(suitableConverters, body, info, charset, $completion);
  if (!isInterface(result, ByteReadChannel)) {
    get_LOGGER().trace_fti9bv_k$('Response body was converted to ' + toString(getKClassFromExpression(result)) + ' for ' + requestUrl.toString() + '.');
  }
  return result;
}
function ContentNegotiation$lambda$slambda($registrations, $this_createClientPlugin, $ignoredTypes) {
  return constructCallableReference(($this$transformRequestBody, request, body, _unused_var__etf5q3, $completion) => orPromise($completion, function *($completion) {
    return yield* /*#__NOINLINE__*/invoke$convertRequest($registrations, $this_createClientPlugin, $ignoredTypes, request, body, $completion);
  }), 4);
}
function ContentNegotiation$lambda$slambda_0($ignoredTypes, $registrations, $this_createClientPlugin) {
  return constructCallableReference(($this$transformResponseBody, response, body, info, $completion) => orPromise($completion, function *($completion) {
    var tmp0_elvis_lhs = contentType_0(response);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var contentType = tmp;
    var charset = suitableCharset(get_request(response).get_headers_ef25jx_k$());
    return yield* /*#__NOINLINE__*/invoke$convertResponse($ignoredTypes, $registrations, $this_createClientPlugin, get_request(response).get_url_18iuii_k$(), info, body, contentType, charset, $completion);
  }), 4);
}
var properties_initialized_ContentNegotiation_kt_1ayduy;
function _init_properties_ContentNegotiation_kt__o183go() {
  if (!properties_initialized_ContentNegotiation_kt_1ayduy) {
    properties_initialized_ContentNegotiation_kt_1ayduy = true;
    LOGGER = KtorSimpleLogger('io.ktor.client.plugins.contentnegotiation.ContentNegotiation');
    DefaultCommonIgnoredTypes = setOf([PrimitiveClasses_getInstance().get_byteArrayClass_57my8g_k$(), PrimitiveClasses_getInstance().get_stringClass_bik2gy_k$(), getKClass(HttpStatusCode), getKClass(ByteReadChannel), getKClass(OutgoingContent)]);
    // Inline function 'io.ktor.util.AttributeKey' call
    var name = 'ExcludedContentTypesAttr';
    // Inline function 'io.ktor.util.reflect.typeInfo' call
    var tmp = getKClass(KtList);
    // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
    var tmp_0;
    try {
      tmp_0 = createKType(getKClass(KtList), arrayOf([createInvariantKTypeProjection(createKType(getKClass(ContentType), arrayOf([]), false))]), false);
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var _unused_var__etf5q3 = $p;
        tmp_1 = null;
      } else {
        throw $p;
      }
      tmp_0 = tmp_1;
    }
    var tmp$ret$2 = tmp_0;
    var tmp$ret$1 = TypeInfo.new_io_ktor_util_reflect_TypeInfo_x2ms91_k$(tmp, tmp$ret$2);
    ExcludedContentTypes = AttributeKey.new_io_ktor_util_AttributeKey_p28cuf_k$(name, tmp$ret$1);
    var tmp_2 = ContentNegotiationConfig$_init_$ref_1ne3ob();
    ContentNegotiation = createClientPlugin('ContentNegotiation', tmp_2, ContentNegotiation$lambda);
  }
}
var JsonContentTypeMatcher_instance;
function JsonContentTypeMatcher_getInstance() {
  if (JsonContentTypeMatcher_instance === VOID)
    JsonContentTypeMatcher.new_io_ktor_client_plugins_contentnegotiation_JsonContentTypeMatcher_rxnnb_k$();
  return JsonContentTypeMatcher_instance;
}
function get_DefaultIgnoredTypes() {
  _init_properties_DefaultIgnoredTypesJs_kt__rjtdk1();
  return DefaultIgnoredTypes;
}
var DefaultIgnoredTypes;
var properties_initialized_DefaultIgnoredTypesJs_kt_65g2xt;
function _init_properties_DefaultIgnoredTypesJs_kt__rjtdk1() {
  if (!properties_initialized_DefaultIgnoredTypesJs_kt_65g2xt) {
    properties_initialized_DefaultIgnoredTypesJs_kt_65g2xt = true;
    // Inline function 'kotlin.collections.mutableSetOf' call
    DefaultIgnoredTypes = LinkedHashSet.new_kotlin_collections_LinkedHashSet_bvgyjd_k$();
  }
}
//region block: post-declaration
initMetadataForClass(ConverterRegistration, 'ConverterRegistration');
initMetadataForClass(ContentNegotiationConfig$defaultMatcher$1, VOID, VOID, VOID, [ContentTypeMatcher]);
protoOf(ContentNegotiationConfig).register$default_yp0q2f_k$ = register$default;
initMetadataForClass(ContentNegotiationConfig, 'ContentNegotiationConfig', ContentNegotiationConfig.new_io_ktor_client_plugins_contentnegotiation_ContentNegotiationConfig_lytvqg_k$, VOID, [Configuration]);
initMetadataForClass(ContentConverterException, 'ContentConverterException');
initMetadataForObject(JsonContentTypeMatcher, 'JsonContentTypeMatcher', VOID, VOID, [ContentTypeMatcher]);
//endregion
//region block: exports
export {
  get_ContentNegotiation as get_ContentNegotiationcp59ye9rorjc,
};
//endregion

//# sourceMappingURL=ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation.mjs.map
