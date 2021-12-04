"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutAccountsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AvanceCreateNestedManyWithoutCreadoPorInput_1 = require("../inputs/AvanceCreateNestedManyWithoutCreadoPorInput");
const InscripcionCreateNestedManyWithoutEstudianteInput_1 = require("../inputs/InscripcionCreateNestedManyWithoutEstudianteInput");
const ProyectoCreateNestedManyWithoutLiderInput_1 = require("../inputs/ProyectoCreateNestedManyWithoutLiderInput");
const SessionCreateNestedManyWithoutUserInput_1 = require("../inputs/SessionCreateNestedManyWithoutUserInput");
const Enum_EstadoUser_1 = require("../../enums/Enum_EstadoUser");
const Enum_Rol_1 = require("../../enums/Enum_Rol");
let UserCreateWithoutAccountsInput = class UserCreateWithoutAccountsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutAccountsInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutAccountsInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutAccountsInput.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], UserCreateWithoutAccountsInput.prototype, "emailVerified", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutAccountsInput.prototype, "image", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutAccountsInput.prototype, "telefono", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_Rol_1.Enum_Rol, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutAccountsInput.prototype, "rol", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_EstadoUser_1.Enum_EstadoUser, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutAccountsInput.prototype, "estado", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProyectoCreateNestedManyWithoutLiderInput_1.ProyectoCreateNestedManyWithoutLiderInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProyectoCreateNestedManyWithoutLiderInput_1.ProyectoCreateNestedManyWithoutLiderInput)
], UserCreateWithoutAccountsInput.prototype, "proyectosLiderados", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AvanceCreateNestedManyWithoutCreadoPorInput_1.AvanceCreateNestedManyWithoutCreadoPorInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AvanceCreateNestedManyWithoutCreadoPorInput_1.AvanceCreateNestedManyWithoutCreadoPorInput)
], UserCreateWithoutAccountsInput.prototype, "avancesCreados", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InscripcionCreateNestedManyWithoutEstudianteInput_1.InscripcionCreateNestedManyWithoutEstudianteInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", InscripcionCreateNestedManyWithoutEstudianteInput_1.InscripcionCreateNestedManyWithoutEstudianteInput)
], UserCreateWithoutAccountsInput.prototype, "inscripciones", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SessionCreateNestedManyWithoutUserInput_1.SessionCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SessionCreateNestedManyWithoutUserInput_1.SessionCreateNestedManyWithoutUserInput)
], UserCreateWithoutAccountsInput.prototype, "sessions", void 0);
UserCreateWithoutAccountsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserCreateWithoutAccountsInput", {
        isAbstract: true
    })
], UserCreateWithoutAccountsInput);
exports.UserCreateWithoutAccountsInput = UserCreateWithoutAccountsInput;
