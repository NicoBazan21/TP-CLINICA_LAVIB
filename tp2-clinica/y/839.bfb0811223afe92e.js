"use strict";(self.webpackChunktp2_clinica=self.webpackChunktp2_clinica||[]).push([[839],{1839:(j,f,c)=>{c.r(f),c.d(f,{AdministracionModule:()=>B});var p=c(6814),g=c(1896),_=c(5861),Z=c(4456),x=c.n(Z),T=c(9846),m=c(7602),t=c(5879),h=c(3076);function C(n,u){1&n&&t.GkF(0)}function A(n,u){1&n&&t._UZ(0,"app-registro",11)}let b=(()=>{class n{constructor(e,r){this.userServie=e,this.router=r,this.bandera=!1,this.listaEspecialistas=[],this.lista=[],this.fileName="PlanillaUsuarios.xlsx"}ngOnInit(){var e=this;this.userServie.traerUsuarios().subscribe(r=>{this.listaEspecialistas=r,this.lista=[],this.listaEspecialistas.forEach(function(){var o=(0,_.Z)(function*(a){let s=yield e.userServie.traerImagenes(a.mail);e.lista.push({user:a,url_foto:s[0]})});return function(a){return o.apply(this,arguments)}}())})}atraparEsp(e){this.userServie.modificar(e)}cambiar(){this.bandera=!this.bandera}verHistoriaClinica(){this.router.navigateByUrl("/clinica/misTurnos/turnos/admin")}exportarExcel(){var e=document.getElementById("descargar");const r=m.P6.table_to_sheet(e),o=m.P6.book_new();m.P6.book_append_sheet(o,r,"Sheet1"),m.NC(o,this.fileName)}exportarPdf(){const e=document.getElementById("descargar");x()(e).then(o=>{const a=o.toDataURL("image/png"),s=new T.ZP("p","mm","a4");s.addImage("../../../assets/img/hospital.png","PNG",10,10,30,30),s.setFontSize(18),s.setTextColor(40,40,40),s.text("Datos de usuarios rol: Admin.",50,20);let l=new Date;s.setFontSize(14),s.setTextColor(60,60,60),s.text("Fecha al: "+l.toLocaleDateString(),50,30),s.addImage(a,"PNG",0,50,210,100),s.save("planillaUsuarios.pdf")})}static#t=this.\u0275fac=function(r){return new(r||n)(t.Y36(h.K),t.Y36(g.F0))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-usuarios"]],decls:18,vars:3,consts:[["id","descargar",1,"container"],[1,"row","d-flex","justify-content-around"],[1,"row","col-12"],[1,"text-center","col-7"],[1,"btn","btn-warning","col-1","btn-sm",3,"click"],[1,"btn","btn-info","col-1","btn-sm","ms-2",2,"text-wrap","nowrap","width","10%",3,"click"],[1,"btn","btn-success","col-1","btn-sm","ms-2",2,"text-wrap","nowrap","width","10%",3,"click"],[1,"btn","btn-danger","col-1","btn-sm","ms-2",3,"click"],[3,"listaEspecialistas","onEnviarEsp"],[4,"ngIf","ngIfElse"],["elseBlock",""],[1,"col-10"]],template:function(r,o){if(1&r&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h3",3),t._uU(4,"Habilitacion de Usuarios"),t.qZA(),t.TgZ(5,"button",4),t.NdJ("click",function(){return o.cambiar()}),t._uU(6,"Alta admin"),t.qZA(),t.TgZ(7,"button",5),t.NdJ("click",function(){return o.verHistoriaClinica()}),t._uU(8,"Historia clinica"),t.qZA(),t.TgZ(9,"button",6),t.NdJ("click",function(){return o.exportarExcel()}),t._uU(10,"Exportar excel"),t.qZA(),t.TgZ(11,"button",7),t.NdJ("click",function(){return o.exportarPdf()}),t._uU(12,"Exportar Pdf"),t.qZA()(),t.TgZ(13,"div",2)(14,"app-tabla",8),t.NdJ("onEnviarEsp",function(s){return o.atraparEsp(s)}),t.qZA()(),t.YNc(15,C,1,0,"ng-container",9),t.YNc(16,A,1,0,"ng-template",null,10,t.W1O),t.qZA()()),2&r){const a=t.MAs(17);t.xp6(14),t.Q6J("listaEspecialistas",o.lista),t.xp6(1),t.Q6J("ngIf",0==o.bandera)("ngIfElse",a)}}})}return n})();const E=[{path:"",component:b}];let U=(()=>{class n{static#t=this.\u0275fac=function(r){return new(r||n)};static#e=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({imports:[g.Bz.forChild(E),g.Bz]})}return n})();var y=c(8323);let I=(()=>{class n{transform(e,r){return e&&Array.isArray(e)&&0!==e.length&&r?e.sort((o,a)=>{const s=o[r]?.toLowerCase(),l=a[r]?.toLowerCase();return s<l?-1:s>l?1:0}):e}static#t=this.\u0275fac=function(r){return new(r||n)};static#e=this.\u0275pipe=t.Yjl({name:"ordenarAlfabetico",type:n,pure:!0})}return n})(),k=(()=>{class n{constructor(){this.unidades=["","Uno","Dos","Tres","Cuatro","Cinco","Seis","Siete","Ocho","Nueve"],this.decenas=["Diez","Once","Doce","Trece","Catorce","Quince","Diecis\xe9is","Diecisiete","Dieciocho","Diecinueve"],this.decenasNormales=["Veinte","Treinta","Cuarenta","Cincuenta","Sesenta","Setenta","Ochenta","Noventa"],this.centenas=["Cien","Doscientos","Trescientos","Cuatrocientos","Quinientos","Seiscientos","Setecientos","Ochocientos","Novecientos"]}transform(e){let r=" a\xf1os.";if(0===e)return"Cero"+r;if(e<10)return this.unidades[e]+r;if(e<20)return this.decenas[e-10]+r;if(e<30)return"Veinti"+this.unidades[e%10]+r;if(e<100){const o=Math.floor(e/10),a=e%10;return(2===o?"Veinti":this.decenasNormales[o-2])+(0!==a?" y "+this.unidades[a]:"")+r}if(e<1e3){const o=Math.floor(e/100),a=e%100;return(1===o&&0===a?"Cien":this.centenas[o-1])+(0!==a?" "+this.transform(a):"")+r}return""}static#t=this.\u0275fac=function(r){return new(r||n)};static#e=this.\u0275pipe=t.Yjl({name:"formatEdad",type:n,pure:!0})}return n})(),w=(()=>{class n{transform(e){return e?e.toUpperCase():""}static#t=this.\u0275fac=function(r){return new(r||n)};static#e=this.\u0275pipe=t.Yjl({name:"datoImpotante",type:n,pure:!0})}return n})();function N(n,u){if(1&n){const e=t.EpF();t.TgZ(0,"td")(1,"button",9),t.NdJ("click",function(){t.CHM(e);const o=t.oxw(2).$implicit,a=t.oxw(2);return t.KtG(a.habilitar(o))}),t._uU(2,"Habilitar"),t.qZA()()}}function P(n,u){if(1&n){const e=t.EpF();t.TgZ(0,"td")(1,"button",10),t.NdJ("click",function(){t.CHM(e);const o=t.oxw(2).$implicit,a=t.oxw(2);return t.KtG(a.habilitar(o))}),t._uU(2,"Deshabilitar"),t.qZA()()}}function q(n,u){if(1&n&&(t.ynx(0),t.YNc(1,N,3,0,"td",6),t.YNc(2,P,3,0,"ng-template",null,8,t.W1O),t.BQk()),2&n){const e=t.MAs(3),r=t.oxw().$implicit;t.xp6(1),t.Q6J("ngIf",0==r.user.habilitado)("ngIfElse",e)}}function O(n,u){if(1&n){const e=t.EpF();t.TgZ(0,"td")(1,"button",11),t.NdJ("click",function(){t.CHM(e);const o=t.oxw().$implicit,a=t.oxw(2);return t.KtG(a.habilitar(o))}),t._uU(2,"N\\A"),t.qZA()()}}function M(n,u){if(1&n){const e=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"button",4),t.NdJ("click",function(){const a=t.CHM(e).$implicit,s=t.oxw(2);return t.KtG(s.exportarExcel(a.user))}),t._UZ(3,"img",5),t.qZA()(),t.TgZ(4,"td"),t._uU(5),t.ALo(6,"datoImpotante"),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.ALo(9,"datoImpotante"),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.qZA(),t.TgZ(12,"td"),t._uU(13),t.ALo(14,"formatEdad"),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.qZA(),t.TgZ(17,"td"),t._uU(18),t.ALo(19,"datoImpotante"),t.qZA(),t.YNc(20,q,4,2,"ng-container",6),t.YNc(21,O,3,0,"ng-template",null,7,t.W1O),t.qZA()}if(2&n){const e=u.$implicit,r=t.MAs(22);t.xp6(3),t.Q6J("src",e.url_foto,t.LSH),t.xp6(2),t.Oqu(t.lcZ(6,9,e.user.nombre)),t.xp6(3),t.Oqu(t.lcZ(9,11,e.user.apellido)),t.xp6(3),t.Oqu(e.user.dni),t.xp6(2),t.Oqu(t.lcZ(14,13,e.user.edad)),t.xp6(3),t.Oqu(e.user.mail),t.xp6(2),t.Oqu(t.lcZ(19,15,e.user.rol)),t.xp6(2),t.Q6J("ngIf","Especialista"==e.user.rol)("ngIfElse",r)}}function S(n,u){if(1&n&&(t.ynx(0),t.TgZ(1,"div",1)(2,"table",2)(3,"thead")(4,"tr")(5,"th"),t._uU(6,"Seleccion"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"Nombre"),t.qZA(),t.TgZ(9,"th"),t._uU(10,"Apellido"),t.qZA(),t.TgZ(11,"th"),t._uU(12,"Dni"),t.qZA(),t.TgZ(13,"th"),t._uU(14,"Edad"),t.qZA(),t.TgZ(15,"th"),t._uU(16,"Mail"),t.qZA(),t.TgZ(17,"th"),t._uU(18,"Rol"),t.qZA(),t.TgZ(19,"th"),t._uU(20,"Habilitado"),t.qZA()()(),t.TgZ(21,"tbody"),t.YNc(22,M,23,17,"tr",3),t.ALo(23,"ordenarAlfabetico"),t.qZA()()(),t.BQk()),2&n){const e=t.oxw();t.xp6(22),t.Q6J("ngForOf",t.xi3(23,1,e.listaEspecialistas,"nombre"))}}let D=(()=>{class n{constructor(e){this.turnoService=e,this.onEnviarEsp=new t.vpe,this.fileName="PlanillaUsuarios.xlsx"}habilitar(e){e.habilitado=!e.habilitado,this.onEnviarEsp.emit(e)}exportarExcel(e){var r=this;return(0,_.Z)(function*(){let a,o=yield r.turnoService.traerTurnosValor();switch(e.rol){case"Paciente":a=o.filter(d=>d.idPaciente==e.id);break;case"Especialista":a=o.filter(d=>d.idEspecialista==e.id);break;default:a=o}const s=m.P6.json_to_sheet(o),l=m.P6.book_new();m.P6.book_append_sheet(l,s,"Sheet1"),m.NC(l,r.fileName)})()}static#t=this.\u0275fac=function(r){return new(r||n)(t.Y36(y.D))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-tabla"]],inputs:{listaEspecialistas:"listaEspecialistas"},outputs:{onEnviarEsp:"onEnviarEsp"},decls:1,vars:1,consts:[[4,"ngIf"],[1,"row","col-12"],[1,"table","table-dark","table-hover",2,"opacity","0.7"],[4,"ngFor","ngForOf"],[1,"image-button",3,"click"],[1,"button-image",3,"src"],[4,"ngIf","ngIfElse"],["elseBlockk",""],["elseBlock",""],[1,"btn","btn-success",3,"click"],[1,"btn","btn-danger",3,"click"],[1,"btn","btn-secondary",3,"click"]],template:function(r,o){1&r&&t.YNc(0,S,24,4,"ng-container",0),2&r&&t.Q6J("ngIf",o.listaEspecialistas)},dependencies:[p.sg,p.O5,I,k,w],styles:[".gradient-custom-2[_ngcontent-%COMP%]{background:linear-gradient(to right,rgba(23,155,173,.479),rgba(159,199,218,.425))}@media (min-width: 769px){.gradient-custom-2[_ngcontent-%COMP%]{border-top-right-radius:.3rem;border-bottom-right-radius:.3rem}}.transparente[_ngcontent-%COMP%]{border-radius:50%;background:linear-gradient(to right,rgba(23,155,173,.479),rgba(159,199,218,.425))}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%]{font-family:Gill Sans,Gill Sans MT,Calibri,Trebuchet MS,sans-serif;font-weight:lighter;font-style:italic}.juego[_ngcontent-%COMP%]{text-align:center;border-radius:15px}.foto[_ngcontent-%COMP%]{border-radius:500px}.image-button[_ngcontent-%COMP%]{width:50px;height:50px;border-radius:20px;border:3px solid #dc3545;overflow:hidden;padding:0;display:flex;align-items:center;justify-content:center;background-color:transparent;transition:background-color .3s ease}.button-image[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain;transition:opacity .3s ease}.image-button[_ngcontent-%COMP%]:hover{background-color:#dc3545}.image-button[_ngcontent-%COMP%]:hover   .button-image[_ngcontent-%COMP%]{opacity:0}"]})}return n})();var i=c(6223),J=c(461),F=c(4686),Y=c(2425),v=c(2530);let L=(()=>{class n{constructor(e,r){this.toastr=e,this.userService=r,this.siteKey="6LcDWA8pAAAAAPL2dHPCRP3V_k7gGfRTFfOR5NDv"}ngOnInit(){this.form=new i.cw({nombre:new i.NI("",[i.kI.pattern("^[a-zA-Z ]+$"),i.kI.minLength(2),i.kI.required]),apellido:new i.NI("",[i.kI.pattern("^[a-zA-Z ]+$"),i.kI.minLength(2),i.kI.required]),edad:new i.NI("",[i.kI.min(18),i.kI.max(100),i.kI.required]),dni:new i.NI("",[i.kI.minLength(8),i.kI.required]),clave:new i.NI("",[i.kI.minLength(6),i.kI.required]),repiteClave:new i.NI(""),email:new i.NI("",[i.kI.email,i.kI.required]),recaptcha:new i.NI("",i.kI.required),imagenUno:new i.NI("",i.kI.required)},[(0,F.q)()])}guardar(){if(this.form.valid){const e=new J.w("",this.nombre?.value,this.apellido?.value,this.email?.value,this.edad?.value,this.dni?.value,this.clave?.value," ","admin");this.userService.register(e.mail,e.clave).then(()=>{this.toastr.info("El usuario deber\xe1 confirmar su mail!.","Ya casi estamos!.",{tapToDismiss:!0,progressBar:!0,progressAnimation:"increasing",payload:!0,positionClass:"toast-top-right"}),this.userService.subirImagen(this.primerImagen,1,this.email?.value),this.userService.guardarAdmin(e),this.userService.enviarEmailVerificacion()}).catch(()=>{this.toastr.error("Este usuario ya existe!.","Error!.",{tapToDismiss:!0,progressBar:!0,progressAnimation:"increasing",payload:!0,positionClass:"toast-top-right"})})}else this.toastr.warning("Completa correctamente los campos","Atencion!.",{tapToDismiss:!0,progressBar:!0,progressAnimation:"increasing",payload:!0,positionClass:"toast-top-right"})}cargoImagen(e,r){1===r&&(this.primerImagen=e.target.files[0])}get nombre(){return this.form.get("nombre")}get apellido(){return this.form.get("apellido")}get edad(){return this.form.get("edad")}get dni(){return this.form.get("dni")}get clave(){return this.form.get("clave")}get repiteClave(){return this.form.get("repiteClave")}get email(){return this.form.get("email")}get recaptcha(){return this.form.get("recaptcha")}get imagenUno(){return this.form.get("imagenUno")}static#t=this.\u0275fac=function(r){return new(r||n)(t.Y36(Y._W),t.Y36(h.K))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-registro"]],decls:64,vars:2,consts:[[1,"gradient-custom-2","mt-2"],[1,"container"],[1,"row","d-flex","justify-content-center","align-items-center"],[1,"col-11"],[1,"card","card-registration","card-registration-2","transparente",2,"border-radius","15px"],[1,"row",3,"formGroup","ngSubmit"],[1,"col-lg-6"],[1,"p-5"],[1,"fw-normal","mb-4"],[1,"row"],[1,"col-md-6","mb-2"],[1,"form-outline"],["type","text","id","form3Examplev2","formControlName","nombre",1,"form-control","form-control-lg"],["for","form3Examplev2",1,"form-label"],["type","text","id","form3Examplev3","formControlName","apellido",1,"form-control","form-control-lg"],["for","form3Examplev3",1,"form-label"],[1,"mb-2"],["type","number","id","form3Examplev4a","formControlName","edad",1,"form-control","form-control-lg"],["for","form3Examplev4",1,"form-label"],[1,"mb-3","pb-2"],["type","number","id","form3Examplev4s","formControlName","dni",1,"form-control","form-control-lg"],[1,"form-outline","form-white"],["type","file","id","form3Examplea6","formControlName","imagenUno",1,"form-control","form-control-lg",3,"change"],["for","form3Examplea6",1,"form-label"],[1,"col-lg-6","bg-indigo","text-white",2,"border-radius","15px"],[1,"fw-normal","mb-2"],[1,"mb-2","pb-2"],["type","email","id","form3Examplea2","formControlName","email",1,"form-control","form-control-lg"],["for","form3Examplea2",1,"form-label"],["type","password","id","form3Examplea3","formControlName","clave",1,"form-control","form-control-lg"],["for","form3Examplea3",1,"form-label"],["type","password","id","form3Examplea4","formControlName","repiteClave",1,"form-control","form-control-lg"],["for","form3Examplea4",1,"form-label"],[1,"mb-4"],["formControlName","recaptcha",3,"siteKey"],["captchaElem",""],[1,"d-flex","justify-content-around","p-2"],["type","submit","data-mdb-ripple-color","dark",1,"btn","btn-light","btn-lg"],["data-mdb-ripple-color","dark","routerLink","",1,"btn","btn-light","btn-lg","p-2"]],template:function(r,o){1&r&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"form",5),t.NdJ("ngSubmit",function(){return o.guardar()}),t.TgZ(6,"div",6)(7,"div",7)(8,"h3",8),t._uU(9,"Datos del administrador"),t.qZA(),t.TgZ(10,"div",9)(11,"div",10)(12,"div",11),t._UZ(13,"input",12),t.TgZ(14,"label",13),t._uU(15,"Nombre"),t.qZA()()(),t.TgZ(16,"div",10)(17,"div",11),t._UZ(18,"input",14),t.TgZ(19,"label",15),t._uU(20,"Apellido"),t.qZA()()()(),t.TgZ(21,"div",16)(22,"div",11),t._UZ(23,"input",17),t.TgZ(24,"label",18),t._uU(25,"Edad"),t.qZA()()(),t.TgZ(26,"div",19)(27,"div",11),t._UZ(28,"input",20),t.TgZ(29,"label",18),t._uU(30,"DNI"),t.qZA()()(),t.TgZ(31,"div",16)(32,"div",21)(33,"input",22),t.NdJ("change",function(s){return o.cargoImagen(s,1)}),t.qZA(),t.TgZ(34,"label",23),t._uU(35,"Imagen uno"),t.qZA()()()()(),t.TgZ(36,"div",24)(37,"div",7)(38,"h3",25),t._uU(39,"Datos de usuario"),t.qZA(),t.TgZ(40,"div",26)(41,"div",21),t._UZ(42,"input",27),t.TgZ(43,"label",28),t._uU(44,"Email"),t.qZA()()(),t.TgZ(45,"div",9)(46,"div",10)(47,"div",21),t._UZ(48,"input",29),t.TgZ(49,"label",30),t._uU(50,"Clave"),t.qZA()()(),t.TgZ(51,"div",10)(52,"div",21),t._UZ(53,"input",31),t.TgZ(54,"label",32),t._uU(55,"Repetir clave"),t.qZA()()()(),t.TgZ(56,"div",33),t._UZ(57,"ngx-recaptcha2",34,35),t.qZA(),t.TgZ(59,"div",36)(60,"button",37),t._uU(61,"Registrar"),t.qZA(),t.TgZ(62,"button",38),t._uU(63,"Volver"),t.qZA()()()()()()()()()()),2&r&&(t.xp6(5),t.Q6J("formGroup",o.form),t.xp6(52),t.Q6J("siteKey",o.siteKey))},dependencies:[g.rH,i._Y,i.Fj,i.wV,i.JJ,i.JL,i.sg,i.u,v.to],styles:[".bg-indigo[_ngcontent-%COMP%]{background:linear-gradient(to right,rgba(177,138,87,.527),rgba(177,138,87,.925))}.card-registration-2[_ngcontent-%COMP%]   .bg-indigo[_ngcontent-%COMP%]{border-bottom-left-radius:15px;border-bottom-right-radius:15px}.transparente[_ngcontent-%COMP%]{background:linear-gradient(to right,rgba(23,155,173,.479),rgba(159,199,218,.425))}"]})}return n})(),B=(()=>{class n{static#t=this.\u0275fac=function(r){return new(r||n)};static#e=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({imports:[p.ez,U,i.UX,v.e7,i.u5]})}return n})();t.B6R(b,[p.O5,D,L],[])}}]);