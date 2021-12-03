"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateObjetivo = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ObjetivoCountAggregate_1 = require("../outputs/ObjetivoCountAggregate");
const ObjetivoMaxAggregate_1 = require("../outputs/ObjetivoMaxAggregate");
const ObjetivoMinAggregate_1 = require("../outputs/ObjetivoMinAggregate");
let AggregateObjetivo = class AggregateObjetivo {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ObjetivoCountAggregate_1.ObjetivoCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ObjetivoCountAggregate_1.ObjetivoCountAggregate)
], AggregateObjetivo.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ObjetivoMinAggregate_1.ObjetivoMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ObjetivoMinAggregate_1.ObjetivoMinAggregate)
], AggregateObjetivo.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ObjetivoMaxAggregate_1.ObjetivoMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ObjetivoMaxAggregate_1.ObjetivoMaxAggregate)
], AggregateObjetivo.prototype, "_max", void 0);
AggregateObjetivo = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("AggregateObjetivo", {
        isAbstract: true
    })
], AggregateObjetivo);
exports.AggregateObjetivo = AggregateObjetivo;
