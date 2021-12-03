"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enum_TipoObjetivo = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
var Enum_TipoObjetivo;
(function (Enum_TipoObjetivo) {
    Enum_TipoObjetivo["General"] = "General";
    Enum_TipoObjetivo["Especifico"] = "Especifico";
})(Enum_TipoObjetivo = exports.Enum_TipoObjetivo || (exports.Enum_TipoObjetivo = {}));
TypeGraphQL.registerEnumType(Enum_TipoObjetivo, {
    name: "Enum_TipoObjetivo",
    description: undefined,
});
