'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">e-commerce documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="changelog.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CHANGELOG
                            </a>
                        </li>
                        <li class="link">
                            <a href="contributing.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CONTRIBUTING
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="todo.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>TODO
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AccountModule.html" data-type="entity-link" >AccountModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AccountModule-5238f37adb4c9683c2ec4b04d55c0624894ddb78e29c75c1b4465e88f4f433ff849fe67982a631b41cf9495bd38822c6e74c056b4d7b4edf74343b5a24eea8dc"' : 'data-target="#xs-components-links-module-AccountModule-5238f37adb4c9683c2ec4b04d55c0624894ddb78e29c75c1b4465e88f4f433ff849fe67982a631b41cf9495bd38822c6e74c056b4d7b4edf74343b5a24eea8dc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AccountModule-5238f37adb4c9683c2ec4b04d55c0624894ddb78e29c75c1b4465e88f4f433ff849fe67982a631b41cf9495bd38822c6e74c056b4d7b4edf74343b5a24eea8dc"' :
                                            'id="xs-components-links-module-AccountModule-5238f37adb4c9683c2ec4b04d55c0624894ddb78e29c75c1b4465e88f4f433ff849fe67982a631b41cf9495bd38822c6e74c056b4d7b4edf74343b5a24eea8dc"' }>
                                            <li class="link">
                                                <a href="components/AccountComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccountComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AccountRoutingModule.html" data-type="entity-link" >AccountRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-ff2aed1c64fd76f04d76d373117636110434825f370bc01f3afbc7cd7457fdc560194b47f329d09c941be54727e9de26219078f4e9ab28488c52e1e3370d2024"' : 'data-target="#xs-components-links-module-AppModule-ff2aed1c64fd76f04d76d373117636110434825f370bc01f3afbc7cd7457fdc560194b47f329d09c941be54727e9de26219078f4e9ab28488c52e1e3370d2024"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-ff2aed1c64fd76f04d76d373117636110434825f370bc01f3afbc7cd7457fdc560194b47f329d09c941be54727e9de26219078f4e9ab28488c52e1e3370d2024"' :
                                            'id="xs-components-links-module-AppModule-ff2aed1c64fd76f04d76d373117636110434825f370bc01f3afbc7cd7457fdc560194b47f329d09c941be54727e9de26219078f4e9ab28488c52e1e3370d2024"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthModule-7b47c029bac6337a2ba3ef100319b079c3ea43bf07063c7766899375d2394d6ee6917e219b18c99d5ae66fb75ded04d991f6b6bccf0a86ef5c823df6ae17de53"' : 'data-target="#xs-components-links-module-AuthModule-7b47c029bac6337a2ba3ef100319b079c3ea43bf07063c7766899375d2394d6ee6917e219b18c99d5ae66fb75ded04d991f6b6bccf0a86ef5c823df6ae17de53"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-7b47c029bac6337a2ba3ef100319b079c3ea43bf07063c7766899375d2394d6ee6917e219b18c99d5ae66fb75ded04d991f6b6bccf0a86ef5c823df6ae17de53"' :
                                            'id="xs-components-links-module-AuthModule-7b47c029bac6337a2ba3ef100319b079c3ea43bf07063c7766899375d2394d6ee6917e219b18c99d5ae66fb75ded04d991f6b6bccf0a86ef5c823df6ae17de53"' }>
                                            <li class="link">
                                                <a href="components/AuthComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link" >AuthRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BlogModule.html" data-type="entity-link" >BlogModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BlogModule-01ba130cc24f2ef1d3215660cfcddb03a83164629bdc0cd96bcde6f56eee6c835c1628dba4b36c7b3577dcaca8e24aa4a7b0964e658bb2e24efe03e48dce3c11"' : 'data-target="#xs-components-links-module-BlogModule-01ba130cc24f2ef1d3215660cfcddb03a83164629bdc0cd96bcde6f56eee6c835c1628dba4b36c7b3577dcaca8e24aa4a7b0964e658bb2e24efe03e48dce3c11"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BlogModule-01ba130cc24f2ef1d3215660cfcddb03a83164629bdc0cd96bcde6f56eee6c835c1628dba4b36c7b3577dcaca8e24aa4a7b0964e658bb2e24efe03e48dce3c11"' :
                                            'id="xs-components-links-module-BlogModule-01ba130cc24f2ef1d3215660cfcddb03a83164629bdc0cd96bcde6f56eee6c835c1628dba4b36c7b3577dcaca8e24aa4a7b0964e658bb2e24efe03e48dce3c11"' }>
                                            <li class="link">
                                                <a href="components/BlogHomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BlogHomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BlogPostComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BlogPostComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BlogRoutingModule.html" data-type="entity-link" >BlogRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CartModule.html" data-type="entity-link" >CartModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CartModule-a17657389434ae935a95c8fa9aff80efd97401225fdeb00f17e40ce3372f5c42cfde334021c84976c17c1f482c40f4148edeadd85b939bb4e8eea537cd28a37a"' : 'data-target="#xs-components-links-module-CartModule-a17657389434ae935a95c8fa9aff80efd97401225fdeb00f17e40ce3372f5c42cfde334021c84976c17c1f482c40f4148edeadd85b939bb4e8eea537cd28a37a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CartModule-a17657389434ae935a95c8fa9aff80efd97401225fdeb00f17e40ce3372f5c42cfde334021c84976c17c1f482c40f4148edeadd85b939bb4e8eea537cd28a37a"' :
                                            'id="xs-components-links-module-CartModule-a17657389434ae935a95c8fa9aff80efd97401225fdeb00f17e40ce3372f5c42cfde334021c84976c17c1f482c40f4148edeadd85b939bb4e8eea537cd28a37a"' }>
                                            <li class="link">
                                                <a href="components/CartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CartComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CartRoutingModule.html" data-type="entity-link" >CartRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link" >HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-4edf7a7919d1a695555888f28fa4f09a53be05d5784864b32f3da9ae0c03f9b242763ba28e1dab2624cbdacbc5635df650c2d821e968865d1ed40b82d07cabc5"' : 'data-target="#xs-components-links-module-HomeModule-4edf7a7919d1a695555888f28fa4f09a53be05d5784864b32f3da9ae0c03f9b242763ba28e1dab2624cbdacbc5635df650c2d821e968865d1ed40b82d07cabc5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-4edf7a7919d1a695555888f28fa4f09a53be05d5784864b32f3da9ae0c03f9b242763ba28e1dab2624cbdacbc5635df650c2d821e968865d1ed40b82d07cabc5"' :
                                            'id="xs-components-links-module-HomeModule-4edf7a7919d1a695555888f28fa4f09a53be05d5784864b32f3da9ae0c03f9b242763ba28e1dab2624cbdacbc5635df650c2d821e968865d1ed40b82d07cabc5"' }>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeRoutingModule.html" data-type="entity-link" >HomeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MoreModule.html" data-type="entity-link" >MoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MoreModule-097bc729c59b31cccfa4d87481afb8533b3d6e3e0e4571e82439e386108cb1ced3fd0b19ef58c67d5fab9a1e0fe497548f2da1ed8c822ff31279cab449f40d1b"' : 'data-target="#xs-components-links-module-MoreModule-097bc729c59b31cccfa4d87481afb8533b3d6e3e0e4571e82439e386108cb1ced3fd0b19ef58c67d5fab9a1e0fe497548f2da1ed8c822ff31279cab449f40d1b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MoreModule-097bc729c59b31cccfa4d87481afb8533b3d6e3e0e4571e82439e386108cb1ced3fd0b19ef58c67d5fab9a1e0fe497548f2da1ed8c822ff31279cab449f40d1b"' :
                                            'id="xs-components-links-module-MoreModule-097bc729c59b31cccfa4d87481afb8533b3d6e3e0e4571e82439e386108cb1ced3fd0b19ef58c67d5fab9a1e0fe497548f2da1ed8c822ff31279cab449f40d1b"' }>
                                            <li class="link">
                                                <a href="components/AboutUsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AboutUsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContactComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FAQComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FAQComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TermsAndConditionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TermsAndConditionComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MoreRoutingModule.html" data-type="entity-link" >MoreRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/NotFoundModule.html" data-type="entity-link" >NotFoundModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NotFoundModule-da51e9fbca80fd7a530bab8bb6df473d5c08f1aeccb3412716439aa428f5d81d5db68c32e286d2fad9da3a9432bc7f69fdd2ca6cd553fc002ef37c16908322ba"' : 'data-target="#xs-components-links-module-NotFoundModule-da51e9fbca80fd7a530bab8bb6df473d5c08f1aeccb3412716439aa428f5d81d5db68c32e286d2fad9da3a9432bc7f69fdd2ca6cd553fc002ef37c16908322ba"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NotFoundModule-da51e9fbca80fd7a530bab8bb6df473d5c08f1aeccb3412716439aa428f5d81d5db68c32e286d2fad9da3a9432bc7f69fdd2ca6cd553fc002ef37c16908322ba"' :
                                            'id="xs-components-links-module-NotFoundModule-da51e9fbca80fd7a530bab8bb6df473d5c08f1aeccb3412716439aa428f5d81d5db68c32e286d2fad9da3a9432bc7f69fdd2ca6cd553fc002ef37c16908322ba"' }>
                                            <li class="link">
                                                <a href="components/NotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotFoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/NotFoundRoutingModule.html" data-type="entity-link" >NotFoundRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProductListModule.html" data-type="entity-link" >ProductListModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProductListModule-31bd514d8ba675f9c99c168bd773cbd7440d4974e0448f2c6a28906d03ce58ee23d8b246b5d72f761f950e3e82cd6ec0c708cb11c6c463cf6fc5d5dc4e0d2db8"' : 'data-target="#xs-components-links-module-ProductListModule-31bd514d8ba675f9c99c168bd773cbd7440d4974e0448f2c6a28906d03ce58ee23d8b246b5d72f761f950e3e82cd6ec0c708cb11c6c463cf6fc5d5dc4e0d2db8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProductListModule-31bd514d8ba675f9c99c168bd773cbd7440d4974e0448f2c6a28906d03ce58ee23d8b246b5d72f761f950e3e82cd6ec0c708cb11c6c463cf6fc5d5dc4e0d2db8"' :
                                            'id="xs-components-links-module-ProductListModule-31bd514d8ba675f9c99c168bd773cbd7440d4974e0448f2c6a28906d03ce58ee23d8b246b5d72f761f950e3e82cd6ec0c708cb11c6c463cf6fc5d5dc4e0d2db8"' }>
                                            <li class="link">
                                                <a href="components/CardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FilterBarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilterBarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductListRoutingModule.html" data-type="entity-link" >ProductListRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProductModule.html" data-type="entity-link" >ProductModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProductModule-726e3835ab851a5a19660883bddcf328a3c7bc750075e1e5d34050b9b21ae6eb376a4294ace21f2a0084768793d2fd7319e7194ab51a0e589dbac06236f46f8f"' : 'data-target="#xs-components-links-module-ProductModule-726e3835ab851a5a19660883bddcf328a3c7bc750075e1e5d34050b9b21ae6eb376a4294ace21f2a0084768793d2fd7319e7194ab51a0e589dbac06236f46f8f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProductModule-726e3835ab851a5a19660883bddcf328a3c7bc750075e1e5d34050b9b21ae6eb376a4294ace21f2a0084768793d2fd7319e7194ab51a0e589dbac06236f46f8f"' :
                                            'id="xs-components-links-module-ProductModule-726e3835ab851a5a19660883bddcf328a3c7bc750075e1e5d34050b9b21ae6eb376a4294ace21f2a0084768793d2fd7319e7194ab51a0e589dbac06236f46f8f"' }>
                                            <li class="link">
                                                <a href="components/ProductComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductRoutingModule.html" data-type="entity-link" >ProductRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-b3c2540936142edad02d59ae7b20e8b787cb696a93032aee16e17c41e1a43562e47f2c364a274eedcc5d23556ab3817444097deddebd3be7ea2e5d5e953d4edf"' : 'data-target="#xs-components-links-module-SharedModule-b3c2540936142edad02d59ae7b20e8b787cb696a93032aee16e17c41e1a43562e47f2c364a274eedcc5d23556ab3817444097deddebd3be7ea2e5d5e953d4edf"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-b3c2540936142edad02d59ae7b20e8b787cb696a93032aee16e17c41e1a43562e47f2c364a274eedcc5d23556ab3817444097deddebd3be7ea2e5d5e953d4edf"' :
                                            'id="xs-components-links-module-SharedModule-b3c2540936142edad02d59ae7b20e8b787cb696a93032aee16e17c41e1a43562e47f2c364a274eedcc5d23556ab3817444097deddebd3be7ea2e5d5e953d4edf"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavBarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavBarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/StoreModule.html" data-type="entity-link" >StoreModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/StoreRoutingModule.html" data-type="entity-link" >StoreRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/WishlistModule.html" data-type="entity-link" >WishlistModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-WishlistModule-6ff866d9b2f7e5eb177e3b4e0b902e2ec1989b9bbd8ca40da95a12217d925dff89a92f13fc861010c26a4ea61c92cdcd55a6adaeb9eeddace2fc97b815bf2794"' : 'data-target="#xs-components-links-module-WishlistModule-6ff866d9b2f7e5eb177e3b4e0b902e2ec1989b9bbd8ca40da95a12217d925dff89a92f13fc861010c26a4ea61c92cdcd55a6adaeb9eeddace2fc97b815bf2794"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-WishlistModule-6ff866d9b2f7e5eb177e3b4e0b902e2ec1989b9bbd8ca40da95a12217d925dff89a92f13fc861010c26a4ea61c92cdcd55a6adaeb9eeddace2fc97b815bf2794"' :
                                            'id="xs-components-links-module-WishlistModule-6ff866d9b2f7e5eb177e3b4e0b902e2ec1989b9bbd8ca40da95a12217d925dff89a92f13fc861010c26a4ea61c92cdcd55a6adaeb9eeddace2fc97b815bf2794"' }>
                                            <li class="link">
                                                <a href="components/WishlistComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WishlistComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/WishlistRoutingModule.html" data-type="entity-link" >WishlistRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});