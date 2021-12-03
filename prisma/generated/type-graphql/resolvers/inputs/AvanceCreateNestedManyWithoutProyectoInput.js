"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvanceCreateNestedManyWithoutProyectoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AvanceCreateManyProyectoInputEnvelope_1 = require("../inputs/AvanceCreateManyProyectoInputEnvelope");
const AvanceCreateOrConnectWithoutProyectoInput_1 = require("../inputs/AvanceCreateOrConnectWithoutProyectoInput");
const AvanceCreateWithoutProyectoInput_1 = require("../inputs/AvanceCreateWithoutProyectoInput");
const AvanceWhereUniqueInput_1 = require("../inputs/AvanceWhereUniqueInput");
let AvanceCreateNestedManyWithoutProyectoInput = class AvanceCreateNestedManyWithoutProyectoInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AvanceCreateWithoutProyectoInput_1.AvanceCreateWithoutProyectoInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AvanceCreateNestedManyWithoutProyectoInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AvanceCreateOrConnectWithoutProyectoInput_1.AvanceCreateOrConnectWithoutProyectoInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AvanceCreateNestedManyWithoutProyectoInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AvanceCreateManyProyectoInputEnvelope_1.AvanceCreateManyProyectoInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AvanceCreateManyProyectoInputEnvelope_1.AvanceCreateManyProyectoInputEnvelope)
], AvanceCreateNestedManyWithoutProyectoInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AvanceWhereUniqueInput_1.AvanceWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AvanceCreateNestedManyWithoutProyectoInput.prototype, "connect", void 0);
AvanceCreateNestedManyWithoutProyectoInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AvanceCreateNestedManyWithoutProyectoInput", {
        isAbstract: true
    })
], AvanceCreateNestedManyWithoutProyectoInput);
exports.AvanceCreateNestedManyWithoutProyectoInput = AvanceCreateNestedManyWithoutProyectoInput;
