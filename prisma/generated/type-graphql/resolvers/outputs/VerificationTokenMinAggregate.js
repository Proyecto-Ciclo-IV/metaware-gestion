"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationTokenMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let VerificationTokenMinAggregate = class VerificationTokenMinAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], VerificationTokenMinAggregate.prototype, "identifier", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], VerificationTokenMinAggregate.prototype, "token", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], VerificationTokenMinAggregate.prototype, "expires", void 0);
VerificationTokenMinAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("VerificationTokenMinAggregate", {
        isAbstract: true
    })
], VerificationTokenMinAggregate);
exports.VerificationTokenMinAggregate = VerificationTokenMinAggregate;
