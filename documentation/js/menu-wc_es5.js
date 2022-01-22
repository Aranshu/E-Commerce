'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

customElements.define('compodoc-menu', /*#__PURE__*/function (_HTMLElement) {
  _inherits(_class, _HTMLElement);

  var _super = _createSuper(_class);

  function _class() {
    var _this;

    _classCallCheck(this, _class);

    _this = _super.call(this);
    _this.isNormalMode = _this.getAttribute('mode') === 'normal';
    return _this;
  }

  _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(this.isNormalMode);
    }
  }, {
    key: "render",
    value: function render(isNormalMode) {
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">e-commerce documentation</a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"Type to search\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>Getting started</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"overview.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>Overview\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>README\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"changelog.html\"  data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>CHANGELOG\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"contributing.html\"  data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>CONTRIBUTING\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"license.html\"  data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>LICENSE\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"todo.html\"  data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>TODO\n                            </a>\n                        </li>\n                                <li class=\"link\">\n                                    <a href=\"dependencies.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-list\"></span>Dependencies\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter modules\">\n                        <a data-type=\"chapter-link\" href=\"modules.html\">\n                            <div class=\"menu-toggler linked\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"', ">\n                                <span class=\"icon ion-ios-archive\"></span>\n                                <span class=\"link-name\">Modules</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                        </a>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"', ">\n                            <li class=\"link\">\n                                <a href=\"modules/AccountModule.html\" data-type=\"entity-link\" >AccountModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-AccountModule-5238f37adb4c9683c2ec4b04d55c0624894ddb78e29c75c1b4465e88f4f433ff849fe67982a631b41cf9495bd38822c6e74c056b4d7b4edf74343b5a24eea8dc"' : 'data-target="#xs-components-links-module-AccountModule-5238f37adb4c9683c2ec4b04d55c0624894ddb78e29c75c1b4465e88f4f433ff849fe67982a631b41cf9495bd38822c6e74c056b4d7b4edf74343b5a24eea8dc"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-AccountModule-5238f37adb4c9683c2ec4b04d55c0624894ddb78e29c75c1b4465e88f4f433ff849fe67982a631b41cf9495bd38822c6e74c056b4d7b4edf74343b5a24eea8dc"' : 'id="xs-components-links-module-AccountModule-5238f37adb4c9683c2ec4b04d55c0624894ddb78e29c75c1b4465e88f4f433ff849fe67982a631b41cf9495bd38822c6e74c056b4d7b4edf74343b5a24eea8dc"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/AccountComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AccountComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AccountRoutingModule.html\" data-type=\"entity-link\" >AccountRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AppModule.html\" data-type=\"entity-link\" >AppModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-AppModule-ff2aed1c64fd76f04d76d373117636110434825f370bc01f3afbc7cd7457fdc560194b47f329d09c941be54727e9de26219078f4e9ab28488c52e1e3370d2024"' : 'data-target="#xs-components-links-module-AppModule-ff2aed1c64fd76f04d76d373117636110434825f370bc01f3afbc7cd7457fdc560194b47f329d09c941be54727e9de26219078f4e9ab28488c52e1e3370d2024"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-AppModule-ff2aed1c64fd76f04d76d373117636110434825f370bc01f3afbc7cd7457fdc560194b47f329d09c941be54727e9de26219078f4e9ab28488c52e1e3370d2024"' : 'id="xs-components-links-module-AppModule-ff2aed1c64fd76f04d76d373117636110434825f370bc01f3afbc7cd7457fdc560194b47f329d09c941be54727e9de26219078f4e9ab28488c52e1e3370d2024"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/AppComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AppComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AppRoutingModule.html\" data-type=\"entity-link\" >AppRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AuthModule.html\" data-type=\"entity-link\" >AuthModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-AuthModule-7b47c029bac6337a2ba3ef100319b079c3ea43bf07063c7766899375d2394d6ee6917e219b18c99d5ae66fb75ded04d991f6b6bccf0a86ef5c823df6ae17de53"' : 'data-target="#xs-components-links-module-AuthModule-7b47c029bac6337a2ba3ef100319b079c3ea43bf07063c7766899375d2394d6ee6917e219b18c99d5ae66fb75ded04d991f6b6bccf0a86ef5c823df6ae17de53"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-AuthModule-7b47c029bac6337a2ba3ef100319b079c3ea43bf07063c7766899375d2394d6ee6917e219b18c99d5ae66fb75ded04d991f6b6bccf0a86ef5c823df6ae17de53"' : 'id="xs-components-links-module-AuthModule-7b47c029bac6337a2ba3ef100319b079c3ea43bf07063c7766899375d2394d6ee6917e219b18c99d5ae66fb75ded04d991f6b6bccf0a86ef5c823df6ae17de53"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/AuthComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AuthComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AuthRoutingModule.html\" data-type=\"entity-link\" >AuthRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/BlogModule.html\" data-type=\"entity-link\" >BlogModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-BlogModule-01ba130cc24f2ef1d3215660cfcddb03a83164629bdc0cd96bcde6f56eee6c835c1628dba4b36c7b3577dcaca8e24aa4a7b0964e658bb2e24efe03e48dce3c11"' : 'data-target="#xs-components-links-module-BlogModule-01ba130cc24f2ef1d3215660cfcddb03a83164629bdc0cd96bcde6f56eee6c835c1628dba4b36c7b3577dcaca8e24aa4a7b0964e658bb2e24efe03e48dce3c11"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-BlogModule-01ba130cc24f2ef1d3215660cfcddb03a83164629bdc0cd96bcde6f56eee6c835c1628dba4b36c7b3577dcaca8e24aa4a7b0964e658bb2e24efe03e48dce3c11"' : 'id="xs-components-links-module-BlogModule-01ba130cc24f2ef1d3215660cfcddb03a83164629bdc0cd96bcde6f56eee6c835c1628dba4b36c7b3577dcaca8e24aa4a7b0964e658bb2e24efe03e48dce3c11"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/BlogHomeComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >BlogHomeComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/BlogPostComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >BlogPostComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/BlogRoutingModule.html\" data-type=\"entity-link\" >BlogRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/CartModule.html\" data-type=\"entity-link\" >CartModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-CartModule-a17657389434ae935a95c8fa9aff80efd97401225fdeb00f17e40ce3372f5c42cfde334021c84976c17c1f482c40f4148edeadd85b939bb4e8eea537cd28a37a"' : 'data-target="#xs-components-links-module-CartModule-a17657389434ae935a95c8fa9aff80efd97401225fdeb00f17e40ce3372f5c42cfde334021c84976c17c1f482c40f4148edeadd85b939bb4e8eea537cd28a37a"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-CartModule-a17657389434ae935a95c8fa9aff80efd97401225fdeb00f17e40ce3372f5c42cfde334021c84976c17c1f482c40f4148edeadd85b939bb4e8eea537cd28a37a"' : 'id="xs-components-links-module-CartModule-a17657389434ae935a95c8fa9aff80efd97401225fdeb00f17e40ce3372f5c42cfde334021c84976c17c1f482c40f4148edeadd85b939bb4e8eea537cd28a37a"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/CartComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >CartComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/CartRoutingModule.html\" data-type=\"entity-link\" >CartRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/HomeModule.html\" data-type=\"entity-link\" >HomeModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-HomeModule-4edf7a7919d1a695555888f28fa4f09a53be05d5784864b32f3da9ae0c03f9b242763ba28e1dab2624cbdacbc5635df650c2d821e968865d1ed40b82d07cabc5"' : 'data-target="#xs-components-links-module-HomeModule-4edf7a7919d1a695555888f28fa4f09a53be05d5784864b32f3da9ae0c03f9b242763ba28e1dab2624cbdacbc5635df650c2d821e968865d1ed40b82d07cabc5"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-HomeModule-4edf7a7919d1a695555888f28fa4f09a53be05d5784864b32f3da9ae0c03f9b242763ba28e1dab2624cbdacbc5635df650c2d821e968865d1ed40b82d07cabc5"' : 'id="xs-components-links-module-HomeModule-4edf7a7919d1a695555888f28fa4f09a53be05d5784864b32f3da9ae0c03f9b242763ba28e1dab2624cbdacbc5635df650c2d821e968865d1ed40b82d07cabc5"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/HomeComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >HomeComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/HomeRoutingModule.html\" data-type=\"entity-link\" >HomeRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/MoreModule.html\" data-type=\"entity-link\" >MoreModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-MoreModule-097bc729c59b31cccfa4d87481afb8533b3d6e3e0e4571e82439e386108cb1ced3fd0b19ef58c67d5fab9a1e0fe497548f2da1ed8c822ff31279cab449f40d1b"' : 'data-target="#xs-components-links-module-MoreModule-097bc729c59b31cccfa4d87481afb8533b3d6e3e0e4571e82439e386108cb1ced3fd0b19ef58c67d5fab9a1e0fe497548f2da1ed8c822ff31279cab449f40d1b"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-MoreModule-097bc729c59b31cccfa4d87481afb8533b3d6e3e0e4571e82439e386108cb1ced3fd0b19ef58c67d5fab9a1e0fe497548f2da1ed8c822ff31279cab449f40d1b"' : 'id="xs-components-links-module-MoreModule-097bc729c59b31cccfa4d87481afb8533b3d6e3e0e4571e82439e386108cb1ced3fd0b19ef58c67d5fab9a1e0fe497548f2da1ed8c822ff31279cab449f40d1b"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/AboutUsComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AboutUsComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/ContactComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ContactComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/FAQComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >FAQComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/TermsAndConditionComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >TermsAndConditionComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/MoreRoutingModule.html\" data-type=\"entity-link\" >MoreRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/NotFoundModule.html\" data-type=\"entity-link\" >NotFoundModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-NotFoundModule-da51e9fbca80fd7a530bab8bb6df473d5c08f1aeccb3412716439aa428f5d81d5db68c32e286d2fad9da3a9432bc7f69fdd2ca6cd553fc002ef37c16908322ba"' : 'data-target="#xs-components-links-module-NotFoundModule-da51e9fbca80fd7a530bab8bb6df473d5c08f1aeccb3412716439aa428f5d81d5db68c32e286d2fad9da3a9432bc7f69fdd2ca6cd553fc002ef37c16908322ba"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-NotFoundModule-da51e9fbca80fd7a530bab8bb6df473d5c08f1aeccb3412716439aa428f5d81d5db68c32e286d2fad9da3a9432bc7f69fdd2ca6cd553fc002ef37c16908322ba"' : 'id="xs-components-links-module-NotFoundModule-da51e9fbca80fd7a530bab8bb6df473d5c08f1aeccb3412716439aa428f5d81d5db68c32e286d2fad9da3a9432bc7f69fdd2ca6cd553fc002ef37c16908322ba"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/NotFoundComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >NotFoundComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/NotFoundRoutingModule.html\" data-type=\"entity-link\" >NotFoundRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/ProductListModule.html\" data-type=\"entity-link\" >ProductListModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-ProductListModule-31bd514d8ba675f9c99c168bd773cbd7440d4974e0448f2c6a28906d03ce58ee23d8b246b5d72f761f950e3e82cd6ec0c708cb11c6c463cf6fc5d5dc4e0d2db8"' : 'data-target="#xs-components-links-module-ProductListModule-31bd514d8ba675f9c99c168bd773cbd7440d4974e0448f2c6a28906d03ce58ee23d8b246b5d72f761f950e3e82cd6ec0c708cb11c6c463cf6fc5d5dc4e0d2db8"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-ProductListModule-31bd514d8ba675f9c99c168bd773cbd7440d4974e0448f2c6a28906d03ce58ee23d8b246b5d72f761f950e3e82cd6ec0c708cb11c6c463cf6fc5d5dc4e0d2db8"' : 'id="xs-components-links-module-ProductListModule-31bd514d8ba675f9c99c168bd773cbd7440d4974e0448f2c6a28906d03ce58ee23d8b246b5d72f761f950e3e82cd6ec0c708cb11c6c463cf6fc5d5dc4e0d2db8"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/CardComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >CardComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/FilterBarComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >FilterBarComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/ProductListComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ProductListComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/ProductListRoutingModule.html\" data-type=\"entity-link\" >ProductListRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/ProductModule.html\" data-type=\"entity-link\" >ProductModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-ProductModule-726e3835ab851a5a19660883bddcf328a3c7bc750075e1e5d34050b9b21ae6eb376a4294ace21f2a0084768793d2fd7319e7194ab51a0e589dbac06236f46f8f"' : 'data-target="#xs-components-links-module-ProductModule-726e3835ab851a5a19660883bddcf328a3c7bc750075e1e5d34050b9b21ae6eb376a4294ace21f2a0084768793d2fd7319e7194ab51a0e589dbac06236f46f8f"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-ProductModule-726e3835ab851a5a19660883bddcf328a3c7bc750075e1e5d34050b9b21ae6eb376a4294ace21f2a0084768793d2fd7319e7194ab51a0e589dbac06236f46f8f"' : 'id="xs-components-links-module-ProductModule-726e3835ab851a5a19660883bddcf328a3c7bc750075e1e5d34050b9b21ae6eb376a4294ace21f2a0084768793d2fd7319e7194ab51a0e589dbac06236f46f8f"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/ProductComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ProductComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/ProductRoutingModule.html\" data-type=\"entity-link\" >ProductRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/SharedModule.html\" data-type=\"entity-link\" >SharedModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-SharedModule-b3c2540936142edad02d59ae7b20e8b787cb696a93032aee16e17c41e1a43562e47f2c364a274eedcc5d23556ab3817444097deddebd3be7ea2e5d5e953d4edf"' : 'data-target="#xs-components-links-module-SharedModule-b3c2540936142edad02d59ae7b20e8b787cb696a93032aee16e17c41e1a43562e47f2c364a274eedcc5d23556ab3817444097deddebd3be7ea2e5d5e953d4edf"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-SharedModule-b3c2540936142edad02d59ae7b20e8b787cb696a93032aee16e17c41e1a43562e47f2c364a274eedcc5d23556ab3817444097deddebd3be7ea2e5d5e953d4edf"' : 'id="xs-components-links-module-SharedModule-b3c2540936142edad02d59ae7b20e8b787cb696a93032aee16e17c41e1a43562e47f2c364a274eedcc5d23556ab3817444097deddebd3be7ea2e5d5e953d4edf"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/FooterComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >FooterComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/NavBarComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >NavBarComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/StoreModule.html\" data-type=\"entity-link\" >StoreModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/StoreRoutingModule.html\" data-type=\"entity-link\" >StoreRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/WishlistModule.html\" data-type=\"entity-link\" >WishlistModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-WishlistModule-6ff866d9b2f7e5eb177e3b4e0b902e2ec1989b9bbd8ca40da95a12217d925dff89a92f13fc861010c26a4ea61c92cdcd55a6adaeb9eeddace2fc97b815bf2794"' : 'data-target="#xs-components-links-module-WishlistModule-6ff866d9b2f7e5eb177e3b4e0b902e2ec1989b9bbd8ca40da95a12217d925dff89a92f13fc861010c26a4ea61c92cdcd55a6adaeb9eeddace2fc97b815bf2794"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-WishlistModule-6ff866d9b2f7e5eb177e3b4e0b902e2ec1989b9bbd8ca40da95a12217d925dff89a92f13fc861010c26a4ea61c92cdcd55a6adaeb9eeddace2fc97b815bf2794"' : 'id="xs-components-links-module-WishlistModule-6ff866d9b2f7e5eb177e3b4e0b902e2ec1989b9bbd8ca40da95a12217d925dff89a92f13fc861010c26a4ea61c92cdcd55a6adaeb9eeddace2fc97b815bf2794"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/WishlistComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >WishlistComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/WishlistRoutingModule.html\" data-type=\"entity-link\" >WishlistRoutingModule</a>\n                            </li>\n                </ul>\n                </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"', ">\n                            <span class=\"icon ion-ios-cube\"></span>\n                            <span>Miscellaneous</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"', ">\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/variables.html\" data-type=\"entity-link\">Variables</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <a data-type=\"chapter-link\" href=\"routes.html\"><span class=\"icon ion-ios-git-branch\"></span>Routes</a>\n                        </li>\n                    <li class=\"chapter\">\n                        <a data-type=\"chapter-link\" href=\"coverage.html\"><span class=\"icon ion-ios-stats\"></span>Documentation coverage</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li class=\"copyright\">\n                        Documentation generated using <a href=\"https://compodoc.app/\" target=\"_blank\">\n                            <img data-src=\"images/compodoc-vectorise.png\" class=\"img-responsive\" data-type=\"compodoc-logo\">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);

  return _class;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));