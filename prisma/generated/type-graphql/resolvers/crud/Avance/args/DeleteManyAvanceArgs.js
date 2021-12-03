"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyAvanceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AvanceWhereInput_1 = require("../../../inputs/AvanceWhereInput");
let DeleteManyAvanceArgs = class DeleteManyAvanceArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AvanceWhereInput_1.AvanceWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AvanceWhereInput_1.AvanceWhereInput)
], DeleteManyAvanceArgs.prototype, "where", void 0);
DeleteManyAvanceArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], DeleteManyAvanceArgs);
exports.DeleteManyAvanceArgs = DeleteManyAvanceArgs;
