"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let SessionWhereUniqueInput = class SessionWhereUniqueInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SessionWhereUniqueInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SessionWhereUniqueInput.prototype, "sessionToken", void 0);
SessionWhereUniqueInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SessionWhereUniqueInput", {
        isAbstract: true
    })
], SessionWhereUniqueInput);
exports.SessionWhereUniqueInput = SessionWhereUniqueInput;
