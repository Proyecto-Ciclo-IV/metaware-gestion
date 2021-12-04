"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InscripcionMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Enum_EstadoInscripcion_1 = require("../../enums/Enum_EstadoInscripcion");
let InscripcionMinAggregate = class InscripcionMinAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InscripcionMinAggregate.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_EstadoInscripcion_1.Enum_EstadoInscripcion, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InscripcionMinAggregate.prototype, "estado", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], InscripcionMinAggregate.prototype, "fechaIngreso", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], InscripcionMinAggregate.prototype, "fechaEgreso", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InscripcionMinAggregate.prototype, "proyectoId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InscripcionMinAggregate.prototype, "UserId", void 0);
InscripcionMinAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("InscripcionMinAggregate", {
        isAbstract: true
    })
], InscripcionMinAggregate);
exports.InscripcionMinAggregate = InscripcionMinAggregate;
