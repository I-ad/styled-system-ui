import * as React from "react";
import {
  CheckboxChecked,
  CheckboxIndeterminate,
  CheckboxUnchecked,
  RadioChecked,
  RadioUnchecked,
  SearchIcon,
  UnViewedIcon,
  UserIcon,
  ViewIcon,
  SelectArrowIcon,
  MiniCloseIcon,
  LoadingIcon,
} from "./icons";

interface IconType {
  width?: number | string;
  color?: string;
}

class Icons {
  private allIcons: { [key: string]: React.FC<IconType> } = {};
  private _names: string[] = [];

  public get all(): { [key: string]: React.FC<IconType> } {
    const I: { [key: string]: React.FC<IconType> } = {};
    this._names.map((i) => (I[i] = this.allIcons[i]));
    return I;
  }

  public getByName(name: string): React.FC<IconType> | null {
    if (this._names.indexOf(name) === -1) {
      return null;
    }
    return this.allIcons[name];
  }

  public addIcon(name: string, Icon: any) {
    if (this._names.indexOf(name) === -1) {
      this._names.push(name);
    }
    this.allIcons[name] = Icon;
  }

  get names(): string[] {
    return this._names;
  }
}

const IconsBucket = new Icons();
IconsBucket.addIcon("ViewIcon", ViewIcon);
IconsBucket.addIcon("UnViewedIcon", UnViewedIcon);
IconsBucket.addIcon("UserIcon", UserIcon);
IconsBucket.addIcon("SearchIcon", SearchIcon);
IconsBucket.addIcon("CheckboxChecked", CheckboxChecked);
IconsBucket.addIcon("CheckboxUnchecked", CheckboxUnchecked);
IconsBucket.addIcon("RadioChecked", RadioChecked);
IconsBucket.addIcon("RadioUnchecked", RadioUnchecked);
IconsBucket.addIcon("CheckboxIndeterminate", CheckboxIndeterminate);
IconsBucket.addIcon("SelectArrowIcon", SelectArrowIcon);
IconsBucket.addIcon("MiniCloseIcon", MiniCloseIcon);
IconsBucket.addIcon("LoadingIcon", LoadingIcon);
export default IconsBucket;
