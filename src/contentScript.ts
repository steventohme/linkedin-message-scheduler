function addCustomButtons() {
	const sendButtons = document.querySelectorAll(
		"button.msg-form__send-button.artdeco-button.artdeco-button--1",
	);

	for (const sendButton of Array.from(sendButtons)) {
		if (
			sendButton.parentElement &&
			!sendButton.parentElement.querySelector(".my-custom-button")
		) {
			const customButton = document.createElement("button");
			customButton.className = "my-custom-button";
			customButton.textContent = "Custom Action";
			customButton.style.marginLeft = "8px";

			customButton.addEventListener("click", () => {
				console.log("Custom button clicked!");
			});

			sendButton.parentElement.insertBefore(
				customButton,
				sendButton.nextSibling,
			);
		}
	}
}

const observer = new MutationObserver(() => {
	addCustomButtons();
});

observer.observe(document.body, { childList: true, subtree: true });

addCustomButtons();
