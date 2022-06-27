"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const app_routing_module_1 = require("./app-routing.module");
const app_component_1 = require("./app.component");
const header_component_1 = require("./components/header/header.component");
const logo_ap_component_1 = require("./components/logo-ap/logo-ap.component");
const banner_component_1 = require("./components/banner/banner.component");
const acerca_de_component_1 = require("./components/acerca-de/acerca-de.component");
const experiencia_component_1 = require("./components/experiencia/experiencia.component");
const educacion_component_1 = require("./components/educacion/educacion.component");
const ng_circle_progress_1 = require("ng-circle-progress");
const hys_component_1 = require("./components/hys/hys.component");
const proyecto_component_1 = require("./components/proyecto/proyecto.component");
const footer_component_1 = require("./components/footer/footer.component");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, core_1.NgModule)({
        declarations: [
            app_component_1.AppComponent,
            header_component_1.HeaderComponent,
            logo_ap_component_1.LogoAPComponent,
            banner_component_1.BannerComponent,
            acerca_de_component_1.AcercaDeComponent,
            experiencia_component_1.ExperienciaComponent,
            educacion_component_1.EducacionComponent,
            hys_component_1.HysComponent,
            proyecto_component_1.ProyectoComponent,
            footer_component_1.FooterComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            app_routing_module_1.AppRoutingModule,
            ng_circle_progress_1.NgCircleProgressModule.forRoot({})
        ],
        providers: [],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
