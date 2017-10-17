import { MyLabelExtension } from '../../MyLabelExtension';
import { MyWorkingExtension } from '../../MyWorkingExtension';

declare var TableBridge: any;

class TableCallback extends NSObject {
  public static ObjCExposedMethods = {
    getView: { params: [NSNumber], returns: UIView }
  };


  public getView(row: any) {
    if (row === 0) {
      return new MyLabelExtension().view().ios;
    } else {
      return new MyWorkingExtension().view().ios;
    }
  }
}

export class ExtensionTable {
  private extensionTableBridge: any;

  public create(): any {
    this.extensionTableBridge = TableBridge.new();
    return this.extensionTableBridge.create(new TableCallback());
  }
};
