// ==UserScript==
// @name            Cycle Scroll Tabs (for 72 unbranded)
// @include         main
// @startup         UC.enterSelects.exec(win);
// @shutdown        UC.enterSelects.destroy();
// @author          vallek
// @onlyonce
// ==/UserScript==

let chrome = document.querySelector('window');
let tabbar = chrome.querySelector('#TabsToolbar');

tabbar.addEventListener('mouseenter', detect);
function detect(evt) {
	tabbar.addEventListener('wheel', scroll);
	function scroll(event) {
		let currentTab = tabbar.querySelector('.tabbrowser-tab[selected="true"]');
		if (event.deltaY < 0) {
			let prevTab = currentTab.previousElementSibling;
			if (prevTab != null) {
				let prevClass =  prevTab.classList.value;
				if (prevClass != 'tabbrowser-tab') {
					let lastTab = tabbar.querySelector('.tabbrowser-tab:last-of-type');
					lastTab.click();
				}
				else {
					prevTab.click();
				}
			}
			else {
				let lastTab = tabbar.querySelector('.tabbrowser-tab:last-of-type');
				lastTab.click();
			}
		}
		else {
			let nextTab = currentTab.nextElementSibling;
			let nextClass =  nextTab.classList.value;
			if (nextClass != 'tabbrowser-tab') {
				let firstTab = tabbar.querySelector('.tabbrowser-tab:first-of-type');
				firstTab.click();
			}
			else {
				nextTab.click();
			}
		}  
		event.preventDefault();
	}
	tabbar.removeEventListener('mouseenter', detect);
	evt.preventDefault();
}
