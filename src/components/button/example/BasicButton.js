import React from 'react';
import { Button } from 'antd';

/* There are primary button, default button, dashed button, text button and link button in antd. */

const BasicButton = () => {
    return (
        <>
            <Button type="primary">Primary Button</Button>
            <Button>Default Button</Button>
            <Button type="dashed">Dashed Button</Button>
            <br />
            <Button type="text">Text Button</Button>
            <Button type="link">Link Button</Button>
        </>
    );
};

export default BasicButton;