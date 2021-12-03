"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProyectoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProyectoUpdateInput_1 = require("../../../inputs/ProyectoUpdateInput");
const ProyectoWhereUniqueInput_1 = require("../../../inputs/ProyectoWhereUniqueInput");
let UpdateProyectoArgs = class UpdateProyectoArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProyectoUpdateInput_1.ProyectoUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProyectoUpdateInput_1.ProyectoUpdateInput)
], UpdateProyectoArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProyectoWhereUniqueInput_1.ProyectoWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProyectoWhereUniqueInput_1.ProyectoWhereUniqueInput)
], UpdateProyectoArgs.prototype, "where", void 0);
UpdateProyectoArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdateProyectoArgs);
exports.UpdateProyectoArgs = UpdateProyectoArgs;
