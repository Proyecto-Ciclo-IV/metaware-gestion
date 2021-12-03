"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InscripcionCreateNestedManyWithoutEstudianteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const InscripcionCreateManyEstudianteInputEnvelope_1 = require("../inputs/InscripcionCreateManyEstudianteInputEnvelope");
const InscripcionCreateOrConnectWithoutEstudianteInput_1 = require("../inputs/InscripcionCreateOrConnectWithoutEstudianteInput");
const InscripcionCreateWithoutEstudianteInput_1 = require("../inputs/InscripcionCreateWithoutEstudianteInput");
const InscripcionWhereUniqueInput_1 = require("../inputs/InscripcionWhereUniqueInput");
let InscripcionCreateNestedManyWithoutEstudianteInput = class InscripcionCreateNestedManyWithoutEstudianteInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [InscripcionCreateWithoutEstudianteInput_1.InscripcionCreateWithoutEstudianteInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], InscripcionCreateNestedManyWithoutEstudianteInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [InscripcionCreateOrConnectWithoutEstudianteInput_1.InscripcionCreateOrConnectWithoutEstudianteInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], InscripcionCreateNestedManyWithoutEstudianteInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InscripcionCreateManyEstudianteInputEnvelope_1.InscripcionCreateManyEstudianteInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", InscripcionCreateManyEstudianteInputEnvelope_1.InscripcionCreateManyEstudianteInputEnvelope)
], InscripcionCreateNestedManyWithoutEstudianteInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [InscripcionWhereUniqueInput_1.InscripcionWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], InscripcionCreateNestedManyWithoutEstudianteInput.prototype, "connect", void 0);
InscripcionCreateNestedManyWithoutEstudianteInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("InscripcionCreateNestedManyWithoutEstudianteInput", {
        isAbstract: true
    })
], InscripcionCreateNestedManyWithoutEstudianteInput);
exports.InscripcionCreateNestedManyWithoutEstudianteInput = InscripcionCreateNestedManyWithoutEstudianteInput;
