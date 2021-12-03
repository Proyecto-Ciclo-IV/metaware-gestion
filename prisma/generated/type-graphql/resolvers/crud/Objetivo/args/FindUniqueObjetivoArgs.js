"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueObjetivoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ObjetivoWhereUniqueInput_1 = require("../../../inputs/ObjetivoWhereUniqueInput");
let FindUniqueObjetivoArgs = class FindUniqueObjetivoArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ObjetivoWhereUniqueInput_1.ObjetivoWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ObjetivoWhereUniqueInput_1.ObjetivoWhereUniqueInput)
], FindUniqueObjetivoArgs.prototype, "where", void 0);
FindUniqueObjetivoArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], FindUniqueObjetivoArgs);
exports.FindUniqueObjetivoArgs = FindUniqueObjetivoArgs;
