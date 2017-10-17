//
//  TableBridge.m
//  ExtensionFramework
//
//  Created by Erickson, Ronnie on 10/16/17.
//  Copyright © 2017 Erickson, Ronnie. All rights reserved.
//

#import "TableBridge.h"
#import <ExtensionFramework/ExtensionFramework-Swift.h>

@implementation TableBridge

- (UIViewController*) create:(ExtensionCellDelegate *) callback {
    ExtensionTableViewController *controller = [[ExtensionTableViewController alloc] initWithStyle:UITableViewStyleGrouped];
    
    ExtensionCellDelegate *myCallback= callback;
    if (!myCallback) {
        // default delegate used just for logging the data (DEBUG)
        myCallback = [[ExtensionCellDelegate alloc] init];
    }
    
    [controller setCallback: myCallback];
    
    return controller;
}

@end

