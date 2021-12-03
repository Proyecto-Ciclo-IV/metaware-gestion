"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvanceScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
var AvanceScalarFieldEnum;
(function (AvanceScalarFieldEnum) {
    AvanceScalarFieldEnum["id"] = "id";
    AvanceScalarFieldEnum["fecha"] = "fecha";
    AvanceScalarFieldEnum["descripcion"] = "descripcion";
    AvanceScalarFieldEnum["observaciones"] = "observaciones";
    AvanceScalarFieldEnum["proyectoId"] = "proyectoId";
    AvanceScalarFieldEnum["userId"] = "userId";
})(AvanceScalarFieldEnum = exports.AvanceScalarFieldEnum || (exports.AvanceScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(AvanceScalarFieldEnum, {
    name: "AvanceScalarFieldEnum",
    description: undefined,
});
