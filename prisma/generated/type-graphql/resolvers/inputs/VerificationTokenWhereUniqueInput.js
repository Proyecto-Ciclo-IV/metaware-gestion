"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationTokenWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const VerificationTokenIdentifierTokenCompoundUniqueInput_1 = require("../inputs/VerificationTokenIdentifierTokenCompoundUniqueInput");
let VerificationTokenWhereUniqueInput = class VerificationTokenWhereUniqueInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], VerificationTokenWhereUniqueInput.prototype, "token", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => VerificationTokenIdentifierTokenCompoundUniqueInput_1.VerificationTokenIdentifierTokenCompoundUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", VerificationTokenIdentifierTokenCompoundUniqueInput_1.VerificationTokenIdentifierTokenCompoundUniqueInput)
], VerificationTokenWhereUniqueInput.prototype, "identifier_token", void 0);
VerificationTokenWhereUniqueInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("VerificationTokenWhereUniqueInput", {
        isAbstract: true
    })
], VerificationTokenWhereUniqueInput);
exports.VerificationTokenWhereUniqueInput = VerificationTokenWhereUniqueInput;
