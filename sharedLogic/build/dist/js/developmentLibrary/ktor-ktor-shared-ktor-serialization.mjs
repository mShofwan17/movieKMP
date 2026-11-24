import {
  Exceptiondt2hlxn7j7vw as Exception,
  VOID3gxj6tk5isa35 as VOID,
  captureStack1fzi4aczwc4hg as captureStack,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  Unit_getInstanceu5z48rdn3d6z as Unit_getInstance,
  createThis2j2avj17cvnv2 as createThis,
  $3l5vvh8yg0ier as $,
  equals2au1ep9vhcato as equals,
  FunctionAdapter3lcrrz3moet5b as FunctionAdapter,
  isInterface3d6p8outrmvmk as isInterface,
  hashCodeq5arwsb9dgti as hashCode,
  orPromise1iucc2to2udt2 as orPromise,
  constructCallableReference23y65rf941mch as constructCallableReference,
} from './kotlin-kotlin-stdlib.mjs';
import {
  asFlow3ngsnn5xpz8pw as asFlow,
  firstOrNull1sz36fdcyca21 as firstOrNull,
  FlowCollector26clgpmzihvke as FlowCollector,
  Flow3375h4584bu3w as Flow,
} from './kotlinx-coroutines-core.mjs';
import {
  NullBody_getInstancejm05lw1x3tn4 as NullBody_getInstance,
  HttpHeaders_getInstance1avhj7ffsen7f as HttpHeaders_getInstance,
  parseAndSortHeader33xgq5fx7y6j1 as parseAndSortHeader,
} from './ktor-ktor-http.mjs';
import {
  Charsets_getInstancezrqwjk0yrlyw as Charsets_getInstance,
  forName2faodmskqnoz5 as forName,
  isSupported2nf870ypy50et as isSupported,
} from './ktor-ktor-io.mjs';
//region block: imports
//endregion
//region block: pre-declaration
class ContentConvertException extends Exception {
  constructor(message, cause) {
    return new.target.new_io_ktor_serialization_ContentConvertException_5sys2h_k$(message, cause);
  }
  static new_io_ktor_serialization_ContentConvertException_5sys2h_k$(message, cause, $box) {
    cause = cause === VOID ? null : cause;
    var $this = this.new_kotlin_Exception_mtlthx_k$(message, cause, $box);
    captureStack($this, $this.$throwableCtor_2);
    return $this;
  }
}
class JsonConvertException extends ContentConvertException {
  constructor(message, cause) {
    return new.target.new_io_ktor_serialization_JsonConvertException_9jcyhe_k$(message, cause);
  }
  static new_io_ktor_serialization_JsonConvertException_9jcyhe_k$(message, cause, $box) {
    cause = cause === VOID ? null : cause;
    var $this = this.new_io_ktor_serialization_ContentConvertException_5sys2h_k$(message, cause, $box);
    captureStack($this, $this.$throwableCtor_3);
    return $this;
  }
}
class ContentConverter {}
class Configuration {}
function register$default(contentType, converter, configuration, $super) {
  var tmp;
  if (configuration === VOID) {
    tmp = Configuration$register$lambda;
  } else {
    tmp = configuration;
  }
  configuration = tmp;
  var tmp_0;
  if ($super === VOID) {
    this.register_48t3rv_k$(contentType, converter, configuration);
    tmp_0 = Unit_getInstance();
  } else {
    tmp_0 = $super.register_48t3rv_k$.call(this, contentType, converter, configuration);
  }
  return tmp_0;
}
class sam$kotlinx_coroutines_flow_FlowCollector$0 {
  constructor(function_0) {
    return new.target.new_io_ktor_serialization__no_name_provided__sam$kotlinx_coroutines_flow_FlowCollector$0_s3qdfx_k$(function_0);
  }
  static new_io_ktor_serialization__no_name_provided__sam$kotlinx_coroutines_flow_FlowCollector$0_s3qdfx_k$(function_0, $box) {
    var $this = createThis(this, $box);
    $this.function_1 = function_0;
    return $this;
  }
  *emit_t92u1f_k$(value, $completion) {
    return yield* $(this.function_1(value, $completion), $completion);
  }
  getFunctionDelegate_jtodtf_k$() {
    return this.function_1;
  }
  equals(other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FlowCollector) : false) {
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
class deserialize$$inlined$map$1 {
  constructor($this, $charset, $typeInfo, $body) {
    return new.target.new_io_ktor_serialization__no_name_provided__g0wvcc_k$($this, $charset, $typeInfo, $body);
  }
  static new_io_ktor_serialization__no_name_provided__g0wvcc_k$($this, $charset, $typeInfo, $body, $box) {
    var $this_0 = createThis(this, $box);
    $this_0.$this_1 = $this;
    $this_0.$charset_1 = $charset;
    $this_0.$typeInfo_1 = $typeInfo;
    $this_0.$body_1 = $body;
    return $this_0;
  }
  *collect_ooju95_k$(collector, $completion) {
    var tmp = deserialize$o$collect$slambda(collector, this.$charset_1, this.$typeInfo_1, this.$body_1);
    yield* this.$this_1.collect_aksokr_k$(sam$kotlinx_coroutines_flow_FlowCollector$0.new_io_ktor_serialization__no_name_provided__sam$kotlinx_coroutines_flow_FlowCollector$0_s3qdfx_k$(tmp), $completion);
    return Unit_getInstance();
  }
  collect_aksokr_k$(collector, $completion) {
    return this.collect_ooju95_k$(collector, $completion);
  }
}
//endregion
function *deserialize(_this__u8e3s4, body, typeInfo, charset, $completion) {
  // Inline function 'kotlinx.coroutines.flow.map' call
  // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
  var this_0 = asFlow(_this__u8e3s4);
  // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
  var tmp = deserialize$$inlined$map$1.new_io_ktor_serialization__no_name_provided__g0wvcc_k$(this_0, charset, typeInfo, body);
  var result = yield* firstOrNull(tmp, deserialize$slambda(body), $completion);
  var tmp_0;
  if (!(result == null)) {
    tmp_0 = result;
  } else {
    if (!body.get_isClosedForRead_ajcc1s_k$()) {
      tmp_0 = body;
    } else {
      var tmp0_safe_receiver = typeInfo.get_kotlinType_flgmsk_k$();
      if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_isMarkedNullable_4el8ow_k$()) === true) {
        tmp_0 = NullBody_getInstance();
      } else {
        throw ContentConvertException.new_io_ktor_serialization_ContentConvertException_5sys2h_k$('No suitable converter found for ' + typeInfo.toString());
      }
    }
  }
  return tmp_0;
}
function suitableCharset(_this__u8e3s4, defaultCharset) {
  defaultCharset = defaultCharset === VOID ? Charsets_getInstance().get_UTF_8_ihn39z_k$() : defaultCharset;
  var tmp0_elvis_lhs = suitableCharsetOrNull(_this__u8e3s4, defaultCharset);
  return tmp0_elvis_lhs == null ? defaultCharset : tmp0_elvis_lhs;
}
function Configuration$register$lambda(_this__u8e3s4) {
  return Unit_getInstance();
}
function suitableCharsetOrNull(_this__u8e3s4, defaultCharset) {
  defaultCharset = defaultCharset === VOID ? Charsets_getInstance().get_UTF_8_ihn39z_k$() : defaultCharset;
  var _iterator__ex2g4s = parseAndSortHeader(_this__u8e3s4.get_6bo4tg_k$(HttpHeaders_getInstance().get_AcceptCharset_1vf6lh_k$())).iterator_jk1svi_k$();
  while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
    var charset = _iterator__ex2g4s.next_20eer_k$().component1_7eebsc_k$();
    if (charset === '*')
      return defaultCharset;
    else if (isSupported(Charsets_getInstance(), charset))
      return forName(Charsets_getInstance(), charset);
  }
  return null;
}
function deserialize$o$collect$slambda($$this$unsafeFlow, $charset, $typeInfo, $body) {
  return constructCallableReference((value, $completion) => orPromise($completion, function *($completion) {
    var tmp0 = $$this$unsafeFlow;
    var tmp$ret$1 = yield* value.deserialize_4o4t3i_k$($charset, $typeInfo, $body, $completion);
    yield* tmp0.emit_t92u1f_k$(tmp$ret$1, $completion);
    return Unit_getInstance();
  }), 1);
}
function deserialize$slambda($body) {
  return constructCallableReference((it, $completion) => orPromise($completion, function *($completion) {
    return !(it == null) || $body.get_isClosedForRead_ajcc1s_k$();
  }), 1);
}
//region block: post-declaration
initMetadataForClass(ContentConvertException, 'ContentConvertException');
initMetadataForClass(JsonConvertException, 'JsonConvertException');
initMetadataForInterface(ContentConverter, 'ContentConverter', VOID, VOID, VOID, [4, 3]);
initMetadataForInterface(Configuration, 'Configuration');
initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
initMetadataForClass(deserialize$$inlined$map$1, VOID, VOID, VOID, [Flow], [1]);
//endregion
//region block: exports
export {
  deserialize as deserialize3e6u4ptep3aeu,
  register$default as register$default2ko31hm484mcz,
  Configuration as Configuration20xgygxdzhlk5,
  ContentConverter as ContentConverteryzo4k0ursexh,
  JsonConvertException as JsonConvertExceptiongnc5x6xwaf77,
  suitableCharset as suitableCharset1jgdcpdzbzgzn,
};
//endregion

//# sourceMappingURL=ktor-ktor-shared-ktor-serialization.mjs.map
