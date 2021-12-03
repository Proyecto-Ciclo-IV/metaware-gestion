"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyObjetivoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ObjetivoCreateManyInput_1 = require("../../../inputs/ObjetivoCreateManyInput");
let CreateManyObjetivoArgs = class CreateManyObjetivoArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ObjetivoCreateManyInput_1.ObjetivoCreateManyInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], CreateManyObjetivoArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CreateManyObjetivoArgs.prototype, "skipDuplicates", void 0);
CreateManyObjetivoArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateManyObjetivoArgs);
exports.CreateManyObjetivoArgs = CreateManyObjetivoArgs;
