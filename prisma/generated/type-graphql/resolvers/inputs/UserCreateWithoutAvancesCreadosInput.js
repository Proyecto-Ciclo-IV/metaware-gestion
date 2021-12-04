"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutAvancesCreadosInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AccountCreateNestedManyWithoutUserInput_1 = require("../inputs/AccountCreateNestedManyWithoutUserInput");
const InscripcionCreateNestedManyWithoutEstudianteInput_1 = require("../inputs/InscripcionCreateNestedManyWithoutEstudianteInput");
const ProyectoCreateNestedManyWithoutLiderInput_1 = require("../inputs/ProyectoCreateNestedManyWithoutLiderInput");
const SessionCreateNestedManyWithoutUserInput_1 = require("../inputs/SessionCreateNestedManyWithoutUserInput");
const Enum_EstadoUser_1 = require("../../enums/Enum_EstadoUser");
const Enum_Rol_1 = require("../../enums/Enum_Rol");
let UserCreateWithoutAvancesCreadosInput = class UserCreateWithoutAvancesCreadosInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutAvancesCreadosInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutAvancesCreadosInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutAvancesCreadosInput.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], UserCreateWithoutAvancesCreadosInput.prototype, "emailVerified", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutAvancesCreadosInput.prototype, "image", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutAvancesCreadosInput.prototype, "telefono", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_Rol_1.Enum_Rol, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutAvancesCreadosInput.prototype, "rol", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_EstadoUser_1.Enum_EstadoUser, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutAvancesCreadosInput.prototype, "estado", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProyectoCreateNestedManyWithoutLiderInput_1.ProyectoCreateNestedManyWithoutLiderInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProyectoCreateNestedManyWithoutLiderInput_1.ProyectoCreateNestedManyWithoutLiderInput)
], UserCreateWithoutAvancesCreadosInput.prototype, "proyectosLiderados", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InscripcionCreateNestedManyWithoutEstudianteInput_1.InscripcionCreateNestedManyWithoutEstudianteInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", InscripcionCreateNestedManyWithoutEstudianteInput_1.InscripcionCreateNestedManyWithoutEstudianteInput)
], UserCreateWithoutAvancesCreadosInput.prototype, "inscripciones", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AccountCreateNestedManyWithoutUserInput_1.AccountCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AccountCreateNestedManyWithoutUserInput_1.AccountCreateNestedManyWithoutUserInput)
], UserCreateWithoutAvancesCreadosInput.prototype, "accounts", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SessionCreateNestedManyWithoutUserInput_1.SessionCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SessionCreateNestedManyWithoutUserInput_1.SessionCreateNestedManyWithoutUserInput)
], UserCreateWithoutAvancesCreadosInput.prototype, "sessions", void 0);
UserCreateWithoutAvancesCreadosInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserCreateWithoutAvancesCreadosInput", {
        isAbstract: true
    })
], UserCreateWithoutAvancesCreadosInput);
exports.UserCreateWithoutAvancesCreadosInput = UserCreateWithoutAvancesCreadosInput;
