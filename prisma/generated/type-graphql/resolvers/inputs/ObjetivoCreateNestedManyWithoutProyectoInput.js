"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjetivoCreateNestedManyWithoutProyectoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ObjetivoCreateManyProyectoInputEnvelope_1 = require("../inputs/ObjetivoCreateManyProyectoInputEnvelope");
const ObjetivoCreateOrConnectWithoutProyectoInput_1 = require("../inputs/ObjetivoCreateOrConnectWithoutProyectoInput");
const ObjetivoCreateWithoutProyectoInput_1 = require("../inputs/ObjetivoCreateWithoutProyectoInput");
const ObjetivoWhereUniqueInput_1 = require("../inputs/ObjetivoWhereUniqueInput");
let ObjetivoCreateNestedManyWithoutProyectoInput = class ObjetivoCreateNestedManyWithoutProyectoInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ObjetivoCreateWithoutProyectoInput_1.ObjetivoCreateWithoutProyectoInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ObjetivoCreateNestedManyWithoutProyectoInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ObjetivoCreateOrConnectWithoutProyectoInput_1.ObjetivoCreateOrConnectWithoutProyectoInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ObjetivoCreateNestedManyWithoutProyectoInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ObjetivoCreateManyProyectoInputEnvelope_1.ObjetivoCreateManyProyectoInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ObjetivoCreateManyProyectoInputEnvelope_1.ObjetivoCreateManyProyectoInputEnvelope)
], ObjetivoCreateNestedManyWithoutProyectoInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ObjetivoWhereUniqueInput_1.ObjetivoWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ObjetivoCreateNestedManyWithoutProyectoInput.prototype, "connect", void 0);
ObjetivoCreateNestedManyWithoutProyectoInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ObjetivoCreateNestedManyWithoutProyectoInput", {
        isAbstract: true
    })
], ObjetivoCreateNestedManyWithoutProyectoInput);
exports.ObjetivoCreateNestedManyWithoutProyectoInput = ObjetivoCreateNestedManyWithoutProyectoInput;
