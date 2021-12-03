"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjetivoMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Enum_TipoObjetivo_1 = require("../../enums/Enum_TipoObjetivo");
let ObjetivoMaxAggregate = class ObjetivoMaxAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ObjetivoMaxAggregate.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ObjetivoMaxAggregate.prototype, "descripcion", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_TipoObjetivo_1.Enum_TipoObjetivo, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ObjetivoMaxAggregate.prototype, "tipo", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ObjetivoMaxAggregate.prototype, "proyectoId", void 0);
ObjetivoMaxAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("ObjetivoMaxAggregate", {
        isAbstract: true
    })
], ObjetivoMaxAggregate);
exports.ObjetivoMaxAggregate = ObjetivoMaxAggregate;
