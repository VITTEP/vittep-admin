(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"1ua0":function(t,e,c){"use strict";var n=c("ArG+");c.d(e,"a",(function(){return n.a}))},"ArG+":function(t,e,c){"use strict";c.d(e,"a",(function(){return i}));var n=c("ofXK"),a=c("aceb"),s=(c("jF+W"),c("fXoL"));let i=(()=>{class t{}return t.\u0275mod=s.Vb({type:t}),t.\u0275inj=s.Ub({factory:function(e){return new(e||t)},imports:[[n.c,a.u,a.p]]}),t})()},BDdu:function(t,e,c){"use strict";c.d(e,"a",(function(){return s}));var n=c("ofXK"),a=c("fXoL");let s=(()=>{class t{}return t.\u0275mod=a.Vb({type:t}),t.\u0275inj=a.Ub({factory:function(e){return new(e||t)},imports:[[n.c]]}),t})()},CjdU:function(t,e,c){"use strict";c.d(e,"a",(function(){return r}));var n=c("AytR"),a=c("i/XZ"),s=c("Zt20"),i=c("fXoL"),o=c("tk/3");let r=(()=>{class t extends a.a{constructor(t){super({apiUrl:n.a.apiUrl,entity:"sys/dataset"},t)}getGDBNotExists(){const t=s.a.create({filter:[{field:"notExist",operator:"$eq",value:!0}]});return this.http.get(this.getBaseUrl()+"/gdb",{params:this.getParamsFromQuery(t)})}getManyGDB(){return this.http.get(this.getBaseUrl()+"/gdb")}updateDatasetName(t,e){return this.http.post(this.getBaseUrl()+"/gdb/alias/"+t,{datasetName:e})}updateAliasNameFromGDB(t){return this.http.patch(this.getBaseUrl()+"/aliasfromgdb",{lstDatasetId:t},{headers:{"Content-Type":"application/json"}})}}return t.\u0275fac=function(e){return new(e||t)(i.hc(o.b))},t.\u0275prov=i.Tb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},Vx2E:function(t,e,c){"use strict";c.r(e),c.d(e,"DatasetModule",(function(){return k}));var n=c("ofXK"),a=c("ExIg"),s=c("CjdU"),i=c("nYR2"),o=c("fXoL"),r=c("tyNb"),l=c("aceb"),d=c("3Pt+"),u=c("mrSG"),h=c("VmTv");let m=(()=>{class t{constructor(t,e){this.toast=t,this.datasetService=e,this.close=new o.r,this.form=new d.e({datasetId:new d.c("",[d.s.required]),datasetName:new d.c("",[d.s.required,d.s.minLength(5)])}),this.status={saving:!1}}ngOnInit(){}submit(){return Object(u.a)(this,void 0,void 0,(function*(){if(this.form.valid)try{this.status.saving=!0,yield this.datasetService.create(this.form.value).toPromise(),this.toast.success("Th\xeam th\xe0nh c\xf4ng")}catch(t){this.toast.danger(t.message,"L\u1ed7i")}finally{this.status.saving=!1}}))}}return t.\u0275fac=function(e){return new(e||t)(o.Xb(l.qb),o.Xb(s.a))},t.\u0275cmp=o.Rb({type:t,selectors:[["app-them-moi-dataset"]],outputs:{close:"close"},decls:15,vars:8,consts:[[3,"open"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-md-6","col-xs-12","mb-1","mt-1"],["nbInput","","fieldSize","small","placeholder","M\xe3","formControlName","datasetId",3,"fullWidth","status"],["nbInput","","fieldSize","small","placeholder","T\xean","formControlName","datasetName",3,"fullWidth","status"],[1,"d-flex","justify-content-end"],["nbButton","","size","small","size","small","ghost","",3,"click"],["nbButton","","size","small","type","submit",3,"disabled","nbSpinner"]],template:function(t,e){1&t&&(o.dc(0,"dn-dialog",0),o.dc(1,"dn-dialog-header"),o.Oc(2,"Th\xeam m\u1edbi l\u1edbp d\u1eef li\u1ec7u"),o.cc(),o.dc(3,"dn-dialog-body"),o.dc(4,"form",1),o.kc("ngSubmit",(function(){return e.submit()})),o.dc(5,"div",2),o.dc(6,"div",3),o.Yb(7,"input",4),o.cc(),o.dc(8,"div",3),o.Yb(9,"input",5),o.cc(),o.cc(),o.dc(10,"dn-dialog-footer",6),o.dc(11,"button",7),o.kc("click",(function(){return e.close.emit()})),o.Oc(12,"\u0110\xf3ng"),o.cc(),o.dc(13,"button",8),o.Oc(14," Th\xeam m\u1edbi "),o.cc(),o.cc(),o.cc(),o.cc(),o.cc()),2&t&&(o.sc("open",!0),o.Lb(4),o.sc("formGroup",e.form),o.Lb(3),o.sc("fullWidth",!0)("status",e.form.get("datasetId").touched&&e.form.get("datasetId").invalid?"danger":"basic"),o.Lb(2),o.sc("fullWidth",!0)("status",e.form.get("datasetName").touched&&e.form.get("datasetName").invalid?"danger":"basic"),o.Lb(4),o.sc("disabled",!e.form.valid)("nbSpinner",e.status.saving))},directives:[h.d,h.f,h.c,d.u,d.k,d.f,l.G,d.b,d.j,d.d,h.e,l.o,l.kb],styles:[""]}),t})();const p=["table"];function f(t,e){if(1&t){const t=o.ec();o.dc(0,"input",20),o.kc("ngModelChange",(function(c){return o.Dc(t),e.row[e.column.prop]=c}))("change",(function(){o.Dc(t);const c=e.row;return o.mc().change("datasetName",c)})),o.cc()}2&t&&o.sc("ngModel",e.row[e.column.prop])}function b(t,e){if(1&t){const t=o.ec();o.dc(0,"input",20),o.kc("ngModelChange",(function(c){return o.Dc(t),e.row[e.column.prop]=c}))("change",(function(){o.Dc(t);const c=e.row;return o.mc().change("stt",c)})),o.cc()}2&t&&o.sc("ngModel",e.row[e.column.prop])}function g(t,e){if(1&t){const t=o.ec();o.dc(0,"app-them-moi-dataset",21),o.kc("close",(function(){return o.Dc(t),o.mc().dlgThemMoiDataset=!1})),o.cc()}}let y=(()=>{class t{constructor(t,e,c){this.datasetService=t,this.router=e,this.toast=c,this.ColumnMode=a.a,this.actions=[{name:"delete"},{name:"view-layer",tooltip:"Xem l\u1edbp d\u1eef li\u1ec7u",icon:'<i class="fas fa-layer-group"></i>',click:t=>this.viewLayers(t)}],this.lstBulk=[{name:"delete",title:"X\xf3a"},{name:"update",title:"C\u1eadp nh\u1eadt t\xean t\u1eeb GDB"}],this.datatableService={service:this.datasetService,primaryField:"datasetId",builder:this.getBuilder.bind(this)},this.lstGDBRow=[],this.lstTmpGDBRow=[],this.filterValue="",this.lstDatasetSelected=[],this.status={adding:!1},this.dlgThemMoiDataset=!1,this.isSync=!1}ngOnInit(){this.loadDatasetGDB()}loadDatasetGDB(){this.datasetService.getGDBNotExists().subscribe(t=>{this.lstGDBRow=t,this.lstTmpGDBRow=[...t]})}viewLayers(t){this.router.navigateByUrl("/pages/layer")}change(t,e){this.datasetService.patch(e.datasetId,{[t]:e[t]}).subscribe()}syncFromGDB(t){this.isSync=!0,this.datasetService.createMany(t).pipe(Object(i.a)(()=>this.isSync=!1)).subscribe(()=>{this.toast.success("\u0110\xe3 chuy\u1ec3n d\u1eef li\u1ec7u sang danh s\xe1ch qu\u1ea3n l\xfd","Th\xe0nh c\xf4ng"),this.table.loadData(),this.loadDatasetGDB()},t=>this.toast.danger(t||"C\xf3 l\u1ed7i x\u1ea3y ra","L\u1ed7i"))}filterGDB(t){const e=t.toLowerCase(),c=this.lstTmpGDBRow.filter(t=>t.datasetId.toLowerCase().search(e)>-1||t.datasetName.toLowerCase().search(e)>-1);this.lstGDBRow=c}getBuilder(t){t.select(["datasetId","datasetName","stt"]),t.setLimit(10),this.filterValue&&t.setOr([{field:"datasetId",operator:"$cont",value:this.filterValue},{field:"datasetName",operator:"$cont",value:this.filterValue}])}bulkClick(t){"update"===t.action.name&&this.lstDatasetSelected.length&&this.datasetService.updateAliasNameFromGDB(this.lstDatasetSelected.map(t=>t.datasetId)).subscribe(t=>{this.toast.success("C\u1eadp nh\u1eadt th\xe0nh c\xf4ng","Th\xe0nh c\xf4ng"),this.table.loadData()},t=>this.toast.danger(t))}}return t.\u0275fac=function(e){return new(e||t)(o.Xb(s.a),o.Xb(r.c),o.Xb(l.qb))},t.\u0275cmp=o.Rb({type:t,selectors:[["ga-dataset"]],viewQuery:function(t,e){var c;1&t&&o.Sc(p,!0),2&t&&o.zc(c=o.lc())&&(e.table=c.first)},decls:34,vars:13,consts:[[1,"row"],[1,"col-md-6"],[1,"d-flex","justify-content-between"],["nbButton","","size","small","ghost","","nbTooltip","T\u1ea3i l\u1ea1i",3,"click"],["icon","refresh"],["nbButton","","size","small","outline","","status","primary","nbTooltip","Chuy\u1ec3n d\u1eef li\u1ec7u \u0111\u1ec3 cung c\u1ea5p cho c\xe1c \u1ee9ng d\u1ee5ng",1,"mb-3",3,"disabled","click"],["nbInput","","fieldSize","small","fullWidth","","placeholder","T\xecm theo m\xe3 ho\u1eb7c t\xean",3,"keypress"],["rowHeight","auto","columnMode","force","selectionType","checkbox",1,"material","striped","mt-2",3,"externalPaging","rows","limit"],["tableGDB",""],["name","M\xe3","prop","datasetId"],["name","T\xean","prop","datasetName"],["nbInput","","fieldSize","small","fullWidth","","placeholder","T\xecm theo m\xe3 ho\u1eb7c t\xean",3,"ngModel","ngModelChange"],["nbButton","","size","small","ghost","","nbTooltip","Th\xeam m\u1edbi","status","default",3,"click"],["selectionType","checkbox",1,"material","striped","mt-2",3,"externalPaging","limit","datatableService","actions","columnMode","bulkActions","selected","bulkClick","select"],["table",""],["prop","datasetId","name","M\xe3"],["prop","datasetName","name","T\xean"],["ngn-datatable-cell-template",""],["prop","stt","name","STT"],[3,"close",4,"ngIf"],["nbInput","","fieldSize","small","type","text","fullWidth","",3,"ngModel","ngModelChange","change"],[3,"close"]],template:function(t,e){if(1&t){const t=o.ec();o.dc(0,"div",0),o.dc(1,"nb-card",1),o.dc(2,"nb-card-header",2),o.dc(3,"span"),o.Oc(4,"Nh\xf3m d\u1eef li\u1ec7u t\u1eeb GDB"),o.cc(),o.dc(5,"button",3),o.kc("click",(function(){return e.loadDatasetGDB()})),o.Yb(6,"nb-icon",4),o.cc(),o.cc(),o.dc(7,"nb-card-body"),o.dc(8,"button",5),o.kc("click",(function(){o.Dc(t);const c=o.Ac(12);return e.syncFromGDB(c.selected)})),o.Oc(9," Chuy\u1ec3n d\u1eef li\u1ec7u "),o.cc(),o.dc(10,"input",6),o.kc("keypress",(function(t){return e.filterGDB(t.target.value)})),o.cc(),o.dc(11,"ngn-datatable",7,8),o.Yb(13,"ngn-datatable-column",9),o.Yb(14,"ngn-datatable-column",10),o.cc(),o.cc(),o.cc(),o.dc(15,"nb-card",1),o.dc(16,"nb-card-header",2),o.dc(17,"span"),o.Oc(18,"Nh\xf3m d\u1eef li\u1ec7u"),o.cc(),o.dc(19,"button",3),o.kc("click",(function(){return o.Dc(t),o.Ac(27).loadData()})),o.Yb(20,"nb-icon",4),o.cc(),o.cc(),o.dc(21,"nb-card-body"),o.dc(22,"input",11),o.kc("ngModelChange",(function(t){return e.filterValue=t}))("ngModelChange",(function(){return o.Dc(t),o.Ac(27).loadData()})),o.cc(),o.dc(23,"div"),o.dc(24,"button",12),o.kc("click",(function(){return e.dlgThemMoiDataset=!0})),o.Oc(25," Th\xeam m\u1edbi "),o.cc(),o.cc(),o.dc(26,"ngn-datatable",13,14),o.kc("bulkClick",(function(t){return e.bulkClick(t)}))("select",(function(t){return e.lstDatasetSelected=t.selected})),o.Yb(28,"ngn-datatable-column",15),o.dc(29,"ngn-datatable-column",16),o.Mc(30,f,1,1,"ng-template",17),o.cc(),o.dc(31,"ngn-datatable-column",18),o.Mc(32,b,1,1,"ng-template",17),o.cc(),o.cc(),o.cc(),o.cc(),o.cc(),o.Mc(33,g,1,0,"app-them-moi-dataset",19)}if(2&t){const t=o.Ac(12);o.Lb(8),o.sc("disabled",!t.selected.length||e.isSync),o.Lb(3),o.sc("externalPaging",!1)("rows",e.lstGDBRow)("limit",10),o.Lb(11),o.sc("ngModel",e.filterValue),o.Lb(4),o.sc("externalPaging",!0)("limit",10)("datatableService",e.datatableService)("actions",e.actions)("columnMode",e.ColumnMode.force)("bulkActions",e.lstBulk)("selected",e.lstDatasetSelected),o.Lb(7),o.sc("ngIf",e.dlgThemMoiDataset)}},directives:[l.r,l.t,l.o,l.D,l.q,l.G,a.d,a.c,d.b,d.j,d.m,a.b,n.u,m],styles:[""]}),t})();var v=c("1ua0"),D=c("BDdu");let w=(()=>{class t{}return t.\u0275mod=o.Vb({type:t}),t.\u0275inj=o.Ub({factory:function(e){return new(e||t)},imports:[[n.c,l.H,l.p,h.g,d.p,l.k,l.lb]]}),t})(),k=(()=>{class t{}return t.\u0275mod=o.Vb({type:t}),t.\u0275inj=o.Ub({factory:function(e){return new(e||t)},imports:[[n.c,l.u,l.p,l.H,l.lb,l.k,d.g,v.a,D.a,l.F,a.e,h.g,w,r.g.forChild([{path:"",component:y},{path:"sync",loadChildren:()=>c.e(19).then(c.bind(null,"mdlf")).then(t=>t.DatasetSyncModule)},{path:"gdb",loadChildren:()=>c.e(18).then(c.bind(null,"x2I5")).then(t=>t.DatasetGdbModule)}])]]}),t})()},"i/XZ":function(t,e,c){"use strict";c.d(e,"a",(function(){return a}));var n=c("WJ/N");class a extends n.a{constructor(t,e){super(t,e)}}},"jF+W":function(t,e,c){"use strict";c.d(e,"d",(function(){return u})),c.d(e,"a",(function(){return h})),c.d(e,"c",(function(){return m})),c.d(e,"b",(function(){return p}));var n=c("fXoL"),a=c("aceb"),s=c("ofXK");const i=["*"],o=["dialog"];function r(t,e){if(1&t&&(n.dc(0,"nb-card",1),n.dc(1,"nb-card-header",2),n.qc(2),n.cc(),n.dc(3,"nb-card-body",3),n.qc(4,1),n.cc(),n.dc(5,"nb-card-footer",4),n.qc(6,2),n.cc(),n.cc()),2&t){const t=n.mc();n.sc("ngStyle",t.styles)}}const l=[[["core-dialog-header"]],[["core-dialog-body"]],[["core-dialog-footer"]]],d=["core-dialog-header","core-dialog-body","core-dialog-footer"];let u=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Rb({type:t,selectors:[["core-dialog-header"]],ngContentSelectors:i,decls:1,vars:0,template:function(t,e){1&t&&(n.rc(),n.qc(0))},encapsulation:2}),t})(),h=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Rb({type:t,selectors:[["core-dialog-body"]],ngContentSelectors:i,decls:1,vars:0,template:function(t,e){1&t&&(n.rc(),n.qc(0))},encapsulation:2}),t})(),m=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Rb({type:t,selectors:[["core-dialog-footer"]],ngContentSelectors:i,decls:1,vars:0,template:function(t,e){1&t&&(n.rc(),n.qc(0))},encapsulation:2}),t})(),p=(()=>{class t{constructor(t){this.dialogService=t,this.closed=new n.r}set open(t){this._open=t,t?this.openDialog(Object.assign(Object.assign({},this.userConfig),{closeOnBackdropClick:!1,closeOnEsc:!1})):this.close()}get open(){return this._open}get styles(){return{minWidth:this.minWidth,maxWidth:this.maxWidth||"80vw",width:this.width,maxHeight:"80vh"}}ngOnInit(){}openDialog(t){this.dialogRef=this.dialogService.open(this.dialog,t)}close(){this.closed.emit(),this.dialogRef&&this.dialogRef.close()}}return t.\u0275fac=function(e){return new(e||t)(n.Xb(a.C))},t.\u0275cmp=n.Rb({type:t,selectors:[["core-dialog"]],viewQuery:function(t,e){var c;1&t&&n.Jc(o,!0),2&t&&n.zc(c=n.lc())&&(e.dialog=c.first)},inputs:{open:"open",userConfig:"userConfig",style:"style",minWidth:"minWidth",maxWidth:"maxWidth",width:"width"},outputs:{closed:"closed"},ngContentSelectors:d,decls:2,vars:0,consts:[["dialog",""],[3,"ngStyle"],[1,"header"],[1,"body"],[1,"footer"]],template:function(t,e){1&t&&(n.rc(l),n.Mc(0,r,7,1,"ng-template",null,0,n.Nc))},directives:[a.r,s.x,a.t,a.q,a.s],styles:[""]}),t})()}}]);