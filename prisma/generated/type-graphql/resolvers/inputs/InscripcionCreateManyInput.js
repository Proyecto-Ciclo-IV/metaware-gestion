"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InscripcionCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Enum_EstadoInscripcion_1 = require("../../enums/Enum_EstadoInscripcion");
let InscripcionCreateManyInput = class InscripcionCreateManyInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InscripcionCreateManyInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_EstadoInscripcion_1.Enum_EstadoInscripcion, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InscripcionCreateManyInput.prototype, "estado", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], InscripcionCreateManyInput.prototype, "fechaIngreso", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], InscripcionCreateManyInput.prototype, "fechaEgreso", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InscripcionCreateManyInput.prototype, "proyectoId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InscripcionCreateManyInput.prototype, "UserId", void 0);
InscripcionCreateManyInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("InscripcionCreateManyInput", {
        isAbstract: true
    })
], InscripcionCreateManyInput);
exports.InscripcionCreateManyInput = InscripcionCreateManyInput;
