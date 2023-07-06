
const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement(
    "div",
    {id:"parent"},
    [   React.createElement(
            "div",
            {id:"child1"},
            [   React.createElement(
                    "h1",
                    {id:"heading1", class:"heading"},
                    "Hello World"),
                React.createElement(
                    "h1",
                    {},
                    "Namasthey React")  ]),
        React.createElement(
            "div",
            {id:"child2"},
            [   React.createElement(
                    "h1",
                    {id:"heading2",class:"heading"},
                    "Hello World"),
                React.createElement(
                    "h1",
                    {},
                    "Namasthey React")  ])
    ]
);

root.render(parent);
