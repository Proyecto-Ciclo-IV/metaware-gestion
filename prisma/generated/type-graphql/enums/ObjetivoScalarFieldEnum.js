"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjetivoScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
var ObjetivoScalarFieldEnum;
(function (ObjetivoScalarFieldEnum) {
    ObjetivoScalarFieldEnum["id"] = "id";
    ObjetivoScalarFieldEnum["descripcion"] = "descripcion";
    ObjetivoScalarFieldEnum["tipo"] = "tipo";
    ObjetivoScalarFieldEnum["proyectoId"] = "proyectoId";
})(ObjetivoScalarFieldEnum = exports.ObjetivoScalarFieldEnum || (exports.ObjetivoScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(ObjetivoScalarFieldEnum, {
    name: "ObjetivoScalarFieldEnum",
    description: undefined,
});
