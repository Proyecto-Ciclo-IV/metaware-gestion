"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstVerificationTokenArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const VerificationTokenOrderByWithRelationInput_1 = require("../../../inputs/VerificationTokenOrderByWithRelationInput");
const VerificationTokenWhereInput_1 = require("../../../inputs/VerificationTokenWhereInput");
const VerificationTokenWhereUniqueInput_1 = require("../../../inputs/VerificationTokenWhereUniqueInput");
const VerificationTokenScalarFieldEnum_1 = require("../../../../enums/VerificationTokenScalarFieldEnum");
let FindFirstVerificationTokenArgs = class FindFirstVerificationTokenArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => VerificationTokenWhereInput_1.VerificationTokenWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", VerificationTokenWhereInput_1.VerificationTokenWhereInput)
], FindFirstVerificationTokenArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [VerificationTokenOrderByWithRelationInput_1.VerificationTokenOrderByWithRelationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindFirstVerificationTokenArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => VerificationTokenWhereUniqueInput_1.VerificationTokenWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", VerificationTokenWhereUniqueInput_1.VerificationTokenWhereUniqueInput)
], FindFirstVerificationTokenArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindFirstVerificationTokenArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindFirstVerificationTokenArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [VerificationTokenScalarFieldEnum_1.VerificationTokenScalarFieldEnum], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindFirstVerificationTokenArgs.prototype, "distinct", void 0);
FindFirstVerificationTokenArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], FindFirstVerificationTokenArgs);
exports.FindFirstVerificationTokenArgs = FindFirstVerificationTokenArgs;
