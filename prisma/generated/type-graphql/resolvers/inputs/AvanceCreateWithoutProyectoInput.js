"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvanceCreateWithoutProyectoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UsuarioCreateNestedOneWithoutAvancesCreadosInput_1 = require("../inputs/UsuarioCreateNestedOneWithoutAvancesCreadosInput");
let AvanceCreateWithoutProyectoInput = class AvanceCreateWithoutProyectoInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AvanceCreateWithoutProyectoInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], AvanceCreateWithoutProyectoInput.prototype, "fecha", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AvanceCreateWithoutProyectoInput.prototype, "descripcion", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AvanceCreateWithoutProyectoInput.prototype, "observaciones", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioCreateNestedOneWithoutAvancesCreadosInput_1.UsuarioCreateNestedOneWithoutAvancesCreadosInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioCreateNestedOneWithoutAvancesCreadosInput_1.UsuarioCreateNestedOneWithoutAvancesCreadosInput)
], AvanceCreateWithoutProyectoInput.prototype, "creadoPor", void 0);
AvanceCreateWithoutProyectoInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AvanceCreateWithoutProyectoInput", {
        isAbstract: true
    })
], AvanceCreateWithoutProyectoInput);
exports.AvanceCreateWithoutProyectoInput = AvanceCreateWithoutProyectoInput;
