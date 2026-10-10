const form = document.querySelector('[data-order-form]');

if (form instanceof HTMLFormElement) {
  const status = form.querySelector('[data-order-status]');
  const button = form.querySelector('[data-order-button]');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const question = String(data.get('question') || '').trim();
    const product = form.dataset.product || 'microgreens de girasol';
    const greeting = name ? `Hola, soy ${name}.` : 'Hola.';
    const message = [greeting, `Me interesa saber más sobre ${product}.`, question].filter(Boolean).join('\n\n');
    const whatsapp = (form.dataset.whatsapp || '').replace(/\D/g, '');
    const email = (form.dataset.email || '').trim();

    if (whatsapp) {
      window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
      if (status) status.textContent = 'Se abrió WhatsApp con tu solicitud preparada.';
      return;
    }

    if (email) {
      window.location.href = `mailto:${email}?subject=${encodeURIComponent('Consulta por microgreens')}&body=${encodeURIComponent(message)}`;
      if (status) status.textContent = 'Se abrió tu aplicación de correo con la solicitud preparada.';
      return;
    }

    try {
      await navigator.clipboard.writeText(message);
      if (status) status.textContent = 'Mensaje copiado. Configura un canal de contacto para poder enviarlo.';
      if (button) button.textContent = 'Solicitud copiada';
    } catch {
      const questionField = form.querySelector('[name="question"]');
      if (questionField instanceof HTMLTextAreaElement) {
        questionField.value = message;
        questionField.focus();
        questionField.select();
      }
      if (status) status.textContent = 'El mensaje está seleccionado. Cópialo y envíalo cuando tengas un canal de contacto.';
    }
  });
}
