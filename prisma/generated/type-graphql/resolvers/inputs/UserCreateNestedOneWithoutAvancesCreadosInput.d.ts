import { UserCreateOrConnectWithoutAvancesCreadosInput } from "../inputs/UserCreateOrConnectWithoutAvancesCreadosInput";
import { UserCreateWithoutAvancesCreadosInput } from "../inputs/UserCreateWithoutAvancesCreadosInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutAvancesCreadosInput {
    create?: UserCreateWithoutAvancesCreadosInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutAvancesCreadosInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
