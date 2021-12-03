"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyObjetivoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ObjetivoUpdateManyMutationInput_1 = require("../../../inputs/ObjetivoUpdateManyMutationInput");
const ObjetivoWhereInput_1 = require("../../../inputs/ObjetivoWhereInput");
let UpdateManyObjetivoArgs = class UpdateManyObjetivoArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ObjetivoUpdateManyMutationInput_1.ObjetivoUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ObjetivoUpdateManyMutationInput_1.ObjetivoUpdateManyMutationInput)
], UpdateManyObjetivoArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ObjetivoWhereInput_1.ObjetivoWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ObjetivoWhereInput_1.ObjetivoWhereInput)
], UpdateManyObjetivoArgs.prototype, "where", void 0);
UpdateManyObjetivoArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdateManyObjetivoArgs);
exports.UpdateManyObjetivoArgs = UpdateManyObjetivoArgs;
