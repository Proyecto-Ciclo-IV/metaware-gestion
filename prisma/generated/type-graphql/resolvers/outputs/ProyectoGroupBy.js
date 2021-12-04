"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProyectoAvgAggregate_1 = require("../outputs/ProyectoAvgAggregate");
const ProyectoCountAggregate_1 = require("../outputs/ProyectoCountAggregate");
const ProyectoMaxAggregate_1 = require("../outputs/ProyectoMaxAggregate");
const ProyectoMinAggregate_1 = require("../outputs/ProyectoMinAggregate");
const ProyectoSumAggregate_1 = require("../outputs/ProyectoSumAggregate");
const Enum_EstadoProyecto_1 = require("../../enums/Enum_EstadoProyecto");
const Enum_FaseProyecto_1 = require("../../enums/Enum_FaseProyecto");
let ProyectoGroupBy = class ProyectoGroupBy {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProyectoGroupBy.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProyectoGroupBy.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProyectoGroupBy.prototype, "descripcion", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ProyectoGroupBy.prototype, "presupuesto", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], ProyectoGroupBy.prototype, "fechaInicio", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], ProyectoGroupBy.prototype, "fechaFin", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProyectoGroupBy.prototype, "UserId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_EstadoProyecto_1.Enum_EstadoProyecto, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProyectoGroupBy.prototype, "estado", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_FaseProyecto_1.Enum_FaseProyecto, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProyectoGroupBy.prototype, "fase", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProyectoCountAggregate_1.ProyectoCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProyectoCountAggregate_1.ProyectoCountAggregate)
], ProyectoGroupBy.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProyectoAvgAggregate_1.ProyectoAvgAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProyectoAvgAggregate_1.ProyectoAvgAggregate)
], ProyectoGroupBy.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProyectoSumAggregate_1.ProyectoSumAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProyectoSumAggregate_1.ProyectoSumAggregate)
], ProyectoGroupBy.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProyectoMinAggregate_1.ProyectoMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProyectoMinAggregate_1.ProyectoMinAggregate)
], ProyectoGroupBy.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProyectoMaxAggregate_1.ProyectoMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProyectoMaxAggregate_1.ProyectoMaxAggregate)
], ProyectoGroupBy.prototype, "_max", void 0);
ProyectoGroupBy = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("ProyectoGroupBy", {
        isAbstract: true
    })
], ProyectoGroupBy);
exports.ProyectoGroupBy = ProyectoGroupBy;
