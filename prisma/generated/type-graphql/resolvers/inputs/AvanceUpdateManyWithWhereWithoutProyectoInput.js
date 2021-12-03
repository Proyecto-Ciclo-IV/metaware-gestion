"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvanceUpdateManyWithWhereWithoutProyectoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AvanceScalarWhereInput_1 = require("../inputs/AvanceScalarWhereInput");
const AvanceUpdateManyMutationInput_1 = require("../inputs/AvanceUpdateManyMutationInput");
let AvanceUpdateManyWithWhereWithoutProyectoInput = class AvanceUpdateManyWithWhereWithoutProyectoInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AvanceScalarWhereInput_1.AvanceScalarWhereInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AvanceScalarWhereInput_1.AvanceScalarWhereInput)
], AvanceUpdateManyWithWhereWithoutProyectoInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AvanceUpdateManyMutationInput_1.AvanceUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AvanceUpdateManyMutationInput_1.AvanceUpdateManyMutationInput)
], AvanceUpdateManyWithWhereWithoutProyectoInput.prototype, "data", void 0);
AvanceUpdateManyWithWhereWithoutProyectoInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AvanceUpdateManyWithWhereWithoutProyectoInput", {
        isAbstract: true
    })
], AvanceUpdateManyWithWhereWithoutProyectoInput);
exports.AvanceUpdateManyWithWhereWithoutProyectoInput = AvanceUpdateManyWithWhereWithoutProyectoInput;
