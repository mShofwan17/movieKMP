import {
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  VOID3gxj6tk5isa35 as VOID,
  ArrayList3it5z8td81qkl as ArrayList,
  Unit_getInstanceu5z48rdn3d6z as Unit_getInstance,
  orPromise1iucc2to2udt2 as orPromise,
  constructCallableReference23y65rf941mch as constructCallableReference,
  toString1pkumu07cwy4m as toString,
  IllegalStateExceptionkoljg5n0nrlr as IllegalStateException,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  isInterface3d6p8outrmvmk as isInterface,
  createThis2j2avj17cvnv2 as createThis,
  $3l5vvh8yg0ier as $,
  equals2au1ep9vhcato as equals,
  FunctionAdapter3lcrrz3moet5b as FunctionAdapter,
  hashCodeq5arwsb9dgti as hashCode,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  IllegalArgumentException2asla15b5jaob as IllegalArgumentException,
  getKClassFromExpression348iqjl4fnx2f as getKClassFromExpression,
  KtMap140uvy3s5zad8 as KtMap,
  KtSetjrjc7fhfd6b9 as KtSet,
  firstOrNull1gk7vzkf4h3nq as firstOrNull,
  StringCompanionObject_getInstance2ixwabif4oprw as StringCompanionObject_getInstance,
  isArray1hxjqtqy632bc as isArray,
  KtList3hktaavzmj137 as KtList,
  filterNotNull3qfgcwmxhwfxe as filterNotNull,
  collectionSizeOrDefault36dulx8yinfqm as collectionSizeOrDefault,
  HashSet2dzve9y63nf0v as HashSet,
  singleOrNullrknfaxokm1sl as singleOrNull,
  Collection1k04j3hzsbod0 as Collection,
  emptyList1g2z5xcrvp2zy as emptyList,
} from './kotlin-kotlin-stdlib.mjs';
import {
  KSerializerzf77vz1967fq as KSerializer,
  BinaryFormat3f3aelhmz0ro1 as BinaryFormat,
  StringFormat2r2ka8mzcb3mi as StringFormat,
  SerializationExceptioneqrdve3ts2n9 as SerializationException,
  serializerOrNull31x2b6nu6gruj as serializerOrNull,
  serializer1rka18p0rjk4x as serializer,
  MapSerializer11kmegt3g5c1g as MapSerializer,
  SetSerializert3lb0yy9iftr as SetSerializer,
  serializer1x79l67jvwntn as serializer_0,
  ListSerializer1hxuk9dx5n9du as ListSerializer,
  get_nullable197rfua9r7fsz as get_nullable,
} from './kotlinx-serialization-kotlinx-serialization-core.mjs';
import {
  ByteArrayContent9zol65b22hp0 as ByteArrayContent,
  TextContent1rb6ftlpvl1d2 as TextContent,
  withCharsetIfNeeded3sz33ys0x9vfx as withCharsetIfNeeded,
} from './ktor-ktor-http.mjs';
import {
  FlowCollector26clgpmzihvke as FlowCollector,
  Flow3375h4584bu3w as Flow,
  asFlow3ngsnn5xpz8pw as asFlow,
  firstOrNull1sz36fdcyca21 as firstOrNull_0,
} from './kotlinx-coroutines-core.mjs';
import {
  readRemainingh4lyqt5j6r85 as readRemaining,
  discard3ugntd47xyll6 as discard,
  readText27783kyxjxi1g as readText,
} from './ktor-ktor-io.mjs';
import { readByteArray1ri21h2rciakw as readByteArray } from './kotlinx-io-kotlinx-io-core.mjs';
import {
  JsonConvertExceptiongnc5x6xwaf77 as JsonConvertException,
  ContentConverteryzo4k0ursexh as ContentConverter,
} from './ktor-ktor-shared-ktor-serialization.mjs';
//region block: imports
//endregion
//region block: pre-declaration
class KotlinxSerializationExtension {}
class KotlinxSerializationExtensionProvider {}
class sam$kotlinx_coroutines_flow_FlowCollector$0 {
  constructor(function_0) {
    return new.target.new_io_ktor_serialization_kotlinx_KotlinxSerializationConverter_sam$kotlinx_coroutines_flow_FlowCollector$0_r8ghjy_k$(function_0);
  }
  static new_io_ktor_serialization_kotlinx_KotlinxSerializationConverter_sam$kotlinx_coroutines_flow_FlowCollector$0_r8ghjy_k$(function_0, $box) {
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
class sam$kotlinx_coroutines_flow_FlowCollector$0_0 {
  constructor(function_0) {
    return new.target.new_io_ktor_serialization_kotlinx_KotlinxSerializationConverter_sam$kotlinx_coroutines_flow_FlowCollector$0_r8ghjy_k$(function_0);
  }
  static new_io_ktor_serialization_kotlinx_KotlinxSerializationConverter_sam$kotlinx_coroutines_flow_FlowCollector$0_r8ghjy_k$(function_0, $box) {
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
class KotlinxSerializationConverter$serialize$$inlined$map$1 {
  constructor($this, $contentType, $charset, $typeInfo, $value) {
    return new.target.new_io_ktor_serialization_kotlinx_KotlinxSerializationConverter__no_name_provided__qjbnsf_k$($this, $contentType, $charset, $typeInfo, $value);
  }
  static new_io_ktor_serialization_kotlinx_KotlinxSerializationConverter__no_name_provided__qjbnsf_k$($this, $contentType, $charset, $typeInfo, $value, $box) {
    var $this_0 = createThis(this, $box);
    $this_0.$this_1 = $this;
    $this_0.$contentType_1 = $contentType;
    $this_0.$charset_1 = $charset;
    $this_0.$typeInfo_1 = $typeInfo;
    $this_0.$value_1 = $value;
    return $this_0;
  }
  *collect_ooju95_k$(collector, $completion) {
    var tmp = KotlinxSerializationConverter$serialize$o$collect$slambda(collector, this.$contentType_1, this.$charset_1, this.$typeInfo_1, this.$value_1);
    yield* this.$this_1.collect_aksokr_k$(sam$kotlinx_coroutines_flow_FlowCollector$0.new_io_ktor_serialization_kotlinx_KotlinxSerializationConverter_sam$kotlinx_coroutines_flow_FlowCollector$0_r8ghjy_k$(tmp), $completion);
    return Unit_getInstance();
  }
  collect_aksokr_k$(collector, $completion) {
    return this.collect_ooju95_k$(collector, $completion);
  }
}
class KotlinxSerializationConverter$deserialize$$inlined$map$1 {
  constructor($this, $charset, $typeInfo, $content) {
    return new.target.new_io_ktor_serialization_kotlinx_KotlinxSerializationConverter__no_name_provided__hwgszt_k$($this, $charset, $typeInfo, $content);
  }
  static new_io_ktor_serialization_kotlinx_KotlinxSerializationConverter__no_name_provided__hwgszt_k$($this, $charset, $typeInfo, $content, $box) {
    var $this_0 = createThis(this, $box);
    $this_0.$this_1 = $this;
    $this_0.$charset_1 = $charset;
    $this_0.$typeInfo_1 = $typeInfo;
    $this_0.$content_1 = $content;
    return $this_0;
  }
  *collect_ooju95_k$(collector, $completion) {
    var tmp = KotlinxSerializationConverter$deserialize$o$collect$slambda(collector, this.$charset_1, this.$typeInfo_1, this.$content_1);
    yield* this.$this_1.collect_aksokr_k$(sam$kotlinx_coroutines_flow_FlowCollector$0_0.new_io_ktor_serialization_kotlinx_KotlinxSerializationConverter_sam$kotlinx_coroutines_flow_FlowCollector$0_r8ghjy_k$(tmp), $completion);
    return Unit_getInstance();
  }
  collect_aksokr_k$(collector, $completion) {
    return this.collect_ooju95_k$(collector, $completion);
  }
}
class KotlinxSerializationConverter {
  constructor(format) {
    return new.target.new_io_ktor_serialization_kotlinx_KotlinxSerializationConverter_kmx2j9_k$(format);
  }
  static new_io_ktor_serialization_kotlinx_KotlinxSerializationConverter_kmx2j9_k$(format, $box) {
    var $this = createThis(this, $box);
    $this.format_1 = format;
    $this.extensions_1 = extensions($this.format_1);
    var tmp;
    var tmp_0 = $this.format_1;
    if (isInterface(tmp_0, BinaryFormat)) {
      tmp = true;
    } else {
      var tmp_1 = $this.format_1;
      tmp = isInterface(tmp_1, StringFormat);
    }
    // Inline function 'kotlin.require' call
    if (!tmp) {
      var message = 'Only binary and string formats are supported, ' + toString($this.format_1) + ' is not supported.';
      throw IllegalArgumentException.new_kotlin_IllegalArgumentException_f8t9r5_k$(toString(message));
    }
    return $this;
  }
  *serialize_dzrloi_k$(contentType, charset, typeInfo, value, $completion) {
    // Inline function 'kotlinx.coroutines.flow.map' call
    // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
    var this_0 = asFlow(this.extensions_1);
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    var tmp = KotlinxSerializationConverter$serialize$$inlined$map$1.new_io_ktor_serialization_kotlinx_KotlinxSerializationConverter__no_name_provided__qjbnsf_k$(this_0, contentType, charset, typeInfo, value);
    var fromExtension = yield* firstOrNull_0(tmp, KotlinxSerializationConverter$serialize$slambda(), $completion);
    if (!(fromExtension == null))
      return fromExtension;
    var tmp_0;
    try {
      tmp_0 = serializerForTypeInfo(this.format_1.get_serializersModule_piitvg_k$(), typeInfo);
    } catch ($p) {
      var tmp_1;
      if ($p instanceof SerializationException) {
        var cause = $p;
        tmp_1 = guessSerializer(value, this.format_1.get_serializersModule_piitvg_k$());
      } else {
        throw $p;
      }
      tmp_0 = tmp_1;
    }
    var serializer = tmp_0;
    return serializeContent(this, serializer, this.format_1, value, contentType, charset);
  }
  serialize_vlmgdn_k$(contentType, charset, typeInfo, value, $completion) {
    return this.serialize_dzrloi_k$(contentType, charset, typeInfo, value, $completion);
  }
  *deserialize_4o4t3i_k$(charset, typeInfo, content, $completion) {
    // Inline function 'kotlinx.coroutines.flow.map' call
    // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
    var this_0 = asFlow(this.extensions_1);
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    var tmp = KotlinxSerializationConverter$deserialize$$inlined$map$1.new_io_ktor_serialization_kotlinx_KotlinxSerializationConverter__no_name_provided__hwgszt_k$(this_0, charset, typeInfo, content);
    var fromExtension = yield* firstOrNull_0(tmp, KotlinxSerializationConverter$deserialize$slambda(content), $completion);
    var tmp_0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.extensions_1.isEmpty_y1axqb_k$()) {
      tmp_0 = !(fromExtension == null) || content.get_isClosedForRead_ajcc1s_k$();
    } else {
      tmp_0 = false;
    }
    if (tmp_0)
      return fromExtension;
    var serializer = serializerForTypeInfo(this.format_1.get_serializersModule_piitvg_k$(), typeInfo);
    var contentPacket = yield* readRemaining(content, $completion);
    try {
      var tmp0_subject = this.format_1;
      var tmp_1;
      if (isInterface(tmp0_subject, StringFormat)) {
        tmp_1 = this.format_1.decodeFromString_jwu9sq_k$(serializer, readText(contentPacket, charset));
      } else {
        if (isInterface(tmp0_subject, BinaryFormat)) {
          tmp_1 = this.format_1.decodeFromByteArray_8opj5c_k$(serializer, readByteArray(contentPacket));
        } else {
          discard(contentPacket);
          // Inline function 'kotlin.error' call
          var message = 'Unsupported format ' + toString(this.format_1);
          throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message));
        }
      }
      return tmp_1;
    } catch ($p) {
      if ($p instanceof Error) {
        var cause = $p;
        throw JsonConvertException.new_io_ktor_serialization_JsonConvertException_9jcyhe_k$('Illegal input: ' + cause.message, cause);
      } else {
        throw $p;
      }
    }
  }
}
//endregion
function extensions(format) {
  // Inline function 'kotlin.collections.mapNotNull' call
  var tmp0 = get_providers();
  // Inline function 'kotlin.collections.mapNotNullTo' call
  var destination = ArrayList.new_kotlin_collections_ArrayList_h94ppk_k$();
  // Inline function 'kotlin.collections.forEach' call
  var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
  while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
    var element = _iterator__ex2g4s.next_20eer_k$();
    var tmp0_safe_receiver = element.extension_u1a1up_k$(format);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      destination.add_utx5q5_k$(tmp0_safe_receiver);
    }
  }
  return destination;
}
function serialization(_this__u8e3s4, contentType, format) {
  _this__u8e3s4.register$default_yp0q2f_k$(contentType, KotlinxSerializationConverter.new_io_ktor_serialization_kotlinx_KotlinxSerializationConverter_kmx2j9_k$(format));
}
function KotlinxSerializationConverter$serialize$o$collect$slambda($$this$unsafeFlow, $contentType, $charset, $typeInfo, $value) {
  return constructCallableReference((value, $completion) => orPromise($completion, function *($completion) {
    var tmp0 = $$this$unsafeFlow;
    var tmp$ret$1 = yield* value.serialize_vlmgdn_k$($contentType, $charset, $typeInfo, $value, $completion);
    yield* tmp0.emit_t92u1f_k$(tmp$ret$1, $completion);
    return Unit_getInstance();
  }), 1);
}
function KotlinxSerializationConverter$deserialize$o$collect$slambda($$this$unsafeFlow, $charset, $typeInfo, $content) {
  return constructCallableReference((value, $completion) => orPromise($completion, function *($completion) {
    var tmp0 = $$this$unsafeFlow;
    var tmp$ret$1 = yield* value.deserialize_4o4t3i_k$($charset, $typeInfo, $content, $completion);
    yield* tmp0.emit_t92u1f_k$(tmp$ret$1, $completion);
    return Unit_getInstance();
  }), 1);
}
function _get_format__qlarck($this) {
  return $this.format_1;
}
function _get_extensions__zgcsuh($this) {
  return $this.extensions_1;
}
function serializeContent($this, serializer, format, value, contentType, charset) {
  var tmp;
  if (isInterface(format, StringFormat)) {
    var content = format.encodeToString_k0apqx_k$(isInterface(serializer, KSerializer) ? serializer : THROW_CCE(), value);
    tmp = TextContent.new_io_ktor_http_content_TextContent_44fe4y_k$(content, withCharsetIfNeeded(contentType, charset));
  } else {
    if (isInterface(format, BinaryFormat)) {
      var content_0 = format.encodeToByteArray_n90khx_k$(isInterface(serializer, KSerializer) ? serializer : THROW_CCE(), value);
      tmp = ByteArrayContent.new_io_ktor_http_content_ByteArrayContent_k6hg32_k$(content_0, contentType);
    } else {
      // Inline function 'kotlin.error' call
      var message = 'Unsupported format ' + toString(format);
      throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message));
    }
  }
  return tmp;
}
function KotlinxSerializationConverter$serialize$slambda() {
  return constructCallableReference((it, $completion) => orPromise($completion, function *($completion) {
    return !(it == null);
  }), 1);
}
function KotlinxSerializationConverter$deserialize$slambda($content) {
  return constructCallableReference((it, $completion) => orPromise($completion, function *($completion) {
    return !(it == null) || $content.get_isClosedForRead_ajcc1s_k$();
  }), 1);
}
function serializerForTypeInfo(_this__u8e3s4, typeInfo) {
  var module_0 = _this__u8e3s4;
  var tmp0_safe_receiver = typeInfo.get_kotlinType_flgmsk_k$();
  var tmp;
  if (tmp0_safe_receiver == null) {
    tmp = null;
  } else {
    // Inline function 'kotlin.let' call
    var tmp_0;
    if (tmp0_safe_receiver.get_arguments_p5ddub_k$().isEmpty_y1axqb_k$()) {
      tmp_0 = null;
    } else {
      tmp_0 = serializerOrNull(module_0, tmp0_safe_receiver);
    }
    tmp = tmp_0;
  }
  var tmp1_elvis_lhs = tmp;
  var tmp_1;
  if (tmp1_elvis_lhs == null) {
    var tmp2_safe_receiver = module_0.getContextual$default_o8kdzb_k$(typeInfo.get_type_wovaf7_k$());
    tmp_1 = tmp2_safe_receiver == null ? null : maybeNullable(tmp2_safe_receiver, typeInfo);
  } else {
    tmp_1 = tmp1_elvis_lhs;
  }
  var tmp3_elvis_lhs = tmp_1;
  return tmp3_elvis_lhs == null ? maybeNullable(serializer(typeInfo.get_type_wovaf7_k$()), typeInfo) : tmp3_elvis_lhs;
}
function guessSerializer(value, module_0) {
  var tmp;
  if (value == null) {
    tmp = get_nullable(serializer_0(StringCompanionObject_getInstance()));
  } else {
    if (!(value == null) ? isInterface(value, KtList) : false) {
      tmp = ListSerializer(elementSerializer(value, module_0));
    } else {
      if (!(value == null) ? isArray(value) : false) {
        var tmp1_safe_receiver = firstOrNull(value);
        var tmp_0;
        if (tmp1_safe_receiver == null) {
          tmp_0 = null;
        } else {
          // Inline function 'kotlin.let' call
          tmp_0 = guessSerializer(tmp1_safe_receiver, module_0);
        }
        var tmp2_elvis_lhs = tmp_0;
        tmp = tmp2_elvis_lhs == null ? ListSerializer(serializer_0(StringCompanionObject_getInstance())) : tmp2_elvis_lhs;
      } else {
        if (!(value == null) ? isInterface(value, KtSet) : false) {
          tmp = SetSerializer(elementSerializer(value, module_0));
        } else {
          if (!(value == null) ? isInterface(value, KtMap) : false) {
            var keySerializer = elementSerializer(value.get_keys_wop4xp_k$(), module_0);
            var valueSerializer = elementSerializer(value.get_values_ksazhn_k$(), module_0);
            tmp = MapSerializer(keySerializer, valueSerializer);
          } else {
            var tmp3_elvis_lhs = module_0.getContextual$default_o8kdzb_k$(getKClassFromExpression(value));
            tmp = tmp3_elvis_lhs == null ? serializer(getKClassFromExpression(value)) : tmp3_elvis_lhs;
          }
        }
      }
    }
  }
  var tmp_1 = tmp;
  return isInterface(tmp_1, KSerializer) ? tmp_1 : THROW_CCE();
}
function maybeNullable(_this__u8e3s4, typeInfo) {
  var tmp;
  var tmp0_safe_receiver = typeInfo.get_kotlinType_flgmsk_k$();
  if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_isMarkedNullable_4el8ow_k$()) === true) {
    tmp = get_nullable(_this__u8e3s4);
  } else {
    tmp = _this__u8e3s4;
  }
  return tmp;
}
function elementSerializer(_this__u8e3s4, module_0) {
  // Inline function 'kotlin.collections.map' call
  var this_0 = filterNotNull(_this__u8e3s4);
  // Inline function 'kotlin.collections.mapTo' call
  var destination = ArrayList.new_kotlin_collections_ArrayList_l811p6_k$(collectionSizeOrDefault(this_0, 10));
  var _iterator__ex2g4s = this_0.iterator_jk1svi_k$();
  while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
    var item = _iterator__ex2g4s.next_20eer_k$();
    var tmp$ret$2 = guessSerializer(item, module_0);
    destination.add_utx5q5_k$(tmp$ret$2);
  }
  // Inline function 'kotlin.collections.distinctBy' call
  var set = HashSet.new_kotlin_collections_HashSet_bs6y2l_k$();
  var list = ArrayList.new_kotlin_collections_ArrayList_h94ppk_k$();
  var _iterator__ex2g4s_0 = destination.iterator_jk1svi_k$();
  while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
    var e = _iterator__ex2g4s_0.next_20eer_k$();
    var key = e.get_descriptor_wjt6a0_k$().get_serialName_u2rqhk_k$();
    if (set.add_utx5q5_k$(key)) {
      list.add_utx5q5_k$(e);
    }
  }
  var serializers = list;
  if (serializers.get_size_woubt6_k$() > 1) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList.new_kotlin_collections_ArrayList_l811p6_k$(collectionSizeOrDefault(serializers, 10));
    var _iterator__ex2g4s_1 = serializers.iterator_jk1svi_k$();
    while (_iterator__ex2g4s_1.hasNext_bitz1p_k$()) {
      var item_0 = _iterator__ex2g4s_1.next_20eer_k$();
      var tmp$ret$7 = item_0.get_descriptor_wjt6a0_k$().get_serialName_u2rqhk_k$();
      destination_0.add_utx5q5_k$(tmp$ret$7);
    }
    // Inline function 'kotlin.error' call
    var message = 'Serializing collections of different element types is not yet supported. ' + ('Selected serializers: ' + toString(destination_0));
    throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message));
  }
  var tmp0_elvis_lhs = singleOrNull(serializers);
  var selected = tmp0_elvis_lhs == null ? serializer_0(StringCompanionObject_getInstance()) : tmp0_elvis_lhs;
  if (selected.get_descriptor_wjt6a0_k$().get_isNullable_67sy7o_k$()) {
    return selected;
  }
  if (!isInterface(selected, KSerializer))
    THROW_CCE();
  var tmp$ret$9;
  $l$block_0: {
    // Inline function 'kotlin.collections.any' call
    var tmp;
    if (isInterface(_this__u8e3s4, Collection)) {
      tmp = _this__u8e3s4.isEmpty_y1axqb_k$();
    } else {
      tmp = false;
    }
    if (tmp) {
      tmp$ret$9 = false;
      break $l$block_0;
    }
    var _iterator__ex2g4s_2 = _this__u8e3s4.iterator_jk1svi_k$();
    while (_iterator__ex2g4s_2.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s_2.next_20eer_k$();
      if (element == null) {
        tmp$ret$9 = true;
        break $l$block_0;
      }
    }
    tmp$ret$9 = false;
  }
  if (tmp$ret$9) {
    return get_nullable(selected);
  }
  return selected;
}
function get_providers() {
  return emptyList();
}
//region block: post-declaration
initMetadataForInterface(KotlinxSerializationExtension, 'KotlinxSerializationExtension', VOID, VOID, VOID, [4, 3]);
initMetadataForInterface(KotlinxSerializationExtensionProvider, 'KotlinxSerializationExtensionProvider');
initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0_0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
initMetadataForClass(KotlinxSerializationConverter$serialize$$inlined$map$1, VOID, VOID, VOID, [Flow], [1]);
initMetadataForClass(KotlinxSerializationConverter$deserialize$$inlined$map$1, VOID, VOID, VOID, [Flow], [1]);
initMetadataForClass(KotlinxSerializationConverter, 'KotlinxSerializationConverter', VOID, VOID, [ContentConverter], [4, 3]);
//endregion
//region block: exports
export {
  serialization as serialization1fpeds7cruos4,
};
//endregion

//# sourceMappingURL=ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx.mjs.map
