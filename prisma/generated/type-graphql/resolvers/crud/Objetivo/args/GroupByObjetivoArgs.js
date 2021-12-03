"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByObjetivoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ObjetivoOrderByWithAggregationInput_1 = require("../../../inputs/ObjetivoOrderByWithAggregationInput");
const ObjetivoScalarWhereWithAggregatesInput_1 = require("../../../inputs/ObjetivoScalarWhereWithAggregatesInput");
const ObjetivoWhereInput_1 = require("../../../inputs/ObjetivoWhereInput");
const ObjetivoScalarFieldEnum_1 = require("../../../../enums/ObjetivoScalarFieldEnum");
let GroupByObjetivoArgs = class GroupByObjetivoArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ObjetivoWhereInput_1.ObjetivoWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ObjetivoWhereInput_1.ObjetivoWhereInput)
], GroupByObjetivoArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ObjetivoOrderByWithAggregationInput_1.ObjetivoOrderByWithAggregationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], GroupByObjetivoArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ObjetivoScalarFieldEnum_1.ObjetivoScalarFieldEnum], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], GroupByObjetivoArgs.prototype, "by", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ObjetivoScalarWhereWithAggregatesInput_1.ObjetivoScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ObjetivoScalarWhereWithAggregatesInput_1.ObjetivoScalarWhereWithAggregatesInput)
], GroupByObjetivoArgs.prototype, "having", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GroupByObjetivoArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GroupByObjetivoArgs.prototype, "skip", void 0);
GroupByObjetivoArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], GroupByObjetivoArgs);
exports.GroupByObjetivoArgs = GroupByObjetivoArgs;
