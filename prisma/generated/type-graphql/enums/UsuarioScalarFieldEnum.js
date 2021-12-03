"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
var UsuarioScalarFieldEnum;
(function (UsuarioScalarFieldEnum) {
    UsuarioScalarFieldEnum["id"] = "id";
    UsuarioScalarFieldEnum["name"] = "name";
    UsuarioScalarFieldEnum["correo"] = "correo";
    UsuarioScalarFieldEnum["correoVerificado"] = "correoVerificado";
    UsuarioScalarFieldEnum["image"] = "image";
    UsuarioScalarFieldEnum["telefono"] = "telefono";
    UsuarioScalarFieldEnum["rol"] = "rol";
    UsuarioScalarFieldEnum["estado"] = "estado";
})(UsuarioScalarFieldEnum = exports.UsuarioScalarFieldEnum || (exports.UsuarioScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(UsuarioScalarFieldEnum, {
    name: "UsuarioScalarFieldEnum",
    description: undefined,
});
