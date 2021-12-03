"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyInscripcionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const InscripcionWhereInput_1 = require("../../../inputs/InscripcionWhereInput");
let DeleteManyInscripcionArgs = class DeleteManyInscripcionArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InscripcionWhereInput_1.InscripcionWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", InscripcionWhereInput_1.InscripcionWhereInput)
], DeleteManyInscripcionArgs.prototype, "where", void 0);
DeleteManyInscripcionArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], DeleteManyInscripcionArgs);
exports.DeleteManyInscripcionArgs = DeleteManyInscripcionArgs;
