"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioUpdateWithoutProyectosLideradosInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AccountUpdateManyWithoutUsuarioInput_1 = require("../inputs/AccountUpdateManyWithoutUsuarioInput");
const AvanceUpdateManyWithoutCreadoPorInput_1 = require("../inputs/AvanceUpdateManyWithoutCreadoPorInput");
const EnumEnum_EstadoUsuarioFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_EstadoUsuarioFieldUpdateOperationsInput");
const EnumEnum_RolFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_RolFieldUpdateOperationsInput");
const InscripcionUpdateManyWithoutEstudianteInput_1 = require("../inputs/InscripcionUpdateManyWithoutEstudianteInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const SessionUpdateManyWithoutUsuarioInput_1 = require("../inputs/SessionUpdateManyWithoutUsuarioInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let UsuarioUpdateWithoutProyectosLideradosInput = class UsuarioUpdateWithoutProyectosLideradosInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UsuarioUpdateWithoutProyectosLideradosInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UsuarioUpdateWithoutProyectosLideradosInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UsuarioUpdateWithoutProyectosLideradosInput.prototype, "correo", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], UsuarioUpdateWithoutProyectosLideradosInput.prototype, "correoVerificado", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UsuarioUpdateWithoutProyectosLideradosInput.prototype, "image", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UsuarioUpdateWithoutProyectosLideradosInput.prototype, "telefono", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumEnum_RolFieldUpdateOperationsInput_1.EnumEnum_RolFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumEnum_RolFieldUpdateOperationsInput_1.EnumEnum_RolFieldUpdateOperationsInput)
], UsuarioUpdateWithoutProyectosLideradosInput.prototype, "rol", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumEnum_EstadoUsuarioFieldUpdateOperationsInput_1.EnumEnum_EstadoUsuarioFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumEnum_EstadoUsuarioFieldUpdateOperationsInput_1.EnumEnum_EstadoUsuarioFieldUpdateOperationsInput)
], UsuarioUpdateWithoutProyectosLideradosInput.prototype, "estado", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AvanceUpdateManyWithoutCreadoPorInput_1.AvanceUpdateManyWithoutCreadoPorInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AvanceUpdateManyWithoutCreadoPorInput_1.AvanceUpdateManyWithoutCreadoPorInput)
], UsuarioUpdateWithoutProyectosLideradosInput.prototype, "avancesCreados", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InscripcionUpdateManyWithoutEstudianteInput_1.InscripcionUpdateManyWithoutEstudianteInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", InscripcionUpdateManyWithoutEstudianteInput_1.InscripcionUpdateManyWithoutEstudianteInput)
], UsuarioUpdateWithoutProyectosLideradosInput.prototype, "inscripciones", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AccountUpdateManyWithoutUsuarioInput_1.AccountUpdateManyWithoutUsuarioInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AccountUpdateManyWithoutUsuarioInput_1.AccountUpdateManyWithoutUsuarioInput)
], UsuarioUpdateWithoutProyectosLideradosInput.prototype, "accounts", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SessionUpdateManyWithoutUsuarioInput_1.SessionUpdateManyWithoutUsuarioInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SessionUpdateManyWithoutUsuarioInput_1.SessionUpdateManyWithoutUsuarioInput)
], UsuarioUpdateWithoutProyectosLideradosInput.prototype, "sessions", void 0);
UsuarioUpdateWithoutProyectosLideradosInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UsuarioUpdateWithoutProyectosLideradosInput", {
        isAbstract: true
    })
], UsuarioUpdateWithoutProyectosLideradosInput);
exports.UsuarioUpdateWithoutProyectosLideradosInput = UsuarioUpdateWithoutProyectosLideradosInput;
