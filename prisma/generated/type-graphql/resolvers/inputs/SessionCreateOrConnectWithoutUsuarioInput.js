"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionCreateOrConnectWithoutUsuarioInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SessionCreateWithoutUsuarioInput_1 = require("../inputs/SessionCreateWithoutUsuarioInput");
const SessionWhereUniqueInput_1 = require("../inputs/SessionWhereUniqueInput");
let SessionCreateOrConnectWithoutUsuarioInput = class SessionCreateOrConnectWithoutUsuarioInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SessionWhereUniqueInput_1.SessionWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SessionWhereUniqueInput_1.SessionWhereUniqueInput)
], SessionCreateOrConnectWithoutUsuarioInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SessionCreateWithoutUsuarioInput_1.SessionCreateWithoutUsuarioInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SessionCreateWithoutUsuarioInput_1.SessionCreateWithoutUsuarioInput)
], SessionCreateOrConnectWithoutUsuarioInput.prototype, "create", void 0);
SessionCreateOrConnectWithoutUsuarioInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SessionCreateOrConnectWithoutUsuarioInput", {
        isAbstract: true
    })
], SessionCreateOrConnectWithoutUsuarioInput);
exports.SessionCreateOrConnectWithoutUsuarioInput = SessionCreateOrConnectWithoutUsuarioInput;
