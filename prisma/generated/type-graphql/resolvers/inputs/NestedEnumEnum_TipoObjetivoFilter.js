"use strict";
var NestedEnumEnum_TipoObjetivoFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumEnum_TipoObjetivoFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Enum_TipoObjetivo_1 = require("../../enums/Enum_TipoObjetivo");
let NestedEnumEnum_TipoObjetivoFilter = NestedEnumEnum_TipoObjetivoFilter_1 = class NestedEnumEnum_TipoObjetivoFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_TipoObjetivo_1.Enum_TipoObjetivo, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], NestedEnumEnum_TipoObjetivoFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Enum_TipoObjetivo_1.Enum_TipoObjetivo], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumEnum_TipoObjetivoFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Enum_TipoObjetivo_1.Enum_TipoObjetivo], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumEnum_TipoObjetivoFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumEnum_TipoObjetivoFilter_1, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumEnum_TipoObjetivoFilter)
], NestedEnumEnum_TipoObjetivoFilter.prototype, "not", void 0);
NestedEnumEnum_TipoObjetivoFilter = NestedEnumEnum_TipoObjetivoFilter_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("NestedEnumEnum_TipoObjetivoFilter", {
        isAbstract: true
    })
], NestedEnumEnum_TipoObjetivoFilter);
exports.NestedEnumEnum_TipoObjetivoFilter = NestedEnumEnum_TipoObjetivoFilter;
