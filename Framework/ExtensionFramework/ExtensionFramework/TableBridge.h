//
//  TableBridge.h
//  ExtensionFramework
//
//  Created by Erickson, Ronnie on 10/16/17.
//  Copyright © 2017 Erickson, Ronnie. All rights reserved.
//

#ifndef TableBridge_h
#define TableBridge_h

#import <Foundation/Foundation.h>
#import "ExtensionCellDelegate.h"
#import <UIKit/UIKit.h>

@interface TableBridge : NSObject

-(UIViewController*) create:(ExtensionCellDelegate *) callback;

@end

#endif /* TableBridge_h */
