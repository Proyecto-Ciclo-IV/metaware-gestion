"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstObjetivoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ObjetivoOrderByWithRelationInput_1 = require("../../../inputs/ObjetivoOrderByWithRelationInput");
const ObjetivoWhereInput_1 = require("../../../inputs/ObjetivoWhereInput");
const ObjetivoWhereUniqueInput_1 = require("../../../inputs/ObjetivoWhereUniqueInput");
const ObjetivoScalarFieldEnum_1 = require("../../../../enums/ObjetivoScalarFieldEnum");
let FindFirstObjetivoArgs = class FindFirstObjetivoArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ObjetivoWhereInput_1.ObjetivoWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ObjetivoWhereInput_1.ObjetivoWhereInput)
], FindFirstObjetivoArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ObjetivoOrderByWithRelationInput_1.ObjetivoOrderByWithRelationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindFirstObjetivoArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ObjetivoWhereUniqueInput_1.ObjetivoWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ObjetivoWhereUniqueInput_1.ObjetivoWhereUniqueInput)
], FindFirstObjetivoArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindFirstObjetivoArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindFirstObjetivoArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ObjetivoScalarFieldEnum_1.ObjetivoScalarFieldEnum], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindFirstObjetivoArgs.prototype, "distinct", void 0);
FindFirstObjetivoArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], FindFirstObjetivoArgs);
exports.FindFirstObjetivoArgs = FindFirstObjetivoArgs;
