//
//  BlockableWebView.h
//  BlockableWebView
//
//  Created by Rafael Seemann on 17/10/16.
//  Copyright © 2016 Rafael Seemann. All rights reserved.
//

#import "RCTView.h"

@class BlockableWebView;

/**
 * Special scheme used to pass messages to the injectedJavaScript
 * code without triggering a page load. Usage:
 *
 *   window.location.href = RCTJSNavigationScheme + '://hello'
 */
extern NSString *const RCTJSNavigationScheme;

@protocol BlockableWebViewDelegate <NSObject>

- (BOOL)webView:(BlockableWebView *)webView
shouldStartLoadForRequest:(NSMutableDictionary<NSString *, id> *)request
   withCallback:(RCTDirectEventBlock)callback;

@end

@interface BlockableWebView : RCTView

@property (nonatomic, weak) id<BlockableWebViewDelegate> delegate;

@property (nonatomic, copy) NSDictionary *source;
@property (nonatomic, assign) UIEdgeInsets contentInset;
@property (nonatomic, assign) BOOL automaticallyAdjustContentInsets;
@property (nonatomic, copy) NSString *injectedJavaScript;
@property (nonatomic, assign) BOOL scalesPageToFit;

- (void)goForward;
- (void)goBack;
- (void)reload;
- (void)stopLoading;


@end
