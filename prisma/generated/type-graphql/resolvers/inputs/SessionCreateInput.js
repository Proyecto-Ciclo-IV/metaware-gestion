"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UsuarioCreateNestedOneWithoutSessionsInput_1 = require("../inputs/UsuarioCreateNestedOneWithoutSessionsInput");
let SessionCreateInput = class SessionCreateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SessionCreateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SessionCreateInput.prototype, "sessionToken", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], SessionCreateInput.prototype, "expires", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioCreateNestedOneWithoutSessionsInput_1.UsuarioCreateNestedOneWithoutSessionsInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioCreateNestedOneWithoutSessionsInput_1.UsuarioCreateNestedOneWithoutSessionsInput)
], SessionCreateInput.prototype, "usuario", void 0);
SessionCreateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SessionCreateInput", {
        isAbstract: true
    })
], SessionCreateInput);
exports.SessionCreateInput = SessionCreateInput;
