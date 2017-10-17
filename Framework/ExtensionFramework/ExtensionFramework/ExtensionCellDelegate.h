//
//  ExtensionCellDelegate.h
//  ExtensionFramework
//
//  Created by Erickson, Ronnie on 10/16/17.
//  Copyright © 2017 Erickson, Ronnie. All rights reserved.
//

#ifndef ExtensionCellDelegate_h
#define ExtensionCellDelegate_h

#import <UIKit/UIKit.h>

@interface ExtensionCellDelegate : NSObject

- (UIView *)getView: (NSNumber*) row;

@end

#endif /* ExtensionCellDelegate_h */
