(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"45ZY":function(e,t,n){"use strict";n.r(t),n.d(t,"LayerGdbModule",(function(){return q}));var c=n("ofXK"),a=n("mrSG"),i=n("bANk"),l=n("4k3B"),s=n("CjdU"),r=n("Vvdx"),d=n("fXoL"),o=n("tyNb"),u=n("aceb"),m=n("wnGv"),h=n("ExIg"),p=n("3Pt+");let f=(()=>{class e{transform(e,t){return e.filter(e=>e.type===t)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=d.Wb({name:"domainType",type:e,pure:!0}),e})();const g=["tplCellFieldAlias"],b=["tplCellFieldDomain"],y=["tplCellFieldType"];function v(e,t){1&e&&(d.dc(0,"nb-alert",11),d.Oc(1," Ch\u1ecdn dataset \u0111\u1ec3 xem l\u1edbp d\u1eef li\u1ec7u "),d.cc())}const C=function(){return[]},I=function(e){return{lyr:e}};function w(e,t){if(1&e){const e=d.ec();d.dc(0,"nb-list-item"),d.dc(1,"div",0),d.dc(2,"div",12),d.Oc(3),d.cc(),d.dc(4,"div",13),d.Oc(5," M\xf4 t\u1ea3: "),d.dc(6,"input",14),d.kc("ngModelChange",(function(n){return d.Dc(e),t.$implicit.layerName=n}))("change",(function(){d.Dc(e);const n=t.$implicit;return d.mc().changeLayerName(n)})),d.cc(),d.cc(),d.dc(7,"a",15),d.Oc(8,"Xem thu\u1ed9c t\xednh"),d.cc(),d.cc(),d.cc()}if(2&e){const e=t.$implicit;d.Lb(3),d.Qc("T\xean: ",e.layerId,""),d.Lb(3),d.sc("ngModel",e.layerName),d.Lb(1),d.sc("routerLink",d.uc(4,C))("queryParams",d.vc(5,I,e.layerId))}}function D(e,t){}function F(e,t){if(1&e){const e=d.ec();d.dc(0,"input",14),d.kc("ngModelChange",(function(n){return d.Dc(e),t.row.alias=n}))("change",(function(){d.Dc(e);const n=t.row;return d.mc().changeFieldAlias(n)})),d.cc()}2&e&&d.sc("ngModel",t.row.alias)}function S(e,t){if(1&e&&(d.dc(0,"nb-option",22),d.Oc(1),d.cc()),2&e){const e=t.$implicit;d.sc("value",e.id),d.Lb(1),d.Qc(" ",e.name||e.id," ")}}function M(e,t){if(1&e&&(d.dc(0,"a",23),d.Yb(1,"nb-icon",24),d.cc()),2&e){const e=d.mc(2).row;d.sc("href","/pages/layer/gdb/domain?fname="+e.domainId,d.Fc)}}function T(e,t){if(1&e){const e=d.ec();d.bc(0),d.dc(1,"div",18),d.dc(2,"nb-select",19),d.kc("selectedChange",(function(t){return d.Dc(e),d.mc().row.domainId=t}))("selectedChange",(function(){d.Dc(e);const t=d.mc().row;return d.mc().changeFieldDomain(t)})),d.dc(3,"nb-option"),d.dc(4,"em"),d.Oc(5,"None"),d.cc(),d.cc(),d.Mc(6,S,2,2,"nb-option",20),d.nc(7,"domainType"),d.cc(),d.Mc(8,M,2,1,"a",21),d.cc(),d.ac()}if(2&e){const e=d.mc().row,t=d.mc();d.Lb(2),d.sc("selected",e.domainId),d.Lb(4),d.sc("ngForOf",d.pc(7,3,t.lstDomain,e.type)),d.Lb(2),d.sc("ngIf",null==e?null:e.domainId)}}function L(e,t){1&e&&d.Oc(0," Kh\xf4ng h\u1ed7 tr\u1ee3 ")}function N(e,t){if(1&e&&(d.Mc(0,T,9,6,"ng-container",16),d.Mc(1,L,1,0,"ng-template",null,17,d.Nc)),2&e){const e=t.row,n=d.Ac(2),c=d.mc();d.sc("ngIf",e.type===c.ColumnTypeEnum.string||e.type===c.ColumnTypeEnum.integer||e.type===c.ColumnTypeEnum.smallInteger)("ngIfElse",n)}}function O(e,t){1&e&&d.Oc(0),2&e&&d.Qc(" ",t.value.replace("esriFieldType",""),"\n")}let k=(()=>{class e{constructor(e,t,n,c,a,i){this.layerService=e,this.datasetService=t,this.router=n,this.route=c,this.codedDomainService=a,this.toast=i,this.ColumnTypeEnum=l.a,this.rows=[],this.fieldColumns=[],this.fieldRows=[],this.lstDataset=[],this.datasetConfig={fieldName:"datasetName",fieldValue:"datasetId"},this.lstDomain=[]}get datasetIdSelected(){return this._datasetIdSelected}set datasetIdSelected(e){this.router.navigate([],{relativeTo:this.route,queryParams:{dts:e},queryParamsHandling:"merge"})}ngOnInit(){return Object(a.a)(this,void 0,void 0,(function*(){this.lstDomain=yield this.codedDomainService.getMany().toPromise(),this.lstDataset=yield this.datasetService.getManyGDB().toPromise(),this.fieldColumns=[{name:"T\xean",prop:"name"},{name:"M\xf4 t\u1ea3",prop:"alias",cellTemplate:this.tplCellFieldAlias,width:200},{name:"Ki\u1ec3u d\u1eef li\u1ec7u",prop:"type",cellTemplate:this.tplCellFieldType},{name:"Domain",prop:"domainId",cellTemplate:this.tplCellFieldDomain}],this.route.queryParamMap.subscribe(e=>{const t=e.get("dts");t&&t!==this._datasetIdSelected&&(this._datasetIdSelected=t,this.rows=[],t&&this.layerService.getManyGDB({filter:[{field:"datasetId",operator:"$eq",value:t}]}).subscribe(e=>this.rows=e));const n=e.get("lyr");n&&this.layerService.getFields(n).subscribe(e=>{this.layerIdSelected=n,this.fieldRows=e})})}))}changeLayerName(e){this.layerService.updateDatasetName(e.layerId,e.layerName).subscribe()}changeFieldAlias(e){this.layerIdSelected&&this.layerService.updateField(this.layerIdSelected,e.name,{alias:e.alias}).subscribe(()=>this.toast.success("C\u1eadp nh\u1eadt alias th\xe0nh c\xf4ng","Th\xe0nh c\xf4ng"),e=>this.toast.danger(e||"C\xf3 l\u1ed7i x\u1ea3y ra","L\u1ed7i"))}changeFieldDomain(e){this.layerIdSelected&&this.layerService.updateField(this.layerIdSelected,e.name,{domainId:e.domainId}).subscribe(()=>this.toast.success("C\u1eadp nh\u1eadt domain th\xe0nh c\xf4ng","Th\xe0nh c\xf4ng"),e=>this.toast.danger(e||"C\xf3 l\u1ed7i x\u1ea3y ra","L\u1ed7i"))}}return e.\u0275fac=function(t){return new(t||e)(d.Xb(i.a),d.Xb(s.a),d.Xb(o.c),d.Xb(o.a),d.Xb(r.a),d.Xb(u.qb))},e.\u0275cmp=d.Rb({type:e,selectors:[["ga-layer-gdb"]],viewQuery:function(e,t){var n;1&e&&(d.Jc(g,!0),d.Jc(b,!0),d.Jc(y,!0)),2&e&&(d.zc(n=d.lc())&&(t.tplCellFieldAlias=n.first),d.zc(n=d.lc())&&(t.tplCellFieldDomain=n.first),d.zc(n=d.lc())&&(t.tplCellFieldType=n.first))},decls:22,vars:8,consts:[[1,"row"],[1,"col-md-4"],["fullWidth","","placeholder","Ch\u1ecdn dataset",3,"value","lstValue","config","valueChange"],["class","mt-2","status","warning",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"col-md-8"],[1,"material","striped","mt-2",3,"columns","rows","scrollbarH"],["tplCellName",""],["tplCellFieldAlias",""],["tplCellFieldDomain",""],["tplCellFieldType",""],["status","warning",1,"mt-2"],[1,"col-md-12"],[1,"mb-2","col-md-12"],["nbInput","","fieldSize","small","fullWidth","",3,"ngModel","ngModelChange","change"],["queryParamsHandling","merge",1,"col-md-12",3,"routerLink","queryParams"],[4,"ngIf","ngIfElse"],["noDomain",""],[1,"d-flex"],["placeholder","Ch\u1ecdn domain",1,"flex-grow-1",3,"selected","selectedChange"],[3,"value",4,"ngFor","ngForOf"],["class","p-2","nbTooltip","Xem chi ti\u1ebft domain","target","_blank",3,"href",4,"ngIf"],[3,"value"],["nbTooltip","Xem chi ti\u1ebft domain","target","_blank",1,"p-2",3,"href"],["icon","eye-outline"]],template:function(e,t){1&e&&(d.dc(0,"div",0),d.dc(1,"nb-card",1),d.dc(2,"nb-card-header"),d.Oc(3,"L\u1edbp d\u1eef li\u1ec7u"),d.cc(),d.dc(4,"nb-card-body"),d.dc(5,"ga-select",2),d.kc("valueChange",(function(e){return t.datasetIdSelected=e})),d.cc(),d.Mc(6,v,2,0,"nb-alert",3),d.dc(7,"nb-list"),d.Mc(8,w,9,7,"nb-list-item",4),d.cc(),d.cc(),d.cc(),d.dc(9,"nb-card",5),d.dc(10,"nb-card-header"),d.Oc(11," Thu\u1ed9c t\xednh "),d.cc(),d.dc(12,"nb-card-body"),d.Yb(13,"ngn-datatable",6),d.cc(),d.cc(),d.cc(),d.Mc(14,D,0,0,"ng-template",null,7,d.Nc),d.Mc(16,F,1,1,"ng-template",null,8,d.Nc),d.Mc(18,N,3,2,"ng-template",null,9,d.Nc),d.Mc(20,O,1,1,"ng-template",null,10,d.Nc)),2&e&&(d.Lb(5),d.sc("value",t.datasetIdSelected)("lstValue",t.lstDataset)("config",t.datasetConfig),d.Lb(1),d.sc("ngIf",!t.datasetIdSelected),d.Lb(2),d.sc("ngForOf",t.rows),d.Lb(5),d.sc("columns",t.fieldColumns)("rows",t.fieldRows)("scrollbarH",!0))},directives:[u.r,u.t,u.q,m.a,c.u,u.P,c.t,h.d,u.j,u.Q,u.G,p.b,p.j,p.m,o.f,u.fb,u.W,u.rb,u.D],pipes:[f],styles:[""]}),e})();var X=n("1ua0"),P=n("DS98");let V=(()=>{class e{}return e.\u0275mod=d.Vb({type:e}),e.\u0275inj=d.Ub({factory:function(t){return new(t||e)}}),e})(),q=(()=>{class e{}return e.\u0275mod=d.Vb({type:e}),e.\u0275inj=d.Ub({factory:function(t){return new(t||e)},imports:[[c.c,p.g,u.u,X.a,u.H,P.a,u.k,u.F,u.p,u.sb,u.R,u.gb,V,h.e,o.g.forChild([{path:"",component:k},{path:"domain",loadChildren:()=>n.e(20).then(n.bind(null,"uIsd")).then(e=>e.DomainModule)}])]]}),e})()},Vvdx:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var c=n("i/XZ"),a=n("AytR"),i=n("fXoL"),l=n("tk/3");let s=(()=>{class e extends c.a{constructor(e){super({apiUrl:a.a.apiUrl,entity:"sys/coded-domain"},e)}getManyCodedValues(e){return this.http.get(this.getBaseUrl()+`/${e}/coded-values`)}insertCodedValue(e,t){return this.http.post(this.getBaseUrl()+`/${e}/coded-values`,JSON.stringify(t),{headers:{"Content-type":"application/json"}})}deleteCodedValue(e,t){return this.http.delete(this.getBaseUrl()+`/${e}/coded-values/${t}`)}}return e.\u0275fac=function(t){return new(t||e)(i.hc(l.b))},e.\u0275prov=i.Tb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);