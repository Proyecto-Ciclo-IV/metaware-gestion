"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteObjetivoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ObjetivoWhereUniqueInput_1 = require("../../../inputs/ObjetivoWhereUniqueInput");
let DeleteObjetivoArgs = class DeleteObjetivoArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ObjetivoWhereUniqueInput_1.ObjetivoWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ObjetivoWhereUniqueInput_1.ObjetivoWhereUniqueInput)
], DeleteObjetivoArgs.prototype, "where", void 0);
DeleteObjetivoArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], DeleteObjetivoArgs);
exports.DeleteObjetivoArgs = DeleteObjetivoArgs;
