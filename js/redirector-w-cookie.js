// Count the number of URLs in list.
		var groups = redirectURLs.urls.length;

		// Randomize number and get the corresponding index for the URL in list.
		var gotoUrl = redirectURLs.urls[getRandomNumber(groups)].url

		// Perform redirection.
		if (window.location.search == "?debug") {
			// Debug mode: If user supplies a ?debug querystring,
			// then only show the redirect URL, but don't actually redirect.
			document.write("Redirect URL: " + gotoUrl);
		} else {
			// Redirect the user to the new URL.
			document.location = gotoUrl;
		}

		// Perform randomization and save it to a cookie.
		function getRandomNumber(Groups) {
			// Has cookie been set?
			var rndIndex = null;
			if (getCookie() != "") {
				// Yes, get randomization from cookie.
				rndIndex = getCookie()
			} else {
				// No, set random value to cookie.
				rndIndex = Math.floor((Math.random() * Groups));
				setCookie(rndIndex, 30) // Set cookie for 30 days.
			}
			return rndIndex
		}

		// Set cookie with randomization value.
		function setCookie(CookieValue, DaysUntilExpire) {
			var d = new Date();
			d.setTime(d.getTime() + (DaysUntilExpire * 24 * 60 * 60 * 1000));
			document.cookie = "rnd=" + CookieValue + ";expires=" + d.toUTCString();
		}

		// Get cookie with randomization value. Return empty string if not set.
		function getCookie() {
			var ca = document.cookie.split(';');
			for(var i = 0; i < ca.length; i++) {
				var c = ca[i];
				while (c.charAt(0) == ' ') c = c.substring(1);
				if (c.indexOf("rnd=") == 0) return c.substring(4, c.length);
			}
			return "";
		}
