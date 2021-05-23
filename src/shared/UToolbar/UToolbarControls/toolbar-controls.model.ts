export default interface ToolbarControl {
  type: string;
  props: ControlProperties;
}

type ControlProperties = ControlButtonProperties;

// interface ControlBaseProperties {}

interface ControlButtonProperties {
  type: string;
  text?: string;
  icon?: string;
  variant?: string;
  callback?: () => void;
}
