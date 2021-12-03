"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionCreateManyUsuarioInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let SessionCreateManyUsuarioInput = class SessionCreateManyUsuarioInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SessionCreateManyUsuarioInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SessionCreateManyUsuarioInput.prototype, "sessionToken", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], SessionCreateManyUsuarioInput.prototype, "expires", void 0);
SessionCreateManyUsuarioInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SessionCreateManyUsuarioInput", {
        isAbstract: true
    })
], SessionCreateManyUsuarioInput);
exports.SessionCreateManyUsuarioInput = SessionCreateManyUsuarioInput;
