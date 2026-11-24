import {
  VOID3gxj6tk5isa35 as VOID,
  Unit_getInstanceu5z48rdn3d6z as Unit_getInstance,
} from './kotlin-kotlin-stdlib.mjs';
import { Application_getInstance3vhi2qmce4cj0 as Application_getInstance } from './ktor-ktor-http.mjs';
import { serialization1fpeds7cruos4 as serialization } from './ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx.mjs';
import { Jsonsmkyu9xjl7fv as Json } from './kotlinx-serialization-kotlinx-serialization-json.mjs';
//region block: imports
//endregion
//region block: pre-declaration
//endregion
function get_DefaultJson() {
  _init_properties_JsonSupport_kt__yf438r();
  return DefaultJson;
}
var DefaultJson;
function json(_this__u8e3s4, json, contentType) {
  json = json === VOID ? get_DefaultJson() : json;
  contentType = contentType === VOID ? Application_getInstance().get_Json_wo4ci9_k$() : contentType;
  _init_properties_JsonSupport_kt__yf438r();
  serialization(_this__u8e3s4, contentType, json);
}
function DefaultJson$lambda($this$Json) {
  _init_properties_JsonSupport_kt__yf438r();
  $this$Json.set_encodeDefaults_c5evsg_k$(true);
  $this$Json.set_isLenient_kuajk5_k$(true);
  $this$Json.set_allowSpecialFloatingPointValues_xyc2ru_k$(true);
  $this$Json.set_allowStructuredMapKeys_sxzxe_k$(true);
  $this$Json.set_prettyPrint_v2gnff_k$(false);
  $this$Json.set_useArrayPolymorphism_54w3tr_k$(false);
  return Unit_getInstance();
}
var properties_initialized_JsonSupport_kt_9cgd93;
function _init_properties_JsonSupport_kt__yf438r() {
  if (!properties_initialized_JsonSupport_kt_9cgd93) {
    properties_initialized_JsonSupport_kt_9cgd93 = true;
    DefaultJson = Json(VOID, DefaultJson$lambda);
  }
}
//region block: exports
export {
  json as jsonu6qnfo3b405p,
};
//endregion

//# sourceMappingURL=ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx-ktor-serialization-kotlinx-json.mjs.map
