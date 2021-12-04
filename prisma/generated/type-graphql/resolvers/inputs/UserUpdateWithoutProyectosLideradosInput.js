"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateWithoutProyectosLideradosInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AccountUpdateManyWithoutUserInput_1 = require("../inputs/AccountUpdateManyWithoutUserInput");
const AvanceUpdateManyWithoutCreadoPorInput_1 = require("../inputs/AvanceUpdateManyWithoutCreadoPorInput");
const EnumEnum_EstadoUserFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_EstadoUserFieldUpdateOperationsInput");
const EnumEnum_RolFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_RolFieldUpdateOperationsInput");
const InscripcionUpdateManyWithoutEstudianteInput_1 = require("../inputs/InscripcionUpdateManyWithoutEstudianteInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const SessionUpdateManyWithoutUserInput_1 = require("../inputs/SessionUpdateManyWithoutUserInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let UserUpdateWithoutProyectosLideradosInput = class UserUpdateWithoutProyectosLideradosInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutProyectosLideradosInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutProyectosLideradosInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutProyectosLideradosInput.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], UserUpdateWithoutProyectosLideradosInput.prototype, "emailVerified", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutProyectosLideradosInput.prototype, "image", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutProyectosLideradosInput.prototype, "telefono", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumEnum_RolFieldUpdateOperationsInput_1.EnumEnum_RolFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumEnum_RolFieldUpdateOperationsInput_1.EnumEnum_RolFieldUpdateOperationsInput)
], UserUpdateWithoutProyectosLideradosInput.prototype, "rol", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumEnum_EstadoUserFieldUpdateOperationsInput_1.EnumEnum_EstadoUserFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumEnum_EstadoUserFieldUpdateOperationsInput_1.EnumEnum_EstadoUserFieldUpdateOperationsInput)
], UserUpdateWithoutProyectosLideradosInput.prototype, "estado", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AvanceUpdateManyWithoutCreadoPorInput_1.AvanceUpdateManyWithoutCreadoPorInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AvanceUpdateManyWithoutCreadoPorInput_1.AvanceUpdateManyWithoutCreadoPorInput)
], UserUpdateWithoutProyectosLideradosInput.prototype, "avancesCreados", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InscripcionUpdateManyWithoutEstudianteInput_1.InscripcionUpdateManyWithoutEstudianteInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", InscripcionUpdateManyWithoutEstudianteInput_1.InscripcionUpdateManyWithoutEstudianteInput)
], UserUpdateWithoutProyectosLideradosInput.prototype, "inscripciones", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AccountUpdateManyWithoutUserInput_1.AccountUpdateManyWithoutUserInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AccountUpdateManyWithoutUserInput_1.AccountUpdateManyWithoutUserInput)
], UserUpdateWithoutProyectosLideradosInput.prototype, "accounts", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SessionUpdateManyWithoutUserInput_1.SessionUpdateManyWithoutUserInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SessionUpdateManyWithoutUserInput_1.SessionUpdateManyWithoutUserInput)
], UserUpdateWithoutProyectosLideradosInput.prototype, "sessions", void 0);
UserUpdateWithoutProyectosLideradosInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserUpdateWithoutProyectosLideradosInput", {
        isAbstract: true
    })
], UserUpdateWithoutProyectosLideradosInput);
exports.UserUpdateWithoutProyectosLideradosInput = UserUpdateWithoutProyectosLideradosInput;
