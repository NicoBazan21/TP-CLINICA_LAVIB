"use strict";(self.webpackChunktp2_clinica=self.webpackChunktp2_clinica||[]).push([[223],{9315:(Ae,Z,u)=>{u.d(Z,{D:()=>h});var i=u(5592),S=u(7453),Q=u(4829),X=u(9940),tt=u(8251),N=u(7400),p=u(2714);function h(...G){const C=(0,X.jO)(G),{args:B,keys:P}=(0,S.D)(G),x=new i.y(g=>{const{length:d}=B;if(!d)return void g.complete();const V=new Array(d);let l=d,f=d;for(let D=0;D<d;D++){let M=!1;(0,Q.Xf)(B[D]).subscribe((0,tt.x)(g,I=>{M||(M=!0,f--),V[D]=I},()=>l--,void 0,()=>{(!l||!M)&&(f||g.next(P?(0,p.n)(P,V):V),g.complete())}))}});return C?x.pipe((0,N.Z)(C)):x}},6223:(Ae,Z,u)=>{u.d(Z,{EJ:()=>J,F:()=>$,Fj:()=>g,JJ:()=>Lt,JL:()=>Wt,JU:()=>h,Kr:()=>he,NI:()=>ht,On:()=>ft,UX:()=>fn,Wl:()=>C,YN:()=>ce,_Y:()=>re,a5:()=>m,cw:()=>j,kI:()=>M,sg:()=>z,u:()=>yt,u5:()=>hn,wV:()=>pt});var i=u(5879),S=u(6814),Q=u(2459),X=u(9315),tt=u(7398);let N=(()=>{class e{constructor(t,r){this._renderer=t,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(t,r){this._renderer.setProperty(this._elementRef.nativeElement,t,r)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static#t=this.\u0275fac=function(r){return new(r||e)(i.Y36(i.Qsj),i.Y36(i.SBq))};static#e=this.\u0275dir=i.lG2({type:e})}return e})(),p=(()=>{class e extends N{static#t=this.\u0275fac=function(){let t;return function(o){return(t||(t=i.n5z(e)))(o||e)}}();static#e=this.\u0275dir=i.lG2({type:e,features:[i.qOj]})}return e})();const h=new i.OlP("NgValueAccessor"),G={provide:h,useExisting:(0,i.Gpc)(()=>C),multi:!0};let C=(()=>{class e extends p{writeValue(t){this.setProperty("checked",t)}static#t=this.\u0275fac=function(){let t;return function(o){return(t||(t=i.n5z(e)))(o||e)}}();static#e=this.\u0275dir=i.lG2({type:e,selectors:[["input","type","checkbox","formControlName",""],["input","type","checkbox","formControl",""],["input","type","checkbox","ngModel",""]],hostBindings:function(r,o){1&r&&i.NdJ("change",function(a){return o.onChange(a.target.checked)})("blur",function(){return o.onTouched()})},features:[i._Bn([G]),i.qOj]})}return e})();const B={provide:h,useExisting:(0,i.Gpc)(()=>g),multi:!0},x=new i.OlP("CompositionEventMode");let g=(()=>{class e extends N{constructor(t,r,o){super(t,r),this._compositionMode=o,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function P(){const e=(0,S.q)()?(0,S.q)().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}())}writeValue(t){this.setProperty("value",t??"")}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static#t=this.\u0275fac=function(r){return new(r||e)(i.Y36(i.Qsj),i.Y36(i.SBq),i.Y36(x,8))};static#e=this.\u0275dir=i.lG2({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){1&r&&i.NdJ("input",function(a){return o._handleInput(a.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(a){return o._compositionEnd(a.target.value)})},features:[i._Bn([B]),i.qOj]})}return e})();function d(e){return null==e||("string"==typeof e||Array.isArray(e))&&0===e.length}function V(e){return null!=e&&"number"==typeof e.length}const l=new i.OlP("NgValidators"),f=new i.OlP("NgAsyncValidators"),D=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;class M{static min(n){return function I(e){return n=>{if(d(n.value)||d(e))return null;const t=parseFloat(n.value);return!isNaN(t)&&t<e?{min:{min:e,actual:n.value}}:null}}(n)}static max(n){return function Dt(e){return n=>{if(d(n.value)||d(e))return null;const t=parseFloat(n.value);return!isNaN(t)&&t>e?{max:{max:e,actual:n.value}}:null}}(n)}static required(n){return function At(e){return d(e.value)?{required:!0}:null}(n)}static requiredTrue(n){return function Mt(e){return!0===e.value?null:{required:!0}}(n)}static email(n){return function bt(e){return d(e.value)||D.test(e.value)?null:{email:!0}}(n)}static minLength(n){return function Et(e){return n=>d(n.value)||!V(n.value)?null:n.value.length<e?{minlength:{requiredLength:e,actualLength:n.value.length}}:null}(n)}static maxLength(n){return function Ot(e){return n=>V(n.value)&&n.value.length>e?{maxlength:{requiredLength:e,actualLength:n.value.length}}:null}(n)}static pattern(n){return function Ft(e){if(!e)return T;let n,t;return"string"==typeof e?(t="","^"!==e.charAt(0)&&(t+="^"),t+=e,"$"!==e.charAt(e.length-1)&&(t+="$"),n=new RegExp(t)):(t=e.toString(),n=e),r=>{if(d(r.value))return null;const o=r.value;return n.test(o)?null:{pattern:{requiredPattern:t,actualValue:o}}}}(n)}static nullValidator(n){return null}static compose(n){return Pt(n)}static composeAsync(n){return xt(n)}}function T(e){return null}function wt(e){return null!=e}function St(e){return(0,i.QGY)(e)?(0,Q.D)(e):e}function Nt(e){let n={};return e.forEach(t=>{n=null!=t?{...n,...t}:n}),0===Object.keys(n).length?null:n}function Gt(e,n){return n.map(t=>t(e))}function Bt(e){return e.map(n=>function Me(e){return!e.validate}(n)?n:t=>n.validate(t))}function Pt(e){if(!e)return null;const n=e.filter(wt);return 0==n.length?null:function(t){return Nt(Gt(t,n))}}function et(e){return null!=e?Pt(Bt(e)):null}function xt(e){if(!e)return null;const n=e.filter(wt);return 0==n.length?null:function(t){const r=Gt(t,n).map(St);return(0,X.D)(r).pipe((0,tt.U)(Nt))}}function nt(e){return null!=e?xt(Bt(e)):null}function It(e,n){return null===e?[n]:Array.isArray(e)?[...e,n]:[e,n]}function Tt(e){return e._rawValidators}function kt(e){return e._rawAsyncValidators}function rt(e){return e?Array.isArray(e)?e:[e]:[]}function k(e,n){return Array.isArray(e)?e.includes(n):e===n}function Ut(e,n){const t=rt(n);return rt(e).forEach(o=>{k(t,o)||t.push(o)}),t}function Ht(e,n){return rt(n).filter(t=>!k(e,t))}class Rt{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=et(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=nt(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control&&this.control.reset(n)}hasError(n,t){return!!this.control&&this.control.hasError(n,t)}getError(n,t){return this.control?this.control.getError(n,t):null}}class c extends Rt{get formDirective(){return null}get path(){return null}}class m extends Rt{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class jt{constructor(n){this._cd=n}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}}let Lt=(()=>{class e extends jt{constructor(t){super(t)}static#t=this.\u0275fac=function(r){return new(r||e)(i.Y36(m,2))};static#e=this.\u0275dir=i.lG2({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){2&r&&i.ekj("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[i.qOj]})}return e})(),Wt=(()=>{class e extends jt{constructor(t){super(t)}static#t=this.\u0275fac=function(r){return new(r||e)(i.Y36(c,10))};static#e=this.\u0275dir=i.lG2({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,o){2&r&&i.ekj("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},features:[i.qOj]})}return e})();const b="VALID",H="INVALID",A="PENDING",E="DISABLED";function st(e){return(R(e)?e.validators:e)||null}function at(e,n){return(R(n)?n.asyncValidators:e)||null}function R(e){return null!=e&&!Array.isArray(e)&&"object"==typeof e}class zt{constructor(n,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(n),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get valid(){return this.status===b}get invalid(){return this.status===H}get pending(){return this.status==A}get disabled(){return this.status===E}get enabled(){return this.status!==E}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(Ut(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(Ut(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(Ht(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(Ht(n,this._rawAsyncValidators))}hasValidator(n){return k(this._rawValidators,n)}hasAsyncValidator(n){return k(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){this.touched=!0,this._parent&&!n.onlySelf&&this._parent.markAsTouched(n)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(n=>n.markAllAsTouched())}markAsUntouched(n={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(t=>{t.markAsUntouched({onlySelf:!0})}),this._parent&&!n.onlySelf&&this._parent._updateTouched(n)}markAsDirty(n={}){this.pristine=!1,this._parent&&!n.onlySelf&&this._parent.markAsDirty(n)}markAsPristine(n={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(t=>{t.markAsPristine({onlySelf:!0})}),this._parent&&!n.onlySelf&&this._parent._updatePristine(n)}markAsPending(n={}){this.status=A,!1!==n.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!n.onlySelf&&this._parent.markAsPending(n)}disable(n={}){const t=this._parentMarkedDirty(n.onlySelf);this.status=E,this.errors=null,this._forEachChild(r=>{r.disable({...n,onlySelf:!0})}),this._updateValue(),!1!==n.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...n,skipPristineCheck:t}),this._onDisabledChange.forEach(r=>r(!0))}enable(n={}){const t=this._parentMarkedDirty(n.onlySelf);this.status=b,this._forEachChild(r=>{r.enable({...n,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors({...n,skipPristineCheck:t}),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(n){this._parent&&!n.onlySelf&&(this._parent.updateValueAndValidity(n),n.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===b||this.status===A)&&this._runAsyncValidator(n.emitEvent)),!1!==n.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!n.onlySelf&&this._parent.updateValueAndValidity(n)}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?E:b}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n){if(this.asyncValidator){this.status=A,this._hasOwnPendingAsyncValidator=!0;const t=St(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(r=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(r,{emitEvent:n})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(n,t={}){this.errors=n,this._updateControlsErrors(!1!==t.emitEvent)}get(n){let t=n;return null==t||(Array.isArray(t)||(t=t.split(".")),0===t.length)?null:t.reduce((r,o)=>r&&r._find(o),this)}getError(n,t){const r=t?this.get(t):this;return r&&r.errors?r.errors[n]:null}hasError(n,t){return!!this.getError(n,t)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(n)}_initObservables(){this.valueChanges=new i.vpe,this.statusChanges=new i.vpe}_calculateStatus(){return this._allControlsDisabled()?E:this.errors?H:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(A)?A:this._anyControlsHaveStatus(H)?H:b}_anyControlsHaveStatus(n){return this._anyControls(t=>t.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n={}){this.pristine=!this._anyControlsDirty(),this._parent&&!n.onlySelf&&this._parent._updatePristine(n)}_updateTouched(n={}){this.touched=this._anyControlsTouched(),this._parent&&!n.onlySelf&&this._parent._updateTouched(n)}_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){R(n)&&null!=n.updateOn&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=function Fe(e){return Array.isArray(e)?et(e):e||null}(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=function we(e){return Array.isArray(e)?nt(e):e||null}(this._rawAsyncValidators)}}class j extends zt{constructor(n,t,r){super(st(t),at(r,t)),this.controls=n,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(n,t){return this.controls[n]?this.controls[n]:(this.controls[n]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(n,t,r={}){this.registerControl(n,t),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}removeControl(n,t={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(n,t,r={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],t&&this.registerControl(n,t),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,t={}){(function $t(e,n,t){e._forEachChild((r,o)=>{if(void 0===t[o])throw new i.vHH(1002,"")})})(this,0,n),Object.keys(n).forEach(r=>{(function qt(e,n,t){const r=e.controls;if(!(n?Object.keys(r):r).length)throw new i.vHH(1e3,"");if(!r[t])throw new i.vHH(1001,"")})(this,!0,r),this.controls[r].setValue(n[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(n,t={}){null!=n&&(Object.keys(n).forEach(r=>{const o=this.controls[r];o&&o.patchValue(n[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(n={},t={}){this._forEachChild((r,o)=>{r.reset(n?n[o]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t),this._updateTouched(t),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(n,t,r)=>(n[r]=t.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(t,r)=>!!r._syncPendingControls()||t);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(t=>{const r=this.controls[t];r&&n(r,t)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(const[t,r]of Object.entries(this.controls))if(this.contains(t)&&n(r))return!0;return!1}_reduceValue(){return this._reduceChildren({},(t,r,o)=>((r.enabled||this.disabled)&&(t[o]=r.value),t))}_reduceChildren(n,t){let r=n;return this._forEachChild((o,s)=>{r=t(r,o,s)}),r}_allControlsDisabled(){for(const n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}}const y=new i.OlP("CallSetDisabledState",{providedIn:"root",factory:()=>O}),O="always";function L(e,n){return[...n.path,e]}function F(e,n,t=O){lt(e,n),n.valueAccessor.writeValue(e.value),(e.disabled||"always"===t)&&n.valueAccessor.setDisabledState?.(e.disabled),function Ge(e,n){n.valueAccessor.registerOnChange(t=>{e._pendingValue=t,e._pendingChange=!0,e._pendingDirty=!0,"change"===e.updateOn&&Jt(e,n)})}(e,n),function Pe(e,n){const t=(r,o)=>{n.valueAccessor.writeValue(r),o&&n.viewToModelUpdate(r)};e.registerOnChange(t),n._registerOnDestroy(()=>{e._unregisterOnChange(t)})}(e,n),function Be(e,n){n.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,"blur"===e.updateOn&&e._pendingChange&&Jt(e,n),"submit"!==e.updateOn&&e.markAsTouched()})}(e,n),function Ne(e,n){if(n.valueAccessor.setDisabledState){const t=r=>{n.valueAccessor.setDisabledState(r)};e.registerOnDisabledChange(t),n._registerOnDestroy(()=>{e._unregisterOnDisabledChange(t)})}}(e,n)}function W(e,n,t=!0){const r=()=>{};n.valueAccessor&&(n.valueAccessor.registerOnChange(r),n.valueAccessor.registerOnTouched(r)),q(e,n),e&&(n._invokeOnDestroyCallbacks(),e._registerOnCollectionChange(()=>{}))}function Y(e,n){e.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(n)})}function lt(e,n){const t=Tt(e);null!==n.validator?e.setValidators(It(t,n.validator)):"function"==typeof t&&e.setValidators([t]);const r=kt(e);null!==n.asyncValidator?e.setAsyncValidators(It(r,n.asyncValidator)):"function"==typeof r&&e.setAsyncValidators([r]);const o=()=>e.updateValueAndValidity();Y(n._rawValidators,o),Y(n._rawAsyncValidators,o)}function q(e,n){let t=!1;if(null!==e){if(null!==n.validator){const o=Tt(e);if(Array.isArray(o)&&o.length>0){const s=o.filter(a=>a!==n.validator);s.length!==o.length&&(t=!0,e.setValidators(s))}}if(null!==n.asyncValidator){const o=kt(e);if(Array.isArray(o)&&o.length>0){const s=o.filter(a=>a!==n.asyncValidator);s.length!==o.length&&(t=!0,e.setAsyncValidators(s))}}}const r=()=>{};return Y(n._rawValidators,r),Y(n._rawAsyncValidators,r),t}function Jt(e,n){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function Kt(e,n){lt(e,n)}function ct(e,n){if(!e.hasOwnProperty("model"))return!1;const t=e.model;return!!t.isFirstChange()||!Object.is(n,t.currentValue)}function Zt(e,n){e._syncPendingControls(),n.forEach(t=>{const r=t.control;"submit"===r.updateOn&&r._pendingChange&&(t.viewToModelUpdate(r._pendingValue),r._pendingChange=!1)})}function dt(e,n){if(!n)return null;let t,r,o;return Array.isArray(n),n.forEach(s=>{s.constructor===g?t=s:function Te(e){return Object.getPrototypeOf(e.constructor)===p}(s)?r=s:o=s}),o||r||t||null}const Ue={provide:c,useExisting:(0,i.Gpc)(()=>$)},w=(()=>Promise.resolve())();let $=(()=>{class e extends c{constructor(t,r,o){super(),this.callSetDisabledState=o,this.submitted=!1,this._directives=new Set,this.ngSubmit=new i.vpe,this.form=new j({},et(t),nt(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){w.then(()=>{const r=this._findContainer(t.path);t.control=r.registerControl(t.name,t.control),F(t.control,t,this.callSetDisabledState),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){w.then(()=>{const r=this._findContainer(t.path);r&&r.removeControl(t.name),this._directives.delete(t)})}addFormGroup(t){w.then(()=>{const r=this._findContainer(t.path),o=new j({});Kt(o,t),r.registerControl(t.name,o),o.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){w.then(()=>{const r=this._findContainer(t.path);r&&r.removeControl(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,r){w.then(()=>{this.form.get(t.path).setValue(r)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submitted=!0,Zt(this.form,this._directives),this.ngSubmit.emit(t),"dialog"===t?.target?.method}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submitted=!1}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}static#t=this.\u0275fac=function(r){return new(r||e)(i.Y36(l,10),i.Y36(f,10),i.Y36(y,8))};static#e=this.\u0275dir=i.lG2({type:e,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(r,o){1&r&&i.NdJ("submit",function(a){return o.onSubmit(a)})("reset",function(){return o.onReset()})},inputs:{options:["ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[i._Bn([Ue]),i.qOj]})}return e})();function Qt(e,n){const t=e.indexOf(n);t>-1&&e.splice(t,1)}function Xt(e){return"object"==typeof e&&null!==e&&2===Object.keys(e).length&&"value"in e&&"disabled"in e}const ht=class extends zt{constructor(n=null,t,r){super(st(t),at(r,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(n),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),R(t)&&(t.nonNullable||t.initialValueIsDefault)&&(this.defaultValue=Xt(n)?n.value:n)}setValue(n,t={}){this.value=this._pendingValue=n,this._onChange.length&&!1!==t.emitModelToViewChange&&this._onChange.forEach(r=>r(this.value,!1!==t.emitViewToModelChange)),this.updateValueAndValidity(t)}patchValue(n,t={}){this.setValue(n,t)}reset(n=this.defaultValue,t={}){this._applyFormState(n),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){Qt(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){Qt(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(n){Xt(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}},je={provide:m,useExisting:(0,i.Gpc)(()=>ft)},ne=(()=>Promise.resolve())();let ft=(()=>{class e extends m{constructor(t,r,o,s,a,_){super(),this._changeDetectorRef=a,this.callSetDisabledState=_,this.control=new ht,this._registered=!1,this.name="",this.update=new i.vpe,this._parent=t,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=dt(0,s)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){const r=t.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),ct(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!(!this.options||!this.options.standalone)}_setUpStandalone(){F(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),this._isStandalone()}_updateValue(t){ne.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){const r=t.isDisabled.currentValue,o=0!==r&&(0,i.VuI)(r);ne.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?L(t,this._parent):[t]}static#t=this.\u0275fac=function(r){return new(r||e)(i.Y36(c,9),i.Y36(l,10),i.Y36(f,10),i.Y36(h,10),i.Y36(i.sBO,8),i.Y36(y,8))};static#e=this.\u0275dir=i.lG2({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[i._Bn([je]),i.qOj,i.TTD]})}return e})(),re=(()=>{class e{static#t=this.\u0275fac=function(r){return new(r||e)};static#e=this.\u0275dir=i.lG2({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]})}return e})();const Le={provide:h,useExisting:(0,i.Gpc)(()=>pt),multi:!0};let pt=(()=>{class e extends p{writeValue(t){this.setProperty("value",t??"")}registerOnChange(t){this.onChange=r=>{t(""==r?null:parseFloat(r))}}static#t=this.\u0275fac=function(){let t;return function(o){return(t||(t=i.n5z(e)))(o||e)}}();static#e=this.\u0275dir=i.lG2({type:e,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(r,o){1&r&&i.NdJ("input",function(a){return o.onChange(a.target.value)})("blur",function(){return o.onTouched()})},features:[i._Bn([Le]),i.qOj]})}return e})(),ie=(()=>{class e{static#t=this.\u0275fac=function(r){return new(r||e)};static#e=this.\u0275mod=i.oAB({type:e});static#n=this.\u0275inj=i.cJS({})}return e})();const gt=new i.OlP("NgModelWithFormControlWarning"),ze={provide:c,useExisting:(0,i.Gpc)(()=>z)};let z=(()=>{class e extends c{constructor(t,r,o){super(),this.callSetDisabledState=o,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new i.vpe,this._setValidators(t),this._setAsyncValidators(r)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(q(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){const r=this.form.get(t.path);return F(r,t,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),r}getControl(t){return this.form.get(t.path)}removeControl(t){W(t.control||null,t,!1),function ke(e,n){const t=e.indexOf(n);t>-1&&e.splice(t,1)}(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,r){this.form.get(t.path).setValue(r)}onSubmit(t){return this.submitted=!0,Zt(this.form,this.directives),this.ngSubmit.emit(t),"dialog"===t?.target?.method}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submitted=!1}_updateDomValue(){this.directives.forEach(t=>{const r=t.control,o=this.form.get(t.path);r!==o&&(W(r||null,t),(e=>e instanceof ht)(o)&&(F(o,t,this.callSetDisabledState),t.control=o))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){const r=this.form.get(t.path);Kt(r,t),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){const r=this.form.get(t.path);r&&function xe(e,n){return q(e,n)}(r,t)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){lt(this.form,this),this._oldForm&&q(this._oldForm,this)}_checkFormPresent(){}static#t=this.\u0275fac=function(r){return new(r||e)(i.Y36(l,10),i.Y36(f,10),i.Y36(y,8))};static#e=this.\u0275dir=i.lG2({type:e,selectors:[["","formGroup",""]],hostBindings:function(r,o){1&r&&i.NdJ("submit",function(a){return o.onSubmit(a)})("reset",function(){return o.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[i._Bn([ze]),i.qOj,i.TTD]})}return e})();const Ze={provide:m,useExisting:(0,i.Gpc)(()=>yt)};let yt=(()=>{class e extends m{set isDisabled(t){}static#t=this._ngModelWarningSentOnce=!1;constructor(t,r,o,s,a){super(),this._ngModelWarningConfig=a,this._added=!1,this.name=null,this.update=new i.vpe,this._ngModelWarningSent=!1,this._parent=t,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=dt(0,s)}ngOnChanges(t){this._added||this._setUpControl(),ct(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return L(null==this.name?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}static#e=this.\u0275fac=function(r){return new(r||e)(i.Y36(c,13),i.Y36(l,10),i.Y36(f,10),i.Y36(h,10),i.Y36(gt,8))};static#n=this.\u0275dir=i.lG2({type:e,selectors:[["","formControlName",""]],inputs:{name:["formControlName","name"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},features:[i._Bn([Ze]),i.qOj,i.TTD]})}return e})();const Qe={provide:h,useExisting:(0,i.Gpc)(()=>J),multi:!0};function ue(e,n){return null==e?`${n}`:(n&&"object"==typeof n&&(n="Object"),`${e}: ${n}`.slice(0,50))}let J=(()=>{class e extends p{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(t){this._compareWith=t}writeValue(t){this.value=t;const o=ue(this._getOptionId(t),t);this.setProperty("value",o)}registerOnChange(t){this.onChange=r=>{this.value=this._getOptionValue(r),t(this.value)}}_registerOption(){return(this._idCounter++).toString()}_getOptionId(t){for(const r of this._optionMap.keys())if(this._compareWith(this._optionMap.get(r),t))return r;return null}_getOptionValue(t){const r=function Xe(e){return e.split(":")[0]}(t);return this._optionMap.has(r)?this._optionMap.get(r):t}static#t=this.\u0275fac=function(){let t;return function(o){return(t||(t=i.n5z(e)))(o||e)}}();static#e=this.\u0275dir=i.lG2({type:e,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(r,o){1&r&&i.NdJ("change",function(a){return o.onChange(a.target.value)})("blur",function(){return o.onTouched()})},inputs:{compareWith:"compareWith"},features:[i._Bn([Qe]),i.qOj]})}return e})(),ce=(()=>{class e{constructor(t,r,o){this._element=t,this._renderer=r,this._select=o,this._select&&(this.id=this._select._registerOption())}set ngValue(t){null!=this._select&&(this._select._optionMap.set(this.id,t),this._setElementValue(ue(this.id,t)),this._select.writeValue(this._select.value))}set value(t){this._setElementValue(t),this._select&&this._select.writeValue(this._select.value)}_setElementValue(t){this._renderer.setProperty(this._element.nativeElement,"value",t)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}static#t=this.\u0275fac=function(r){return new(r||e)(i.Y36(i.SBq),i.Y36(i.Qsj),i.Y36(J,9))};static#e=this.\u0275dir=i.lG2({type:e,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}})}return e})();const tn={provide:h,useExisting:(0,i.Gpc)(()=>vt),multi:!0};function de(e,n){return null==e?`${n}`:("string"==typeof n&&(n=`'${n}'`),n&&"object"==typeof n&&(n="Object"),`${e}: ${n}`.slice(0,50))}let vt=(()=>{class e extends p{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(t){this._compareWith=t}writeValue(t){let r;if(this.value=t,Array.isArray(t)){const o=t.map(s=>this._getOptionId(s));r=(s,a)=>{s._setSelected(o.indexOf(a.toString())>-1)}}else r=(o,s)=>{o._setSelected(!1)};this._optionMap.forEach(r)}registerOnChange(t){this.onChange=r=>{const o=[],s=r.selectedOptions;if(void 0!==s){const a=s;for(let _=0;_<a.length;_++){const Vt=this._getOptionValue(a[_].value);o.push(Vt)}}else{const a=r.options;for(let _=0;_<a.length;_++){const K=a[_];if(K.selected){const Vt=this._getOptionValue(K.value);o.push(Vt)}}}this.value=o,t(o)}}_registerOption(t){const r=(this._idCounter++).toString();return this._optionMap.set(r,t),r}_getOptionId(t){for(const r of this._optionMap.keys())if(this._compareWith(this._optionMap.get(r)._value,t))return r;return null}_getOptionValue(t){const r=function en(e){return e.split(":")[0]}(t);return this._optionMap.has(r)?this._optionMap.get(r)._value:t}static#t=this.\u0275fac=function(){let t;return function(o){return(t||(t=i.n5z(e)))(o||e)}}();static#e=this.\u0275dir=i.lG2({type:e,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(r,o){1&r&&i.NdJ("change",function(a){return o.onChange(a.target)})("blur",function(){return o.onTouched()})},inputs:{compareWith:"compareWith"},features:[i._Bn([tn]),i.qOj]})}return e})(),he=(()=>{class e{constructor(t,r,o){this._element=t,this._renderer=r,this._select=o,this._select&&(this.id=this._select._registerOption(this))}set ngValue(t){null!=this._select&&(this._value=t,this._setElementValue(de(this.id,t)),this._select.writeValue(this._select.value))}set value(t){this._select?(this._value=t,this._setElementValue(de(this.id,t)),this._select.writeValue(this._select.value)):this._setElementValue(t)}_setElementValue(t){this._renderer.setProperty(this._element.nativeElement,"value",t)}_setSelected(t){this._renderer.setProperty(this._element.nativeElement,"selected",t)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}static#t=this.\u0275fac=function(r){return new(r||e)(i.Y36(i.SBq),i.Y36(i.Qsj),i.Y36(vt,9))};static#e=this.\u0275dir=i.lG2({type:e,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}})}return e})(),De=(()=>{class e{static#t=this.\u0275fac=function(r){return new(r||e)};static#e=this.\u0275mod=i.oAB({type:e});static#n=this.\u0275inj=i.cJS({imports:[ie]})}return e})(),hn=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:y,useValue:t.callSetDisabledState??O}]}}static#t=this.\u0275fac=function(r){return new(r||e)};static#e=this.\u0275mod=i.oAB({type:e});static#n=this.\u0275inj=i.cJS({imports:[De]})}return e})(),fn=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:gt,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:y,useValue:t.callSetDisabledState??O}]}}static#t=this.\u0275fac=function(r){return new(r||e)};static#e=this.\u0275mod=i.oAB({type:e});static#n=this.\u0275inj=i.cJS({imports:[De]})}return e})()}}]);