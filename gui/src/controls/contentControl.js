/// <reference path="../../../dist/preview release/babylon.d.ts"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BABYLON;
(function (BABYLON) {
    var GUI;
    (function (GUI) {
        var ContentControl = (function (_super) {
            __extends(ContentControl, _super);
            function ContentControl(name) {
                var _this = _super.call(this, name) || this;
                _this.name = name;
                _this._measureForChild = GUI.Measure.Empty();
                return _this;
            }
            Object.defineProperty(ContentControl.prototype, "child", {
                get: function () {
                    return this._child;
                },
                set: function (control) {
                    if (this._child === control) {
                        return;
                    }
                    this._child = control;
                    control._link(this._root, this._host);
                    this._markAsDirty();
                },
                enumerable: true,
                configurable: true
            });
            ContentControl.prototype._localDraw = function (context) {
                // Implemented by child to be injected inside main draw
            };
            ContentControl.prototype._draw = function (parentMeasure, context) {
                context.save();
                _super.prototype._processMeasures.call(this, parentMeasure, context);
                this.applyStates(context);
                this._localDraw(context);
                if (this._child) {
                    this._child._draw(this._measureForChild, context);
                }
                context.restore();
            };
            ContentControl.prototype._additionalProcessing = function (parentMeasure, context) {
                _super.prototype._additionalProcessing.call(this, parentMeasure, context);
                this._measureForChild.copyFrom(this._currentMeasure);
            };
            return ContentControl;
        }(GUI.Control));
        GUI.ContentControl = ContentControl;
    })(GUI = BABYLON.GUI || (BABYLON.GUI = {}));
})(BABYLON || (BABYLON = {}));

//# sourceMappingURL=contentControl.js.map
