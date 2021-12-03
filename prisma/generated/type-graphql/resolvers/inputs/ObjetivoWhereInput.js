"use strict";
var ObjetivoWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjetivoWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const EnumEnum_TipoObjetivoFilter_1 = require("../inputs/EnumEnum_TipoObjetivoFilter");
const ProyectoRelationFilter_1 = require("../inputs/ProyectoRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let ObjetivoWhereInput = ObjetivoWhereInput_1 = class ObjetivoWhereInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ObjetivoWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ObjetivoWhereInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ObjetivoWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ObjetivoWhereInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ObjetivoWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ObjetivoWhereInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], ObjetivoWhereInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], ObjetivoWhereInput.prototype, "descripcion", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumEnum_TipoObjetivoFilter_1.EnumEnum_TipoObjetivoFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumEnum_TipoObjetivoFilter_1.EnumEnum_TipoObjetivoFilter)
], ObjetivoWhereInput.prototype, "tipo", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProyectoRelationFilter_1.ProyectoRelationFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProyectoRelationFilter_1.ProyectoRelationFilter)
], ObjetivoWhereInput.prototype, "proyecto", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], ObjetivoWhereInput.prototype, "proyectoId", void 0);
ObjetivoWhereInput = ObjetivoWhereInput_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ObjetivoWhereInput", {
        isAbstract: true
    })
], ObjetivoWhereInput);
exports.ObjetivoWhereInput = ObjetivoWhereInput;
