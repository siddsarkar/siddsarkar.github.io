let toggleBtn = document.getElementById('theme-toggle')

;(function () {
	var storageKey = 'dark'
	var classNameDark = 'dark'
	var classNameLight = 'light'
	var d = document.querySelector('body')
	//set class on html doc
	function setClassOnDocumentBody(dark) {
		d.classList.add(dark ? classNameDark : classNameLight)
		d.classList.remove(dark ? classNameLight : classNameDark)
	}
	//media query
	var preferDarkQuery = '(prefers-color-scheme: dark)'
	var mql = window.matchMedia(preferDarkQuery)
	var supportsColorSchemeQuery = mql.media === preferDarkQuery
	//log media query result
	console.log(
		'[Initialization] supportsColorSchemeQuery:%s and prefersDark:%s',
		supportsColorSchemeQuery,
		mql.matches
	)

	//local storage
	var localStorageTheme = null
	try {
		localStorageTheme = localStorage.getItem(storageKey)
	} catch (err) {}
	var localStorageExists = localStorageTheme !== null
	//log local storage result
	console.log(
		'[Initialization] localStorageExists:%s and localStorageDark:%s',
		localStorageExists,
		JSON.parse(localStorageTheme)
	)
	// if localStorage Exists update the value of localStorageTheme
	if (localStorageExists) {
		localStorageTheme = JSON.parse(localStorageTheme)
	}
	if (localStorageExists) {
		setClassOnDocumentBody(localStorageTheme)
		toggleBtn.checked = localStorageTheme
		console.log('Setting theme from Local Storage')
	} else if (supportsColorSchemeQuery) {
		setClassOnDocumentBody(mql.matches) //added to remove flicker
		toggleBtn.checked = mql.matches
		console.log('Setting theme from Media Query')
		localStorage.setItem(storageKey, mql.matches)
	} else {
		var isDarkMode = d.classList.contains(classNameDark)
		localStorage.setItem(storageKey, JSON.stringify(isDarkMode))
		console.log('Setting theme from class')
	}
})()

document.onreadystatechange = function () {
	if (document.readyState == 'complete') {
		setTimeout(() => {
			const ele = document.getElementById('root')
			ele.classList.remove('loading-screen')
		}, 1000)
	}
}

function toggleTheme() {
	if (document.body.classList.contains('dark')) {
		localStorage.setItem('dark', false)
	} else {
		localStorage.setItem('dark', true)
	}
	document.body.classList.toggle('dark')
}
