"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjetivoOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProyectoOrderByWithRelationInput_1 = require("../inputs/ProyectoOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ObjetivoOrderByWithRelationInput = class ObjetivoOrderByWithRelationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ObjetivoOrderByWithRelationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ObjetivoOrderByWithRelationInput.prototype, "descripcion", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ObjetivoOrderByWithRelationInput.prototype, "tipo", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProyectoOrderByWithRelationInput_1.ProyectoOrderByWithRelationInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProyectoOrderByWithRelationInput_1.ProyectoOrderByWithRelationInput)
], ObjetivoOrderByWithRelationInput.prototype, "proyecto", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ObjetivoOrderByWithRelationInput.prototype, "proyectoId", void 0);
ObjetivoOrderByWithRelationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ObjetivoOrderByWithRelationInput", {
        isAbstract: true
    })
], ObjetivoOrderByWithRelationInput);
exports.ObjetivoOrderByWithRelationInput = ObjetivoOrderByWithRelationInput;
