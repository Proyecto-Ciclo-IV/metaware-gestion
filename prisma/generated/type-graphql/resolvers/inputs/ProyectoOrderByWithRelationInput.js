"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AvanceOrderByRelationAggregateInput_1 = require("../inputs/AvanceOrderByRelationAggregateInput");
const InscripcionOrderByRelationAggregateInput_1 = require("../inputs/InscripcionOrderByRelationAggregateInput");
const ObjetivoOrderByRelationAggregateInput_1 = require("../inputs/ObjetivoOrderByRelationAggregateInput");
const UserOrderByWithRelationInput_1 = require("../inputs/UserOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ProyectoOrderByWithRelationInput = class ProyectoOrderByWithRelationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProyectoOrderByWithRelationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProyectoOrderByWithRelationInput.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProyectoOrderByWithRelationInput.prototype, "descripcion", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProyectoOrderByWithRelationInput.prototype, "presupuesto", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProyectoOrderByWithRelationInput.prototype, "fechaInicio", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProyectoOrderByWithRelationInput.prototype, "fechaFin", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserOrderByWithRelationInput_1.UserOrderByWithRelationInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserOrderByWithRelationInput_1.UserOrderByWithRelationInput)
], ProyectoOrderByWithRelationInput.prototype, "lider", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProyectoOrderByWithRelationInput.prototype, "UserId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProyectoOrderByWithRelationInput.prototype, "estado", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProyectoOrderByWithRelationInput.prototype, "fase", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ObjetivoOrderByRelationAggregateInput_1.ObjetivoOrderByRelationAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ObjetivoOrderByRelationAggregateInput_1.ObjetivoOrderByRelationAggregateInput)
], ProyectoOrderByWithRelationInput.prototype, "objetivos", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AvanceOrderByRelationAggregateInput_1.AvanceOrderByRelationAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AvanceOrderByRelationAggregateInput_1.AvanceOrderByRelationAggregateInput)
], ProyectoOrderByWithRelationInput.prototype, "avances", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InscripcionOrderByRelationAggregateInput_1.InscripcionOrderByRelationAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", InscripcionOrderByRelationAggregateInput_1.InscripcionOrderByRelationAggregateInput)
], ProyectoOrderByWithRelationInput.prototype, "inscripciones", void 0);
ProyectoOrderByWithRelationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProyectoOrderByWithRelationInput", {
        isAbstract: true
    })
], ProyectoOrderByWithRelationInput);
exports.ProyectoOrderByWithRelationInput = ProyectoOrderByWithRelationInput;
