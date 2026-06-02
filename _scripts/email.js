/*
  Assembles obfuscated mailto links at runtime so the plaintext address
  never appears in the served HTML (anti-scraper). Markup is produced by
  _includes/email.html and the footer/contact page; each link carries the
  user and domain reversed across data-attributes, with no literal "@",
  so a regex scraper of the raw HTML finds no address.

  Per-link text behavior:
    - <a class="js-email"> with a child .js-email-addr  -> address goes in that span
    - <a class="js-email" data-text="...">               -> visible text left untouched
    - <a class="js-email"> with other content (icon/svg) -> visible text left untouched
    - <a class="js-email"> otherwise empty               -> address becomes the link text
*/
{
  const reverse = (s) => (s || "").split("").reverse().join("");

  const wireEmails = () => {
    document.querySelectorAll("a.js-email").forEach((a) => {
      const user = reverse(a.dataset.u || "");
      const domain = reverse(a.dataset.d || "");
      if (!user || !domain) return;
      const addr = user + "@" + domain;
      a.href = "mailto:" + addr;

      const slot = a.querySelector(".js-email-addr");
      if (slot) {
        slot.textContent = addr;
      } else if (!a.dataset.text && !a.children.length && !a.textContent.trim()) {
        a.textContent = addr;
      }
    });
  };

  if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", wireEmails);
  else wireEmails();
}
