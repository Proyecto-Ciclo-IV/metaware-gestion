"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateObjetivoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ObjetivoUpdateInput_1 = require("../../../inputs/ObjetivoUpdateInput");
const ObjetivoWhereUniqueInput_1 = require("../../../inputs/ObjetivoWhereUniqueInput");
let UpdateObjetivoArgs = class UpdateObjetivoArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ObjetivoUpdateInput_1.ObjetivoUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ObjetivoUpdateInput_1.ObjetivoUpdateInput)
], UpdateObjetivoArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ObjetivoWhereUniqueInput_1.ObjetivoWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ObjetivoWhereUniqueInput_1.ObjetivoWhereUniqueInput)
], UpdateObjetivoArgs.prototype, "where", void 0);
UpdateObjetivoArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdateObjetivoArgs);
exports.UpdateObjetivoArgs = UpdateObjetivoArgs;
