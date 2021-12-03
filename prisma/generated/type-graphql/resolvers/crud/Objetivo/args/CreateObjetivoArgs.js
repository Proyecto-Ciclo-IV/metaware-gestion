"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateObjetivoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ObjetivoCreateInput_1 = require("../../../inputs/ObjetivoCreateInput");
let CreateObjetivoArgs = class CreateObjetivoArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ObjetivoCreateInput_1.ObjetivoCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ObjetivoCreateInput_1.ObjetivoCreateInput)
], CreateObjetivoArgs.prototype, "data", void 0);
CreateObjetivoArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateObjetivoArgs);
exports.CreateObjetivoArgs = CreateObjetivoArgs;
