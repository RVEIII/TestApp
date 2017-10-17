import { Label } from 'ui/label';
import { Color } from 'color';

export class MyLabelExtension {
  public _label: Label;

  public view(): any {
    if (!this._label) {
      this._label = new Label();
      this._label.text = 'Initial label';
      this._label.backgroundColor = new Color('#aadbf7');
    }

    return this._label;
  }

  public setLabel(text: any) {
    this._label.text = text;
  }
}
