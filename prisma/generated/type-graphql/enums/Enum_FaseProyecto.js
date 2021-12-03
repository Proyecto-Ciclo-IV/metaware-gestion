"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enum_FaseProyecto = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
var Enum_FaseProyecto;
(function (Enum_FaseProyecto) {
    Enum_FaseProyecto["Iniciado"] = "Iniciado";
    Enum_FaseProyecto["Desarrollo"] = "Desarrollo";
    Enum_FaseProyecto["Terminado"] = "Terminado";
})(Enum_FaseProyecto = exports.Enum_FaseProyecto || (exports.Enum_FaseProyecto = {}));
TypeGraphQL.registerEnumType(Enum_FaseProyecto, {
    name: "Enum_FaseProyecto",
    description: undefined,
});
