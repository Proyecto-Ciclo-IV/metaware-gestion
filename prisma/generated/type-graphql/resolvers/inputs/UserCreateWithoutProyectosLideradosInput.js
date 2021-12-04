"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutProyectosLideradosInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AccountCreateNestedManyWithoutUserInput_1 = require("../inputs/AccountCreateNestedManyWithoutUserInput");
const AvanceCreateNestedManyWithoutCreadoPorInput_1 = require("../inputs/AvanceCreateNestedManyWithoutCreadoPorInput");
const InscripcionCreateNestedManyWithoutEstudianteInput_1 = require("../inputs/InscripcionCreateNestedManyWithoutEstudianteInput");
const SessionCreateNestedManyWithoutUserInput_1 = require("../inputs/SessionCreateNestedManyWithoutUserInput");
const Enum_EstadoUser_1 = require("../../enums/Enum_EstadoUser");
const Enum_Rol_1 = require("../../enums/Enum_Rol");
let UserCreateWithoutProyectosLideradosInput = class UserCreateWithoutProyectosLideradosInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutProyectosLideradosInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutProyectosLideradosInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutProyectosLideradosInput.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], UserCreateWithoutProyectosLideradosInput.prototype, "emailVerified", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutProyectosLideradosInput.prototype, "image", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutProyectosLideradosInput.prototype, "telefono", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_Rol_1.Enum_Rol, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutProyectosLideradosInput.prototype, "rol", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_EstadoUser_1.Enum_EstadoUser, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutProyectosLideradosInput.prototype, "estado", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AvanceCreateNestedManyWithoutCreadoPorInput_1.AvanceCreateNestedManyWithoutCreadoPorInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AvanceCreateNestedManyWithoutCreadoPorInput_1.AvanceCreateNestedManyWithoutCreadoPorInput)
], UserCreateWithoutProyectosLideradosInput.prototype, "avancesCreados", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InscripcionCreateNestedManyWithoutEstudianteInput_1.InscripcionCreateNestedManyWithoutEstudianteInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", InscripcionCreateNestedManyWithoutEstudianteInput_1.InscripcionCreateNestedManyWithoutEstudianteInput)
], UserCreateWithoutProyectosLideradosInput.prototype, "inscripciones", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AccountCreateNestedManyWithoutUserInput_1.AccountCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AccountCreateNestedManyWithoutUserInput_1.AccountCreateNestedManyWithoutUserInput)
], UserCreateWithoutProyectosLideradosInput.prototype, "accounts", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SessionCreateNestedManyWithoutUserInput_1.SessionCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SessionCreateNestedManyWithoutUserInput_1.SessionCreateNestedManyWithoutUserInput)
], UserCreateWithoutProyectosLideradosInput.prototype, "sessions", void 0);
UserCreateWithoutProyectosLideradosInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserCreateWithoutProyectosLideradosInput", {
        isAbstract: true
    })
], UserCreateWithoutProyectosLideradosInput);
exports.UserCreateWithoutProyectosLideradosInput = UserCreateWithoutProyectosLideradosInput;
