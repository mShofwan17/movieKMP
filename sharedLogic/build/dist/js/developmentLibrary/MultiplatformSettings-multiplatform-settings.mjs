import {
  Unit_getInstanceu5z48rdn3d6z as Unit_getInstance,
  VOID3gxj6tk5isa35 as VOID,
  createThis2j2avj17cvnv2 as createThis,
  ArrayList3it5z8td81qkl as ArrayList,
  ensureNotNull1e947j3ixpazm as ensureNotNull,
  toSet2orjxp16sotqu as toSet,
  toInt2q8uldh7sc951 as toInt,
  toIntOrNull3w2d066r9pvwm as toIntOrNull,
  toLongkk4waq8msp1k as toLong,
  toLongOrNullutqivezb0wx1 as toLongOrNull,
  toDouble1kn912gjoizjp as toDouble,
  toDoubleOrNullkxwozihadygj as toDoubleOrNull,
  toBoolean2azvnq2ukl7b3 as toBoolean,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
} from './kotlin-kotlin-stdlib.mjs';
//region block: imports
//endregion
//region block: pre-declaration
class Settings {}
class StorageSettings {
  constructor(delegate) {
    return new.target.new_com_russhwolf_settings_StorageSettings_rp2zan_k$(delegate);
  }
  static new_com_russhwolf_settings_StorageSettings_rp2zan_k$(delegate, $box) {
    var tmp;
    if (delegate === VOID) {
      // Inline function 'com.russhwolf.settings.localStorage' call
      tmp = localStorage;
    } else {
      tmp = delegate;
    }
    delegate = tmp;
    var $this = createThis(this, $box);
    $this.delegate_1 = delegate;
    return $this;
  }
  get_keys_wop4xp_k$() {
    // Inline function 'kotlin.collections.List' call
    // Inline function 'kotlin.collections.MutableList' call
    var size = this.get_size_woubt6_k$();
    var list = ArrayList.new_kotlin_collections_ArrayList_l811p6_k$(size);
    // Inline function 'kotlin.repeat' call
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$4 = ensureNotNull(this.delegate_1.key(index));
        list.add_utx5q5_k$(tmp$ret$4);
      }
       while (inductionVariable < size);
    return toSet(list);
  }
  get_size_woubt6_k$() {
    return this.delegate_1.length;
  }
  clear_j9egeb_k$() {
    return this.delegate_1.clear();
  }
  remove_6241ba_k$(key) {
    return this.delegate_1.removeItem(key);
  }
  hasKey_eh4zcl_k$(key) {
    // Inline function 'com.russhwolf.settings.get' call
    return !(this.delegate_1.getItem(key) == null);
  }
  putInt_yr2eaa_k$(key, value) {
    var tmp0 = this.delegate_1;
    // Inline function 'com.russhwolf.settings.set' call
    var value_0 = value.toString();
    tmp0.setItem(key, value_0);
  }
  getInt_2td1pl_k$(key, defaultValue) {
    // Inline function 'com.russhwolf.settings.get' call
    var tmp0_safe_receiver = this.delegate_1.getItem(key);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : toInt(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? defaultValue : tmp1_elvis_lhs;
  }
  getIntOrNull_k6b6a1_k$(key) {
    // Inline function 'com.russhwolf.settings.get' call
    var tmp0_safe_receiver = this.delegate_1.getItem(key);
    return tmp0_safe_receiver == null ? null : toIntOrNull(tmp0_safe_receiver);
  }
  putLong_nzmv01_k$(key, value) {
    var tmp0 = this.delegate_1;
    // Inline function 'com.russhwolf.settings.set' call
    var value_0 = value.toString();
    tmp0.setItem(key, value_0);
  }
  getLong_peyug6_k$(key, defaultValue) {
    // Inline function 'com.russhwolf.settings.get' call
    var tmp0_safe_receiver = this.delegate_1.getItem(key);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : toLong(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? defaultValue : tmp1_elvis_lhs;
  }
  getLongOrNull_gj71ya_k$(key) {
    // Inline function 'com.russhwolf.settings.get' call
    var tmp0_safe_receiver = this.delegate_1.getItem(key);
    return tmp0_safe_receiver == null ? null : toLongOrNull(tmp0_safe_receiver);
  }
  putString_q7x3bk_k$(key, value) {
    // Inline function 'com.russhwolf.settings.set' call
    this.delegate_1.setItem(key, value);
  }
  getString_27nxc7_k$(key, defaultValue) {
    // Inline function 'com.russhwolf.settings.get' call
    var tmp0_elvis_lhs = this.delegate_1.getItem(key);
    return tmp0_elvis_lhs == null ? defaultValue : tmp0_elvis_lhs;
  }
  getStringOrNull_w9a5ex_k$(key) {
    // Inline function 'com.russhwolf.settings.get' call
    return this.delegate_1.getItem(key);
  }
  putFloat_g52tvf_k$(key, value) {
    var tmp0 = this.delegate_1;
    // Inline function 'com.russhwolf.settings.set' call
    var value_0 = value.toString();
    tmp0.setItem(key, value_0);
  }
  getFloat_fcwboc_k$(key, defaultValue) {
    // Inline function 'com.russhwolf.settings.get' call
    var tmp0_safe_receiver = this.delegate_1.getItem(key);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = toDouble(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? defaultValue : tmp1_elvis_lhs;
  }
  getFloatOrNull_6pnqqy_k$(key) {
    // Inline function 'com.russhwolf.settings.get' call
    var tmp0_safe_receiver = this.delegate_1.getItem(key);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.text.toFloatOrNull' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = toDoubleOrNull(tmp0_safe_receiver);
    }
    return tmp;
  }
  putDouble_go8clg_k$(key, value) {
    var tmp0 = this.delegate_1;
    // Inline function 'com.russhwolf.settings.set' call
    var value_0 = value.toString();
    tmp0.setItem(key, value_0);
  }
  getDouble_x004j1_k$(key, defaultValue) {
    // Inline function 'com.russhwolf.settings.get' call
    var tmp0_safe_receiver = this.delegate_1.getItem(key);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : toDouble(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? defaultValue : tmp1_elvis_lhs;
  }
  getDoubleOrNull_9teqll_k$(key) {
    // Inline function 'com.russhwolf.settings.get' call
    var tmp0_safe_receiver = this.delegate_1.getItem(key);
    return tmp0_safe_receiver == null ? null : toDoubleOrNull(tmp0_safe_receiver);
  }
  putBoolean_wwpo7g_k$(key, value) {
    var tmp0 = this.delegate_1;
    // Inline function 'com.russhwolf.settings.set' call
    var value_0 = value.toString();
    tmp0.setItem(key, value_0);
  }
  getBoolean_95o09p_k$(key, defaultValue) {
    // Inline function 'com.russhwolf.settings.get' call
    var tmp0_safe_receiver = this.delegate_1.getItem(key);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : toBoolean(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? defaultValue : tmp1_elvis_lhs;
  }
  getBooleanOrNull_qz9oyq_k$(key) {
    // Inline function 'com.russhwolf.settings.get' call
    var tmp0_safe_receiver = this.delegate_1.getItem(key);
    return tmp0_safe_receiver == null ? null : toBoolean(tmp0_safe_receiver);
  }
}
class Companion {
  constructor() {
    return new.target.new_com_russhwolf_settings_Settings_Companion_4bcuzx_k$();
  }
  static new_com_russhwolf_settings_Settings_Companion_4bcuzx_k$($box) {
    var $this = createThis(this, $box);
    Companion_instance = $this;
    return $this;
  }
}
class Factory {}
function create$default(name, $super) {
  name = name === VOID ? null : name;
  return $super === VOID ? this.create_9xd763_k$(name) : $super.create_9xd763_k$.call(this, name);
}
//endregion
function _get_delegate__idh0py($this) {
  return $this.delegate_1;
}
function get(_this__u8e3s4, key) {
  return _this__u8e3s4.getItem(key);
}
function set(_this__u8e3s4, key, value) {
  return _this__u8e3s4.setItem(key, value);
}
var Companion_instance;
function Companion_getInstance() {
  if (Companion_instance === VOID)
    Companion.new_com_russhwolf_settings_Settings_Companion_4bcuzx_k$();
  return Companion_instance;
}
function get_localStorage() {
  return localStorage;
}
//region block: post-declaration
initMetadataForInterface(Settings, 'Settings');
initMetadataForClass(StorageSettings, 'StorageSettings', StorageSettings.new_com_russhwolf_settings_StorageSettings_rp2zan_k$, VOID, [Settings]);
initMetadataForCompanion(Companion);
initMetadataForInterface(Factory, 'Factory');
//endregion
//region block: exports
export {
  Settings as Settings1su1lnrtyc32m,
  StorageSettings as StorageSettings203mesgel706z,
};
//endregion

//# sourceMappingURL=MultiplatformSettings-multiplatform-settings.mjs.map
