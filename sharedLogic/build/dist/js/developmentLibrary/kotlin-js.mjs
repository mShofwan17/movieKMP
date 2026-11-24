import {
  VOID3gxj6tk5isa35 as VOID,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  Annotation1hwww4cseplu9 as Annotation,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
} from './kotlin-kotlin-stdlib.mjs';
//region block: imports
//endregion
//region block: pre-declaration
class JsUnion {
  equals(other) {
    if (!(other instanceof JsUnion))
      return false;
    other instanceof JsUnion || THROW_CCE();
    return true;
  }
  hashCode() {
    return 0;
  }
  toString() {
    return '@js.union.JsUnion(' + ')';
  }
}
//endregion
function get_TO_CONTEXT_FUNCTION() {
  _init_properties_ContextFunction_adapter_kt__6tkqty();
  return TO_CONTEXT_FUNCTION;
}
var TO_CONTEXT_FUNCTION;
var properties_initialized_ContextFunction_adapter_kt_tyhiew;
function _init_properties_ContextFunction_adapter_kt__6tkqty() {
  if (!properties_initialized_ContextFunction_adapter_kt_tyhiew) {
    properties_initialized_ContextFunction_adapter_kt_tyhiew = true;
    TO_CONTEXT_FUNCTION = new (Function.bind.apply(Function, [null, 'source', 'return function(...args) {\n    return source(this, ...args)\n}']))();
  }
}
function js_buffer_ArrayBufferOptions_Companion_v14pdg_invoke_jkqnwo(maxByteLength) {
  return {maxByteLength: maxByteLength};
}
function js_buffer_ArrayBufferOptions_Companion_v14pdg_copy_1tks5(source, maxByteLength) {
  maxByteLength = maxByteLength === VOID ? VOID : maxByteLength;
  return Object.assign({}, source, {maxByteLength: maxByteLength});
}
function JsErrorName(value) {
  // Inline function 'js.reflect.unsafeCast' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  return value;
}
function get_RAW_ERROR_WRAPPER_TYPE() {
  _init_properties_wrapRawError_kt__75j3je();
  return RAW_ERROR_WRAPPER_TYPE;
}
var RAW_ERROR_WRAPPER_TYPE;
var properties_initialized_wrapRawError_kt_t1ryt0;
function _init_properties_wrapRawError_kt__75j3je() {
  if (!properties_initialized_wrapRawError_kt_t1ryt0) {
    properties_initialized_wrapRawError_kt_t1ryt0 = true;
    // Inline function 'js.errors.JsErrorName' call
    // Inline function 'js.reflect.unsafeCast' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    RAW_ERROR_WRAPPER_TYPE = 'KotlinRawErrorWrapper';
  }
}
function js_iterable_IteratorResult_Companion_7p0ehs_invoke_jkqnwo(done) {
  return {done: done};
}
function js_iterable_IteratorResult_Companion_7p0ehs_copy_1tks5(source, done) {
  done = done === VOID ? VOID : done;
  return Object.assign({}, source, {done: done});
}
function get_POW() {
  _init_properties_BigInt_kt__agomkx();
  return POW;
}
var POW;
var properties_initialized_BigInt_kt_nhzooh;
function _init_properties_BigInt_kt__agomkx() {
  if (!properties_initialized_BigInt_kt_nhzooh) {
    properties_initialized_BigInt_kt_nhzooh = true;
    POW = Function('base', 'exponent', 'return base ** exponent');
  }
}
function get_DEFERRED() {
  _init_properties_Promise_deferred_kt__g1kxou();
  return DEFERRED;
}
var DEFERRED;
var properties_initialized_Promise_deferred_kt_rg4w18;
function _init_properties_Promise_deferred_kt__g1kxou() {
  if (!properties_initialized_Promise_deferred_kt_rg4w18) {
    properties_initialized_Promise_deferred_kt_rg4w18 = true;
    DEFERRED = Symbol('@@deferred');
  }
}
function js_promise_PromiseSettledResult_Companion_q7irkf_invoke_jkqnwo(status) {
  return {status: status};
}
function js_promise_PromiseSettledResult_Companion_q7irkf_copy_1tks5(source, status) {
  status = status === VOID ? VOID : status;
  return Object.assign({}, source, {status: status});
}
function js_promise_PromiseWithResolvers_Companion_fq3002_invoke_jkqnwo(promise, resolve, reject) {
  return {promise: promise, resolve: resolve, reject: reject};
}
function js_promise_PromiseWithResolvers_Companion_fq3002_copy_1tks5(source, promise, resolve, reject) {
  promise = promise === VOID ? VOID : promise;
  resolve = resolve === VOID ? VOID : resolve;
  reject = reject === VOID ? VOID : reject;
  return Object.assign({}, source, {promise: promise, resolve: resolve, reject: reject});
}
function js_typedarrays_FromBase64Options_Companion_no480c_invoke_jkqnwo(alphabet, lastChunkHandling) {
  alphabet = alphabet === VOID ? VOID : alphabet;
  lastChunkHandling = lastChunkHandling === VOID ? VOID : lastChunkHandling;
  return {alphabet: alphabet, lastChunkHandling: lastChunkHandling};
}
function js_typedarrays_FromBase64Options_Companion_no480c_copy_1tks5(source, alphabet, lastChunkHandling) {
  alphabet = alphabet === VOID ? VOID : alphabet;
  lastChunkHandling = lastChunkHandling === VOID ? VOID : lastChunkHandling;
  return Object.assign({}, source, {alphabet: alphabet, lastChunkHandling: lastChunkHandling});
}
function js_typedarrays_SetFromResult_Companion_9im63s_invoke_jkqnwo(read, written) {
  return {read: read, written: written};
}
function js_typedarrays_SetFromResult_Companion_9im63s_copy_1tks5(source, read, written) {
  read = read === VOID ? VOID : read;
  written = written === VOID ? VOID : written;
  return Object.assign({}, source, {read: read, written: written});
}
function js_typedarrays_ToBase64Options_Companion_tveapv_invoke_jkqnwo(alphabet, omitPadding) {
  alphabet = alphabet === VOID ? VOID : alphabet;
  omitPadding = omitPadding === VOID ? VOID : omitPadding;
  return {alphabet: alphabet, omitPadding: omitPadding};
}
function js_typedarrays_ToBase64Options_Companion_tveapv_copy_1tks5(source, alphabet, omitPadding) {
  alphabet = alphabet === VOID ? VOID : alphabet;
  omitPadding = omitPadding === VOID ? VOID : omitPadding;
  return Object.assign({}, source, {alphabet: alphabet, omitPadding: omitPadding});
}
//region block: post-declaration
initMetadataForClass(JsUnion, 'JsUnion', VOID, VOID, [Annotation]);
//endregion

//# sourceMappingURL=kotlin-js.mjs.map
