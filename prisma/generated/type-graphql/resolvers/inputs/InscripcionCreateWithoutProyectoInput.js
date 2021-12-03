"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InscripcionCreateWithoutProyectoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UsuarioCreateNestedOneWithoutInscripcionesInput_1 = require("../inputs/UsuarioCreateNestedOneWithoutInscripcionesInput");
const Enum_EstadoInscripcion_1 = require("../../enums/Enum_EstadoInscripcion");
let InscripcionCreateWithoutProyectoInput = class InscripcionCreateWithoutProyectoInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InscripcionCreateWithoutProyectoInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_EstadoInscripcion_1.Enum_EstadoInscripcion, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InscripcionCreateWithoutProyectoInput.prototype, "estado", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], InscripcionCreateWithoutProyectoInput.prototype, "fechaIngreso", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], InscripcionCreateWithoutProyectoInput.prototype, "fechaEgreso", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioCreateNestedOneWithoutInscripcionesInput_1.UsuarioCreateNestedOneWithoutInscripcionesInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioCreateNestedOneWithoutInscripcionesInput_1.UsuarioCreateNestedOneWithoutInscripcionesInput)
], InscripcionCreateWithoutProyectoInput.prototype, "estudiante", void 0);
InscripcionCreateWithoutProyectoInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("InscripcionCreateWithoutProyectoInput", {
        isAbstract: true
    })
], InscripcionCreateWithoutProyectoInput);
exports.InscripcionCreateWithoutProyectoInput = InscripcionCreateWithoutProyectoInput;
