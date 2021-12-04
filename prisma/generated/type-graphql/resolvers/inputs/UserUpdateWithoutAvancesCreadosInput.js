"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateWithoutAvancesCreadosInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AccountUpdateManyWithoutUserInput_1 = require("../inputs/AccountUpdateManyWithoutUserInput");
const EnumEnum_EstadoUserFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_EstadoUserFieldUpdateOperationsInput");
const EnumEnum_RolFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_RolFieldUpdateOperationsInput");
const InscripcionUpdateManyWithoutEstudianteInput_1 = require("../inputs/InscripcionUpdateManyWithoutEstudianteInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const ProyectoUpdateManyWithoutLiderInput_1 = require("../inputs/ProyectoUpdateManyWithoutLiderInput");
const SessionUpdateManyWithoutUserInput_1 = require("../inputs/SessionUpdateManyWithoutUserInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let UserUpdateWithoutAvancesCreadosInput = class UserUpdateWithoutAvancesCreadosInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutAvancesCreadosInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutAvancesCreadosInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutAvancesCreadosInput.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], UserUpdateWithoutAvancesCreadosInput.prototype, "emailVerified", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutAvancesCreadosInput.prototype, "image", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutAvancesCreadosInput.prototype, "telefono", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumEnum_RolFieldUpdateOperationsInput_1.EnumEnum_RolFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumEnum_RolFieldUpdateOperationsInput_1.EnumEnum_RolFieldUpdateOperationsInput)
], UserUpdateWithoutAvancesCreadosInput.prototype, "rol", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumEnum_EstadoUserFieldUpdateOperationsInput_1.EnumEnum_EstadoUserFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumEnum_EstadoUserFieldUpdateOperationsInput_1.EnumEnum_EstadoUserFieldUpdateOperationsInput)
], UserUpdateWithoutAvancesCreadosInput.prototype, "estado", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProyectoUpdateManyWithoutLiderInput_1.ProyectoUpdateManyWithoutLiderInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProyectoUpdateManyWithoutLiderInput_1.ProyectoUpdateManyWithoutLiderInput)
], UserUpdateWithoutAvancesCreadosInput.prototype, "proyectosLiderados", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InscripcionUpdateManyWithoutEstudianteInput_1.InscripcionUpdateManyWithoutEstudianteInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", InscripcionUpdateManyWithoutEstudianteInput_1.InscripcionUpdateManyWithoutEstudianteInput)
], UserUpdateWithoutAvancesCreadosInput.prototype, "inscripciones", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AccountUpdateManyWithoutUserInput_1.AccountUpdateManyWithoutUserInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AccountUpdateManyWithoutUserInput_1.AccountUpdateManyWithoutUserInput)
], UserUpdateWithoutAvancesCreadosInput.prototype, "accounts", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SessionUpdateManyWithoutUserInput_1.SessionUpdateManyWithoutUserInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SessionUpdateManyWithoutUserInput_1.SessionUpdateManyWithoutUserInput)
], UserUpdateWithoutAvancesCreadosInput.prototype, "sessions", void 0);
UserUpdateWithoutAvancesCreadosInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserUpdateWithoutAvancesCreadosInput", {
        isAbstract: true
    })
], UserUpdateWithoutAvancesCreadosInput);
exports.UserUpdateWithoutAvancesCreadosInput = UserUpdateWithoutAvancesCreadosInput;
