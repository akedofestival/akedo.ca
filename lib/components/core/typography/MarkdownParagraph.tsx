/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-children-prop */

/**
 * Copyright (c) 2026 Genshiken Festival Organizing Committee, Contributors and Artists.
 * Copyright (c) 2026 Ontario Anime Society.
 *
 * All rights reserved.
 */

import Markdown from "react-markdown";

import type { MarkdownParagraphProps } from "./types";

const MarkdownParagraph = ({ className, children }: MarkdownParagraphProps) => {
  return (
    <Markdown
      allowedElements={["p", "strong", "em"]}
      children={children}
      components={{
        p(props) {
          const { node, ...rest } = props;
          return <p className={className} {...rest} />;
        },
      }}
    />
  );
};

export default MarkdownParagraph;
