import React, { Component } from 'react';
import { requireNativeComponent,
    UIManager,
    findNodeHandle,
    ViewPropTypes,
    processColor} from 'react-native';
import { string, arrayOf, func, number, boolean } from 'prop-types';

class Storyly extends Component {
    refresh = () => {
        UIManager.dispatchViewManagerCommand(
            findNodeHandle(this._storylyView),
            UIManager.getViewManagerConfig('STStoryly').Commands.refresh,
            [],
        );
    };

    open = () => {
        UIManager.dispatchViewManagerCommand(
            findNodeHandle(this._storylyView),
            UIManager.getViewManagerConfig('STStoryly').Commands.open,
            [],
        );
    };


    close = () => {
        UIManager.dispatchViewManagerCommand(
            findNodeHandle(this._storylyView),
            UIManager.getViewManagerConfig('STStoryly').Commands.close,
            [],
        );
    };

    openStory = (payload) => {
        UIManager.dispatchViewManagerCommand(
            findNodeHandle(this._storylyView),
            UIManager.getViewManagerConfig('STStoryly').Commands.openStory,
            [payload],
        );
    };

    openStory = (storyGroupId, storyId) => {
        UIManager.dispatchViewManagerCommand(
            findNodeHandle(this._storylyView),
            UIManager.getViewManagerConfig('STStoryly').Commands.openStory,
            [storyGroupId, storyId],
        );
    };

    setExternalData = (externalData) => {
        UIManager.dispatchViewManagerCommand(
            findNodeHandle(this._storylyView),
            UIManager.getViewManagerConfig('STStoryly').Commands.setExternalData,
            [externalData],
        );
    }

    render() {
        const {
            storylyId,
            storylySegments,
            customParameter,
            storyGroupIconBorderColorSeen,
            storyGroupIconBorderColorNotSeen,
            storyGroupIconForegroundColors,
            storyItemIconBorderColor,
            storyItemProgressBarColor,
            storyGroupIconHeight,
            storyGroupIconWidth,
            storyGroupIconCornerRadius,
            storyGroupPaddingBetweenItems,
            storyGroupTextIsVisible,
            storyHeaderTextIsVisible,
            storyHeaderIconIsVisible,
            onLoad,
            onFail,
            onPress,
            onStoryOpen,
            onStoryClose,
            onUserInteracted,
            ...otherProps
        } = this.props;
        return (
            <STStoryly
                {...otherProps}
                storylyInit={{'storylyId': storylyId, 'storylySegments': storylySegments, 'customParameter': customParameter}}
                storyGroupIconStyling={{'height': storyGroupIconHeight, 'width': storyGroupIconWidth, 'cornerRadius': storyGroupIconCornerRadius, 'paddingBetweenItems': storyGroupPaddingBetweenItems}}
                storyGroupTextStyling={{'isVisible': storyGroupTextIsVisible}}
                storyHeaderStyling={{'isTextVisible': storyHeaderTextIsVisible, 'isIconVisible': storyHeaderIconIsVisible}}
                onStorylyLoaded={onLoad}
                onStorylyLoadFailed={onFail}
                onStorylyActionClicked={onPress}
                onStorylyStoryPresented={onStoryOpen}
                onStorylyStoryDismissed={onStoryClose}
                onStorylyUserInteracted={onUserInteracted}
                storyGroupIconBorderColorSeen={storyGroupIconBorderColorSeen ? storyGroupIconBorderColorSeen.map(processColor) : null}
                storyGroupIconBorderColorNotSeen={storyGroupIconBorderColorNotSeen ? storyGroupIconBorderColorNotSeen.map(processColor) : null}
                storyGroupIconForegroundColors={storyGroupIconForegroundColors ? storyGroupIconForegroundColors.map(processColor) : null}
                storyItemIconBorderColor={storyItemIconBorderColor ? storyItemIconBorderColor.map(processColor) : null}
                storyItemProgressBarColor={storyItemProgressBarColor ? storyItemProgressBarColor.map(processColor) : null}
                ref={el => (this._storylyView = el)}/>
        )
    }
}

Storyly.propTypes = {
    ...ViewPropTypes,
    storylyId: string.isRequired,
    storylySegments: arrayOf(string),
    customParameter: string,

    storyGroupIconBorderColorSeen: arrayOf(string),
    storyGroupIconBorderColorNotSeen: arrayOf(string),
    storyGroupIconBackgroundColor: string,
    storyGroupTextColor: string,
    storyGroupPinIconColor: string,
    storyGroupIconForegroundColors: arrayOf(string),
    storyGroupSize: string,
    storyItemIconBorderColor: arrayOf(string),
    storyItemTextColor: string,
    storyItemProgressBarColor: arrayOf(string),
    storyGroupIconHeight: number,
    storyGroupIconWidth: number,
    storyGroupIconCornerRadius: number,
    storyGroupPaddingBetweenItems: number,
    storyGroupTextIsVisible: boolean,
    storyHeaderTextIsVisible: boolean,
    storyHeaderIconIsVisible: boolean,

    onLoad: func,
    onFail: func,
    onPress: func,
    onStoryOpen: func,
    onStoryClose: func,
    onUserInteracted: func
}

const STStoryly = requireNativeComponent('STStoryly', null);

export default Storyly;
