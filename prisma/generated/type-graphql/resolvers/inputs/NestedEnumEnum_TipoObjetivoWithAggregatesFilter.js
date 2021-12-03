"use strict";
var NestedEnumEnum_TipoObjetivoWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumEnum_TipoObjetivoWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const NestedEnumEnum_TipoObjetivoFilter_1 = require("../inputs/NestedEnumEnum_TipoObjetivoFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const Enum_TipoObjetivo_1 = require("../../enums/Enum_TipoObjetivo");
let NestedEnumEnum_TipoObjetivoWithAggregatesFilter = NestedEnumEnum_TipoObjetivoWithAggregatesFilter_1 = class NestedEnumEnum_TipoObjetivoWithAggregatesFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_TipoObjetivo_1.Enum_TipoObjetivo, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], NestedEnumEnum_TipoObjetivoWithAggregatesFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Enum_TipoObjetivo_1.Enum_TipoObjetivo], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumEnum_TipoObjetivoWithAggregatesFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Enum_TipoObjetivo_1.Enum_TipoObjetivo], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumEnum_TipoObjetivoWithAggregatesFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumEnum_TipoObjetivoWithAggregatesFilter_1, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumEnum_TipoObjetivoWithAggregatesFilter)
], NestedEnumEnum_TipoObjetivoWithAggregatesFilter.prototype, "not", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumEnum_TipoObjetivoWithAggregatesFilter.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumEnum_TipoObjetivoFilter_1.NestedEnumEnum_TipoObjetivoFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumEnum_TipoObjetivoFilter_1.NestedEnumEnum_TipoObjetivoFilter)
], NestedEnumEnum_TipoObjetivoWithAggregatesFilter.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumEnum_TipoObjetivoFilter_1.NestedEnumEnum_TipoObjetivoFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumEnum_TipoObjetivoFilter_1.NestedEnumEnum_TipoObjetivoFilter)
], NestedEnumEnum_TipoObjetivoWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumEnum_TipoObjetivoWithAggregatesFilter = NestedEnumEnum_TipoObjetivoWithAggregatesFilter_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("NestedEnumEnum_TipoObjetivoWithAggregatesFilter", {
        isAbstract: true
    })
], NestedEnumEnum_TipoObjetivoWithAggregatesFilter);
exports.NestedEnumEnum_TipoObjetivoWithAggregatesFilter = NestedEnumEnum_TipoObjetivoWithAggregatesFilter;
