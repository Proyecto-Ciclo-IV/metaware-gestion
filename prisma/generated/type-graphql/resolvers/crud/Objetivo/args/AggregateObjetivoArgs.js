"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateObjetivoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ObjetivoOrderByWithRelationInput_1 = require("../../../inputs/ObjetivoOrderByWithRelationInput");
const ObjetivoWhereInput_1 = require("../../../inputs/ObjetivoWhereInput");
const ObjetivoWhereUniqueInput_1 = require("../../../inputs/ObjetivoWhereUniqueInput");
let AggregateObjetivoArgs = class AggregateObjetivoArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ObjetivoWhereInput_1.ObjetivoWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ObjetivoWhereInput_1.ObjetivoWhereInput)
], AggregateObjetivoArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ObjetivoOrderByWithRelationInput_1.ObjetivoOrderByWithRelationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AggregateObjetivoArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ObjetivoWhereUniqueInput_1.ObjetivoWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ObjetivoWhereUniqueInput_1.ObjetivoWhereUniqueInput)
], AggregateObjetivoArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AggregateObjetivoArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AggregateObjetivoArgs.prototype, "skip", void 0);
AggregateObjetivoArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], AggregateObjetivoArgs);
exports.AggregateObjetivoArgs = AggregateObjetivoArgs;
