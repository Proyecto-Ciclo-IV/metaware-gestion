"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoObjetivosArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ObjetivoOrderByWithRelationInput_1 = require("../../../inputs/ObjetivoOrderByWithRelationInput");
const ObjetivoWhereInput_1 = require("../../../inputs/ObjetivoWhereInput");
const ObjetivoWhereUniqueInput_1 = require("../../../inputs/ObjetivoWhereUniqueInput");
const ObjetivoScalarFieldEnum_1 = require("../../../../enums/ObjetivoScalarFieldEnum");
let ProyectoObjetivosArgs = class ProyectoObjetivosArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ObjetivoWhereInput_1.ObjetivoWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ObjetivoWhereInput_1.ObjetivoWhereInput)
], ProyectoObjetivosArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ObjetivoOrderByWithRelationInput_1.ObjetivoOrderByWithRelationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProyectoObjetivosArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ObjetivoWhereUniqueInput_1.ObjetivoWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ObjetivoWhereUniqueInput_1.ObjetivoWhereUniqueInput)
], ProyectoObjetivosArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ProyectoObjetivosArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ProyectoObjetivosArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ObjetivoScalarFieldEnum_1.ObjetivoScalarFieldEnum], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProyectoObjetivosArgs.prototype, "distinct", void 0);
ProyectoObjetivosArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], ProyectoObjetivosArgs);
exports.ProyectoObjetivosArgs = ProyectoObjetivosArgs;
