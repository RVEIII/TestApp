import {Observable} from 'data/observable';
import {PageRenderer} from './PageRenderer';
import { NavigationEntry } from 'ui/frame';
import { ScrollView } from 'ui/scroll-view';
import { DockLayout } from 'ui/layouts/dock-layout';
import { Dock } from 'ui/enums';
import { topmost } from 'ui/frame';
import { BackstackEntry } from 'ui/frame';

export class HelloWorldModel extends Observable {

    private _counter: number;
    private _message: string;

    constructor() {
        super();

        // Initialize default values.
        this._counter = 42;
        this.updateMessage();
    }

    get message(): string {
        return this._message;
    }
    
    set message(value: string) {
        if (this._message !== value) {
            this._message = value;
            this.notifyPropertyChange('message', value)
        }
    }

    public onTap() {
        this._counter--;
        this.updateMessage();
        PageRenderer.pushNavigation();
    }

    private updateMessage() {
        if (this._counter <= 0) {
            this.message = 'Hoorraaay! You unlocked the NativeScript clicker achievement!';
        } else {
            this.message = `${this._counter} taps left`;
        }
    }
}