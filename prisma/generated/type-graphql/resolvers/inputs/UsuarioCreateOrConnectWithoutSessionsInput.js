"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioCreateOrConnectWithoutSessionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UsuarioCreateWithoutSessionsInput_1 = require("../inputs/UsuarioCreateWithoutSessionsInput");
const UsuarioWhereUniqueInput_1 = require("../inputs/UsuarioWhereUniqueInput");
let UsuarioCreateOrConnectWithoutSessionsInput = class UsuarioCreateOrConnectWithoutSessionsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput)
], UsuarioCreateOrConnectWithoutSessionsInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioCreateWithoutSessionsInput_1.UsuarioCreateWithoutSessionsInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioCreateWithoutSessionsInput_1.UsuarioCreateWithoutSessionsInput)
], UsuarioCreateOrConnectWithoutSessionsInput.prototype, "create", void 0);
UsuarioCreateOrConnectWithoutSessionsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UsuarioCreateOrConnectWithoutSessionsInput", {
        isAbstract: true
    })
], UsuarioCreateOrConnectWithoutSessionsInput);
exports.UsuarioCreateOrConnectWithoutSessionsInput = UsuarioCreateOrConnectWithoutSessionsInput;
