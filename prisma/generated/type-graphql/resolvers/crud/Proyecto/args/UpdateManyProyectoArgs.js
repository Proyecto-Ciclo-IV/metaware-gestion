"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyProyectoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProyectoUpdateManyMutationInput_1 = require("../../../inputs/ProyectoUpdateManyMutationInput");
const ProyectoWhereInput_1 = require("../../../inputs/ProyectoWhereInput");
let UpdateManyProyectoArgs = class UpdateManyProyectoArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProyectoUpdateManyMutationInput_1.ProyectoUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProyectoUpdateManyMutationInput_1.ProyectoUpdateManyMutationInput)
], UpdateManyProyectoArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProyectoWhereInput_1.ProyectoWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProyectoWhereInput_1.ProyectoWhereInput)
], UpdateManyProyectoArgs.prototype, "where", void 0);
UpdateManyProyectoArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdateManyProyectoArgs);
exports.UpdateManyProyectoArgs = UpdateManyProyectoArgs;
