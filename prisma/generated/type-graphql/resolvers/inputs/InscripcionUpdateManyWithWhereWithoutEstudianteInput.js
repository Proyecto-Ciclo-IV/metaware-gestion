"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InscripcionUpdateManyWithWhereWithoutEstudianteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const InscripcionScalarWhereInput_1 = require("../inputs/InscripcionScalarWhereInput");
const InscripcionUpdateManyMutationInput_1 = require("../inputs/InscripcionUpdateManyMutationInput");
let InscripcionUpdateManyWithWhereWithoutEstudianteInput = class InscripcionUpdateManyWithWhereWithoutEstudianteInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InscripcionScalarWhereInput_1.InscripcionScalarWhereInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", InscripcionScalarWhereInput_1.InscripcionScalarWhereInput)
], InscripcionUpdateManyWithWhereWithoutEstudianteInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InscripcionUpdateManyMutationInput_1.InscripcionUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", InscripcionUpdateManyMutationInput_1.InscripcionUpdateManyMutationInput)
], InscripcionUpdateManyWithWhereWithoutEstudianteInput.prototype, "data", void 0);
InscripcionUpdateManyWithWhereWithoutEstudianteInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("InscripcionUpdateManyWithWhereWithoutEstudianteInput", {
        isAbstract: true
    })
], InscripcionUpdateManyWithWhereWithoutEstudianteInput);
exports.InscripcionUpdateManyWithWhereWithoutEstudianteInput = InscripcionUpdateManyWithWhereWithoutEstudianteInput;
