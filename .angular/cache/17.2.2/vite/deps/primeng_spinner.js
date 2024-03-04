import {
  NG_VALUE_ACCESSOR,
  NgModel
} from "./chunk-VHJSQZVO.js";
import {
  CommonModule,
  NgClass,
  NgStyle
} from "./chunk-V422C23J.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  NgModule,
  Optional,
  Output,
  ViewChild,
  ViewEncapsulation$1,
  forwardRef,
  setClassMetadata,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵviewQuery
} from "./chunk-FLSSFABL.js";
import "./chunk-J4B6MK7R.js";

// node_modules/primeng/fesm2022/primeng-inputtext.mjs
var InputText = class _InputText {
  el;
  ngModel;
  cd;
  filled;
  constructor(el, ngModel, cd) {
    this.el = el;
    this.ngModel = ngModel;
    this.cd = cd;
  }
  ngAfterViewInit() {
    this.updateFilledState();
    this.cd.detectChanges();
  }
  ngDoCheck() {
    this.updateFilledState();
  }
  onInput() {
    this.updateFilledState();
  }
  updateFilledState() {
    this.filled = this.el.nativeElement.value && this.el.nativeElement.value.length || this.ngModel && this.ngModel.model;
  }
  static ɵfac = function InputText_Factory(t) {
    return new (t || _InputText)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgModel, 8), ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _InputText,
    selectors: [["", "pInputText", ""]],
    hostAttrs: [1, "p-inputtext", "p-component", "p-element"],
    hostVars: 2,
    hostBindings: function InputText_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("input", function InputText_input_HostBindingHandler($event) {
          return ctx.onInput($event);
        });
      }
      if (rf & 2) {
        ɵɵclassProp("p-filled", ctx.filled);
      }
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputText, [{
    type: Directive,
    args: [{
      selector: "[pInputText]",
      host: {
        class: "p-inputtext p-component p-element",
        "[class.p-filled]": "filled"
      }
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NgModel,
    decorators: [{
      type: Optional
    }]
  }, {
    type: ChangeDetectorRef
  }], {
    onInput: [{
      type: HostListener,
      args: ["input", ["$event"]]
    }]
  });
})();
var InputTextModule = class _InputTextModule {
  static ɵfac = function InputTextModule_Factory(t) {
    return new (t || _InputTextModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _InputTextModule,
    declarations: [InputText],
    imports: [CommonModule],
    exports: [InputText]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputTextModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [InputText],
      declarations: [InputText]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-spinner.mjs
var _c0 = ["inputfield"];
var _c1 = (a1) => ({
  "ui-spinner-button ui-spinner-up ui-corner-tr ui-button ui-widget ui-state-default": true,
  "ui-state-disabled": a1
});
var _c2 = (a1) => ({
  "ui-spinner-button ui-spinner-down ui-corner-br ui-button ui-widget ui-state-default": true,
  "ui-state-disabled": a1
});
var SPINNER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => Spinner),
  multi: true
};
var Spinner = class _Spinner {
  el;
  cd;
  onChange = new EventEmitter();
  onFocus = new EventEmitter();
  onBlur = new EventEmitter();
  min;
  max;
  maxlength;
  size;
  placeholder;
  inputId;
  disabled;
  readonly;
  tabindex;
  required;
  name;
  ariaLabelledBy;
  inputStyle;
  inputStyleClass;
  formatInput;
  decimalSeparator;
  thousandSeparator;
  precision;
  value;
  _step = 1;
  formattedValue;
  onModelChange = () => {
  };
  onModelTouched = () => {
  };
  keyPattern = /[0-9\+\-]/;
  timer;
  focus;
  filled;
  negativeSeparator = "-";
  localeDecimalSeparator;
  localeThousandSeparator;
  thousandRegExp;
  calculatedPrecision;
  inputfieldViewChild;
  get step() {
    return this._step;
  }
  set step(val) {
    this._step = val;
    if (this._step != null) {
      let tokens = this.step.toString().split(/[,]|[.]/);
      this.calculatedPrecision = tokens[1] ? tokens[1].length : void 0;
    }
  }
  constructor(el, cd) {
    this.el = el;
    this.cd = cd;
  }
  ngOnInit() {
    if (this.formatInput) {
      this.localeDecimalSeparator = 1.1.toLocaleString().substring(1, 2);
      this.localeThousandSeparator = 1e3.toLocaleString().substring(1, 2);
      this.thousandRegExp = new RegExp(`[${this.thousandSeparator || this.localeThousandSeparator}]`, "gim");
      if (this.decimalSeparator && this.thousandSeparator && this.decimalSeparator === this.thousandSeparator) {
        console.warn("thousandSeparator and decimalSeparator cannot have the same value.");
      }
    }
  }
  repeat(event, interval, dir) {
    let i = interval || 500;
    this.clearTimer();
    this.timer = setTimeout(() => {
      this.repeat(event, 40, dir);
    }, i);
    this.spin(event, dir);
  }
  spin(event, dir) {
    let step = this.step * dir;
    let currentValue;
    let precision = this.getPrecision();
    if (this.value)
      currentValue = typeof this.value === "string" ? this.parseValue(this.value) : this.value;
    else
      currentValue = 0;
    if (precision)
      this.value = parseFloat(this.toFixed(currentValue + step, precision));
    else
      this.value = currentValue + step;
    if (this.maxlength !== void 0 && this.value.toString().length > this.maxlength) {
      this.value = currentValue;
    }
    if (this.min !== void 0 && this.value < this.min) {
      this.value = this.min;
    }
    if (this.max !== void 0 && this.value > this.max) {
      this.value = this.max;
    }
    this.formatValue();
    this.onModelChange(this.value);
    this.onChange.emit(event);
  }
  getPrecision() {
    return this.precision === void 0 ? this.calculatedPrecision : this.precision;
  }
  toFixed(value, precision) {
    let power = Math.pow(10, precision || 0);
    return String(Math.round(value * power) / power);
  }
  onUpButtonMousedown(event) {
    if (!this.disabled) {
      this.inputfieldViewChild.nativeElement.focus();
      this.repeat(event, null, 1);
      this.updateFilledState();
      event.preventDefault();
    }
  }
  onUpButtonMouseup(event) {
    if (!this.disabled) {
      this.clearTimer();
    }
  }
  onUpButtonMouseleave(event) {
    if (!this.disabled) {
      this.clearTimer();
    }
  }
  onDownButtonMousedown(event) {
    if (!this.disabled) {
      this.inputfieldViewChild.nativeElement.focus();
      this.repeat(event, null, -1);
      this.updateFilledState();
      event.preventDefault();
    }
  }
  onDownButtonMouseup(event) {
    if (!this.disabled) {
      this.clearTimer();
    }
  }
  onDownButtonMouseleave(event) {
    if (!this.disabled) {
      this.clearTimer();
    }
  }
  onInputKeydown(event) {
    if (event.which == 38) {
      this.spin(event, 1);
      event.preventDefault();
    } else if (event.which == 40) {
      this.spin(event, -1);
      event.preventDefault();
    }
  }
  onInputChange(event) {
    this.onChange.emit(event);
  }
  onInput(event) {
    this.value = this.parseValue(event.target.value);
    this.onModelChange(this.value);
    this.updateFilledState();
  }
  onInputBlur(event) {
    this.focus = false;
    this.formatValue();
    this.onModelTouched();
    this.onBlur.emit(event);
  }
  onInputFocus(event) {
    this.focus = true;
    this.onFocus.emit(event);
  }
  parseValue(val) {
    let value;
    let precision = this.getPrecision();
    if (val.trim() === "") {
      value = null;
    } else {
      if (this.formatInput) {
        val = val.replace(this.thousandRegExp, "");
      }
      if (precision) {
        val = this.formatInput ? val.replace(this.decimalSeparator || this.localeDecimalSeparator, ".") : val.replace(",", ".");
        value = parseFloat(val);
      } else {
        value = parseInt(val, 10);
      }
      if (!isNaN(value)) {
        if (this.max !== null && value > this.max) {
          value = this.max;
        }
        if (this.min !== null && value < this.min) {
          value = this.min;
        }
      } else {
        value = null;
      }
    }
    return value;
  }
  formatValue() {
    let value = this.value;
    let precision = this.getPrecision();
    if (value != null) {
      if (this.formatInput) {
        value = value.toLocaleString(void 0, {
          maximumFractionDigits: 20
        });
        if (this.decimalSeparator && this.thousandSeparator) {
          value = value.split(this.localeDecimalSeparator);
          if (precision && value[1]) {
            value[1] = (this.decimalSeparator || this.localeDecimalSeparator) + value[1];
          }
          if (this.thousandSeparator && value[0].length > 3) {
            value[0] = value[0].replace(new RegExp(`[${this.localeThousandSeparator}]`, "gim"), this.thousandSeparator);
          }
          value = value.join("");
        }
      }
      this.formattedValue = value.toString();
    } else {
      this.formattedValue = null;
    }
    if (this.inputfieldViewChild && this.inputfieldViewChild.nativeElement) {
      this.inputfieldViewChild.nativeElement.value = this.formattedValue;
    }
  }
  clearTimer() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
  writeValue(value) {
    this.value = value;
    this.formatValue();
    this.updateFilledState();
    this.cd.markForCheck();
  }
  registerOnChange(fn) {
    this.onModelChange = fn;
  }
  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }
  setDisabledState(val) {
    this.disabled = val;
    this.cd.markForCheck();
  }
  updateFilledState() {
    this.filled = this.value !== void 0 && this.value != null;
  }
  static ɵfac = function Spinner_Factory(t) {
    return new (t || _Spinner)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _Spinner,
    selectors: [["p-spinner"]],
    viewQuery: function Spinner_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.inputfieldViewChild = _t.first);
      }
    },
    hostAttrs: [1, "p-element"],
    hostVars: 4,
    hostBindings: function Spinner_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("ui-inputwrapper-filled", ctx.filled)("ui-inputwrapper-focus", ctx.focus);
      }
    },
    inputs: {
      min: "min",
      max: "max",
      maxlength: "maxlength",
      size: "size",
      placeholder: "placeholder",
      inputId: "inputId",
      disabled: "disabled",
      readonly: "readonly",
      tabindex: "tabindex",
      required: "required",
      name: "name",
      ariaLabelledBy: "ariaLabelledBy",
      inputStyle: "inputStyle",
      inputStyleClass: "inputStyleClass",
      formatInput: "formatInput",
      decimalSeparator: "decimalSeparator",
      thousandSeparator: "thousandSeparator",
      precision: "precision",
      step: "step"
    },
    outputs: {
      onChange: "onChange",
      onFocus: "onFocus",
      onBlur: "onBlur"
    },
    features: [ɵɵProvidersFeature([SPINNER_VALUE_ACCESSOR])],
    decls: 7,
    vars: 28,
    consts: [[1, "ui-spinner", "ui-widget", "ui-corner-all"], ["type", "text", 3, "value", "disabled", "readonly", "ngStyle", "ngClass", "keydown", "blur", "input", "change", "focus"], ["inputfield", ""], ["type", "button", "tabindex", "-1", 3, "ngClass", "disabled", "mouseleave", "mousedown", "mouseup"], [1, "ui-spinner-button-icon", "pi", "pi-caret-up", "ui-clickable"], [1, "ui-spinner-button-icon", "pi", "pi-caret-down", "ui-clickable"]],
    template: function Spinner_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "span", 0)(1, "input", 1, 2);
        ɵɵlistener("keydown", function Spinner_Template_input_keydown_1_listener($event) {
          return ctx.onInputKeydown($event);
        })("blur", function Spinner_Template_input_blur_1_listener($event) {
          return ctx.onInputBlur($event);
        })("input", function Spinner_Template_input_input_1_listener($event) {
          return ctx.onInput($event);
        })("change", function Spinner_Template_input_change_1_listener($event) {
          return ctx.onInputChange($event);
        })("focus", function Spinner_Template_input_focus_1_listener($event) {
          return ctx.onInputFocus($event);
        });
        ɵɵelementEnd();
        ɵɵelementStart(3, "button", 3);
        ɵɵlistener("mouseleave", function Spinner_Template_button_mouseleave_3_listener($event) {
          return ctx.onUpButtonMouseleave($event);
        })("mousedown", function Spinner_Template_button_mousedown_3_listener($event) {
          return ctx.onUpButtonMousedown($event);
        })("mouseup", function Spinner_Template_button_mouseup_3_listener($event) {
          return ctx.onUpButtonMouseup($event);
        });
        ɵɵelement(4, "span", 4);
        ɵɵelementEnd();
        ɵɵelementStart(5, "button", 3);
        ɵɵlistener("mouseleave", function Spinner_Template_button_mouseleave_5_listener($event) {
          return ctx.onDownButtonMouseleave($event);
        })("mousedown", function Spinner_Template_button_mousedown_5_listener($event) {
          return ctx.onDownButtonMousedown($event);
        })("mouseup", function Spinner_Template_button_mouseup_5_listener($event) {
          return ctx.onDownButtonMouseup($event);
        });
        ɵɵelement(6, "span", 5);
        ɵɵelementEnd()();
      }
      if (rf & 2) {
        ɵɵadvance();
        ɵɵclassMap(ctx.inputStyleClass);
        ɵɵproperty("value", ctx.formattedValue || null)("disabled", ctx.disabled)("readonly", ctx.readonly)("ngStyle", ctx.inputStyle)("ngClass", "ui-spinner-input ui-inputtext ui-widget ui-state-default ui-corner-all");
        ɵɵattribute("id", ctx.inputId)("name", ctx.name)("aria-valumin", ctx.min)("aria-valuemax", ctx.max)("aria-valuenow", ctx.value)("aria-labelledby", ctx.ariaLabelledBy)("size", ctx.size)("maxlength", ctx.maxlength)("tabindex", ctx.tabindex)("placeholder", ctx.placeholder)("required", ctx.required);
        ɵɵadvance(2);
        ɵɵproperty("ngClass", ɵɵpureFunction1(24, _c1, ctx.disabled))("disabled", ctx.disabled || ctx.readonly);
        ɵɵattribute("readonly", ctx.readonly);
        ɵɵadvance(2);
        ɵɵproperty("ngClass", ɵɵpureFunction1(26, _c2, ctx.disabled))("disabled", ctx.disabled || ctx.readonly);
        ɵɵattribute("readonly", ctx.readonly);
      }
    },
    dependencies: [NgClass, NgStyle],
    styles: ["@layer primeng{.ui-spinner{display:inline-block;overflow:visible;padding:0;position:relative;vertical-align:middle}.ui-spinner-input{vertical-align:middle;padding-right:1.5em}.ui-spinner-button{cursor:default;display:block;height:50%;margin:0;overflow:hidden;padding:0;position:absolute;right:0;text-align:center;vertical-align:middle;width:1.5em}.ui-spinner .ui-spinner-button-icon{position:absolute;top:50%;left:50%;margin-top:-.5em;margin-left:-.5em;width:1em}.ui-spinner-up{top:0}.ui-spinner-down{bottom:0}.ui-fluid .ui-spinner{width:100%}.ui-fluid .ui-spinner .ui-spinner-input{padding-right:2em;width:100%}.ui-fluid .ui-spinner .ui-spinner-button{width:1.5em}.ui-fluid .ui-spinner .ui-spinner-button .ui-spinner-button-icon{left:.7em}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Spinner, [{
    type: Component,
    args: [{
      selector: "p-spinner",
      template: `
        <span class="ui-spinner ui-widget ui-corner-all">
            <input
                #inputfield
                type="text"
                [attr.id]="inputId"
                [value]="formattedValue || null"
                [attr.name]="name"
                [attr.aria-valumin]="min"
                [attr.aria-valuemax]="max"
                [attr.aria-valuenow]="value"
                [attr.aria-labelledby]="ariaLabelledBy"
                [attr.size]="size"
                [attr.maxlength]="maxlength"
                [attr.tabindex]="tabindex"
                [attr.placeholder]="placeholder"
                [disabled]="disabled"
                [readonly]="readonly"
                [attr.required]="required"
                (keydown)="onInputKeydown($event)"
                (blur)="onInputBlur($event)"
                (input)="onInput($event)"
                (change)="onInputChange($event)"
                (focus)="onInputFocus($event)"
                [ngStyle]="inputStyle"
                [class]="inputStyleClass"
                [ngClass]="'ui-spinner-input ui-inputtext ui-widget ui-state-default ui-corner-all'"
            />
            <button
                type="button"
                [ngClass]="{ 'ui-spinner-button ui-spinner-up ui-corner-tr ui-button ui-widget ui-state-default': true, 'ui-state-disabled': disabled }"
                [disabled]="disabled || readonly"
                tabindex="-1"
                [attr.readonly]="readonly"
                (mouseleave)="onUpButtonMouseleave($event)"
                (mousedown)="onUpButtonMousedown($event)"
                (mouseup)="onUpButtonMouseup($event)"
            >
                <span class="ui-spinner-button-icon pi pi-caret-up ui-clickable"></span>
            </button>
            <button
                type="button"
                [ngClass]="{ 'ui-spinner-button ui-spinner-down ui-corner-br ui-button ui-widget ui-state-default': true, 'ui-state-disabled': disabled }"
                [disabled]="disabled || readonly"
                tabindex="-1"
                [attr.readonly]="readonly"
                (mouseleave)="onDownButtonMouseleave($event)"
                (mousedown)="onDownButtonMousedown($event)"
                (mouseup)="onDownButtonMouseup($event)"
            >
                <span class="ui-spinner-button-icon pi pi-caret-down ui-clickable"></span>
            </button>
        </span>
    `,
      host: {
        class: "p-element",
        "[class.ui-inputwrapper-filled]": "filled",
        "[class.ui-inputwrapper-focus]": "focus"
      },
      providers: [SPINNER_VALUE_ACCESSOR],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      styles: ["@layer primeng{.ui-spinner{display:inline-block;overflow:visible;padding:0;position:relative;vertical-align:middle}.ui-spinner-input{vertical-align:middle;padding-right:1.5em}.ui-spinner-button{cursor:default;display:block;height:50%;margin:0;overflow:hidden;padding:0;position:absolute;right:0;text-align:center;vertical-align:middle;width:1.5em}.ui-spinner .ui-spinner-button-icon{position:absolute;top:50%;left:50%;margin-top:-.5em;margin-left:-.5em;width:1em}.ui-spinner-up{top:0}.ui-spinner-down{bottom:0}.ui-fluid .ui-spinner{width:100%}.ui-fluid .ui-spinner .ui-spinner-input{padding-right:2em;width:100%}.ui-fluid .ui-spinner .ui-spinner-button{width:1.5em}.ui-fluid .ui-spinner .ui-spinner-button .ui-spinner-button-icon{left:.7em}}\n"]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }], {
    onChange: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    maxlength: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    inputId: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    readonly: [{
      type: Input
    }],
    tabindex: [{
      type: Input
    }],
    required: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    inputStyle: [{
      type: Input
    }],
    inputStyleClass: [{
      type: Input
    }],
    formatInput: [{
      type: Input
    }],
    decimalSeparator: [{
      type: Input
    }],
    thousandSeparator: [{
      type: Input
    }],
    precision: [{
      type: Input
    }],
    inputfieldViewChild: [{
      type: ViewChild,
      args: ["inputfield"]
    }],
    step: [{
      type: Input
    }]
  });
})();
var SpinnerModule = class _SpinnerModule {
  static ɵfac = function SpinnerModule_Factory(t) {
    return new (t || _SpinnerModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _SpinnerModule,
    declarations: [Spinner],
    imports: [CommonModule, InputTextModule],
    exports: [Spinner]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule, InputTextModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SpinnerModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, InputTextModule],
      exports: [Spinner],
      declarations: [Spinner]
    }]
  }], null, null);
})();
export {
  SPINNER_VALUE_ACCESSOR,
  Spinner,
  SpinnerModule
};
//# sourceMappingURL=primeng_spinner.js.map
