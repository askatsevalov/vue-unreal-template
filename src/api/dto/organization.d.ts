import Base from "./base";

export default interface OrganizationDto extends Base {
  name: string;
  address: string;
  type: string;
}
