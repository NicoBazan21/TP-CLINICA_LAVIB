"use strict";(self.webpackChunktp2_clinica=self.webpackChunktp2_clinica||[]).push([[32],{2032:(N,b,o)=>{o.d(b,{Nt:()=>k,c:()=>F});var h=o(2495),d=o(2831),s=o(5879),M=o(6232),p=o(8645);const y=(0,d.i$)({passive:!0});let A=(()=>{class n{constructor(e,t){this._platform=e,this._ngZone=t,this._monitoredElements=new Map}monitor(e){if(!this._platform.isBrowser)return M.E;const t=(0,h.fI)(e),i=this._monitoredElements.get(t);if(i)return i.subject;const a=new p.x,r="cdk-text-field-autofilled",u=l=>{"cdk-text-field-autofill-start"!==l.animationName||t.classList.contains(r)?"cdk-text-field-autofill-end"===l.animationName&&t.classList.contains(r)&&(t.classList.remove(r),this._ngZone.run(()=>a.next({target:l.target,isAutofilled:!1}))):(t.classList.add(r),this._ngZone.run(()=>a.next({target:l.target,isAutofilled:!0})))};return this._ngZone.runOutsideAngular(()=>{t.addEventListener("animationstart",u,y),t.classList.add("cdk-text-field-autofill-monitored")}),this._monitoredElements.set(t,{subject:a,unlisten:()=>{t.removeEventListener("animationstart",u,y)}}),a}stopMonitoring(e){const t=(0,h.fI)(e),i=this._monitoredElements.get(t);i&&(i.unlisten(),i.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static#e=this.\u0275fac=function(t){return new(t||n)(s.LFG(d.t4),s.LFG(s.R0b))};static#t=this.\u0275prov=s.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),I=(()=>{class n{static#e=this.\u0275fac=function(t){return new(t||n)};static#t=this.\u0275mod=s.oAB({type:n});static#i=this.\u0275inj=s.cJS({})}return n})();var m=o(6223),f=o(3680),_=o(9157);const w=new s.OlP("MAT_INPUT_VALUE_ACCESSOR"),H=["button","checkbox","file","hidden","image","radio","range","reset","submit"];let R=0;const T=(0,f.FD)(class{constructor(n,g,e,t){this._defaultErrorStateMatcher=n,this._parentForm=g,this._parentFormGroup=e,this.ngControl=t,this.stateChanges=new p.x}});let k=(()=>{class n extends T{get disabled(){return this._disabled}set disabled(e){this._disabled=(0,h.Ig)(e),this.focused&&(this.focused=!1,this.stateChanges.next())}get id(){return this._id}set id(e){this._id=e||this._uid}get required(){return this._required??this.ngControl?.control?.hasValidator(m.kI.required)??!1}set required(e){this._required=(0,h.Ig)(e)}get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&(0,d.qK)().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}get value(){return this._inputValueAccessor.value}set value(e){e!==this.value&&(this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=(0,h.Ig)(e)}constructor(e,t,i,a,r,u,l,S,L,E){super(u,a,r,i),this._elementRef=e,this._platform=t,this._autofillMonitor=S,this._formField=E,this._uid="mat-input-"+R++,this.focused=!1,this.stateChanges=new p.x,this.controlType="mat-input",this.autofilled=!1,this._disabled=!1,this._type="text",this._readonly=!1,this._neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(x=>(0,d.qK)().has(x)),this._iOSKeyupListener=x=>{const c=x.target;!c.value&&0===c.selectionStart&&0===c.selectionEnd&&(c.setSelectionRange(1,1),c.setSelectionRange(0,0))};const v=this._elementRef.nativeElement,C=v.nodeName.toLowerCase();this._inputValueAccessor=l||v,this._previousNativeValue=this.value,this.id=this.id,t.IOS&&L.runOutsideAngular(()=>{e.nativeElement.addEventListener("keyup",this._iOSKeyupListener)}),this._isServer=!this._platform.isBrowser,this._isNativeSelect="select"===C,this._isTextarea="textarea"===C,this._isInFormField=!!E,this._isNativeSelect&&(this.controlType=v.multiple?"mat-native-select-multiple":"mat-native-select")}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._platform.IOS&&this._elementRef.nativeElement.removeEventListener("keyup",this._iOSKeyupListener)}ngDoCheck(){this.ngControl&&(this.updateErrorState(),null!==this.ngControl.disabled&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}_focusChanged(e){e!==this.focused&&(this.focused=e,this.stateChanges.next())}_onInput(){}_dirtyCheckNativeValue(){const e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){const e=this._getPlaceholder();if(e!==this._previousPlaceholder){const t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute("placeholder",e):t.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){H.indexOf(this._type)}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!(this._isNeverEmpty()||this._elementRef.nativeElement.value||this._isBadInput()||this.autofilled)}get shouldLabelFloat(){if(this._isNativeSelect){const e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}return this.focused||!this.empty}setDescribedByIds(e){e.length?this._elementRef.nativeElement.setAttribute("aria-describedby",e.join(" ")):this._elementRef.nativeElement.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){const e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}static#e=this.\u0275fac=function(t){return new(t||n)(s.Y36(s.SBq),s.Y36(d.t4),s.Y36(m.a5,10),s.Y36(m.F,8),s.Y36(m.sg,8),s.Y36(f.rD),s.Y36(w,10),s.Y36(A),s.Y36(s.R0b),s.Y36(_.G_,8))};static#t=this.\u0275dir=s.lG2({type:n,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:18,hostBindings:function(t,i){1&t&&s.NdJ("focus",function(){return i._focusChanged(!0)})("blur",function(){return i._focusChanged(!1)})("input",function(){return i._onInput()}),2&t&&(s.Ikx("id",i.id)("disabled",i.disabled)("required",i.required),s.uIk("name",i.name||null)("readonly",i.readonly&&!i._isNativeSelect||null)("aria-invalid",i.empty&&i.required?null:i.errorState)("aria-required",i.required)("id",i.id),s.ekj("mat-input-server",i._isServer)("mat-mdc-form-field-textarea-control",i._isInFormField&&i._isTextarea)("mat-mdc-form-field-input-control",i._isInFormField)("mdc-text-field__input",i._isInFormField)("mat-mdc-native-select-inline",i._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:["aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly"},exportAs:["matInput"],features:[s._Bn([{provide:_.Eo,useExisting:n}]),s.qOj,s.TTD]})}return n})(),F=(()=>{class n{static#e=this.\u0275fac=function(t){return new(t||n)};static#t=this.\u0275mod=s.oAB({type:n});static#i=this.\u0275inj=s.cJS({imports:[f.BQ,_.lN,_.lN,I,f.BQ]})}return n})()}}]);