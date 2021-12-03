"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioCreateNestedOneWithoutSessionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UsuarioCreateOrConnectWithoutSessionsInput_1 = require("../inputs/UsuarioCreateOrConnectWithoutSessionsInput");
const UsuarioCreateWithoutSessionsInput_1 = require("../inputs/UsuarioCreateWithoutSessionsInput");
const UsuarioWhereUniqueInput_1 = require("../inputs/UsuarioWhereUniqueInput");
let UsuarioCreateNestedOneWithoutSessionsInput = class UsuarioCreateNestedOneWithoutSessionsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioCreateWithoutSessionsInput_1.UsuarioCreateWithoutSessionsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioCreateWithoutSessionsInput_1.UsuarioCreateWithoutSessionsInput)
], UsuarioCreateNestedOneWithoutSessionsInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioCreateOrConnectWithoutSessionsInput_1.UsuarioCreateOrConnectWithoutSessionsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioCreateOrConnectWithoutSessionsInput_1.UsuarioCreateOrConnectWithoutSessionsInput)
], UsuarioCreateNestedOneWithoutSessionsInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput)
], UsuarioCreateNestedOneWithoutSessionsInput.prototype, "connect", void 0);
UsuarioCreateNestedOneWithoutSessionsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UsuarioCreateNestedOneWithoutSessionsInput", {
        isAbstract: true
    })
], UsuarioCreateNestedOneWithoutSessionsInput);
exports.UsuarioCreateNestedOneWithoutSessionsInput = UsuarioCreateNestedOneWithoutSessionsInput;
