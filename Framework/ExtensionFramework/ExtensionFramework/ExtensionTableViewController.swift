//
//  ExtensionTableViewController.swift
//  ExtensionFramework
//
//  Created by Erickson, Ronnie on 10/16/17.
//  Copyright © 2017 Erickson, Ronnie. All rights reserved.
//

import Foundation
import UIKit

@objc(ExtensionTableViewController)
public class ExtensionTableViewController: UITableViewController, FullScreenTableViewControllerTraits {
    let extensionReuseID: String = "ExtensionCell"

    let defaultSectionHeaderPadding: CGFloat = 15.0
    let defaultSectionFooterPadding: CGFloat = 15.0

    let expectedSectionHeaderHeight: CGFloat = 38.0
    let expectedSectionFooterHeight: CGFloat = 44.5

    let defaultSideMargin: CGFloat = 48.0
    var callback: ExtensionCellDelegate?
    
    @objc
    public func setCallback(_ callback: ExtensionCellDelegate) {
        self.callback = callback
    }
    
    public override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        self.onFullScreenTableViewControllerAppeared()
    }
    
    override public func viewDidLoad() {
        super.viewDidLoad()
        self.onFullScreenTableViewControllerLoaded()
        
        self.tableView.estimatedRowHeight = 98
        self.tableView.rowHeight = UITableViewAutomaticDimension
        // Assume the most common case will have a label and padding
        self.tableView.estimatedSectionHeaderHeight = defaultSectionHeaderPadding + expectedSectionHeaderHeight
        self.tableView.sectionHeaderHeight = UITableViewAutomaticDimension
        
        // Assume the most common case will have a label and padding
        self.tableView.estimatedSectionFooterHeight = defaultSectionFooterPadding + expectedSectionFooterHeight
        self.tableView.sectionFooterHeight = UITableViewAutomaticDimension

        self.tableView.cellLayoutMarginsFollowReadableWidth = false
        self.tableView.layoutMargins = UIEdgeInsets(top: 0.0, left: defaultSideMargin, bottom: 0.0, right: defaultSideMargin)
        self.tableView.register(UITableViewCell.self, forCellReuseIdentifier: self.extensionReuseID)
    }
    
    // MARK: - UITableViewDataSource methods
    override public func numberOfSections(in tableView: UITableView) -> Int {
        return 1
    }
    
    override public func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return 2
    }
    
    public override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = (tableView.dequeueReusableCell(withIdentifier: self.extensionReuseID))
        cell?.contentView.autoresizesSubviews = true
        if let callback = self.callback {
            if let view = callback.perform(NSSelectorFromString("getView"), with: indexPath.row as NSNumber!)?.takeUnretainedValue() as? UIView {
                if #available(iOS 11.0, *) {
                    cell?.contentView.insetsLayoutMarginsFromSafeArea = false
                    view.insetsLayoutMarginsFromSafeArea = false
                }
                
                view.autoresizingMask = [.flexibleWidth, .flexibleHeight]
                view.frame = (cell?.contentView.frame)!
                cell?.contentView.addSubview(view)
            }
        }

        return cell!
    }
    
    public override func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
        return super.tableView(tableView, heightForRowAt: indexPath)
    }
    
    override public func viewWillDisappear(_ animated: Bool) {
        super.viewWillDisappear(animated)
        self.navigationController?.isNavigationBarHidden = false
    }
 }
