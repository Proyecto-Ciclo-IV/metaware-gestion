"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProyectoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProyectoCreateInput_1 = require("../../../inputs/ProyectoCreateInput");
let CreateProyectoArgs = class CreateProyectoArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProyectoCreateInput_1.ProyectoCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProyectoCreateInput_1.ProyectoCreateInput)
], CreateProyectoArgs.prototype, "data", void 0);
CreateProyectoArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateProyectoArgs);
exports.CreateProyectoArgs = CreateProyectoArgs;
