"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueProyectoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProyectoWhereUniqueInput_1 = require("../../../inputs/ProyectoWhereUniqueInput");
let FindUniqueProyectoArgs = class FindUniqueProyectoArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProyectoWhereUniqueInput_1.ProyectoWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProyectoWhereUniqueInput_1.ProyectoWhereUniqueInput)
], FindUniqueProyectoArgs.prototype, "where", void 0);
FindUniqueProyectoArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], FindUniqueProyectoArgs);
exports.FindUniqueProyectoArgs = FindUniqueProyectoArgs;
