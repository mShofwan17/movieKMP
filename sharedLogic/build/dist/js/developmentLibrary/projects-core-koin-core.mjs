import {
  createThis2j2avj17cvnv2 as createThis,
  VOID3gxj6tk5isa35 as VOID,
  Unit_getInstanceu5z48rdn3d6z as Unit_getInstance,
  Monotonic_getInstance30o2vqngnn8be as Monotonic_getInstance,
  ValueTimeMark__elapsedNow_impl_eonqvs31ikzp5dku7pk as ValueTimeMark__elapsedNow_impl_eonqvs,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  listOfvhqybd2zx248 as listOf,
  toList383f556t1dixk as toList,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  Annotation1hwww4cseplu9 as Annotation,
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  getKClassFromExpression348iqjl4fnx2f as getKClassFromExpression,
  hashCodeq5arwsb9dgti as hashCode,
  emptyList1g2z5xcrvp2zy as emptyList,
  StringBuildermazzzhj6kkai as StringBuilder,
  _Char___init__impl__6a9atxrzocepzq3zgi as _Char___init__impl__6a9atx,
  equals2au1ep9vhcato as equals,
  joinTo3lkanfaxbzac2 as joinTo,
  THROW_IAE23kobfj9wdoxr as THROW_IAE,
  enumEntries20mr21zbe3az4 as enumEntries,
  Enum3alwj03lh1n41 as Enum,
  toString30pk9tzaqopn as toString,
  toString1pkumu07cwy4m as toString_0,
  Exceptiondt2hlxn7j7vw as Exception,
  captureStack1fzi4aczwc4hg as captureStack,
  HashMap1a0ld5kgwhmhv as HashMap,
  KtMap140uvy3s5zad8 as KtMap,
  isInterface3d6p8outrmvmk as isInterface,
  IllegalStateExceptionkoljg5n0nrlr as IllegalStateException,
  LinkedHashSet2tkztfx86kyx2 as LinkedHashSet,
  LinkedHashMap1zhqxkxv3xnkl as LinkedHashMap,
  ArrayList3it5z8td81qkl as ArrayList,
  addAll21mdhg523wnoa as addAll,
  listOf1jh22dvmctj1r as listOf_0,
  plus310ted5e4i90h as plus,
  getStringHashCode26igk1bx568vk as getStringHashCode,
  ArrayDeque2dzc9uld4xi7n as ArrayDeque,
  asReversed308kw52j6ls1u as asReversed,
  get_lastIndex1yw0x4k50k51w as get_lastIndex,
  toList3jhuyej2anx2q as toList_0,
  getKClass3t8tygqu4lcxf as getKClass,
  copyToArray2j022khrow2yi as copyToArray,
  arrayListOf1fz8nib0ncbow as arrayListOf,
  distinct10qe1scfdvu5k as distinct,
  TimedValuew9j01dao9jci as TimedValue,
  removeAllhcnh8rmylp95 as removeAll,
  addAll1k27qatfgp3k5 as addAll_0,
  _Duration___get_inWholeMicroseconds__impl__8oe8vv3ftjral8oy9p8 as _Duration___get_inWholeMicroseconds__impl__8oe8vv,
  toNumberlmbpvqo27r53 as toNumber,
  Companion_getInstance2o9uk4k3kfl5 as Companion_getInstance,
  protoOf180f3jzyo7rfj as protoOf,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  println2shhhgwwt4c61 as println,
  split2bvyvnrlcifjv as split,
  LazyThreadSafetyMode_NONE_getInstance29obelyddqkpt as LazyThreadSafetyMode_NONE_getInstance,
} from './kotlin-kotlin-stdlib.mjs';
import { ThreadLocalRef2gwn4e0n07y5w as ThreadLocalRef } from './Stately-stately-concurrency.mjs';
import { ConcurrentMutableMap19j4cpqgqiyz3 as ConcurrentMutableMap } from './Stately-stately-concurrent-collections.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
class Koin {
  constructor() {
    return new.target.new_org_koin_core_Koin_yoepjg_k$();
  }
  static new_org_koin_core_Koin_yoepjg_k$($box) {
    var $this = createThis(this, $box);
    $this.scopeRegistry_1 = ScopeRegistry.new_org_koin_core_registry_ScopeRegistry_iimw1u_k$($this);
    $this.instanceRegistry_1 = InstanceRegistry.new_org_koin_core_registry_InstanceRegistry_rq5ryi_k$($this);
    $this.propertyRegistry_1 = PropertyRegistry.new_org_koin_core_registry_PropertyRegistry_7hjmfe_k$($this);
    $this.extensionManager_1 = ExtensionManager.new_org_koin_core_extension_ExtensionManager_f7ksce_k$($this);
    $this.logger_1 = EmptyLogger.new_org_koin_core_logger_EmptyLogger_7mg1kl_k$();
    return $this;
  }
  get_scopeRegistry_7zu3y0_k$() {
    return this.scopeRegistry_1;
  }
  get_instanceRegistry_jmeu6d_k$() {
    return this.instanceRegistry_1;
  }
  get_propertyRegistry_kqppff_k$() {
    return this.propertyRegistry_1;
  }
  get_extensionManager_eii7d5_k$() {
    return this.extensionManager_1;
  }
  get_logger_g9gejd_k$() {
    return this.logger_1;
  }
  setupLogger_8irynp_k$(logger) {
    this.logger_1 = logger;
  }
  get_80ko8d_k$(clazz, qualifier, parameters) {
    return this.scopeRegistry_1.get_rootScope_60k1zr_k$().get_80ko8d_k$(clazz, qualifier, parameters);
  }
  get$default_drfz2l_k$(clazz, qualifier, parameters, $super) {
    qualifier = qualifier === VOID ? null : qualifier;
    parameters = parameters === VOID ? null : parameters;
    return $super === VOID ? this.get_80ko8d_k$(clazz, qualifier, parameters) : $super.get_80ko8d_k$.call(this, clazz, qualifier, parameters);
  }
  getOrNull_o6mr2b_k$(clazz, qualifier, parameters) {
    return this.scopeRegistry_1.get_rootScope_60k1zr_k$().getOrNull_o6mr2b_k$(clazz, qualifier, parameters);
  }
  getOrNull$default_ms9o3b_k$(clazz, qualifier, parameters, $super) {
    qualifier = qualifier === VOID ? null : qualifier;
    parameters = parameters === VOID ? null : parameters;
    return $super === VOID ? this.getOrNull_o6mr2b_k$(clazz, qualifier, parameters) : $super.getOrNull_o6mr2b_k$.call(this, clazz, qualifier, parameters);
  }
  createScope_icmya9_k$(scopeId, qualifier, source) {
    return this.scopeRegistry_1.createScope_6hcjnw_k$(scopeId, qualifier, source);
  }
  createScope$default_jqhc28_k$(scopeId, qualifier, source, $super) {
    source = source === VOID ? null : source;
    return $super === VOID ? this.createScope_icmya9_k$(scopeId, qualifier, source) : $super.createScope_icmya9_k$.call(this, scopeId, qualifier, source);
  }
  createScope_vgypkn_k$(t) {
    var scopeId = getScopeId(t);
    var qualifier = getScopeName(t);
    return this.scopeRegistry_1.createScope_6hcjnw_k$(scopeId, qualifier, null);
  }
  getOrCreateScope_esa8so_k$(scopeId, qualifier, source) {
    var tmp0_elvis_lhs = this.scopeRegistry_1.getScopeOrNull_jhw04p_k$(scopeId);
    return tmp0_elvis_lhs == null ? this.createScope_icmya9_k$(scopeId, qualifier, source) : tmp0_elvis_lhs;
  }
  getOrCreateScope$default_600prd_k$(scopeId, qualifier, source, $super) {
    source = source === VOID ? null : source;
    return $super === VOID ? this.getOrCreateScope_esa8so_k$(scopeId, qualifier, source) : $super.getOrCreateScope_esa8so_k$.call(this, scopeId, qualifier, source);
  }
  getScope_tojh0k_k$(scopeId) {
    var tmp0_elvis_lhs = this.scopeRegistry_1.getScopeOrNull_jhw04p_k$(scopeId);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw ScopeNotCreatedException.new_org_koin_core_error_ScopeNotCreatedException_hkbkya_k$("No scope found for id '" + scopeId + "'");
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  getScopeOrNull_d5lpe6_k$(scopeId) {
    return this.scopeRegistry_1.getScopeOrNull_jhw04p_k$(scopeId);
  }
  deleteScope_p820yn_k$(scopeId) {
    this.scopeRegistry_1.deleteScope_bx616i_k$(scopeId);
  }
  getProperty_c8t5i6_k$(key, defaultValue) {
    var tmp0_elvis_lhs = this.propertyRegistry_1.getProperty_queixn_k$(key);
    return tmp0_elvis_lhs == null ? defaultValue : tmp0_elvis_lhs;
  }
  getProperty_uqr2j4_k$(key) {
    return this.propertyRegistry_1.getProperty_queixn_k$(key);
  }
  setProperty_4bjgqz_k$(key, value) {
    this.propertyRegistry_1.saveProperty_qwjh80_k$(key, value);
  }
  deleteProperty_94w4qe_k$(key) {
    this.propertyRegistry_1.deleteProperty_94w4qe_k$(key);
  }
  close_yn9xrc_k$() {
    this.scopeRegistry_1.close_w9j6zn_k$();
    this.instanceRegistry_1.close_w9j6zn_k$();
    this.propertyRegistry_1.close_yn9xrc_k$();
    this.extensionManager_1.close_yn9xrc_k$();
  }
  loadModules_wryunp_k$(modules, allowOverride, createEagerInstances) {
    var flattedModules = flatten(modules);
    this.instanceRegistry_1.loadModules_ti383p_k$(flattedModules, allowOverride);
    this.scopeRegistry_1.loadScopes_dez92v_k$(flattedModules);
    if (createEagerInstances) {
      this.createEagerInstances_b5l376_k$();
    }
  }
  loadModules$default_98npob_k$(modules, allowOverride, createEagerInstances, $super) {
    allowOverride = allowOverride === VOID ? true : allowOverride;
    createEagerInstances = createEagerInstances === VOID ? false : createEagerInstances;
    var tmp;
    if ($super === VOID) {
      this.loadModules_wryunp_k$(modules, allowOverride, createEagerInstances);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.loadModules_wryunp_k$.call(this, modules, allowOverride, createEagerInstances);
    }
    return tmp;
  }
  unloadModules_7hifhu_k$(modules) {
    var flattedModules = flatten(modules);
    this.instanceRegistry_1.unloadModules_vtlbs7_k$(flattedModules);
  }
  createEagerInstances_b5l376_k$() {
    this.logger_1.debug_fck32h_k$('Create eager instances ...');
    // Inline function 'kotlin.time.measureTime' call
    // Inline function 'kotlin.time.measureTime' call
    var mark = Monotonic_getInstance().markNow_ns2ype_k$();
    this.instanceRegistry_1.createAllEagerInstances_rtby46_k$();
    var duration = ValueTimeMark__elapsedNow_impl_eonqvs(mark);
    this.logger_1.debug_fck32h_k$('Created eager instances in ' + get_inMs(duration) + ' ms');
  }
}
class Companion {
  constructor() {
    return new.target.new_org_koin_core_KoinApplication_Companion_sxpwd7_k$();
  }
  static new_org_koin_core_KoinApplication_Companion_sxpwd7_k$($box) {
    var $this = createThis(this, $box);
    Companion_instance = $this;
    return $this;
  }
  init_1xdsg_k$() {
    var app = KoinApplication.new_org_koin_core_KoinApplication_jj9efa_k$();
    return app;
  }
}
class KoinApplication {
  constructor() {
    return new.target.new_org_koin_core_KoinApplication_jj9efa_k$();
  }
  static new_org_koin_core_KoinApplication_jj9efa_k$($box) {
    Companion_getInstance_0();
    var $this = createThis(this, $box);
    $this.koin_1 = Koin.new_org_koin_core_Koin_yoepjg_k$();
    $this.allowOverride_1 = true;
    return $this;
  }
  get_koin_wopbyq_k$() {
    return this.koin_1;
  }
  modules_5mo3b5_k$(modules) {
    return this.modules_r3qc1t_k$(listOf(modules));
  }
  modules_sihqt1_k$(modules) {
    return this.modules_r3qc1t_k$(toList(modules));
  }
  modules_r3qc1t_k$(modules) {
    var tmp0 = this.koin_1.get_logger_g9gejd_k$();
    // Inline function 'org.koin.core.logger.Logger.isAt' call
    var lvl = Level_INFO_getInstance();
    if (tmp0.get_level_ium7h7_k$().compareTo_30rs7w_k$(lvl) <= 0) {
      // Inline function 'kotlin.time.measureTime' call
      // Inline function 'kotlin.time.measureTime' call
      var mark = Monotonic_getInstance().markNow_ns2ype_k$();
      loadModules(this, modules);
      var duration = ValueTimeMark__elapsedNow_impl_eonqvs(mark);
      var count = this.koin_1.get_instanceRegistry_jmeu6d_k$().size_23och_k$();
      this.koin_1.get_logger_g9gejd_k$().display_r45kqo_k$(Level_INFO_getInstance(), 'Started ' + count + ' definitions in ' + get_inMs(duration) + ' ms');
    } else {
      loadModules(this, modules);
    }
    return this;
  }
  createEagerInstances_b5l376_k$() {
    this.koin_1.createEagerInstances_b5l376_k$();
  }
  allowOverride_uzcslc_k$(override) {
    this.allowOverride_1 = override;
  }
  properties_die9e6_k$(values) {
    this.koin_1.get_propertyRegistry_kqppff_k$().saveProperties_qx721n_k$(values);
    return this;
  }
  logger_5nhcko_k$(logger) {
    this.koin_1.setupLogger_8irynp_k$(logger);
    return this;
  }
  printLogger_8bdywf_k$(level) {
    this.koin_1.setupLogger_8irynp_k$(KoinPlatformTools_getInstance().defaultLogger_loj8wr_k$(level));
    return this;
  }
  printLogger$default_wn3y2s_k$(level, $super) {
    level = level === VOID ? Level_INFO_getInstance() : level;
    return $super === VOID ? this.printLogger_8bdywf_k$(level) : $super.printLogger_8bdywf_k$.call(this, level);
  }
  close_yn9xrc_k$() {
    this.koin_1.close_yn9xrc_k$();
  }
  unloadModules_xtfh3n_k$(modules) {
    this.koin_1.unloadModules_7hifhu_k$(modules);
  }
  unloadModules_m7h18r_k$(module_0) {
    this.koin_1.unloadModules_7hifhu_k$(listOf(module_0));
  }
}
class KoinInternalApi {
  equals(other) {
    if (!(other instanceof KoinInternalApi))
      return false;
    other instanceof KoinInternalApi || THROW_CCE();
    return true;
  }
  hashCode() {
    return 0;
  }
  toString() {
    return '@org.koin.core.annotation.KoinInternalApi(' + ')';
  }
}
class KoinComponent {}
function getKoin() {
  return KoinPlatformTools_getInstance().defaultContext_m5e9ci_k$().get_26vq_k$();
}
class KoinScopeComponent {}
class KoinContext {}
function loadKoinModules$default(module_0, createEagerInstances, $super) {
  createEagerInstances = createEagerInstances === VOID ? false : createEagerInstances;
  var tmp;
  if ($super === VOID) {
    this.loadKoinModules_pgeopx_k$(module_0, createEagerInstances);
    tmp = Unit_getInstance();
  } else {
    tmp = $super.loadKoinModules_pgeopx_k$.call(this, module_0, createEagerInstances);
  }
  return tmp;
}
function loadKoinModules$default_0(modules, createEagerInstances, $super) {
  createEagerInstances = createEagerInstances === VOID ? false : createEagerInstances;
  var tmp;
  if ($super === VOID) {
    this.loadKoinModules_vsyvvn_k$(modules, createEagerInstances);
    tmp = Unit_getInstance();
  } else {
    tmp = $super.loadKoinModules_vsyvvn_k$.call(this, modules, createEagerInstances);
  }
  return tmp;
}
class BeanDefinition {
  constructor(scopeQualifier, primaryType, qualifier, definition, kind, secondaryTypes) {
    return new.target.new_org_koin_core_definition_BeanDefinition_82h3cv_k$(scopeQualifier, primaryType, qualifier, definition, kind, secondaryTypes);
  }
  static new_org_koin_core_definition_BeanDefinition_82h3cv_k$(scopeQualifier, primaryType, qualifier, definition, kind, secondaryTypes, $box) {
    qualifier = qualifier === VOID ? null : qualifier;
    var tmp;
    if (secondaryTypes === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp = emptyList();
    } else {
      tmp = secondaryTypes;
    }
    secondaryTypes = tmp;
    var $this = createThis(this, $box);
    $this.scopeQualifier_1 = scopeQualifier;
    $this.primaryType_1 = primaryType;
    $this.qualifier_1 = qualifier;
    $this.definition_1 = definition;
    $this.kind_1 = kind;
    $this.secondaryTypes_1 = secondaryTypes;
    $this.callbacks_1 = Callbacks.new_org_koin_core_definition_Callbacks_m24hn6_k$();
    $this._createdAtStart_1 = false;
    return $this;
  }
  get_scopeQualifier_eby6kf_k$() {
    return this.scopeQualifier_1;
  }
  get_primaryType_gbcb1_k$() {
    return this.primaryType_1;
  }
  set_qualifier_ov6axa_k$(_set____db54di) {
    this.qualifier_1 = _set____db54di;
  }
  get_qualifier_c4gvsv_k$() {
    return this.qualifier_1;
  }
  get_definition_y2whcs_k$() {
    return this.definition_1;
  }
  get_kind_wop7ml_k$() {
    return this.kind_1;
  }
  set_secondaryTypes_oxpj23_k$(_set____db54di) {
    this.secondaryTypes_1 = _set____db54di;
  }
  get_secondaryTypes_du752m_k$() {
    return this.secondaryTypes_1;
  }
  set_callbacks_8s1r2a_k$(_set____db54di) {
    this.callbacks_1 = _set____db54di;
  }
  get_callbacks_8qyswr_k$() {
    return this.callbacks_1;
  }
  set__createdAtStart_9cnhu7_k$(_set____db54di) {
    this._createdAtStart_1 = _set____db54di;
  }
  get__createdAtStart_5di9ug_k$() {
    return this._createdAtStart_1;
  }
  toString() {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder.new_kotlin_text_StringBuilder_q3um6c_k$();
    this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(91));
    this_0.append_t8pm91_k$(this.kind_1);
    this_0.append_22ad7x_k$(": '");
    this_0.append_22ad7x_k$(getFullName(this.primaryType_1));
    this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(39));
    if (!(this.qualifier_1 == null)) {
      this_0.append_22ad7x_k$(',qualifier:');
      this_0.append_t8pm91_k$(this.qualifier_1);
    }
    if (!equals(this.scopeQualifier_1, Companion_getInstance_2().get_rootScopeQualifier_ohxkho_k$())) {
      this_0.append_22ad7x_k$(',scope:');
      this_0.append_t8pm91_k$(this.scopeQualifier_1);
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.secondaryTypes_1.isEmpty_y1axqb_k$()) {
      this_0.append_22ad7x_k$(',binds:');
      var tmp = this.secondaryTypes_1;
      joinTo(tmp, this_0, ',', VOID, VOID, VOID, VOID, BeanDefinition$toString$lambda);
    }
    this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(93));
    return this_0.toString();
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof BeanDefinition))
      THROW_CCE();
    if (!this.primaryType_1.equals(other.primaryType_1))
      return false;
    if (!equals(this.qualifier_1, other.qualifier_1))
      return false;
    if (!equals(this.scopeQualifier_1, other.scopeQualifier_1))
      return false;
    return true;
  }
  hasType_kftgse_k$(clazz) {
    return this.primaryType_1.equals(clazz) || this.secondaryTypes_1.contains_aljjnj_k$(clazz);
  }
  is_cbzrid_k$(clazz, qualifier, scopeDefinition) {
    var tmp;
    var tmp_0;
    // Inline function 'org.koin.core.definition.BeanDefinition.hasType' call
    if (this.primaryType_1.equals(clazz) || this.secondaryTypes_1.contains_aljjnj_k$(clazz)) {
      tmp_0 = equals(this.qualifier_1, qualifier);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.scopeQualifier_1, scopeDefinition);
    } else {
      tmp = false;
    }
    return tmp;
  }
  hashCode() {
    var tmp0_safe_receiver = this.qualifier_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    result = imul(31, result) + this.primaryType_1.hashCode() | 0;
    result = imul(31, result) + hashCode(this.scopeQualifier_1) | 0;
    return result;
  }
}
class Kind extends Enum {
  constructor(name, ordinal) {
    return new.target.new_org_koin_core_definition_Kind_82m1jp_k$(name, ordinal);
  }
  static new_org_koin_core_definition_Kind_82m1jp_k$(name, ordinal, $box) {
    return this.new_kotlin_Enum_a1ijns_k$(name, ordinal, $box);
  }
}
class Callbacks {
  constructor(onClose) {
    return new.target.new_org_koin_core_definition_Callbacks_m24hn6_k$(onClose);
  }
  static new_org_koin_core_definition_Callbacks_m24hn6_k$(onClose, $box) {
    onClose = onClose === VOID ? null : onClose;
    var $this = createThis(this, $box);
    $this.onClose_1 = onClose;
    return $this;
  }
  get_onClose_l3bvrk_k$() {
    return this.onClose_1;
  }
  component1_7eebsc_k$() {
    return this.onClose_1;
  }
  copy_1fqpt8_k$(onClose) {
    return Callbacks.new_org_koin_core_definition_Callbacks_m24hn6_k$(onClose);
  }
  copy$default_9bcw56_k$(onClose, $super) {
    onClose = onClose === VOID ? this.onClose_1 : onClose;
    return $super === VOID ? this.copy_1fqpt8_k$(onClose) : $super.copy_1fqpt8_k$.call(this, onClose);
  }
  toString() {
    return 'Callbacks(onClose=' + toString(this.onClose_1) + ')';
  }
  hashCode() {
    return this.onClose_1 == null ? 0 : hashCode(this.onClose_1);
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof Callbacks))
      return false;
    var tmp0_other_with_cast = other instanceof Callbacks ? other : THROW_CCE();
    if (!equals(this.onClose_1, tmp0_other_with_cast.onClose_1))
      return false;
    return true;
  }
}
class KoinDefinition {
  constructor(module_0, factory) {
    return new.target.new_org_koin_core_definition_KoinDefinition_ylawqi_k$(module_0, factory);
  }
  static new_org_koin_core_definition_KoinDefinition_ylawqi_k$(module_0, factory, $box) {
    var $this = createThis(this, $box);
    $this.module_1 = module_0;
    $this.factory_1 = factory;
    return $this;
  }
  get_module_gqgeid_k$() {
    return this.module_1;
  }
  get_factory_gsiw2n_k$() {
    return this.factory_1;
  }
  component1_7eebsc_k$() {
    return this.module_1;
  }
  component2_7eebsb_k$() {
    return this.factory_1;
  }
  copy_fw2x5j_k$(module_0, factory) {
    return KoinDefinition.new_org_koin_core_definition_KoinDefinition_ylawqi_k$(module_0, factory);
  }
  copy$default_esh854_k$(module_0, factory, $super) {
    module_0 = module_0 === VOID ? this.module_1 : module_0;
    factory = factory === VOID ? this.factory_1 : factory;
    return $super === VOID ? this.copy_fw2x5j_k$(module_0, factory) : $super.copy_fw2x5j_k$.call(this, module_0, factory);
  }
  toString() {
    return 'KoinDefinition(module=' + toString_0(this.module_1) + ', factory=' + toString_0(this.factory_1) + ')';
  }
  hashCode() {
    var result = this.module_1.hashCode();
    result = imul(result, 31) + hashCode(this.factory_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof KoinDefinition))
      return false;
    var tmp0_other_with_cast = other instanceof KoinDefinition ? other : THROW_CCE();
    if (!this.module_1.equals(tmp0_other_with_cast.module_1))
      return false;
    if (!equals(this.factory_1, tmp0_other_with_cast.factory_1))
      return false;
    return true;
  }
}
class ClosedScopeException extends Exception {
  constructor(msg) {
    return new.target.new_org_koin_core_error_ClosedScopeException_6ejsvk_k$(msg);
  }
  static new_org_koin_core_error_ClosedScopeException_6ejsvk_k$(msg, $box) {
    var $this = this.new_kotlin_Exception_9db8xb_k$(msg, $box);
    captureStack($this, $this.$throwableCtor_2);
    return $this;
  }
}
class DefinitionOverrideException extends Exception {
  constructor(msg) {
    return new.target.new_org_koin_core_error_DefinitionOverrideException_gtqpz4_k$(msg);
  }
  static new_org_koin_core_error_DefinitionOverrideException_gtqpz4_k$(msg, $box) {
    var $this = this.new_kotlin_Exception_9db8xb_k$(msg, $box);
    captureStack($this, $this.$throwableCtor_2);
    return $this;
  }
}
class DefinitionParameterException extends Exception {
  constructor(str) {
    return new.target.new_org_koin_core_error_DefinitionParameterException_344t2k_k$(str);
  }
  static new_org_koin_core_error_DefinitionParameterException_344t2k_k$(str, $box) {
    var $this = this.new_kotlin_Exception_9db8xb_k$(str, $box);
    captureStack($this, $this.$throwableCtor_2);
    return $this;
  }
}
class InstanceCreationException extends Exception {
  constructor(msg, parent) {
    return new.target.new_org_koin_core_error_InstanceCreationException_mrgeyf_k$(msg, parent);
  }
  static new_org_koin_core_error_InstanceCreationException_mrgeyf_k$(msg, parent, $box) {
    var $this = this.new_kotlin_Exception_mtlthx_k$(msg, parent, $box);
    captureStack($this, $this.$throwableCtor_2);
    return $this;
  }
}
class KoinApplicationAlreadyStartedException extends Exception {
  constructor(msg) {
    return new.target.new_org_koin_core_error_KoinApplicationAlreadyStartedException_fklqlc_k$(msg);
  }
  static new_org_koin_core_error_KoinApplicationAlreadyStartedException_fklqlc_k$(msg, $box) {
    var $this = this.new_kotlin_Exception_9db8xb_k$(msg, $box);
    captureStack($this, $this.$throwableCtor_2);
    return $this;
  }
}
class MissingPropertyException extends Exception {
  constructor(msg) {
    return new.target.new_org_koin_core_error_MissingPropertyException_oumcqe_k$(msg);
  }
  static new_org_koin_core_error_MissingPropertyException_oumcqe_k$(msg, $box) {
    var $this = this.new_kotlin_Exception_9db8xb_k$(msg, $box);
    captureStack($this, $this.$throwableCtor_2);
    return $this;
  }
}
class NoDefinitionFoundException extends Exception {
  constructor(msg) {
    return new.target.new_org_koin_core_error_NoDefinitionFoundException_avg1lw_k$(msg);
  }
  static new_org_koin_core_error_NoDefinitionFoundException_avg1lw_k$(msg, $box) {
    var $this = this.new_kotlin_Exception_9db8xb_k$(msg, $box);
    captureStack($this, $this.$throwableCtor_2);
    return $this;
  }
}
class NoParameterFoundException extends Exception {
  constructor(msg) {
    return new.target.new_org_koin_core_error_NoParameterFoundException_jrlo9s_k$(msg);
  }
  static new_org_koin_core_error_NoParameterFoundException_jrlo9s_k$(msg, $box) {
    var $this = this.new_kotlin_Exception_9db8xb_k$(msg, $box);
    captureStack($this, $this.$throwableCtor_2);
    return $this;
  }
}
class ScopeAlreadyCreatedException extends Exception {
  constructor(s) {
    return new.target.new_org_koin_core_error_ScopeAlreadyCreatedException_93vebs_k$(s);
  }
  static new_org_koin_core_error_ScopeAlreadyCreatedException_93vebs_k$(s, $box) {
    var $this = this.new_kotlin_Exception_9db8xb_k$(s, $box);
    captureStack($this, $this.$throwableCtor_2);
    return $this;
  }
}
class ScopeNotCreatedException extends Exception {
  constructor(msg) {
    return new.target.new_org_koin_core_error_ScopeNotCreatedException_hkbkya_k$(msg);
  }
  static new_org_koin_core_error_ScopeNotCreatedException_hkbkya_k$(msg, $box) {
    var $this = this.new_kotlin_Exception_9db8xb_k$(msg, $box);
    captureStack($this, $this.$throwableCtor_2);
    return $this;
  }
}
class ExtensionManager {
  constructor(_koin) {
    return new.target.new_org_koin_core_extension_ExtensionManager_f7ksce_k$(_koin);
  }
  static new_org_koin_core_extension_ExtensionManager_f7ksce_k$(_koin, $box) {
    var $this = createThis(this, $box);
    $this._koin_1 = _koin;
    var tmp = $this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp.extensions_1 = HashMap.new_kotlin_collections_HashMap_w3jvc8_k$();
    return $this;
  }
  get__koin_y6qn0a_k$() {
    return this._koin_1;
  }
  get_extensions_sis17s_k$() {
    return this.extensions_1;
  }
  registerExtension_t5qwzt_k$(id, extension) {
    // Inline function 'kotlin.collections.set' call
    this.extensions_1.put_4fpzoq_k$(id, extension);
    extension.onRegister_cy2cmw_k$(this._koin_1);
  }
  close_yn9xrc_k$() {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = this.extensions_1.get_values_ksazhn_k$().iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      element.onClose_84idtj_k$();
    }
  }
}
class KoinExtension {}
class InstanceFactory {
  constructor(beanDefinition) {
    return new.target.new_org_koin_core_instance_InstanceFactory_d44j0a_k$(beanDefinition);
  }
  static new_org_koin_core_instance_InstanceFactory_d44j0a_k$(beanDefinition, $box) {
    Companion_getInstance_1();
    var $this = createThis(this, $box);
    $this.beanDefinition_1 = beanDefinition;
    return $this;
  }
  get_beanDefinition_b177zg_k$() {
    return this.beanDefinition_1;
  }
  create_b0uy66_k$(context) {
    context.get_logger_g9gejd_k$().debug_fck32h_k$("| (+) '" + this.beanDefinition_1.toString() + "'");
    try {
      var tmp0_elvis_lhs = context.get_parameters_cl4rkd_k$();
      var parameters = tmp0_elvis_lhs == null ? emptyParametersHolder() : tmp0_elvis_lhs;
      return this.beanDefinition_1.get_definition_y2whcs_k$()(context.get_scope_iyfcq3_k$(), parameters);
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var stack = KoinPlatformTools_getInstance().getStackTrace_pop6za_k$(e);
        context.get_logger_g9gejd_k$().error_5zor4u_k$("* Instance creation error : could not create instance for '" + this.beanDefinition_1.toString() + "': " + stack);
        throw InstanceCreationException.new_org_koin_core_error_InstanceCreationException_mrgeyf_k$("Could not create instance for '" + this.beanDefinition_1.toString() + "'", e);
      } else {
        throw $p;
      }
    }
  }
  isCreated$default_u8xftm_k$(context, $super) {
    context = context === VOID ? null : context;
    return $super === VOID ? this.isCreated_fnj2vx_k$(context) : $super.isCreated_fnj2vx_k$.call(this, context);
  }
  drop$default_actzlz_k$(scope, $super) {
    scope = scope === VOID ? null : scope;
    var tmp;
    if ($super === VOID) {
      this.drop_kiuzvc_k$(scope);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.drop_kiuzvc_k$.call(this, scope);
    }
    return tmp;
  }
}
class FactoryInstanceFactory extends InstanceFactory {
  constructor(beanDefinition) {
    return new.target.new_org_koin_core_instance_FactoryInstanceFactory_luboh_k$(beanDefinition);
  }
  static new_org_koin_core_instance_FactoryInstanceFactory_luboh_k$(beanDefinition, $box) {
    return this.new_org_koin_core_instance_InstanceFactory_d44j0a_k$(beanDefinition, $box);
  }
  isCreated_fnj2vx_k$(context) {
    return false;
  }
  drop_kiuzvc_k$(scope) {
    var tmp0_safe_receiver = this.get_beanDefinition_b177zg_k$().get_callbacks_8qyswr_k$().get_onClose_l3bvrk_k$();
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver(null);
  }
  dropAll_wm06si_k$() {
  }
  get_at8kkk_k$(context) {
    return this.create_b0uy66_k$(context);
  }
}
class Companion_0 {
  constructor() {
    return new.target.new_org_koin_core_instance_InstanceFactory_Companion_368rcb_k$();
  }
  static new_org_koin_core_instance_InstanceFactory_Companion_368rcb_k$($box) {
    var $this = createThis(this, $box);
    Companion_instance_0 = $this;
    $this.ERROR_SEPARATOR_1 = '\n\t';
    return $this;
  }
  get_ERROR_SEPARATOR_l3t0ed_k$() {
    return this.ERROR_SEPARATOR_1;
  }
}
class ResolutionContext {
  constructor(logger, scope, clazz, qualifier, parameters) {
    return new.target.new_org_koin_core_instance_ResolutionContext_pd1goj_k$(logger, scope, clazz, qualifier, parameters);
  }
  static new_org_koin_core_instance_ResolutionContext_pd1goj_k$(logger, scope, clazz, qualifier, parameters, $box) {
    qualifier = qualifier === VOID ? null : qualifier;
    parameters = parameters === VOID ? null : parameters;
    var $this = createThis(this, $box);
    $this.logger_1 = logger;
    $this.scope_1 = scope;
    $this.clazz_1 = clazz;
    $this.qualifier_1 = qualifier;
    $this.parameters_1 = parameters;
    $this.debugTag_1 = "t:'" + getFullName($this.clazz_1) + "' - q:'" + toString($this.qualifier_1) + "'";
    return $this;
  }
  get_logger_g9gejd_k$() {
    return this.logger_1;
  }
  get_scope_iyfcq3_k$() {
    return this.scope_1;
  }
  get_clazz_ips3zj_k$() {
    return this.clazz_1;
  }
  get_qualifier_c4gvsv_k$() {
    return this.qualifier_1;
  }
  get_parameters_cl4rkd_k$() {
    return this.parameters_1;
  }
  get_debugTag_mqsm40_k$() {
    return this.debugTag_1;
  }
}
class NoClass {
  constructor() {
    return new.target.new_org_koin_core_instance_NoClass_f232xo_k$();
  }
  static new_org_koin_core_instance_NoClass_f232xo_k$($box) {
    return createThis(this, $box);
  }
}
class ScopedInstanceFactory extends InstanceFactory {
  constructor(beanDefinition) {
    return new.target.new_org_koin_core_instance_ScopedInstanceFactory_up00cx_k$(beanDefinition);
  }
  static new_org_koin_core_instance_ScopedInstanceFactory_up00cx_k$(beanDefinition, $box) {
    var $this = this.new_org_koin_core_instance_InstanceFactory_d44j0a_k$(beanDefinition, $box);
    var tmp = $this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp.values_1 = HashMap.new_kotlin_collections_HashMap_w3jvc8_k$();
    return $this;
  }
  isCreated_fnj2vx_k$(context) {
    var tmp0 = this.values_1;
    var tmp1_safe_receiver = context == null ? null : context.get_scope_iyfcq3_k$();
    // Inline function 'kotlin.collections.get' call
    var key = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_id_kntnx8_k$();
    return !((isInterface(tmp0, KtMap) ? tmp0 : THROW_CCE()).get_wei43m_k$(key) == null);
  }
  drop_kiuzvc_k$(scope) {
    if (scope == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp0_safe_receiver = this.get_beanDefinition_b177zg_k$().get_callbacks_8qyswr_k$().get_onClose_l3bvrk_k$();
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver(this.values_1.get_wei43m_k$(scope.get_id_kntnx8_k$()));
      this.values_1.remove_gppy8k_k$(scope.get_id_kntnx8_k$());
    }
  }
  create_b0uy66_k$(context) {
    var tmp;
    if (this.values_1.get_wei43m_k$(context.get_scope_iyfcq3_k$().get_id_kntnx8_k$()) == null) {
      tmp = super.create_b0uy66_k$(context);
    } else {
      var tmp0_elvis_lhs = this.values_1.get_wei43m_k$(context.get_scope_iyfcq3_k$().get_id_kntnx8_k$());
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'kotlin.error' call
        var message = 'Scoped instance not found for ' + context.get_scope_iyfcq3_k$().get_id_kntnx8_k$() + ' in ' + this.get_beanDefinition_b177zg_k$().toString();
        throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString_0(message));
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  get_at8kkk_k$(context) {
    if (!equals(context.get_scope_iyfcq3_k$().get_scopeQualifier_eby6kf_k$(), this.get_beanDefinition_b177zg_k$().get_scopeQualifier_eby6kf_k$())) {
      // Inline function 'kotlin.error' call
      var message = 'Wrong Scope: trying to open instance for ' + context.get_scope_iyfcq3_k$().get_id_kntnx8_k$() + ' in ' + this.get_beanDefinition_b177zg_k$().toString();
      throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString_0(message));
    }
    var tmp = KoinPlatformTools_getInstance();
    tmp.synchronized_72old8_k$(this, ScopedInstanceFactory$get$lambda(this, context));
    var tmp0_elvis_lhs = this.values_1.get_wei43m_k$(context.get_scope_iyfcq3_k$().get_id_kntnx8_k$());
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.error' call
      var message_0 = 'Scoped instance not found for ' + context.get_scope_iyfcq3_k$().get_id_kntnx8_k$() + ' in ' + this.get_beanDefinition_b177zg_k$().toString();
      throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString_0(message_0));
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    return tmp_0;
  }
  dropAll_wm06si_k$() {
    this.values_1.clear_j9egeb_k$();
  }
  refreshInstance_9mc9vg_k$(scopeID, instance) {
    // Inline function 'kotlin.collections.set' call
    this.values_1.put_4fpzoq_k$(scopeID, instance);
  }
}
class SingleInstanceFactory extends InstanceFactory {
  constructor(beanDefinition) {
    return new.target.new_org_koin_core_instance_SingleInstanceFactory_yjawxt_k$(beanDefinition);
  }
  static new_org_koin_core_instance_SingleInstanceFactory_yjawxt_k$(beanDefinition, $box) {
    var $this = this.new_org_koin_core_instance_InstanceFactory_d44j0a_k$(beanDefinition, $box);
    $this.value_1 = null;
    return $this;
  }
  isCreated_fnj2vx_k$(context) {
    return !(this.value_1 == null);
  }
  drop_kiuzvc_k$(scope) {
    var tmp0_safe_receiver = this.get_beanDefinition_b177zg_k$().get_callbacks_8qyswr_k$().get_onClose_l3bvrk_k$();
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver(this.value_1);
    this.value_1 = null;
  }
  dropAll_wm06si_k$() {
    this.drop$default_actzlz_k$();
  }
  create_b0uy66_k$(context) {
    var tmp;
    if (this.value_1 == null) {
      tmp = super.create_b0uy66_k$(context);
    } else {
      tmp = getValue(this);
    }
    return tmp;
  }
  get_at8kkk_k$(context) {
    var tmp = KoinPlatformTools_getInstance();
    tmp.synchronized_72old8_k$(this, SingleInstanceFactory$get$lambda(this, context));
    return getValue(this);
  }
}
class Logger {
  constructor(level) {
    return new.target.new_org_koin_core_logger_Logger_dgiidp_k$(level);
  }
  static new_org_koin_core_logger_Logger_dgiidp_k$(level, $box) {
    level = level === VOID ? Level_INFO_getInstance() : level;
    var $this = createThis(this, $box);
    $this.level_1 = level;
    return $this;
  }
  set_level_e92jfv_k$(_set____db54di) {
    this.level_1 = _set____db54di;
  }
  get_level_ium7h7_k$() {
    return this.level_1;
  }
  debug_fck32h_k$(msg) {
    this.log_c6dgla_k$(Level_DEBUG_getInstance(), msg);
  }
  info_c8jb2c_k$(msg) {
    this.log_c6dgla_k$(Level_INFO_getInstance(), msg);
  }
  warn_mz9voc_k$(msg) {
    this.log_c6dgla_k$(Level_WARNING_getInstance(), msg);
  }
  error_5zor4u_k$(msg) {
    this.log_c6dgla_k$(Level_ERROR_getInstance(), msg);
  }
  isAt_nsqhkh_k$(lvl) {
    return this.level_1.compareTo_30rs7w_k$(lvl) <= 0;
  }
  log_c6dgla_k$(lvl, msg) {
    // Inline function 'org.koin.core.logger.Logger.isAt' call
    if (this.level_1.compareTo_30rs7w_k$(lvl) <= 0) {
      this.display_r45kqo_k$(lvl, msg);
    }
  }
  log_qhov5w_k$(lvl, msg) {
    // Inline function 'org.koin.core.logger.Logger.isAt' call
    if (this.level_1.compareTo_30rs7w_k$(lvl) <= 0) {
      this.display_r45kqo_k$(lvl, msg());
    }
  }
}
class EmptyLogger extends Logger {
  constructor() {
    return new.target.new_org_koin_core_logger_EmptyLogger_7mg1kl_k$();
  }
  static new_org_koin_core_logger_EmptyLogger_7mg1kl_k$($box) {
    return this.new_org_koin_core_logger_Logger_dgiidp_k$(Level_NONE_getInstance(), $box);
  }
  display_r45kqo_k$(level, msg) {
  }
}
class Level extends Enum {
  constructor(name, ordinal) {
    return new.target.new_org_koin_core_logger_Level_yxfrtc_k$(name, ordinal);
  }
  static new_org_koin_core_logger_Level_yxfrtc_k$(name, ordinal, $box) {
    return this.new_kotlin_Enum_a1ijns_k$(name, ordinal, $box);
  }
}
class KoinApplicationDslMarker {
  equals(other) {
    if (!(other instanceof KoinApplicationDslMarker))
      return false;
    other instanceof KoinApplicationDslMarker || THROW_CCE();
    return true;
  }
  hashCode() {
    return 0;
  }
  toString() {
    return '@org.koin.core.module.KoinApplicationDslMarker(' + ')';
  }
}
class KoinDslMarker {
  equals(other) {
    if (!(other instanceof KoinDslMarker))
      return false;
    other instanceof KoinDslMarker || THROW_CCE();
    return true;
  }
  hashCode() {
    return 0;
  }
  toString() {
    return '@org.koin.core.module.KoinDslMarker(' + ')';
  }
}
class Module {
  constructor(_createdAtStart) {
    return new.target.new_org_koin_core_module_Module_dxntdg_k$(_createdAtStart);
  }
  static new_org_koin_core_module_Module_dxntdg_k$(_createdAtStart, $box) {
    _createdAtStart = _createdAtStart === VOID ? false : _createdAtStart;
    var $this = createThis(this, $box);
    $this._createdAtStart_1 = _createdAtStart;
    $this.id_1 = generateId(KoinPlatformTools_getInstance());
    $this.eagerInstances_1 = LinkedHashSet.new_kotlin_collections_LinkedHashSet_bvgyjd_k$();
    $this.mappings_1 = LinkedHashMap.new_kotlin_collections_LinkedHashMap_8xehp8_k$();
    $this.scopes_1 = LinkedHashSet.new_kotlin_collections_LinkedHashSet_bvgyjd_k$();
    var tmp = $this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.includedModules_1 = ArrayList.new_kotlin_collections_ArrayList_h94ppk_k$();
    return $this;
  }
  get__createdAtStart_5di9ug_k$() {
    return this._createdAtStart_1;
  }
  get_id_kntnx8_k$() {
    return this.id_1;
  }
  set_eagerInstances_a2whaa_k$(_set____db54di) {
    this.eagerInstances_1 = _set____db54di;
  }
  get_eagerInstances_3ljm7j_k$() {
    return this.eagerInstances_1;
  }
  get_mappings_sl63f6_k$() {
    return this.mappings_1;
  }
  get_isLoaded_w81k7s_k$() {
    // Inline function 'kotlin.collections.isNotEmpty' call
    return !this.mappings_1.isEmpty_y1axqb_k$();
  }
  get_scopes_x8h8df_k$() {
    return this.scopes_1;
  }
  get_includedModules_c46mo2_k$() {
    return this.includedModules_1;
  }
  includes_gqhc2p_k$(module_0) {
    addAll(this.includedModules_1, module_0);
  }
  includes_dnzn6p_k$(module_0) {
    this.includedModules_1.addAll_4lagoh_k$(module_0);
  }
  scope_mugu2t_k$(qualifier, scopeSet) {
    // Inline function 'kotlin.apply' call
    scopeSet(ScopeDSL.new_org_koin_dsl_ScopeDSL_du1mrs_k$(qualifier, this));
    this.scopes_1.add_utx5q5_k$(qualifier);
  }
  indexPrimaryType_bfm8x4_k$(instanceFactory) {
    var def = instanceFactory.get_beanDefinition_b177zg_k$();
    var tmp0 = def.get_primaryType_gbcb1_k$();
    var tmp2 = def.get_qualifier_c4gvsv_k$();
    // Inline function 'org.koin.core.definition.indexKey' call
    var scopeQualifier = def.get_scopeQualifier_eby6kf_k$();
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder.new_kotlin_text_StringBuilder_q3um6c_k$();
    this_0.append_22ad7x_k$(getFullName(tmp0));
    this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(58));
    var tmp1_elvis_lhs = tmp2 == null ? null : tmp2.get_value_j01efc_k$();
    this_0.append_22ad7x_k$(tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs);
    this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(58));
    this_0.append_t8pm91_k$(scopeQualifier);
    var mapping = this_0.toString();
    this.saveMapping_wguhpg_k$(mapping, instanceFactory);
  }
  indexSecondaryTypes_p1wbvf_k$(instanceFactory) {
    var def = instanceFactory.get_beanDefinition_b177zg_k$();
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = def.get_secondaryTypes_du752m_k$().iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      var tmp2 = def.get_qualifier_c4gvsv_k$();
      // Inline function 'org.koin.core.definition.indexKey' call
      var scopeQualifier = def.get_scopeQualifier_eby6kf_k$();
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder.new_kotlin_text_StringBuilder_q3um6c_k$();
      this_0.append_22ad7x_k$(getFullName(element));
      this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(58));
      var tmp1_elvis_lhs = tmp2 == null ? null : tmp2.get_value_j01efc_k$();
      this_0.append_22ad7x_k$(tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs);
      this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(58));
      this_0.append_t8pm91_k$(scopeQualifier);
      var mapping = this_0.toString();
      this.saveMapping_wguhpg_k$(mapping, instanceFactory);
    }
  }
  prepareForCreationAtStart_txiz47_k$(instanceFactory) {
    this.eagerInstances_1.add_utx5q5_k$(instanceFactory);
  }
  saveMapping_wguhpg_k$(mapping, factory) {
    // Inline function 'kotlin.collections.set' call
    this.mappings_1.put_4fpzoq_k$(mapping, factory);
  }
  plus_gnzej2_k$(module_0) {
    return listOf_0([this, module_0]);
  }
  plus_rx3zjg_k$(modules) {
    return plus(listOf(this), modules);
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof Module))
      return false;
    return this.id_1 === other.id_1;
  }
  hashCode() {
    return getStringHashCode(this.id_1);
  }
}
class ParametersHolder {
  constructor(_values, useIndexedValues) {
    return new.target.new_org_koin_core_parameter_ParametersHolder_c5qp05_k$(_values, useIndexedValues);
  }
  static new_org_koin_core_parameter_ParametersHolder_c5qp05_k$(_values, useIndexedValues, $box) {
    var tmp;
    if (_values === VOID) {
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp = ArrayList.new_kotlin_collections_ArrayList_h94ppk_k$();
    } else {
      tmp = _values;
    }
    _values = tmp;
    useIndexedValues = useIndexedValues === VOID ? null : useIndexedValues;
    var $this = createThis(this, $box);
    $this._values_1 = _values;
    $this.useIndexedValues_1 = useIndexedValues;
    $this.index_1 = 0;
    return $this;
  }
  get__values_ws9qab_k$() {
    return this._values_1;
  }
  get_useIndexedValues_yl18nf_k$() {
    return this.useIndexedValues_1;
  }
  get_values_ksazhn_k$() {
    return this._values_1;
  }
  elementAt_me7q97_k$(i, clazz) {
    var tmp;
    if (i < this._values_1.get_size_woubt6_k$()) {
      tmp = this._values_1.get_c1px32_k$(i);
    } else {
      throw NoParameterFoundException.new_org_koin_core_error_NoParameterFoundException_jrlo9s_k$("Can't get injected parameter #" + i + ' from ' + this.toString() + " for type '" + getFullName(clazz) + "'");
    }
    return tmp;
  }
  set_index_69f5xp_k$(_set____db54di) {
    this.index_1 = _set____db54di;
  }
  get_index_it478p_k$() {
    return this.index_1;
  }
  get_aw1de_k$(i) {
    return this._values_1.get_c1px32_k$(i);
  }
  set_nxz5n_k$(i, t) {
    this._values_1.set_82063s_k$(i, !(t == null) ? t : THROW_CCE());
  }
  size_23och_k$() {
    return this._values_1.get_size_woubt6_k$();
  }
  isEmpty_y1axqb_k$() {
    return this._values_1.isEmpty_y1axqb_k$();
  }
  isNotEmpty_cjxbwk_k$() {
    // Inline function 'kotlin.collections.isNotEmpty' call
    return !this._values_1.isEmpty_y1axqb_k$();
  }
  insert_qzsvdt_k$(index, value) {
    this._values_1.add_dl6gt3_k$(index, value);
    return this;
  }
  add_ylbznn_k$(value) {
    this._values_1.add_utx5q5_k$(value);
    return this;
  }
  getOrNull_7uxaxe_k$(clazz) {
    var tmp;
    if (this._values_1.isEmpty_y1axqb_k$()) {
      tmp = null;
    } else {
      var tmp_0;
      switch (this.useIndexedValues_1) {
        case null:
          var tmp1_elvis_lhs = getIndexedValue(this, clazz);
          tmp_0 = tmp1_elvis_lhs == null ? getFirstValue(this, clazz) : tmp1_elvis_lhs;
          break;
        case true:
          tmp_0 = getIndexedValue(this, clazz);
          break;
        default:
          tmp_0 = getFirstValue(this, clazz);
          break;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  increaseIndex_j4oct7_k$() {
    if (this.index_1 < get_lastIndex(this._values_1)) {
      this.index_1 = this.index_1 + 1 | 0;
    }
  }
  toString() {
    return 'DefinitionParameters' + toString_0(toList_0(this._values_1));
  }
}
class Qualifier {}
class StringQualifier {
  constructor(value) {
    return new.target.new_org_koin_core_qualifier_StringQualifier_pkmgnj_k$(value);
  }
  static new_org_koin_core_qualifier_StringQualifier_pkmgnj_k$(value, $box) {
    var $this = createThis(this, $box);
    $this.value_1 = value;
    return $this;
  }
  get_value_j01efc_k$() {
    return this.value_1;
  }
  toString() {
    return this.value_1;
  }
  component1_7eebsc_k$() {
    return this.value_1;
  }
  copy_a35qlh_k$(value) {
    return StringQualifier.new_org_koin_core_qualifier_StringQualifier_pkmgnj_k$(value);
  }
  copy$default_mrados_k$(value, $super) {
    value = value === VOID ? this.value_1 : value;
    return $super === VOID ? this.copy_a35qlh_k$(value) : $super.copy_a35qlh_k$.call(this, value);
  }
  hashCode() {
    return getStringHashCode(this.value_1);
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof StringQualifier))
      return false;
    var tmp0_other_with_cast = other instanceof StringQualifier ? other : THROW_CCE();
    if (!(this.value_1 === tmp0_other_with_cast.value_1))
      return false;
    return true;
  }
}
class TypeQualifier {
  constructor(type) {
    return new.target.new_org_koin_core_qualifier_TypeQualifier_7tvhu9_k$(type);
  }
  static new_org_koin_core_qualifier_TypeQualifier_7tvhu9_k$(type, $box) {
    var $this = createThis(this, $box);
    $this.type_1 = type;
    $this.value_1 = getFullName($this.type_1);
    return $this;
  }
  get_type_wovaf7_k$() {
    return this.type_1;
  }
  get_value_j01efc_k$() {
    return this.value_1;
  }
  toString() {
    return this.value_1;
  }
  equals(other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof TypeQualifier))
      THROW_CCE();
    if (!(this.value_1 === other.value_1))
      return false;
    return true;
  }
  hashCode() {
    return getStringHashCode(this.value_1);
  }
}
class InstanceRegistry {
  constructor(_koin) {
    return new.target.new_org_koin_core_registry_InstanceRegistry_rq5ryi_k$(_koin);
  }
  static new_org_koin_core_registry_InstanceRegistry_rq5ryi_k$(_koin, $box) {
    var $this = createThis(this, $box);
    $this._koin_1 = _koin;
    $this._instances_1 = KoinPlatformTools_getInstance().safeHashMap_vw883b_k$();
    $this.eagerInstances_1 = KoinPlatformTools_getInstance().safeHashMap_vw883b_k$();
    return $this;
  }
  get__koin_inkklb_k$() {
    return this._koin_1;
  }
  get_instances_8zuh1x_k$() {
    return this._instances_1;
  }
  loadModules_ti383p_k$(modules, allowOverride) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = modules.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      loadModule(this, element, allowOverride);
      addAllEagerInstances(this, element);
    }
  }
  createAllEagerInstances_rtby46_k$() {
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = this.eagerInstances_1.get_values_ksazhn_k$();
    var tmp$ret$0 = copyToArray(this_0);
    var instances = arrayListOf(tmp$ret$0.slice());
    this.eagerInstances_1.clear_j9egeb_k$();
    createEagerInstances(this, instances);
  }
  saveMapping_8myqyh_k$(allowOverride, mapping, factory, logWarning) {
    if (this._instances_1.get_wei43m_k$(mapping) == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      if (!allowOverride) {
        overrideError(factory, mapping);
      } else if (logWarning) {
        this._koin_1.get_logger_g9gejd_k$().warn_mz9voc_k$("(+) override index '" + mapping + "' -> '" + factory.get_beanDefinition_b177zg_k$().toString() + "'");
      }
    }
    this._koin_1.get_logger_g9gejd_k$().debug_fck32h_k$("(+) index '" + mapping + "' -> '" + factory.get_beanDefinition_b177zg_k$().toString() + "'");
    // Inline function 'kotlin.collections.set' call
    this._instances_1.put_4fpzoq_k$(mapping, factory);
  }
  saveMapping$default_974k59_k$(allowOverride, mapping, factory, logWarning, $super) {
    logWarning = logWarning === VOID ? true : logWarning;
    var tmp;
    if ($super === VOID) {
      this.saveMapping_8myqyh_k$(allowOverride, mapping, factory, logWarning);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.saveMapping_8myqyh_k$.call(this, allowOverride, mapping, factory, logWarning);
    }
    return tmp;
  }
  resolveDefinition_labx91_k$(clazz, qualifier, scopeQualifier) {
    // Inline function 'org.koin.core.definition.indexKey' call
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder.new_kotlin_text_StringBuilder_q3um6c_k$();
    this_0.append_22ad7x_k$(getFullName(clazz));
    this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(58));
    var tmp1_elvis_lhs = qualifier == null ? null : qualifier.get_value_j01efc_k$();
    this_0.append_22ad7x_k$(tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs);
    this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(58));
    this_0.append_t8pm91_k$(scopeQualifier);
    var indexKey = this_0.toString();
    return this._instances_1.get_wei43m_k$(indexKey);
  }
  resolveInstance_pi5lm9_k$(qualifier, clazz, scopeQualifier, instanceContext) {
    var tmp0_safe_receiver = this.resolveDefinition_labx91_k$(clazz, qualifier, scopeQualifier);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_at8kkk_k$(instanceContext);
  }
  dropScopeInstances_gitdju_k$(scope) {
    // Inline function 'kotlin.collections.filterIsInstance' call
    var tmp0 = this._instances_1.get_values_ksazhn_k$();
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var destination = ArrayList.new_kotlin_collections_ArrayList_h94ppk_k$();
    var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      if (element instanceof ScopedInstanceFactory) {
        destination.add_utx5q5_k$(element);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_0 = destination.iterator_jk1svi_k$();
    while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
      var element_0 = _iterator__ex2g4s_0.next_20eer_k$();
      element_0.drop_kiuzvc_k$(scope);
    }
  }
  close_w9j6zn_k$() {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this._instances_1.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'kotlin.collections.component2' call
      var factory = element.get_value_j01efc_k$();
      factory.dropAll_wm06si_k$();
    }
    this._instances_1.clear_j9egeb_k$();
  }
  getAll_jbyq32_k$(clazz, instanceContext) {
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = this._instances_1.get_values_ksazhn_k$();
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList.new_kotlin_collections_ArrayList_h94ppk_k$();
    var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      if (equals(element.get_beanDefinition_b177zg_k$().get_scopeQualifier_eby6kf_k$(), instanceContext.get_scope_iyfcq3_k$().get_scopeQualifier_eby6kf_k$()) && (element.get_beanDefinition_b177zg_k$().get_primaryType_gbcb1_k$().equals(clazz) || element.get_beanDefinition_b177zg_k$().get_secondaryTypes_du752m_k$().contains_aljjnj_k$(clazz))) {
        destination.add_utx5q5_k$(element);
      }
    }
    // Inline function 'kotlin.collections.mapNotNull' call
    var tmp0_0 = distinct(destination);
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var destination_0 = ArrayList.new_kotlin_collections_ArrayList_h94ppk_k$();
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_0 = tmp0_0.iterator_jk1svi_k$();
    while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
      var element_0 = _iterator__ex2g4s_0.next_20eer_k$();
      var tmp0_safe_receiver = element_0.get_at8kkk_k$(instanceContext);
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        destination_0.add_utx5q5_k$(tmp0_safe_receiver);
      }
    }
    return destination_0;
  }
  unloadModules_vtlbs7_k$(modules) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = modules.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      unloadModule(this, element);
    }
  }
  size_23och_k$() {
    return this._instances_1.get_size_woubt6_k$();
  }
}
class PropertyRegistry {
  constructor(_koin) {
    return new.target.new_org_koin_core_registry_PropertyRegistry_7hjmfe_k$(_koin);
  }
  static new_org_koin_core_registry_PropertyRegistry_7hjmfe_k$(_koin, $box) {
    var $this = createThis(this, $box);
    $this._koin_1 = _koin;
    $this._values_1 = KoinPlatformTools_getInstance().safeHashMap_vw883b_k$();
    return $this;
  }
  get__koin_y6qn0a_k$() {
    return this._koin_1;
  }
  saveProperties_qx721n_k$(properties) {
    this._koin_1.get_logger_g9gejd_k$().debug_fck32h_k$('load ' + properties.get_size_woubt6_k$() + ' properties');
    this._values_1.putAll_wgg6cj_k$(properties);
  }
  saveProperty_qwjh80_k$(key, value) {
    // Inline function 'kotlin.collections.set' call
    this._values_1.put_4fpzoq_k$(key, value);
  }
  deleteProperty_94w4qe_k$(key) {
    this._values_1.remove_gppy8k_k$(key);
  }
  getProperty_queixn_k$(key) {
    return this._values_1.get_wei43m_k$(key);
  }
  close_yn9xrc_k$() {
    this._values_1.clear_j9egeb_k$();
  }
}
class Companion_1 {
  constructor() {
    return new.target.new_org_koin_core_registry_ScopeRegistry_Companion_5dbf1n_k$();
  }
  static new_org_koin_core_registry_ScopeRegistry_Companion_5dbf1n_k$($box) {
    var $this = createThis(this, $box);
    Companion_instance_1 = $this;
    $this.ROOT_SCOPE_ID_1 = '_root_';
    $this.rootScopeQualifier_1 = _q('_root_');
    return $this;
  }
  get_rootScopeQualifier_ohxkho_k$() {
    return this.rootScopeQualifier_1;
  }
}
class ScopeRegistry {
  constructor(_koin) {
    return new.target.new_org_koin_core_registry_ScopeRegistry_iimw1u_k$(_koin);
  }
  static new_org_koin_core_registry_ScopeRegistry_iimw1u_k$(_koin, $box) {
    Companion_getInstance_2();
    var $this = createThis(this, $box);
    $this._koin_1 = _koin;
    $this._scopeDefinitions_1 = KoinPlatformTools_getInstance().safeSet_3nxu5a_k$();
    $this._scopes_1 = KoinPlatformTools_getInstance().safeHashMap_vw883b_k$();
    $this.rootScope_1 = Scope.new_org_koin_core_scope_Scope_yjwo5m_k$(Companion_getInstance_2().rootScopeQualifier_1, '_root_', true, $this._koin_1);
    $this._scopeDefinitions_1.add_utx5q5_k$($this.rootScope_1.get_scopeQualifier_eby6kf_k$());
    var tmp0 = $this._scopes_1;
    var tmp2 = $this.rootScope_1.get_id_kntnx8_k$();
    // Inline function 'kotlin.collections.set' call
    var value = $this.rootScope_1;
    tmp0.put_4fpzoq_k$(tmp2, value);
    return $this;
  }
  get_scopeDefinitions_dqva97_k$() {
    return this._scopeDefinitions_1;
  }
  get_rootScope_60k1zr_k$() {
    return this.rootScope_1;
  }
  getScopeOrNull_jhw04p_k$(scopeId) {
    return this._scopes_1.get_wei43m_k$(scopeId);
  }
  createScope_6hcjnw_k$(scopeId, qualifier, source) {
    this._koin_1.get_logger_g9gejd_k$().debug_fck32h_k$("| (+) Scope - id:'" + scopeId + "' q:'" + toString_0(qualifier) + "'");
    if (!this._scopeDefinitions_1.contains_aljjnj_k$(qualifier)) {
      this._koin_1.get_logger_g9gejd_k$().debug_fck32h_k$("| Scope '" + toString_0(qualifier) + "' not defined. Creating it ...");
      this._scopeDefinitions_1.add_utx5q5_k$(qualifier);
    }
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    var this_0 = this._scopes_1;
    if ((isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).containsKey_aw81wo_k$(scopeId)) {
      throw ScopeAlreadyCreatedException.new_org_koin_core_error_ScopeAlreadyCreatedException_93vebs_k$("Scope with id '" + scopeId + "' is already created");
    }
    var scope = Scope.new_org_koin_core_scope_Scope_yjwo5m_k$(qualifier, scopeId, VOID, this._koin_1);
    if (source == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this._koin_1.get_logger_g9gejd_k$().debug_fck32h_k$("|- Scope source set id:'" + scopeId + "' -> " + toString(source));
      scope.set_sourceValue_gsr9g6_k$(source);
    }
    scope.linkTo_7k79z5_k$([this.rootScope_1]);
    // Inline function 'kotlin.collections.set' call
    this._scopes_1.put_4fpzoq_k$(scopeId, scope);
    return scope;
  }
  createScope$default_b7n0ch_k$(scopeId, qualifier, source, $super) {
    source = source === VOID ? null : source;
    return $super === VOID ? this.createScope_6hcjnw_k$(scopeId, qualifier, source) : $super.createScope_6hcjnw_k$.call(this, scopeId, qualifier, source);
  }
  deleteScope_bx616i_k$(scopeId) {
    var tmp0_safe_receiver = this._scopes_1.get_wei43m_k$(scopeId);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this.deleteScope_7pq4hi_k$(tmp0_safe_receiver);
    }
  }
  deleteScope_7pq4hi_k$(scope) {
    this._koin_1.get_instanceRegistry_jmeu6d_k$().dropScopeInstances_gitdju_k$(scope);
    this._scopes_1.remove_gppy8k_k$(scope.get_id_kntnx8_k$());
  }
  close_w9j6zn_k$() {
    closeAllScopes(this);
    this._scopes_1.clear_j9egeb_k$();
    this._scopeDefinitions_1.clear_j9egeb_k$();
  }
  loadScopes_dez92v_k$(modules) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = modules.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      loadModule_0(this, element);
    }
  }
}
class Scope {
  constructor(scopeQualifier, id, isRoot, _koin) {
    return new.target.new_org_koin_core_scope_Scope_yjwo5m_k$(scopeQualifier, id, isRoot, _koin);
  }
  static new_org_koin_core_scope_Scope_yjwo5m_k$(scopeQualifier, id, isRoot, _koin, $box) {
    isRoot = isRoot === VOID ? false : isRoot;
    var $this = createThis(this, $box);
    $this.scopeQualifier_1 = scopeQualifier;
    $this.id_1 = id;
    $this.isRoot_1 = isRoot;
    $this._koin_1 = _koin;
    $this.linkedScopes_1 = LinkedHashSet.new_kotlin_collections_LinkedHashSet_bvgyjd_k$();
    $this.sourceValue_1 = null;
    $this._callbacks_1 = LinkedHashSet.new_kotlin_collections_LinkedHashSet_bvgyjd_k$();
    $this.parameterStack_1 = null;
    $this._closed_1 = false;
    return $this;
  }
  get_scopeQualifier_eby6kf_k$() {
    return this.scopeQualifier_1;
  }
  get_id_kntnx8_k$() {
    return this.id_1;
  }
  get_isRoot_ew5h6d_k$() {
    return this.isRoot_1;
  }
  get__koin_y6qn0a_k$() {
    return this._koin_1;
  }
  set_sourceValue_gsr9g6_k$(_set____db54di) {
    this.sourceValue_1 = _set____db54di;
  }
  get_sourceValue_cciw19_k$() {
    return this.sourceValue_1;
  }
  get_closed_byjrzp_k$() {
    return this._closed_1;
  }
  isNotClosed_x1h9n9_k$() {
    return !this.get_closed_byjrzp_k$();
  }
  get_logger_g9gejd_k$() {
    return this._koin_1.get_logger_g9gejd_k$();
  }
  create_671r0r_k$(links) {
    this.linkedScopes_1.addAll_4lagoh_k$(links);
  }
  linkTo_7k79z5_k$(scopes) {
    if (!this.isRoot_1) {
      addAll(this.linkedScopes_1, scopes);
    } else {
      // Inline function 'kotlin.error' call
      var message = "Can't add scope link to a root scope";
      throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString_0(message));
    }
  }
  unlink_cddh9_k$(scopes) {
    if (!this.isRoot_1) {
      removeAll(this.linkedScopes_1, scopes);
    } else {
      // Inline function 'kotlin.error' call
      var message = "Can't remove scope link to a root scope";
      throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString_0(message));
    }
  }
  getOrNull_o6mr2b_k$(clazz, qualifier, parameters) {
    var tmp;
    try {
      tmp = this.get_80ko8d_k$(clazz, qualifier, parameters);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof ClosedScopeException) {
        var e = $p;
        this._koin_1.get_logger_g9gejd_k$().debug_fck32h_k$('* Scope closed - no instance found for ' + getFullName(clazz) + ' on scope ' + this.toString());
        tmp_0 = null;
      } else {
        if ($p instanceof NoDefinitionFoundException) {
          var e_0 = $p;
          this._koin_1.get_logger_g9gejd_k$().debug_fck32h_k$("* No instance found for type '" + getFullName(clazz) + "' on scope '" + this.toString() + "'");
          tmp_0 = null;
        } else {
          throw $p;
        }
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  getOrNull$default_g0m78f_k$(clazz, qualifier, parameters, $super) {
    qualifier = qualifier === VOID ? null : qualifier;
    parameters = parameters === VOID ? null : parameters;
    return $super === VOID ? this.getOrNull_o6mr2b_k$(clazz, qualifier, parameters) : $super.getOrNull_o6mr2b_k$.call(this, clazz, qualifier, parameters);
  }
  getOrNull_lnkgdx_k$(ctx) {
    var tmp;
    try {
      tmp = get(this, ctx.get_clazz_ips3zj_k$(), ctx.get_qualifier_c4gvsv_k$(), ctx.get_parameters_cl4rkd_k$());
    } catch ($p) {
      var tmp_0;
      if ($p instanceof ClosedScopeException) {
        var e = $p;
        this._koin_1.get_logger_g9gejd_k$().debug_fck32h_k$('* Scope closed - no instance found for ' + getFullName(ctx.get_clazz_ips3zj_k$()) + ' on scope ' + this.toString());
        tmp_0 = null;
      } else {
        if ($p instanceof NoDefinitionFoundException) {
          var e_0 = $p;
          this._koin_1.get_logger_g9gejd_k$().debug_fck32h_k$("* No instance found for type '" + getFullName(ctx.get_clazz_ips3zj_k$()) + "' on scope '" + this.toString() + "'");
          tmp_0 = null;
        } else {
          throw $p;
        }
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  get_80ko8d_k$(clazz, qualifier, parameters) {
    return resolveWithOptionalLogging(this, clazz, qualifier, parameters == null ? null : parameters());
  }
  get$default_5e2jih_k$(clazz, qualifier, parameters, $super) {
    qualifier = qualifier === VOID ? null : qualifier;
    parameters = parameters === VOID ? null : parameters;
    return $super === VOID ? this.get_80ko8d_k$(clazz, qualifier, parameters) : $super.get_80ko8d_k$.call(this, clazz, qualifier, parameters);
  }
  getKoin_18vqwx_k$() {
    return this._koin_1;
  }
  getScope_tojh0k_k$(scopeID) {
    return this.getKoin_18vqwx_k$().getScope_tojh0k_k$(scopeID);
  }
  registerCallback_uh4cbl_k$(callback) {
    // Inline function 'kotlin.collections.plusAssign' call
    this._callbacks_1.add_utx5q5_k$(callback);
  }
  getAll_ad5k2r_k$(clazz) {
    var context = ResolutionContext.new_org_koin_core_instance_ResolutionContext_pd1goj_k$(this._koin_1.get_logger_g9gejd_k$(), this, clazz);
    var tmp = this._koin_1.get_instanceRegistry_jmeu6d_k$().getAll_jbyq32_k$(clazz, context);
    // Inline function 'kotlin.collections.flatMap' call
    var tmp0 = this.linkedScopes_1;
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination = ArrayList.new_kotlin_collections_ArrayList_h94ppk_k$();
    var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      var list = element.getAll_ad5k2r_k$(clazz);
      addAll_0(destination, list);
    }
    return plus(tmp, destination);
  }
  getProperty_c8t5i6_k$(key, defaultValue) {
    return this._koin_1.getProperty_c8t5i6_k$(key, defaultValue);
  }
  getPropertyOrNull_qqvsxy_k$(key) {
    return this._koin_1.getProperty_uqr2j4_k$(key);
  }
  getProperty_uqr2j4_k$(key) {
    var tmp0_elvis_lhs = this._koin_1.getProperty_uqr2j4_k$(key);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw MissingPropertyException.new_org_koin_core_error_MissingPropertyException_oumcqe_k$("Property '" + key + "' not found");
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  close_yn9xrc_k$() {
    var tmp = KoinPlatformTools_getInstance();
    return tmp.synchronized_72old8_k$(this, Scope$close$lambda(this));
  }
  toString() {
    return "['" + this.id_1 + "']";
  }
}
class ScopeCallback {}
class ScopeDSL {
  constructor(scopeQualifier, module_0) {
    return new.target.new_org_koin_dsl_ScopeDSL_du1mrs_k$(scopeQualifier, module_0);
  }
  static new_org_koin_dsl_ScopeDSL_du1mrs_k$(scopeQualifier, module_0, $box) {
    var $this = createThis(this, $box);
    $this.scopeQualifier_1 = scopeQualifier;
    $this.module_1 = module_0;
    return $this;
  }
  get_scopeQualifier_eby6kf_k$() {
    return this.scopeQualifier_1;
  }
  get_module_gqgeid_k$() {
    return this.module_1;
  }
}
class GlobalContext {
  constructor() {
    return new.target.new_org_koin_core_context_GlobalContext_emvtdo_k$();
  }
  static new_org_koin_core_context_GlobalContext_emvtdo_k$($box) {
    var $this = createThis(this, $box);
    GlobalContext_instance = $this;
    $this._koin_1 = null;
    return $this;
  }
  get_26vq_k$() {
    var tmp0_elvis_lhs = this._koin_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.error' call
      var message = 'KoinApplication has not been started';
      throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString_0(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  getOrNull_bcsbgg_k$() {
    return this._koin_1;
  }
  stopKoin_twq61x_k$() {
    var tmp0_safe_receiver = this._koin_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.close_yn9xrc_k$();
    }
    this._koin_1 = null;
  }
  startKoin_cri6n9_k$(koinApplication) {
    register(this, koinApplication);
    return koinApplication;
  }
  startKoin_5fxk64_k$(appDeclaration) {
    var koinApplication = Companion_getInstance_0().init_1xdsg_k$();
    register(this, koinApplication);
    appDeclaration(koinApplication);
    return koinApplication;
  }
  loadKoinModules_pgeopx_k$(module_0, createEagerInstances) {
    this.get_26vq_k$().loadModules$default_98npob_k$(listOf(module_0), VOID, createEagerInstances);
  }
  loadKoinModules_vsyvvn_k$(modules, createEagerInstances) {
    this.get_26vq_k$().loadModules$default_98npob_k$(modules, VOID, createEagerInstances);
  }
  unloadKoinModules_djc75l_k$(module_0) {
    this.get_26vq_k$().unloadModules_7hifhu_k$(listOf(module_0));
  }
  unloadKoinModules_qk68bb_k$(modules) {
    this.get_26vq_k$().unloadModules_7hifhu_k$(modules);
  }
}
class PrintLogger extends Logger {
  constructor(level) {
    return new.target.new_org_koin_core_logger_PrintLogger_lu3cqg_k$(level);
  }
  static new_org_koin_core_logger_PrintLogger_lu3cqg_k$(level, $box) {
    level = level === VOID ? Level_INFO_getInstance() : level;
    return this.new_org_koin_core_logger_Logger_dgiidp_k$(level, $box);
  }
  display_r45kqo_k$(level, msg) {
    println('[' + level.toString() + '] [Koin] ' + msg);
  }
}
class KoinPlatformTools {
  constructor() {
    return new.target.new_org_koin_mp_KoinPlatformTools_kl9qsy_k$();
  }
  static new_org_koin_mp_KoinPlatformTools_kl9qsy_k$($box) {
    var $this = createThis(this, $box);
    KoinPlatformTools_instance = $this;
    return $this;
  }
  getStackTrace_pop6za_k$(e) {
    return e.toString() + toString_0(split(Exception.new_kotlin_Exception_y0z7co_k$().toString(), ['\n']));
  }
  getClassName_sthbcr_k$(kClass) {
    var tmp0_elvis_lhs = kClass.get_simpleName_r6f8py_k$();
    return tmp0_elvis_lhs == null ? getKClassDefaultName(this, kClass) : tmp0_elvis_lhs;
  }
  getClassFullNameOrNull_o5jqfo_k$(kClass) {
    return kClass.get_simpleName_r6f8py_k$();
  }
  defaultLazyMode_cannh4_k$() {
    return LazyThreadSafetyMode_NONE_getInstance();
  }
  defaultLogger_loj8wr_k$(level) {
    return PrintLogger.new_org_koin_core_logger_PrintLogger_lu3cqg_k$(level);
  }
  defaultLogger$default_zbbg1g_k$(level, $super) {
    level = level === VOID ? Level_INFO_getInstance() : level;
    return $super === VOID ? this.defaultLogger_loj8wr_k$(level) : $super.defaultLogger_loj8wr_k$.call(this, level);
  }
  defaultContext_m5e9ci_k$() {
    return GlobalContext_getInstance();
  }
  synchronized_72old8_k$(lock, block) {
    return block();
  }
  safeHashMap_vw883b_k$() {
    return ConcurrentMutableMap.new_co_touchlab_stately_collections_ConcurrentMutableMap_jc5ej2_k$();
  }
  safeSet_3nxu5a_k$() {
    // Inline function 'kotlin.collections.mutableSetOf' call
    return LinkedHashSet.new_kotlin_collections_LinkedHashSet_bvgyjd_k$();
  }
}
//endregion
function _set_logger__t1fpfd($this, _set____db54di) {
  $this.logger_1 = _set____db54di;
}
function _set_allowOverride__dpyqb4($this, _set____db54di) {
  $this.allowOverride_1 = _set____db54di;
}
function _get_allowOverride__1hss78($this) {
  return $this.allowOverride_1;
}
function loadModules($this, modules) {
  $this.koin_1.loadModules_wryunp_k$(modules, $this.allowOverride_1, false);
}
var Companion_instance;
function Companion_getInstance_0() {
  if (Companion_instance === VOID)
    Companion.new_org_koin_core_KoinApplication_Companion_sxpwd7_k$();
  return Companion_instance;
}
function getScopeId(_this__u8e3s4) {
  return getFullName(getKClassFromExpression(_this__u8e3s4)) + '@' + hashCode(_this__u8e3s4);
}
function getScopeName(_this__u8e3s4) {
  return TypeQualifier.new_org_koin_core_qualifier_TypeQualifier_7tvhu9_k$(getKClassFromExpression(_this__u8e3s4));
}
function startKoin(appDeclaration) {
  return KoinPlatformTools_getInstance().defaultContext_m5e9ci_k$().startKoin_5fxk64_k$(appDeclaration);
}
function BeanDefinition$toString$lambda(it) {
  return getFullName(it);
}
function indexKey(clazz, typeQualifier, scopeQualifier) {
  // Inline function 'kotlin.text.buildString' call
  // Inline function 'kotlin.apply' call
  var this_0 = StringBuilder.new_kotlin_text_StringBuilder_q3um6c_k$();
  this_0.append_22ad7x_k$(getFullName(clazz));
  this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(58));
  var tmp1_elvis_lhs = typeQualifier == null ? null : typeQualifier.get_value_j01efc_k$();
  this_0.append_22ad7x_k$(tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs);
  this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(58));
  this_0.append_t8pm91_k$(scopeQualifier);
  return this_0.toString();
}
var static_init_called;
function static_init() {
  if (static_init_called)
    return Unit_getInstance();
  static_init_called = true;
  Kind_Singleton_instance = Kind.new_org_koin_core_definition_Kind_82m1jp_k$('Singleton', 0);
  Kind_Factory_instance = Kind.new_org_koin_core_definition_Kind_82m1jp_k$('Factory', 1);
  Kind_Scoped_instance = Kind.new_org_koin_core_definition_Kind_82m1jp_k$('Scoped', 2);
}
var Kind_Singleton_instance;
var Kind_Factory_instance;
var Kind_Scoped_instance;
function values() {
  static_init();
  return [Kind_Singleton_getInstance(), Kind_Factory_getInstance(), Kind_Scoped_getInstance()];
}
function valueOf(value) {
  static_init();
  switch (value) {
    case 'Singleton':
      return Kind_Singleton_getInstance();
    case 'Factory':
      return Kind_Factory_getInstance();
    case 'Scoped':
      return Kind_Scoped_getInstance();
    default:
      THROW_IAE('No enum constant org.koin.core.definition.Kind.' + value);
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
function Kind_Singleton_getInstance() {
  static_init();
  return Kind_Singleton_instance;
}
function Kind_Factory_getInstance() {
  static_init();
  return Kind_Factory_instance;
}
function Kind_Scoped_getInstance() {
  static_init();
  return Kind_Scoped_instance;
}
var Companion_instance_0;
function Companion_getInstance_1() {
  if (Companion_instance_0 === VOID)
    Companion_0.new_org_koin_core_instance_InstanceFactory_Companion_368rcb_k$();
  return Companion_instance_0;
}
function _set_values__uvbruz($this, _set____db54di) {
  $this.values_1 = _set____db54di;
}
function _get_values__tel787($this) {
  return $this.values_1;
}
function ScopedInstanceFactory$get$lambda(this$0, $context) {
  return () => {
    var tmp;
    if (!this$0.isCreated_fnj2vx_k$($context)) {
      var tmp0 = this$0.values_1;
      var tmp2 = $context.get_scope_iyfcq3_k$().get_id_kntnx8_k$();
      // Inline function 'kotlin.collections.set' call
      var value = this$0.create_b0uy66_k$($context);
      tmp0.put_4fpzoq_k$(tmp2, value);
      tmp = Unit_getInstance();
    }
    return Unit_getInstance();
  };
}
function _set_value__lx0xdg($this, _set____db54di) {
  $this.value_1 = _set____db54di;
}
function _get_value__a43j40($this) {
  return $this.value_1;
}
function getValue($this) {
  var tmp0_elvis_lhs = $this.value_1;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    // Inline function 'kotlin.error' call
    var message = "Single instance created couldn't return value";
    throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString_0(message));
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
}
function SingleInstanceFactory$get$lambda(this$0, $context) {
  return () => {
    var tmp;
    if (!this$0.isCreated_fnj2vx_k$($context)) {
      this$0.value_1 = this$0.create_b0uy66_k$($context);
      tmp = Unit_getInstance();
    }
    return Unit_getInstance();
  };
}
var static_init_called_0;
function static_init_0() {
  if (static_init_called_0)
    return Unit_getInstance();
  static_init_called_0 = true;
  Level_DEBUG_instance = Level.new_org_koin_core_logger_Level_yxfrtc_k$('DEBUG', 0);
  Level_INFO_instance = Level.new_org_koin_core_logger_Level_yxfrtc_k$('INFO', 1);
  Level_WARNING_instance = Level.new_org_koin_core_logger_Level_yxfrtc_k$('WARNING', 2);
  Level_ERROR_instance = Level.new_org_koin_core_logger_Level_yxfrtc_k$('ERROR', 3);
  Level_NONE_instance = Level.new_org_koin_core_logger_Level_yxfrtc_k$('NONE', 4);
}
var Level_DEBUG_instance;
var Level_INFO_instance;
var Level_WARNING_instance;
var Level_ERROR_instance;
var Level_NONE_instance;
function values_0() {
  static_init_0();
  return [Level_DEBUG_getInstance(), Level_INFO_getInstance(), Level_WARNING_getInstance(), Level_ERROR_getInstance(), Level_NONE_getInstance()];
}
function valueOf_0(value) {
  static_init_0();
  switch (value) {
    case 'DEBUG':
      return Level_DEBUG_getInstance();
    case 'INFO':
      return Level_INFO_getInstance();
    case 'WARNING':
      return Level_WARNING_getInstance();
    case 'ERROR':
      return Level_ERROR_getInstance();
    case 'NONE':
      return Level_NONE_getInstance();
    default:
      THROW_IAE('No enum constant org.koin.core.logger.Level.' + value);
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
function Level_DEBUG_getInstance() {
  static_init_0();
  return Level_DEBUG_instance;
}
function Level_INFO_getInstance() {
  static_init_0();
  return Level_INFO_instance;
}
function Level_WARNING_getInstance() {
  static_init_0();
  return Level_WARNING_instance;
}
function Level_ERROR_getInstance() {
  static_init_0();
  return Level_ERROR_instance;
}
function Level_NONE_getInstance() {
  static_init_0();
  return Level_NONE_instance;
}
function flatten(modules) {
  // Inline function 'kotlin.collections.linkedSetOf' call
  var flatten = LinkedHashSet.new_kotlin_collections_LinkedHashSet_bvgyjd_k$();
  var stack = ArrayDeque.new_kotlin_collections_ArrayDeque_559t8x_k$(asReversed(modules));
  $l$loop_0: while (true) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!!stack.isEmpty_y1axqb_k$()) {
      break $l$loop_0;
    }
    var current = stack.removeLast_i5wx8a_k$();
    if (!flatten.add_utx5q5_k$(current)) {
      continue $l$loop_0;
    }
    var _iterator__ex2g4s = current.includedModules_1.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var module_0 = _iterator__ex2g4s.next_20eer_k$();
      if (!flatten.contains_aljjnj_k$(module_0)) {
        // Inline function 'kotlin.collections.plusAssign' call
        stack.add_utx5q5_k$(module_0);
      }
    }
  }
  return flatten;
}
function overrideError(factory, mapping) {
  throw DefinitionOverrideException.new_org_koin_core_error_DefinitionOverrideException_gtqpz4_k$('Already existing definition for ' + factory.get_beanDefinition_b177zg_k$().toString() + ' at ' + mapping);
}
function getFirstValue($this, clazz) {
  var tmp0 = $this._values_1;
  var tmp$ret$0;
  $l$block: {
    // Inline function 'kotlin.collections.firstOrNull' call
    var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      if (clazz.isInstance_6tn68w_k$(element)) {
        tmp$ret$0 = element;
        break $l$block;
      }
    }
    tmp$ret$0 = null;
  }
  return tmp$ret$0;
}
function getIndexedValue($this, clazz) {
  // Inline function 'kotlin.takeIf' call
  var this_0 = $this._values_1.get_c1px32_k$($this.index_1);
  var tmp;
  if (clazz.isInstance_6tn68w_k$(this_0)) {
    tmp = this_0;
  } else {
    tmp = null;
  }
  var currentValue = tmp;
  if (!(currentValue == null)) {
    $this.increaseIndex_j4oct7_k$();
  }
  return currentValue;
}
function emptyParametersHolder() {
  return ParametersHolder.new_org_koin_core_parameter_ParametersHolder_c5qp05_k$();
}
function _q(name) {
  return StringQualifier.new_org_koin_core_qualifier_StringQualifier_pkmgnj_k$(name);
}
function named(name) {
  return StringQualifier.new_org_koin_core_qualifier_StringQualifier_pkmgnj_k$(name);
}
function _get__instances__1pxuuk($this) {
  return $this._instances_1;
}
function _get_eagerInstances__e0lc9n($this) {
  return $this.eagerInstances_1;
}
function addAllEagerInstances($this, module_0) {
  // Inline function 'kotlin.collections.forEach' call
  var _iterator__ex2g4s = module_0.get_eagerInstances_3ljm7j_k$().iterator_jk1svi_k$();
  while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
    var element = _iterator__ex2g4s.next_20eer_k$();
    var tmp0 = $this.eagerInstances_1;
    // Inline function 'kotlin.collections.set' call
    var key = element.get_beanDefinition_b177zg_k$().hashCode();
    tmp0.put_4fpzoq_k$(key, element);
  }
}
function loadModule($this, module_0, allowOverride) {
  // Inline function 'kotlin.collections.forEach' call
  // Inline function 'kotlin.collections.iterator' call
  var _iterator__ex2g4s = module_0.get_mappings_sl63f6_k$().get_entries_p20ztl_k$().iterator_jk1svi_k$();
  while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
    var element = _iterator__ex2g4s.next_20eer_k$();
    // Inline function 'kotlin.collections.component1' call
    var mapping = element.get_key_18j28a_k$();
    // Inline function 'kotlin.collections.component2' call
    var factory = element.get_value_j01efc_k$();
    $this.saveMapping$default_974k59_k$(allowOverride, mapping, factory);
  }
}
function createEagerInstances($this, instances) {
  var defaultContext = ResolutionContext.new_org_koin_core_instance_ResolutionContext_pd1goj_k$($this._koin_1.get_logger_g9gejd_k$(), $this._koin_1.get_scopeRegistry_7zu3y0_k$().get_rootScope_60k1zr_k$(), getKClass(NoClass));
  // Inline function 'kotlin.collections.forEach' call
  var _iterator__ex2g4s = instances.iterator_jk1svi_k$();
  while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
    var element = _iterator__ex2g4s.next_20eer_k$();
    element.get_at8kkk_k$(defaultContext);
  }
}
function unloadModule($this, module_0) {
  // Inline function 'kotlin.collections.forEach' call
  var _iterator__ex2g4s = module_0.get_mappings_sl63f6_k$().get_keys_wop4xp_k$().iterator_jk1svi_k$();
  while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
    var element = _iterator__ex2g4s.next_20eer_k$();
    var tmp0_safe_receiver = $this._instances_1.get_wei43m_k$(element);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.dropAll_wm06si_k$();
    }
    $this._instances_1.remove_gppy8k_k$(element);
  }
}
function _get__values__6yksts($this) {
  return $this._values_1;
}
function _get_ROOT_SCOPE_ID__69ax66($this) {
  return $this.ROOT_SCOPE_ID_1;
}
function _get__koin__kul7yv($this) {
  return $this._koin_1;
}
function _get__scopeDefinitions__3phb96($this) {
  return $this._scopeDefinitions_1;
}
function _get__scopes__yy5frn($this) {
  return $this._scopes_1;
}
function closeAllScopes($this) {
  // Inline function 'kotlin.collections.forEach' call
  var _iterator__ex2g4s = toList_0($this._scopes_1.get_values_ksazhn_k$()).iterator_jk1svi_k$();
  while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
    var element = _iterator__ex2g4s.next_20eer_k$();
    element.close_yn9xrc_k$();
  }
}
function loadModule_0($this, module_0) {
  $this._scopeDefinitions_1.addAll_4lagoh_k$(module_0.get_scopes_x8h8df_k$());
}
var Companion_instance_1;
function Companion_getInstance_2() {
  if (Companion_instance_1 === VOID)
    Companion_1.new_org_koin_core_registry_ScopeRegistry_Companion_5dbf1n_k$();
  return Companion_instance_1;
}
function _get_linkedScopes__komjf1($this) {
  return $this.linkedScopes_1;
}
function _get__callbacks__jvmpss($this) {
  return $this._callbacks_1;
}
function _set_parameterStack__x86rmw($this, _set____db54di) {
  $this.parameterStack_1 = _set____db54di;
}
function _get_parameterStack__7p3blg($this) {
  return $this.parameterStack_1;
}
function _set__closed__rya7c6($this, _set____db54di) {
  $this._closed_1 = _set____db54di;
}
function _get__closed__hglk9y($this) {
  return $this._closed_1;
}
function get($this, clazz, qualifier, parameters) {
  qualifier = qualifier === VOID ? null : qualifier;
  parameters = parameters === VOID ? null : parameters;
  return resolveWithOptionalLogging($this, clazz, qualifier, parameters);
}
function resolveWithOptionalLogging($this, clazz, qualifier, parameters) {
  parameters = parameters === VOID ? null : parameters;
  var tmp0 = $this._koin_1.get_logger_g9gejd_k$();
  // Inline function 'org.koin.core.logger.Logger.isAt' call
  var lvl = Level_DEBUG_getInstance();
  if (!(tmp0.get_level_ium7h7_k$().compareTo_30rs7w_k$(lvl) <= 0)) {
    return resolveInstance($this, qualifier, clazz, parameters);
  }
  // Inline function 'org.koin.core.scope.Scope.logInstanceRequest' call
  var tmp;
  if (qualifier == null) {
    tmp = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp = " with qualifier '" + toString(qualifier) + "'";
  }
  var tmp1_elvis_lhs = tmp;
  var qualifierString = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
  var scopeId = $this.isRoot_1 ? '' : " - scope:'" + $this.id_1 + "'";
  $this._koin_1.get_logger_g9gejd_k$().display_r45kqo_k$(Level_DEBUG_getInstance(), "|- '" + getFullName(clazz) + "'" + qualifierString + scopeId + '...');
  // Inline function 'kotlin.time.measureTimedValue' call
  // Inline function 'kotlin.time.measureTimedValue' call
  var mark = Monotonic_getInstance().markNow_ns2ype_k$();
  var result = resolveInstance($this, qualifier, clazz, parameters);
  var result_0 = TimedValue.new_kotlin_time_TimedValue_9r5emo_k$(result, ValueTimeMark__elapsedNow_impl_eonqvs(mark));
  // Inline function 'org.koin.core.scope.Scope.logInstanceDuration' call
  var duration = result_0.get_duration_6xjj0z_k$();
  $this._koin_1.get_logger_g9gejd_k$().display_r45kqo_k$(Level_DEBUG_getInstance(), "|- '" + getFullName(clazz) + "' in " + get_inMs(duration) + ' ms');
  return result_0.get_value_j01efc_k$();
}
function logInstanceRequest($this, clazz, qualifier) {
  var tmp;
  if (qualifier == null) {
    tmp = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp = " with qualifier '" + toString(qualifier) + "'";
  }
  var tmp1_elvis_lhs = tmp;
  var qualifierString = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
  var scopeId = $this.isRoot_1 ? '' : " - scope:'" + $this.id_1 + "'";
  $this._koin_1.get_logger_g9gejd_k$().display_r45kqo_k$(Level_DEBUG_getInstance(), "|- '" + getFullName(clazz) + "'" + qualifierString + scopeId + '...');
}
function logInstanceDuration($this, clazz, duration) {
  $this._koin_1.get_logger_g9gejd_k$().display_r45kqo_k$(Level_DEBUG_getInstance(), "|- '" + getFullName(clazz) + "' in " + get_inMs(duration) + ' ms');
}
function resolveInstance($this, qualifier, clazz, parameters) {
  // Inline function 'org.koin.core.scope.Scope.checkScopeIsOpen' call
  if ($this._closed_1) {
    throw ClosedScopeException.new_org_koin_core_error_ClosedScopeException_6ejsvk_k$("Scope '" + $this.id_1 + "' is closed");
  }
  var instanceContext = ResolutionContext.new_org_koin_core_instance_ResolutionContext_pd1goj_k$($this._koin_1.get_logger_g9gejd_k$(), $this, clazz, qualifier, parameters);
  return stackParametersCall($this, parameters, instanceContext);
}
function checkScopeIsOpen($this) {
  if ($this._closed_1) {
    throw ClosedScopeException.new_org_koin_core_error_ClosedScopeException_6ejsvk_k$("Scope '" + $this.id_1 + "' is closed");
  }
}
function stackParametersCall($this, parameters, instanceContext) {
  if (parameters == null) {
    return resolveFromContext($this, instanceContext);
  }
  var tmp0 = $this._koin_1.get_logger_g9gejd_k$();
  // Inline function 'org.koin.core.logger.Logger.log' call
  var lvl = Level_DEBUG_getInstance();
  // Inline function 'org.koin.core.logger.Logger.isAt' call
  if (tmp0.get_level_ium7h7_k$().compareTo_30rs7w_k$(lvl) <= 0) {
    var tmp$ret$2 = '| >> parameters ' + toString(parameters);
    tmp0.display_r45kqo_k$(lvl, tmp$ret$2);
  }
  var stack = onParameterOnStack($this, parameters);
  try {
    return resolveFromContext($this, instanceContext);
  }finally {
    $this._koin_1.get_logger_g9gejd_k$().debug_fck32h_k$('| << parameters');
    clearParameterStack($this, stack);
  }
}
function onParameterOnStack($this, parameters) {
  var stack = getOrCreateParameterStack($this);
  stack.addFirst_7io6zl_k$(parameters);
  return stack;
}
function clearParameterStack($this, stack) {
  stack.removeFirstOrNull_eges3a_k$();
  if (stack.isEmpty_y1axqb_k$()) {
    var tmp0_safe_receiver = $this.parameterStack_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.remove_ldkf9o_k$();
    }
    $this.parameterStack_1 = null;
  }
}
function getOrCreateParameterStack($this) {
  var tmp0_safe_receiver = $this.parameterStack_1;
  var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_26vq_k$();
  var tmp;
  if (tmp1_elvis_lhs == null) {
    // Inline function 'kotlin.let' call
    var it = ArrayDeque.new_kotlin_collections_ArrayDeque_ueuj5u_k$();
    $this.parameterStack_1 = ThreadLocalRef.new_co_touchlab_stately_concurrency_ThreadLocalRef_efs83g_k$();
    var tmp0_safe_receiver_0 = $this.parameterStack_1;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      tmp0_safe_receiver_0.set_bjwkek_k$(it);
    }
    tmp = it;
  } else {
    tmp = tmp1_elvis_lhs;
  }
  return tmp;
}
function resolveFromContext($this, instanceContext) {
  // Inline function 'org.koin.core.scope.Scope.resolveFromInjectedParameters' call
  var tmp;
  if (instanceContext.get_parameters_cl4rkd_k$() == null) {
    tmp = null;
  } else {
    $this._koin_1.get_logger_g9gejd_k$().debug_fck32h_k$('|- ? ' + instanceContext.get_debugTag_mqsm40_k$() + ' look in injected parameters');
    tmp = instanceContext.get_parameters_cl4rkd_k$().getOrNull_7uxaxe_k$(instanceContext.get_clazz_ips3zj_k$());
  }
  var tmp0_elvis_lhs = tmp;
  var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? resolveFromRegistry($this, instanceContext) : tmp0_elvis_lhs;
  var tmp_0;
  if (tmp1_elvis_lhs == null) {
    // Inline function 'org.koin.core.scope.Scope.resolveFromStackedParameters' call
    var tmp0_safe_receiver = $this.parameterStack_1;
    var current = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_26vq_k$();
    var tmp_1;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    if (current == null || current.isEmpty_y1axqb_k$()) {
      tmp_1 = null;
    } else {
      $this._koin_1.get_logger_g9gejd_k$().debug_fck32h_k$('|- ? ' + instanceContext.get_debugTag_mqsm40_k$() + ' look in stack parameters');
      var parameters = current.firstOrNull_j0zfvq_k$();
      tmp_1 = parameters == null ? null : parameters.getOrNull_7uxaxe_k$(instanceContext.get_clazz_ips3zj_k$());
    }
    tmp_0 = tmp_1;
  } else {
    tmp_0 = tmp1_elvis_lhs;
  }
  var tmp2_elvis_lhs = tmp_0;
  var tmp_2;
  if (tmp2_elvis_lhs == null) {
    var tmp$ret$3;
    $l$block: {
      // Inline function 'org.koin.core.scope.Scope.resolveFromScopeSource' call
      if ($this.isRoot_1) {
        tmp$ret$3 = null;
        break $l$block;
      }
      $this._koin_1.get_logger_g9gejd_k$().debug_fck32h_k$('|- ? ' + instanceContext.get_debugTag_mqsm40_k$() + ' look at scope source');
      var tmp_3;
      if (instanceContext.get_clazz_ips3zj_k$().isInstance_6tn68w_k$($this.sourceValue_1) && instanceContext.get_qualifier_c4gvsv_k$() == null) {
        tmp_3 = $this.sourceValue_1;
      } else {
        tmp_3 = null;
      }
      tmp$ret$3 = tmp_3;
    }
    tmp_2 = tmp$ret$3;
  } else {
    tmp_2 = tmp2_elvis_lhs;
  }
  var tmp3_elvis_lhs = tmp_2;
  var tmp4_elvis_lhs = tmp3_elvis_lhs == null ? resolveFromParentScopes($this, instanceContext) : tmp3_elvis_lhs;
  var tmp_4;
  if (tmp4_elvis_lhs == null) {
    // Inline function 'org.koin.core.scope.Scope.throwNoDefinitionFound' call
    $this._koin_1.get_logger_g9gejd_k$().debug_fck32h_k$('|- << parameters');
    // Inline function 'org.koin.core.scope.Scope.throwDefinitionNotFound' call
    var tmp0_safe_receiver_0 = instanceContext.get_qualifier_c4gvsv_k$();
    var tmp_5;
    if (tmp0_safe_receiver_0 == null) {
      tmp_5 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_5 = " and qualifier '" + toString_0(tmp0_safe_receiver_0) + "'";
    }
    var tmp1_elvis_lhs_0 = tmp_5;
    var qualifierString = tmp1_elvis_lhs_0 == null ? '' : tmp1_elvis_lhs_0;
    throw NoDefinitionFoundException.new_org_koin_core_error_NoDefinitionFoundException_avg1lw_k$("No definition found for type '" + getFullName(instanceContext.get_clazz_ips3zj_k$()) + "'" + qualifierString + '. Check your Modules configuration and add missing type and/or qualifier!');
  } else {
    tmp_4 = tmp4_elvis_lhs;
  }
  return tmp_4;
}
function resolveFromRegistry($this, ctx) {
  return $this._koin_1.get_instanceRegistry_jmeu6d_k$().resolveInstance_pi5lm9_k$(ctx.get_qualifier_c4gvsv_k$(), ctx.get_clazz_ips3zj_k$(), $this.scopeQualifier_1, ctx);
}
function resolveFromInjectedParameters($this, ctx) {
  var tmp;
  if (ctx.get_parameters_cl4rkd_k$() == null) {
    tmp = null;
  } else {
    $this._koin_1.get_logger_g9gejd_k$().debug_fck32h_k$('|- ? ' + ctx.get_debugTag_mqsm40_k$() + ' look in injected parameters');
    tmp = ctx.get_parameters_cl4rkd_k$().getOrNull_7uxaxe_k$(ctx.get_clazz_ips3zj_k$());
  }
  return tmp;
}
function resolveFromStackedParameters($this, ctx) {
  var tmp0_safe_receiver = $this.parameterStack_1;
  var current = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_26vq_k$();
  var tmp;
  // Inline function 'kotlin.collections.isNullOrEmpty' call
  if (current == null || current.isEmpty_y1axqb_k$()) {
    tmp = null;
  } else {
    $this._koin_1.get_logger_g9gejd_k$().debug_fck32h_k$('|- ? ' + ctx.get_debugTag_mqsm40_k$() + ' look in stack parameters');
    var parameters = current.firstOrNull_j0zfvq_k$();
    tmp = parameters == null ? null : parameters.getOrNull_7uxaxe_k$(ctx.get_clazz_ips3zj_k$());
  }
  return tmp;
}
function resolveFromScopeSource($this, ctx) {
  if ($this.isRoot_1)
    return null;
  $this._koin_1.get_logger_g9gejd_k$().debug_fck32h_k$('|- ? ' + ctx.get_debugTag_mqsm40_k$() + ' look at scope source');
  var tmp;
  if (ctx.get_clazz_ips3zj_k$().isInstance_6tn68w_k$($this.sourceValue_1) && ctx.get_qualifier_c4gvsv_k$() == null) {
    tmp = $this.sourceValue_1;
  } else {
    tmp = null;
  }
  return tmp;
}
function resolveFromParentScopes($this, ctx) {
  $this._koin_1.get_logger_g9gejd_k$().debug_fck32h_k$('|- ? ' + ctx.get_debugTag_mqsm40_k$() + ' look in other scopes');
  return findInOtherScope($this, ctx);
}
function throwNoDefinitionFound($this, ctx) {
  $this._koin_1.get_logger_g9gejd_k$().debug_fck32h_k$('|- << parameters');
  // Inline function 'org.koin.core.scope.Scope.throwDefinitionNotFound' call
  var tmp0_safe_receiver = ctx.get_qualifier_c4gvsv_k$();
  var tmp;
  if (tmp0_safe_receiver == null) {
    tmp = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp = " and qualifier '" + toString_0(tmp0_safe_receiver) + "'";
  }
  var tmp1_elvis_lhs = tmp;
  var qualifierString = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
  throw NoDefinitionFoundException.new_org_koin_core_error_NoDefinitionFoundException_avg1lw_k$("No definition found for type '" + getFullName(ctx.get_clazz_ips3zj_k$()) + "'" + qualifierString + '. Check your Modules configuration and add missing type and/or qualifier!');
}
function findInOtherScope($this, ctx) {
  var tmp0 = $this.linkedScopes_1;
  var tmp$ret$0;
  $l$block: {
    // Inline function 'kotlin.collections.firstNotNullOfOrNull' call
    var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      var result = element.getOrNull_lnkgdx_k$(ctx);
      if (!(result == null)) {
        tmp$ret$0 = result;
        break $l$block;
      }
    }
    tmp$ret$0 = null;
  }
  return tmp$ret$0;
}
function throwDefinitionNotFound($this, ctx) {
  var tmp0_safe_receiver = ctx.get_qualifier_c4gvsv_k$();
  var tmp;
  if (tmp0_safe_receiver == null) {
    tmp = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp = " and qualifier '" + toString_0(tmp0_safe_receiver) + "'";
  }
  var tmp1_elvis_lhs = tmp;
  var qualifierString = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
  throw NoDefinitionFoundException.new_org_koin_core_error_NoDefinitionFoundException_avg1lw_k$("No definition found for type '" + getFullName(ctx.get_clazz_ips3zj_k$()) + "'" + qualifierString + '. Check your Modules configuration and add missing type and/or qualifier!');
}
function Scope$close$lambda(this$0) {
  return () => {
    this$0._koin_1.get_logger_g9gejd_k$().debug_fck32h_k$("|- (-) Scope - id:'" + this$0.id_1 + "'");
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = this$0._callbacks_1.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      element.onScopeClose_19cv3p_k$(this$0);
    }
    this$0._callbacks_1.clear_j9egeb_k$();
    this$0.sourceValue_1 = null;
    this$0._closed_1 = true;
    this$0._koin_1.get_scopeRegistry_7zu3y0_k$().deleteScope_7pq4hi_k$(this$0);
    return Unit_getInstance();
  };
}
function get_inMs(_this__u8e3s4) {
  // Inline function 'kotlin.Long.div' call
  var this_0 = _Duration___get_inWholeMicroseconds__impl__8oe8vv(_this__u8e3s4);
  return toNumber(this_0) / 1000.0;
}
function module_0(createdAtStart, moduleDeclaration) {
  createdAtStart = createdAtStart === VOID ? false : createdAtStart;
  var module_0 = Module.new_org_koin_core_module_Module_dxntdg_k$(createdAtStart);
  moduleDeclaration(module_0);
  return module_0;
}
function get_classNames() {
  _init_properties_KClassExt_kt__5ro5b2();
  return classNames;
}
var classNames;
function getFullName(_this__u8e3s4) {
  _init_properties_KClassExt_kt__5ro5b2();
  var tmp0_elvis_lhs = get_classNames().get_wei43m_k$(_this__u8e3s4);
  return tmp0_elvis_lhs == null ? saveCache(_this__u8e3s4) : tmp0_elvis_lhs;
}
function saveCache(_this__u8e3s4) {
  _init_properties_KClassExt_kt__5ro5b2();
  var name = KoinPlatformTools_getInstance().getClassName_sthbcr_k$(_this__u8e3s4);
  // Inline function 'kotlin.collections.set' call
  get_classNames().put_4fpzoq_k$(_this__u8e3s4, name);
  return name;
}
var properties_initialized_KClassExt_kt_dizwhw;
function _init_properties_KClassExt_kt__5ro5b2() {
  if (!properties_initialized_KClassExt_kt_dizwhw) {
    properties_initialized_KClassExt_kt_dizwhw = true;
    classNames = KoinPlatformTools_getInstance().safeHashMap_vw883b_k$();
  }
}
function getKClassDefaultName(_this__u8e3s4, kClass) {
  return 'KClass@' + kClass.hashCode();
}
function generateId(_this__u8e3s4) {
  return Companion_getInstance().random_fimq0t_k$().toString();
}
function _set__koin__b6j8il($this, _set____db54di) {
  $this._koin_1 = _set____db54di;
}
function _get__koin__kul7yv_0($this) {
  return $this._koin_1;
}
function register($this, koinApplication) {
  if (!($this._koin_1 == null)) {
    throw KoinApplicationAlreadyStartedException.new_org_koin_core_error_KoinApplicationAlreadyStartedException_fklqlc_k$('A Koin Application has already been started');
  }
  $this._koin_1 = koinApplication.get_koin_wopbyq_k$();
}
var GlobalContext_instance;
function GlobalContext_getInstance() {
  if (GlobalContext_instance === VOID)
    GlobalContext.new_org_koin_core_context_GlobalContext_emvtdo_k$();
  return GlobalContext_instance;
}
var KoinPlatformTools_instance;
function KoinPlatformTools_getInstance() {
  if (KoinPlatformTools_instance === VOID)
    KoinPlatformTools.new_org_koin_mp_KoinPlatformTools_kl9qsy_k$();
  return KoinPlatformTools_instance;
}
//region block: post-declaration
initMetadataForClass(Koin, 'Koin', Koin.new_org_koin_core_Koin_yoepjg_k$);
initMetadataForCompanion(Companion);
initMetadataForClass(KoinApplication, 'KoinApplication');
initMetadataForClass(KoinInternalApi, 'KoinInternalApi', VOID, VOID, [Annotation]);
initMetadataForInterface(KoinComponent, 'KoinComponent');
initMetadataForInterface(KoinScopeComponent, 'KoinScopeComponent', VOID, VOID, [KoinComponent]);
initMetadataForInterface(KoinContext, 'KoinContext');
initMetadataForClass(BeanDefinition, 'BeanDefinition');
initMetadataForClass(Kind, 'Kind');
initMetadataForClass(Callbacks, 'Callbacks', Callbacks.new_org_koin_core_definition_Callbacks_m24hn6_k$);
initMetadataForClass(KoinDefinition, 'KoinDefinition');
initMetadataForClass(ClosedScopeException, 'ClosedScopeException');
initMetadataForClass(DefinitionOverrideException, 'DefinitionOverrideException');
initMetadataForClass(DefinitionParameterException, 'DefinitionParameterException');
initMetadataForClass(InstanceCreationException, 'InstanceCreationException');
initMetadataForClass(KoinApplicationAlreadyStartedException, 'KoinApplicationAlreadyStartedException');
initMetadataForClass(MissingPropertyException, 'MissingPropertyException');
initMetadataForClass(NoDefinitionFoundException, 'NoDefinitionFoundException');
initMetadataForClass(NoParameterFoundException, 'NoParameterFoundException');
initMetadataForClass(ScopeAlreadyCreatedException, 'ScopeAlreadyCreatedException');
initMetadataForClass(ScopeNotCreatedException, 'ScopeNotCreatedException');
initMetadataForClass(ExtensionManager, 'ExtensionManager');
initMetadataForInterface(KoinExtension, 'KoinExtension');
initMetadataForClass(InstanceFactory, 'InstanceFactory');
initMetadataForClass(FactoryInstanceFactory, 'FactoryInstanceFactory');
initMetadataForCompanion(Companion_0);
initMetadataForClass(ResolutionContext, 'ResolutionContext');
initMetadataForClass(NoClass, 'NoClass', NoClass.new_org_koin_core_instance_NoClass_f232xo_k$);
initMetadataForClass(ScopedInstanceFactory, 'ScopedInstanceFactory');
initMetadataForClass(SingleInstanceFactory, 'SingleInstanceFactory');
initMetadataForClass(Logger, 'Logger');
initMetadataForClass(EmptyLogger, 'EmptyLogger', EmptyLogger.new_org_koin_core_logger_EmptyLogger_7mg1kl_k$);
initMetadataForClass(Level, 'Level');
initMetadataForClass(KoinApplicationDslMarker, 'KoinApplicationDslMarker', VOID, VOID, [Annotation]);
initMetadataForClass(KoinDslMarker, 'KoinDslMarker', VOID, VOID, [Annotation]);
initMetadataForClass(Module, 'Module', Module.new_org_koin_core_module_Module_dxntdg_k$);
initMetadataForClass(ParametersHolder, 'ParametersHolder', ParametersHolder.new_org_koin_core_parameter_ParametersHolder_c5qp05_k$);
initMetadataForInterface(Qualifier, 'Qualifier');
initMetadataForClass(StringQualifier, 'StringQualifier', VOID, VOID, [Qualifier]);
initMetadataForClass(TypeQualifier, 'TypeQualifier', VOID, VOID, [Qualifier]);
initMetadataForClass(InstanceRegistry, 'InstanceRegistry');
initMetadataForClass(PropertyRegistry, 'PropertyRegistry');
initMetadataForCompanion(Companion_1);
initMetadataForClass(ScopeRegistry, 'ScopeRegistry');
initMetadataForClass(Scope, 'Scope');
initMetadataForInterface(ScopeCallback, 'ScopeCallback');
initMetadataForClass(ScopeDSL, 'ScopeDSL');
protoOf(GlobalContext).loadKoinModules$default_cywt0t_k$ = loadKoinModules$default;
protoOf(GlobalContext).loadKoinModules$default_ataqzz_k$ = loadKoinModules$default_0;
initMetadataForObject(GlobalContext, 'GlobalContext', VOID, VOID, [KoinContext]);
initMetadataForClass(PrintLogger, 'PrintLogger', PrintLogger.new_org_koin_core_logger_PrintLogger_lu3cqg_k$);
initMetadataForObject(KoinPlatformTools, 'KoinPlatformTools');
//endregion
//region block: exports
export {
  Kind_Factory_getInstance as Kind_Factory_getInstance2550by23v3u6l,
  Kind_Singleton_getInstance as Kind_Singleton_getInstance3t6esx3v7w2pu,
  Companion_getInstance_2 as Companion_getInstance3hlrna74lquy7,
  startKoin as startKoin30la02u0gybvw,
  BeanDefinition as BeanDefinitionhif1nxb54kgk,
  KoinDefinition as KoinDefinition2pr0kscd0vkk6,
  FactoryInstanceFactory as FactoryInstanceFactory2tq2q9e5id3pz,
  SingleInstanceFactory as SingleInstanceFactoryp594z6t2b69a,
  named as named1qn5s3wnxjwbv,
  module_0 as module39wmcymxxg0fj,
};
//endregion

//# sourceMappingURL=projects-core-koin-core.mjs.map
