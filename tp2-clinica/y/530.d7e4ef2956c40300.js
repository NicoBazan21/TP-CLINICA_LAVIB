"use strict";(self.webpackChunktp2_clinica=self.webpackChunktp2_clinica||[]).push([[530],{2530:(y,C,o)=>{o.d(C,{e7:()=>b,to:()=>g});var t=o(5879),d=o(6223),m=o(6814);const f=["captchaWrapperElem"];let p=(()=>{class i{constructor(e){this.zone=e,this.scriptElemId="ngx-catpcha-script",this.windowGrecaptcha="grecaptcha",this.windowGrecaptchaEnterprise="enterprise",this.windowOnLoadCallbackProperty="ngx_captcha_onload_callback",this.windowOnLoadEnterpriseCallbackProperty="ngx_captcha_onload_enterprise_callback",this.globalDomain="recaptcha.net",this.defaultDomain="google.com",this.enterpriseApi="enterprise.js",this.defaultApi="api.js"}registerCaptchaScript(e,a,n,c){if(this.grecaptchaScriptLoaded(e.useEnterprise))return void this.zone.run(e.useEnterprise?()=>{n(window[this.windowGrecaptcha][this.windowGrecaptchaEnterprise])}:()=>{n(window[this.windowGrecaptcha])});e.useEnterprise?window[this.getCallbackName(!0)]=()=>this.zone.run(n.bind(this,window[this.windowGrecaptcha][this.windowGrecaptchaEnterprise])):window[this.getCallbackName(!1)]=()=>this.zone.run(n.bind(this,window[this.windowGrecaptcha]));const s=document.createElement("script");s.id=this.scriptElemId,s.innerHTML="",s.src=this.getCaptchaScriptUrl(e,a,c),s.async=!0,s.defer=!0,document.getElementsByTagName("head")[0].appendChild(s)}cleanup(){const e=document.getElementById(this.scriptElemId);e&&e.remove(),window[this.getCallbackName()]=void 0,window[this.windowGrecaptcha]=void 0}grecaptchaScriptLoaded(e){return!!(window[this.getCallbackName(e)]&&window[this.windowGrecaptcha]&&(e&&window[this.windowGrecaptcha][this.windowGrecaptchaEnterprise]||window[this.windowGrecaptcha].execute))}getCallbackName(e){return e?this.windowOnLoadEnterpriseCallbackProperty:this.windowOnLoadCallbackProperty}getLanguageParam(e){return e?`&hl=${e}`:""}getCaptchaScriptUrl(e,a,n){return`https://www.${e.useGlobalDomain?this.globalDomain:this.defaultDomain}/recaptcha/${e.useEnterprise?this.enterpriseApi:this.defaultApi}?onload=${this.getCallbackName(e.useEnterprise)}&render=${a}${this.getLanguageParam(n)}`}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(t.R0b))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),w=(()=>{class i{constructor(e,a,n,c){this.renderer=e,this.zone=a,this.injector=n,this.scriptService=c,this.captchaElemPrefix="ngx_captcha_id_",this.setupCaptcha=!0,this.useGlobalDomain=!1,this.useEnterprise=!1,this.type="image",this.tabIndex=0,this.success=new t.vpe,this.load=new t.vpe,this.reset=new t.vpe,this.ready=new t.vpe,this.error=new t.vpe,this.expire=new t.vpe,this.setupAfterLoad=!1,this.resetCaptchaAfterSuccess=!1,this.onChange=s=>{},this.onTouched=s=>{},this.isLoaded=!1}ngAfterViewInit(){this.control=this.injector.get(d.a5,void 0,t.XFs.Optional)?.control}ngAfterViewChecked(){this.setupCaptcha&&(this.setupCaptcha=!1,this.setupComponent())}ngOnChanges(e){e&&e.hl&&!e.hl.firstChange&&e.hl.currentValue!==e.hl.previousValue&&this.scriptService.cleanup(),e&&e.useGlobalDomain&&!e.useGlobalDomain.firstChange&&e.useGlobalDomain.currentValue!==e.useGlobalDomain.previousValue&&this.scriptService.cleanup(),this.setupCaptcha=!0}getResponse(){return this.reCaptchaApi.getResponse(this.captchaId)}getCaptchaId(){return this.captchaId}resetCaptcha(){this.zone.run(()=>{this.reCaptchaApi.reset(),this.onChange(void 0),this.onTouched(void 0),this.reset.next()})}getCurrentResponse(){return this.currentResponse}reloadCaptcha(){this.setupComponent()}ensureCaptchaElem(e){const a=document.getElementById(e);if(!a)throw Error(`Captcha element with id '${e}' was not found`);this.captchaElem=a}renderReCaptcha(){this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.captchaId=this.reCaptchaApi.render(this.captchaElemId,this.getCaptchaProperties()),this.ready.next()},0)})}handleCallback(e){this.currentResponse=e,this.success.next(e),this.zone.run(()=>{this.onChange(e),this.onTouched(e)}),this.resetCaptchaAfterSuccess&&this.resetCaptcha()}getPseudoUniqueNumber(){return(new Date).getUTCMilliseconds()+Math.floor(9999*Math.random())}setupComponent(){this.captchaSpecificSetup(),this.createAndSetCaptchaElem(),this.scriptService.registerCaptchaScript({useGlobalDomain:this.useGlobalDomain,useEnterprise:this.useEnterprise},"explicit",e=>{this.onloadCallback(e)},this.hl)}onloadCallback(e){if(this.reCaptchaApi=e,!this.reCaptchaApi)throw Error("ReCaptcha Api was not initialized correctly");this.isLoaded=!0,this.load.next(),this.renderReCaptcha(),this.setupAfterLoad&&(this.setupAfterLoad=!1,this.setupComponent())}generateNewElemId(){return this.captchaElemPrefix+this.getPseudoUniqueNumber()}createAndSetCaptchaElem(){if(this.captchaElemId=this.generateNewElemId(),!this.captchaElemId)throw Error("Captcha elem Id is not set");if(!this.captchaWrapperElem)throw Error("Captcha DOM element is not initialized");this.captchaWrapperElem.nativeElement.innerHTML="";const e=this.renderer.createElement("div");e.id=this.captchaElemId,this.renderer.appendChild(this.captchaWrapperElem.nativeElement,e),setTimeout(()=>{this.captchaElemId&&this.ensureCaptchaElem(this.captchaElemId)},0)}writeValue(e){}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}handleErrorCallback(){this.zone.run(()=>{this.onChange(void 0),this.onTouched(void 0)}),this.error.next()}handleExpireCallback(){this.expire.next(),this.resetCaptcha()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(t.Qsj),t.Y36(t.R0b),t.Y36(t.zs3),t.Y36(p))},i.\u0275dir=t.lG2({type:i,inputs:{siteKey:"siteKey",useGlobalDomain:"useGlobalDomain",useEnterprise:"useEnterprise",type:"type",hl:"hl",tabIndex:"tabIndex"},outputs:{success:"success",load:"load",reset:"reset",ready:"ready",error:"error",expire:"expire"},features:[t.TTD]}),i})();var u=function(i){return i[i.InvisibleReCaptcha=0]="InvisibleReCaptcha",i[i.ReCaptcha2=1]="ReCaptcha2",i}(u||{});let g=(()=>{class i extends w{constructor(e,a,n,c){super(e,a,n,c),this.renderer=e,this.zone=a,this.injector=n,this.scriptService=c,this.windowOnErrorCallbackProperty="ngx_captcha_error_callback",this.windowOnExpireCallbackProperty="ngx_captcha_expire_callback",this.theme="light",this.size="normal",this.recaptchaType=u.ReCaptcha2}ngOnChanges(e){super.ngOnChanges(e)}ngOnDestroy(){window[this.windowOnErrorCallbackProperty]={},window[this.windowOnExpireCallbackProperty]={}}captchaSpecificSetup(){this.registerCallbacks()}getCaptchaProperties(){return{sitekey:this.siteKey,callback:e=>this.zone.run(()=>this.handleCallback(e)),"expired-callback":()=>this.zone.run(()=>this.handleExpireCallback()),"error-callback":()=>this.zone.run(()=>this.handleErrorCallback()),theme:this.theme,type:this.type,size:this.size,tabindex:this.tabIndex}}registerCallbacks(){window[this.windowOnErrorCallbackProperty]=super.handleErrorCallback.bind(this),window[this.windowOnExpireCallbackProperty]=super.handleExpireCallback.bind(this)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(t.Qsj),t.Y36(t.R0b),t.Y36(t.zs3),t.Y36(p))},i.\u0275cmp=t.Xpm({type:i,selectors:[["ngx-recaptcha2"]],viewQuery:function(e,a){if(1&e&&t.Gf(f,5),2&e){let n;t.iGM(n=t.CRH())&&(a.captchaWrapperElem=n.first)}},inputs:{theme:"theme",size:"size"},features:[t._Bn([{provide:d.JU,useExisting:(0,t.Gpc)(()=>i),multi:!0}]),t.qOj,t.TTD],decls:2,vars:0,consts:[["captchaWrapperElem",""]],template:function(e,a){1&e&&t._UZ(0,"div",null,0)},encapsulation:2}),i})(),v=(()=>{class i{constructor(e,a){this.scriptService=e,this.zone=a}execute(e,a,n,c,s){this.executeAsPromise(e,a,c).then(n).catch(h=>s?s(h):console.error(h))}executeAsPromise(e,a,n){return new Promise((c,s)=>{this.scriptService.registerCaptchaScript(n||{},e,_=>{this.zone.runOutsideAngular(()=>{try{_.execute(e,{action:a}).then(l=>this.zone.run(()=>c(l)))}catch(l){s(l)}})})})}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(p),t.LFG(t.R0b))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),b=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({providers:[p,v],imports:[m.ez]}),i})()}}]);