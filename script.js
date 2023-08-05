let searchForFullScreenButton = setInterval(findPlayer, 75);

function findPlayer() {
	const fullScreenButton = document.querySelector('[aria-label="Full screen"]');
	const exitFullScreenButton = document.querySelector(
		'[data-name="FullscreenExit"]'
	);
	const videoPlayer = document.querySelector('[data-uia="player"]');
	if (fullScreenButton) {
		attachClickListener(fullScreenButton, videoPlayer);
	}
	if (exitFullScreenButton) {
		attachClickListener(exitFullScreenButton, videoPlayer);
	}
}

function attachClickListener(fsbutton, playerElem) {
	fsbutton.addEventListener("click", () => {
		fsbutton.blur();
		playerElem.focus();
	});
}
