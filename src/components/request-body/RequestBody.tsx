import { Highlight, themes } from "prism-react-renderer"

interface RequestBodyProps {
  body: string;
}

function RequestBody({ body }: RequestBodyProps) {

  return <Highlight
    theme={themes.shadesOfPurple}
    code={body}
    language="json" >
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <pre style={{ ...style, backgroundColor: "transparent"}}>
        {tokens.map((line, i) => (
          <div key={i} {...getLineProps({ line })}>
            {line.map((token, key) => (
              <span key={key} {...getTokenProps({ token })} />
            ))}
          </div>
        ))}
      </pre>
    )}
  </Highlight>;
}

export default RequestBody;