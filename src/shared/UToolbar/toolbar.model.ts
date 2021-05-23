import ToolbarControl from "./UToolbarControls/toolbar-controls.model";

export default interface ToolbarConfig {
  controls: {
    left?: ToolbarControl[];
    right?: ToolbarControl[];
  };
}
