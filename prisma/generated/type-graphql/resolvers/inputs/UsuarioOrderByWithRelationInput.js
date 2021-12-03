"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AccountOrderByRelationAggregateInput_1 = require("../inputs/AccountOrderByRelationAggregateInput");
const AvanceOrderByRelationAggregateInput_1 = require("../inputs/AvanceOrderByRelationAggregateInput");
const InscripcionOrderByRelationAggregateInput_1 = require("../inputs/InscripcionOrderByRelationAggregateInput");
const ProyectoOrderByRelationAggregateInput_1 = require("../inputs/ProyectoOrderByRelationAggregateInput");
const SessionOrderByRelationAggregateInput_1 = require("../inputs/SessionOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let UsuarioOrderByWithRelationInput = class UsuarioOrderByWithRelationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UsuarioOrderByWithRelationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UsuarioOrderByWithRelationInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UsuarioOrderByWithRelationInput.prototype, "correo", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UsuarioOrderByWithRelationInput.prototype, "correoVerificado", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UsuarioOrderByWithRelationInput.prototype, "image", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UsuarioOrderByWithRelationInput.prototype, "telefono", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UsuarioOrderByWithRelationInput.prototype, "rol", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UsuarioOrderByWithRelationInput.prototype, "estado", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProyectoOrderByRelationAggregateInput_1.ProyectoOrderByRelationAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProyectoOrderByRelationAggregateInput_1.ProyectoOrderByRelationAggregateInput)
], UsuarioOrderByWithRelationInput.prototype, "proyectosLiderados", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AvanceOrderByRelationAggregateInput_1.AvanceOrderByRelationAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AvanceOrderByRelationAggregateInput_1.AvanceOrderByRelationAggregateInput)
], UsuarioOrderByWithRelationInput.prototype, "avancesCreados", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InscripcionOrderByRelationAggregateInput_1.InscripcionOrderByRelationAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", InscripcionOrderByRelationAggregateInput_1.InscripcionOrderByRelationAggregateInput)
], UsuarioOrderByWithRelationInput.prototype, "inscripciones", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AccountOrderByRelationAggregateInput_1.AccountOrderByRelationAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AccountOrderByRelationAggregateInput_1.AccountOrderByRelationAggregateInput)
], UsuarioOrderByWithRelationInput.prototype, "accounts", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SessionOrderByRelationAggregateInput_1.SessionOrderByRelationAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SessionOrderByRelationAggregateInput_1.SessionOrderByRelationAggregateInput)
], UsuarioOrderByWithRelationInput.prototype, "sessions", void 0);
UsuarioOrderByWithRelationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UsuarioOrderByWithRelationInput", {
        isAbstract: true
    })
], UsuarioOrderByWithRelationInput);
exports.UsuarioOrderByWithRelationInput = UsuarioOrderByWithRelationInput;
