"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvanceCreateOrConnectWithoutProyectoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AvanceCreateWithoutProyectoInput_1 = require("../inputs/AvanceCreateWithoutProyectoInput");
const AvanceWhereUniqueInput_1 = require("../inputs/AvanceWhereUniqueInput");
let AvanceCreateOrConnectWithoutProyectoInput = class AvanceCreateOrConnectWithoutProyectoInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AvanceWhereUniqueInput_1.AvanceWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AvanceWhereUniqueInput_1.AvanceWhereUniqueInput)
], AvanceCreateOrConnectWithoutProyectoInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AvanceCreateWithoutProyectoInput_1.AvanceCreateWithoutProyectoInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AvanceCreateWithoutProyectoInput_1.AvanceCreateWithoutProyectoInput)
], AvanceCreateOrConnectWithoutProyectoInput.prototype, "create", void 0);
AvanceCreateOrConnectWithoutProyectoInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AvanceCreateOrConnectWithoutProyectoInput", {
        isAbstract: true
    })
], AvanceCreateOrConnectWithoutProyectoInput);
exports.AvanceCreateOrConnectWithoutProyectoInput = AvanceCreateOrConnectWithoutProyectoInput;
