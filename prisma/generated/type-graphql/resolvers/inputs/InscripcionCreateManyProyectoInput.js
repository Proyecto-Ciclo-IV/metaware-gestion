"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InscripcionCreateManyProyectoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Enum_EstadoInscripcion_1 = require("../../enums/Enum_EstadoInscripcion");
let InscripcionCreateManyProyectoInput = class InscripcionCreateManyProyectoInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InscripcionCreateManyProyectoInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_EstadoInscripcion_1.Enum_EstadoInscripcion, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InscripcionCreateManyProyectoInput.prototype, "estado", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], InscripcionCreateManyProyectoInput.prototype, "fechaIngreso", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], InscripcionCreateManyProyectoInput.prototype, "fechaEgreso", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InscripcionCreateManyProyectoInput.prototype, "UserId", void 0);
InscripcionCreateManyProyectoInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("InscripcionCreateManyProyectoInput", {
        isAbstract: true
    })
], InscripcionCreateManyProyectoInput);
exports.InscripcionCreateManyProyectoInput = InscripcionCreateManyProyectoInput;
