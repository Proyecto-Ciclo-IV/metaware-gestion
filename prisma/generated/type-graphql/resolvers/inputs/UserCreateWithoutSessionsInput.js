"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutSessionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AccountCreateNestedManyWithoutUserInput_1 = require("../inputs/AccountCreateNestedManyWithoutUserInput");
const AvanceCreateNestedManyWithoutCreadoPorInput_1 = require("../inputs/AvanceCreateNestedManyWithoutCreadoPorInput");
const InscripcionCreateNestedManyWithoutEstudianteInput_1 = require("../inputs/InscripcionCreateNestedManyWithoutEstudianteInput");
const ProyectoCreateNestedManyWithoutLiderInput_1 = require("../inputs/ProyectoCreateNestedManyWithoutLiderInput");
const Enum_EstadoUser_1 = require("../../enums/Enum_EstadoUser");
const Enum_Rol_1 = require("../../enums/Enum_Rol");
let UserCreateWithoutSessionsInput = class UserCreateWithoutSessionsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutSessionsInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutSessionsInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutSessionsInput.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], UserCreateWithoutSessionsInput.prototype, "emailVerified", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutSessionsInput.prototype, "image", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutSessionsInput.prototype, "telefono", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_Rol_1.Enum_Rol, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutSessionsInput.prototype, "rol", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_EstadoUser_1.Enum_EstadoUser, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutSessionsInput.prototype, "estado", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProyectoCreateNestedManyWithoutLiderInput_1.ProyectoCreateNestedManyWithoutLiderInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProyectoCreateNestedManyWithoutLiderInput_1.ProyectoCreateNestedManyWithoutLiderInput)
], UserCreateWithoutSessionsInput.prototype, "proyectosLiderados", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AvanceCreateNestedManyWithoutCreadoPorInput_1.AvanceCreateNestedManyWithoutCreadoPorInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AvanceCreateNestedManyWithoutCreadoPorInput_1.AvanceCreateNestedManyWithoutCreadoPorInput)
], UserCreateWithoutSessionsInput.prototype, "avancesCreados", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InscripcionCreateNestedManyWithoutEstudianteInput_1.InscripcionCreateNestedManyWithoutEstudianteInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", InscripcionCreateNestedManyWithoutEstudianteInput_1.InscripcionCreateNestedManyWithoutEstudianteInput)
], UserCreateWithoutSessionsInput.prototype, "inscripciones", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AccountCreateNestedManyWithoutUserInput_1.AccountCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AccountCreateNestedManyWithoutUserInput_1.AccountCreateNestedManyWithoutUserInput)
], UserCreateWithoutSessionsInput.prototype, "accounts", void 0);
UserCreateWithoutSessionsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserCreateWithoutSessionsInput", {
        isAbstract: true
    })
], UserCreateWithoutSessionsInput);
exports.UserCreateWithoutSessionsInput = UserCreateWithoutSessionsInput;
