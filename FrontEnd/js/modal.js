function generateHTMLModal() {
    const modal = document.createElement('modal');
    modal.classList.add('modal');
    modal.classList.add('ishidden');
    modal.setAttribute('id', 'modal');

    const modalBackground = document.createElement('div');
    modalBackground.classList.add('modal-background');
    modalBackground.addEventListener('click', closeModal);

    const modalWrapper = document.createElement('div');
    modalWrapper.classList.add('modal-wrapper');
    modalWrapper.innerHTML = `
        <div class="modal-header" id="modal-header"></div>
        <div class="modal-content" id="modal-content"></div>
        <div class="modal-footer" id="modal-footer"></div>
    `;
    const closeBtn = document.createElement('button');
    closeBtn.classList.add('modal-exit');
    closeBtn.setAttribute('type', 'button');
    closeBtn.innerHTML = '&Cross;';
    closeBtn.addEventListener('click', closeModal);

    modalWrapper.appendChild(closeBtn);
    modal.appendChild(modalBackground);
    modal.appendChild(modalWrapper);
    document.body.appendChild(modal);
}

function setHeader(element) {
    const modalheader = document.getElementById('modal-header');
    modalheader.replaceChildren(element);
}

function setContent(element) {
    const modalContent = document.getElementById('modal-content');
    modalContent.replaceChildren(element);
}

function setFooter(element) {
    const modalFooter = document.getElementById('modal-footer');
    modalFooter.replaceChildren(element);
}

function openModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('ishidden');
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.add('ishidden');
}

export default {
    generateHTMLModal,
    setFooter,
    setHeader,
    setContent,
    openModal,
};
