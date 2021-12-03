"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertObjetivoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ObjetivoCreateInput_1 = require("../../../inputs/ObjetivoCreateInput");
const ObjetivoUpdateInput_1 = require("../../../inputs/ObjetivoUpdateInput");
const ObjetivoWhereUniqueInput_1 = require("../../../inputs/ObjetivoWhereUniqueInput");
let UpsertObjetivoArgs = class UpsertObjetivoArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ObjetivoWhereUniqueInput_1.ObjetivoWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ObjetivoWhereUniqueInput_1.ObjetivoWhereUniqueInput)
], UpsertObjetivoArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ObjetivoCreateInput_1.ObjetivoCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ObjetivoCreateInput_1.ObjetivoCreateInput)
], UpsertObjetivoArgs.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ObjetivoUpdateInput_1.ObjetivoUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ObjetivoUpdateInput_1.ObjetivoUpdateInput)
], UpsertObjetivoArgs.prototype, "update", void 0);
UpsertObjetivoArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpsertObjetivoArgs);
exports.UpsertObjetivoArgs = UpsertObjetivoArgs;
