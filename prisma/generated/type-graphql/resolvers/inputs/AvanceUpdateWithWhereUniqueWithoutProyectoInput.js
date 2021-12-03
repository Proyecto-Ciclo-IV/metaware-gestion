"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvanceUpdateWithWhereUniqueWithoutProyectoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AvanceUpdateWithoutProyectoInput_1 = require("../inputs/AvanceUpdateWithoutProyectoInput");
const AvanceWhereUniqueInput_1 = require("../inputs/AvanceWhereUniqueInput");
let AvanceUpdateWithWhereUniqueWithoutProyectoInput = class AvanceUpdateWithWhereUniqueWithoutProyectoInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AvanceWhereUniqueInput_1.AvanceWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AvanceWhereUniqueInput_1.AvanceWhereUniqueInput)
], AvanceUpdateWithWhereUniqueWithoutProyectoInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AvanceUpdateWithoutProyectoInput_1.AvanceUpdateWithoutProyectoInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AvanceUpdateWithoutProyectoInput_1.AvanceUpdateWithoutProyectoInput)
], AvanceUpdateWithWhereUniqueWithoutProyectoInput.prototype, "data", void 0);
AvanceUpdateWithWhereUniqueWithoutProyectoInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AvanceUpdateWithWhereUniqueWithoutProyectoInput", {
        isAbstract: true
    })
], AvanceUpdateWithWhereUniqueWithoutProyectoInput);
exports.AvanceUpdateWithWhereUniqueWithoutProyectoInput = AvanceUpdateWithWhereUniqueWithoutProyectoInput;
