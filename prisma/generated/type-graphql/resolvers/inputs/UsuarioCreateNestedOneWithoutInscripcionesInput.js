"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioCreateNestedOneWithoutInscripcionesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UsuarioCreateOrConnectWithoutInscripcionesInput_1 = require("../inputs/UsuarioCreateOrConnectWithoutInscripcionesInput");
const UsuarioCreateWithoutInscripcionesInput_1 = require("../inputs/UsuarioCreateWithoutInscripcionesInput");
const UsuarioWhereUniqueInput_1 = require("../inputs/UsuarioWhereUniqueInput");
let UsuarioCreateNestedOneWithoutInscripcionesInput = class UsuarioCreateNestedOneWithoutInscripcionesInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioCreateWithoutInscripcionesInput_1.UsuarioCreateWithoutInscripcionesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioCreateWithoutInscripcionesInput_1.UsuarioCreateWithoutInscripcionesInput)
], UsuarioCreateNestedOneWithoutInscripcionesInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioCreateOrConnectWithoutInscripcionesInput_1.UsuarioCreateOrConnectWithoutInscripcionesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioCreateOrConnectWithoutInscripcionesInput_1.UsuarioCreateOrConnectWithoutInscripcionesInput)
], UsuarioCreateNestedOneWithoutInscripcionesInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput)
], UsuarioCreateNestedOneWithoutInscripcionesInput.prototype, "connect", void 0);
UsuarioCreateNestedOneWithoutInscripcionesInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UsuarioCreateNestedOneWithoutInscripcionesInput", {
        isAbstract: true
    })
], UsuarioCreateNestedOneWithoutInscripcionesInput);
exports.UsuarioCreateNestedOneWithoutInscripcionesInput = UsuarioCreateNestedOneWithoutInscripcionesInput;
