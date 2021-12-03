"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumEnum_TipoObjetivoFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const NestedEnumEnum_TipoObjetivoFilter_1 = require("../inputs/NestedEnumEnum_TipoObjetivoFilter");
const Enum_TipoObjetivo_1 = require("../../enums/Enum_TipoObjetivo");
let EnumEnum_TipoObjetivoFilter = class EnumEnum_TipoObjetivoFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_TipoObjetivo_1.Enum_TipoObjetivo, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EnumEnum_TipoObjetivoFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Enum_TipoObjetivo_1.Enum_TipoObjetivo], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumEnum_TipoObjetivoFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Enum_TipoObjetivo_1.Enum_TipoObjetivo], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumEnum_TipoObjetivoFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumEnum_TipoObjetivoFilter_1.NestedEnumEnum_TipoObjetivoFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumEnum_TipoObjetivoFilter_1.NestedEnumEnum_TipoObjetivoFilter)
], EnumEnum_TipoObjetivoFilter.prototype, "not", void 0);
EnumEnum_TipoObjetivoFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("EnumEnum_TipoObjetivoFilter", {
        isAbstract: true
    })
], EnumEnum_TipoObjetivoFilter);
exports.EnumEnum_TipoObjetivoFilter = EnumEnum_TipoObjetivoFilter;
