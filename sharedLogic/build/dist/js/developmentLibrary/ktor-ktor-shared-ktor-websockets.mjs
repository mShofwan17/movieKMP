import {
  Unit_getInstanceu5z48rdn3d6z as Unit_getInstance,
  Companion_getInstance2phstkr1c37ut as Companion_getInstance,
  VOID3gxj6tk5isa35 as VOID,
  createThis2j2avj17cvnv2 as createThis,
  collectionSizeOrDefault36dulx8yinfqm as collectionSizeOrDefault,
  mapCapacity1h45rc3eh9p2l as mapCapacity,
  coerceAtLeast2bkz8m9ik7hep as coerceAtLeast,
  LinkedHashMap1zhqxkxv3xnkl as LinkedHashMap,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  THROW_IAE23kobfj9wdoxr as THROW_IAE,
  enumEntries20mr21zbe3az4 as enumEntries,
  Enum3alwj03lh1n41 as Enum,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  toString1pkumu07cwy4m as toString,
  getStringHashCode26igk1bx568vk as getStringHashCode,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  emptyList1g2z5xcrvp2zy as emptyList,
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  compareTo3ankvs086tmwq as compareTo,
  ensureNotNull1e947j3ixpazm as ensureNotNull,
  joinToString1cxrrlmo0chqs as joinToString,
  _Char___init__impl__6a9atxrzocepzq3zgi as _Char___init__impl__6a9atx,
  indexOf1xbs558u7wr52 as indexOf,
  to2cs3ny02qtbcb as to,
  until1jbpn0z3f8lbg as until,
  substring2pnd9wgs9hwtx as substring,
  substring3saq8ornu0luv as substring_0,
  asSequence2phdjljfh9jhx as asSequence,
  mapsbvh18eqox7a as map,
  noWhenBranchMatchedException2a6r7ubxgky5j as noWhenBranchMatchedException,
} from './kotlin-kotlin-stdlib.mjs';
import { KtorSimpleLogger1xdphsp5l4e48 as KtorSimpleLogger } from './ktor-ktor-utils.mjs';
import {
  CoroutineName2g5zosw74tf0f as CoroutineName,
  DisposableHandle1uzxt8frdchxn as DisposableHandle,
  CoroutineScopefcb5f5dwqcas as CoroutineScope,
} from './kotlinx-coroutines-core.mjs';
import {
  readByteArray1ri21h2rciakw as readByteArray,
  Buffergs925ekssbch as Buffer,
} from './kotlinx-io-kotlinx-io-core.mjs';
import {
  toByteArray1i3ns5jnoqlv6 as toByteArray,
  writeText19qfzm98fbm4l as writeText,
} from './ktor-ktor-io.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
class Companion {
  constructor() {
    return new.target.new_io_ktor_websocket_CloseReason_Codes_Companion_cs2lyk_k$();
  }
  static new_io_ktor_websocket_CloseReason_Codes_Companion_cs2lyk_k$($box) {
    var $this = createThis(this, $box);
    Companion_instance = $this;
    var tmp = $this;
    // Inline function 'kotlin.collections.associateBy' call
    var this_0 = get_entries();
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16);
    // Inline function 'kotlin.collections.associateByTo' call
    var destination = LinkedHashMap.new_kotlin_collections_LinkedHashMap_a5asoo_k$(capacity);
    var _iterator__ex2g4s = this_0.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      var tmp$ret$2 = element.code_1;
      destination.put_4fpzoq_k$(tmp$ret$2, element);
    }
    tmp.byCodeMap_1 = destination;
    $this.UNEXPECTED_CONDITION_1 = Codes_INTERNAL_ERROR_getInstance();
    return $this;
  }
  get_UNEXPECTED_CONDITION_rk0i52_k$() {
    return this.UNEXPECTED_CONDITION_1;
  }
  byCode_d9s8a4_k$(code) {
    return this.byCodeMap_1.get_wei43m_k$(code);
  }
}
class Codes extends Enum {
  constructor(name, ordinal, code) {
    return new.target.new_io_ktor_websocket_CloseReason_Codes_ittly1_k$(name, ordinal, code);
  }
  static new_io_ktor_websocket_CloseReason_Codes_ittly1_k$(name, ordinal, code, $box) {
    var $this = this.new_kotlin_Enum_a1ijns_k$(name, ordinal, $box);
    $this.code_1 = code;
    return $this;
  }
  get_code_wok7xy_k$() {
    return this.code_1;
  }
}
class CloseReason {
  constructor(code, message) {
    return new.target.new_io_ktor_websocket_CloseReason_y3y4hg_k$(code, message);
  }
  static new_io_ktor_websocket_CloseReason_y3y4hg_k$(code, message, $box) {
    var $this = createThis(this, $box);
    $this.code_1 = code;
    $this.message_1 = message;
    return $this;
  }
  get_code_wok7xy_k$() {
    return this.code_1;
  }
  get_message_h23axq_k$() {
    return this.message_1;
  }
  static new_io_ktor_websocket_CloseReason_tr90my_k$(code, message, $box) {
    return this.new_io_ktor_websocket_CloseReason_y3y4hg_k$(code.code_1, message, $box);
  }
  get_knownReason_j6teda_k$() {
    return Companion_getInstance_0().byCode_d9s8a4_k$(this.code_1);
  }
  toString() {
    var tmp0_elvis_lhs = this.get_knownReason_j6teda_k$();
    return 'CloseReason(reason=' + toString(tmp0_elvis_lhs == null ? this.code_1 : tmp0_elvis_lhs) + ', message=' + this.message_1 + ')';
  }
  component1_7eebsc_k$() {
    return this.code_1;
  }
  component2_7eebsb_k$() {
    return this.message_1;
  }
  copy_xg59vt_k$(code, message) {
    return CloseReason.new_io_ktor_websocket_CloseReason_y3y4hg_k$(code, message);
  }
  copy$default_v2sa2r_k$(code, message, $super) {
    code = code === VOID ? this.code_1 : code;
    message = message === VOID ? this.message_1 : message;
    return $super === VOID ? this.copy_xg59vt_k$(code, message) : $super.copy_xg59vt_k$.call(this, code, message);
  }
  hashCode() {
    var result = this.code_1;
    result = imul(result, 31) + getStringHashCode(this.message_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof CloseReason))
      return false;
    var tmp0_other_with_cast = other instanceof CloseReason ? other : THROW_CCE();
    if (!(this.code_1 === tmp0_other_with_cast.code_1))
      return false;
    if (!(this.message_1 === tmp0_other_with_cast.message_1))
      return false;
    return true;
  }
}
class WebSocketSession {}
function *send(frame, $completion) {
  yield* this.get_outgoing_us7o3v_k$().send_44jogj_k$(frame, $completion);
  return Unit_getInstance();
}
class DefaultWebSocketSession {}
function start$default(negotiatedExtensions, $super) {
  negotiatedExtensions = negotiatedExtensions === VOID ? emptyList() : negotiatedExtensions;
  var tmp;
  if ($super === VOID) {
    this.start_ye6294_k$(negotiatedExtensions);
    tmp = Unit_getInstance();
  } else {
    tmp = $super.start_ye6294_k$.call(this, negotiatedExtensions);
  }
  return tmp;
}
class NonDisposableHandle {
  constructor() {
    return new.target.new_io_ktor_websocket_NonDisposableHandle_frss93_k$();
  }
  static new_io_ktor_websocket_NonDisposableHandle_frss93_k$($box) {
    var $this = createThis(this, $box);
    NonDisposableHandle_instance = $this;
    return $this;
  }
  dispose_3nnxhr_k$() {
    return Unit_getInstance();
  }
  toString() {
    return 'NonDisposableHandle';
  }
  hashCode() {
    return 207988788;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof NonDisposableHandle))
      return false;
    other instanceof NonDisposableHandle || THROW_CCE();
    return true;
  }
}
class Companion_0 {
  constructor() {
    return new.target.new_io_ktor_websocket_FrameType_Companion_jelutn_k$();
  }
  static new_io_ktor_websocket_FrameType_Companion_jelutn_k$($box) {
    var $this = createThis(this, $box);
    Companion_instance_0 = $this;
    var tmp = $this;
    var tmp0 = get_entries_0();
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.maxByOrNull' call
      var iterator = tmp0.iterator_jk1svi_k$();
      if (!iterator.hasNext_bitz1p_k$()) {
        tmp$ret$0 = null;
        break $l$block_0;
      }
      var maxElem = iterator.next_20eer_k$();
      if (!iterator.hasNext_bitz1p_k$()) {
        tmp$ret$0 = maxElem;
        break $l$block_0;
      }
      var maxValue = maxElem.opcode_1;
      do {
        var e = iterator.next_20eer_k$();
        var v = e.opcode_1;
        if (compareTo(maxValue, v) < 0) {
          maxElem = e;
          maxValue = v;
        }
      }
       while (iterator.hasNext_bitz1p_k$());
      tmp$ret$0 = maxElem;
    }
    tmp.maxOpcode_1 = ensureNotNull(tmp$ret$0).opcode_1;
    var tmp_0 = $this;
    var tmp_1 = 0;
    var tmp_2 = $this.maxOpcode_1 + 1 | 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_3 = Array(tmp_2);
    while (tmp_1 < tmp_2) {
      var tmp_4 = tmp_1;
      var tmp0_0 = get_entries_0();
      var tmp$ret$5;
      $l$block_2: {
        // Inline function 'kotlin.collections.singleOrNull' call
        var single = null;
        var found = false;
        var _iterator__ex2g4s = tmp0_0.iterator_jk1svi_k$();
        while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
          var element = _iterator__ex2g4s.next_20eer_k$();
          if (element.opcode_1 === tmp_4) {
            if (found) {
              tmp$ret$5 = null;
              break $l$block_2;
            }
            single = element;
            found = true;
          }
        }
        if (!found) {
          tmp$ret$5 = null;
          break $l$block_2;
        }
        tmp$ret$5 = single;
      }
      tmp_3[tmp_4] = tmp$ret$5;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.byOpcodeArray_1 = tmp_3;
    return $this;
  }
  get_c1px32_k$(opcode) {
    return (0 <= opcode ? opcode <= this.maxOpcode_1 : false) ? this.byOpcodeArray_1[opcode] : null;
  }
}
class FrameType extends Enum {
  constructor(name, ordinal, controlFrame, opcode) {
    return new.target.new_io_ktor_websocket_FrameType_htwyw8_k$(name, ordinal, controlFrame, opcode);
  }
  static new_io_ktor_websocket_FrameType_htwyw8_k$(name, ordinal, controlFrame, opcode, $box) {
    var $this = this.new_kotlin_Enum_a1ijns_k$(name, ordinal, $box);
    $this.controlFrame_1 = controlFrame;
    $this.opcode_1 = opcode;
    return $this;
  }
  get_controlFrame_mohuav_k$() {
    return this.controlFrame_1;
  }
  get_opcode_hp2o9j_k$() {
    return this.opcode_1;
  }
}
class WebSocketExtension {}
class WebSocketExtensionFactory {}
class WebSocketExtensionHeader {
  constructor(name, parameters) {
    return new.target.new_io_ktor_websocket_WebSocketExtensionHeader_p8426g_k$(name, parameters);
  }
  static new_io_ktor_websocket_WebSocketExtensionHeader_p8426g_k$(name, parameters, $box) {
    var $this = createThis(this, $box);
    $this.name_1 = name;
    $this.parameters_1 = parameters;
    return $this;
  }
  get_name_woqyms_k$() {
    return this.name_1;
  }
  get_parameters_cl4rkd_k$() {
    return this.parameters_1;
  }
  parseParameters_8pxmv7_k$() {
    var tmp = asSequence(this.parameters_1);
    return map(tmp, WebSocketExtensionHeader$parseParameters$lambda);
  }
  toString() {
    return this.name_1 + ' ' + parametersToString(this);
  }
}
class Frame {
  constructor(fin, frameType, data, disposableHandle, rsv1, rsv2, rsv3) {
    return new.target.new_io_ktor_websocket_Frame_ufsu0q_k$(fin, frameType, data, disposableHandle, rsv1, rsv2, rsv3);
  }
  static new_io_ktor_websocket_Frame_ufsu0q_k$(fin, frameType, data, disposableHandle, rsv1, rsv2, rsv3, $box) {
    Companion_getInstance_2();
    disposableHandle = disposableHandle === VOID ? NonDisposableHandle_getInstance() : disposableHandle;
    rsv1 = rsv1 === VOID ? false : rsv1;
    rsv2 = rsv2 === VOID ? false : rsv2;
    rsv3 = rsv3 === VOID ? false : rsv3;
    var $this = createThis(this, $box);
    $this.fin_1 = fin;
    $this.frameType_1 = frameType;
    $this.data_1 = data;
    $this.disposableHandle_1 = disposableHandle;
    $this.rsv1__1 = rsv1;
    $this.rsv2__1 = rsv2;
    $this.rsv3__1 = rsv3;
    return $this;
  }
  get_fin_18j5um_k$() {
    return this.fin_1;
  }
  get_frameType_hj325a_k$() {
    return this.frameType_1;
  }
  get_data_wokkxf_k$() {
    return this.data_1;
  }
  get_disposableHandle_9vd6rz_k$() {
    return this.disposableHandle_1;
  }
  get_rsv1_wotw3p_k$() {
    return this.rsv1__1;
  }
  get_rsv2_wotw3q_k$() {
    return this.rsv2__1;
  }
  get_rsv3_wotw3r_k$() {
    return this.rsv3__1;
  }
  toString() {
    return 'Frame ' + this.frameType_1.toString() + ' (fin=' + this.fin_1 + ', buffer len = ' + this.data_1.length + ')';
  }
  copy_1tks5_k$() {
    var tmp = Companion_getInstance_2();
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$0 = this.data_1.slice();
    return tmp.byType_90xas5_k$(this.fin_1, this.frameType_1, tmp$ret$0, this.rsv1__1, this.rsv2__1, this.rsv3__1);
  }
}
class Binary extends Frame {
  constructor(fin, data, rsv1, rsv2, rsv3) {
    return new.target.new_io_ktor_websocket_Frame_Binary_wpt0zy_k$(fin, data, rsv1, rsv2, rsv3);
  }
  static new_io_ktor_websocket_Frame_Binary_wpt0zy_k$(fin, data, rsv1, rsv2, rsv3, $box) {
    rsv1 = rsv1 === VOID ? false : rsv1;
    rsv2 = rsv2 === VOID ? false : rsv2;
    rsv3 = rsv3 === VOID ? false : rsv3;
    return this.new_io_ktor_websocket_Frame_ufsu0q_k$(fin, FrameType_BINARY_getInstance(), data, NonDisposableHandle_getInstance(), rsv1, rsv2, rsv3, $box);
  }
  static new_io_ktor_websocket_Frame_Binary_gb48ck_k$(fin, data, $box) {
    return this.new_io_ktor_websocket_Frame_Binary_wpt0zy_k$(fin, data, false, false, false, $box);
  }
  static new_io_ktor_websocket_Frame_Binary_awjwtx_k$(fin, packet, $box) {
    return this.new_io_ktor_websocket_Frame_Binary_gb48ck_k$(fin, readByteArray(packet), $box);
  }
}
class Text extends Frame {
  constructor(fin, data, rsv1, rsv2, rsv3) {
    return new.target.new_io_ktor_websocket_Frame_Text_7b6xwm_k$(fin, data, rsv1, rsv2, rsv3);
  }
  static new_io_ktor_websocket_Frame_Text_7b6xwm_k$(fin, data, rsv1, rsv2, rsv3, $box) {
    rsv1 = rsv1 === VOID ? false : rsv1;
    rsv2 = rsv2 === VOID ? false : rsv2;
    rsv3 = rsv3 === VOID ? false : rsv3;
    return this.new_io_ktor_websocket_Frame_ufsu0q_k$(fin, FrameType_TEXT_getInstance(), data, NonDisposableHandle_getInstance(), rsv1, rsv2, rsv3, $box);
  }
  static new_io_ktor_websocket_Frame_Text_gb9r70_k$(fin, data, $box) {
    return this.new_io_ktor_websocket_Frame_Text_7b6xwm_k$(fin, data, false, false, false, $box);
  }
  static new_io_ktor_websocket_Frame_Text_3m9dpd_k$(text, $box) {
    return this.new_io_ktor_websocket_Frame_Text_gb9r70_k$(true, toByteArray(text), $box);
  }
  static new_io_ktor_websocket_Frame_Text_xu5eet_k$(fin, packet, $box) {
    return this.new_io_ktor_websocket_Frame_Text_gb9r70_k$(fin, readByteArray(packet), $box);
  }
}
class Close extends Frame {
  constructor(data) {
    return new.target.new_io_ktor_websocket_Frame_Close_5jdgrp_k$(data);
  }
  static new_io_ktor_websocket_Frame_Close_5jdgrp_k$(data, $box) {
    return this.new_io_ktor_websocket_Frame_ufsu0q_k$(true, FrameType_CLOSE_getInstance(), data, NonDisposableHandle_getInstance(), false, false, false, $box);
  }
  static new_io_ktor_websocket_Frame_Close_jslr37_k$(reason, $box) {
    // Inline function 'io.ktor.utils.io.core.buildPacket' call
    var builder = Buffer.new_kotlinx_io_Buffer_ca7i83_k$();
    builder.writeShort_vn2jsb_k$(reason.get_code_wok7xy_k$());
    writeText(builder, reason.get_message_h23axq_k$());
    return this.new_io_ktor_websocket_Frame_Close_6egtpg_k$(builder, $box);
  }
  static new_io_ktor_websocket_Frame_Close_6egtpg_k$(packet, $box) {
    return this.new_io_ktor_websocket_Frame_Close_5jdgrp_k$(readByteArray(packet), $box);
  }
  static new_io_ktor_websocket_Frame_Close_wbtghx_k$($box) {
    return this.new_io_ktor_websocket_Frame_Close_5jdgrp_k$(Companion_getInstance_2().Empty_1, $box);
  }
}
class Ping extends Frame {
  constructor(data) {
    return new.target.new_io_ktor_websocket_Frame_Ping_v2ti9l_k$(data);
  }
  static new_io_ktor_websocket_Frame_Ping_v2ti9l_k$(data, $box) {
    return this.new_io_ktor_websocket_Frame_ufsu0q_k$(true, FrameType_PING_getInstance(), data, NonDisposableHandle_getInstance(), false, false, false, $box);
  }
  static new_io_ktor_websocket_Frame_Ping_fqoy7a_k$(packet, $box) {
    return this.new_io_ktor_websocket_Frame_Ping_v2ti9l_k$(readByteArray(packet), $box);
  }
}
class Pong extends Frame {
  constructor(data, disposableHandle) {
    return new.target.new_io_ktor_websocket_Frame_Pong_mif09k_k$(data, disposableHandle);
  }
  static new_io_ktor_websocket_Frame_Pong_mif09k_k$(data, disposableHandle, $box) {
    disposableHandle = disposableHandle === VOID ? NonDisposableHandle_getInstance() : disposableHandle;
    return this.new_io_ktor_websocket_Frame_ufsu0q_k$(true, FrameType_PONG_getInstance(), data, disposableHandle, false, false, false, $box);
  }
  static new_io_ktor_websocket_Frame_Pong_92dfa2_k$(packet, $box) {
    return this.new_io_ktor_websocket_Frame_Pong_mif09k_k$(readByteArray(packet), NonDisposableHandle_getInstance(), $box);
  }
}
class Companion_1 {
  constructor() {
    return new.target.new_io_ktor_websocket_Frame_Companion_pkcsyf_k$();
  }
  static new_io_ktor_websocket_Frame_Companion_pkcsyf_k$($box) {
    var $this = createThis(this, $box);
    Companion_instance_1 = $this;
    $this.Empty_1 = new Int8Array(0);
    return $this;
  }
  byType_90xas5_k$(fin, frameType, data, rsv1, rsv2, rsv3) {
    var tmp;
    switch (frameType.get_ordinal_ip24qg_k$()) {
      case 1:
        tmp = Binary.new_io_ktor_websocket_Frame_Binary_wpt0zy_k$(fin, data, rsv1, rsv2, rsv3);
        break;
      case 0:
        tmp = Text.new_io_ktor_websocket_Frame_Text_7b6xwm_k$(fin, data, rsv1, rsv2, rsv3);
        break;
      case 2:
        tmp = Close.new_io_ktor_websocket_Frame_Close_5jdgrp_k$(data);
        break;
      case 3:
        tmp = Ping.new_io_ktor_websocket_Frame_Ping_v2ti9l_k$(data);
        break;
      case 4:
        tmp = Pong.new_io_ktor_websocket_Frame_Pong_mif09k_k$(data, NonDisposableHandle_getInstance());
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
}
//endregion
function _get_byCodeMap__7duph5($this) {
  return $this.byCodeMap_1;
}
var static_init_called;
function static_init() {
  if (static_init_called)
    return Unit_getInstance();
  static_init_called = true;
  Codes_NORMAL_instance = Codes.new_io_ktor_websocket_CloseReason_Codes_ittly1_k$('NORMAL', 0, 1000);
  Codes_GOING_AWAY_instance = Codes.new_io_ktor_websocket_CloseReason_Codes_ittly1_k$('GOING_AWAY', 1, 1001);
  Codes_PROTOCOL_ERROR_instance = Codes.new_io_ktor_websocket_CloseReason_Codes_ittly1_k$('PROTOCOL_ERROR', 2, 1002);
  Codes_CANNOT_ACCEPT_instance = Codes.new_io_ktor_websocket_CloseReason_Codes_ittly1_k$('CANNOT_ACCEPT', 3, 1003);
  Codes_CLOSED_ABNORMALLY_instance = Codes.new_io_ktor_websocket_CloseReason_Codes_ittly1_k$('CLOSED_ABNORMALLY', 4, 1006);
  Codes_NOT_CONSISTENT_instance = Codes.new_io_ktor_websocket_CloseReason_Codes_ittly1_k$('NOT_CONSISTENT', 5, 1007);
  Codes_VIOLATED_POLICY_instance = Codes.new_io_ktor_websocket_CloseReason_Codes_ittly1_k$('VIOLATED_POLICY', 6, 1008);
  Codes_TOO_BIG_instance = Codes.new_io_ktor_websocket_CloseReason_Codes_ittly1_k$('TOO_BIG', 7, 1009);
  Codes_NO_EXTENSION_instance = Codes.new_io_ktor_websocket_CloseReason_Codes_ittly1_k$('NO_EXTENSION', 8, 1010);
  Codes_INTERNAL_ERROR_instance = Codes.new_io_ktor_websocket_CloseReason_Codes_ittly1_k$('INTERNAL_ERROR', 9, 1011);
  Codes_SERVICE_RESTART_instance = Codes.new_io_ktor_websocket_CloseReason_Codes_ittly1_k$('SERVICE_RESTART', 10, 1012);
  Codes_TRY_AGAIN_LATER_instance = Codes.new_io_ktor_websocket_CloseReason_Codes_ittly1_k$('TRY_AGAIN_LATER', 11, 1013);
  if (Companion_instance === VOID) {
    Companion_getInstance();
    Companion.new_io_ktor_websocket_CloseReason_Codes_Companion_cs2lyk_k$();
  }
}
var Codes_NORMAL_instance;
var Codes_GOING_AWAY_instance;
var Codes_PROTOCOL_ERROR_instance;
var Codes_CANNOT_ACCEPT_instance;
var Codes_CLOSED_ABNORMALLY_instance;
var Codes_NOT_CONSISTENT_instance;
var Codes_VIOLATED_POLICY_instance;
var Codes_TOO_BIG_instance;
var Codes_NO_EXTENSION_instance;
var Codes_INTERNAL_ERROR_instance;
var Codes_SERVICE_RESTART_instance;
var Codes_TRY_AGAIN_LATER_instance;
var Companion_instance;
function Companion_getInstance_0() {
  static_init();
  return Companion_instance;
}
function values() {
  static_init();
  return [Codes_NORMAL_getInstance(), Codes_GOING_AWAY_getInstance(), Codes_PROTOCOL_ERROR_getInstance(), Codes_CANNOT_ACCEPT_getInstance(), Codes_CLOSED_ABNORMALLY_getInstance(), Codes_NOT_CONSISTENT_getInstance(), Codes_VIOLATED_POLICY_getInstance(), Codes_TOO_BIG_getInstance(), Codes_NO_EXTENSION_getInstance(), Codes_INTERNAL_ERROR_getInstance(), Codes_SERVICE_RESTART_getInstance(), Codes_TRY_AGAIN_LATER_getInstance()];
}
function valueOf(value) {
  static_init();
  switch (value) {
    case 'NORMAL':
      return Codes_NORMAL_getInstance();
    case 'GOING_AWAY':
      return Codes_GOING_AWAY_getInstance();
    case 'PROTOCOL_ERROR':
      return Codes_PROTOCOL_ERROR_getInstance();
    case 'CANNOT_ACCEPT':
      return Codes_CANNOT_ACCEPT_getInstance();
    case 'CLOSED_ABNORMALLY':
      return Codes_CLOSED_ABNORMALLY_getInstance();
    case 'NOT_CONSISTENT':
      return Codes_NOT_CONSISTENT_getInstance();
    case 'VIOLATED_POLICY':
      return Codes_VIOLATED_POLICY_getInstance();
    case 'TOO_BIG':
      return Codes_TOO_BIG_getInstance();
    case 'NO_EXTENSION':
      return Codes_NO_EXTENSION_getInstance();
    case 'INTERNAL_ERROR':
      return Codes_INTERNAL_ERROR_getInstance();
    case 'SERVICE_RESTART':
      return Codes_SERVICE_RESTART_getInstance();
    case 'TRY_AGAIN_LATER':
      return Codes_TRY_AGAIN_LATER_getInstance();
    default:
      THROW_IAE('No enum constant io.ktor.websocket.CloseReason.Codes.' + value);
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
function Codes_NORMAL_getInstance() {
  static_init();
  return Codes_NORMAL_instance;
}
function Codes_GOING_AWAY_getInstance() {
  static_init();
  return Codes_GOING_AWAY_instance;
}
function Codes_PROTOCOL_ERROR_getInstance() {
  static_init();
  return Codes_PROTOCOL_ERROR_instance;
}
function Codes_CANNOT_ACCEPT_getInstance() {
  static_init();
  return Codes_CANNOT_ACCEPT_instance;
}
function Codes_CLOSED_ABNORMALLY_getInstance() {
  static_init();
  return Codes_CLOSED_ABNORMALLY_instance;
}
function Codes_NOT_CONSISTENT_getInstance() {
  static_init();
  return Codes_NOT_CONSISTENT_instance;
}
function Codes_VIOLATED_POLICY_getInstance() {
  static_init();
  return Codes_VIOLATED_POLICY_instance;
}
function Codes_TOO_BIG_getInstance() {
  static_init();
  return Codes_TOO_BIG_instance;
}
function Codes_NO_EXTENSION_getInstance() {
  static_init();
  return Codes_NO_EXTENSION_instance;
}
function Codes_INTERNAL_ERROR_getInstance() {
  static_init();
  return Codes_INTERNAL_ERROR_instance;
}
function Codes_SERVICE_RESTART_getInstance() {
  static_init();
  return Codes_SERVICE_RESTART_instance;
}
function Codes_TRY_AGAIN_LATER_getInstance() {
  static_init();
  return Codes_TRY_AGAIN_LATER_instance;
}
function get_LOGGER() {
  _init_properties_DefaultWebSocketSession_kt__469s0y();
  return LOGGER;
}
var LOGGER;
function get_IncomingProcessorCoroutineName() {
  _init_properties_DefaultWebSocketSession_kt__469s0y();
  return IncomingProcessorCoroutineName;
}
var IncomingProcessorCoroutineName;
function get_OutgoingProcessorCoroutineName() {
  _init_properties_DefaultWebSocketSession_kt__469s0y();
  return OutgoingProcessorCoroutineName;
}
var OutgoingProcessorCoroutineName;
function get_NORMAL_CLOSE() {
  _init_properties_DefaultWebSocketSession_kt__469s0y();
  return NORMAL_CLOSE;
}
var NORMAL_CLOSE;
var properties_initialized_DefaultWebSocketSession_kt_6cjlhc;
function _init_properties_DefaultWebSocketSession_kt__469s0y() {
  if (!properties_initialized_DefaultWebSocketSession_kt_6cjlhc) {
    properties_initialized_DefaultWebSocketSession_kt_6cjlhc = true;
    LOGGER = KtorSimpleLogger('io.ktor.websocket.WebSocket');
    IncomingProcessorCoroutineName = CoroutineName.new_kotlinx_coroutines_CoroutineName_9jyr52_k$('ws-incoming-processor');
    OutgoingProcessorCoroutineName = CoroutineName.new_kotlinx_coroutines_CoroutineName_9jyr52_k$('ws-outgoing-processor');
    NORMAL_CLOSE = CloseReason.new_io_ktor_websocket_CloseReason_tr90my_k$(Codes_NORMAL_getInstance(), 'OK');
  }
}
var NonDisposableHandle_instance;
function NonDisposableHandle_getInstance() {
  if (NonDisposableHandle_instance === VOID)
    NonDisposableHandle.new_io_ktor_websocket_NonDisposableHandle_frss93_k$();
  return NonDisposableHandle_instance;
}
function _get_maxOpcode__n4u3i9($this) {
  return $this.maxOpcode_1;
}
function _get_byOpcodeArray__zfogar($this) {
  return $this.byOpcodeArray_1;
}
var static_init_called_0;
function static_init_0() {
  if (static_init_called_0)
    return Unit_getInstance();
  static_init_called_0 = true;
  FrameType_TEXT_instance = FrameType.new_io_ktor_websocket_FrameType_htwyw8_k$('TEXT', 0, false, 1);
  FrameType_BINARY_instance = FrameType.new_io_ktor_websocket_FrameType_htwyw8_k$('BINARY', 1, false, 2);
  FrameType_CLOSE_instance = FrameType.new_io_ktor_websocket_FrameType_htwyw8_k$('CLOSE', 2, true, 8);
  FrameType_PING_instance = FrameType.new_io_ktor_websocket_FrameType_htwyw8_k$('PING', 3, true, 9);
  FrameType_PONG_instance = FrameType.new_io_ktor_websocket_FrameType_htwyw8_k$('PONG', 4, true, 10);
  if (Companion_instance_0 === VOID) {
    Companion_getInstance();
    Companion_0.new_io_ktor_websocket_FrameType_Companion_jelutn_k$();
  }
}
var FrameType_TEXT_instance;
var FrameType_BINARY_instance;
var FrameType_CLOSE_instance;
var FrameType_PING_instance;
var FrameType_PONG_instance;
var Companion_instance_0;
function Companion_getInstance_1() {
  static_init_0();
  return Companion_instance_0;
}
function values_0() {
  static_init_0();
  return [FrameType_TEXT_getInstance(), FrameType_BINARY_getInstance(), FrameType_CLOSE_getInstance(), FrameType_PING_getInstance(), FrameType_PONG_getInstance()];
}
function valueOf_0(value) {
  static_init_0();
  switch (value) {
    case 'TEXT':
      return FrameType_TEXT_getInstance();
    case 'BINARY':
      return FrameType_BINARY_getInstance();
    case 'CLOSE':
      return FrameType_CLOSE_getInstance();
    case 'PING':
      return FrameType_PING_getInstance();
    case 'PONG':
      return FrameType_PONG_getInstance();
    default:
      THROW_IAE('No enum constant io.ktor.websocket.FrameType.' + value);
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
function FrameType_TEXT_getInstance() {
  static_init_0();
  return FrameType_TEXT_instance;
}
function FrameType_BINARY_getInstance() {
  static_init_0();
  return FrameType_BINARY_instance;
}
function FrameType_CLOSE_getInstance() {
  static_init_0();
  return FrameType_CLOSE_instance;
}
function FrameType_PING_getInstance() {
  static_init_0();
  return FrameType_PING_instance;
}
function FrameType_PONG_getInstance() {
  static_init_0();
  return FrameType_PONG_instance;
}
function get_PongerCoroutineName() {
  _init_properties_PingPong_kt__9aqxey();
  return PongerCoroutineName;
}
var PongerCoroutineName;
function get_PingerCoroutineName() {
  _init_properties_PingPong_kt__9aqxey();
  return PingerCoroutineName;
}
var PingerCoroutineName;
var properties_initialized_PingPong_kt_fbfhmc;
function _init_properties_PingPong_kt__9aqxey() {
  if (!properties_initialized_PingPong_kt_fbfhmc) {
    properties_initialized_PingPong_kt_fbfhmc = true;
    PongerCoroutineName = CoroutineName.new_kotlinx_coroutines_CoroutineName_9jyr52_k$('ws-ponger');
    PingerCoroutineName = CoroutineName.new_kotlinx_coroutines_CoroutineName_9jyr52_k$('ws-pinger');
  }
}
function parametersToString($this) {
  return $this.parameters_1.isEmpty_y1axqb_k$() ? '' : ', ' + joinToString($this.parameters_1, ',');
}
function WebSocketExtensionHeader$parseParameters$lambda(it) {
  var equalsIndex = indexOf(it, _Char___init__impl__6a9atx(61));
  if (equalsIndex < 0)
    return to(it, '');
  var key = substring(it, until(0, equalsIndex));
  var value = (equalsIndex + 1 | 0) < it.length ? substring_0(it, equalsIndex + 1 | 0) : '';
  return to(key, value);
}
function _get_Empty__x4mxmk($this) {
  return $this.Empty_1;
}
var Companion_instance_1;
function Companion_getInstance_2() {
  if (Companion_instance_1 === VOID)
    Companion_1.new_io_ktor_websocket_Frame_Companion_pkcsyf_k$();
  return Companion_instance_1;
}
//region block: post-declaration
initMetadataForCompanion(Companion);
initMetadataForClass(Codes, 'Codes');
initMetadataForClass(CloseReason, 'CloseReason');
initMetadataForInterface(WebSocketSession, 'WebSocketSession', VOID, VOID, [CoroutineScope], [1, 0]);
initMetadataForInterface(DefaultWebSocketSession, 'DefaultWebSocketSession', VOID, VOID, [WebSocketSession], [1, 0]);
initMetadataForObject(NonDisposableHandle, 'NonDisposableHandle', VOID, VOID, [DisposableHandle]);
initMetadataForCompanion(Companion_0);
initMetadataForClass(FrameType, 'FrameType');
initMetadataForInterface(WebSocketExtension, 'WebSocketExtension');
initMetadataForInterface(WebSocketExtensionFactory, 'WebSocketExtensionFactory');
initMetadataForClass(WebSocketExtensionHeader, 'WebSocketExtensionHeader');
initMetadataForClass(Frame, 'Frame');
initMetadataForClass(Binary, 'Binary');
initMetadataForClass(Text, 'Text');
initMetadataForClass(Close, 'Close', Close.new_io_ktor_websocket_Frame_Close_wbtghx_k$);
initMetadataForClass(Ping, 'Ping');
initMetadataForClass(Pong, 'Pong');
initMetadataForCompanion(Companion_1);
//endregion
//region block: exports
export {
  Codes_CLOSED_ABNORMALLY_getInstance as Codes_CLOSED_ABNORMALLY_getInstance1bzb878jpjbg8,
  Codes_NORMAL_getInstance as Codes_NORMAL_getInstance3dr9ood98owg7,
  Companion_getInstance_0 as Companion_getInstance34aryltzqunru,
  send as send1afreql7wqu1y,
  start$default as start$defaultkh2y7jkrr4e8,
  CloseReason as CloseReason10cphaqpp3ct7,
  DefaultWebSocketSession as DefaultWebSocketSession3h8506yqzs5fx,
  Binary as Binary3tlzyfojm51s4,
  Close as Close3tx65evcwi73t,
  Text as Text3e6ukp9joohql,
  WebSocketExtension as WebSocketExtensionixqq2y77p4e0,
};
//endregion

//# sourceMappingURL=ktor-ktor-shared-ktor-websockets.mjs.map
