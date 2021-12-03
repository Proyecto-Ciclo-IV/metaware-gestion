"use strict";
var ProyectoScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoScalarWhereWithAggregatesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DateTimeWithAggregatesFilter_1 = require("../inputs/DateTimeWithAggregatesFilter");
const EnumEnum_EstadoProyectoWithAggregatesFilter_1 = require("../inputs/EnumEnum_EstadoProyectoWithAggregatesFilter");
const EnumEnum_FaseProyectoWithAggregatesFilter_1 = require("../inputs/EnumEnum_FaseProyectoWithAggregatesFilter");
const FloatWithAggregatesFilter_1 = require("../inputs/FloatWithAggregatesFilter");
const StringWithAggregatesFilter_1 = require("../inputs/StringWithAggregatesFilter");
let ProyectoScalarWhereWithAggregatesInput = ProyectoScalarWhereWithAggregatesInput_1 = class ProyectoScalarWhereWithAggregatesInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProyectoScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProyectoScalarWhereWithAggregatesInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProyectoScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProyectoScalarWhereWithAggregatesInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProyectoScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProyectoScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], ProyectoScalarWhereWithAggregatesInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], ProyectoScalarWhereWithAggregatesInput.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], ProyectoScalarWhereWithAggregatesInput.prototype, "descripcion", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => FloatWithAggregatesFilter_1.FloatWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", FloatWithAggregatesFilter_1.FloatWithAggregatesFilter)
], ProyectoScalarWhereWithAggregatesInput.prototype, "presupuesto", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter)
], ProyectoScalarWhereWithAggregatesInput.prototype, "fechaInicio", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter)
], ProyectoScalarWhereWithAggregatesInput.prototype, "fechaFin", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], ProyectoScalarWhereWithAggregatesInput.prototype, "userId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumEnum_EstadoProyectoWithAggregatesFilter_1.EnumEnum_EstadoProyectoWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumEnum_EstadoProyectoWithAggregatesFilter_1.EnumEnum_EstadoProyectoWithAggregatesFilter)
], ProyectoScalarWhereWithAggregatesInput.prototype, "estado", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumEnum_FaseProyectoWithAggregatesFilter_1.EnumEnum_FaseProyectoWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumEnum_FaseProyectoWithAggregatesFilter_1.EnumEnum_FaseProyectoWithAggregatesFilter)
], ProyectoScalarWhereWithAggregatesInput.prototype, "fase", void 0);
ProyectoScalarWhereWithAggregatesInput = ProyectoScalarWhereWithAggregatesInput_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProyectoScalarWhereWithAggregatesInput", {
        isAbstract: true
    })
], ProyectoScalarWhereWithAggregatesInput);
exports.ProyectoScalarWhereWithAggregatesInput = ProyectoScalarWhereWithAggregatesInput;
