"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionCreateWithoutUsuarioInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let SessionCreateWithoutUsuarioInput = class SessionCreateWithoutUsuarioInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SessionCreateWithoutUsuarioInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SessionCreateWithoutUsuarioInput.prototype, "sessionToken", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], SessionCreateWithoutUsuarioInput.prototype, "expires", void 0);
SessionCreateWithoutUsuarioInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SessionCreateWithoutUsuarioInput", {
        isAbstract: true
    })
], SessionCreateWithoutUsuarioInput);
exports.SessionCreateWithoutUsuarioInput = SessionCreateWithoutUsuarioInput;
