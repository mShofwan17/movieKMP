import {
  createThis2j2avj17cvnv2 as createThis,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
} from './kotlin-kotlin-stdlib.mjs';
//region block: imports
//endregion
//region block: pre-declaration
class ThreadLocalRef {
  constructor() {
    return new.target.new_co_touchlab_stately_concurrency_ThreadLocalRef_efs83g_k$();
  }
  static new_co_touchlab_stately_concurrency_ThreadLocalRef_efs83g_k$($box) {
    var $this = createThis(this, $box);
    $this.localValue_1 = null;
    return $this;
  }
  remove_ldkf9o_k$() {
    set_value(this, null);
  }
  get_26vq_k$() {
    return this.localValue_1;
  }
  set_bjwkek_k$(value) {
    this.localValue_1 = value;
  }
}
//endregion
function set_value(_this__u8e3s4, value) {
  _this__u8e3s4.set_bjwkek_k$(value);
}
function get_value(_this__u8e3s4) {
  return _this__u8e3s4.get_26vq_k$();
}
function synchronize(_this__u8e3s4, block) {
  return block();
}
function _set_localValue__8fhs41($this, _set____db54di) {
  $this.localValue_1 = _set____db54di;
}
function _get_localValue__6mqt17($this) {
  return $this.localValue_1;
}
//region block: post-declaration
initMetadataForClass(ThreadLocalRef, 'ThreadLocalRef', ThreadLocalRef.new_co_touchlab_stately_concurrency_ThreadLocalRef_efs83g_k$);
//endregion
//region block: exports
export {
  ThreadLocalRef as ThreadLocalRef2gwn4e0n07y5w,
};
//endregion

//# sourceMappingURL=Stately-stately-concurrency.mjs.map
