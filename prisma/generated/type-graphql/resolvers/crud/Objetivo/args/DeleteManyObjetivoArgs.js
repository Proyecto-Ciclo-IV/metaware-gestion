"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyObjetivoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ObjetivoWhereInput_1 = require("../../../inputs/ObjetivoWhereInput");
let DeleteManyObjetivoArgs = class DeleteManyObjetivoArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ObjetivoWhereInput_1.ObjetivoWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ObjetivoWhereInput_1.ObjetivoWhereInput)
], DeleteManyObjetivoArgs.prototype, "where", void 0);
DeleteManyObjetivoArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], DeleteManyObjetivoArgs);
exports.DeleteManyObjetivoArgs = DeleteManyObjetivoArgs;
