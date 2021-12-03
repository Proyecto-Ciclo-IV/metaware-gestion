"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumEnum_TipoObjetivoWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const NestedEnumEnum_TipoObjetivoFilter_1 = require("../inputs/NestedEnumEnum_TipoObjetivoFilter");
const NestedEnumEnum_TipoObjetivoWithAggregatesFilter_1 = require("../inputs/NestedEnumEnum_TipoObjetivoWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const Enum_TipoObjetivo_1 = require("../../enums/Enum_TipoObjetivo");
let EnumEnum_TipoObjetivoWithAggregatesFilter = class EnumEnum_TipoObjetivoWithAggregatesFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_TipoObjetivo_1.Enum_TipoObjetivo, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EnumEnum_TipoObjetivoWithAggregatesFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Enum_TipoObjetivo_1.Enum_TipoObjetivo], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumEnum_TipoObjetivoWithAggregatesFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Enum_TipoObjetivo_1.Enum_TipoObjetivo], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumEnum_TipoObjetivoWithAggregatesFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumEnum_TipoObjetivoWithAggregatesFilter_1.NestedEnumEnum_TipoObjetivoWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumEnum_TipoObjetivoWithAggregatesFilter_1.NestedEnumEnum_TipoObjetivoWithAggregatesFilter)
], EnumEnum_TipoObjetivoWithAggregatesFilter.prototype, "not", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumEnum_TipoObjetivoWithAggregatesFilter.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumEnum_TipoObjetivoFilter_1.NestedEnumEnum_TipoObjetivoFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumEnum_TipoObjetivoFilter_1.NestedEnumEnum_TipoObjetivoFilter)
], EnumEnum_TipoObjetivoWithAggregatesFilter.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumEnum_TipoObjetivoFilter_1.NestedEnumEnum_TipoObjetivoFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumEnum_TipoObjetivoFilter_1.NestedEnumEnum_TipoObjetivoFilter)
], EnumEnum_TipoObjetivoWithAggregatesFilter.prototype, "_max", void 0);
EnumEnum_TipoObjetivoWithAggregatesFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("EnumEnum_TipoObjetivoWithAggregatesFilter", {
        isAbstract: true
    })
], EnumEnum_TipoObjetivoWithAggregatesFilter);
exports.EnumEnum_TipoObjetivoWithAggregatesFilter = EnumEnum_TipoObjetivoWithAggregatesFilter;
