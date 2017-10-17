import { Switch } from "ui/switch";
import { Color } from 'color';

export class MyWorkingExtension {
  public _switch: Switch;

  public view(): any {
    if (!this._switch) {
      this._switch = new Switch();
      this._switch.checked = true;
    }

    return this._switch;
  }
}
