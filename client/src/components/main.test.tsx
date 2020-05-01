import React from 'react';
import { render } from '@testing-library/react';
import Main from './main';

// https://testing-library.com/docs/dom-testing-library/cheatsheet

describe('User check in input', () => {
    const { getByText } = render(<Main />);
    test('Mood', () => {
        const moodElement = getByText(/Mood/i);
        // expect div displaying "mood" to be showing 1
        // move the slider
        // expect div to be showing new value
        // check that the component is no longer rendered

    });
    test('Feelings', () => {
        const feelingElement = getByText(/Feeling/i);
        // click some feelings
        // check that they are "checked"
        // unclick some
        // check that they're "unchecked"
        // click ok
        // check that the component is no longer rendered
    });
    test('Comment', () => {
        // render comment component
        // input a comment
        // check the comment is in there
        // click submit
        // check we're now on the next page
    });
});

