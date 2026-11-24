import {
  Unit_getInstanceu5z48rdn3d6z as Unit_getInstance,
  VOID3gxj6tk5isa35 as VOID,
  createThis2j2avj17cvnv2 as createThis,
  MutableCollection3jqcg879qsnhr as MutableCollection,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  ensureNotNull1e947j3ixpazm as ensureNotNull,
  MutableIterator2wre2rj6iq57y as MutableIterator,
  LinkedHashMap1zhqxkxv3xnkl as LinkedHashMap,
  asJsMapView1l954zxx5dm35 as asJsMapView,
  protoOf180f3jzyo7rfj as protoOf,
  asJsReadonlyMapView265fi57brx2p5 as asJsReadonlyMapView,
  KtMutableMap1kqeifoi36kpz as KtMutableMap,
  LinkedHashSet2tkztfx86kyx2 as LinkedHashSet,
  asJsSetView3u4hrma1rrcjl as asJsSetView,
  asJsReadonlySetView1283018se66no as asJsReadonlySetView,
  KtMutableSetwuwn7k5m570a as KtMutableSet,
} from './kotlin-kotlin-stdlib.mjs';
//region block: imports
//endregion
//region block: pre-declaration
class ConcurrentMutableCollection {
  constructor(rootArg, del) {
    return new.target.new_co_touchlab_stately_collections_ConcurrentMutableCollection_qab896_k$(rootArg, del);
  }
  static new_co_touchlab_stately_collections_ConcurrentMutableCollection_qab896_k$(rootArg, del, $box) {
    rootArg = rootArg === VOID ? null : rootArg;
    var $this = createThis(this, $box);
    $this.del_1 = del;
    var tmp = $this;
    tmp.syncTarget_1 = rootArg == null ? $this : rootArg;
    return $this;
  }
  get_syncTarget_y36csq_k$() {
    return this.syncTarget_1;
  }
  get_size_woubt6_k$() {
    this.syncTarget_1;
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    return ConcurrentMutableCollection$_get_size_$lambda_dssf9y(this)();
  }
  contains_aljjnj_k$(element) {
    this.syncTarget_1;
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    return ConcurrentMutableCollection$contains$lambda(this, element)();
  }
  containsAll_xk45sd_k$(elements) {
    this.syncTarget_1;
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    return ConcurrentMutableCollection$containsAll$lambda(this, elements)();
  }
  isEmpty_y1axqb_k$() {
    this.syncTarget_1;
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    return ConcurrentMutableCollection$isEmpty$lambda(this)();
  }
  add_utx5q5_k$(element) {
    this.syncTarget_1;
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    return ConcurrentMutableCollection$add$lambda(this, element)();
  }
  addAll_4lagoh_k$(elements) {
    this.syncTarget_1;
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    return ConcurrentMutableCollection$addAll$lambda(this, elements)();
  }
  clear_j9egeb_k$() {
    this.syncTarget_1;
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    ConcurrentMutableCollection$clear$lambda(this)();
  }
  iterator_jk1svi_k$() {
    this.syncTarget_1;
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    return ConcurrentMutableCollection$iterator$lambda(this)();
  }
  remove_cedx0m_k$(element) {
    this.syncTarget_1;
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    return ConcurrentMutableCollection$remove$lambda(this, element)();
  }
  removeAll_y0z8pe_k$(elements) {
    this.syncTarget_1;
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    return ConcurrentMutableCollection$removeAll$lambda(this, elements)();
  }
  retainAll_9fhiib_k$(elements) {
    this.syncTarget_1;
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    return ConcurrentMutableCollection$retainAll$lambda(this, elements)();
  }
  blockCollection_qk78pp_k$(f) {
    this.syncTarget_1;
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    return ConcurrentMutableCollection$blockCollection$lambda(this, f)();
  }
}
class MutableCollectionWrapper {
  constructor(_coll) {
    return new.target.new_co_touchlab_stately_collections_MutableCollectionWrapper_2fqucl_k$(_coll);
  }
  static new_co_touchlab_stately_collections_MutableCollectionWrapper_2fqucl_k$(_coll, $box) {
    var $this = createThis(this, $box);
    $this._coll_1 = _coll;
    return $this;
  }
  set__coll_66luua_k$(_set____db54di) {
    this._coll_1 = _set____db54di;
  }
  get__coll_eenyrn_k$() {
    return this._coll_1;
  }
  add_utx5q5_k$(element) {
    return _get_coll__d4zbhb(this).add_utx5q5_k$(element);
  }
  addAll_4lagoh_k$(elements) {
    return _get_coll__d4zbhb(this).addAll_4lagoh_k$(elements);
  }
  clear_j9egeb_k$() {
    _get_coll__d4zbhb(this).clear_j9egeb_k$();
  }
  iterator_jk1svi_k$() {
    return _get_coll__d4zbhb(this).iterator_jk1svi_k$();
  }
  remove_cedx0m_k$(element) {
    return _get_coll__d4zbhb(this).remove_cedx0m_k$(element);
  }
  removeAll_y0z8pe_k$(elements) {
    return _get_coll__d4zbhb(this).removeAll_y0z8pe_k$(elements);
  }
  retainAll_9fhiib_k$(elements) {
    return _get_coll__d4zbhb(this).retainAll_9fhiib_k$(elements);
  }
  get_size_woubt6_k$() {
    return _get_coll__d4zbhb(this).get_size_woubt6_k$();
  }
  contains_aljjnj_k$(element) {
    return _get_coll__d4zbhb(this).contains_aljjnj_k$(element);
  }
  containsAll_xk45sd_k$(elements) {
    return _get_coll__d4zbhb(this).containsAll_xk45sd_k$(elements);
  }
  isEmpty_y1axqb_k$() {
    return _get_coll__d4zbhb(this).isEmpty_y1axqb_k$();
  }
}
class ConcurrentMutableIterator {
  constructor(root, del) {
    return new.target.new_co_touchlab_stately_collections_ConcurrentMutableIterator_u5fle3_k$(root, del);
  }
  static new_co_touchlab_stately_collections_ConcurrentMutableIterator_u5fle3_k$(root, del, $box) {
    var $this = createThis(this, $box);
    $this.root_1 = root;
    $this.del_1 = del;
    return $this;
  }
  hasNext_bitz1p_k$() {
    this.root_1;
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    return ConcurrentMutableIterator$hasNext$lambda(this)();
  }
  next_20eer_k$() {
    this.root_1;
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    return ConcurrentMutableIterator$next$lambda(this)();
  }
  remove_ldkf9o_k$() {
    this.root_1;
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    ConcurrentMutableIterator$remove$lambda(this)();
  }
}
class ConcurrentMutableMap {
  constructor(rootArg, del) {
    return new.target.new_co_touchlab_stately_collections_ConcurrentMutableMap_xuqqmy_k$(rootArg, del);
  }
  static new_co_touchlab_stately_collections_ConcurrentMutableMap_xuqqmy_k$(rootArg, del, $box) {
    rootArg = rootArg === VOID ? null : rootArg;
    var $this = createThis(this, $box);
    $this.del_1 = del;
    var tmp = $this;
    tmp.syncTarget_1 = rootArg == null ? $this : rootArg;
    return $this;
  }
  static new_co_touchlab_stately_collections_ConcurrentMutableMap_jc5ej2_k$($box) {
    // Inline function 'kotlin.collections.mutableMapOf' call
    var tmp$ret$0 = LinkedHashMap.new_kotlin_collections_LinkedHashMap_8xehp8_k$();
    return this.new_co_touchlab_stately_collections_ConcurrentMutableMap_xuqqmy_k$(null, tmp$ret$0, $box);
  }
  get_size_woubt6_k$() {
    this.syncTarget_1;
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    return ConcurrentMutableMap$_get_size_$lambda_nuyc4q(this)();
  }
  get_entries_p20ztl_k$() {
    this.syncTarget_1;
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    return ConcurrentMutableMap$_get_entries_$lambda_dp7xtt(this)();
  }
  get_keys_wop4xp_k$() {
    this.syncTarget_1;
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    return ConcurrentMutableMap$_get_keys_$lambda_5gjoyr(this)();
  }
  get_values_ksazhn_k$() {
    this.syncTarget_1;
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    return ConcurrentMutableMap$_get_values_$lambda_tyvlyt(this)();
  }
  containsKey_aw81wo_k$(key) {
    this.syncTarget_1;
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    return ConcurrentMutableMap$containsKey$lambda(this, key)();
  }
  containsValue_yf2ykl_k$(value) {
    this.syncTarget_1;
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    return ConcurrentMutableMap$containsValue$lambda(this, value)();
  }
  get_wei43m_k$(key) {
    this.syncTarget_1;
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    return ConcurrentMutableMap$get$lambda(this, key)();
  }
  isEmpty_y1axqb_k$() {
    this.syncTarget_1;
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    return ConcurrentMutableMap$isEmpty$lambda(this)();
  }
  clear_j9egeb_k$() {
    this.syncTarget_1;
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    ConcurrentMutableMap$clear$lambda(this)();
  }
  computeIfAbsent_jzk0a1_k$(key, defaultValue) {
    this.syncTarget_1;
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    return ConcurrentMutableMap$computeIfAbsent$lambda(this, key, defaultValue)();
  }
  put_4fpzoq_k$(key, value) {
    this.syncTarget_1;
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    return ConcurrentMutableMap$put$lambda(this, key, value)();
  }
  putAll_wgg6cj_k$(from) {
    this.syncTarget_1;
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    ConcurrentMutableMap$putAll$lambda(this, from)();
  }
  remove_gppy8k_k$(key) {
    this.syncTarget_1;
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    return ConcurrentMutableMap$remove$lambda(this, key)();
  }
  block_bci1ax_k$(f) {
    this.syncTarget_1;
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    return ConcurrentMutableMap$block$lambda(this, f)();
  }
}
class MutableMapWrapper {
  constructor(map) {
    return new.target.new_co_touchlab_stately_collections_MutableMapWrapper_amyv1u_k$(map);
  }
  static new_co_touchlab_stately_collections_MutableMapWrapper_amyv1u_k$(map, $box) {
    var $this = createThis(this, $box);
    $this.map_1 = map;
    return $this;
  }
  set_map_cnz4wt_k$(_set____db54di) {
    this.map_1 = _set____db54di;
  }
  get_map_4urytw_k$() {
    return this.map_1;
  }
  get_size_woubt6_k$() {
    return this.map_1.get_size_woubt6_k$();
  }
  containsKey_aw81wo_k$(key) {
    return this.map_1.containsKey_aw81wo_k$(key);
  }
  containsValue_yf2ykl_k$(value) {
    return this.map_1.containsValue_yf2ykl_k$(value);
  }
  get_wei43m_k$(key) {
    return this.map_1.get_wei43m_k$(key);
  }
  isEmpty_y1axqb_k$() {
    return this.map_1.isEmpty_y1axqb_k$();
  }
  get_entries_p20ztl_k$() {
    return this.map_1.get_entries_p20ztl_k$();
  }
  get_keys_wop4xp_k$() {
    return this.map_1.get_keys_wop4xp_k$();
  }
  get_values_ksazhn_k$() {
    return this.map_1.get_values_ksazhn_k$();
  }
  clear_j9egeb_k$() {
    this.map_1.clear_j9egeb_k$();
  }
  put_4fpzoq_k$(key, value) {
    return this.map_1.put_4fpzoq_k$(key, value);
  }
  putAll_wgg6cj_k$(from) {
    this.map_1.putAll_wgg6cj_k$(from);
  }
  remove_gppy8k_k$(key) {
    return this.map_1.remove_gppy8k_k$(key);
  }
}
class ConcurrentMutableSet extends ConcurrentMutableCollection {
  constructor(rootArg, del) {
    return new.target.new_co_touchlab_stately_collections_ConcurrentMutableSet_ysahat_k$(rootArg, del);
  }
  static new_co_touchlab_stately_collections_ConcurrentMutableSet_ysahat_k$(rootArg, del, $box) {
    var $this = this.new_co_touchlab_stately_collections_ConcurrentMutableCollection_qab896_k$(rootArg, del, $box);
    $this.del_2 = del;
    return $this;
  }
  static new_co_touchlab_stately_collections_ConcurrentMutableSet_uwld0l_k$($box) {
    // Inline function 'kotlin.collections.mutableSetOf' call
    var tmp$ret$0 = LinkedHashSet.new_kotlin_collections_LinkedHashSet_bvgyjd_k$();
    return this.new_co_touchlab_stately_collections_ConcurrentMutableSet_ysahat_k$(null, tmp$ret$0, $box);
  }
  block_xu3665_k$(f) {
    this.get_syncTarget_y36csq_k$();
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    return ConcurrentMutableSet$block$lambda(this, f)();
  }
}
class MutableSetWrapper extends MutableCollectionWrapper {
  constructor(set) {
    return new.target.new_co_touchlab_stately_collections_MutableSetWrapper_t52xib_k$(set);
  }
  static new_co_touchlab_stately_collections_MutableSetWrapper_t52xib_k$(set, $box) {
    var $this = this.new_co_touchlab_stately_collections_MutableCollectionWrapper_2fqucl_k$(set, $box);
    $this.set_1 = set;
    return $this;
  }
  set_set_8oh9lm_k$(_set____db54di) {
    this.set_1 = _set____db54di;
  }
  get_set_tudh5m_k$() {
    return this.set_1;
  }
}
//endregion
function _get_del__e67012($this) {
  return $this.del_1;
}
function ConcurrentMutableCollection$_get_size_$lambda_dssf9y(this$0) {
  return () => this$0.del_1.get_size_woubt6_k$();
}
function ConcurrentMutableCollection$contains$lambda(this$0, $element) {
  return () => this$0.del_1.contains_aljjnj_k$($element);
}
function ConcurrentMutableCollection$containsAll$lambda(this$0, $elements) {
  return () => this$0.del_1.containsAll_xk45sd_k$($elements);
}
function ConcurrentMutableCollection$isEmpty$lambda(this$0) {
  return () => this$0.del_1.isEmpty_y1axqb_k$();
}
function ConcurrentMutableCollection$add$lambda(this$0, $element) {
  return () => this$0.del_1.add_utx5q5_k$($element);
}
function ConcurrentMutableCollection$addAll$lambda(this$0, $elements) {
  return () => this$0.del_1.addAll_4lagoh_k$($elements);
}
function ConcurrentMutableCollection$clear$lambda(this$0) {
  return () => {
    this$0.del_1.clear_j9egeb_k$();
    return Unit_getInstance();
  };
}
function ConcurrentMutableCollection$iterator$lambda(this$0) {
  return () => ConcurrentMutableIterator.new_co_touchlab_stately_collections_ConcurrentMutableIterator_u5fle3_k$(this$0.syncTarget_1, this$0.del_1.iterator_jk1svi_k$());
}
function ConcurrentMutableCollection$remove$lambda(this$0, $element) {
  return () => this$0.del_1.remove_cedx0m_k$($element);
}
function ConcurrentMutableCollection$removeAll$lambda(this$0, $elements) {
  return () => this$0.del_1.removeAll_y0z8pe_k$($elements);
}
function ConcurrentMutableCollection$retainAll$lambda(this$0, $elements) {
  return () => this$0.del_1.retainAll_9fhiib_k$($elements);
}
function ConcurrentMutableCollection$blockCollection$lambda(this$0, $f) {
  return () => {
    var wrapper = MutableCollectionWrapper.new_co_touchlab_stately_collections_MutableCollectionWrapper_2fqucl_k$(this$0.del_1);
    var result = $f(wrapper);
    wrapper._coll_1 = null;
    return result;
  };
}
function _get_coll__d4zbhb($this) {
  return ensureNotNull($this._coll_1);
}
function _get_root__dd8asp($this) {
  return $this.root_1;
}
function _get_del__e67012_0($this) {
  return $this.del_1;
}
function ConcurrentMutableIterator$hasNext$lambda(this$0) {
  return () => this$0.del_1.hasNext_bitz1p_k$();
}
function ConcurrentMutableIterator$next$lambda(this$0) {
  return () => this$0.del_1.next_20eer_k$();
}
function ConcurrentMutableIterator$remove$lambda(this$0) {
  return () => {
    this$0.del_1.remove_ldkf9o_k$();
    return Unit_getInstance();
  };
}
function _get_del__e67012_1($this) {
  return $this.del_1;
}
function _get_syncTarget__cr5eyp($this) {
  return $this.syncTarget_1;
}
function ConcurrentMutableMap$_get_size_$lambda_nuyc4q(this$0) {
  return () => this$0.del_1.get_size_woubt6_k$();
}
function ConcurrentMutableMap$_get_entries_$lambda_dp7xtt(this$0) {
  return () => ConcurrentMutableSet.new_co_touchlab_stately_collections_ConcurrentMutableSet_ysahat_k$(this$0, this$0.del_1.get_entries_p20ztl_k$());
}
function ConcurrentMutableMap$_get_keys_$lambda_5gjoyr(this$0) {
  return () => ConcurrentMutableSet.new_co_touchlab_stately_collections_ConcurrentMutableSet_ysahat_k$(this$0, this$0.del_1.get_keys_wop4xp_k$());
}
function ConcurrentMutableMap$_get_values_$lambda_tyvlyt(this$0) {
  return () => ConcurrentMutableCollection.new_co_touchlab_stately_collections_ConcurrentMutableCollection_qab896_k$(this$0, this$0.del_1.get_values_ksazhn_k$());
}
function ConcurrentMutableMap$containsKey$lambda(this$0, $key) {
  return () => this$0.del_1.containsKey_aw81wo_k$($key);
}
function ConcurrentMutableMap$containsValue$lambda(this$0, $value) {
  return () => this$0.del_1.containsValue_yf2ykl_k$($value);
}
function ConcurrentMutableMap$get$lambda(this$0, $key) {
  return () => this$0.del_1.get_wei43m_k$($key);
}
function ConcurrentMutableMap$isEmpty$lambda(this$0) {
  return () => this$0.del_1.isEmpty_y1axqb_k$();
}
function ConcurrentMutableMap$clear$lambda(this$0) {
  return () => {
    this$0.del_1.clear_j9egeb_k$();
    return Unit_getInstance();
  };
}
function ConcurrentMutableMap$computeIfAbsent$lambda(this$0, $key, $defaultValue) {
  return () => {
    var value = this$0.del_1.get_wei43m_k$($key);
    var tmp;
    if (value == null) {
      var newValue = $defaultValue($key);
      var tmp0 = this$0.del_1;
      // Inline function 'kotlin.collections.set' call
      var key = $key;
      tmp0.put_4fpzoq_k$(key, newValue);
      tmp = newValue;
    } else {
      tmp = value;
    }
    return tmp;
  };
}
function ConcurrentMutableMap$put$lambda(this$0, $key, $value) {
  return () => this$0.del_1.put_4fpzoq_k$($key, $value);
}
function ConcurrentMutableMap$putAll$lambda(this$0, $from) {
  return () => {
    this$0.del_1.putAll_wgg6cj_k$($from);
    return Unit_getInstance();
  };
}
function ConcurrentMutableMap$remove$lambda(this$0, $key) {
  return () => this$0.del_1.remove_gppy8k_k$($key);
}
function ConcurrentMutableMap$block$lambda(this$0, $f) {
  return () => {
    var wrapper = MutableMapWrapper.new_co_touchlab_stately_collections_MutableMapWrapper_amyv1u_k$(this$0.del_1);
    var result = $f(wrapper);
    var tmp = wrapper;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.map_1 = LinkedHashMap.new_kotlin_collections_LinkedHashMap_8xehp8_k$();
    return result;
  };
}
function _get_del__e67012_2($this) {
  return $this.del_2;
}
function ConcurrentMutableSet$block$lambda(this$0, $f) {
  return () => {
    var wrapper = MutableSetWrapper.new_co_touchlab_stately_collections_MutableSetWrapper_t52xib_k$(this$0.del_2);
    var result = $f(wrapper);
    var tmp = wrapper;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp.set_1 = LinkedHashSet.new_kotlin_collections_LinkedHashSet_bvgyjd_k$();
    return result;
  };
}
//region block: post-declaration
initMetadataForClass(ConcurrentMutableCollection, 'ConcurrentMutableCollection', VOID, VOID, [MutableCollection]);
initMetadataForClass(MutableCollectionWrapper, 'MutableCollectionWrapper', VOID, VOID, [MutableCollection]);
initMetadataForClass(ConcurrentMutableIterator, 'ConcurrentMutableIterator', VOID, VOID, [MutableIterator]);
protoOf(ConcurrentMutableMap).asJsMapView = asJsMapView;
protoOf(ConcurrentMutableMap).asJsReadonlyMapView = asJsReadonlyMapView;
initMetadataForClass(ConcurrentMutableMap, 'ConcurrentMutableMap', ConcurrentMutableMap.new_co_touchlab_stately_collections_ConcurrentMutableMap_jc5ej2_k$, VOID, [KtMutableMap]);
protoOf(MutableMapWrapper).asJsMapView = asJsMapView;
protoOf(MutableMapWrapper).asJsReadonlyMapView = asJsReadonlyMapView;
initMetadataForClass(MutableMapWrapper, 'MutableMapWrapper', VOID, VOID, [KtMutableMap]);
protoOf(ConcurrentMutableSet).asJsSetView = asJsSetView;
protoOf(ConcurrentMutableSet).asJsReadonlySetView = asJsReadonlySetView;
initMetadataForClass(ConcurrentMutableSet, 'ConcurrentMutableSet', ConcurrentMutableSet.new_co_touchlab_stately_collections_ConcurrentMutableSet_uwld0l_k$, VOID, [KtMutableSet]);
protoOf(MutableSetWrapper).asJsSetView = asJsSetView;
protoOf(MutableSetWrapper).asJsReadonlySetView = asJsReadonlySetView;
initMetadataForClass(MutableSetWrapper, 'MutableSetWrapper', VOID, VOID, [KtMutableSet]);
//endregion
//region block: exports
export {
  ConcurrentMutableMap as ConcurrentMutableMap19j4cpqgqiyz3,
};
//endregion

//# sourceMappingURL=Stately-stately-concurrent-collections.mjs.map
