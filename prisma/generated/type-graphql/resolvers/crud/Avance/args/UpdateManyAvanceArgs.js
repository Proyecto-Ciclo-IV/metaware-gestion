"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyAvanceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AvanceUpdateManyMutationInput_1 = require("../../../inputs/AvanceUpdateManyMutationInput");
const AvanceWhereInput_1 = require("../../../inputs/AvanceWhereInput");
let UpdateManyAvanceArgs = class UpdateManyAvanceArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AvanceUpdateManyMutationInput_1.AvanceUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AvanceUpdateManyMutationInput_1.AvanceUpdateManyMutationInput)
], UpdateManyAvanceArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AvanceWhereInput_1.AvanceWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AvanceWhereInput_1.AvanceWhereInput)
], UpdateManyAvanceArgs.prototype, "where", void 0);
UpdateManyAvanceArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdateManyAvanceArgs);
exports.UpdateManyAvanceArgs = UpdateManyAvanceArgs;
