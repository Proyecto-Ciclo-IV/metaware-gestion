"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAvanceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AvanceCreateInput_1 = require("../../../inputs/AvanceCreateInput");
let CreateAvanceArgs = class CreateAvanceArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AvanceCreateInput_1.AvanceCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AvanceCreateInput_1.AvanceCreateInput)
], CreateAvanceArgs.prototype, "data", void 0);
CreateAvanceArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateAvanceArgs);
exports.CreateAvanceArgs = CreateAvanceArgs;
