"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let ProyectoCount = class ProyectoCount {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ProyectoCount.prototype, "objetivos", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ProyectoCount.prototype, "avances", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ProyectoCount.prototype, "inscripciones", void 0);
ProyectoCount = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("ProyectoCount", {
        isAbstract: true
    })
], ProyectoCount);
exports.ProyectoCount = ProyectoCount;
