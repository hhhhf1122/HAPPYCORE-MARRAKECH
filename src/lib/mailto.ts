/**
 * Ouvre le client mail par défaut via mailto:.
 * Si aucun client mail n'est configuré (le navigateur reste au premier plan
 * après un court délai), on ouvre Gmail Web en mode "composer" à la place.
 */
export function openMailto(email: string, subject?: string, body?: string) {
  const mailtoParams = new URLSearchParams();
  if (subject) mailtoParams.set("subject", subject);
  if (body) mailtoParams.set("body", body);
  const mailtoQuery = mailtoParams.toString();
  const mailtoUrl = `mailto:${email}${mailtoQuery ? "?" + mailtoQuery : ""}`;

  let appOpened = false;
  const onBlur = () => {
    appOpened = true;
  };
  window.addEventListener("blur", onBlur);

  window.location.href = mailtoUrl;

  setTimeout(() => {
    window.removeEventListener("blur", onBlur);
    if (!appOpened) {
      const gmailParams = new URLSearchParams({
        view: "cm",
        fs: "1",
        to: email,
      });
      if (subject) gmailParams.set("su", subject);
      if (body) gmailParams.set("body", body);
      window.open(
        `https://mail.google.com/mail/?${gmailParams.toString()}`,
        "_blank",
      );
    }
  }, 600);
}
