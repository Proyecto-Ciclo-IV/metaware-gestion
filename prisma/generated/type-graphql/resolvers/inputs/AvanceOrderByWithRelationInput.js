"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvanceOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProyectoOrderByWithRelationInput_1 = require("../inputs/ProyectoOrderByWithRelationInput");
const UserOrderByWithRelationInput_1 = require("../inputs/UserOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let AvanceOrderByWithRelationInput = class AvanceOrderByWithRelationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AvanceOrderByWithRelationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AvanceOrderByWithRelationInput.prototype, "fecha", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AvanceOrderByWithRelationInput.prototype, "descripcion", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AvanceOrderByWithRelationInput.prototype, "observaciones", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProyectoOrderByWithRelationInput_1.ProyectoOrderByWithRelationInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProyectoOrderByWithRelationInput_1.ProyectoOrderByWithRelationInput)
], AvanceOrderByWithRelationInput.prototype, "proyecto", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AvanceOrderByWithRelationInput.prototype, "proyectoId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserOrderByWithRelationInput_1.UserOrderByWithRelationInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserOrderByWithRelationInput_1.UserOrderByWithRelationInput)
], AvanceOrderByWithRelationInput.prototype, "creadoPor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AvanceOrderByWithRelationInput.prototype, "UserId", void 0);
AvanceOrderByWithRelationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AvanceOrderByWithRelationInput", {
        isAbstract: true
    })
], AvanceOrderByWithRelationInput);
exports.AvanceOrderByWithRelationInput = AvanceOrderByWithRelationInput;
