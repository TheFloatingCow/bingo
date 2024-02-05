import React from 'react';

import classes from './FeedItem.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

const feedItem = ( props ) => {
    const subItemsElement = [];
    for (let key in props.feedInfo) {
        let endItem = '';
        switch (key) {
            case ('duration'): endItem = 'min'
            break;
            case ('hr'): endItem = 'bpm'
            break;
            case ('distance'): endItem = 'km'
            break;
            default: endItem = ''
        }
        subItemsElement.push({
            id: key,
            item: props.feedInfo[key],
            metric: endItem
        });
    }
    let subFeedItems = (
        <Aux>
            {subItemsElement.map(subFeedElement => (
                <div key={subFeedElement.id} className={classes.SubItem}>
                    {subFeedElement.item.placeholder}: <b>{subFeedElement.item.value}</b> {subFeedElement.metric}
                </div>
            ))}
        </Aux>
    )
    let comment = null
    if (props.feedItem.comment) {
        comment = (
            <div className={classes.Comment}>
                {props.feedItem.comment}
            </div>
        )
    }
    return (
        <div className={classes.FeedItem}>
            {subFeedItems}
            {comment}
        </div>
    )
};

export default feedItem;