"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyProyectoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProyectoCreateManyInput_1 = require("../../../inputs/ProyectoCreateManyInput");
let CreateManyProyectoArgs = class CreateManyProyectoArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProyectoCreateManyInput_1.ProyectoCreateManyInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], CreateManyProyectoArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CreateManyProyectoArgs.prototype, "skipDuplicates", void 0);
CreateManyProyectoArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateManyProyectoArgs);
exports.CreateManyProyectoArgs = CreateManyProyectoArgs;
