/**
 * PageRenderer is in charge of loading the Page
 * definition and rendering the page component
 *
 * We need this because the react-native-navigator
 * must serialize its properties and as such doesn't
 * deal well with passing objects.
 *
 * In this class we can also resolve the context of the
 * page when we are going to render it.
 */
import { NavigationEntry } from 'ui/frame';
import { ScrollView } from 'ui/scroll-view';
import { DockLayout } from 'ui/layouts/dock-layout';
import { Dock } from 'ui/enums';
import { topmost } from 'ui/frame';
import { BackstackEntry } from 'ui/frame';
import { TestPage } from './TestPage';
import { ExtensionTable } from 'extension-table';
import { StackLayout } from 'ui/layouts/stack-layout';

import app = require('application');

export class PageRenderer {
  public static pushNavigation(): Promise<NavigationEntry> {
    return new Promise((resolve, reject) => {
      if (!topmost()) {
        throw new Error(`Invalid call to pushNavigation, topmost frame is required.`);
      }

      let navigationEntry: NavigationEntry = this.createNavigationEntry();
      topmost().navigate(navigationEntry);
      resolve(navigationEntry);
    });
  }


  private static createNavigationEntry(): NavigationEntry {
    try {
      let appModelerPageFactory = new PageRenderer();
      return {
        // pass the context in the future context: context.object(),
        // clearHistory  = true to clear nav stack.
        // Currently true only on launch of demo mode from welcome screen, so user cant back up to welcome screen.
        create: appModelerPageFactory.render.bind(appModelerPageFactory)
      };
    } catch (error) {
      console.log(error);
    }
  }

  constructor() {
  }

  private render() {
    const page: TestPage = new TestPage();
    const scrollView = new ScrollView();

    let oLayout = new StackLayout();
    oLayout.orientation = 'vertical';
    oLayout.id = 'testLayout';
    let bridge = new ExtensionTable();
    let table = bridge.create();

    let platform;
    if (app.ios) {
      platform = 'ios';
    }

    page[platform].addChildViewController(table);
    oLayout[platform].addSubview(table.view);
    table.view.frame = oLayout[platform].bounds;

    scrollView.content = oLayout;
    page.content = scrollView;
    return page;
  }
};
