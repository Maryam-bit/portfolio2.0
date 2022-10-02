import React from 'react'

import { CardTagsBottom } from './CardTagsBottom'
export default {
    title: 'Components/Cards',
    component: CardTagsBottom,
   
}
const Template = (args) => <CardTagsBottom {...args} />;
export const card_tag_bottom = Template.bind({});

card_tag_bottom.args = {
    data: {
        name: "Card with Tags",
        image: "iot",
        tag: [
            "tag1",
            "tag2",
            "tag3",
            "tag4",
        ],
    },
};