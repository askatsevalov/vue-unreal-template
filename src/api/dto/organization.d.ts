import Base from "./base";

export default interface OrganizationDto extends Base {
  name: string;
  address: string;
  typeId: string | number;
  type?: string;
}
