import { useEffect } from "react";

export default function TNGFixer() {
  useEffect(() => {
    const applyTNGStyling = () => {
      const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        null,
        false
      );

      const textNodes = [];
      let node;
      while ((node = walker.nextNode())) {
        const text = node.textContent.trim();
        if (text === "The Nice Girls") {   // ✅ exact match only
          textNodes.push(node);
        }
      }

      textNodes.forEach((textNode) => {
        const parent = textNode.parentElement;
        if (!parent) return;
        if (parent.classList.contains("tng-processed")) return;

        // Replace with styled span
        const span = document.createElement("span");
        span.className = "the-nice-girls";
        span.textContent = "THE NICE GiRLS";

        parent.replaceChild(span, textNode);
        parent.classList.add("tng-processed");
      });
    };

    applyTNGStyling();
    const timeoutId = setTimeout(applyTNGStyling, 100);

    const observer = new MutationObserver(() => {
      applyTNGStyling();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  return null;
}
