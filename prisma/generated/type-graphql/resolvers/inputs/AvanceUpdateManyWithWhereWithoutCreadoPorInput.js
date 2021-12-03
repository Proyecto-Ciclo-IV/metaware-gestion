"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvanceUpdateManyWithWhereWithoutCreadoPorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AvanceScalarWhereInput_1 = require("../inputs/AvanceScalarWhereInput");
const AvanceUpdateManyMutationInput_1 = require("../inputs/AvanceUpdateManyMutationInput");
let AvanceUpdateManyWithWhereWithoutCreadoPorInput = class AvanceUpdateManyWithWhereWithoutCreadoPorInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AvanceScalarWhereInput_1.AvanceScalarWhereInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AvanceScalarWhereInput_1.AvanceScalarWhereInput)
], AvanceUpdateManyWithWhereWithoutCreadoPorInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AvanceUpdateManyMutationInput_1.AvanceUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AvanceUpdateManyMutationInput_1.AvanceUpdateManyMutationInput)
], AvanceUpdateManyWithWhereWithoutCreadoPorInput.prototype, "data", void 0);
AvanceUpdateManyWithWhereWithoutCreadoPorInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AvanceUpdateManyWithWhereWithoutCreadoPorInput", {
        isAbstract: true
    })
], AvanceUpdateManyWithWhereWithoutCreadoPorInput);
exports.AvanceUpdateManyWithWhereWithoutCreadoPorInput = AvanceUpdateManyWithWhereWithoutCreadoPorInput;
