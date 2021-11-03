export const resizeContent = (selector, mobileWidth = 576, isPlugin, desktopAction = null, mobileAction = null) => {
	if (!isPlugin) {
		// actions with selector
		if (window.innerWidth > mobileWidth) {
			desktopAction();
		} else {
			mobileAction();
		}
	} else {
		if ((window.innerWidth <= mobileWidth) && selector.dataset.pluginActivated == 'false') {
			mobileAction();
			selector.dataset.pluginActivated = 'true';
		}

		if (window.innerWidth > mobileWidth) {
			desktopAction();
			selector.dataset.pluginActivated = 'false';
		}
	}
}
