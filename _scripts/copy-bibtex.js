// copy a publication's BibTeX entry to the clipboard
window.copyBibtex = async (button) => {
  const code = button.closest(".citation-bib-box")?.querySelector("code");
  if (!code) return;
  const text = code.innerText;
  try {
    await navigator.clipboard.writeText(text);
  } catch (e) {
    // fallback for older / insecure contexts
    const range = document.createRange();
    range.selectNodeContents(code);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    try {
      document.execCommand("copy");
    } catch (err) {}
    sel.removeAllRanges();
  }
  const prev = button.getAttribute("data-tooltip");
  button.setAttribute("data-tooltip", "Copied!");
  button.classList.add("copied");
  window.setTimeout(() => {
    button.setAttribute("data-tooltip", prev || "Copy");
    button.classList.remove("copied");
  }, 1500);
};
