"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertAvanceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AvanceCreateInput_1 = require("../../../inputs/AvanceCreateInput");
const AvanceUpdateInput_1 = require("../../../inputs/AvanceUpdateInput");
const AvanceWhereUniqueInput_1 = require("../../../inputs/AvanceWhereUniqueInput");
let UpsertAvanceArgs = class UpsertAvanceArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AvanceWhereUniqueInput_1.AvanceWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AvanceWhereUniqueInput_1.AvanceWhereUniqueInput)
], UpsertAvanceArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AvanceCreateInput_1.AvanceCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AvanceCreateInput_1.AvanceCreateInput)
], UpsertAvanceArgs.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AvanceUpdateInput_1.AvanceUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AvanceUpdateInput_1.AvanceUpdateInput)
], UpsertAvanceArgs.prototype, "update", void 0);
UpsertAvanceArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpsertAvanceArgs);
exports.UpsertAvanceArgs = UpsertAvanceArgs;
