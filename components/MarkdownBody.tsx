type Block =
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "p"; text: string };

function parseBlocks(body: string): Block[] {
  const lines = body.trim().split("\n");
  const blocks: Block[] = [];
  let paragraph: string[] = [];
  let list: string[] = [];

  const flushParagraph = () => {
    if (paragraph.length) {
      blocks.push({ type: "p", text: paragraph.join(" ") });
      paragraph = [];
    }
  };
  const flushList = () => {
    if (list.length) {
      blocks.push({ type: "ul", items: list });
      list = [];
    }
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) {
      flushParagraph();
      flushList();
      continue;
    }
    if (line.startsWith("## ")) {
      flushParagraph();
      flushList();
      blocks.push({ type: "h2", text: line.slice(3).trim() });
    } else if (line.startsWith("- ")) {
      flushParagraph();
      list.push(line.slice(2).trim());
    } else {
      flushList();
      paragraph.push(line);
    }
  }
  flushParagraph();
  flushList();
  return blocks;
}

function inline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="text-ink">
        {part.slice(2, -2)}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export default function MarkdownBody({ body }: { body: string }) {
  const blocks = parseBlocks(body);
  return (
    <div className="space-y-5 leading-8">
      {blocks.map((block, i) => {
        if (block.type === "h2") {
          return (
            <h2 key={i} className="!mt-10 text-2xl sm:text-3xl font-bold">
              {block.text}
            </h2>
          );
        }
        if (block.type === "ul") {
          return (
            <ul key={i} className="space-y-2.5 pl-1">
              {block.items.map((item, j) => (
                <li key={j} className="flex items-start gap-3">
                  <svg
                    viewBox="0 0 24 24"
                    className="mt-1.5 h-4 w-4 shrink-0 text-brand"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{inline(item)}</span>
                </li>
              ))}
            </ul>
          );
        }
        return <p key={i}>{inline(block.text)}</p>;
      })}
    </div>
  );
}
