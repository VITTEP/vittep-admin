(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"4rKK":function(c,e,t){"use strict";t.r(e),t.d(e,"DetailModule",(function(){return x}));var n=t("ofXK"),i=t("advQ"),s=t("kmKP"),a=t("dihp"),d=t("cp0P"),r=t("nYR2"),o=t("fXoL"),l=t("tyNb"),u=t("aceb"),p=t("3Pt+"),h=t("jF+W"),b=t("NL+w"),g=t("5CSc"),m=t("22EG"),f=t("GwA9"),I=t("EaEm");function w(c,e){if(1&c&&(o.dc(0,"nb-radio",25),o.dc(1,"nb-alert",26),o.Oc(2),o.cc(),o.cc()),2&c){const c=e.$implicit,t=o.mc(2);o.sc("value",c.id),o.Lb(1),o.sc("status",t.getStatusCell(c)),o.Lb(1),o.Pc(c.name)}}function v(c,e){if(1&c&&o.Yb(0,"ga-application",22),2&c){const c=o.mc(2);o.sc("roleId",c.user.roleId)}}function y(c,e){if(1&c&&(o.dc(0,"nb-list-item"),o.dc(1,"nb-alert",28),o.Oc(2),o.cc(),o.cc()),2&c){const c=e.$implicit;o.Lb(1),o.sc("accent","D"===c.environmentId?"success":"W"===c.environmentId?"warning":"M"===c.environmentId?"info":"basic"),o.Lb(1),o.Qc(" ",c.applicationName,"")}}function k(c,e){if(1&c&&(o.dc(0,"nb-list"),o.Mc(1,y,3,2,"nb-list-item",27),o.cc()),2&c){const c=o.mc(2);o.Lb(1),o.sc("ngForOf",c.user.role.applications)}}function C(c,e){if(1&c){const c=o.ec();o.dc(0,"div",1),o.dc(1,"div",2),o.dc(2,"nb-card"),o.dc(3,"nb-card-header"),o.Oc(4,"Th\xf4ng tin ng\u01b0\u1eddi d\xf9ng"),o.cc(),o.dc(5,"nb-card-body"),o.dc(6,"div",1),o.dc(7,"div",3),o.Yb(8,"input",4),o.dc(9,"input",5),o.kc("ngModelChange",(function(e){return o.Dc(c),o.mc().user.displayName=e})),o.cc(),o.dc(10,"input",6),o.kc("ngModelChange",(function(e){return o.Dc(c),o.mc().user.email=e})),o.cc(),o.dc(11,"input",7),o.kc("ngModelChange",(function(e){return o.Dc(c),o.mc().newPassword=e})),o.cc(),o.dc(12,"button",8),o.kc("click",(function(){return o.Dc(c),o.mc().passwordChange=!0})),o.Oc(13," \u0110\u1ed5i m\u1eadt kh\u1ea9u "),o.dc(14,"core-dialog",9),o.dc(15,"core-dialog-body"),o.Oc(16,"B\u1ea1n ch\u1eafc ch\u1eafn mu\u1ed1n \u0111\u1ed5i m\u1eadt kh\u1ea9u kh\xf4ng?"),o.cc(),o.dc(17,"core-dialog-footer",10),o.dc(18,"button",11),o.kc("click",(function(){return o.Dc(c),o.mc().passwordChange=!1})),o.Oc(19,"Kh\xf4ng"),o.cc(),o.dc(20,"button",12),o.kc("click",(function(){return o.Dc(c),o.mc().changePassword()})),o.Oc(21,"C\xf3"),o.cc(),o.cc(),o.cc(),o.cc(),o.dc(22,"nb-radio-group",13),o.kc("valueChange",(function(e){return o.Dc(c),o.mc().entityEdit.statusId=e})),o.Mc(23,w,3,3,"nb-radio",14),o.cc(),o.cc(),o.dc(24,"div",15),o.dc(25,"h6"),o.Oc(26,"Quy\u1ec1n"),o.cc(),o.dc(27,"ga-tree",16),o.kc("itemSelectedChange",(function(e){return o.Dc(c),o.mc().user.role=e})),o.cc(),o.cc(),o.cc(),o.cc(),o.dc(28,"nb-card-footer",17),o.dc(29,"button",18),o.kc("click",(function(){return o.Dc(c),o.mc().update()})),o.Oc(30,"L\u01b0u"),o.cc(),o.cc(),o.cc(),o.cc(),o.dc(31,"div",2),o.dc(32,"nb-card"),o.dc(33,"nb-card-header",10),o.dc(34,"span"),o.Oc(35," \u1ee8ng d\u1ee5ng \u0111\u01b0\u1ee3c quy\u1ec1n truy c\u1eadp"),o.cc(),o.dc(36,"button",19),o.kc("click",(function(){o.Dc(c);const e=o.mc();return e.isEditApp=!e.isEditApp})),o.Oc(37),o.cc(),o.cc(),o.dc(38,"nb-card-body"),o.Mc(39,v,1,1,"ga-application",20),o.Mc(40,k,2,1,"nb-list",21),o.cc(),o.cc(),o.cc(),o.dc(41,"div",3),o.dc(42,"nb-accordion"),o.dc(43,"nb-accordion-item"),o.dc(44,"nb-accordion-item-header"),o.Oc(45,"L\u1edbp d\u1eef li\u1ec7u \u0111\u01b0\u1ee3c quy\u1ec1n truy c\u1eadp"),o.cc(),o.dc(46,"nb-accordion-item-body"),o.Yb(47,"ga-layer",22),o.cc(),o.cc(),o.cc(),o.cc(),o.dc(48,"div",3),o.dc(49,"nb-accordion"),o.dc(50,"nb-accordion-item",null,23),o.dc(52,"nb-accordion-item-header"),o.Oc(53),o.cc(),o.dc(54,"nb-accordion-item-body"),o.Yb(55,"ga-log",24),o.cc(),o.cc(),o.cc(),o.cc(),o.cc()}if(2&c){const c=o.Ac(51),e=o.mc();o.Lb(8),o.sc("value",e.user.username),o.Lb(1),o.sc("ngModel",e.user.displayName),o.Lb(1),o.sc("ngModel",e.user.email),o.Lb(1),o.sc("ngModel",e.newPassword),o.Lb(3),o.sc("open",e.passwordChange),o.Lb(8),o.sc("value",e.user.statusId),o.Lb(1),o.sc("ngForOf",e.lstUserStatus),o.Lb(4),o.sc("config",e.treeConfig)("itemSelected",e.user.role),o.Lb(2),o.sc("disabled",e.isUpdating)("nbSpinner",e.isUpdating),o.Lb(8),o.Pc(e.isEditApp?"T\u1eaft ch\u1ec9nh s\u1eeda":"Ch\u1ec9nh s\u1eeda"),o.Lb(2),o.sc("ngIf",e.isEditApp),o.Lb(1),o.sc("ngIf",!e.isEditApp),o.Lb(7),o.sc("roleId",e.user.roleId),o.Lb(6),o.Qc("",c.collapsed?"L\u1ecbch s\u1eed ng\u01b0\u1eddi d\xf9ng":"\u0110\xf3ng"," "),o.Lb(2),o.sc("userIdInput",e.user.userId)}}let L=(()=>{class c{constructor(c,e,t,n,i){this.route=c,this.service=e,this.roleService=t,this.toast=n,this.dialogService=i,this.treeConfig={service:this.roleService,fieldValue:"roleId",fieldName:"roleName",fieldGroup:"roleParentId",displayValueAll:!0,fieldParent:"roleParentId"},this.passwordChange=!1,this.lstUserStatus=[],this.entityEdit={},this._isEditApp=!1,this.isUpdating=!1}get isEditApp(){return this._isEditApp}set isEditApp(c){this._isEditApp=c,c||this.loadRoleApps(this.user.roleId)}ngOnInit(){const c=this.route.snapshot.paramMap.get("userId");this.service.getOne(c,{fields:["username","displayName","role","statusId","roleId"],join:[{field:"role",select:["roleId"]}]}).subscribe(c=>{this.user=c,this.loadRoleApps(c.roleId)}),this.service.getAllStatus().subscribe(c=>this.lstUserStatus=c)}loadRoleApps(c){this.roleService.getOne(c,{fields:["applications"],join:[{field:"applications",select:["applicationId","applicationName","environmentId"]}]}).subscribe(c=>this.user.role.applications=c.applications)}getStatusCell(c){switch(c.id){case i.b.Request:return"info";case i.b.Locked:return"danger";case i.b.Open:return"success";case i.b.Expired:return"warning"}}update(){const c=[];(this.entityEdit.displayName&&this.entityEdit.displayName!==this.user.displayName||this.entityEdit.statusId&&this.entityEdit.statusId!==this.user.statusId)&&c.push(this.service.patch(this.user.userId,this.entityEdit)),c.length&&(this.isUpdating=!0,Object(d.a)(c).pipe(Object(r.a)(()=>this.isUpdating=!1)).subscribe(()=>{this.toast.success("C\u1eadp nh\u1eadt th\xe0nh c\xf4ng","Th\xe0nh c\xf4ng")},c=>this.toast.danger(c||"C\xf3 l\u1ed7i x\u1ea3y ra","L\u1ed7i")))}forgetPassword(){this.service.forgetPassword({userId:this.user.userId,email:this.user.email})}changePassword(){this.newPassword&&this.newPassword.length>=6?this.service.changePassword({userId:this.user.userId,newPassword:this.newPassword}).pipe(Object(r.a)(()=>this.passwordChange=!1)).subscribe({next:()=>{this.toast.success("\u0110\u1ed5i m\u1eadt kh\u1ea9u th\xe0nh c\xf4ng","Th\xe0nh c\xf4ng")},error:c=>{this.toast.danger(c,"L\u1ed7i")}}):this.toast.warning("M\u1eadt kh\u1ea9u b\u1ea1n nh\u1eadp ph\u1ea3i h\u01a1n ho\u1eb7c b\u1eb1ng 6 k\xed t\u1ef1")}}return c.\u0275fac=function(e){return new(e||c)(o.Xb(l.a),o.Xb(s.a),o.Xb(a.b),o.Xb(u.qb),o.Xb(u.C))},c.\u0275cmp=o.Rb({type:c,selectors:[["ga-detail"]],decls:1,vars:1,consts:[["class","row",4,"ngIf"],[1,"row"],[1,"col-md-6","col-xs-12"],[1,"col-md-12"],["required","","disabled","","nbInput","","fieldSize","small","type","text","fullWidth","","placeholder","T\xean t\xe0i kho\u1ea3n",1,"mt-3",3,"value"],["nbInput","","fieldSize","small","type","text","fullWidth","","placeholder","T\xean hi\u1ec3n th\u1ecb",1,"mt-3",3,"ngModel","ngModelChange"],["nbInput","","fieldSize","small","type","text","fullWidth","","placeholder","Th\u01b0 \u0111i\u1ec7n t\u1eed",1,"mt-3",3,"ngModel","ngModelChange"],["nbInput","","fieldSize","small","type","password","fullWidth","","placeholder","\u0110\u1ed5i m\u1eadt kh\u1ea9u","fieldSize","large",1,"mt-3",3,"ngModel","ngModelChange"],["nbButton","","size","small","status","primary","outline","",1,"mat-khau",3,"click"],[3,"open"],[1,"d-flex","justify-content-between"],["fullWidth","","nbButton","","size","small","ghost","",3,"click"],["fullWidth","","status","danger","nbButton","","size","small",3,"click"],[1,"mt-3","d-flex",3,"value","valueChange"],[3,"value",4,"ngFor","ngForOf"],[1,"col-md-12","mt-3"],[3,"config","itemSelected","itemSelectedChange"],[1,"d-flex","justify-content-end"],["nbButton","","size","small",3,"disabled","nbSpinner","click"],["nbButton","","size","small","ghost","",3,"click"],[3,"roleId",4,"ngIf"],[4,"ngIf"],[3,"roleId"],["accHis",""],[3,"userIdInput"],[3,"value"],["gaTag","",3,"status"],[4,"ngFor","ngForOf"],[3,"accent"]],template:function(c,e){1&c&&o.Mc(0,C,56,17,"div",0),2&c&&o.sc("ngIf",e.user)},directives:[n.u,u.r,u.t,u.q,u.G,p.b,p.j,p.m,u.o,h.b,h.a,h.c,u.bb,n.t,b.a,u.s,u.kb,u.b,u.d,u.e,u.c,g.a,m.a,u.ab,u.j,f.a,I.a,u.P,u.Q],styles:["nb-alert[_ngcontent-%COMP%]{margin:0;padding:6px 12px}.mat-khau[_ngcontent-%COMP%]{font-size:25px;position:absolute;color:#000;margin-top:20px;right:20px;cursor:pointer}"]}),c})();var O=t("6n0X"),M=t("BDdu"),P=t("ronx"),S=t("tvm6"),E=t("urJw"),A=t("ArG+");let x=(()=>{class c{}return c.\u0275mod=o.Vb({type:c}),c.\u0275inj=o.Ub({factory:function(e){return new(e||c)},imports:[[n.c,p.g,u.u,u.p,u.cb,u.sb,u.k,u.R,u.F,u.lb,A.a,O.a,u.H,M.a,u.f,P.a,S.a,E.a,l.g.forChild([{path:"",component:L}])]]}),c})()}}]);