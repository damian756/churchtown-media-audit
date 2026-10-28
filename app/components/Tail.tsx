/**
 * Keeps the last few words of a paragraph together, so a line never ends on one lone word at any width.
 * Binds the last two words, or the last three when those two are very short.
 */
export default function Tail({ children }: { children: string }) {
  const m = /^(\s*)([\s\S]*?)(\s*)$/.exec(children);
  const lead = m ? m[1] : "";
  const core = m ? m[2] : children;
  const trail = m ? m[3] : "";
  const words = core.split(" ");
  if (words.length < 4) return <>{children}</>;

  let n = 2;
  if (words.slice(-2).join(" ").length < 12) n = 3;
  const head = words.slice(0, -n).join(" ");
  const tail = words.slice(-n).join(" ");

  return (
    <>
      {lead}
      {head}{" "}
      <span className="whitespace-nowrap">{tail}</span>
      {trail}
    </>
  );
}
