"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByAvanceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AvanceOrderByWithAggregationInput_1 = require("../../../inputs/AvanceOrderByWithAggregationInput");
const AvanceScalarWhereWithAggregatesInput_1 = require("../../../inputs/AvanceScalarWhereWithAggregatesInput");
const AvanceWhereInput_1 = require("../../../inputs/AvanceWhereInput");
const AvanceScalarFieldEnum_1 = require("../../../../enums/AvanceScalarFieldEnum");
let GroupByAvanceArgs = class GroupByAvanceArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AvanceWhereInput_1.AvanceWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AvanceWhereInput_1.AvanceWhereInput)
], GroupByAvanceArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AvanceOrderByWithAggregationInput_1.AvanceOrderByWithAggregationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], GroupByAvanceArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AvanceScalarFieldEnum_1.AvanceScalarFieldEnum], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], GroupByAvanceArgs.prototype, "by", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AvanceScalarWhereWithAggregatesInput_1.AvanceScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AvanceScalarWhereWithAggregatesInput_1.AvanceScalarWhereWithAggregatesInput)
], GroupByAvanceArgs.prototype, "having", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GroupByAvanceArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GroupByAvanceArgs.prototype, "skip", void 0);
GroupByAvanceArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], GroupByAvanceArgs);
exports.GroupByAvanceArgs = GroupByAvanceArgs;
