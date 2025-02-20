import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from '@patternfly/documentation-framework/components';
import { LogViewer, LogViewerSearch, LogViewerContext } from '@patternfly/react-log-viewer';
import { Button, Checkbox, Toolbar, ToolbarContent, ToolbarItem } from '@patternfly/react-core';
import { data } from '../../../content/extensions/react-log-viewer/examples/./realTestData';
const pageData = {
  "id": "Log viewer",
  "section": "extensions",
  "subsection": "",
  "deprecated": false,
  "beta": false,
  "demo": false,
  "newImplementationLink": false,
  "source": "react",
  "tabName": null,
  "slug": "/extensions/log-viewer/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/module/patternfly-docs/content/extensions/react-log-viewer/examples/basic.md",
  "relPath": "packages/module/patternfly-docs/content/extensions/react-log-viewer/examples/basic.md",
  "propComponents": [
    {
      "name": "LogViewer",
      "description": "",
      "props": [
        {
          "name": "data",
          "type": "string | string[]",
          "description": "String or String Array data being sent by the consumer"
        },
        {
          "name": "footer",
          "type": "React.ReactNode",
          "description": "Component rendered in the log viewer console window footer"
        },
        {
          "name": "hasLineNumbers",
          "type": "boolean",
          "description": "Flag to enable or disable line numbers on the log viewer."
        },
        {
          "name": "hasToolbar",
          "type": "boolean",
          "description": "Consumer may turn off the visibility on the toolbar"
        },
        {
          "name": "header",
          "type": "React.ReactNode",
          "description": "Component rendered in the log viewer console window header"
        },
        {
          "name": "height",
          "type": "number | string",
          "description": "Height of the log viewer."
        },
        {
          "name": "initialIndexWidth",
          "type": "number",
          "description": "The width of index when the line numbers is shown, set by char numbers"
        },
        {
          "name": "innerRef",
          "type": "React.RefObject<any>",
          "description": "Forwarded ref"
        },
        {
          "name": "isTextWrapped",
          "type": "boolean",
          "description": "Flag indicating that log viewer is wrapping text or not"
        },
        {
          "name": "itemCount",
          "type": "number",
          "description": "Number of rows to display in the log viewer"
        },
        {
          "name": "loadingContent",
          "type": "React.ReactNode",
          "description": "Content displayed while the log viewer is loading"
        },
        {
          "name": "onScroll",
          "type": "({\n  scrollDirection,\n  scrollOffset,\n  scrollOffsetToBottom,\n  scrollUpdateWasRequested\n}: {\n  scrollDirection: 'forward' | 'backward';\n  scrollOffset: number;\n  scrollOffsetToBottom: number;\n  scrollUpdateWasRequested: boolean;\n}) => void",
          "description": "Callback function when scrolling the window.\nscrollDirection is the direction of scroll, could be 'forward'|'backward'.\nscrollOffset and scrollOffsetToBottom are the offset of the current position to the top or the bottom.\nscrollUpdateWasRequested is false when the scroll event is cause by the user interaction in the browser, else it's true.\n@example onScroll={({scrollDirection, scrollOffset, scrollOffsetToBottom, scrollUpdateWasRequested})=>{}}"
        },
        {
          "name": "overScanCount",
          "type": "number",
          "description": "Rows rendered outside of view. The more rows are rendered, the higher impact on performance"
        },
        {
          "name": "scrollToRow",
          "type": "number",
          "description": "Row index to scroll to"
        },
        {
          "name": "theme",
          "type": "'dark' | 'light'",
          "description": "Flag indicating that log viewer is dark themed"
        },
        {
          "name": "toolbar",
          "type": "React.ReactNode",
          "description": "Toolbar rendered in the log viewer header"
        },
        {
          "name": "width",
          "type": "number | string",
          "description": "Width of the log viewer."
        }
      ]
    },
    {
      "name": "LogViewerSearch",
      "description": "",
      "props": [
        {
          "name": "minSearchChars",
          "type": "No type info",
          "defaultValue": "1"
        },
        {
          "name": "placeholder",
          "type": "No type info",
          "defaultValue": "'Search'"
        }
      ]
    }
  ],
  "examples": [
    "Basic",
    "With search",
    "With complex toolbar",
    "With header component",
    "With footer component",
    "With ANSI color logs"
  ]
};
pageData.liveContext = {
  LogViewer,
  LogViewerSearch,
  LogViewerContext,
  Button,
  Checkbox,
  Toolbar,
  ToolbarContent,
  ToolbarItem,
  data
};
pageData.relativeImports = {
  
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { data } from './realTestData';\nimport { LogViewer } from '@patternfly/react-log-viewer';\nimport { Checkbox } from '@patternfly/react-core';\n\nconst BasicLogViewer = () => {\n  const [isDarkTheme, setIsDarkTheme] = React.useState(false);\n\n  return (\n    <React.Fragment>\n      <Checkbox\n        label=\"Dark theme\"\n        isChecked={isDarkTheme}\n        onChange={(_event, value) => setIsDarkTheme(value)}\n        aria-label=\"toggle dark theme checkbox\"\n        id=\"toggle-dark-theme\"\n        name=\"toggle-dark-theme\"\n      />\n      <LogViewer hasLineNumbers={false} height={300} data={data.data} theme={isDarkTheme ? 'dark' : 'light'} />\n    </React.Fragment>\n  );\n};\n\nexport default BasicLogViewer;","title":"Basic","lang":"js"}}>
      
    </Example>,
  'With search': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { data } from './realTestData';\nimport { LogViewer, LogViewerSearch } from '@patternfly/react-log-viewer';\nimport { Toolbar, ToolbarContent, ToolbarItem } from '@patternfly/react-core';\n\nconst BasicSearchLogViewer = () => (\n    <LogViewer\n      data={data.data}\n      toolbar={\n        <Toolbar>\n          <ToolbarContent>\n            <ToolbarItem>\n              <LogViewerSearch placeholder=\"Search value\" />\n            </ToolbarItem>\n          </ToolbarContent>\n        </Toolbar>\n      }\n    />\n  );\n\nexport default BasicSearchLogViewer;","title":"With search","lang":"js"}}>
      
    </Example>,
  'With complex toolbar': props => 
    <Example {...pageData} {...props} {...{"code":"/* eslint-disable no-console */\nimport React from 'react';\nimport { data } from './realTestData';\nimport { LogViewer, LogViewerSearch } from '@patternfly/react-log-viewer';\nimport { Toolbar, ToolbarContent, ToolbarItem, Button, Checkbox } from '@patternfly/react-core';\n\nconst CustomControlLogViewer = () => {\n  const [isTextWrapped, setIsTextWrapped] = React.useState(false);\n  const onActionClick = () => {\n    console.log('clicked test action button');\n  };\n\n  const onPrintClick = () => {\n    console.log('clicked console print button');\n  };\n\n  return (\n    <LogViewer\n      data={data.data}\n      isTextWrapped={isTextWrapped}\n      toolbar={\n        <Toolbar>\n          <ToolbarContent>\n            <ToolbarItem>\n              <Button onClick={onActionClick} variant=\"control\">\n                Test Action\n              </Button>\n            </ToolbarItem>\n            <ToolbarItem>\n              <LogViewerSearch placeholder=\"Search\" />\n            </ToolbarItem>\n            <ToolbarItem>\n              <Button onClick={onPrintClick} variant=\"control\">\n                Print to Console\n              </Button>\n            </ToolbarItem>\n            <ToolbarItem alignSelf='center'>\n              <Checkbox label=\"Wrap text\" aria-label=\"wrap text checkbox\" isChecked={isTextWrapped} id=\"wrap-text-checkbox\" onChange={(_event, value) => setIsTextWrapped(value)} />\n            </ToolbarItem>\n          </ToolbarContent>\n        </Toolbar>\n      }\n    />\n  );\n};\n\nexport default CustomControlLogViewer;","title":"With complex toolbar","lang":"js"}}>
      
    </Example>,
  'With header component': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { data } from './realTestData';\nimport { LogViewer } from '@patternfly/react-log-viewer';\nimport { Banner } from '@patternfly/react-core';\n\nconst HeaderComponentLogViewer = () => (\n    <LogViewer\n      hasLineNumbers={false}\n      height={300}\n      data={data.data}\n      theme=\"dark\"\n      header={<Banner>5019 lines</Banner>}\n    />\n  );\n\nexport default HeaderComponentLogViewer;","title":"With header component","lang":"js"}}>
      
    </Example>,
  'With footer component': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { data } from './realTestData';\nimport { LogViewer } from '@patternfly/react-log-viewer';\nimport { Button } from '@patternfly/react-core';\n\nconst FooterComponentLogViewer = () => {\n  const logViewerRef = React.useRef();\n  const FooterButton = () => {\n    const handleClick = () => {\n      logViewerRef.current.scrollToBottom();\n    };\n    return <Button onClick={handleClick}>Jump to the bottom</Button>;\n  };\n\n  return (\n    <LogViewer\n      ref={logViewerRef}\n      hasLineNumbers={false}\n      height={300}\n      data={data.data}\n      theme=\"dark\"\n      footer={<FooterButton />}\n    />\n  );\n};\n\nexport default FooterComponentLogViewer;","title":"With footer component","lang":"js"}}>
      
    </Example>,
  'With ANSI color logs': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { data } from './realTestData.js';\nimport { LogViewer } from '@patternfly/react-log-viewer';\n\nconst ANSIColorLogViewer = () => (\n    <LogViewer\n      hasLineNumbers={false}\n      height={300}\n      data={data.data4}\n      theme=\"dark\"\n    />\n  );\n\n  export default ANSIColorLogViewer;","title":"With ANSI color logs","lang":"js"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["With search"])}
    {React.createElement(pageData.examples["With complex toolbar"])}
    {React.createElement(pageData.examples["With header component"])}
    {React.createElement(pageData.examples["With footer component"])}
    {React.createElement(pageData.examples["With ANSI color logs"])}
  </React.Fragment>
);
Component.displayName = 'ExtensionsLogViewerReactDocs';
Component.pageData = pageData;

export default Component;
