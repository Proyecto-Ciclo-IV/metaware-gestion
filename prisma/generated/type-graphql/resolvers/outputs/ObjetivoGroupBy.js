"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjetivoGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ObjetivoCountAggregate_1 = require("../outputs/ObjetivoCountAggregate");
const ObjetivoMaxAggregate_1 = require("../outputs/ObjetivoMaxAggregate");
const ObjetivoMinAggregate_1 = require("../outputs/ObjetivoMinAggregate");
const Enum_TipoObjetivo_1 = require("../../enums/Enum_TipoObjetivo");
let ObjetivoGroupBy = class ObjetivoGroupBy {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ObjetivoGroupBy.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ObjetivoGroupBy.prototype, "descripcion", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_TipoObjetivo_1.Enum_TipoObjetivo, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ObjetivoGroupBy.prototype, "tipo", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ObjetivoGroupBy.prototype, "proyectoId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ObjetivoCountAggregate_1.ObjetivoCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ObjetivoCountAggregate_1.ObjetivoCountAggregate)
], ObjetivoGroupBy.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ObjetivoMinAggregate_1.ObjetivoMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ObjetivoMinAggregate_1.ObjetivoMinAggregate)
], ObjetivoGroupBy.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ObjetivoMaxAggregate_1.ObjetivoMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ObjetivoMaxAggregate_1.ObjetivoMaxAggregate)
], ObjetivoGroupBy.prototype, "_max", void 0);
ObjetivoGroupBy = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("ObjetivoGroupBy", {
        isAbstract: true
    })
], ObjetivoGroupBy);
exports.ObjetivoGroupBy = ObjetivoGroupBy;
